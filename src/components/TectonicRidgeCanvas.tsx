import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type CrustEpoch = 'holocene' | 'jurassic' | 'hadean';

interface TectonicRidgeCanvasProps {
  /** Depth slice level from 0 (surface) to 1 (deep magma mantle) */
  digDepth: number;
  /** Active geological epoch filter */
  epoch: CrustEpoch;
}

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vRidgeNoise;
  varying float vCrevice;
  varying float vTopDist;
  varying float vBotDist;

  uniform float uTime;
  uniform float uDigDepth;
  uniform vec2 uPointer;

  // 2D Simplex-style hash & value noise
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Multi-octave ridged multifractal noise for sharp volcanic rock facets
  float ridgedFbm(vec2 p) {
    float total = 0.0;
    float amp = 0.52;
    float freq = 1.0;
    float prev = 1.0;
    for (int i = 0; i < 6; i++) {
      float n = 1.0 - abs(noise(p * freq) * 2.0 - 1.0);
      n = n * n;
      total += n * amp * prev;
      prev = n;
      freq *= 2.12;
      amp *= 0.48;
    }
    return total;
  }

  // Evaluates the diagonal ridge silhouette (top & bottom bounds in world Y)
  void getSilhouette(float x, out float yTop, out float yBot) {
    // Normalized horizontal coordinate u in [0, 1] across [-8.5, 8.5]
    float u = clamp((x + 8.5) / 17.0, 0.0, 1.0);

    // Top ridge profile matching mythos_01.jpg & m_intro_04.jpg:
    // Left mossy peak at u=0.17, valley at u=0.30, central high peak under "tales of time" at u=0.56,
    // saddle at u=0.70, high right peak at u=0.87
    float leftMound = 1.15 * exp(-pow((u - 0.17) / 0.085, 2.0));
    float centerPeak = 2.05 * exp(-pow((u - 0.56) / 0.135, 2.0));
    float rightPeak = 2.45 * exp(-pow((u - 0.87) / 0.13, 2.0));
    float baseSlope = mix(-2.25, 0.25, pow(u, 0.92));

    yTop = baseSlope + leftMound + centerPeak + rightPeak;

    // Bottom cliff cut profile:
    // Stays below the bottom of viewport on the left (u < 0.46),
    // then rises sharply to form the glowing magma under-cliff on the center-right (u > 0.52)
    float rightHollow = smoothstep(0.42, 0.65, u);
    float farRightArch = 0.42 * exp(-pow((u - 0.78) / 0.12, 2.0));
    yBot = mix(-4.5, -1.18, rightHollow) + farRightArch;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    float yTop;
    float yBot;
    getSilhouette(pos.x, yTop, yBot);

    // Add craggy organic noise to top and bottom boundaries
    float edgeNoiseTop = (noise(vec2(pos.x * 0.85, 1.4)) - 0.5) * 0.52
                       + (noise(vec2(pos.x * 2.3, 4.1)) - 0.5) * 0.22;
    float edgeNoiseBot = (noise(vec2(pos.x * 0.95, 7.2)) - 0.5) * 0.48
                       + (noise(vec2(pos.x * 2.6, 3.7)) - 0.5) * 0.18;

    yTop += edgeNoiseTop;
    yBot += edgeNoiseBot;

    vTopDist = yTop - pos.y;
    vBotDist = pos.y - yBot;

    // Compute multi-scale ridged rock displacement
    vec2 rockCoord = pos.xy * 0.58 + vec2(0.0, uDigDepth * 0.6);
    float ridge = ridgedFbm(rockCoord);
    float fineCrag = ridgedFbm(pos.xy * 1.85 + vec2(2.4, -1.3));
    float crevicePattern = ridgedFbm(pos.xy * 1.15 - vec2(1.7, 3.1));

    // Taper displacement near the top & bottom silhouettes so the cliff edges look sculpted in 3D
    float insideMask = smoothstep(-0.25, 0.45, vTopDist) * smoothstep(-0.25, 0.45, vBotDist);

    float zDisplace = (ridge * 1.45 + fineCrag * 0.42) * insideMask;
    pos.z += zDisplace;

    // Compute finite-difference normal for sharp faceted rock lighting
    float eps = 0.06;
    float rX = ridgedFbm((pos.xy + vec2(eps, 0.0)) * 0.58) * 1.45
             + ridgedFbm((pos.xy + vec2(eps, 0.0)) * 1.85 + vec2(2.4, -1.3)) * 0.42;
    float rY = ridgedFbm((pos.xy + vec2(0.0, eps)) * 0.58) * 1.45
             + ridgedFbm((pos.xy + vec2(0.0, eps)) * 1.85 + vec2(2.4, -1.3)) * 0.42;
    vec3 computedNormal = normalize(vec3((zDisplace - rX) / eps, (zDisplace - rY) / eps, 1.0));

    vNormal = computedNormal;
    vRidgeNoise = ridge;
    vCrevice = crevicePattern;

    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vRidgeNoise;
  varying float vCrevice;
  varying float vTopDist;
  varying float vBotDist;

  uniform float uTime;
  uniform float uDigDepth;
  uniform float uEpochMode; // 0 = holocene (moss + magma), 1 = jurassic, 2 = hadean (intense magma)
  uniform vec2 uPointer;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  void main() {
    // Discard pixels outside the sculpted diagonal mountain ridge silhouette
    if (vTopDist < 0.0 || vBotDist < 0.0) {
      discard;
    }

    vec3 N = normalize(vNormal);
    float micro = noise(vWorldPos.xy * 14.0) * 0.5 + noise(vWorldPos.xy * 34.0) * 0.5;

    // Directional top-left key light + warm magma under-light from bottom-right
    vec3 keyDir = normalize(vec3(-0.45, 0.72, 0.65));
    vec3 rimDir = normalize(vec3(0.35, -0.82, 0.42));

    float diffKey = max(dot(N, keyDir), 0.0);
    float diffRim = max(dot(N, rimDir), 0.0);

    // Base dark basalt / obsidian rock color with subtle strata striations
    float strata = sin(vWorldPos.y * 8.5 + vRidgeNoise * 5.0 + vWorldPos.x * 1.4) * 0.5 + 0.5;
    vec3 darkBasalt = vec3(0.045, 0.042, 0.040);
    vec3 warmSlate = vec3(0.16, 0.135, 0.115);
    vec3 rockColor = mix(darkBasalt, warmSlate, diffKey * 0.75 + micro * 0.22 + strata * 0.08);

    // Specular rock facet highlight along top ridges
    float spec = pow(max(dot(reflect(-keyDir, N), vec3(0.0, 0.0, 1.0)), 0.0), 18.0);
    rockColor += vec3(0.22, 0.20, 0.18) * spec * (0.4 + 0.6 * smoothstep(0.5, 0.0, vTopDist));

    // =========================================================
    // LUSH ALPINE MOSS & LAVENDER WILDFLOWERS (Upper-left & pointer reveal, matching m_intro_04.jpg)
    // =========================================================
    float cursorDist = length(vWorldPos.xy - uPointer);
    float cursorReveal = smoothstep(2.85, 0.45, cursorDist);

    // Natural alpine moss zone on left/center-left upper slopes (x in [-8.0, -0.3])
    float leftMossRegion = smoothstep(0.2, -2.6, vWorldPos.x) * smoothstep(2.2, 0.08, vTopDist);
    float mossStrength = clamp(leftMossRegion * 0.85 + cursorReveal * 0.75 * smoothstep(2.4, 0.0, vTopDist), 0.0, 1.0);

    if (uEpochMode > 1.5) {
      // Hadean mode minimizes moss to emphasize molten crust
      mossStrength *= 0.15;
    } else if (uEpochMode > 0.5) {
      // Jurassic mode expands lush fern/moss coverage
      mossStrength = clamp(mossStrength * 1.35, 0.0, 1.0);
    }

    float mossPatch = smoothstep(0.32, 0.68, noise(vWorldPos.xy * 3.8 + vec2(1.2, 0.7)));
    vec3 oliveMoss = mix(vec3(0.16, 0.23, 0.09), vec3(0.34, 0.43, 0.18), diffKey * 0.8 + micro * 0.3);
    rockColor = mix(rockColor, oliveMoss, mossStrength * mossPatch * (0.45 + 0.55 * max(N.y, 0.2)));

    // Tiny lavender/violet & white micro-wildflowers clustered on the mossy slope (exact match to m_intro_04.jpg)
    float flowerNoise = hash(floor(vWorldPos.xy * 26.0));
    float flowerCluster = smoothstep(0.45, 0.75, noise(vWorldPos.xy * 2.2 + vec2(3.1, -0.8)));
    if (mossStrength * flowerCluster > 0.28 && flowerNoise > 0.915) {
      vec3 flowerColor = flowerNoise > 0.96
        ? vec3(0.95, 0.94, 0.98) // crisp white alpine blossom
        : vec3(0.68, 0.54, 0.88); // soft lavender-violet wildflower
      rockColor = mix(rockColor, flowerColor, 0.85);
    }

    // =========================================================
    // MOLTEN MAGMA VEINS & LOWER CLIFF EMBER GLOW (Matching mythos_01.jpg & m_intro_04.jpg)
    // =========================================================
    // 1. Lower cliff edge ember glow running along the bottom boundary & diagonal right overhang
    float botEdgeGlow = exp(-vBotDist * 2.6) * (0.45 + 0.55 * noise(vWorldPos.xy * 2.5));

    // 2. Deep branching magma veins inside tectonic crevices on the center, lower-left, and right
    float veinMask = smoothstep(0.42, 0.08, abs(vCrevice - 0.34))
                   * smoothstep(0.35, 2.2, vTopDist);

    // Diagonal main magma artery running from bottom-center (-1.5, -3.8) up toward (2.2, 0.3) and right cliff
    float distToFault1 = abs((vWorldPos.y + 1.1) - 0.78 * (vWorldPos.x - 0.4) + (noise(vWorldPos.xy * 1.8) - 0.5) * 0.65);
    float mainFaultVein = exp(-distToFault1 * 3.2) * smoothstep(-3.2, 1.5, vWorldPos.x);

    // Secondary glowing ridge along upper-center peak right under "hold / time"
    float upperRightEmber = exp(-vTopDist * 3.8) * smoothstep(0.6, 2.8, vWorldPos.x) * smoothstep(4.2, 1.8, vWorldPos.x) * 0.65;

    float pulse = 0.88 + 0.12 * sin(uTime * 2.2 + vWorldPos.x * 1.5);
    float digBoost = 1.0 + uDigDepth * 1.45 + (uEpochMode > 1.5 ? 0.75 : 0.0);

    float totalMagma = clamp(
      (botEdgeGlow * 1.15 + mainFaultVein * 0.95 + veinMask * 0.55 * diffRim + upperRightEmber) * pulse * digBoost,
      0.0,
      1.35
    );

    // Magma color ramp: deep crimson -> burnt orange -> incandescent gold core
    vec3 emberRed = vec3(0.68, 0.14, 0.03);
    vec3 moltenOrange = vec3(0.96, 0.41, 0.11);
    vec3 coreGold = vec3(1.0, 0.76, 0.32);

    vec3 magmaRGB = mix(emberRed, moltenOrange, smoothstep(0.15, 0.65, totalMagma));
    magmaRGB = mix(magmaRGB, coreGold, smoothstep(0.65, 1.15, totalMagma));

    // Add warm under-lighting on downward-facing rock facets near the lower edge
    float underWarmth = diffRim * exp(-vBotDist * 1.15) * (0.55 + 0.45 * uDigDepth);
    rockColor += vec3(0.62, 0.21, 0.05) * underWarmth;

    // Blend glowing magma veins into the rock
    vec3 finalColor = mix(rockColor, magmaRGB, clamp(totalMagma, 0.0, 1.0));

    // Interactive cursor warm rim highlight
    finalColor += vec3(0.35, 0.22, 0.12) * cursorReveal * diffKey * 0.45;

    // Crisp anti-aliased edge fade at the silhouette boundary against pure #000000 black
    float alphaTop = smoothstep(0.0, 0.07, vTopDist);
    float alphaBot = smoothstep(0.0, 0.07, vBotDist);
    float alpha = alphaTop * alphaBot;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export const TectonicRidgeCanvas: React.FC<TectonicRidgeCanvasProps> = ({
  digDepth,
  epoch,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const digDepthRef = useRef(digDepth);
  const epochRef = useRef<CrustEpoch>(epoch);

  useEffect(() => {
    digDepthRef.current = digDepth;
  }, [digDepth]);

  useEffect(() => {
    epochRef.current = epoch;
  }, [epoch]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uDigDepth: { value: digDepthRef.current },
      uEpochMode: { value: 0 },
      uPointer: { value: new THREE.Vector2(-3.2, -1.2) },
    };

    // High-resolution 320x180 displaced tectonic ridge mesh
    const ridgeGeo = new THREE.PlaneGeometry(17.5, 9.2, 320, 180);
    const ridgeMat = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthWrite: true,
    });

    const ridgeMesh = new THREE.Mesh(ridgeGeo, ridgeMat);
    scene.add(ridgeMesh);

    // Subtle rising volcanic ember particles along the magma fault line
    const emberCount = 55;
    const emberPositions = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount; i++) {
      emberPositions[i * 3] = (i / emberCount) * 14 - 6.5;
      emberPositions[i * 3 + 1] = -3.2 + (i % 7) * 0.45;
      emberPositions[i * 3 + 2] = 0.6 + (i % 5) * 0.25;
    }
    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(emberPositions, 3)
    );
    const emberMat = new THREE.PointsMaterial({
      color: 0xff6b24,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const emberPoints = new THREE.Points(emberGeo, emberMat);
    scene.add(emberPoints);

    // Pointer tracking mapped to world coordinates on the ridge
    const pointerTarget = new THREE.Vector2(-3.2, -1.2);
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      pointerTarget.set(nx * 7.8, ny * 4.2);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      uniforms.uTime.value = elapsed;
      uniforms.uDigDepth.value +=
        (digDepthRef.current - uniforms.uDigDepth.value) * 0.08;

      const targetEpochVal =
        epochRef.current === 'holocene'
          ? 0
          : epochRef.current === 'jurassic'
          ? 1
          : 2;
      uniforms.uEpochMode.value +=
        (targetEpochVal - uniforms.uEpochMode.value) * 0.08;

      uniforms.uPointer.value.lerp(pointerTarget, 0.08);

      // Gentle 3D camera parallax so the rock mass feels tangible and monumental
      ridgeMesh.rotation.y = (uniforms.uPointer.value.x / 7.8) * 0.045;
      ridgeMesh.rotation.x = -(uniforms.uPointer.value.y / 4.2) * 0.035;

      // Animate floating magma embers
      const posAttr = emberGeo.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < emberCount; i++) {
        let py = posAttr.getY(i) + 0.004 * (1 + digDepthRef.current * 1.5);
        if (py > 1.2) py = -3.6;
        posAttr.setY(i, py);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      ridgeGeo.dispose();
      ridgeMat.dispose();
      emberGeo.dispose();
      emberMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};
