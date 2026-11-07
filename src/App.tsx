import React, { useState } from 'react';
import {
  Layers,
  Flame,
  Compass,
  Mountain,
  X,
  Check,
  Sparkles,
  Sliders,
} from 'lucide-react';
import { TectonicRidgeCanvas, CrustEpoch } from './components/TectonicRidgeCanvas';

type NavSectionId = 'Course' | 'Field Guides' | 'Geology' | 'Plans' | 'Live Tour';

interface StrataLayerSpec {
  id: string;
  depthRange: string;
  title: string;
  era: string;
  composition: string;
  description: string;
  depthValue: number;
  epoch: CrustEpoch;
}

const STRATA_LAYERS: StrataLayerSpec[] = [
  {
    id: 'alpine-humus',
    depthRange: '0 – 120 m',
    title: 'Alpine Tundra & Basalt Outcrop',
    era: 'Holocene Epoch',
    composition: 'Bryophyte moss carpet, volcanic tuft, micro-flora',
    description:
      'Weathered sub-alpine volcanic shelves colonized by resilient olive mosses and high-altitude lavender wildflowers.',
    depthValue: 0.0,
    epoch: 'holocene',
  },
  {
    id: 'metamorphic-schist',
    depthRange: '1.2 – 14 km',
    title: 'Metamorphic Folding & Fossil Beds',
    era: 'Jurassic – Paleozoic',
    composition: 'Banded gneiss, compressed marine limestone, ash seams',
    description:
      'Ancient seabeds compressed under continental collision, preserving pelagic fossils alongside bands of volcanic ash.',
    depthValue: 0.48,
    epoch: 'jurassic',
  },
  {
    id: 'magma-conduit',
    depthRange: '18 – 45 km',
    title: 'Lithospheric Fault & Magma Veins',
    era: 'Hadean Deep Crust',
    composition: 'Molten silicate intrusions, obsidian dikes, olivine mantle',
    description:
      'Incandescent magma arteries surging through deep tectonic fractures, radiating thermal energy across the lower crust.',
    depthValue: 0.95,
    epoch: 'hadean',
  },
];

const NAV_CONTENT: Record<
  NavSectionId,
  {
    subtitle: string;
    heading: string;
    summary: string;
    items: { title: string; meta: string; detail: string }[];
  }
> = {
  Course: {
    subtitle: 'Interactive Stratigraphy Curriculum',
    heading: 'Read the Earth in Three Dimensions',
    summary:
      'Eight hands-on modules combining real-time 3D crustal cross-sections, thin-section petrography, and tectonic reconstruction.',
    items: [
      {
        title: 'Module 01 — Sedimentary Chronicles',
        meta: '4.5 Hours • Interactive 3D Core',
        detail: 'Trace marine transgressions, volcanic ashfall horizons, and unconformities.',
      },
      {
        title: 'Module 02 — Metamorphic Pressure & Heat',
        meta: '6.0 Hours • Shader Simulation',
        detail: 'Observe foliation, fault shearing, and mineral recrystallization under tectonic stress.',
      },
      {
        title: 'Module 03 — Magmatic Intrusions & Veins',
        meta: '5.5 Hours • Thermal Mapping',
        detail: 'Follow basaltic dikes and hydrothermal veins from mantle plumes to surface ridges.',
      },
    ],
  },
  'Field Guides': {
    subtitle: 'Geospatial Expedition Atlases',
    heading: 'Verified Field Sites & Outcrop Scans',
    summary:
      'High-resolution photogrammetric ridge models with millimeter-accurate mineral and fossil annotations.',
    items: [
      {
        title: 'Icelandic Rift Basalt & Moss Escarpment',
        meta: '64.1466° N, 21.9426° W',
        detail: 'Columnar flood basalts crowned by sub-arctic bryophytes and active fissure glow.',
      },
      {
        title: 'Dolomites Permian-Triassic Boundary',
        meta: '46.4102° N, 11.8440° E',
        detail: 'Carbonate reef platforms interbedded with ancient volcanic tuff layers.',
      },
      {
        title: 'Hawaiian Shield Lava Tubes & Skylights',
        meta: '19.4069° N, 155.2834° W',
        detail: 'Active pahoehoe crust channels with incandescent sub-surface magma conduits.',
      },
    ],
  },
  Geology: {
    subtitle: 'Real-Time Crustal Slicer',
    heading: 'Tectonic Ridge & Magma Telemetry',
    summary:
      'Inspect how surface alpine flora, folded metamorphic rock, and deep magmatic fractures coexist across vertical depth.',
    items: [
      {
        title: 'Ridged Multifractal Relief',
        meta: '6-Octave Procedural Displacement',
        detail: 'Simulates sharp obsidian and basalt cleavage planes with directional normal lighting.',
      },
      {
        title: 'Bioluminescent & Thermal Vein Mapping',
        meta: 'Dynamic Shader Channels',
        detail: 'Real-time molten silicate glow along lower tectonic overhangs and fault crevices.',
      },
      {
        title: 'Micro-Biome Cursor Illumination',
        meta: 'Interactive Surface Probe',
        detail: 'Move your cursor across the left slope to illuminate alpine moss and wildflowers.',
      },
    ],
  },
  Plans: {
    subtitle: 'Access Tiers for Researchers & Studios',
    heading: 'Explore Deep Time Without Limits',
    summary:
      'Choose a plan to unlock full-resolution LiDAR strata downloads, classroom licenses, and live guided tours.',
    items: [
      {
        title: 'Field Explorer',
        meta: '$18 / month',
        detail: 'Full interactive 3D crust maps, 40+ annotated outcrop guides, and depth slicing.',
      },
      {
        title: 'Academic & Research Lab',
        meta: '$49 / month',
        detail: 'Raw DEM/mesh exports, custom stratigraphic column builder, and team seats.',
      },
      {
        title: 'Institution License',
        meta: 'Custom Deployment',
        detail: 'Unlimited university department access with dedicated WebGL shader workshops.',
      },
    ],
  },
  'Live Tour': {
    subtitle: 'Guided Real-Time Geological Broadcasts',
    heading: 'Walk the Fault Line with Structural Geologists',
    summary:
      'Join live multi-user 3D viewport sessions where geologists slice through active volcanic ridges and answer questions in real time.',
    items: [
      {
        title: 'Sub-Crustal Magma Pathways',
        meta: 'Daily Session • 18:00 UTC',
        detail: 'Live cross-section tour of basaltic dike swarms and thermal vein networks.',
      },
      {
        title: 'Reading Alpine Unconformities',
        meta: 'Weekly Workshop • Thursdays',
        detail: 'How glacial erosion exposes 250-million-year-old seabed strata at high altitude.',
      },
      {
        title: 'Fossil Horizons in Deep Time',
        meta: 'Interactive Q&A • Saturdays',
        detail: 'Pinpointing mass-extinction markers and volcanic ash beds in 3D.',
      },
    ],
  },
};

export function App() {
  const [digDepth, setDigDepth] = useState(0);
  const [epoch, setEpoch] = useState<CrustEpoch>('holocene');
  const [isDigDrawerOpen, setIsDigDrawerOpen] = useState(false);
  const [activeNavModal, setActiveNavModal] = useState<NavSectionId | null>(null);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpSubmitted, setSignUpSubmitted] = useState(false);

  const handleStartDigging = () => {
    // Advance depth slice & open the interactive strata inspector bar
    const nextDepth = digDepth < 0.45 ? 0.55 : digDepth < 0.85 ? 0.95 : 0.0;
    setDigDepth(nextDepth);
    setEpoch(
      nextDepth > 0.7 ? 'hadean' : nextDepth > 0.3 ? 'jurassic' : 'holocene'
    );
    setIsDigDrawerOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden select-none">
      {/* =========================================================
          CENTERPIECE REAL-TIME THREE.JS 3D TECTONIC ROCK & MAGMA RIDGE
      ========================================================= */}
      <TectonicRidgeCanvas digDepth={digDepth} epoch={epoch} />

      {/* =========================================================
          TOP HEADER (Exact match to mythos_01.jpg & m_intro_04.jpg)
      ========================================================= */}
      <header className="relative z-30 w-full px-6 sm:px-10 pt-5 pb-3 flex items-center justify-between">
        {/* Top-Left: Stacked Double-Parallelogram Strata Icon + Italic Serif "Lithos" */}
        <button
          onClick={() => {
            setDigDepth(0);
            setEpoch('holocene');
            setIsDigDrawerOpen(false);
            setActiveNavModal(null);
          }}
          className="flex items-center gap-2.5 text-white focus:outline-none cursor-pointer group"
          aria-label="Lithos Home"
        >
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            {/* Top angled rock stratum */}
            <path d="M2 5.5L9.5 1.5L18.5 6.8L11 10.8L2 5.5Z" fill="white" />
            {/* Bottom offset rock stratum */}
            <path d="M5.5 14.5L13 10.5L22 15.8L14.5 19.8L5.5 14.5Z" fill="white" />
          </svg>
          <span className="font-editorial-serif italic text-[26px] sm:text-[28px] tracking-tight leading-none">
            Lithos
          </span>
        </button>

        {/* Top-Center: Dark Translucent Pill Navbar */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 bg-[#1B1B1E]/90 border border-white/15 rounded-full px-8 py-3 text-[12px] font-medium text-white/85 backdrop-blur-md shadow-xl"
        >
          {(
            ['Course', 'Field Guides', 'Geology', 'Plans', 'Live Tour'] as NavSectionId[]
          ).map((item) => (
            <button
              key={item}
              onClick={() => setActiveNavModal(item)}
              className={`transition hover:text-white cursor-pointer ${
                activeNavModal === item ? 'text-[#D95B26] font-semibold' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Top-Right: Solid White Pill Button "Sign Up" */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsDigDrawerOpen((prev) => !prev)}
            className="sm:inline-flex hidden items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white/85 px-3.5 py-2 rounded-full text-[11px] font-medium transition cursor-pointer"
            title="Toggle Crustal Depth Slicer"
          >
            <Sliders className="w-3 h-3 text-[#D95B26]" />
            <span>Depth: {Math.round(digDepth * 45)} km</span>
          </button>

          <button
            onClick={() => {
              setSignUpSubmitted(false);
              setIsSignUpOpen(true);
            }}
            className="bg-white hover:bg-neutral-200 text-black px-5 py-2.5 rounded-full text-xs font-semibold transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* =========================================================
          CENTER EDITORIAL HEADLINE (Exact match to mythos_01.jpg & m_intro_04.jpg)
      ========================================================= */}
      <main className="relative z-20 flex flex-col justify-between min-h-[calc(100vh-84px)] px-6 sm:px-10 pb-8 sm:pb-10 pointer-events-none">
        {/* Top-Center Stacked Headline */}
        <div className="w-full flex flex-col items-center text-center mt-5 sm:mt-8">
          <h1 className="select-none">
            <span className="block font-editorial-serif italic font-normal text-6xl sm:text-[86px] md:text-[96px] tracking-[-0.01em] leading-[0.92] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">
              Layers hold
            </span>
            <span className="block font-extrabold text-5xl sm:text-[78px] md:text-[86px] tracking-[-0.035em] leading-[0.95] text-white -mt-1 sm:-mt-2 drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)]">
              tales of time
            </span>
          </h1>
        </div>

        {/* Bottom-Left & Bottom-Right Editorial Copy + Burnt-Orange CTA */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-auto pt-48">
          {/* Bottom-Left Paragraph sitting over the mossy left rock slope */}
          <div className="max-w-[235px] pointer-events-auto">
            <p className="text-[12px] text-white/80 leading-[1.52] font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Every layer of sediment records a chapter of our planet, from
              ancient seabeds to drifting ash, layered across millions of years
              beneath us.
            </p>
          </div>

          {/* Bottom-Right Paragraph + Solid Burnt-Orange "Start Digging" Pill Button */}
          <div className="max-w-[245px] pointer-events-auto self-end sm:self-auto">
            <p className="text-[12px] text-white/85 leading-[1.52] font-normal">
              Our interactive maps let you peel back the crust to trace how
              stones, fossils, and deep time combine to shape the ground beneath
              your feet.
            </p>

            <button
              onClick={handleStartDigging}
              className="mt-4 bg-[#D95B26] hover:bg-[#EA6830] active:bg-[#C44E1D] text-white px-7 py-3 rounded-full text-xs font-semibold shadow-[0_10px_30px_rgba(217,91,38,0.45)] transition transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Start Digging
            </button>
          </div>
        </div>
      </main>

      {/* =========================================================
          INTERACTIVE STRATA DEPTH SLICER DRAWER (Triggered by "Start Digging")
      ========================================================= */}
      {isDigDrawerOpen && (
        <aside className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-3xl rounded-3xl bg-[#121215]/95 border border-white/15 p-5 sm:p-6 text-white shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 pb-3.5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-[#D95B26]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
                Interactive Crustal Cross-Section Slicer
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#D95B26] font-semibold">
                Excavation Depth: {(digDepth * 45).toFixed(1)} km
              </span>
              <button
                onClick={() => setIsDigDrawerOpen(false)}
                aria-label="Close Strata Slicer"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Continuous Depth Slider */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-[11px] text-white/60 w-20">Surface (0 km)</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={digDepth}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setDigDepth(val);
                if (val < 0.33) setEpoch('holocene');
                else if (val < 0.68) setEpoch('jurassic');
                else setEpoch('hadean');
              }}
              className="flex-1 accent-[#D95B26] cursor-pointer"
            />
            <span className="text-[11px] text-[#FF6B1A] w-24 text-right">
              Mantle (45 km)
            </span>
          </div>

          {/* 3 Clickable Geological Strata Horizons */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {STRATA_LAYERS.map((layer) => {
              const isSelected = epoch === layer.epoch;
              return (
                <button
                  key={layer.id}
                  onClick={() => {
                    setEpoch(layer.epoch);
                    setDigDepth(layer.depthValue);
                  }}
                  className={`text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#D95B26]/15 border-[#D95B26] shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#D95B26] font-semibold">
                    <span>{layer.era}</span>
                    <span>{layer.depthRange}</span>
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">
                    {layer.title}
                  </div>
                  <p className="text-[11px] text-white/65 mt-1 leading-relaxed">
                    {layer.description}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>
      )}

      {/* =========================================================
          NAVBAR SECTION MODAL (Course, Field Guides, Geology, Plans, Live Tour)
      ========================================================= */}
      {activeNavModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-[#141418] border border-white/15 p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#D95B26] font-semibold">
                  {NAV_CONTENT[activeNavModal].subtitle}
                </div>
                <h2 className="font-editorial-serif italic text-3xl sm:text-4xl text-white mt-1">
                  {NAV_CONTENT[activeNavModal].heading}
                </h2>
              </div>
              <button
                onClick={() => setActiveNavModal(null)}
                aria-label="Close Modal"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-white/75 mt-4 leading-relaxed">
              {NAV_CONTENT[activeNavModal].summary}
            </p>

            <div className="mt-5 space-y-3">
              {NAV_CONTENT[activeNavModal].items.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {item.title}
                    </div>
                    <p className="text-[11px] text-white/65 mt-1">
                      {item.detail}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-[#D95B26] shrink-0 bg-[#D95B26]/10 border border-[#D95B26]/30 px-3 py-1 rounded-full">
                    {item.meta}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-[11px] text-white/60">
                <Layers className="w-3.5 h-3.5 text-[#D95B26]" />
                <span>Real-time 3D WebGL Stratigraphy Engine</span>
              </div>
              <button
                onClick={() => {
                  setActiveNavModal(null);
                  setIsDigDrawerOpen(true);
                }}
                className="bg-[#D95B26] hover:bg-[#EA6830] text-white px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
              >
                Launch 3D Crust Slicer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SIGN UP MODAL
      ========================================================= */}
      {isSignUpOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-[#141418] border border-white/15 p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4 text-[#D95B26]" />
                <h3 className="text-base font-semibold">
                  Join Lithos Geological Atlas
                </h3>
              </div>
              <button
                onClick={() => setIsSignUpOpen(false)}
                aria-label="Close Sign Up Modal"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {signUpSubmitted ? (
              <div className="py-6 text-center">
                <div className="w-11 h-11 rounded-full bg-[#D95B26]/20 border border-[#D95B26] text-[#D95B26] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold">
                  Field Pass Provisioned
                </div>
                <p className="text-xs text-white/65 mt-1">
                  Your interactive 3D stratigraphic workspace is ready.
                </p>
                <button
                  onClick={() => {
                    setIsSignUpOpen(false);
                    setIsDigDrawerOpen(true);
                  }}
                  className="mt-5 bg-[#D95B26] text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
                >
                  Start Digging Now
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (signUpEmail.trim().length > 3) {
                    setSignUpSubmitted(true);
                  }
                }}
                className="mt-4 space-y-4"
              >
                <p className="text-xs text-white/70 leading-relaxed">
                  Create your researcher account to save custom 3D crustal cross
                  sections, annotate fossil horizons, and join live geological
                  tours.
                </p>
                <div>
                  <label className="block text-[11px] text-white/70 mb-1.5 font-medium">
                    Research or Personal Email
                  </label>
                  <input
                    type="email"
                    required
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    placeholder="geologist@university.edu"
                    className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D95B26]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D95B26] hover:bg-[#EA6830] text-white py-3 rounded-full text-xs font-semibold transition cursor-pointer"
                >
                  Create Free Atlas Account
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
