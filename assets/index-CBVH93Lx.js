(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var qh={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function rM(){if(N0)return Ko;N0=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return Ko.Fragment=n,Ko.jsx=a,Ko.jsxs=a,Ko}var L0;function sM(){return L0||(L0=1,qh.exports=rM()),qh.exports}var Et=sM(),Yh={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function oM(){if(O0)return ie;O0=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(w){return w===null||typeof w!="object"?null:(w=M&&w[M]||w["@@iterator"],typeof w=="function"?w:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function P(w,Y,pt){this.props=w,this.context=Y,this.refs=x,this.updater=pt||A}P.prototype.isReactComponent={},P.prototype.setState=function(w,Y){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Y,"setState")},P.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function z(){}z.prototype=P.prototype;function U(w,Y,pt){this.props=w,this.context=Y,this.refs=x,this.updater=pt||A}var it=U.prototype=new z;it.constructor=U,y(it,P.prototype),it.isPureReactComponent=!0;var V=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(w,Y,pt){var ut=pt.ref;return{$$typeof:o,type:w,key:Y,ref:ut!==void 0?ut:null,props:pt}}function I(w,Y){return C(w.type,Y,w.props)}function ot(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function st(w){var Y={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(pt){return Y[pt]})}var gt=/\/+/g;function ht(w,Y){return typeof w=="object"&&w!==null&&w.key!=null?st(""+w.key):Y.toString(36)}function q(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(O,O):(w.status="pending",w.then(function(Y){w.status==="pending"&&(w.status="fulfilled",w.value=Y)},function(Y){w.status==="pending"&&(w.status="rejected",w.reason=Y)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function et(w,Y,pt,ut,bt){var wt=typeof w;(wt==="undefined"||wt==="boolean")&&(w=null);var It=!1;if(w===null)It=!0;else switch(wt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(w.$$typeof){case o:case n:It=!0;break;case _:return It=w._init,et(It(w._payload),Y,pt,ut,bt)}}if(It)return bt=bt(w),It=ut===""?"."+ht(w,0):ut,V(bt)?(pt="",It!=null&&(pt=It.replace(gt,"$&/")+"/"),et(bt,Y,pt,"",function(Ce){return Ce})):bt!=null&&(ot(bt)&&(bt=I(bt,pt+(bt.key==null||w&&w.key===bt.key?"":(""+bt.key).replace(gt,"$&/")+"/")+It)),Y.push(bt)),1;It=0;var Tt=ut===""?".":ut+":";if(V(w))for(var At=0;At<w.length;At++)ut=w[At],wt=Tt+ht(ut,At),It+=et(ut,Y,pt,wt,bt);else if(At=b(w),typeof At=="function")for(w=At.call(w),At=0;!(ut=w.next()).done;)ut=ut.value,wt=Tt+ht(ut,At++),It+=et(ut,Y,pt,wt,bt);else if(wt==="object"){if(typeof w.then=="function")return et(q(w),Y,pt,ut,bt);throw Y=String(w),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return It}function K(w,Y,pt){if(w==null)return w;var ut=[],bt=0;return et(w,ut,"","",function(wt){return Y.call(pt,wt,bt++)}),ut}function xt(w){if(w._status===-1){var Y=w._result,pt=Y();pt.then(function(ut){(w._status===0||w._status===-1)&&(w._status=1,w._result=ut,pt.status===void 0&&(pt.status="fulfilled",pt.value=ut))},function(ut){(w._status===0||w._status===-1)&&(w._status=2,w._result=ut,pt.status===void 0&&(pt.status="rejected",pt.reason=ut))}),w._status===-1&&(w._status=0,w._result=pt)}if(w._status===1)return w._result.default;throw w._result}var St=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Gt(w){var Y=F.T,pt={};pt.types=Y!==null?Y.types:null,F.T=pt;try{var ut=w(),bt=F.S;bt!==null&&bt(pt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(O,St)}catch(wt){St(wt)}finally{Y!==null&&pt.types!==null&&(Y.types=pt.types),F.T=Y}}function ne(w){var Y=F.T;if(Y!==null){var pt=Y.types;pt===null?Y.types=[w]:pt.indexOf(w)===-1&&pt.push(w)}else Gt(ne.bind(null,w))}var ye={map:K,forEach:function(w,Y,pt){K(w,function(){Y.apply(this,arguments)},pt)},count:function(w){var Y=0;return K(w,function(){Y++}),Y},toArray:function(w){return K(w,function(Y){return Y})||[]},only:function(w){if(!ot(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ie.Activity=g,ie.Children=ye,ie.Component=P,ie.Fragment=a,ie.Profiler=u,ie.PureComponent=U,ie.StrictMode=s,ie.Suspense=m,ie.ViewTransition=S,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ie.__COMPILER_RUNTIME={__proto__:null,c:function(w){return F.H.useMemoCache(w)}},ie.addTransitionType=ne,ie.cache=function(w){return function(){return w.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(w,Y,pt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ut=y({},w.props),bt=w.key;if(Y!=null)for(wt in Y.key!==void 0&&(bt=""+Y.key),Y)!D.call(Y,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&Y.ref===void 0||(ut[wt]=Y[wt]);var wt=arguments.length-2;if(wt===1)ut.children=pt;else if(1<wt){for(var It=Array(wt),Tt=0;Tt<wt;Tt++)It[Tt]=arguments[Tt+2];ut.children=It}return C(w.type,bt,ut)},ie.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},ie.createElement=function(w,Y,pt){var ut,bt={},wt=null;if(Y!=null)for(ut in Y.key!==void 0&&(wt=""+Y.key),Y)D.call(Y,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(bt[ut]=Y[ut]);var It=arguments.length-2;if(It===1)bt.children=pt;else if(1<It){for(var Tt=Array(It),At=0;At<It;At++)Tt[At]=arguments[At+2];bt.children=Tt}if(w&&w.defaultProps)for(ut in It=w.defaultProps,It)bt[ut]===void 0&&(bt[ut]=It[ut]);return C(w,wt,bt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(w){return{$$typeof:d,render:w}},ie.isValidElement=ot,ie.lazy=function(w){return{$$typeof:_,_payload:{_status:-1,_result:w},_init:xt}},ie.memo=function(w,Y){return{$$typeof:v,type:w,compare:Y===void 0?null:Y}},ie.startTransition=Gt,ie.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ie.use=function(w){return F.H.use(w)},ie.useActionState=function(w,Y,pt){return F.H.useActionState(w,Y,pt)},ie.useCallback=function(w,Y){return F.H.useCallback(w,Y)},ie.useContext=function(w){return F.H.useContext(w)},ie.useDebugValue=function(){},ie.useDeferredValue=function(w,Y){return F.H.useDeferredValue(w,Y)},ie.useEffect=function(w,Y){return F.H.useEffect(w,Y)},ie.useEffectEvent=function(w){return F.H.useEffectEvent(w)},ie.useId=function(){return F.H.useId()},ie.useImperativeHandle=function(w,Y,pt){return F.H.useImperativeHandle(w,Y,pt)},ie.useInsertionEffect=function(w,Y){return F.H.useInsertionEffect(w,Y)},ie.useLayoutEffect=function(w,Y){return F.H.useLayoutEffect(w,Y)},ie.useMemo=function(w,Y){return F.H.useMemo(w,Y)},ie.useOptimistic=function(w,Y){return F.H.useOptimistic(w,Y)},ie.useReducer=function(w,Y,pt){return F.H.useReducer(w,Y,pt)},ie.useRef=function(w){return F.H.useRef(w)},ie.useState=function(w){return F.H.useState(w)},ie.useSyncExternalStore=function(w,Y,pt){return F.H.useSyncExternalStore(w,Y,pt)},ie.useTransition=function(){return F.H.useTransition()},ie.version="19.3.1",ie}var z0;function gp(){return z0||(z0=1,Yh.exports=oM()),Yh.exports}var un=gp(),Wh={exports:{}},Qo={},jh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function lM(){return P0||(P0=1,(function(o){function n(q,et){var K=q.length;q.push(et);t:for(;0<K;){var xt=K-1>>>1,St=q[xt];if(0<u(St,et))q[xt]=et,q[K]=St,K=xt;else break t}}function a(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var et=q[0],K=q.pop();if(K!==et){q[0]=K;t:for(var xt=0,St=q.length,Gt=St>>>1;xt<Gt;){var ne=2*(xt+1)-1,ye=q[ne],w=ne+1,Y=q[w];if(0>u(ye,K))w<St&&0>u(Y,ye)?(q[xt]=Y,q[w]=K,xt=w):(q[xt]=ye,q[ne]=K,xt=ne);else if(w<St&&0>u(Y,K))q[xt]=Y,q[w]=K,xt=w;else break t}}return et}function u(q,et){var K=q.sortIndex-et.sortIndex;return K!==0?K:q.id-et.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],v=[],_=1,g=null,S=3,M=!1,b=!1,A=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function U(q){for(var et=a(v);et!==null;){if(et.callback===null)s(v);else if(et.startTime<=q)s(v),et.sortIndex=et.expirationTime,n(m,et);else break;et=a(v)}}function it(q){if(A=!1,U(q),!b)if(a(m)!==null)b=!0,V||(V=!0,ot());else{var et=a(v);et!==null&&ht(it,et.startTime-q)}}var V=!1,O=-1,F=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<F)}function I(){if(y=!1,V){var q=o.unstable_now();D=q;var et=!0;try{t:{b=!1,A&&(A=!1,P(O),O=-1),M=!0;var K=S;try{e:{for(U(q),g=a(m);g!==null&&!(g.expirationTime>q&&C());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,S=g.priorityLevel;var St=xt(g.expirationTime<=q);if(q=o.unstable_now(),typeof St=="function"){g.callback=St,U(q),et=!0;break e}g===a(m)&&s(m),U(q)}else s(m);g=a(m)}if(g!==null)et=!0;else{var Gt=a(v);Gt!==null&&ht(it,Gt.startTime-q),et=!1}}break t}finally{g=null,S=K,M=!1}et=void 0}}finally{et?ot():V=!1}}}var ot;if(typeof z=="function")ot=function(){z(I)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=I,ot=function(){gt.postMessage(null)}}else ot=function(){x(I,0)};function ht(q,et){O=x(function(){q(o.unstable_now())},et)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(q){switch(S){case 1:case 2:case 3:var et=3;break;default:et=S}var K=S;S=et;try{return q()}finally{S=K}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,et){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var K=S;S=q;try{return et()}finally{S=K}},o.unstable_scheduleCallback=function(q,et,K){var xt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xt+K:xt):K=xt,q){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=K+St,q={id:_++,callback:et,priorityLevel:q,startTime:K,expirationTime:St,sortIndex:-1},K>xt?(q.sortIndex=K,n(v,q),a(m)===null&&q===a(v)&&(A?(P(O),O=-1):A=!0,ht(it,K-xt))):(q.sortIndex=St,n(m,q),b||M||(b=!0,V||(V=!0,ot()))),q},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(q){var et=S;return function(){var K=S;S=et;try{return q.apply(this,arguments)}finally{S=K}}}})(Zh)),Zh}var B0;function uM(){return B0||(B0=1,jh.exports=lM()),jh.exports}var Kh={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function cM(){if(I0)return En;I0=1;var o=gp();function n(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:_,containerInfo:g,implementation:S}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.browser=function(_){return{$$typeof:f,_reason:_}},En.createPortal=function(_,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return d(_,g,null,S)},En.flushSync=function(_){var g=m.T,S=s.p;try{if(m.T=null,s.p=2,_)return _()}finally{m.T=g,s.p=S,s.d.f()}},En.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},En.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},En.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var S=g.as,M=v(S,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:A}):S==="script"&&s.d.X(_,{crossOrigin:M,integrity:b,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},En.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=v(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},En.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,M=v(S,g.crossOrigin);s.d.L(_,S,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},En.preloadModule=function(_,g){if(typeof _=="string")if(g){var S=v(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},En.requestFormReset=function(_){s.d.r(_)},En.unstable_batchedUpdates=function(_,g){return _(g)},En.useFormState=function(_,g,S){return m.H.useFormState(_,g,S)},En.useFormStatus=function(){return m.H.useHostTransitionStatus()},En.version="19.3.1",En}var F0;function fM(){if(F0)return Kh.exports;F0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Kh.exports=cM(),Kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function hM(){if(H0)return Qo;H0=1;var o=uM(),n=gp(),a=fM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return m(l),t;if(c===r)return m(l),e;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var p=!1,E=l.child;E;){if(E===i){p=!0,i=l,r=c;break}if(E===r){p=!0,r=l,i=c;break}E=E.sibling}if(!p){for(E=c.child;E;){if(E===i){p=!0,i=c,r=l;break}if(E===r){p=!0,r=c,i=l;break}E=E.sibling}if(!p)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function _(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=_(t),e!==null)return e;t=t.sibling}return null}function g(t,e,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&g(t.child,e,i,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function b(t){var e=[null,null],i=S(t);return i===null||A(e,t,i.child,{foundSelf:!1}),e}function A(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&A(t,e,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,P=null;function z(t,e,i){return t===i?!0:t===e?(x=t,!0):!1}function U(t,e,i){return t===i?(P=t,!1):t===e?(P!==null&&(x=t),!0):!1}function it(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function V(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=e;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var O=Object.assign,F=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),ne=Symbol.for("react.legacy_hidden"),ye=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),Y=Symbol.for("react.recoverable"),pt=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=pt&&t[pt]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case st:return"Profiler";case ot:return"StrictMode";case et:return"Suspense";case K:return"SuspenseList";case Gt:return"Activity";case w:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ht:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return e=t.displayName||null,e!==null?e:wt(t.type)||"Memo";case St:e=t._payload,t=t._init;try{return wt(t(e))}catch{}}return null}var It=Array.isArray,Tt=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},Z=[],rn=-1;function ae(t){return{current:t}}function Jt(t){0>rn||(t.current=Z[rn],Z[rn]=null,rn--)}function Ct(t,e){rn++,Z[rn]=t.current,t.current=e}var _e=ae(null),Kt=ae(null),N=ae(null),T=ae(null);function $(t,e){switch(Ct(N,e),Ct(Kt,t),Ct(_e,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Gv(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Gv(e),t=Vv(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Jt(_e),Ct(_e,t)}function mt(){Jt(_e),Jt(Kt),Jt(N)}function _t(t){var e=t.memoizedState;e!==null&&(Rs._currentValue=e.memoizedState,Ct(T,t)),e=_e.current;var i=Vv(e,t.type);e!==i&&(Ct(Kt,t),Ct(_e,i))}function dt(t){Kt.current===t&&(Jt(_e),Jt(Kt)),T.current===t&&(Jt(T),Rs._currentValue=Ce)}var Wt,Ut;function zt(t){if(Wt===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Wt=e&&e[1]||"",Ut=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+Ut}var me=!1;function yt(t,e){if(!t||me)return"";me=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var ft=function(){throw Error()};if(Object.defineProperty(ft.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ft,[])}catch(Rt){var G=Rt}Reflect.construct(t,[],ft)}else{try{ft.call()}catch(Rt){G=Rt}ft=!1;try{var J=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ft=!0,new t}finally{ft&&(J!==void 0?Object.defineProperty(t.prototype,"props",J):delete t.prototype.props)}}}else{try{throw Error()}catch(Rt){G=Rt}(ft=t())&&typeof ft.catch=="function"&&ft.catch(function(){})}}catch(Rt){if(Rt&&G&&typeof Rt.stack=="string")return[Rt.stack,G.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],E=c[1];if(p&&E){var L=p.split(`
`),k=E.split(`
`);for(l=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;if(r===L.length||l===k.length)for(r=L.length-1,l=k.length-1;1<=r&&0<=l&&L[r]!==k[l];)l--;for(;1<=r&&0<=l;r--,l--)if(L[r]!==k[l]){if(r!==1||l!==1)do if(r--,l--,0>l||L[r]!==k[l]){var tt=`
`+L[r].replace(" at new "," at ");return t.displayName&&tt.includes("<anonymous>")&&(tt=tt.replace("<anonymous>",t.displayName)),tt}while(1<=r&&0<=l);break}}}finally{me=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?zt(i):""}function Vt(t,e){switch(t.tag){case 26:case 27:case 5:return zt(t.type);case 16:return zt("Lazy");case 13:return t.child!==e&&e!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return zt("Activity");case 30:return zt("ViewTransition");default:return""}}function $t(t){try{var e="",i=null;do e+=Vt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ee=Object.prototype.hasOwnProperty,Ht=o.unstable_scheduleCallback,pe=o.unstable_cancelCallback,oe=o.unstable_shouldYield,Be=o.unstable_requestPaint,H=o.unstable_now,Nt=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,re=o.unstable_IdlePriority,qe=o.log,hn=o.unstable_setDisableYieldValue,Me=null,ke=null;function dn(t){if(typeof qe=="function"&&hn(t),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Me,t)}catch{}}var Tn=Math.clz32?Math.clz32:ao,dl=Math.log,Wi=Math.LN2;function ao(t){return t>>>=0,t===0?32:31-(dl(t)/Wi|0)|0}var lr=256,ur=262144,ji=4194304;function Ni(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zi(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=Ni(r):(p&=E,p!==0?l=Ni(p):i||(i=E&~t,i!==0&&(l=Ni(i))))):(E=r&~c,E!==0?l=Ni(E):p!==0?l=Ni(p):i||(i=r&~t,i!==0&&(l=Ni(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function Ta(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ro(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Tn(i),l=1<<r;e|=t[r],i&=~l}return e}function xc(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pl(){var t=ji;return ji<<=1,(ji&62914560)===0&&(ji=4194304),t}function so(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function R(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function W(t,e,i,r,l,c){var p=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,k=t.hiddenUpdates;for(i=p&~i;0<i;){var tt=31-Tn(i),ft=1<<tt;E[tt]=0,L[tt]=-1;var G=k[tt];if(G!==null)for(k[tt]=null,tt=0;tt<G.length;tt++){var J=G[tt];J!==null&&(J.lane&=-536870913)}i&=~ft}r!==0&&nt(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~e))}function nt(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Tn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function at(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Tn(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function j(t,e){var i=e&-e;return i=(i&42)!==0?1:Mt(i),(i&(t.suspendedLanes|e))!==0?0:i}function Mt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qt(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:b0(t.type))}function Yt(t,e){var i=At.p;try{return At.p=t,e()}finally{At.p=i}}var Qt=Math.random().toString(36).slice(2),jt="__reactFiber$"+Qt,Pt="__reactProps$"+Qt,he="__reactContainer$"+Qt,Ue="__reactEvents$"+Qt,He="__reactListeners$"+Qt,bn="__reactHandles$"+Qt,be="__reactResources$"+Qt,kt="__reactMarker$"+Qt,Bn="__reactLoad$"+Qt;function Ee(t){delete t[jt],delete t[Pt],delete t[He],delete t[bn]}function sn(t){var e;if(e=t[jt])return e;for(var i=t.parentNode;i;){if(e=i[he]||i[jt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=r0(t);t!==null;){if(i=t[jt])return i;t=r0(t)}return e}t=i,i=t.parentNode}return null}function jn(t){if(t=t[jt]||t[he]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function on(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function si(t){var e=t[be];return e||(e=t[be]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function se(t){t[kt]=!0}function Zn(t){t[Bn]=void 0}var ba=new Set,Dn={};function An(t,e){Un(t,e),Un(t+"Capture",e)}function Un(t,e){for(Dn[t]=e,t=0;t<e.length;t++)ba.add(e[t])}var ml=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bp={},Ap={};function Tx(t){return ee.call(Ap,t)?!0:ee.call(bp,t)?!1:ml.test(t)?Ap[t]=!0:(bp[t]=!0,!1)}var Re=!1;function Rp(){var t=Re;return Re=!1,t}function gl(t,e,i){if(Tx(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function vl(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function Ki(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bx(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){i=""+p,c.call(this,p)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sc(t){if(!t._valueTracker){var e=Cp(t)?"checked":"value";t._valueTracker=bx(t,e,""+t[e])}}function wp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=Cp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var Ax=/[\n"\\]/g;function oi(t){return t.replace(Ax,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yc(t,e,i,r,l,c,p,E){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Kn(e)):t.value!==""+Kn(e)&&(t.value=""+Kn(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?p==="number"&&t.value==e?Mc(t,Kn(t.value)):Mc(t,Kn(e)):i!=null?Mc(t,Kn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Kn(E):t.removeAttribute("name")}function Dp(t,e,i,r,l,c,p,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Sc(t);return}i=i!=null?""+Kn(i):"",e=e!=null?""+Kn(e):i,E||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),Sc(t)}function Mc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function qr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Kn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Up(t,e,i){if(e!=null&&(e=""+Kn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Kn(i):""}function Np(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Kn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Sc(t)}function Yr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Rx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||Rx.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Op(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Re=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(Lp(t,l,r),Re=!0)}else for(var c in e)e.hasOwnProperty(c)&&Lp(t,c,e[c])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(t){return wx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var Tc=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,jr=null;function zp(t){var e=jn(t);if(e&&(t=e.stateNode)){var i=t[Pt]||null;t:switch(t=e.stateNode,e.type){case"input":if(yc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+oi(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[Pt]||null;if(!l)throw Error(s(90));yc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&wp(r)}break t;case"textarea":Up(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&qr(t,!!i.multiple,e,!1)}}}var Ac=!1;function Pp(t,e,i){if(Ac)return t(e,i);Ac=!0;try{var r=t(e);return r}finally{if(Ac=!1,(Wr!==null||jr!==null)&&(_u(),Wr&&(e=Wr,t=jr,jr=Wr=null,zp(e),t)))for(e=0;e<t.length;e++)zp(t[e])}}function oo(t,e){var i=t.stateNode;if(i===null)return null;var r=i[Pt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=!1;if(Qi)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Rc=!1}var Aa=null,Cc=null,xl=null;function Bp(){if(xl)return xl;var t,e=Cc,i=e.length,r,l="value"in Aa?Aa.value:Aa.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var p=i-t;for(r=1;r<=p&&e[i-r]===l[c-r];r++);return xl=l.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Ip(){return!1}function Nn(t){function e(i,r,l,c,p){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?yl:Ip,this.isPropagationStopped=Ip,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Nn(Ra),uo=O({},Ra,{view:0,detail:0}),Dx=Nn(uo),wc,Dc,co,El=O({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(wc=t.screenX-co.screenX,Dc=t.screenY-co.screenY):Dc=wc=0,co=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Fp=Nn(El),Ux=O({},El,{dataTransfer:0}),Nx=Nn(Ux),Lx=O({},uo,{relatedTarget:0}),Uc=Nn(Lx),Ox=O({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=Nn(Ox),Px=O({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=Nn(Px),Ix=O({},Ra,{data:0}),Hp=Nn(Ix),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gx[t])?!!e[t]:!1}function Nc(){return Vx}var Xx=O({},uo,{key:function(t){if(t.key){var e=Fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kx=Nn(Xx),qx=O({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Nn(qx),Yx=O({},Ra,{submitter:0}),Wx=Nn(Yx),jx=O({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Zx=Nn(jx),Kx=O({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=Nn(Kx),Jx=O({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=Nn(Jx),tS=O({},Ra,{newState:0,oldState:0,source:0}),eS=Nn(tS),nS=[9,13,27,32],Lc=Qi&&"CompositionEvent"in window,fo=null;Qi&&"documentMode"in document&&(fo=document.documentMode);var iS=Qi&&"TextEvent"in window&&!fo,Vp=Qi&&(!Lc||fo&&8<fo&&11>=fo),Xp=" ",kp=!1;function qp(t,e){switch(t){case"keyup":return nS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function aS(t,e){switch(t){case"compositionend":return Yp(e);case"keypress":return e.which!==32?null:(kp=!0,Xp);case"textInput":return t=e.data,t===Xp&&kp?null:t;default:return null}}function rS(t,e){if(Zr)return t==="compositionend"||!Lc&&qp(t,e)?(t=Bp(),xl=Cc=Aa=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vp&&e.locale!=="ko"?null:e.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sS[t.type]:e==="textarea"}function jp(t,e,i,r){Wr?jr?jr.push(r):jr=[r]:Wr=r,e=Tu(e,"onChange"),0<e.length&&(i=new Ml("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var ho=null,po=null;function oS(t){zv(t,0)}function Tl(t){var e=on(t);if(wp(e))return t}function Zp(t,e){if(t==="change")return e}var Kp=!1;if(Qi){var Oc;if(Qi){var zc="oninput"in document;if(!zc){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),zc=typeof Qp.oninput=="function"}Oc=zc}else Oc=!1;Kp=Oc&&(!document.documentMode||9<document.documentMode)}function Jp(){ho&&(ho.detachEvent("onpropertychange",$p),po=ho=null)}function $p(t){if(t.propertyName==="value"&&Tl(po)){var e=[];jp(e,po,t,bc(t)),Pp(oS,e)}}function lS(t,e,i){t==="focusin"?(Jp(),ho=e,po=i,ho.attachEvent("onpropertychange",$p)):t==="focusout"&&Jp()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(po)}function cS(t,e){if(t==="click")return Tl(e)}function fS(t,e){if(t==="input"||t==="change")return Tl(e)}function hS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:hS;function mo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!ee.call(e,l)||!Qn(t[l],e[l]))return!1}return!0}function Pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var i=tm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=tm(i)}}function nm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function im(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pc(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Pc(t.document)}return e}function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var dS=Qi&&"documentMode"in document&&11>=document.documentMode,Kr=null,Ic=null,go=null,Fc=!1;function am(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Fc||Kr==null||Kr!==Pc(r)||(r=Kr,"selectionStart"in r&&Bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&mo(go,r)||(go=r,r=Tu(Ic,"onSelect"),0<r.length&&(e=new Ml("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=Kr)))}function cr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Qr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},Hc={},rm={};Qi&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function fr(t){if(Hc[t])return Hc[t];if(!Qr[t])return t;var e=Qr[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in rm)return Hc[t]=e[i];return t}var sm=fr("animationend"),om=fr("animationiteration"),lm=fr("animationstart"),pS=fr("transitionrun"),mS=fr("transitionstart"),gS=fr("transitioncancel"),um=fr("transitionend"),cm=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function xi(t,e){cm.set(t,e),An(e,[t])}var vS=0;function Ji(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ei.identifierPrefix;var i=vS++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function fm(t){if(t==null||typeof t=="string")return t;var e=null,i=vs;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function $i(t,e){return t=fm(t),e=fm(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],Jr=0,Vc=0;function Al(){for(var t=Jr,e=Vc=Jr=0;e<t;){var i=li[e];li[e++]=null;var r=li[e];li[e++]=null;var l=li[e];li[e++]=null;var c=li[e];if(li[e++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}c!==0&&hm(i,l,c)}}function Rl(t,e,i,r){li[Jr++]=t,li[Jr++]=e,li[Jr++]=i,li[Jr++]=r,Vc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Xc(t,e,i,r){return Rl(t,e,i,r),Cl(t)}function hr(t,e){return Rl(t,null,null,e),Cl(t)}function hm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-Tn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function Cl(t){if(50<Io)throw Io=0,vu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var $r={};function _S(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,i,r){return new _S(t,e,i,r)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,e){var i=t.alternate;return i===null?(i=In(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function dm(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function wl(t,e,i,r,l,c){var p=0;if(r=t,typeof r=="function")kc(r)&&(p=1);else if(typeof r=="string")p=Yy(t,i,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=In(31,i,e,l),t.elementType=Gt,t.lanes=c,t;case I:return dr(i.children,l,c,e);case ot:p=8,l|=24;break;case st:return t=In(12,i,e,l|2),t.elementType=st,t.lanes=c,t;case et:return t=In(13,i,e,l),t.elementType=et,t.lanes=c,t;case K:return t=In(19,i,e,l),t.elementType=K,t.lanes=c,t;case ne:case w:return t=l|32,t=In(30,i,e,t),t.elementType=w,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ht:p=10;break t;case gt:p=9;break t;case q:p=11;break t;case xt:p=14;break t;case St:p=16,r=null;break t}p=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=In(p,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function dr(t,e,i,r){return t=In(7,t,r,e),t.lanes=i,t}function qc(t,e,i){return t=In(6,t,null,e),t.lanes=i,t}function pm(t){var e=In(18,null,null,0);return e.stateNode=t,e}function Yc(t,e,i){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var mm=new WeakMap;function ui(t,e){if(typeof t=="object"&&t!==null){var i=mm.get(t);return i!==void 0?i:(e={value:t,source:e,stack:$t(e)},mm.set(t,e),e)}return{value:t,source:e,stack:$t(e)}}var ts=[],es=0,Dl=null,vo=0,ci=[],fi=0,Ca=null,Oi=1,zi="";function ea(t,e){ts[es++]=vo,ts[es++]=Dl,Dl=t,vo=e}function gm(t,e,i){ci[fi++]=Oi,ci[fi++]=zi,ci[fi++]=Ca,Ca=t;var r=Oi;t=zi;var l=32-Tn(r)-1;r&=~(1<<l),i+=1;var c=32-Tn(e)+l;if(30<c){var p=l-l%5;c=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Oi=1<<32-Tn(e)+l|i<<l|r,zi=c+t}else Oi=1<<c|i<<l|r,zi=t}function Ul(t){t.return!==null&&(ea(t,1),gm(t,1,0))}function Wc(t){for(;t===Dl;)Dl=ts[--es],ts[es]=null,vo=ts[--es],ts[es]=null;for(;t===Ca;)Ca=ci[--fi],ci[fi]=null,zi=ci[--fi],ci[fi]=null,Oi=ci[--fi],ci[fi]=null}function vm(t,e){ci[fi++]=Oi,ci[fi++]=zi,ci[fi++]=Ca,Oi=e.id,zi=e.overflow,Ca=t}var pn=null,Ve=null,de=!1,wa=null,hi=!1,jc=Error(s(519));function Da(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(ui(e,t)),jc}function _m(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[jt]=t,e[Pt]=r,i){case"dialog":ve("cancel",e),ve("close",e);break;case"iframe":case"object":case"embed":ve("load",e);break;case"video":case"audio":for(i=0;i<Ho.length;i++)ve(Ho[i],e);break;case"source":ve("error",e);break;case"img":case"image":case"link":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"input":ve("invalid",e),Dp(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",e);break;case"textarea":ve("invalid",e),Np(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||Fv(e.textContent,i)?(r.popover!=null&&(ve("beforetoggle",e),ve("toggle",e)),r.onScroll!=null&&ve("scroll",e),r.onScrollEnd!=null&&ve("scrollend",e),r.onClick!=null&&(e.onclick=Li),e=!0):e=!1,e||Da(t,!0)}function Nl(t){for(pn=t.return;pn;)switch(pn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:pn=pn.return}}function ns(t){if(t!==pn)return!1;if(!de)return Nl(t),de=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||bh(t.type,t.memoizedProps)),i=!i),i&&Ve&&Da(t),Nl(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=a0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=a0(t)}else e===27?(e=Ve,Ya(t.type)?(t=Oh,Oh=null,Ve=t):Ve=e):Ve=pn?pi(t.stateNode.nextSibling):null;return!0}function pr(){Ve=pn=null,de=!1}function Zc(){var t=wa;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),wa=null),t}function _o(t){wa===null?wa=[t]:wa.push(t)}var Kc=ae(null),mr=null,na=null;function Ua(t,e,i){Ct(Kc,e._currentValue),e._currentValue=i}function ia(t){t._currentValue=Kc.current,Jt(Kc)}function Ll(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function Qc(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var L=0;L<e.length;L++)if(E.context===e[L]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Ll(c.return,i,t),r||(p=null);break t}c=E.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=i,c=p.alternate,c!==null&&(c.lanes|=i),Ll(p,i,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,p=l.alternate,p!==null&&(p.lanes|=i),Ll(l.return,i,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function gr(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var E=l.type;Qn(l.pendingProps.value,p.value)||(t!==null?t.push(E):t=[E])}}else if(l===T.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Rs):t=[Rs])}l=l.return}return t!==null&&Qc(e,t,i,r),e.flags|=262144,t!==null}function Ol(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vr(t){mr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _n(t){return xm(mr,t)}function zl(t,e){return mr===null&&vr(t),xm(t,e)}function xm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},na===null){if(t===null)throw Error(s(308));na=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else na=na.next=e;return i}var xS=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},SS=o.unstable_scheduleCallback,yS=o.unstable_NormalPriority,$e={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new xS,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&SS(yS,function(){t.controller.abort()})}function Sm(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var So=null;function MS(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var yo=null,$c=0,_r=0,is=null;function ES(t,e){if(yo===null){var i=yo=[];$c=0,_r=gh(),is={status:"pending",value:void 0,then:function(r){i.push(r)}}}return $c++,e.then(ym,ym),e}function ym(){if(--$c===0&&(So=null,yo!==null)){is!==null&&(is.status="fulfilled");var t=yo;yo=null,_r=0,is=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function TS(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Mm=Tt.S;Tt.S=function(t,e){if(pv=H(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ES(t,e),So!==null)for(var i=ys;i!==null;)Sm(i,So),i=i.next;if(i=t.types,i!==null){for(var r=ys;r!==null;)Sm(r,i),r=r.next;if(_r!==0){r=So,r===null&&(r=So=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Mm!==null&&Mm(t,e)};var xr=ae(null);function tf(){var t=xr.current;return t!==null?t:Ge.pooledCache}function Pl(t,e){e===null?Ct(xr,xr.current):Ct(xr,e.pool)}function Em(){var t=tf();return t===null?null:{parent:$e._currentValue,pool:t}}var as=Error(s(460)),ef=Error(s(474)),Bl=Error(s(542)),Il={then:function(){}};function Tm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Li,Li),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rm(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Li,Li);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rm(t),t}throw yr=e,as}}function Sr(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(yr=i,as):i}}var yr=null;function Am(){if(yr===null)throw Error(s(459));var t=yr;return yr=null,t}function Rm(t){if(t===as||t===Bl)throw Error(s(483))}var rs=null,Mo=0;function Fl(t){var e=Mo;return Mo+=1,rs===null&&(rs=[]),bm(rs,t,e)}function Na(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Hl(t,e){throw e.$$typeof===F?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Cm(t){function e(X,B){if(t){var Q=X.deletions;Q===null?(X.deletions=[B],X.flags|=16):Q.push(B)}}function i(X,B){if(!t)return null;for(;B!==null;)e(X,B),B=B.sibling;return null}function r(X){for(var B=new Map;X!==null;)X.key===null?B.set(X.index,X):B.set(X.key,X),X=X.sibling;return B}function l(X,B){return X=ta(X,B),X.index=0,X.sibling=null,X}function c(X,B,Q){return X.index=Q,t?(Q=X.alternate,Q!==null?(Q=Q.index,Q<B?(X.flags|=2,B):Q):(X.flags|=134217730,B)):(X.flags|=1048576,B)}function p(X){return t&&X.alternate===null&&(X.flags|=134217730),X}function E(X,B,Q,ct){return B===null||B.tag!==6?(B=qc(Q,X.mode,ct),B.return=X,B):(B=l(B,Q),B.return=X,B)}function L(X,B,Q,ct){var Ft=Q.type;return Ft===I?(X=tt(X,B,Q.props.children,ct,Q.key),Na(X,Q),X):B!==null&&(B.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&Sr(Ft)===B.type)?(B=l(B,Q.props),Na(B,Q),B.return=X,B):(B=wl(Q.type,Q.key,Q.props,null,X.mode,ct),Na(B,Q),B.return=X,B)}function k(X,B,Q,ct){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=Yc(Q,X.mode,ct),B.return=X,B):(B=l(B,Q.children||[]),B.return=X,B)}function tt(X,B,Q,ct,Ft){return B===null||B.tag!==7?(B=dr(Q,X.mode,ct,Ft),B.return=X,B):(B=l(B,Q),B.return=X,B)}function ft(X,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=qc(""+B,X.mode,Q),B.return=X,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return Q=wl(B.type,B.key,B.props,null,X.mode,Q),Na(Q,B),Q.return=X,Q;case C:return B=Yc(B,X.mode,Q),B.return=X,B;case St:return B=Sr(B),ft(X,B,Q)}if(It(B)||ut(B))return B=dr(B,X.mode,Q,null),B.return=X,B;if(typeof B.then=="function")return ft(X,Fl(B),Q);if(B.$$typeof===ht)return ft(X,zl(X,B),Q);Hl(X,B)}return null}function G(X,B,Q,ct){var Ft=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ft!==null?null:E(X,B,""+Q,ct);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:return Q.key===Ft?L(X,B,Q,ct):null;case C:return Q.key===Ft?k(X,B,Q,ct):null;case St:return Q=Sr(Q),G(X,B,Q,ct)}if(It(Q)||ut(Q))return Ft!==null?null:tt(X,B,Q,ct,null);if(typeof Q.then=="function")return G(X,B,Fl(Q),ct);if(Q.$$typeof===ht)return G(X,B,zl(X,Q),ct);Hl(X,Q)}return null}function J(X,B,Q,ct,Ft){if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return X=X.get(Q)||null,E(B,X,""+ct,Ft);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case D:return X=X.get(ct.key===null?Q:ct.key)||null,L(B,X,ct,Ft);case C:return X=X.get(ct.key===null?Q:ct.key)||null,k(B,X,ct,Ft);case St:return ct=Sr(ct),J(X,B,Q,ct,Ft)}if(It(ct)||ut(ct))return X=X.get(Q)||null,tt(B,X,ct,Ft,null);if(typeof ct.then=="function")return J(X,B,Q,Fl(ct),Ft);if(ct.$$typeof===ht)return J(X,B,Q,zl(B,ct),Ft);Hl(B,ct)}return null}function Rt(X,B,Q,ct){for(var Ft=null,Se=null,Zt=B,te=B=0,nn=null;Zt!==null&&te<Q.length;te++){Zt.index>te?(nn=Zt,Zt=null):nn=Zt.sibling;var Te=G(X,Zt,Q[te],ct);if(Te===null){Zt===null&&(Zt=nn);break}t&&Zt&&Te.alternate===null&&e(X,Zt),B=c(Te,B,te),Se===null?Ft=Te:Se.sibling=Te,Se=Te,Zt=nn}if(te===Q.length)return i(X,Zt),de&&ea(X,te),Ft;if(Zt===null){for(;te<Q.length;te++)Zt=ft(X,Q[te],ct),Zt!==null&&(B=c(Zt,B,te),Se===null?Ft=Zt:Se.sibling=Zt,Se=Zt);return de&&ea(X,te),Ft}for(Zt=r(Zt);te<Q.length;te++)nn=J(Zt,X,te,Q[te],ct),nn!==null&&(t&&(Te=nn.alternate,Te!==null&&Zt.delete(Te.key===null?te:Te.key)),B=c(nn,B,te),Se===null?Ft=nn:Se.sibling=nn,Se=nn);return t&&Zt.forEach(function(Qa){return e(X,Qa)}),de&&ea(X,te),Ft}function Xt(X,B,Q,ct){if(Q==null)throw Error(s(151));for(var Ft=null,Se=null,Zt=B,te=B=0,nn=null,Te=Q.next();Zt!==null&&!Te.done;te++,Te=Q.next()){Zt.index>te?(nn=Zt,Zt=null):nn=Zt.sibling;var Qa=G(X,Zt,Te.value,ct);if(Qa===null){Zt===null&&(Zt=nn);break}t&&Zt&&Qa.alternate===null&&e(X,Zt),B=c(Qa,B,te),Se===null?Ft=Qa:Se.sibling=Qa,Se=Qa,Zt=nn}if(Te.done)return i(X,Zt),de&&ea(X,te),Ft;if(Zt===null){for(;!Te.done;te++,Te=Q.next())Te=ft(X,Te.value,ct),Te!==null&&(B=c(Te,B,te),Se===null?Ft=Te:Se.sibling=Te,Se=Te);return de&&ea(X,te),Ft}for(Zt=r(Zt);!Te.done;te++,Te=Q.next())Te=J(Zt,X,te,Te.value,ct),Te!==null&&(t&&(nn=Te.alternate,nn!==null&&Zt.delete(nn.key===null?te:nn.key)),B=c(Te,B,te),Se===null?Ft=Te:Se.sibling=Te,Se=Te);return t&&Zt.forEach(function(aM){return e(X,aM)}),de&&ea(X,te),Ft}function ue(X,B,Q,ct){if(typeof Q=="object"&&Q!==null&&Q.type===I&&Q.key===null&&Q.props.ref===void 0&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:t:{for(var Ft=Q.key;B!==null;){if(B.key===Ft){if(Ft=Q.type,Ft===I){if(B.tag===7){i(X,B.sibling),ct=l(B,Q.props.children),Na(ct,Q),ct.return=X,X=ct;break t}}else if(B.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&Sr(Ft)===B.type){i(X,B.sibling),ct=l(B,Q.props),Na(ct,Q),ct.return=X,X=ct;break t}i(X,B);break}else e(X,B);B=B.sibling}Q.type===I?(ct=dr(Q.props.children,X.mode,ct,Q.key),Na(ct,Q),ct.return=X,X=ct):(ct=wl(Q.type,Q.key,Q.props,null,X.mode,ct),Na(ct,Q),ct.return=X,X=ct)}return p(X);case C:t:{for(Ft=Q.key;B!==null;){if(B.key===Ft)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){i(X,B.sibling),ct=l(B,Q.children||[]),ct.return=X,X=ct;break t}else{i(X,B);break}else e(X,B);B=B.sibling}ct=Yc(Q,X.mode,ct),ct.return=X,X=ct}return p(X);case St:return Q=Sr(Q),ue(X,B,Q,ct)}if(It(Q))return Rt(X,B,Q,ct);if(ut(Q)){if(Ft=ut(Q),typeof Ft!="function")throw Error(s(150));return Q=Ft.call(Q),Xt(X,B,Q,ct)}if(typeof Q.then=="function")return ue(X,B,Fl(Q),ct);if(Q.$$typeof===ht)return ue(X,B,zl(X,Q),ct);Hl(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,B!==null&&B.tag===6?(i(X,B.sibling),ct=l(B,Q),ct.return=X,X=ct):(i(X,B),ct=qc(Q,X.mode,ct),ct.return=X,X=ct),p(X)):i(X,B)}return function(X,B,Q,ct){try{Mo=0;var Ft=ue(X,B,Q,ct);return rs=null,Ft}catch(Zt){if(Zt===as||Zt===Bl)throw Zt;var Se=In(29,Zt,null,X.mode);return Se.lanes=ct,Se.return=X,Se}finally{}}}var Mr=Cm(!0),wm=Cm(!1),La=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Cl(t),hm(t,null,i),e}return Rl(t,r,e,i),Cl(t)}function Eo(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,at(t,i)}}function rf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var p={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var sf=!1;function To(){if(sf){var t=is;if(t!==null)throw t}}function bo(t,e,i,r){sf=!1;var l=t.updateQueue;La=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var L=E,k=L.next;L.next=null,p===null?c=k:p.next=k,p=L;var tt=t.alternate;tt!==null&&(tt=tt.updateQueue,E=tt.lastBaseUpdate,E!==p&&(E===null?tt.firstBaseUpdate=k:E.next=k,tt.lastBaseUpdate=L))}if(c!==null){var ft=l.baseState;p=0,tt=k=L=null,E=c;do{var G=E.lane&-536870913,J=G!==E.lane;if(J?(xe&G)===G:(r&G)===G){G!==0&&G===_r&&(sf=!0),tt!==null&&(tt=tt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Rt=t,Xt=E;G=e;var ue=i;switch(Xt.tag){case 1:if(Rt=Xt.payload,typeof Rt=="function"){ft=Rt.call(ue,ft,G);break t}ft=Rt;break t;case 3:Rt.flags=Rt.flags&-65537|128;case 0:if(Rt=Xt.payload,G=typeof Rt=="function"?Rt.call(ue,ft,G):Rt,G==null)break t;ft=O({},ft,G);break t;case 2:La=!0}}G=E.callback,G!==null&&(t.flags|=64,J&&(t.flags|=8192),J=l.callbacks,J===null?l.callbacks=[G]:J.push(G))}else J={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},tt===null?(k=tt=J,L=ft):tt=tt.next=J,p|=G;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;J=E,E=J.next,J.next=null,l.lastBaseUpdate=J,l.shared.pending=null}}while(!0);tt===null&&(L=ft),l.baseState=L,l.firstBaseUpdate=k,l.lastBaseUpdate=tt,c===null&&(l.shared.lanes=0),Va|=p,t.lanes=p,t.memoizedState=ft}}function Dm(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Um(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Dm(i[t],e)}var Pa=ae(null),Gl=ae(0);function Nm(t,e){t=la,Ct(Gl,t),Ct(Pa,e),la=t|e.baseLanes}function of(){Ct(Gl,la),Ct(Pa,Pa.current)}function lf(){la=Gl.current,Jt(Pa),Jt(Gl)}var xn=ae(null),Rn=null;function Ba(t){var e=t.alternate;Ct(Sn,Sn.current&1),Ct(xn,t),Rn===null&&(e===null||Pa.current!==null||e.memoizedState!==null)&&(Rn=t)}function uf(t){Ct(Sn,Sn.current),Ct(xn,t),Rn===null&&(Rn=t)}function Lm(t){t.tag===22?(Ct(Sn,Sn.current),Ct(xn,t),Rn===null&&(Rn=t)):Ia()}function Ia(){Ct(Sn,Sn.current),Ct(xn,xn.current)}function Jn(t){Jt(xn),Rn===t&&(Rn=null),Jt(Sn)}var Sn=ae(0);function Ao(t,e){Ct(xn,xn.current),Ct(Sn,e)}function cf(t){Jt(Sn),Jt(xn),Rn===t&&(Rn=null)}function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Nh(i)||Lh(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var aa=0,le=null,Ie=null,tn=null,Xl=!1,ss=!1,Er=!1,kl=0,Ro=0,os=null,bS=0;function je(){throw Error(s(321))}function ff(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Qn(t[i],e[i]))return!1;return!0}function hf(t,e,i,r,l,c){return aa=c,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tt.H=t===null||t.memoizedState===null?gg:vg,Er=!1,c=i(r,l),Er=!1,ss&&(c=zm(e,i,r,l)),Om(t),c}function Om(t){Tt.H=Ql;var e=Ie!==null&&Ie.next!==null;if(aa=0,tn=Ie=le=null,Xl=!1,Ro=0,os=null,e)throw Error(s(300));t===null||en||(t=t.dependencies,t!==null&&Ol(t)&&(en=!0))}function zm(t,e,i,r){le=t;var l=0;do{if(ss&&(os=null),Ro=0,ss=!1,25<=l)throw Error(s(301));if(l+=1,tn=Ie=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Tt.H=LS,c=e(i,r)}while(ss);return c}function AS(){var t=Tt.H,e=t.useState()[0];return e=typeof e.then=="function"?Co(e):e,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(le.flags|=1024),e}function df(){var t=kl!==0;return kl=0,t}function pf(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function mf(t){if(Xl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Xl=!1}aa=0,tn=Ie=le=null,ss=!1,Ro=kl=0,os=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?le.memoizedState=tn=t:tn=tn.next=t,tn}function Ke(){if(Ie===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=tn===null?le.memoizedState:tn.next;if(e!==null)tn=e,Ie=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},tn===null?le.memoizedState=tn=t:tn=tn.next=t}return tn}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var e=Ro;return Ro+=1,os===null&&(os=[]),t=bm(os,t,e),e=le,(tn===null?e.memoizedState:tn.next)===null&&(e=e.alternate,Tt.H=e===null||e.memoizedState===null?gg:vg),t}function Yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===Y)return;if(t.$$typeof===ht)return _n(t)}throw Error(s(438,String(t)))}function gf(t){var e=null,i=le.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=ql(),le.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=ye;return e.index++,i}function ra(t,e){return typeof e=="function"?e(t):e}function Wl(t){var e=Ke();return vf(e,Ie,t)}function vf(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var E=p=null,L=null,k=e,tt=!1;do{var ft=k.lane&-536870913;if(ft!==k.lane?(xe&ft)===ft:(aa&ft)===ft){var G=k.revertLane;if(G===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),ft===_r&&(tt=!0);else if((aa&G)===G){k=k.next,G===_r&&(tt=!0);continue}else ft={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},L===null?(E=L=ft,p=c):L=L.next=ft,le.lanes|=G,Va|=G;ft=k.action,Er&&i(c,ft),c=k.hasEagerState?k.eagerState:i(c,ft)}else G={lane:ft,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},L===null?(E=L=G,p=c):L=L.next=G,le.lanes|=ft,Va|=ft;k=k.next}while(k!==null&&k!==e);if(L===null?p=c:L.next=E,!Qn(c,t.memoizedState)&&(en=!0,tt&&(i=is,i!==null)))throw i;t.memoizedState=c,t.baseState=p,t.baseQueue=L,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function _f(t){var e=Ke(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);Qn(c,e.memoizedState)||(en=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Pm(t,e,i){var r=le,l=Ke(),c=de;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=e();var p=!Qn((Ie||l).memoizedState,i);if(p&&(l.memoizedState=i,en=!0),l=l.queue,yf(Fm.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||p||tn!==null&&(tn.memoizedState.tag&1)!==0,ls(t?9:8,{destroy:void 0},Im.bind(null,r,l,i,e),null),t){if(r.flags|=2048,Ge===null)throw Error(s(349));c||(aa&127)!==0||Bm(r,e,i)}return i}function Bm(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=le.updateQueue,e===null?(e=ql(),le.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Im(t,e,i,r){e.value=i,e.getSnapshot=r,Hm(e)&&Gm(t)}function Fm(t,e,i){return i(function(){Hm(e)&&Gm(t)})}function Hm(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Qn(t,i)}catch{return!0}}function Gm(t){var e=hr(t,2);e!==null&&Vn(e,t,2)}function xf(t){var e=Ln();if(typeof t=="function"){var i=t;if(t=i(),Er){dn(!0);try{i()}finally{dn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e}function Vm(t,e,i,r){return t.baseState=i,vf(t,Ie,typeof r=="function"?r:ra)}function RS(t,e,i,r,l){if(Kl(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};Tt.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,Xm(e,c)):(c.next=i.next,e.pending=i.next=c)}}function Xm(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=Tt.T,p={};p.types=c!==null?c.types:null,Tt.T=p;try{var E=i(l,r),L=Tt.S;L!==null&&L(p,E),km(t,e,E)}catch(k){Sf(t,e,k)}finally{c!==null&&p.types!==null&&(c.types=p.types),Tt.T=c}}else try{c=i(l,r),km(t,e,c)}catch(k){Sf(t,e,k)}}function km(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){qm(t,e,r)},function(r){return Sf(t,e,r)}):qm(t,e,i)}function qm(t,e,i){e.status="fulfilled",e.value=i,Ym(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Xm(t,i)))}function Sf(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,Ym(e),e=e.next;while(e!==r)}t.action=null}function Ym(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Wm(t,e){return e}function jm(t,e){if(de){var i=Ge.formState;if(i!==null){t:{var r=le;if(de){if(Ve){e:{for(var l=Ve,c=hi;l.nodeType!==8;){if(!c){l=null;break e}if(l=pi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ve=pi(l.nextSibling),r=l.data==="F!";break t}}Da(r)}r=!1}r&&(e=i[0])}}return i=Ln(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wm,lastRenderedState:e},i.queue=r,i=dg.bind(null,le,r),r.dispatch=i,r=xf(!1),c=Af.bind(null,le,!1,r.queue),r=Ln(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=RS.bind(null,le,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function Zm(t){var e=Ke();return Km(e,Ie,t)}function Km(t,e,i){if(e=vf(t,e,Wm)[0],t=Wl(ra)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Co(e)}catch(p){throw p===as?Bl:p}else r=e;e=Ke();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(le.flags|=2048,ls(9,{destroy:void 0},CS.bind(null,l,i),null)),[r,c,t]}function CS(t,e){t.action=e}function Qm(t){var e=Ke(),i=Ie;if(i!==null)return Km(e,i,t);Ke(),e=e.memoizedState,i=Ke();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function ls(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=le.updateQueue,e===null&&(e=ql(),le.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function Jm(){return Ke().memoizedState}function jl(t,e,i,r){var l=Ln();le.flags|=t,l.memoizedState=ls(1|e,{destroy:void 0},i,r===void 0?null:r)}function Zl(t,e,i,r){var l=Ke();r=r===void 0?null:r;var c=l.memoizedState.inst;Ie!==null&&r!==null&&ff(r,Ie.memoizedState.deps)?l.memoizedState=ls(e,c,i,r):(le.flags|=t,l.memoizedState=ls(1|e,c,i,r))}function $m(t,e){jl(8390656,8,t,e)}function yf(t,e){Zl(2048,8,t,e)}function wS(t){le.flags|=4;var e=le.updateQueue;if(e===null)e=ql(),le.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function tg(t){var e=Ke().memoizedState;return wS({ref:e,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function eg(t,e){return Zl(4,2,t,e)}function ng(t,e){return Zl(4,4,t,e)}function ig(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ag(t,e,i){i=i!=null?i.concat([t]):null,Zl(4,4,ig.bind(null,e,t),i)}function Mf(){}function rg(t,e){var i=Ke();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&ff(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function sg(t,e){var i=Ke();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&ff(e,r[1]))return r[0];if(r=t(),Er){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,e],r}function Ef(t,e,i){return i===void 0||(aa&1073741824)!==0&&(xe&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=gv(),le.lanes|=t,Va|=t,i)}function og(t,e,i,r){return Qn(i,e)?i:Pa.current!==null?(t=Ef(t,i,r),Qn(t,e)||(en=!0),t):(aa&106)===0||(aa&1073741824)!==0&&(xe&261930)===0?(en=!0,t.memoizedState=i):(t=gv(),le.lanes|=t,Va|=t,e)}function lg(t,e,i,r,l){var c=At.p;At.p=c!==0&&8>c?c:8;var p=Tt.T,E={};E.types=p!==null?p.types:null,Tt.T=E,Af(t,!1,e,i);try{var L=l(),k=Tt.S;if(k!==null&&k(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var tt=TS(L,r);wo(t,e,tt,ni(t))}else wo(t,e,r,ni(t))}catch(ft){wo(t,e,{then:function(){},status:"rejected",reason:ft},ni())}finally{At.p=c,p!==null&&E.types!==null&&(p.types=E.types),Tt.T=p}}function DS(){}function Tf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=ug(t).queue;lg(t,l,e,Ce,i===null?DS:function(){return cg(t),i(r)})}function ug(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:Ce},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function cg(t){var e=ug(t);e.next===null&&(e=t.alternate.memoizedState),wo(t,e.next.queue,{},ni())}function bf(){return _n(Rs)}function fg(){return Ke().memoizedState}function hg(){return Ke().memoizedState}function US(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ni();t=Oa(i);var r=za(e,t,i);r!==null&&(Vn(r,e,i),Eo(r,e,i)),e={cache:Jc()},t.payload=e;return}e=e.return}}function NS(t,e,i){var r=ni();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Kl(t)?pg(e,i):(i=Xc(t,e,i,r),i!==null&&(Vn(i,t,r),mg(i,e,r)))}function dg(t,e,i){var r=ni();wo(t,e,i,r)}function wo(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Kl(t))pg(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,E=c(p,i);if(l.hasEagerState=!0,l.eagerState=E,Qn(E,p))return Rl(t,e,l,0),Ge===null&&Al(),!1}catch{}finally{}if(i=Xc(t,e,l,r),i!==null)return Vn(i,t,r),mg(i,e,r),!0}return!1}function Af(t,e,i,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Kl(t)){if(e)throw Error(s(479))}else e=Xc(t,i,r,2),e!==null&&Vn(e,t,2)}function Kl(t){var e=t.alternate;return t===le||e!==null&&e===le}function pg(t,e){ss=Xl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function mg(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,at(t,i)}}var Ql={readContext:_n,use:Yl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je,useEffectEvent:je},gg={readContext:_n,use:Yl,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:$m,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,jl(4194308,4,ig.bind(null,e,t),i)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){jl(4,2,t,e)},useMemo:function(t,e){var i=Ln();e=e===void 0?null:e;var r=t();if(Er){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=Ln();if(i!==void 0){var l=i(e);if(Er){dn(!0);try{i(e)}finally{dn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=NS.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:function(t){t=xf(t);var e=t.queue,i=dg.bind(null,le,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Mf,useDeferredValue:function(t,e){var i=Ln();return Ef(i,t,e)},useTransition:function(){var t=xf(!1);return t=lg.bind(null,le,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=le,l=Ln();if(de){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),Ge===null)throw Error(s(349));(xe&127)!==0||Bm(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,$m(Fm.bind(null,r,c,t),[t]),r.flags|=2048,ls(9,{destroy:void 0},Im.bind(null,r,c,i,e),null),i},useId:function(){var t=Ln(),e=Ge.identifierPrefix;if(de){var i=zi,r=Oi;i=(r&~(1<<32-Tn(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=kl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=bS++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:bf,useFormState:jm,useActionState:jm,useOptimistic:function(t){var e=Ln();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Af.bind(null,le,!0,i),i.dispatch=e,[t,e]},useMemoCache:gf,useCacheRefresh:function(){return Ln().memoizedState=US.bind(null,le)},useEffectEvent:function(t){var e=Ln(),i={impl:t};return e.memoizedState=i,function(){if((we&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},vg={readContext:_n,use:Yl,useCallback:rg,useContext:_n,useEffect:yf,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:Wl,useRef:Jm,useState:function(){return Wl(ra)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=Ke();return og(i,Ie.memoizedState,t,e)},useTransition:function(){var t=Wl(ra)[0],e=Ke().memoizedState;return[typeof t=="boolean"?t:Co(t),e]},useSyncExternalStore:Pm,useId:fg,useHostTransitionStatus:bf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,e){var i=Ke();return Vm(i,Ie,t,e)},useMemoCache:gf,useCacheRefresh:hg,useEffectEvent:tg},LS={readContext:_n,use:Yl,useCallback:rg,useContext:_n,useEffect:yf,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:_f,useRef:Jm,useState:function(){return _f(ra)},useDebugValue:Mf,useDeferredValue:function(t,e){var i=Ke();return Ie===null?Ef(i,t,e):og(i,Ie.memoizedState,t,e)},useTransition:function(){var t=_f(ra)[0],e=Ke().memoizedState;return[typeof t=="boolean"?t:Co(t),e]},useSyncExternalStore:Pm,useId:fg,useHostTransitionStatus:bf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t,e){var i=Ke();return Ie!==null?Vm(i,Ie,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:gf,useCacheRefresh:hg,useEffectEvent:tg};function Rf(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:O({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Cf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ni(),l=Oa(r);l.payload=e,i!=null&&(l.callback=i),e=za(t,l,r),e!==null&&(Vn(e,t,r),Eo(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ni(),l=Oa(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=za(t,l,r),e!==null&&(Vn(e,t,r),Eo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ni(),r=Oa(i);r.tag=2,e!=null&&(r.callback=e),e=za(t,r,i),e!==null&&(Vn(e,t,i),Eo(e,t,i))}};function _g(t,e,i,r,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,p):e.prototype&&e.prototype.isPureReactComponent?!mo(i,r)||!mo(l,c):!0}function xg(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Cf.enqueueReplaceState(e,e.state,null)}function Tr(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Sg(t){bl(t)}function yg(t){console.error(t)}function Mg(t){bl(t)}function Jl(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Eg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wf(t,e,i){return i=Oa(i),i.tag=3,i.payload={element:null},i.callback=function(){Jl(t,e)},i}function Tg(t){return t=Oa(t),t.tag=3,t}function bg(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Eg(e,i,r)}}var p=i.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Eg(e,i,r),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function OS(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&gr(e,i,l,!0),i=xn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Rn===null?xu():i.alternate===null&&Ze===0&&(Ze=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Il?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),dh(t,r,l)),!1;case 22:return i.flags|=65536,r===Il?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),dh(t,r,l)),!1}throw Error(s(435,i.tag))}return dh(t,r,l),xu(),!1}if(de)return e=xn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==jc&&(t=Error(s(422),{cause:r}),_o(ui(t,i)))):(r!==jc&&(e=Error(s(423),{cause:r}),_o(ui(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=ui(r,i),l=wf(t.stateNode,r,l),rf(t,l),Ze!==4&&(Ze=2)),!1;var c=Error(s(520),{cause:r});if(c=ui(c,i),Bo===null?Bo=[c]:Bo.push(c),Ze!==4&&(Ze=2),e===null)return!0;r=ui(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=wf(i.stateNode,r,t),rf(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Xa===null||!Xa.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Tg(l),bg(l,t,i,r),rf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Df=Error(s(461)),en=!1;function ln(t,e,i,r){e.child=t===null?wm(e,null,i,r):Mr(e,t.child,i,r)}function Ag(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var p={};for(var E in r)E!=="ref"&&(p[E]=r[E])}else p=r;return vr(e),r=hf(t,e,i,p,c,l),E=df(),t!==null&&!en?(pf(t,e,l),sa(t,e,l)):(de&&E&&Ul(e),e.flags|=1,ln(t,e,r,l),e.child)}function Rg(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!kc(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,Cg(t,e,c,r,l)):(t=wl(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!If(t,l)){var p=c.memoizedProps;if(i=i.compare,i=i!==null?i:mo,i(p,r)&&t.ref===e.ref)return sa(t,e,l)}return e.flags|=1,t=ta(c,r),t.ref=e.ref,t.return=e,e.child=t}function Cg(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(mo(c,r)&&t.ref===e.ref)if(en=!1,e.pendingProps=r=c,If(t,l))(t.flags&131072)!==0&&(en=!0);else return e.lanes=t.lanes,sa(t,e,l)}return Uf(t,e,i,r,l)}function wg(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return Dg(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(e,c!==null?c.cachePool:null),c!==null?Nm(e,c):of(),Lm(e);else return r=e.lanes=536870912,Dg(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Pl(e,c.cachePool),Nm(e,c),Ia(),e.memoizedState=null):(t!==null&&Pl(e,null),of(),Ia());return ln(t,e,l,i),e.child}function Do(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Dg(t,e,i,r,l){var c=tf();return c=c===null?null:{parent:$e._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&Pl(e,null),of(),Lm(e),t!==null&&gr(t,e,r,!0),e.childLanes=l,null}function $l(t,e){return e=tu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ug(t,e,i){return Mr(e,t.child,null,i),t=$l(e,e.pendingProps),t.flags|=2,Jn(e),e.memoizedState=null,t}function zS(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(de){if(r.mode==="hidden")return t=$l(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Do(null,t);if(uf(e),(t=Ve)?(t=i0(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},i=pm(t),i.return=e,e.child=i,pn=e,Ve=null)):t=null,t===null)throw Da(e);return e.lanes=536870912,null}return $l(e,r)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(uf(e),l)if(e.flags&256)e.flags&=-257,e=Ug(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(en||gr(t,e,i,!1),l=(i&t.childLanes)!==0,en||l){if(Pa.current===null){if(r=Ge,r!==null&&(p=j(r,i),p!==0&&p!==c.retryLane))throw c.retryLane=p,hr(t,p),Vn(r,t,p),Df;xu()}e=Ug(t,e,i)}else t=c.treeContext,Ve=pi(p.nextSibling),pn=e,de=!0,wa=null,hi=!1,t!==null&&vm(e,t),e=$l(e,r),e.flags|=134221824;return e}return t=ta(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function us(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Uf(t,e,i,r,l){return vr(e),i=hf(t,e,i,r,void 0,l),r=df(),t!==null&&!en?(pf(t,e,l),sa(t,e,l)):(de&&r&&Ul(e),e.flags|=1,ln(t,e,i,l),e.child)}function Ng(t,e,i,r,l,c){return vr(e),e.updateQueue=null,i=zm(e,r,i,l),Om(t),r=df(),t!==null&&!en?(pf(t,e,c),sa(t,e,c)):(de&&r&&Ul(e),e.flags|=1,ln(t,e,i,c),e.child)}function Lg(t,e,i,r,l){if(vr(e),e.stateNode===null){var c=$r,p=i.contextType;typeof p=="object"&&p!==null&&(c=_n(p)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Cf,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},nf(e),p=i.contextType,c.context=typeof p=="object"&&p!==null?_n(p):$r,c.state=e.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Rf(e,i,p,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Cf.enqueueReplaceState(c,c.state,null),bo(e,r,c,l),To(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var E=e.memoizedProps,L=Tr(i,E);c.props=L;var k=c.context,tt=i.contextType;p=$r,typeof tt=="object"&&tt!==null&&(p=_n(tt));var ft=i.getDerivedStateFromProps;tt=typeof ft=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,tt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||k!==p)&&xg(e,c,r,p),La=!1;var G=e.memoizedState;c.state=G,bo(e,r,c,l),To(),k=e.memoizedState,E||G!==k||La?(typeof ft=="function"&&(Rf(e,i,ft,r),k=e.memoizedState),(L=La||_g(e,i,L,r,G,k,p))?(tt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=k),c.props=r,c.state=k,c.context=p,r=L):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,af(t,e),p=e.memoizedProps,tt=Tr(i,p),c.props=tt,ft=e.pendingProps,G=c.context,k=i.contextType,L=$r,typeof k=="object"&&k!==null&&(L=_n(k)),E=i.getDerivedStateFromProps,(k=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==ft||G!==L)&&xg(e,c,r,L),La=!1,G=e.memoizedState,c.state=G,bo(e,r,c,l),To();var J=e.memoizedState;p!==ft||G!==J||La||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof E=="function"&&(Rf(e,i,E,r),J=e.memoizedState),(tt=La||_g(e,i,tt,r,G,J,L)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,J,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,J,L)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&G===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&G===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=J),c.props=r,c.state=J,c.context=L,r=tt):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&G===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&G===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,us(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=Mr(e,t.child,null,l),e.child=Mr(e,null,i,l)):ln(t,e,i,l),e.memoizedState=c.state,t=e.child):t=sa(t,e,l),t}function Og(t,e,i,r){return pr(),e.flags|=256,ln(t,e,i,r),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:Em()}}function Of(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ei),t}function zg(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(de){if(l?Ba(e):Ia(),(t=Ve)?(t=i0(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},i=pm(t),i.return=e,e.child=i,pn=e,Ve=null)):t=null,t===null)throw Da(e);return Lh(t)?e.lanes=32:e.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ia(),l=e.mode,c=tu({mode:"hidden",children:c},l),r=dr(r,l,i,null),c.return=e,r.return=e,c.sibling=r,e.child=c,r=e.child,r.memoizedState=Lf(i),r.childLanes=Of(t,p,i),e.memoizedState=Nf,Do(null,r)):(Ba(e),zf(e,c))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return PS(t,e,c,p,r,L,E,i)}return l?(Ia(),l=r.fallback,c=e.mode,E=t.child,L=E.sibling,r=ta(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,L!==null?l=ta(L,l):(l=dr(l,c,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Do(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Lf(i):(c=l.cachePool,c!==null?(E=$e._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Em(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Of(t,p,i),e.memoizedState=Nf,Do(t.child,r)):(Ba(e),i=t.child,t=i.sibling,i=ta(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=i,e.memoizedState=null,i)}function zf(t,e){return e=tu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function tu(t,e){return t=In(22,t,null,e),t.lanes=0,t}function eu(t,e,i){return Mr(e,t.child,null,i),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PS(t,e,i,r,l,c,p,E){if(i)return e.flags&256?(Ba(e),e.flags&=-257,eu(t,e,E)):e.memoizedState!==null?(Ia(),e.child=t.child,e.flags|=128,null):(Ia(),c=l.fallback,p=e.mode,l=tu({mode:"visible",children:l.children},p),c=dr(c,p,E,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Mr(e,t.child,null,E),l=e.child,l.memoizedState=Lf(E),l.childLanes=Of(t,r,E),e.memoizedState=Nf,Do(null,l));if(Ba(e),Lh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,_o({value:l,source:null,stack:null})),eu(t,e,E)}if(en||gr(t,e,E,!1),r=(E&t.childLanes)!==0,en||r){if(Pa.current!==null)return eu(t,e,E);if(r=Ge,r!==null&&(l=j(r,E),l!==0&&l!==p.retryLane))throw p.retryLane=l,hr(t,l),Vn(r,t,l),Df;return Nh(c)||xu(),eu(t,e,E)}return Nh(c)?(e.flags|=192,e.child=t.child,null):(t=p.treeContext,Ve=pi(c.nextSibling),pn=e,de=!0,wa=null,hi=!1,t!==null&&vm(e,t),e=zf(e,l.children),e.flags|=134221824,e)}function Pg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ll(t.return,e,i)}function Bg(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&Vl(i)===null&&(e=t),t=t.sibling}return e}function nu(t,e,i,r,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=i,p.tailMode=l,p.treeForkCount=c)}function Pf(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function Bf(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var p=Sn.current;if(e.flags&128)return Ao(e,p),null;var E=(p&2)!==0;if(E?(p=p&1|2,e.flags|=128):p&=1,Ao(e,p),l==="backwards"&&t!==null?(Pf(t),ln(t,e,r,i),Pf(t)):ln(t,e,r,i),r=de?vo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pg(t,i,e);else if(t.tag===19)Pg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Bg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Pf(e)),nu(e,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Vl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}nu(e,!0,i,null,c,r);break;case"together":nu(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Bg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),nu(e,!1,l,i,c,r)}return e.child}function Ig(t,e,i){var r=e.pendingProps;return Ua(e,e.type,r.value),ln(t,e,r.children,i),e.child}function sa(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(gr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=ta(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ta(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function If(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function BS(t,e,i){switch(e.tag){case 3:$(e,e.stateNode.containerInfo),Ua(e,$e,t.memoizedState.cache),pr();break;case 27:case 5:_t(e);break;case 4:$(e,e.stateNode.containerInfo);break;case 10:Ua(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,uf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ba(e),e.flags|=128,null;r=gr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?zg(t,e,i):(Ba(e),t=sa(t,e,i),t!==null?t.sibling:null)}Ba(e);break;case 19:if(e.flags&128)return Bf(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(gr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Bf(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ao(e,Sn.current),r)break;return null;case 22:return e.lanes=0,wg(t,e,i,e.pendingProps);case 24:Ua(e,$e,t.memoizedState.cache)}return sa(t,e,i)}function Fg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)en=!0;else{if(!If(t,i)&&(e.flags&128)===0)return en=!1,BS(t,e,i);en=(t.flags&131072)!==0}else en=!1,de&&(e.flags&1048576)!==0&&gm(e,vo,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Sr(e.elementType),e.type=t,typeof t=="function")kc(t)?(r=Tr(t,r),e.tag=1,e=Lg(null,e,t,r,i)):(e.tag=0,e=Uf(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===q){e.tag=11,e=Ag(null,e,t,r,i);break t}else if(l===xt){e.tag=14,e=Rg(null,e,t,r,i);break t}else if(l===ht){e.tag=10,e.type=t,e=Ig(null,e,i);break t}}throw e=wt(t)||t,Error(s(306,e,""))}}return e;case 0:return Uf(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=Tr(r,e.pendingProps),Lg(t,e,r,l,i);case 3:t:{if($(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,af(t,e),bo(e,r,null,i);var p=e.memoizedState;if(r=p.cache,Ua(e,$e,r),r!==c.cache&&Qc(e,[$e],i,!0),To(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Og(t,e,r,i);break t}else if(r!==l){l=ui(Error(s(424)),e),_o(l),e=Og(t,e,r,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=pi(t.firstChild),pn=e,de=!0,wa=null,hi=!0,i=wm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(pr(),r===l){e=sa(t,e,i);break t}ln(t,e,r,i)}e=e.child}return e;case 26:return us(t,e),t===null?(i=c0(e.type,null,e.pendingProps,null))?e.memoizedState=i:de||(e.stateNode=Xv(e.type,e.pendingProps,N.current,e)):e.memoizedState=c0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return _t(e),t===null&&de&&(r=e.stateNode=s0(e.type,e.pendingProps,N.current),pn=e,hi=!0,l=Ve,Ya(e.type)?(Oh=l,Ve=pi(r.firstChild)):Ve=l),ln(t,e,e.pendingProps.children,i),us(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&de&&((l=r=Ve)&&(r=Uy(r,e.type,e.pendingProps,hi),r!==null?(e.stateNode=r,pn=e,Ve=pi(r.firstChild),hi=!1,l=!0):l=!1),l||Da(e)),_t(e),l=e.type,c=e.pendingProps,p=t!==null?t.memoizedProps:null,r=c.children,bh(l,c)?r=null:p!==null&&bh(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=hf(t,e,AS,null,null,i),Rs._currentValue=l),us(t,e),ln(t,e,r,i),e.child;case 6:return t===null&&de&&((t=i=Ve)&&(i=Ny(i,e.pendingProps,hi),i!==null?(e.stateNode=i,pn=e,Ve=null,t=!0):t=!1),t||Da(e)),null;case 13:return zg(t,e,i);case 4:return $(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mr(e,null,r,i):ln(t,e,r,i),e.child;case 11:return Ag(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,us(t,e),ln(t,e,r,i),e.child;case 8:return ln(t,e,e.pendingProps.children,i),e.child;case 12:return ln(t,e,e.pendingProps.children,i),e.child;case 10:return Ig(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,vr(e),l=_n(l),r=r(l),e.flags|=1,ln(t,e,r,i),e.child;case 14:return Rg(t,e,e.type,e.pendingProps,i);case 15:return Cg(t,e,e.type,e.pendingProps,i);case 19:return Bf(t,e,i);case 31:return zS(t,e,i);case 22:return wg(t,e,i,e.pendingProps);case 24:return vr(e),r=_n($e),t===null?(l=tf(),l===null&&(l=Ge,c=Jc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},nf(e),Ua(e,$e,l)):((t.lanes&i)!==0&&(af(t,e),bo(e,null,null,i),To()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Ua(e,$e,r)):(r=c.cache,Ua(e,$e,r),r!==l.cache&&Qc(e,[$e],i,!0))),ln(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:de&&Ul(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:us(t,e),ln(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function oa(t){t.flags|=4}function Ff(t,e,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?p0(e,r):p0(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Sv())t.flags|=8192;else throw yr=Il,ef}else t.flags&=-16777217}function Hg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!m0(e))if(Sv())t.flags|=8192;else throw yr=Il,ef}function iu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?pl():536870912,t.lanes|=e,ps|=e)}function Uo(t,e){if(!de)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function IS(t,e,i){var r=e.pendingProps;switch(Wc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return Xe(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),ia($e),mt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ns(e)?oa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zc())),Xe(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(oa(e),c!==null?(Xe(e),Hg(e,c)):(Xe(e),Ff(e,l,null,r,i))):c?c!==t.memoizedState?(oa(e),Xe(e),Hg(e,c)):(Xe(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&oa(e),Xe(e),Ff(e,l,t,r,i)),null;case 27:if(dt(e),i=N.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Xe(e),e.subtreeFlags&=-33554433,null}t=_e.current,ns(e)?_m(e):(t=s0(l,r,i),e.stateNode=t,oa(e))}return Xe(e),e.subtreeFlags&=-33554433,null;case 5:if(dt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Xe(e),e.subtreeFlags&=-33554433,null}if(c=_e.current,ns(e))_m(e);else{var p=Vo(N.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}c[jt]=e,c[Pt]=r;t:for(p=e.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break t;for(;p.sibling===null;){if(p.return===null||p.return===e)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}e.stateNode=c;t:switch(Mn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&oa(e)}}return Xe(e),e.subtreeFlags&=-33554433,Ff(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=N.current,ns(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=pn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[jt]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Fv(t.nodeValue,i)),t||Da(e,!0)}else t=Vo(t).createTextNode(r),t[jt]=e,e.stateNode=t}return Xe(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=ns(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[jt]=e}else pr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xe(e),t=!1}else i=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Jn(e),e):(Jn(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Xe(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ns(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[jt]=e}else pr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xe(e),l=!1}else l=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Jn(e),e):(Jn(e),null)}return Jn(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),iu(e,e.updateQueue),Xe(e),null);case 4:return mt(),t===null&&Sh(e.stateNode.containerInfo),e.flags|=67108864,Xe(e),null;case 10:return ia(e.type),Xe(e),null;case 19:if(cf(e),r=e.memoizedState,r===null)return Xe(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)Uo(r,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Vl(t),c!==null){for(e.flags|=128,Uo(r,!1),t=c.updateQueue,e.updateQueue=t,iu(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)dm(i,t),i=i.sibling;return Ao(e,Sn.current&1|2),de&&ea(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&H()>mu&&(e.flags|=128,l=!0,Uo(r,!1),e.lanes=4194304)}else{if(!l)if(t=Vl(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,iu(e,t),Uo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!de)return Xe(e),null}else 2*H()-r.renderingStartTime>mu&&i!==536870912&&(e.flags|=128,l=!0,Uo(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=H(),t.sibling=null,c=Sn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||de?Ao(e,c):(i=c,Ct(xn,e),Ct(Sn,i),Rn===null&&(Rn=e)),de&&ea(e,r.treeForkCount),t}return Xe(e),null;case 22:case 23:return Jn(e),lf(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),i=e.updateQueue,i!==null&&iu(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Jt(xr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ia($e),Xe(e),null;case 25:return null;case 30:return e.flags|=33554432,Xe(e),null}throw Error(s(156,e.tag))}function FS(t,e){switch(Wc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ia($e),mt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dt(e),null;case 31:if(e.memoizedState!==null){if(Jn(e),e.alternate===null)throw Error(s(340));pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Jn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return cf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return mt(),null;case 10:return ia(e.type),null;case 22:case 23:return Jn(e),lf(),t!==null&&Jt(xr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ia($e),null;case 25:return null;default:return null}}function Gg(t,e){switch(Wc(e),e.tag){case 3:ia($e),mt();break;case 26:case 27:case 5:dt(e);break;case 4:mt();break;case 31:e.memoizedState!==null&&Jn(e);break;case 13:Jn(e);break;case 19:cf(e);break;case 10:ia(e.type);break;case 22:case 23:Jn(e),lf(),t!==null&&Jt(xr);break;case 24:ia($e)}}function No(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,p=i.inst;r=c(),p.destroy=r}i=i.next}while(i!==l)}}catch(E){Le(e,e.return,E)}}function Fa(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var p=r.inst,E=p.destroy;if(E!==void 0){p.destroy=void 0,l=e;var L=i,k=E;try{k()}catch(tt){Le(l,L,tt)}}}r=r.next}while(r!==c)}}catch(tt){Le(e,e.return,tt)}}function Vg(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Um(e,i)}catch(r){Le(t,t.return,r)}}}function Xg(t,e,i){i.props=Tr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Le(t,e,r)}}function Pi(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=Ji(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=Kv(c)),r=l.ref;break;case 7:if(t.stateNode===null){var p=new ii(t);g(t.child,!1,wy,p,void 0,void 0),t.stateNode=p}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Le(t,e,E)}}function yn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Le(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Le(t,e,l)}else i.current=null}function au(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)n0(t.stateNode,e[i])}function kg(t){for(var e=t.return;e!==null&&(Gf(e)&&n0(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function Lo(t){for(var e=t.return;e!==null&&(Gf(e)&&Dy(t.stateNode,e.stateNode),!Hf(e));)e=e.return}function Hf(t){return t.tag===5||t.tag===3||t.tag===27}function Gf(t){return t&&t.tag===7&&t.stateNode!==null}function Vf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Le(t,t.return,l)}}function Xf(t,e,i){try{var r=t.stateNode;fy(r,t.type,i,e),r[Pt]=e}catch(l){Le(t,t.return,l)}}function qg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function kf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Li)),au(t,r),Re=!0;else if(l!==4&&(l===27&&(au(t,r),r=null,Ya(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(qf(t,e,i,r),t=t.sibling;t!==null;)qf(t,e,i,r),t=t.sibling}function ru(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),au(t,r),Re=!0;else if(l!==4&&(l===27&&(au(t,r),r=null,Ya(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(ru(t,e,i,r),t=t.sibling;t!==null;)ru(t,e,i,r),t=t.sibling}function Yg(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Mn(e,r,i),e[jt]=t,e[Pt]=i}catch(c){Le(t,t.return,c)}}var su=!1,$n=null;function Wg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(su=!0)}var Bi=null;function jg(){var t=Bi;return Bi=null,t}var Fn=0;function cs(t,e,i,r,l){return Fn=0,Zg(t.child,e,i,r,l)}function Zg(t,e,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(r!==null){var E=Ch(p);r.push(E),E.view&&(c=!0)}else c||Ch(p).view&&(c=!0);su=!0,jv(p,Fn===0?e:e+"_"+Fn,i),Fn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Zg(t.child,e,i,r,l)&&(c=!0));t=t.sibling}return c}function Ii(t,e){for(;t!==null;)t.tag===5?Zv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Ii(t.child,e)),t=t.sibling}function ou(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(ou(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=$i(e.default,e.share),e!=="none"&&(cs(t,i,e,null,!1)||Ii(t.child,!1))}t=t.sibling}}function Yf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=Ji(r,i),c=$i(r.default,i.paired?r.share:r.enter);c!=="none"?cs(t,l,c,null,!1)?(ou(t),i.paired||e||_s(t,r.onEnter)):Ii(t.child,!1):ou(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling;else ou(t)}function Wf(t){if($n!==null&&$n.size!==0){var e=$n;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var c=$i(i.default,i.share);if(c!=="none"&&(cs(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,_s(t,i.onShare)):Ii(t.child,!1)),e.delete(r),e.size===0)break}}}Wf(t)}t=t.sibling}}}function jf(t){if(t.tag===30){var e=t.memoizedProps,i=Ji(e,t.stateNode),r=$n!==null?$n.get(i):void 0,l=$i(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(cs(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,$n.delete(i),_s(t,e.onShare)):_s(t,e.onExit):Ii(t.child,!1)),$n!==null&&Wf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)jf(t),t=t.sibling;else $n!==null&&Wf(t)}function Kg(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=Ji(e,t.stateNode);e=$i(e.default,e.update),t.flags&=-5,e!=="none"&&cs(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Kg(t);t=t.sibling}}function Zf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Ii(t.child,!1))}Zf(t)}t=t.sibling}}function lu(t){if(t.tag===30)t.stateNode.paired=null,Ii(t.child,!1),Zf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)lu(t),t=t.sibling;else Zf(t)}function Qg(t){for(t=t.child;t!==null;)t.tag===30?Ii(t.child,!1):(t.subtreeFlags&33554432)!==0&&Qg(t),t=t.sibling}function Kf(t,e,i,r,l,c,p){for(var E=!1;e!==null;){if(e.tag===5){var L=e.stateNode;if(c!==null&&Fn<c.length){var k=c[Fn],tt=Ch(L);(k.view||tt.view)&&(E=!0);var ft;if(ft=(t.flags&4)===0)if(tt.clip)ft=!0;else{ft=k.rect;var G=tt.rect;ft=ft.y!==G.y||ft.x!==G.x||ft.height!==G.height||ft.width!==G.width}ft&&(t.flags|=4),tt.abs?tt=!k.abs:(k=k.rect,tt=tt.rect,tt=k.height!==tt.height||k.width!==tt.width),tt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&jv(L,Fn===0?i:i+"_"+Fn,l),E&&(t.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(L,Fn===0?r:r+"_"+Fn,e.memoizedProps)),Fn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&p?t.flags|=e.flags&32:Kf(t,e.child,i,r,l,c,p)&&(E=!0));e=e.sibling}return E}function Jg(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=Ji(i,r),c=$i(i.default,i.update),p;p=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Fn=0,l=Kf(r,E,l,l,c,p,!1),(t.flags&4)!==0&&l&&_s(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Jg(t);t=t.sibling}}var mn=!1,De=!1,Fi=!1,Qf=!1,$g=typeof WeakSet=="function"?WeakSet:Set,gn=null,Hi=!1,Oo=!1,uu=!1,Jf=!1;function HS(t,e,i){if(t=t.containerInfo,Eh=Cs,t=im(t),Bc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var E=0,L=-1,k=-1,tt=0,ft=0,G=t,J=null;e:for(;;){for(var Rt;G!==r||c!==0&&G.nodeType!==3||(L=E+c),G!==p||l!==0&&G.nodeType!==3||(k=E+l),G.nodeType===3&&(E+=G.nodeValue.length),(Rt=G.firstChild)!==null;)J=G,G=Rt;for(;;){if(G===t)break e;if(J===r&&++tt===c&&(L=E),J===p&&++ft===l&&(k=E),(Rt=G.nextSibling)!==null)break;G=J,J=G.parentNode}G=Rt}r=L===-1||k===-1?null:{start:L,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Th={focusedElem:t,selectionRange:r},Cs=!1,i=(i&335544064)===i,gn=e,e=i?9270:1024;gn!==null;){if(t=gn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&jf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&Wg(t),cu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&jf(r),cu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&Wg(t),cu(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,gn=r):(i&&Kg(t),cu(i))}}$n=null}function cu(t){for(;gn!==null;){var e=gn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=e.stateNode;try{var p=Tr(e.type,l);i=c.getSnapshotBeforeUpdate(p,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Le(e,e.return,E)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Uh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Uh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=Ji(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=$i(l.default,l.update),l!=="none"&&cs(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,gn=r;break}gn=e.return}}function tv(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(t,i),r&4&&No(5,i);break;case 1:if(Gi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(p){Le(i,i.return,p)}else{var l=Tr(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Le(i,i.return,p)}}r&64&&Vg(i),r&512&&Pi(i,i.return);break;case 3:if(Gi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Um(t,e)}catch(p){Le(i,i.return,p)}}break;case 27:e===null&&r&4&&Yg(i);case 26:case 5:Gi(t,i),e===null&&r&4&&Vf(i),r&512&&Pi(i,i.return);break;case 12:Gi(t,i);break;case 31:Gi(t,i),r&4&&av(t,i);break;case 13:Gi(t,i),r&4&&rv(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=JS.bind(null,i),Ly(t,i))));break;case 22:if(r=i.memoizedState!==null||mn,!r){var c=e!==null&&e.memoizedState!==null||De;e=mn,l=De,mn=r,(De=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Mi(t,i,r)):Gi(t,i),mn=e,De=l}break;case 30:Gi(t,i),r&512&&Pi(i,i.return);break;case 7:r&512&&Pi(i,i.return);default:Gi(t,i)}}function $f(t,e){for(t=t.child;t!==null;)ev(t,e),t=t.sibling}function ev(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(L){Le(t,t.return,L)}th(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,Re=!0}catch(L){Le(t,t.return,L)}break;case 18:try{var E=t.stateNode;e?Wv(E,!0):Wv(t.stateNode,!1)}catch(L){Le(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&$f(t,e);break;default:$f(t,e)}}function th(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:ev(i,r);break t;case 22:i.memoizedState===null&&th(i,r);break t;default:th(i,r)}}t=t.sibling}}function nv(t){var e=t.alternate;e!==null&&(t.alternate=null,nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ee(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Hn=!1;function Si(t,e,i){for(i=i.child;i!==null;)iv(t,e,i),i=i.sibling}function iv(t,e,i){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Me,i)}catch{}switch(i.tag){case 26:De||yn(i,e),Si(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!De&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:De||yn(i,e),Lo(i);var r=Ye,l=Hn;Ya(i.type)&&(Ye=i.stateNode,Hn=!1),Si(t,e,i),o0(i.stateNode,i.type,i.memoizedProps),Ye=r,Hn=l;break;case 5:De||yn(i,e),Lo(i);case 6:if(i.tag===6&&Lo(i),r=Ye,l=Hn,Ye=null,Si(t,e,i),Ye=r,Hn=l,Ye!==null)if(Hn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(i.stateNode),Re=!0}catch(c){Le(i,e,c)}else try{Ye.removeChild(i.stateNode),Re=!0}catch(c){Le(i,e,c)}break;case 18:Ye!==null&&(Hn?(t=Ye,Yv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),ws(t)):Yv(Ye,i.stateNode));break;case 4:r=Ye,l=Hn,Ye=i.stateNode.containerInfo,Hn=!0,Si(t,e,i),Ye=r,Hn=l;break;case 0:case 11:case 14:case 15:Fa(2,i,e),De||Fa(4,i,e),Si(t,e,i);break;case 1:De||(yn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Xg(i,e,r)),Si(t,e,i);break;case 21:Si(t,e,i);break;case 22:De=(r=De)||i.memoizedState!==null,Si(t,e,i),De=r;break;case 30:yn(i,e),Si(t,e,i);break;case 7:De||yn(i,e),Si(t,e,i);break;default:Si(t,e,i)}}function av(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ws(t)}catch(i){Le(e,e.return,i)}}}function rv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ws(t)}catch(i){Le(e,e.return,i)}}function GS(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new $g),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new $g),e;default:throw Error(s(435,t.tag))}}function fu(t,e){var i=GS(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=$S.bind(null,t,r);r.then(l,l)}})}function On(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],p=t,E=e,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(Ya(L.type)){Ye=L.stateNode,Hn=!1;break t}break;case 5:Ye=L.stateNode,Hn=!1;break t;case 3:case 4:Ye=L.stateNode.containerInfo,Hn=!0;break t}L=L.return}if(Ye===null)throw Error(s(160));iv(p,E,c),Ye=null,Hn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)sv(e,t,i),e=e.sibling}var yi=null;function sv(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var p=r[c];p.ref.impl=p.nextImpl}On(e,t,i),zn(t),l&4&&(Fa(3,t,t.return),No(3,t),Fa(5,t,t.return));break;case 1:On(e,t,i),zn(t),l&512&&(De||r===null||yn(r,r.return)),l&64&&mn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(c=yi,On(e,t,i),zn(t),l&512&&(De||r===null||yn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(mn)t.stateNode=Xv(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[kt]||r[jt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),Mn(r,e,i),r[jt]=t,se(r),e=r;break t;case"link":if(c=d0("link","href",l).get(e+(i.href||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(p,1);break e}}r=l.createElement(e),Mn(r,e,i),l.head.appendChild(r);break;case"meta":if(c=d0("meta","content",l).get(e+(i.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(p,1);break e}}r=l.createElement(e),Mn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[jt]=t,se(r),e=r}t.stateNode=e}else mn||Ih(c,t.type,t.stateNode);else t.stateNode=h0(c,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||De||e.parentNode.removeChild(e)):l.count--,i===null?mn||Ih(c,t.type,t.stateNode):h0(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 27:On(e,t,i),zn(t),l&512&&(De||r===null||yn(r,r.return)),r!==null&&l&4&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Fi,Fi=!1,On(e,t,i),Fi=c,zn(t),l&512&&(De||r===null||yn(r,r.return)),t.flags&32){e=t.stateNode;try{Yr(e,""),Re=!0}catch(tt){Le(t,t.return,tt)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Xf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(Qf=!0);break;case 6:if(On(e,t,i),zn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,Re=!0}catch(tt){Le(t,t.return,tt)}}break;case 3:if(Re=!1,Au=null,c=yi,yi=Xo(e.containerInfo),On(e,t,i),yi=c,zn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(tt){Le(t,t.return,tt)}Qf&&(Qf=!1,ov(t)),Re=!1;break;case 4:l=Fi,Fi=mn,r=Rp(),c=yi,yi=Xo(t.stateNode.containerInfo),On(e,t,i),zn(t),yi=c,Re&&Oo&&(uu=!0),Re=r,Fi=l;break;case 12:On(e,t,i),zn(t);break;case 31:On(e,t,i),zn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,fu(t,e)));break;case 13:On(e,t,i),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pu=H()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,fu(t,e)));break;case 22:c=t.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var E=mn,L=De,k=Fi;mn=E||c,Fi=k||c,De=L||p,On(e,t,i),De=L,Fi=k,mn=E,zn(t),l&8192&&(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||r===null||p||mn||De||(e=p||De,i=mn,r=De,mn=c||mn,De=e,Ha(t,2),mn=i,De=r),!c&&Fi||$f(t,c)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,fu(t,i))));break;case 19:On(e,t,i),zn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,fu(t,e)));break;case 30:l&512&&(De||r===null||yn(r,r.return)),l=Rp(),c=Oo,p=(i&335544064)===i,E=t.memoizedProps,Oo=p&&$i(E.default,E.update)!=="none",On(e,t,i),zn(t),p&&r!==null&&Re&&(t.flags|=4),Oo=c,Re=l;break;case 21:break;case 7:l&512&&(De||r===null||yn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:On(e,t,i),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(qg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Gf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Hf(l))break;l=l.return}var p=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,L=kf(t);ru(t,L,E,p);break;case 5:var k=i.stateNode;i.flags&32&&(Yr(k,""),i.flags&=-33);var tt=kf(t);ru(t,tt,k,p);break;case 3:case 4:var ft=i.stateNode.containerInfo,G=kf(t);qf(t,G,ft,p);break;default:throw Error(s(161))}}catch(J){Le(t,t.return,J)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ov(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ov(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Cs=!0,e.reset(),Cs=!1),t=t.sibling}}function fs(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)lv(e,t),e=e.sibling;else Jg(e)}function lv(t,e){var i=t.alternate;if(i===null)Yf(t,!1);else switch(t.tag){case 3:if(Jf=Hi=!1,jg(),fs(e,t),!Hi&&!uu){if(t=Bi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];Zv(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jf=!0}Bi=null;break;case 5:fs(e,t);break;case 4:r=Hi,Hi=!1,fs(e,t),Hi&&(uu=!0),Hi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Yf(t,!1):fs(e,t));break;case 30:r=Hi,l=jg(),Hi=!1,fs(e,t),Hi&&(t.flags|=4);var c=t.memoizedProps,p=t.stateNode;e=Ji(c,p),p=Ji(i.memoizedProps,p);var E=$i(c.default,c.update);E==="none"?e=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Fn=0,e=Kf(t,i,e,p,E,c,!0),Fn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(_s(t,t.memoizedProps.onUpdate),Bi=l):l!==null&&(l.push.apply(l,Bi),Bi=l),Hi=(t.flags&32)!==0?!0:r;break;default:fs(e,t)}}function Gi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)tv(t,e.alternate,e),e=e.sibling}function Ha(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Fa(4,i,i.return),Ha(i,r);break;case 1:yn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Xg(i,i.return,l),Ha(i,r);break;case 27:(r&2)!==0&&o0(i.stateNode,i.type,i.memoizedProps);case 5:yn(i,i.return),i.tag!==5&&i.tag!==27||Lo(i),Ha(i,r);break;case 6:Lo(i);break;case 26:yn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||De||l.parentNode.removeChild(l),Ha(i,r);break;case 22:i.memoizedState===null&&Ha(i,r);break;case 30:yn(i,i.return),Ha(i,r);break;case 7:yn(i,i.return);default:Ha(i,r)}t=t.sibling}}function Mi(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,p=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Mi(l,c,i),No(4,c);break;case 1:if(Mi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(tt){Le(r,r.return,tt)}if(r=c,l=r.updateQueue,l!==null){var L=r.stateNode;try{var k=l.shared.hiddenCallbacks;if(k!==null)for(l.shared.hiddenCallbacks=null,l=0;l<k.length;l++)Dm(k[l],L)}catch(tt){Le(r,r.return,tt)}}E&&p&64&&Vg(c),Pi(c,c.return);break;case 27:(i&2)!==0&&Yg(c);case 5:c.tag!==5&&c.tag!==27||kg(c),Mi(l,c,i),E&&r===null&&p&4&&Vf(c),Pi(c,c.return);break;case 6:kg(c);break;case 26:L=c.stateNode,c.memoizedState!==null||L===null||mn||Ih(Xo(L.ownerDocument),c.type,L),Mi(l,c,i),E&&r===null&&p&4&&Vf(c),Pi(c,c.return);break;case 12:Mi(l,c,i);break;case 31:Mi(l,c,i),E&&p&4&&av(l,c);break;case 13:Mi(l,c,i),E&&p&4&&rv(l,c);break;case 22:c.memoizedState===null&&Mi(l,c,i),Pi(c,c.return);break;case 30:Mi(l,c,i),Pi(c,c.return);break;case 7:Pi(c,c.return);default:Mi(l,c,i)}e=e.sibling}}function eh(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&xo(i))}function nh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xo(t))}function di(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)uv(t,e,i,r),e=e.sibling;else l&&Qg(e)}function uv(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&lu(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:di(t,e,i,r),c&2048&&No(9,e);break;case 1:di(t,e,i,r);break;case 3:di(t,e,i,r),l&&Jf&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&xo(c)));break;case 12:if(c&2048){di(t,e,i,r),c=e.stateNode;try{var p=e.memoizedProps,E=p.id,L=p.onPostCommit;typeof L=="function"&&L(E,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(k){Le(e,e.return,k)}}else di(t,e,i,r);break;case 31:di(t,e,i,r);break;case 13:di(t,e,i,r);break;case 23:break;case 22:p=e.stateNode,E=e.alternate,e.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&lu(E),p._visibility&2?di(t,e,i,r):zo(t,e)):(l&&E!==null&&E.memoizedState!==null&&lu(e),p._visibility&2?di(t,e,i,r):(p._visibility|=2,hs(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),c&2048&&eh(E,e);break;case 24:di(t,e,i,r),c&2048&&nh(e.alternate,e);break;case 30:l&&(c=e.alternate,c!==null&&(Ii(c.child,!0),Ii(e.child,!0))),di(t,e,i,r);break;default:di(t,e,i,r)}}function hs(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,p=e,E=i,L=r,k=p.flags;switch(p.tag){case 0:case 11:case 15:hs(c,p,E,L,l),No(8,p);break;case 23:break;case 22:var tt=p.stateNode;p.memoizedState!==null?tt._visibility&2?hs(c,p,E,L,l):zo(c,p):(tt._visibility|=2,hs(c,p,E,L,l)),l&&k&2048&&eh(p.alternate,p);break;case 24:hs(c,p,E,L,l),l&&k&2048&&nh(p.alternate,p);break;default:hs(c,p,E,L,l)}e=e.sibling}}function zo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:zo(i,r),l&2048&&eh(r.alternate,r);break;case 24:zo(i,r),l&2048&&nh(r.alternate,r);break;default:zo(i,r)}e=e.sibling}}var br=8192;function Ar(t,e,i){if(t.subtreeFlags&br)for(t=t.child;t!==null;)cv(t,e,i),t=t.sibling}function cv(t,e,i){switch(t.tag){case 26:Ar(t,e,i),t.flags&br&&(t.memoizedState!==null?Wy(i,yi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&v0(i,t)));break;case 5:Ar(t,e,i),t.flags&br&&(t=t.stateNode,(e&335544128)===e&&v0(i,t));break;case 3:case 4:var r=yi;yi=Xo(t.stateNode.containerInfo),Ar(t,e,i),yi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=br,br=16777216,Ar(t,e,i),br=r):Ar(t,e,i));break;case 30:if((t.flags&br)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,$n===null&&($n=new Map),$n.set(r,l)}Ar(t,e,i);break;default:Ar(t,e,i)}}function fv(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Po(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];gn=r,dv(r,t)}fv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hv(t),t=t.sibling}function hv(t){switch(t.tag){case 0:case 11:case 15:Po(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Po(t);break;case 12:Po(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,hu(t)):Po(t);break;default:Po(t)}}function hu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];gn=r,dv(r,t)}fv(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fa(8,e,e.return),hu(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,hu(e));break;default:hu(e)}t=t.sibling}}function dv(t,e){for(;gn!==null;){var i=gn;switch(i.tag){case 0:case 11:case 15:Fa(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:xo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,gn=r;else t:for(i=t;gn!==null;){r=gn;var l=r.sibling,c=r.return;if(nv(r),r===i){gn=null;break t}if(l!==null){l.return=c,gn=l;break t}gn=c}}}var VS={getCacheForType:function(t){var e=_n($e),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return _n($e).controller.signal}},XS=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,ge=null,xe=0,Ne=0,ti=null,Ga=!1,ds=!1,ih=!1,la=0,Ze=0,Va=0,Rr=0,du=0,ei=0,ps=0,Bo=null,Gn=null,ah=!1,pu=0,pv=0,mu=1/0,gu=null,Xa=null,We=0,Ei=null,Cr=null,Vi=0,rh=0,sh=null,mv=null,ms=null,gs=null,vs=null,Io=0,vu=null;function ni(){return(we&2)!==0&&xe!==0?xe&-xe:Tt.T!==null?gh():qt()}function gv(){if(ei===0)if((xe&536870912)===0||de){var t=ur;ur<<=1,(ur&3932160)===0&&(ur=262144),ei=t}else ei=536870912;return t=xn.current,t!==null&&(t.flags|=32),ei}function _s(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=Kv(Ji(t.memoizedProps,i))),gs===null&&(gs=[]),gs.push(e.bind(null,r))}}function Vn(t,e,i){(t===Ge&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)&&(xs(t,0),ka(t,xe,ei,!1)),R(t,i),((we&2)===0||t!==Ge)&&(t===Ge&&((we&2)===0&&(Rr|=i),Ze===4&&ka(t,xe,ei,!1)),Xi(t))}function vv(t,e,i){if((we&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ta(t,e),l=r?YS(t,e):lh(t,e,!0),c=r;do{if(l===0){ds&&!r&&ka(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!kS(i)){l=lh(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var E=t;l=Bo;var L=E.current.memoizedState.isDehydrated;if(L&&(xs(E,p).flags|=256),p=lh(E,p,!1),p!==2&&p!==6){if(ih&&!L){E.errorRecoveryDisabledLanes|=c,Rr|=c,l=4;break t}c=Gn,Gn=l,c!==null&&(Gn===null?Gn=c:Gn.push.apply(Gn,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){xs(t,0),ka(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:ka(r,e,ei,!Ga);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=pu+300-H(),10<l)){if(ka(r,e,ei,!Ga),Zi(r,0,!0)!==0)break t;Vi=e,r.timeoutHandle=Rh(_v.bind(null,r,i,Gn,gu,ah,e,ei,Rr,ps,Ga,c,"Throttled",-0,0),l);break t}_v(r,i,Gn,gu,ah,e,ei,Rr,ps,Ga,c,null,-0,0)}}break}while(!0);Xi(t)}function _v(t,e,i,r,l,c,p,E,L,k,tt,ft,G,J){t.timeoutHandle=-1;var Rt=e.subtreeFlags,Xt=(c&335544064)===c;if(ft=null,(Xt||Rt&8192||(Rt&16785408)===16785408)&&(ft={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},$n=null,cv(e,c,ft),Xt&&(Rt=ft,Xt=t.containerInfo,Xt=(Xt.nodeType===9?Xt:Xt.ownerDocument).__reactViewTransition,Xt!=null&&(Rt.count++,Rt.waitingForViewTransition=!0,Rt=Yo.bind(Rt),Xt.finished.then(Rt,Rt))),Rt=(c&62914560)===c?pu-H():(c&4194048)===c?pv-H():0,Rt=jy(ft,Rt),Rt!==null)){Vi=c,t.cancelPendingCommit=Rt(Av.bind(null,t,e,c,i,r,l,p,E,L,k,tt,ft,null,G,J)),ka(t,c,p,!k);return}Av(t,e,c,i,r,l,p,E,L,k,tt,ft)}function kS(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Qn(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ka(t,e,i,r){e=ro(t,e),e&=~du,e&=~Rr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-Tn(l),p=1<<c;r[c]=-1,l&=~p}i!==0&&nt(t,i,e)}function _u(){return(we&6)===0?(Fo(0),!1):!0}function oh(){if(ge!==null){if(Ne===0)var t=ge.return;else t=ge,na=mr=null,mf(t),rs=null,Mo=0,t=ge;for(;t!==null;)Gg(t.alternate,t),t=t.return;ge=null}}function xs(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,py(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Vi=0,oh(),Ge=t,ge=i=ta(t.current,null),xe=e,Ne=0,ti=null,Ga=!1,ds=Ta(t,e),ih=!1,ps=ei=du=Rr=Va=Ze=0,Gn=Bo=null,ah=!1,la=ro(t,e),Al(),i}function xv(t,e){le=null,Tt.H=Ql,e===as||e===Bl?(e=Am(),Ne=3):e===ef?(e=Am(),Ne=4):Ne=e===Df?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ti=e,ge===null&&(Ze=1,Jl(t,ui(e,t.current)))}function Sv(){var t=xn.current;return t===null?!0:(xe&4194048)===xe?Rn===null:(xe&62914560)===xe||(xe&536870912)!==0?t===Rn:!1}function yv(){var t=Tt.H;return Tt.H=Ql,t===null?Ql:t}function Mv(){var t=Tt.A;return Tt.A=VS,t}function xu(){Ze=4,Ga||(xe&4194048)!==xe&&xn.current!==null||(ds=!0),(Va&134217727)===0&&(Rr&134217727)===0||Ge===null||ka(Ge,xe,ei,!1)}function lh(t,e,i){var r=we;we|=2;var l=yv(),c=Mv();(Ge!==t||xe!==e)&&(gu=null,xs(t,e)),e=!1;var p=Ze;t:do try{if(Ne!==0&&ge!==null){var E=ge,L=ti;switch(Ne){case 8:oh(),p=6;break t;case 3:case 2:case 9:case 6:xn.current===null&&(e=!0);var k=Ne;if(Ne=0,ti=null,Ss(t,E,L,k),i&&ds){p=0;break t}break;default:k=Ne,Ne=0,ti=null,Ss(t,E,L,k)}}qS(),p=Ze;break}catch(tt){xv(t,tt)}while(!0);return e&&t.shellSuspendCounter++,na=mr=null,we=r,Tt.H=l,Tt.A=c,ge===null&&(Ge=null,xe=0,Al()),p}function qS(){for(;ge!==null;)Ev(ge)}function YS(t,e){var i=we;we|=2;var r=yv(),l=Mv();Ge!==t||xe!==e?(gu=null,mu=H()+500,xs(t,e)):ds=Ta(t,e);t:do try{if(Ne!==0&&ge!==null){e=ge;var c=ti;e:switch(Ne){case 1:Ne=0,ti=null,Ss(t,e,c,1);break;case 2:case 9:if(Tm(c)){Ne=0,ti=null,Tv(e);break}e=function(){Ne!==2&&Ne!==9||Ge!==t||(Ne=7),Xi(t)},c.then(e,e);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Tm(c)?(Ne=0,ti=null,Tv(e)):(Ne=0,ti=null,Ss(t,e,c,7));break;case 5:var p=null;switch(ge.tag){case 26:p=ge.memoizedState;case 5:case 27:var E=ge;if(p?m0(p):E.stateNode.complete){Ne=0,ti=null;var L=E.sibling;if(L!==null)ge=L;else{var k=E.return;k!==null?(ge=k,Su(k)):ge=null}break e}}Ne=0,ti=null,Ss(t,e,c,5);break;case 6:Ne=0,ti=null,Ss(t,e,c,6);break;case 8:oh(),Ze=6;break t;default:throw Error(s(462))}}WS();break}catch(tt){xv(t,tt)}while(!0);return na=mr=null,Tt.H=r,Tt.A=l,we=i,ge!==null?0:(Ge=null,xe=0,Al(),Ze)}function WS(){for(;ge!==null&&!oe();)Ev(ge)}function Ev(t){var e=Fg(t.alternate,t,la);t.memoizedProps=t.pendingProps,e===null?Su(t):ge=e}function Tv(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Ng(i,e,e.pendingProps,e.type,void 0,xe);break;case 11:e=Ng(i,e,e.pendingProps,e.type.render,e.ref,xe);break;case 5:mf(e);var r=e;r===pn&&(de?(Nl(r),r.tag===5&&r.stateNode!=null&&(Ve=r.stateNode)):(Nl(r),de=!0));default:Gg(i,e),e=ge=dm(e,la),e=Fg(i,e,la)}t.memoizedProps=t.pendingProps,e===null?Su(t):ge=e}function Ss(t,e,i,r){na=mr=null,mf(e),rs=null,Mo=0;var l=e.return;try{if(OS(t,l,e,i,xe)){Ze=1,Jl(t,ui(i,t.current)),ge=null;return}}catch(c){if(l!==null)throw ge=l,c;Ze=1,Jl(t,ui(i,t.current)),ge=null;return}e.flags&32768?(de||r===1?t=!0:ds||(xe&536870912)!==0?t=!1:(Ga=t=!0,(r===2||r===9||r===3||r===6)&&(r=xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),bv(e,t)):Su(e)}function Su(t){var e=t;do{if((e.flags&32768)!==0){bv(e,Ga);return}t=e.return;var i=IS(e.alternate,e,la);if(i!==null){ge=i;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);Ze===0&&(Ze=5)}function bv(t,e){do{var i=FS(t.alternate,t);if(i!==null){i.flags&=32767,ge=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){ge=t;return}ge=t=i}while(t!==null);Ze=6,ge=null}function Av(t,e,i,r,l,c,p,E,L,k,tt,ft){t.cancelPendingCommit=null;do yu();while(We!==0);if((we&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===Ge&&(ge=Ge=null,xe=0),Cr=e,Ei=t,Vi=i,sh=l,mv=r,jS(t,e,i,p,E,L,ft)}}function jS(t,e,i,r,l,c,p){var E=e.lanes|e.childLanes;if(rh=E,E|=Vc,W(t,i,E,r,l,c),gs=null,(i&335544064)===i?(vs=MS(t),r=10262):(vs=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,ty(Lt,function(){return hh(),null})):(t.callbackNode=null,t.callbackPriority=0),su=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,l=At.p,At.p=2,c=we,we|=4;try{HS(t,e,i)}finally{we=c,At.p=l,Tt.T=r}}We=1,su?ms=Sy(p,t.containerInfo,vs,uh,ch,KS,fh,hh,ZS):(uh(),ch(),fh())}function ZS(t){if(We!==0){var e=Ei.onRecoverableError;e(t,{componentStack:null})}}function KS(){We===3&&(We=0,lv(Cr,Ei),We=4)}function uh(){if(We===1){We=0;var t=Ei,e=Cr,i=Vi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var l=At.p;At.p=2;var c=we;we|=4;try{Oo=uu=!1,sv(e,t,i),i=Th;var p=im(t.containerInfo),E=i.focusedElem,L=i.selectionRange;if(p!==E&&E&&E.ownerDocument&&nm(E.ownerDocument.documentElement,E)){if(L!==null&&Bc(E)){var k=L.start,tt=L.end;if(tt===void 0&&(tt=k),"selectionStart"in E)E.selectionStart=k,E.selectionEnd=Math.min(tt,E.value.length);else{var ft=E.ownerDocument||document,G=ft&&ft.defaultView||window;if(G.getSelection){var J=G.getSelection(),Rt=E.textContent.length,Xt=Math.min(L.start,Rt),ue=L.end===void 0?Xt:Math.min(L.end,Rt);!J.extend&&Xt>ue&&(p=ue,ue=Xt,Xt=p);var X=em(E,Xt),B=em(E,ue);if(X&&B&&(J.rangeCount!==1||J.anchorNode!==X.node||J.anchorOffset!==X.offset||J.focusNode!==B.node||J.focusOffset!==B.offset)){var Q=ft.createRange();Q.setStart(X.node,X.offset),J.removeAllRanges(),Xt>ue?(J.addRange(Q),J.extend(B.node,B.offset)):(Q.setEnd(B.node,B.offset),J.addRange(Q))}}}}for(ft=[],J=E;J=J.parentNode;)J.nodeType===1&&ft.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ft.length;E++){var ct=ft[E];ct.element.scrollLeft=ct.left,ct.element.scrollTop=ct.top}}Cs=!!Eh,Th=Eh=null}finally{we=c,At.p=l,Tt.T=r}}t.current=e,We=2}}function ch(){if(We===2){We=0;var t=Ei,e=Cr,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Tt.T,Tt.T=null;var r=At.p;At.p=2;var l=we;we|=4;try{tv(t,e.alternate,e)}finally{we=l,At.p=r,Tt.T=i}}We=3}}function fh(){if(We===4||We===3){We=0;var t=ms;ms=null,Be();var e=Ei,i=Cr,r=Vi,l=mv,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?We=5:(We=0,Cr=Ei=null,Rv(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(Xa=null),Ot(r),i=i.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Tt.T,c=At.p,At.p=2,Tt.T=null;try{for(var p=e.onRecoverableError,E=0;E<l.length;E++){var L=l[E];p(L.value,{componentStack:L.stack})}}finally{Tt.T=i,At.p=c}}if(l=gs,p=vs,vs=null,l!==null&&(gs=null,p===null&&(p=[]),t!==null))for(L=0;L<l.length;L++)i=(0,l[L])(p),i!==void 0&&t.finished.finally(i);(Vi&3)!==0&&yu(),Xi(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===vu?Io++:(Io=0,vu=e):(Io=0,vu=null),Fo(0)}}function Rv(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,xo(e)))}function yu(){return ms!==null&&(ms.skipTransition(),ms=null),uh(),ch(),fh(),hh()}function hh(){if(We!==5)return!1;var t=Ei,e=rh;rh=0;var i=Ot(Vi),r=Tt.T,l=At.p;try{At.p=32>i?32:i,Tt.T=null,i=sh,sh=null;var c=Ei,p=Vi;if(We=0,Cr=Ei=null,Vi=0,(we&6)!==0)throw Error(s(331));var E=we;if(we|=4,hv(c.current),uv(c,c.current,p,i),we=E,Fo(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{At.p=l,Tt.T=r,Rv(t,e)}}function Cv(t,e,i){e=ui(i,e),e=wf(t.stateNode,e,2),t=za(t,e,2),t!==null&&(R(t,2),Xi(t))}function Le(t,e,i){if(t.tag===3)Cv(t,t,i);else for(;e!==null;){if(e.tag===3){Cv(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xa===null||!Xa.has(r))){t=ui(i,t),i=Tg(2),r=za(e,i,2),r!==null&&(bg(i,r,e,t),R(r,2),Xi(r));break}}e=e.return}}function dh(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new XS;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(ih=!0,l.add(i),t=QS.bind(null,t,e,i),e.then(t,t))}function QS(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ge===t&&(xe&i)===i&&((Ze===4||Ze===3&&(xe&62914560)===xe&&300>H()-pu)&&(we&2)===0?xs(t,0):du|=i,ps===xe&&(ps=0)),Xi(t)}function wv(t,e){e===0&&(e=pl()),t=hr(t,e),t!==null&&(R(t,e),Xi(t))}function JS(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),wv(t,i)}function $S(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),wv(t,i)}function ty(t,e){return Ht(t,e)}var ys=null,Ms=null,ph=!1,Mu=!1,mh=!1,qa=0;function Xi(t){t!==Ms&&t.next===null&&(Ms===null?ys=Ms=t:Ms=Ms.next=t),Mu=!0,ph||(ph=!0,ny())}function Fo(t,e){if(!mh&&Mu){mh=!0;do for(var i=!1,r=ys;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var p=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Tn(42|t)+1)-1,c&=l&~(p&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,Lv(r,c))}else c=xe,c=Zi(r,r===Ge?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ta(r,c)||(i=!0,Lv(r,c));r=r.next}while(i);mh=!1}}function ey(){Dv()}function Dv(){Mu=ph=!1;var t=0;qa!==0&&dy()&&(t=qa);for(var e=H(),i=null,r=ys;r!==null;){var l=r.next,c=Uv(r,e);c===0?(r.next=null,i===null?ys=l:i.next=l,l===null&&(Ms=i)):(i=r,(t!==0||(c&3)!==0)&&(Mu=!0)),r=l}We!==0&&We!==5||Fo(t),qa!==0&&(qa=0)}function Uv(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-Tn(c),E=1<<p,L=l[p];L===-1?((E&i)===0||(E&r)!==0)&&(l[p]=xc(E,e)):L<=e&&(t.expiredLanes|=E),c&=~E}if(e=Ge,i=xe,i=Zi(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&pe(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ta(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&pe(r),Ot(i)){case 2:case 8:i=vt;break;case 32:i=Lt;break;case 268435456:i=re;break;default:i=Lt}return r=Nv.bind(null,t),i=Ht(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&pe(r),t.callbackPriority=2,t.callbackNode=null,2}function Nv(t,e){if(We!==0&&We!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(yu()&&t.callbackNode!==i)return null;var r=xe;return r=Zi(t,t===Ge?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(vv(t,r,e),Uv(t,H()),t.callbackNode!=null&&t.callbackNode===i?Nv.bind(null,t):null)}function Lv(t,e){if(yu())return null;vv(t,e,!0)}function ny(){my(function(){(we&6)!==0?Ht(lt,ey):Dv()})}function gh(){if(qa===0){var t=_r;t===0&&(t=lr,lr<<=1,(lr&261888)===0&&(lr=256)),qa=t}return qa}function Ov(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_l(t)}function iy(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=Ov((l[Pt]||null).action),p=r.submitter;p&&(e=(e=p[Pt]||null)?Ov(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var E=new Ml("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(qa!==0){var L=new FormData(l,p);Tf(i,{pending:!0,data:L,method:l.method,action:c},null,L)}}else typeof c=="function"&&(E.preventDefault(),L=new FormData(l,p),Tf(i,{pending:!0,data:L,method:l.method,action:c},c,L))},currentTarget:l}]})}}for(var vh=0;vh<Gc.length;vh++){var _h=Gc[vh],ay=_h.toLowerCase(),ry=_h[0].toUpperCase()+_h.slice(1);xi(ay,"on"+ry)}xi(sm,"onAnimationEnd"),xi(om,"onAnimationIteration"),xi(lm,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(pS,"onTransitionRun"),xi(mS,"onTransitionStart"),xi(gS,"onTransitionCancel"),xi(um,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),An("onBeforeInput",["compositionend","keypress","textInput","paste"]),An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function zv(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var p=r.length-1;0<=p;p--){var E=r[p],L=E.instance,k=E.currentTarget;if(E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=k;try{c(l)}catch(tt){bl(tt)}l.currentTarget=null,c=L}else for(p=0;p<r.length;p++){if(E=r[p],L=E.instance,k=E.currentTarget,E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=k;try{c(l)}catch(tt){bl(tt)}l.currentTarget=null,c=L}}}}function ve(t,e){var i=e[Ue];i===void 0&&(i=e[Ue]=new Set);var r=t+"__bubble";i.has(r)||(Pv(e,t,2,!1),i.add(r))}function xh(t,e,i){var r=0;e&&(r|=4),Pv(i,t,r,e)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function Sh(t){if(!t[Eu]){t[Eu]=!0,ba.forEach(function(i){i!=="selectionchange"&&(sy.has(i)||xh(i,!1,t),xh(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eu]||(e[Eu]=!0,xh("selectionchange",!1,e))}}function Pv(t,e,i,r){switch(b0(e)){case 2:var l=Jy;break;case 8:l=$y;break;default:l=Hh}i=l.bind(null,e,i,t),l=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function yh(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var E=r.stateNode.containerInfo;if(E===l)break;if(p===4)for(p=r.return;p!==null;){var L=p.tag;if((L===3||L===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;E!==null;){if(p=sn(E),p===null)return;if(L=p.tag,L===5||L===6||L===26||L===27){r=c=p;continue t}E=E.parentNode}}r=r.return}Pp(function(){var k=c,tt=bc(i),ft=[];t:{var G=cm.get(t);if(G!==void 0){var J=Ml,Rt=t;switch(t){case"keypress":if(Sl(i)===0)break t;case"keydown":case"keyup":J=kx;break;case"focusin":Rt="focus",J=Uc;break;case"focusout":Rt="blur",J=Uc;break;case"beforeblur":case"afterblur":J=Uc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Zx;break;case sm:case om:case lm:J=zx;break;case um:J=Qx;break;case"scroll":case"scrollend":J=Dx;break;case"wheel":J=$x;break;case"copy":case"cut":case"paste":J=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Gp;break;case"submit":J=Wx;break;case"toggle":case"beforetoggle":J=eS}var Xt=(e&4)!==0,ue=!Xt&&(t==="scroll"||t==="scrollend"),X=Xt?G!==null?G+"Capture":null:G;Xt=[];for(var B=k,Q;B!==null;){var ct=B;if(Q=ct.stateNode,ct=ct.tag,ct!==5&&ct!==26&&ct!==27||Q===null||X===null||(ct=oo(B,X),ct!=null&&Xt.push(Go(B,ct,Q))),ue)break;B=B.return}0<Xt.length&&(G=new J(G,Rt,null,i,tt),ft.push({event:G,listeners:Xt}))}}if((e&7)===0){t:{if(J=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",J&&i!==Tc&&(Rt=i.relatedTarget||i.fromElement)&&(sn(Rt)||Rt[he]))break t;(G||J)&&(Rt=tt.window===tt?tt:(J=tt.ownerDocument)?J.defaultView||J.parentWindow:window,G?(J=i.relatedTarget||i.toElement,G=k,J=J?sn(J):null,J!==null&&(ue=f(J),Xt=J.tag,J!==ue||Xt!==5&&Xt!==27&&Xt!==6)&&(J=null)):(G=null,J=k),G!==J&&(Xt=Fp,ct="onMouseLeave",X="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=Gp,ct="onPointerLeave",X="onPointerEnter",B="pointer"),ue=G==null?Rt:on(G),Q=J==null?Rt:on(J),Rt=new Xt(ct,B+"leave",G,i,tt),Rt.target=ue,Rt.relatedTarget=Q,ct=null,sn(tt)===k&&(Xt=new Xt(X,B+"enter",J,i,tt),Xt.target=Q,Xt.relatedTarget=ue,ct=Xt),ue=ct,Xt=G&&J?V(G,J,oy):null,G!==null&&Bv(ft,Rt,G,Xt,!1),J!==null&&ue!==null&&Bv(ft,ue,J,Xt,!0)))}t:{if(G=k?on(k):window,J=G.nodeName&&G.nodeName.toLowerCase(),J==="select"||J==="input"&&G.type==="file")var Ft=Zp;else if(Wp(G))if(Kp)Ft=fS;else{Ft=uS;var Se=lS}else J=G.nodeName,!J||J.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?k&&Ec(k.elementType)&&(Ft=Zp):Ft=cS;if(Ft&&(Ft=Ft(t,k))){jp(ft,Ft,i,tt);break t}Se&&Se(t,G,k)}switch(Se=k?on(k):window,t){case"focusin":(Wp(Se)||Se.contentEditable==="true")&&(Kr=Se,Ic=k,go=null);break;case"focusout":go=Ic=Kr=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,am(ft,i,tt);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":am(ft,i,tt)}var Zt;if(Lc)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Zr?qp(t,i)&&(te="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(te="onCompositionStart");te&&(Vp&&i.locale!=="ko"&&(Zr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Zr&&(Zt=Bp()):(Aa=tt,Cc="value"in Aa?Aa.value:Aa.textContent,Zr=!0)),Se=Tu(k,te),0<Se.length&&(te=new Hp(te,t,null,i,tt),ft.push({event:te,listeners:Se}),Zt?te.data=Zt:(Zt=Yp(i),Zt!==null&&(te.data=Zt)))),(Zt=iS?aS(t,i):rS(t,i))&&(te=Tu(k,"onBeforeInput"),0<te.length&&(Se=new Hp("onBeforeInput","beforeinput",null,i,tt),ft.push({event:Se,listeners:te}),Se.data=Zt)),iy(ft,t,k,i,tt)}zv(ft,e)})}function Go(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Tu(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=oo(t,i),l!=null&&r.unshift(Go(t,l,c)),l=oo(t,e),l!=null&&r.push(Go(t,l,c))),t.tag===3)return r;t=t.return}return[]}function oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bv(t,e,i,r,l){for(var c=e._reactName,p=[];i!==null&&i!==r;){var E=i,L=E.alternate,k=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||k===null||(L=k,l?(k=oo(i,c),k!=null&&p.unshift(Go(i,k,L))):l||(k=oo(i,c),k!=null&&p.push(Go(i,k,L)))),i=i.return}p.length!==0&&t.push({event:e,listeners:p})}var ly=/\r\n?/g,uy=/\u0000|\uFFFD/g;function Iv(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(uy,"")}function Fv(t,e){return e=Iv(e),Iv(t)===e}function Oe(t,e,i,r,l,c){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Yr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Yr(t,""+r);else return;break;case"className":vl(t,"class",r);break;case"tabIndex":vl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":vl(t,i,r);break;case"style":Op(t,r,c);return;case"data":if(e!=="object"){vl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=_l(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Oe(t,e,"name",l.name,l,null),Oe(t,e,"formEncType",l.formEncType,l,null),Oe(t,e,"formMethod",l.formMethod,l,null),Oe(t,e,"formTarget",l.formTarget,l,null)):(Oe(t,e,"encType",l.encType,l,null),Oe(t,e,"method",l.method,l,null),Oe(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=_l(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Li);return;case"onScroll":r!=null&&ve("scroll",t);return;case"onScrollEnd":r!=null&&ve("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=_l(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":ve("beforetoggle",t),ve("toggle",t),gl(t,"popover",r);break;case"xlinkActuate":Ki(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ki(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ki(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ki(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ki(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ki(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":gl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Cx.get(i)||i,gl(t,i,r);else return}Re=!0}function Mh(t,e,i,r,l,c){switch(i){case"style":Op(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Yr(t,r);else if(typeof r=="number"||typeof r=="bigint")Yr(t,""+r);else return;break;case"onScroll":r!=null&&ve("scroll",t);return;case"onScrollEnd":r!=null&&ve("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Li);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Dn.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),e=t[Pt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(c,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}Re=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):gl(t,i,r)}return}Re=!0}function Mn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var p=i[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Oe(t,e,c,p,i,null)}}l&&Oe(t,e,"srcSet",i.srcSet,i,null),r&&Oe(t,e,"src",i.src,i,null);return;case"input":ve("invalid",t);var E=c=p=l=null,L=null,k=null;for(r in i)if(i.hasOwnProperty(r)){var tt=i[r];if(tt!=null)switch(r){case"name":l=tt;break;case"type":p=tt;break;case"checked":L=tt;break;case"defaultChecked":k=tt;break;case"value":c=tt;break;case"defaultValue":E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,e));break;default:Oe(t,e,r,tt,i,null)}}Dp(t,c,E,L,k,p,l,!1);return;case"select":ve("invalid",t),r=p=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":p=E;break;case"multiple":r=E;default:Oe(t,e,l,E,i,null)}e=c,i=p,t.multiple=!!r,e!=null?qr(t,!!r,e,!1):i!=null&&qr(t,!!r,i,!0);return;case"textarea":ve("invalid",t),c=l=r=null;for(p in i)if(i.hasOwnProperty(p)&&(E=i[p],E!=null))switch(p){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Oe(t,e,p,E,i,null)}Np(t,r,l,c);return;case"option":for(L in i)if(i.hasOwnProperty(L)&&(r=i[L],r!=null))switch(L){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Oe(t,e,L,r,i,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(r=0;r<Ho.length;r++)ve(Ho[r],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in i)if(i.hasOwnProperty(k)&&(r=i[k],r!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Oe(t,e,k,r,i,null)}return;default:if(Ec(e)){for(tt in i)i.hasOwnProperty(tt)&&(r=i[tt],r!==void 0&&Mh(t,e,tt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Oe(t,e,E,r,i,null))}var cy={};function fy(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,E=null,L=null,k=null,tt=null;for(J in i){var ft=i[J];if(i.hasOwnProperty(J)&&ft!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=ft;default:r.hasOwnProperty(J)||Oe(t,e,J,null,r,ft)}}for(var G in r){var J=r[G];if(ft=i[G],r.hasOwnProperty(G)&&(J!=null||ft!=null))switch(G){case"type":J!==ft&&(Re=!0),c=J;break;case"name":J!==ft&&(Re=!0),l=J;break;case"checked":J!==ft&&(Re=!0),k=J;break;case"defaultChecked":J!==ft&&(Re=!0),tt=J;break;case"value":J!==ft&&(Re=!0),p=J;break;case"defaultValue":J!==ft&&(Re=!0),E=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,e));break;default:J!==ft&&Oe(t,e,G,J,r,ft)}}yc(t,p,E,L,k,tt,c,l);return;case"select":J=p=E=G=null;for(c in i)if(L=i[c],i.hasOwnProperty(c)&&L!=null)switch(c){case"value":break;case"multiple":J=L;default:r.hasOwnProperty(c)||Oe(t,e,c,null,r,L)}for(l in r)if(c=r[l],L=i[l],r.hasOwnProperty(l)&&(c!=null||L!=null))switch(l){case"value":c!==L&&(Re=!0),G=c;break;case"defaultValue":c!==L&&(Re=!0),E=c;break;case"multiple":c!==L&&(Re=!0),p=c;default:c!==L&&Oe(t,e,l,c,r,L)}e=E,i=p,r=J,G!=null?qr(t,!!i,G,!1):!!r!=!!i&&(e!=null?qr(t,!!i,e,!0):qr(t,!!i,i?[]:"",!1));return;case"textarea":J=G=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Oe(t,e,E,null,r,l)}for(p in r)if(l=r[p],c=i[p],r.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":l!==c&&(Re=!0),G=l;break;case"defaultValue":l!==c&&(Re=!0),J=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Oe(t,e,p,l,r,c)}Up(t,G,J);return;case"option":for(var Rt in i)if(G=i[Rt],i.hasOwnProperty(Rt)&&G!=null&&!r.hasOwnProperty(Rt))switch(Rt){case"selected":t.selected=!1;break;default:Oe(t,e,Rt,null,r,G)}for(L in r)if(G=r[L],J=i[L],r.hasOwnProperty(L)&&G!==J&&(G!=null||J!=null))switch(L){case"selected":G!==J&&(Re=!0),t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Oe(t,e,L,G,r,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in i)G=i[Xt],i.hasOwnProperty(Xt)&&G!=null&&!r.hasOwnProperty(Xt)&&Oe(t,e,Xt,null,r,G);for(k in r)if(G=r[k],J=i[k],r.hasOwnProperty(k)&&G!==J&&(G!=null||J!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,e));break;default:Oe(t,e,k,G,r,J)}return;default:if(Ec(e)){for(var ue in i)G=i[ue],i.hasOwnProperty(ue)&&G!==void 0&&!r.hasOwnProperty(ue)&&Mh(t,e,ue,void 0,r,G);for(tt in r)G=r[tt],J=i[tt],!r.hasOwnProperty(tt)||G===J||G===void 0&&J===void 0||Mh(t,e,tt,G,r,J);return}}for(var X in i)G=i[X],i.hasOwnProperty(X)&&G!=null&&!r.hasOwnProperty(X)&&Oe(t,e,X,null,r,G);for(ft in r)G=r[ft],J=i[ft],!r.hasOwnProperty(ft)||G===J||G==null&&J==null||Oe(t,e,ft,G,r,J)}function Hv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,p=l.initiatorType,E=l.duration;if(c&&E&&Hv(p)){for(p=0,E=l.responseEnd,r+=1;r<i.length;r++){var L=i[r],k=L.startTime;if(k>E)break;var tt=L.transferSize,ft=L.initiatorType;tt&&Hv(ft)&&(L=L.responseEnd,p+=tt*(L<E?1:(E-k)/(L-k)))}if(--r,e+=8*(c+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,Th=null;function Vo(t){return t.nodeType===9?t:t.ownerDocument}function Gv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vv(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Xv(t,e,i,r){return i=Vo(i).createElement(t),i[jt]=r,i[Pt]=e,Mn(i,t,e),se(i),i}function bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=null;function dy(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var Rh=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,kv=typeof Promise=="function"?Promise:void 0,qv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rh,my=typeof queueMicrotask=="function"?queueMicrotask:typeof kv<"u"?function(t){return kv.resolve(null).then(t).catch(gy)}:Rh;function gy(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function Yv(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),ws(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")zh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,zh(i);for(var c=i.firstChild;c;){var p=c.nextSibling,E=c.nodeName;c[kt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=p}}else i==="body"&&zh(t.ownerDocument.body);i=l}while(i);ws(e)}function Wv(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function jv(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var c=e[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function Zv(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function vy(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ch(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return vy(e,i,t)}function _y(t){return t.documentElement.clientHeight}function xy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Sy(t,e,i,r,l,c,p,E,L){var k=e.nodeType===9?e:e.ownerDocument;try{var tt=k.startViewTransition({update:function(){var G=k.defaultView,J=G.navigation&&G.navigation.transition,Rt=k.fonts.status;r();var Xt=[];if(Rt==="loaded"&&(_y(k),k.fonts.status==="loading"&&Xt.push(k.fonts.ready)),Rt=Xt.length,t!==null)for(var ue=t.suspenseyImages,X=0,B=0;B<ue.length;B++){var Q=ue[B];if(!Q.complete){var ct=Q.getBoundingClientRect();if(0<ct.bottom&&0<ct.right&&ct.top<G.innerHeight&&ct.left<G.innerWidth){if(X+=g0(Q),X>Ru){Xt.length=Rt;break}Q=new Promise(xy.bind(Q)),Xt.push(Q)}}}if(0<Xt.length)return G=Promise.race([Promise.all(Xt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(l,l),(J?Promise.allSettled([J.finished,G]):G).then(c,c);if(l(),J)return J.finished.then(c,c);c()},types:i});k.__reactViewTransition=tt;var ft=[];return tt.ready.then(function(){for(var G=k.documentElement.getAnimations({subtree:!0}),J=0;J<G.length;J++){var Rt=G[J],Xt=Rt.effect,ue=Xt.pseudoElement;if(ue!=null&&ue.startsWith("::view-transition")){ft.push(Rt),Rt=Xt.getKeyframes();for(var X=ue=void 0,B=!0,Q=0;Q<Rt.length;Q++){var ct=Rt[Q],Ft=ct.width;if(ue===void 0)ue=Ft;else if(ue!==Ft){B=!1;break}if(Ft=ct.height,X===void 0)X=Ft;else if(X!==Ft){B=!1;break}delete ct.width,delete ct.height,ct.transform==="none"&&delete ct.transform}B&&ue!==void 0&&X!==void 0&&(Xt.setKeyframes(Rt),B=getComputedStyle(Xt.target,Xt.pseudoElement),B.width!==ue||B.height!==X)&&(B=Rt[0],B.width=ue,B.height=X,B=Rt[Rt.length-1],B.width=ue,B.height=X,Xt.setKeyframes(Rt))}}p()},function(G){k.__reactViewTransition===tt&&(k.__reactViewTransition=null);try{if(typeof G=="object"&&G!==null)switch(G.name){case"InvalidStateError":(G.message==="View transition was skipped because document visibility state is hidden."||G.message==="Skipping view transition because document visibility state has become hidden."||G.message==="Skipping view transition because viewport size changed."||G.message==="Transition was aborted because of invalid state")&&(G=null)}G!==null&&L(G)}finally{r(),l(),p()}}),tt.finished.finally(function(){for(var G=0;G<ft.length;G++)ft[G].cancel();k.__reactViewTransition===tt&&(k.__reactViewTransition=null),E()}),tt}catch{return r(),l(),p(),null}}function wr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}wr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:O({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},wr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===e&&r.push(i[l])}return r},wr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Kv(t){return{name:t,group:new wr("group",t),imagePair:new wr("image-pair",t),old:new wr("old",t),new:new wr("new",t)}}function ii(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ii.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(Jv(c,t,e,i)===-1){var p=this,E=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(L){p.removeEventListener(t,e,i),typeof e=="function"?e.call(this,L):e.handleEvent(L)}),r!==null&&(l=p.removeEventListener.bind(p,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Es(i),c.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),g(this._fragmentFiber.child,!1,yy,t,E,r)}this._eventListeners=c}};function yy(t,e,i,r){return y(t).addEventListener(e,i,r),!1}ii.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=Jv(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var c=l.cleanup;l=Es(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,My,t,i,l),r.splice(e,1),c!==null&&c()}};function My(t,e,i,r){return y(t).removeEventListener(e,i,r),!1}function Es(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Qv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Jv(t,e,i,r){if(t.length===0)return-1;r=Qv(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===e&&c.listener===i&&Qv(c.optionsOrUseCapture)===r)return l}return-1}ii.prototype.dispatchEvent=function(t){var e=S(this._fragmentFiber);if(e===null)return!0;e=y(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Es(c.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Es(c.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ii.prototype.focus=function(t){g(this._fragmentFiber.child,!0,$v,t,void 0,void 0)};function $v(t,e){return t.tag===6?!1:(t=y(t),Oy(t,e))}ii.prototype.focusLast=function(t){var e=[];g(this._fragmentFiber.child,!0,wh,e,void 0,void 0);for(var i=e.length-1;0<=i&&!$v(e[i],t);i--);};function wh(t,e){return e.push(t),!1}ii.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=Vo(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,Ey,t,void 0,void 0))};function Ey(t,e){return t.tag===6?!1:(t=y(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ii.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,Ty,t,void 0,void 0)};function Ty(t,e){return t.tag===6||(t=y(t),e.observe(t)),!1}ii.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),g(this._fragmentFiber.child,!1,by,t,void 0,void 0);for(var i=e=0;i<Ti.length;i++){var r=Ti[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ti[e++]=r}Ti.length=e}};function by(t,e){return t.tag===6||(t=y(t),e.unobserve(t)),!1}var Ti=[],Dh=!1;function Ay(t,e,i){Ti.push({fragmentInstance:t,observer:e,instance:i}),Dh||(Dh=!0,zy(function(){Dh=!1;var r=Ti;Ti=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ii.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,Ry,t,void 0,void 0),t};function Ry(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=y(t),e.push.apply(e,t.getClientRects());return!1}ii.prototype.getRootNode=function(t){var e=S(this._fragmentFiber);return e===null?this:y(e).getRootNode(t)},ii.prototype.compareDocumentPosition=function(t){var e=S(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];g(this._fragmentFiber.child,!1,wh,i,void 0,void 0);var r=y(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?e.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=e.compareDocumentPosition(t),E=l.compareDocumentPosition(t),L=p&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||c&&l===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Cy(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Cy(t,e,i,r,l){var c=sn(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=e,e=S(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===i)&&(e=V(i,c,it),e===null?e=!1:(g(e,!0,z,c,i),c=x,x=null,e=c!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===r)&&(e=V(r,c,it),e===null?e=!1:(g(e,!0,U,c,r),c=x,P=x=null,e=c!==null)),e):!1}function t0(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ii.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];g(this._fragmentFiber.child,!1,wh,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),t0(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=y(l),t0(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function wy(t,e){return t=y(t),e0(t,e),!1}function e0(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function n0(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Es(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){for(var p=0,E=0;E<Ti.length;E++){var L=Ti[E];(L.fragmentInstance!==e||L.observer!==c||L.instance!==t)&&(Ti[p++]=L)}Ti.length=p,c.observe(t)}),e0(t,e))}function Dy(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Es(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?Ay(e,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Uh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Uh(i),Ee(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Uy(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[kt])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function Ny(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=pi(t.nextSibling),t===null))return null;return t}function i0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=pi(t.nextSibling),t===null))return null;return t}function Nh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ly(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Oh=null;function a0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return pi(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Oy(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function zy(t){qv(function(){qv(function(e){return t(e)})})}function s0(t,e,i){switch(e=Vo(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function o0(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Oe(t,e,r,null,cy,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Li&&(t.onclick=null),Ee(t)}function zh(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ee(t)}var mi=new Map,l0=new Set;function Xo(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ua=At.d;At.d={f:Py,r:By,D:Iy,C:Fy,L:Hy,m:Gy,X:Xy,S:Vy,M:ky};function Py(){var t=ua.f(),e=_u();return t||e}function By(t){var e=jn(t);e!==null&&e.tag===5&&e.type==="form"?cg(e):ua.r(t)}var Ts=typeof document>"u"?null:document;function u0(t,e,i){var r=Ts;if(r&&typeof e=="string"&&e){var l=oi(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),l0.has(l)||(l0.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Mn(e,"link",t),se(e),r.head.appendChild(e)))}}function Iy(t){ua.D(t),u0("dns-prefetch",t,null)}function Fy(t,e){ua.C(t,e),u0("preconnect",t,e)}function Hy(t,e,i){ua.L(t,e,i);var r=Ts;if(r&&t&&e){var l='link[rel="preload"][as="'+oi(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+oi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+oi(i.imageSizes)+'"]')):l+='[href="'+oi(t)+'"]';var c=l;switch(e){case"style":c=bs(t);break;case"script":c=As(t)}if(!(mi.has(c)||(t=O({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),mi.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(ko(c))||e==="script"&&r.querySelector(qo(c))))){var p=r.createElement("link");Mn(p,"link",t),e==="style"&&(p[Bn]=!0,p.onload=p.onerror=function(){Zn(p)}),se(p),r.head.appendChild(p)}}}function Gy(t,e){ua.m(t,e);var i=Ts;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+oi(r)+'"][href="'+oi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=As(t)}if(!mi.has(c)&&(t=O({rel:"modulepreload",href:t},e),mi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(qo(c)))return}r=i.createElement("link"),Mn(r,"link",t),se(r),i.head.appendChild(r)}}}function Vy(t,e,i){ua.S(t,e,i);var r=Ts;if(r&&t){var l=si(r).hoistableStyles,c=bs(t);e=e||"default";var p=l.get(c);if(!p){var E={loading:0,preload:null};if(p=r.querySelector(ko(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},i),(i=mi.get(c))&&Ph(t,i);var L=p=r.createElement("link");se(L),Mn(L,"link",t),L._p=new Promise(function(k,tt){L.onload=k,L.onerror=tt}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,bu(p,e,r)}p={type:"stylesheet",instance:p,count:1,state:E},l.set(c,p)}}}function Xy(t,e){ua.X(t,e);var i=Ts;if(i&&t){var r=si(i).hoistableScripts,l=As(t),c=r.get(l);c||(c=i.querySelector(qo(l)),c||(t=O({src:t,async:!0},e),(e=mi.get(l))&&Bh(t,e),c=i.createElement("script"),se(c),Mn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function ky(t,e){ua.M(t,e);var i=Ts;if(i&&t){var r=si(i).hoistableScripts,l=As(t),c=r.get(l);c||(c=i.querySelector(qo(l)),c||(t=O({src:t,async:!0,type:"module"},e),(e=mi.get(l))&&Bh(t,e),c=i.createElement("script"),se(c),Mn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function c0(t,e,i,r){var l=(l=N.current)?Xo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=bs(i.href),e=si(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=bs(i.href);var c=si(l).hoistableStyles,p=c.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=l.querySelector(ko(t)))?c._p||(p.instance=c,p.state.loading=5):(c=mi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},mi.set(t,c)),qy(l,t,c,p.state))),e&&r===null)throw Error(s(528,""));return p}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=As(i),e=si(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function bs(t){return'href="'+oi(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function f0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function qy(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Bn]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[Bn]=!0,e.onload=e.onerror=Zn.bind(null,e),Mn(e,"link",i),se(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function As(t){return'[src="'+oi(t)+'"]'}function qo(t){return"script[async]"+t}function h0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+oi(i.href)+'"]');if(r)return e.instance=r,se(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),se(r),Mn(r,"style",l),bu(r,i.precedence,t),e.instance=r;case"stylesheet":l=bs(i.href);var c=t.querySelector(ko(l));if(c)return e.state.loading|=4,e.instance=c,se(c),c;r=f0(i),(l=mi.get(l))&&Ph(r,l),c=(t.ownerDocument||t).createElement("link"),se(c);var p=c;return p._p=new Promise(function(E,L){p.onload=E,p.onerror=L}),Mn(c,"link",r),e.state.loading|=4,bu(c,i.precedence,t),e.instance=c;case"script":return c=As(i.src),(l=t.querySelector(qo(c)))?(e.instance=l,se(l),l):(r=i,(l=mi.get(c))&&(r=O({},i),Bh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),se(l),Mn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,bu(r,i.precedence,t));return e.instance}function bu(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,p=0;p<r.length;p++){var E=r[p];if(E.dataset.precedence===e)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Ph(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Bh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Au=null;function d0(t,e,i){if(Au===null){var r=new Map,l=Au=new Map;l.set(i,r)}else l=Au,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[kt]||c[jt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=t+p;var E=r.get(p);E?E.push(c):r.set(p,[c])}}return r}function Ih(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function Yy(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function p0(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function m0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function g0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function v0(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=g0(e),t.suspenseyImages.push(e)),t=Zy.bind(t),e.decode().then(t,t))}function Wy(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=bs(r.href),c=e.querySelector(ko(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Yo.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,se(c);return}c=e.ownerDocument||e,r=f0(r),(l=mi.get(l))&&Ph(r,l),c=c.createElement("link"),se(c);var p=c;p._p=new Promise(function(E,L){p.onload=E,p.onerror=L}),Mn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Yo.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Ru=0;function jy(t,e){return t.stylesheets&&t.count===0&&wu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&wu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Ru===0&&(Ru=62500*hy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&wu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Ru?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function _0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)wu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Yo(){this.count--,_0(this)}function Zy(){this.imgCount--,_0(this)}var Cu=null;function wu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cu=new Map,e.forEach(Ky,t),Cu=null,Yo.call(t))}function Ky(t,e){if(!(e.state.loading&4)){var i=Cu.get(t);if(i)var r=i.get(null);else{i=new Map,Cu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(i.set(p.dataset.precedence,p),r=p)}r&&i.set(null,r)}l=e.instance,p=l.getAttribute("data-precedence"),c=i.get(p)||r,c===r&&i.set(null,l),i.set(p,l),this.count++,r=Yo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Rs={$$typeof:ht,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function Qy(t,e,i,r,l,c,p,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=so(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.hiddenUpdates=so(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function x0(t,e,i,r,l,c,p,E,L,k,tt,ft){return t=new Qy(t,e,i,p,L,k,tt,ft,E),e=1,c===!0&&(e|=24),c=In(3,null,null,e),t.current=c,c.stateNode=t,e=Jc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},nf(c),t}function S0(t){return t?(t=$r,t):$r}function y0(t,e,i,r,l,c){l=S0(l),r.context===null?r.context=l:r.pendingContext=l,r=Oa(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=za(t,r,e),i!==null&&(Vn(i,t,e),Eo(i,t,e))}function M0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Fh(t,e){M0(t,e),(t=t.alternate)&&M0(t,e)}function E0(t){if(t.tag===13||t.tag===31){var e=hr(t,67108864);e!==null&&Vn(e,t,67108864),Fh(t,67108864)}}function T0(t){if(t.tag===13||t.tag===31){var e=ni();e=Mt(e);var i=hr(t,e);i!==null&&Vn(i,t,e),Fh(t,e)}}var Cs=!0;function Jy(t,e,i,r){var l=Tt.T;Tt.T=null;var c=At.p;try{At.p=2,Hh(t,e,i,r)}finally{At.p=c,Tt.T=l}}function $y(t,e,i,r){var l=Tt.T;Tt.T=null;var c=At.p;try{At.p=8,Hh(t,e,i,r)}finally{At.p=c,Tt.T=l}}function Hh(t,e,i,r){if(Cs){var l=Gh(r);if(l===null)yh(t,e,r,Du,i),A0(t,r);else if(eM(l,t,e,i,r))r.stopPropagation();else if(A0(t,r),e&4&&-1<tM.indexOf(t)){for(;l!==null;){var c=jn(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Ni(c.pendingLanes);if(p!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;p;){var L=1<<31-Tn(p);E.entanglements[1]|=L,p&=~L}Xi(c),(we&6)===0&&(mu=H()+500,Fo(0))}}break;case 31:case 13:E=hr(c,2),E!==null&&Vn(E,c,2),_u(),Fh(c,2)}if(c=Gh(r),c===null&&yh(t,e,r,Du,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else yh(t,e,r,null,i)}}function Gh(t){return t=bc(t),Vh(t)}var Du=null;function Vh(t){if(Du=null,t=sn(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Du=t,null}function b0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case lt:return 2;case vt:return 8;case Lt:case Bt:return 32;case re:return 268435456;default:return 32}default:return 32}}var Xh=!1,Wa=null,ja=null,Za=null,Wo=new Map,jo=new Map,Ka=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A0(t,e){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Zo(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=jn(e),e!==null&&E0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function eM(t,e,i,r,l){switch(e){case"focusin":return Wa=Zo(Wa,t,e,i,r,l),!0;case"dragenter":return ja=Zo(ja,t,e,i,r,l),!0;case"mouseover":return Za=Zo(Za,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return Wo.set(c,Zo(Wo.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,jo.set(c,Zo(jo.get(c)||null,t,e,i,r,l)),!0}return!1}function R0(t){var e=sn(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,Yt(t.priority,function(){T0(i)});return}}else if(e===31){if(e=d(i),e!==null){t.blockedOn=e,Yt(t.priority,function(){T0(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Gh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Tc=r,i.target.dispatchEvent(r),Tc=null}else return e=jn(i),e!==null&&E0(e),t.blockedOn=i,!1;e.shift()}return!0}function C0(t,e,i){Uu(t)&&i.delete(e)}function nM(){Xh=!1,Wa!==null&&Uu(Wa)&&(Wa=null),ja!==null&&Uu(ja)&&(ja=null),Za!==null&&Uu(Za)&&(Za=null),Wo.forEach(C0),jo.forEach(C0)}function Nu(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nM)))}var Lu=null;function w0(t){Lu!==t&&(Lu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Lu===t&&(Lu=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Vh(r||i)===null)continue;break}var c=jn(i);c!==null&&(t.splice(e,3),e-=3,Tf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function ws(t){function e(L){return Nu(L,t)}Wa!==null&&Nu(Wa,t),ja!==null&&Nu(ja,t),Za!==null&&Nu(Za,t),Wo.forEach(e),jo.forEach(e);for(var i=0;i<Ka.length;i++){var r=Ka[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ka.length&&(i=Ka[0],i.blockedOn===null);)R0(i),i.blockedOn===null&&Ka.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],p=l[Pt]||null;if(typeof c=="function")p||w0(i);else if(p){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[Pt]||null)E=p.formAction;else if(Vh(l)!==null)continue}else E=p.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),w0(i)}}}function D0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function kh(t){this._internalRoot=t}Ou.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ni();y0(i,r,t,e,null,null)},Ou.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;y0(t.current,2,null,t,null,null),_u(),e[he]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=qt();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Ka.length&&e!==0&&e<Ka[i].priority;i++);Ka.splice(i,0,t),i===0&&R0(t)}};var U0=n.version;if(U0!=="19.3.1")throw Error(s(527,U0,"19.3.1"));At.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var iM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{Me=zu.inject(iM),ke=zu}catch{}}return Qo.createRoot=function(t,e){if(!u(t))throw Error(s(299));var i=!1,r="",l=Sg,c=yg,p=Mg;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError)),e=x0(t,1,!1,null,null,i,r,null,l,c,p,D0),t[he]=e.current,Sh(t),new kh(e)},Qo.hydrateRoot=function(t,e,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Sg,p=yg,E=Mg,L=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(L=i.formState)),e=x0(t,1,!0,e,i??null,r,l,L,c,p,E,D0),e.context=S0(null),i=e.current,r=ni(),r=Mt(r),l=Oa(r),l.callback=null,za(i,l,r),i=r,e.current.lanes=i,R(e,i),Xi(e),t[he]=e.current,Sh(t),new Ou(e)},Qo.version="19.3.1",Qo}var G0;function dM(){if(G0)return Wh.exports;G0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Wh.exports=hM(),Wh.exports}var pM=dM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),X_=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=un.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},m)=>un.createElement("svg",{ref:m,...gM,width:n,height:n,stroke:o,strokeWidth:s?Number(a)*24/Number(n):a,className:X_("lucide",u),...d},[...h.map(([v,_])=>un.createElement(v,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=(o,n)=>{const a=un.forwardRef(({className:s,...u},f)=>un.createElement(vM,{ref:f,iconNode:n,className:X_(`lucide-${mM(o)}`,s),...u}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=to("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=to("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=to("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=to("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=to("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=to("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vp="170",EM=0,V0=1,TM=2,k_=1,bM=2,ma=3,or=0,qn=1,ga=2,rr=0,qs=1,X0=2,k0=3,q0=4,AM=5,Ir=100,RM=101,CM=102,wM=103,DM=104,UM=200,NM=201,LM=202,OM=203,Cd=204,wd=205,zM=206,PM=207,BM=208,IM=209,FM=210,HM=211,GM=212,VM=213,XM=214,Dd=0,Ud=1,Nd=2,js=3,Ld=4,Od=5,zd=6,Pd=7,q_=0,kM=1,qM=2,sr=0,YM=1,WM=2,jM=3,ZM=4,KM=5,QM=6,JM=7,Y_=300,Zs=301,Ks=302,Bd=303,Id=304,mc=306,Fd=1e3,Hr=1001,Hd=1002,Di=1003,$M=1004,Pu=1005,qi=1006,Jh=1007,Gr=1008,Sa=1009,W_=1010,j_=1011,rl=1012,_p=1013,Xr=1014,va=1015,sl=1016,xp=1017,Sp=1018,Qs=1020,Z_=35902,K_=1021,Q_=1022,wi=1023,J_=1024,$_=1025,Ys=1026,Js=1027,tx=1028,yp=1029,ex=1030,Mp=1031,Ep=1033,oc=33776,lc=33777,uc=33778,cc=33779,Gd=35840,Vd=35841,Xd=35842,kd=35843,qd=36196,Yd=37492,Wd=37496,jd=37808,Zd=37809,Kd=37810,Qd=37811,Jd=37812,$d=37813,tp=37814,ep=37815,np=37816,ip=37817,ap=37818,rp=37819,sp=37820,op=37821,fc=36492,lp=36494,up=36495,nx=36283,cp=36284,fp=36285,hp=36286,tE=3200,eE=3201,nE=0,iE=1,ar="",vi="srgb",eo="srgb-linear",gc="linear",Fe="srgb",Ds=7680,Y0=519,aE=512,rE=513,sE=514,ix=515,oE=516,lE=517,uE=518,cE=519,W0=35044,j0="300 es",_a=2e3,dc=2001;class no{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){if(this._listeners===void 0)return!1;const s=this._listeners;return s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){if(this._listeners===void 0)return;const u=this._listeners[n];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const s=this._listeners[n.type];if(s!==void 0){n.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,n);n.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=Math.PI/180,dp=180/Math.PI;function ol(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[n&255]+Cn[n>>8&255]+"-"+Cn[n>>16&15|64]+Cn[n>>24&255]+"-"+Cn[a&63|128]+Cn[a>>8&255]+"-"+Cn[a>>16&255]+Cn[a>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function kn(o,n,a){return Math.max(n,Math.min(a,o))}function fE(o,n){return(o%n+n)%n}function td(o,n,a){return(1-a)*o+a*n}function Jo(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(n=0,a=0){Pe.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Math.max(n.x,Math.min(a.x,this.x)),this.y=Math.max(n.y,Math.min(a.y,this.y)),this}clampScalar(n,a){return this.x=Math.max(n,Math.min(a,this.x)),this.y=Math.max(n,Math.min(a,this.y)),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(kn(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-n.x,h=this.y-n.y;return this.x=f*s-h*u+n.x,this.y=f*u+h*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(n,a,s,u,f,h,d,m,v){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,m,v)}set(n,a,s,u,f,h,d,m,v){const _=this.elements;return _[0]=n,_[1]=u,_[2]=d,_[3]=a,_[4]=f,_[5]=m,_[6]=s,_[7]=h,_[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],m=s[6],v=s[1],_=s[4],g=s[7],S=s[2],M=s[5],b=s[8],A=u[0],y=u[3],x=u[6],P=u[1],z=u[4],U=u[7],it=u[2],V=u[5],O=u[8];return f[0]=h*A+d*P+m*it,f[3]=h*y+d*z+m*V,f[6]=h*x+d*U+m*O,f[1]=v*A+_*P+g*it,f[4]=v*y+_*z+g*V,f[7]=v*x+_*U+g*O,f[2]=S*A+M*P+b*it,f[5]=S*y+M*z+b*V,f[8]=S*x+M*U+b*O,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],m=n[6],v=n[7],_=n[8];return a*h*_-a*d*v-s*f*_+s*d*m+u*f*v-u*h*m}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],m=n[6],v=n[7],_=n[8],g=_*h-d*v,S=d*m-_*f,M=v*f-h*m,b=a*g+s*S+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return n[0]=g*A,n[1]=(u*v-_*s)*A,n[2]=(d*s-u*h)*A,n[3]=S*A,n[4]=(_*a-u*m)*A,n[5]=(u*f-d*a)*A,n[6]=M*A,n[7]=(s*m-v*a)*A,n[8]=(h*a-s*f)*A,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,u,f,h,d){const m=Math.cos(f),v=Math.sin(f);return this.set(s*m,s*v,-s*(m*h+v*d)+h+n,-u*v,u*m,-u*(-v*h+m*d)+d+a,0,0,1),this}scale(n,a){return this.premultiply(ed.makeScale(n,a)),this}rotate(n){return this.premultiply(ed.makeRotation(-n)),this}translate(n,a){return this.premultiply(ed.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new ce;function ax(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hE(){const o=pc("canvas");return o.style.display="block",o}const Z0={};function il(o){o in Z0||(Z0[o]=!0,console.warn(o))}function dE(o,n,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function pE(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function mE(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const Ae={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(o,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===Fe&&(o.r=xa(o.r),o.g=xa(o.g),o.b=xa(o.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[n].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Fe&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},fromWorkingColorSpace:function(o,n){return this.convert(o,this.workingColorSpace,n)},toWorkingColorSpace:function(o,n){return this.convert(o,n,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ar?gc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,n=this.workingColorSpace){return o.fromArray(this.spaces[n].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,n,a){return o.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const K0=[.64,.33,.3,.6,.15,.06],Q0=[.2126,.7152,.0722],J0=[.3127,.329],$0=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ae.define({[eo]:{primaries:K0,whitePoint:J0,transfer:gc,toXYZ:$0,fromXYZ:t_,luminanceCoefficients:Q0,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:K0,whitePoint:J0,transfer:Fe,toXYZ:$0,fromXYZ:t_,luminanceCoefficients:Q0,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}});let Us;class gE{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{Us===void 0&&(Us=pc("canvas")),Us.width=n.width,Us.height=n.height;const s=Us.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=Us}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=pc("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const u=s.getImageData(0,0,n.width,n.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=xa(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(xa(a[s]/255)*255):a[s]=xa(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let vE=0;class rx{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=ol(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(nd(u[h].image)):f.push(nd(u[h]))}else f=nd(u);s.url=f}return a||(n.images[this.uuid]=s),s}}function nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _E=0;class Yn extends no{constructor(n=Yn.DEFAULT_IMAGE,a=Yn.DEFAULT_MAPPING,s=Hr,u=Hr,f=qi,h=Gr,d=wi,m=Sa,v=Yn.DEFAULT_ANISOTROPY,_=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=ol(),this.name="",this.source=new rx(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=v,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==Y_)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Fd:n.x=n.x-Math.floor(n.x);break;case Hr:n.x=n.x<0?0:1;break;case Hd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Fd:n.y=n.y-Math.floor(n.y);break;case Hr:n.y=n.y<0?0:1;break;case Hd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Y_;Yn.DEFAULT_ANISOTROPY=1;class Qe{constructor(n=0,a=0,s=0,u=1){Qe.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,u){return this.x=n,this.y=a,this.z=s,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=this.w,h=n.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,u,f;const m=n.elements,v=m[0],_=m[4],g=m[8],S=m[1],M=m[5],b=m[9],A=m[2],y=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+A)<.1&&Math.abs(b+y)<.1&&Math.abs(v+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const z=(v+1)/2,U=(M+1)/2,it=(x+1)/2,V=(_+S)/4,O=(g+A)/4,F=(b+y)/4;return z>U&&z>it?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=V/s,f=O/s):U>it?U<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(U),s=V/u,f=F/u):it<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(it),s=O/f,u=F/f),this.set(s,u,f,a),this}let P=Math.sqrt((y-b)*(y-b)+(g-A)*(g-A)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(g-A)/P,this.z=(S-_)/P,this.w=Math.acos((v+M+x-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Math.max(n.x,Math.min(a.x,this.x)),this.y=Math.max(n.y,Math.min(a.y,this.y)),this.z=Math.max(n.z,Math.min(a.z,this.z)),this.w=Math.max(n.w,Math.min(a.w,this.w)),this}clampScalar(n,a){return this.x=Math.max(n,Math.min(a,this.x)),this.y=Math.max(n,Math.min(a,this.y)),this.z=Math.max(n,Math.min(a,this.z)),this.w=Math.max(n,Math.min(a,this.w)),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xE extends no{constructor(n=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new Qe(0,0,n,a),this.scissorTest=!1,this.viewport=new Qe(0,0,n,a);const u={width:n,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new Yn(u,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=a,this.textures[u].image.depth=s;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let s=0,u=n.textures.length;s<u;s++)this.textures[s]=n.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const a=Object.assign({},n.texture.image);return this.texture.source=new rx(a),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends xE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class sx extends Yn{constructor(n=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Di,this.minFilter=Di,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends Yn{constructor(n=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Di,this.minFilter=Di,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(n=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=u}static slerpFlat(n,a,s,u,f,h,d){let m=s[u+0],v=s[u+1],_=s[u+2],g=s[u+3];const S=f[h+0],M=f[h+1],b=f[h+2],A=f[h+3];if(d===0){n[a+0]=m,n[a+1]=v,n[a+2]=_,n[a+3]=g;return}if(d===1){n[a+0]=S,n[a+1]=M,n[a+2]=b,n[a+3]=A;return}if(g!==A||m!==S||v!==M||_!==b){let y=1-d;const x=m*S+v*M+_*b+g*A,P=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const it=Math.sqrt(z),V=Math.atan2(it,x*P);y=Math.sin(y*V)/it,d=Math.sin(d*V)/it}const U=d*P;if(m=m*y+S*U,v=v*y+M*U,_=_*y+b*U,g=g*y+A*U,y===1-d){const it=1/Math.sqrt(m*m+v*v+_*_+g*g);m*=it,v*=it,_*=it,g*=it}}n[a]=m,n[a+1]=v,n[a+2]=_,n[a+3]=g}static multiplyQuaternionsFlat(n,a,s,u,f,h){const d=s[u],m=s[u+1],v=s[u+2],_=s[u+3],g=f[h],S=f[h+1],M=f[h+2],b=f[h+3];return n[a]=d*b+_*g+m*M-v*S,n[a+1]=m*b+_*S+v*g-d*M,n[a+2]=v*b+_*M+d*S-m*g,n[a+3]=_*b-d*g-m*S-v*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,u){return this._x=n,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,u=n._y,f=n._z,h=n._order,d=Math.cos,m=Math.sin,v=d(s/2),_=d(u/2),g=d(f/2),S=m(s/2),M=m(u/2),b=m(f/2);switch(h){case"XYZ":this._x=S*_*g+v*M*b,this._y=v*M*g-S*_*b,this._z=v*_*b+S*M*g,this._w=v*_*g-S*M*b;break;case"YXZ":this._x=S*_*g+v*M*b,this._y=v*M*g-S*_*b,this._z=v*_*b-S*M*g,this._w=v*_*g+S*M*b;break;case"ZXY":this._x=S*_*g-v*M*b,this._y=v*M*g+S*_*b,this._z=v*_*b+S*M*g,this._w=v*_*g-S*M*b;break;case"ZYX":this._x=S*_*g-v*M*b,this._y=v*M*g+S*_*b,this._z=v*_*b-S*M*g,this._w=v*_*g+S*M*b;break;case"YZX":this._x=S*_*g+v*M*b,this._y=v*M*g+S*_*b,this._z=v*_*b-S*M*g,this._w=v*_*g-S*M*b;break;case"XZY":this._x=S*_*g-v*M*b,this._y=v*M*g-S*_*b,this._z=v*_*b+S*M*g,this._w=v*_*g+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,u=Math.sin(s);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],m=a[9],v=a[2],_=a[6],g=a[10],S=s+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(f-v)*M,this._z=(h-u)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+v)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(f-v)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-u)/M,this._x=(f+v)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(kn(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,u=n._y,f=n._z,h=n._w,d=a._x,m=a._y,v=a._z,_=a._w;return this._x=s*_+h*d+u*v-f*m,this._y=u*_+h*m+f*d-s*v,this._z=f*_+h*v+s*m-u*d,this._w=h*_-s*d-u*m-f*v,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*n._w+s*n._x+u*n._y+f*n._z;if(d<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,d=-d):this.copy(n),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const v=Math.sqrt(m),_=Math.atan2(v,d),g=Math.sin((1-a)*_)/v,S=Math.sin(a*_)/v;return this._w=h*g+this._w*S,this._x=s*g+this._x*S,this._y=u*g+this._y*S,this._z=f*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(n=0,a=0,s=0){rt.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(e_.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(e_.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=n.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(n){const a=this.x,s=this.y,u=this.z,f=n.x,h=n.y,d=n.z,m=n.w,v=2*(h*u-d*s),_=2*(d*a-f*u),g=2*(f*s-h*a);return this.x=a+m*v+h*g-d*_,this.y=s+m*_+d*v-f*g,this.z=u+m*g+f*_-h*v,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Math.max(n.x,Math.min(a.x,this.x)),this.y=Math.max(n.y,Math.min(a.y,this.y)),this.z=Math.max(n.z,Math.min(a.z,this.z)),this}clampScalar(n,a){return this.x=Math.max(n,Math.min(a,this.x)),this.y=Math.max(n,Math.min(a,this.y)),this.z=Math.max(n,Math.min(a,this.z)),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,u=n.y,f=n.z,h=a.x,d=a.y,m=a.z;return this.x=u*m-f*d,this.y=f*h-s*m,this.z=s*d-u*h,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return id.copy(this).projectOnVector(n),this.sub(id)}reflect(n){return this.sub(id.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(kn(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,u=this.z-n.z;return a*a+s*s+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const u=Math.sin(a)*n;return this.x=u*Math.sin(s),this.y=Math.cos(a)*n,this.z=u*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new rt,e_=new ll;class ul{constructor(n=new rt(1/0,1/0,1/0),a=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(bi.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(bi.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=bi.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)n.isMesh===!0?n.getVertexPosition(h,bi):bi.fromBufferAttribute(f,h),bi.applyMatrix4(n.matrixWorld),this.expandByPoint(bi);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Bu.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Bu.copy(s.boundingBox)),Bu.applyMatrix4(n.matrixWorld),this.union(Bu)}const u=n.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,bi),bi.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter($o),Iu.subVectors(this.max,$o),Ns.subVectors(n.a,$o),Ls.subVectors(n.b,$o),Os.subVectors(n.c,$o),Ja.subVectors(Ls,Ns),$a.subVectors(Os,Ls),Dr.subVectors(Ns,Os);let a=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Dr.z,Dr.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Dr.z,0,-Dr.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Dr.y,Dr.x,0];return!ad(a,Ns,Ls,Os,Iu)||(a=[1,0,0,0,1,0,0,0,1],!ad(a,Ns,Ls,Os,Iu))?!1:(Fu.crossVectors(Ja,$a),a=[Fu.x,Fu.y,Fu.z],ad(a,Ns,Ls,Os,Iu))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,bi).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(bi).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(ca),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const ca=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],bi=new rt,Bu=new ul,Ns=new rt,Ls=new rt,Os=new rt,Ja=new rt,$a=new rt,Dr=new rt,$o=new rt,Iu=new rt,Fu=new rt,Ur=new rt;function ad(o,n,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Ur.fromArray(o,f);const d=u.x*Math.abs(Ur.x)+u.y*Math.abs(Ur.y)+u.z*Math.abs(Ur.z),m=n.dot(Ur),v=a.dot(Ur),_=s.dot(Ur);if(Math.max(-Math.max(m,v,_),Math.min(m,v,_))>d)return!1}return!0}const yE=new ul,tl=new rt,rd=new rt;class vc{constructor(n=new rt,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):yE.setFromPoints(n).getCenter(s);let u=0;for(let f=0,h=n.length;f<h;f++)u=Math.max(u,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;tl.subVectors(n,this.center);const a=tl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(tl,u/s),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(rd.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(tl.copy(n.center).add(rd)),this.expandByPoint(tl.copy(n.center).sub(rd))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fa=new rt,sd=new rt,Hu=new rt,tr=new rt,od=new rt,Gu=new rt,ld=new rt;class ox{constructor(n=new rt,a=new rt(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,fa)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=fa.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(fa.copy(this.origin).addScaledVector(this.direction,a),fa.distanceToSquared(n))}distanceSqToSegment(n,a,s,u){sd.copy(n).add(a).multiplyScalar(.5),Hu.copy(a).sub(n).normalize(),tr.copy(this.origin).sub(sd);const f=n.distanceTo(a)*.5,h=-this.direction.dot(Hu),d=tr.dot(this.direction),m=-tr.dot(Hu),v=tr.lengthSq(),_=Math.abs(1-h*h);let g,S,M,b;if(_>0)if(g=h*m-d,S=h*d-m,b=f*_,g>=0)if(S>=-b)if(S<=b){const A=1/_;g*=A,S*=A,M=g*(g+h*S+2*d)+S*(h*g+S+2*m)+v}else S=f,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+v;else S=-f,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+v;else S<=-b?(g=Math.max(0,-(-h*f+d)),S=g>0?-f:Math.min(Math.max(-f,-m),f),M=-g*g+S*(S+2*m)+v):S<=b?(g=0,S=Math.min(Math.max(-f,-m),f),M=S*(S+2*m)+v):(g=Math.max(0,-(h*f+d)),S=g>0?f:Math.min(Math.max(-f,-m),f),M=-g*g+S*(S+2*m)+v);else S=h>0?-f:f,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+v;return s&&s.copy(this.origin).addScaledVector(this.direction,g),u&&u.copy(sd).addScaledVector(Hu,S),M}intersectSphere(n,a){fa.subVectors(n.center,this.origin);const s=fa.dot(this.direction),u=fa.dot(fa)-s*s,f=n.radius*n.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,a):this.at(d,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,u,f,h,d,m;const v=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return v>=0?(s=(n.min.x-S.x)*v,u=(n.max.x-S.x)*v):(s=(n.max.x-S.x)*v,u=(n.min.x-S.x)*v),_>=0?(f=(n.min.y-S.y)*_,h=(n.max.y-S.y)*_):(f=(n.max.y-S.y)*_,h=(n.min.y-S.y)*_),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),g>=0?(d=(n.min.z-S.z)*g,m=(n.max.z-S.z)*g):(d=(n.max.z-S.z)*g,m=(n.min.z-S.z)*g),s>m||d>u)||((d>s||s!==s)&&(s=d),(m<u||u!==u)&&(u=m),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(n){return this.intersectBox(n,fa)!==null}intersectTriangle(n,a,s,u,f){od.subVectors(a,n),Gu.subVectors(s,n),ld.crossVectors(od,Gu);let h=this.direction.dot(ld),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;tr.subVectors(this.origin,n);const m=d*this.direction.dot(Gu.crossVectors(tr,Gu));if(m<0)return null;const v=d*this.direction.dot(od.cross(tr));if(v<0||m+v>h)return null;const _=-d*tr.dot(ld);return _<0?null:this.at(_/h,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(n,a,s,u,f,h,d,m,v,_,g,S,M,b,A,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,m,v,_,g,S,M,b,A,y)}set(n,a,s,u,f,h,d,m,v,_,g,S,M,b,A,y){const x=this.elements;return x[0]=n,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=h,x[9]=d,x[13]=m,x[2]=v,x[6]=_,x[10]=g,x[14]=S,x[3]=M,x[7]=b,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,u=1/zs.setFromMatrixColumn(n,0).length(),f=1/zs.setFromMatrixColumn(n,1).length(),h=1/zs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,u=n.y,f=n.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(u),v=Math.sin(u),_=Math.cos(f),g=Math.sin(f);if(n.order==="XYZ"){const S=h*_,M=h*g,b=d*_,A=d*g;a[0]=m*_,a[4]=-m*g,a[8]=v,a[1]=M+b*v,a[5]=S-A*v,a[9]=-d*m,a[2]=A-S*v,a[6]=b+M*v,a[10]=h*m}else if(n.order==="YXZ"){const S=m*_,M=m*g,b=v*_,A=v*g;a[0]=S+A*d,a[4]=b*d-M,a[8]=h*v,a[1]=h*g,a[5]=h*_,a[9]=-d,a[2]=M*d-b,a[6]=A+S*d,a[10]=h*m}else if(n.order==="ZXY"){const S=m*_,M=m*g,b=v*_,A=v*g;a[0]=S-A*d,a[4]=-h*g,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*_,a[9]=A-S*d,a[2]=-h*v,a[6]=d,a[10]=h*m}else if(n.order==="ZYX"){const S=h*_,M=h*g,b=d*_,A=d*g;a[0]=m*_,a[4]=b*v-M,a[8]=S*v+A,a[1]=m*g,a[5]=A*v+S,a[9]=M*v-b,a[2]=-v,a[6]=d*m,a[10]=h*m}else if(n.order==="YZX"){const S=h*m,M=h*v,b=d*m,A=d*v;a[0]=m*_,a[4]=A-S*g,a[8]=b*g+M,a[1]=g,a[5]=h*_,a[9]=-d*_,a[2]=-v*_,a[6]=M*g+b,a[10]=S-A*g}else if(n.order==="XZY"){const S=h*m,M=h*v,b=d*m,A=d*v;a[0]=m*_,a[4]=-g,a[8]=v*_,a[1]=S*g+A,a[5]=h*_,a[9]=M*g-b,a[2]=b*g-M,a[6]=d*_,a[10]=A*g+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(ME,n,EE)}lookAt(n,a,s){const u=this.elements;return ai.subVectors(n,a),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),er.crossVectors(s,ai),er.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),er.crossVectors(s,ai)),er.normalize(),Vu.crossVectors(ai,er),u[0]=er.x,u[4]=Vu.x,u[8]=ai.x,u[1]=er.y,u[5]=Vu.y,u[9]=ai.y,u[2]=er.z,u[6]=Vu.z,u[10]=ai.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],m=s[8],v=s[12],_=s[1],g=s[5],S=s[9],M=s[13],b=s[2],A=s[6],y=s[10],x=s[14],P=s[3],z=s[7],U=s[11],it=s[15],V=u[0],O=u[4],F=u[8],D=u[12],C=u[1],I=u[5],ot=u[9],st=u[13],gt=u[2],ht=u[6],q=u[10],et=u[14],K=u[3],xt=u[7],St=u[11],Gt=u[15];return f[0]=h*V+d*C+m*gt+v*K,f[4]=h*O+d*I+m*ht+v*xt,f[8]=h*F+d*ot+m*q+v*St,f[12]=h*D+d*st+m*et+v*Gt,f[1]=_*V+g*C+S*gt+M*K,f[5]=_*O+g*I+S*ht+M*xt,f[9]=_*F+g*ot+S*q+M*St,f[13]=_*D+g*st+S*et+M*Gt,f[2]=b*V+A*C+y*gt+x*K,f[6]=b*O+A*I+y*ht+x*xt,f[10]=b*F+A*ot+y*q+x*St,f[14]=b*D+A*st+y*et+x*Gt,f[3]=P*V+z*C+U*gt+it*K,f[7]=P*O+z*I+U*ht+it*xt,f[11]=P*F+z*ot+U*q+it*St,f[15]=P*D+z*st+U*et+it*Gt,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],u=n[8],f=n[12],h=n[1],d=n[5],m=n[9],v=n[13],_=n[2],g=n[6],S=n[10],M=n[14],b=n[3],A=n[7],y=n[11],x=n[15];return b*(+f*m*g-u*v*g-f*d*S+s*v*S+u*d*M-s*m*M)+A*(+a*m*M-a*v*S+f*h*S-u*h*M+u*v*_-f*m*_)+y*(+a*v*g-a*d*M-f*h*g+s*h*M+f*d*_-s*v*_)+x*(-u*d*_-a*m*g+a*d*S+u*h*g-s*h*S+s*m*_)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=a,u[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],m=n[6],v=n[7],_=n[8],g=n[9],S=n[10],M=n[11],b=n[12],A=n[13],y=n[14],x=n[15],P=g*y*v-A*S*v+A*m*M-d*y*M-g*m*x+d*S*x,z=b*S*v-_*y*v-b*m*M+h*y*M+_*m*x-h*S*x,U=_*A*v-b*g*v+b*d*M-h*A*M-_*d*x+h*g*x,it=b*g*m-_*A*m-b*d*S+h*A*S+_*d*y-h*g*y,V=a*P+s*z+u*U+f*it;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/V;return n[0]=P*O,n[1]=(A*S*f-g*y*f-A*u*M+s*y*M+g*u*x-s*S*x)*O,n[2]=(d*y*f-A*m*f+A*u*v-s*y*v-d*u*x+s*m*x)*O,n[3]=(g*m*f-d*S*f-g*u*v+s*S*v+d*u*M-s*m*M)*O,n[4]=z*O,n[5]=(_*y*f-b*S*f+b*u*M-a*y*M-_*u*x+a*S*x)*O,n[6]=(b*m*f-h*y*f-b*u*v+a*y*v+h*u*x-a*m*x)*O,n[7]=(h*S*f-_*m*f+_*u*v-a*S*v-h*u*M+a*m*M)*O,n[8]=U*O,n[9]=(b*g*f-_*A*f-b*s*M+a*A*M+_*s*x-a*g*x)*O,n[10]=(h*A*f-b*d*f+b*s*v-a*A*v-h*s*x+a*d*x)*O,n[11]=(_*d*f-h*g*f-_*s*v+a*g*v+h*s*M-a*d*M)*O,n[12]=it*O,n[13]=(_*A*u-b*g*u+b*s*S-a*A*S-_*s*y+a*g*y)*O,n[14]=(b*d*u-h*A*u-b*s*m+a*A*m+h*s*y-a*d*y)*O,n[15]=(h*g*u-_*d*u+_*s*m-a*g*m-h*s*S+a*d*S)*O,this}scale(n){const a=this.elements,s=n.x,u=n.y,f=n.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=n.x,d=n.y,m=n.z,v=f*h,_=f*d;return this.set(v*h+s,v*d-u*m,v*m+u*d,0,v*d+u*m,_*d+s,_*m-u*h,0,v*m-u*d,_*m+u*h,f*m*m+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,u,f,h){return this.set(1,s,f,0,n,1,h,0,a,u,1,0,0,0,0,1),this}compose(n,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,m=a._w,v=f+f,_=h+h,g=d+d,S=f*v,M=f*_,b=f*g,A=h*_,y=h*g,x=d*g,P=m*v,z=m*_,U=m*g,it=s.x,V=s.y,O=s.z;return u[0]=(1-(A+x))*it,u[1]=(M+U)*it,u[2]=(b-z)*it,u[3]=0,u[4]=(M-U)*V,u[5]=(1-(S+x))*V,u[6]=(y+P)*V,u[7]=0,u[8]=(b+z)*O,u[9]=(y-P)*O,u[10]=(1-(S+A))*O,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,a,s){const u=this.elements;let f=zs.set(u[0],u[1],u[2]).length();const h=zs.set(u[4],u[5],u[6]).length(),d=zs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],Ai.copy(this);const v=1/f,_=1/h,g=1/d;return Ai.elements[0]*=v,Ai.elements[1]*=v,Ai.elements[2]*=v,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,a.setFromRotationMatrix(Ai),s.x=f,s.y=h,s.z=d,this}makePerspective(n,a,s,u,f,h,d=_a){const m=this.elements,v=2*f/(a-n),_=2*f/(s-u),g=(a+n)/(a-n),S=(s+u)/(s-u);let M,b;if(d===_a)M=-(h+f)/(h-f),b=-2*h*f/(h-f);else if(d===dc)M=-h/(h-f),b=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(n,a,s,u,f,h,d=_a){const m=this.elements,v=1/(a-n),_=1/(s-u),g=1/(h-f),S=(a+n)*v,M=(s+u)*_;let b,A;if(d===_a)b=(h+f)*g,A=-2*g;else if(d===dc)b=f*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*v,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const zs=new rt,Ai=new Je,ME=new rt(0,0,0),EE=new rt(1,1,1),er=new rt,Vu=new rt,ai=new rt,n_=new Je,i_=new ll;class ya{constructor(n=0,a=0,s=0,u=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,u=this._order){return this._x=n,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const u=n.elements,f=u[0],h=u[4],d=u[8],m=u[1],v=u[5],_=u[9],g=u[2],S=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,v),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,v)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(kn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,v)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-kn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-h,v));break;case"YZX":this._z=Math.asin(kn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,v),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-kn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,v),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return n_.makeRotationFromQuaternion(n),this.setFromRotationMatrix(n_,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return i_.setFromEuler(this),this.setFromQuaternion(i_,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class lx{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let TE=0;const a_=new rt,Ps=new ll,ha=new Je,Xu=new rt,el=new rt,bE=new rt,AE=new ll,r_=new rt(1,0,0),s_=new rt(0,1,0),o_=new rt(0,0,1),l_={type:"added"},RE={type:"removed"},Bs={type:"childadded",child:null},ud={type:"childremoved",child:null};class Wn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const n=new rt,a=new ya,s=new ll,u=new rt(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new Je},normalMatrix:{value:new ce}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Ps.setFromAxisAngle(n,a),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(n,a){return Ps.setFromAxisAngle(n,a),this.quaternion.premultiply(Ps),this}rotateX(n){return this.rotateOnAxis(r_,n)}rotateY(n){return this.rotateOnAxis(s_,n)}rotateZ(n){return this.rotateOnAxis(o_,n)}translateOnAxis(n,a){return a_.copy(n).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(r_,n)}translateY(n){return this.translateOnAxis(s_,n)}translateZ(n){return this.translateOnAxis(o_,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Xu.copy(n):Xu.set(n,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(el,Xu,this.up):ha.lookAt(Xu,el,this.up),this.quaternion.setFromRotationMatrix(ha),u&&(ha.extractRotation(u.matrixWorld),Ps.setFromRotationMatrix(ha),this.quaternion.premultiply(Ps.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(l_),Bs.child=n,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(RE),ud.child=n,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),ha.multiply(n.parent.matrixWorld)),n.applyMatrix4(ha),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(l_),Bs.child=n,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(n,a);if(h!==void 0)return h}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,n,bE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,AE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function f(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(n)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let v=0,_=m.length;v<_;v++){const g=m[v];f(n.shapes,g)}else f(n.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,v=this.material.length;m<v;m++)d.push(f(n.materials,this.material[m]));u.material=d}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];u.animations.push(f(n.animations,m))}}if(a){const d=h(n.geometries),m=h(n.materials),v=h(n.textures),_=h(n.images),g=h(n.shapes),S=h(n.skeletons),M=h(n.animations),b=h(n.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),v.length>0&&(s.textures=v),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const m=[];for(const v in d){const _=d[v];delete _.metadata,m.push(_)}return m}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const u=n.children[s];this.add(u.clone())}return this}}Wn.DEFAULT_UP=new rt(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new rt,da=new rt,cd=new rt,pa=new rt,Is=new rt,Fs=new rt,u_=new rt,fd=new rt,hd=new rt,dd=new rt,pd=new Qe,md=new Qe,gd=new Qe;class Ci{constructor(n=new rt,a=new rt,s=new rt){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,u){u.subVectors(s,a),Ri.subVectors(n,a),u.cross(Ri);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,a,s,u,f){Ri.subVectors(u,a),da.subVectors(s,a),cd.subVectors(n,a);const h=Ri.dot(Ri),d=Ri.dot(da),m=Ri.dot(cd),v=da.dot(da),_=da.dot(cd),g=h*v-d*d;if(g===0)return f.set(0,0,0),null;const S=1/g,M=(v*m-d*_)*S,b=(h*_-d*m)*S;return f.set(1-M-b,b,M)}static containsPoint(n,a,s,u){return this.getBarycoord(n,a,s,u,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(n,a,s,u,f,h,d,m){return this.getBarycoord(n,a,s,u,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(n,a,s,u,f,h){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(n,a),md.fromBufferAttribute(n,s),gd.fromBufferAttribute(n,u),h.setScalar(0),h.addScaledVector(pd,f.x),h.addScaledVector(md,f.y),h.addScaledVector(gd,f.z),h}static isFrontFacing(n,a,s,u){return Ri.subVectors(s,a),da.subVectors(n,a),Ri.cross(da).dot(u)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,u){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,a,s,u){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ci.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ci.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,u,f){return Ci.getInterpolation(n,this.a,this.b,this.c,a,s,u,f)}containsPoint(n){return Ci.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ci.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,u=this.b,f=this.c;let h,d;Is.subVectors(u,s),Fs.subVectors(f,s),fd.subVectors(n,s);const m=Is.dot(fd),v=Fs.dot(fd);if(m<=0&&v<=0)return a.copy(s);hd.subVectors(n,u);const _=Is.dot(hd),g=Fs.dot(hd);if(_>=0&&g<=_)return a.copy(u);const S=m*g-_*v;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),a.copy(s).addScaledVector(Is,h);dd.subVectors(n,f);const M=Is.dot(dd),b=Fs.dot(dd);if(b>=0&&M<=b)return a.copy(f);const A=M*v-m*b;if(A<=0&&v>=0&&b<=0)return d=v/(v-b),a.copy(s).addScaledVector(Fs,d);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return u_.subVectors(f,u),d=(g-_)/(g-_+(M-b)),a.copy(u).addScaledVector(u_,d);const x=1/(y+A+S);return h=A*x,d=S*x,a.copy(s).addScaledVector(Is,h).addScaledVector(Fs,d)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},ku={h:0,s:0,l:0};function vd(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class ze{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=vi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Ae.toWorkingColorSpace(this,a),this}setRGB(n,a,s,u=Ae.workingColorSpace){return this.r=n,this.g=a,this.b=s,Ae.toWorkingColorSpace(this,u),this}setHSL(n,a,s,u=Ae.workingColorSpace){if(n=fE(n,1),a=kn(a,0,1),s=kn(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=vd(h,f,n+1/3),this.g=vd(h,f,n),this.b=vd(h,f,n-1/3)}return Ae.toWorkingColorSpace(this,u),this}setStyle(n,a=vi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=vi){const s=ux[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=xa(n.r),this.g=xa(n.g),this.b=xa(n.b),this}copyLinearToSRGB(n){return this.r=Ws(n.r),this.g=Ws(n.g),this.b=Ws(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=vi){return Ae.fromWorkingColorSpace(wn.copy(this),n),Math.round(kn(wn.r*255,0,255))*65536+Math.round(kn(wn.g*255,0,255))*256+Math.round(kn(wn.b*255,0,255))}getHexString(n=vi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Ae.workingColorSpace){Ae.fromWorkingColorSpace(wn.copy(this),a);const s=wn.r,u=wn.g,f=wn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let m,v;const _=(d+h)/2;if(d===h)m=0,v=0;else{const g=h-d;switch(v=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(u-f)/g+(u<f?6:0);break;case u:m=(f-s)/g+2;break;case f:m=(s-u)/g+4;break}m/=6}return n.h=m,n.s=v,n.l=_,n}getRGB(n,a=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(wn.copy(this),a),n.r=wn.r,n.g=wn.g,n.b=wn.b,n}getStyle(n=vi){Ae.fromWorkingColorSpace(wn.copy(this),n);const a=wn.r,s=wn.g,u=wn.b;return n!==vi?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(n,a,s){return this.getHSL(nr),this.setHSL(nr.h+n,nr.s+a,nr.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(nr),n.getHSL(ku);const s=td(nr.h,ku.h,a),u=td(nr.s,ku.s,a),f=td(nr.l,ku.l,a);return this.setHSL(s,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,u=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ze;ze.NAMES=ux;let CE=0;class cl extends no{static get type(){return"Material"}get type(){return this.constructor.type}set type(n){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=ol(),this.name="",this.blending=qs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=wd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(s.blending=this.blending),this.side!==or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Cd&&(s.blendSrc=this.blendSrc),this.blendDst!==wd&&(s.blendDst=this.blendDst),this.blendEquation!==Ir&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}if(a){const f=u(n.textures),h=u(n.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cx extends cl{static get type(){return"MeshBasicMaterial"}constructor(n){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const an=new rt,qu=new Pe;class Ui{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=W0,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=a.array[s+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)qu.fromBufferAttribute(this,a),qu.applyMatrix3(n),this.setXY(a,qu.x,qu.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.applyMatrix3(n),this.setXYZ(a,an.x,an.y,an.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.applyMatrix4(n),this.setXYZ(a,an.x,an.y,an.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.applyNormalMatrix(n),this.setXYZ(a,an.x,an.y,an.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.transformDirection(n),this.setXYZ(a,an.x,an.y,an.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=Jo(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Xn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=Jo(a,this.array)),a}setX(n,a){return this.normalized&&(a=Xn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=Jo(a,this.array)),a}setY(n,a){return this.normalized&&(a=Xn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=Jo(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Xn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=Jo(a,this.array)),a}setW(n,a){return this.normalized&&(a=Xn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Xn(a,this.array),s=Xn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,u){return n*=this.itemSize,this.normalized&&(a=Xn(a,this.array),s=Xn(s,this.array),u=Xn(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this}setXYZW(n,a,s,u,f){return n*=this.itemSize,this.normalized&&(a=Xn(a,this.array),s=Xn(s,this.array),u=Xn(u,this.array),f=Xn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==W0&&(n.usage=this.usage),n}}class fx extends Ui{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class hx extends Ui{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Vr extends Ui{constructor(n,a,s){super(new Float32Array(n),a,s)}}let wE=0;const gi=new Je,_d=new Wn,Hs=new rt,ri=new ul,nl=new ul,vn=new rt;class Ea extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(ax(n)?hx:fx)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ce().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return gi.makeRotationFromQuaternion(n),this.applyMatrix4(gi),this}rotateX(n){return gi.makeRotationX(n),this.applyMatrix4(gi),this}rotateY(n){return gi.makeRotationY(n),this.applyMatrix4(gi),this}rotateZ(n){return gi.makeRotationZ(n),this.applyMatrix4(gi),this}translate(n,a,s){return gi.makeTranslation(n,a,s),this.applyMatrix4(gi),this}scale(n,a,s){return gi.makeScale(n,a,s),this.applyMatrix4(gi),this}lookAt(n){return _d.lookAt(n),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=n.length;u<f;u++){const h=n[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vr(s,3))}else{for(let s=0,u=a.count;s<u;s++){const f=n[s];a.setXYZ(s,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];ri.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(n){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(n),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ri.min,nl.min),ri.expandByPoint(vn),vn.addVectors(ri.max,nl.max),ri.expandByPoint(vn)):(ri.expandByPoint(nl.min),ri.expandByPoint(nl.max))}ri.getCenter(s);let u=0;for(let f=0,h=n.count;f<h;f++)vn.fromBufferAttribute(n,f),u=Math.max(u,s.distanceToSquared(vn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],m=this.morphTargetsRelative;for(let v=0,_=d.count;v<_;v++)vn.fromBufferAttribute(d,v),m&&(Hs.fromBufferAttribute(n,v),vn.add(Hs)),u=Math.max(u,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let F=0;F<s.count;F++)d[F]=new rt,m[F]=new rt;const v=new rt,_=new rt,g=new rt,S=new Pe,M=new Pe,b=new Pe,A=new rt,y=new rt;function x(F,D,C){v.fromBufferAttribute(s,F),_.fromBufferAttribute(s,D),g.fromBufferAttribute(s,C),S.fromBufferAttribute(f,F),M.fromBufferAttribute(f,D),b.fromBufferAttribute(f,C),_.sub(v),g.sub(v),M.sub(S),b.sub(S);const I=1/(M.x*b.y-b.x*M.y);isFinite(I)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(I),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(I),d[F].add(A),d[D].add(A),d[C].add(A),m[F].add(y),m[D].add(y),m[C].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.count}]);for(let F=0,D=P.length;F<D;++F){const C=P[F],I=C.start,ot=C.count;for(let st=I,gt=I+ot;st<gt;st+=3)x(n.getX(st+0),n.getX(st+1),n.getX(st+2))}const z=new rt,U=new rt,it=new rt,V=new rt;function O(F){it.fromBufferAttribute(u,F),V.copy(it);const D=d[F];z.copy(D),z.sub(it.multiplyScalar(it.dot(D))).normalize(),U.crossVectors(V,D);const I=U.dot(m[F])<0?-1:1;h.setXYZW(F,z.x,z.y,z.z,I)}for(let F=0,D=P.length;F<D;++F){const C=P[F],I=C.start,ot=C.count;for(let st=I,gt=I+ot;st<gt;st+=3)O(n.getX(st+0)),O(n.getX(st+1)),O(n.getX(st+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const u=new rt,f=new rt,h=new rt,d=new rt,m=new rt,v=new rt,_=new rt,g=new rt;if(n)for(let S=0,M=n.count;S<M;S+=3){const b=n.getX(S+0),A=n.getX(S+1),y=n.getX(S+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,A),h.fromBufferAttribute(a,y),_.subVectors(h,f),g.subVectors(u,f),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,y),d.add(_),m.add(_),v.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,v.x,v.y,v.z)}else for(let S=0,M=a.count;S<M;S+=3)u.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),h.fromBufferAttribute(a,S+2),_.subVectors(h,f),g.subVectors(u,f),_.cross(g),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)vn.fromBufferAttribute(n,a),vn.normalize(),n.setXYZ(a,vn.x,vn.y,vn.z)}toNonIndexed(){function n(d,m){const v=d.array,_=d.itemSize,g=d.normalized,S=new v.constructor(m.length*_);let M=0,b=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*_;for(let x=0;x<_;x++)S[b++]=v[M++]}return new Ui(S,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Ea,s=this.index.array,u=this.attributes;for(const d in u){const m=u[d],v=n(m,s);a.setAttribute(d,v)}const f=this.morphAttributes;for(const d in f){const m=[],v=f[d];for(let _=0,g=v.length;_<g;_++){const S=v[_],M=n(S,s);m.push(M)}a.morphAttributes[d]=m}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const v=h[d];a.addGroup(v.start,v.count,v.materialIndex)}return a}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const v in m)m[v]!==void 0&&(n[v]=m[v]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const m in s){const v=s[m];n.data.attributes[m]=v.toJSON(n.data)}const u={};let f=!1;for(const m in this.morphAttributes){const v=this.morphAttributes[m],_=[];for(let g=0,S=v.length;g<S;g++){const M=v[g];_.push(M.toJSON(n.data))}_.length>0&&(u[m]=_,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(n.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(n.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const u=n.attributes;for(const v in u){const _=u[v];this.setAttribute(v,_.clone(a))}const f=n.morphAttributes;for(const v in f){const _=[],g=f[v];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(a));this.morphAttributes[v]=_}this.morphTargetsRelative=n.morphTargetsRelative;const h=n.groups;for(let v=0,_=h.length;v<_;v++){const g=h[v];this.addGroup(g.start,g.count,g.materialIndex)}const d=n.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=n.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c_=new Je,Nr=new ox,Yu=new vc,f_=new rt,Wu=new rt,ju=new rt,Zu=new rt,xd=new rt,Ku=new rt,h_=new rt,Qu=new rt;class Yi extends Wn{constructor(n=new Ea,a=new cx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(n,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,n);const d=this.morphTargetInfluences;if(f&&d){Ku.set(0,0,0);for(let m=0,v=f.length;m<v;m++){const _=d[m],g=f[m];_!==0&&(xd.fromBufferAttribute(g,n),h?Ku.addScaledVector(xd,_):Ku.addScaledVector(xd.sub(a),_))}a.add(Ku)}return a}raycast(n,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Yu.copy(s.boundingSphere),Yu.applyMatrix4(f),Nr.copy(n.ray).recast(n.near),!(Yu.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Yu,f_)===null||Nr.origin.distanceToSquared(f_)>(n.far-n.near)**2))&&(c_.copy(f).invert(),Nr.copy(n.ray).applyMatrix4(c_),!(s.boundingBox!==null&&Nr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,Nr)))}_computeIntersections(n,a,s){let u;const f=this.geometry,h=this.material,d=f.index,m=f.attributes.position,v=f.attributes.uv,_=f.attributes.uv1,g=f.attributes.normal,S=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=P,it=z;U<it;U+=3){const V=d.getX(U),O=d.getX(U+1),F=d.getX(U+2);u=Ju(this,x,n,s,v,_,g,V,O,F),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=b,x=A;y<x;y+=3){const P=d.getX(y),z=d.getX(y+1),U=d.getX(y+2);u=Ju(this,h,n,s,v,_,g,P,z,U),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=P,it=z;U<it;U+=3){const V=U,O=U+1,F=U+2;u=Ju(this,x,n,s,v,_,g,V,O,F),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=b,x=A;y<x;y+=3){const P=y,z=y+1,U=y+2;u=Ju(this,h,n,s,v,_,g,P,z,U),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function DE(o,n,a,s,u,f,h,d){let m;if(n.side===qn?m=s.intersectTriangle(h,f,u,!0,d):m=s.intersectTriangle(u,f,h,n.side===or,d),m===null)return null;Qu.copy(d),Qu.applyMatrix4(o.matrixWorld);const v=a.ray.origin.distanceTo(Qu);return v<a.near||v>a.far?null:{distance:v,point:Qu.clone(),object:o}}function Ju(o,n,a,s,u,f,h,d,m,v){o.getVertexPosition(d,Wu),o.getVertexPosition(m,ju),o.getVertexPosition(v,Zu);const _=DE(o,n,a,s,Wu,ju,Zu,h_);if(_){const g=new rt;Ci.getBarycoord(h_,Wu,ju,Zu,g),u&&(_.uv=Ci.getInterpolatedAttribute(u,d,m,v,g,new Pe)),f&&(_.uv1=Ci.getInterpolatedAttribute(f,d,m,v,g,new Pe)),h&&(_.normal=Ci.getInterpolatedAttribute(h,d,m,v,g,new rt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:v,normal:new rt,materialIndex:0};Ci.getNormal(Wu,ju,Zu,S.normal),_.face=S,_.barycoord=g}return _}class fl extends Ea{constructor(n=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const m=[],v=[],_=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,s,a,n,h,f,0),b("z","y","x",1,-1,s,a,-n,h,f,1),b("x","z","y",1,1,n,s,a,u,h,2),b("x","z","y",1,-1,n,s,-a,u,h,3),b("x","y","z",1,-1,n,a,s,u,f,4),b("x","y","z",-1,-1,n,a,-s,u,f,5),this.setIndex(m),this.setAttribute("position",new Vr(v,3)),this.setAttribute("normal",new Vr(_,3)),this.setAttribute("uv",new Vr(g,2));function b(A,y,x,P,z,U,it,V,O,F,D){const C=U/O,I=it/F,ot=U/2,st=it/2,gt=V/2,ht=O+1,q=F+1;let et=0,K=0;const xt=new rt;for(let St=0;St<q;St++){const Gt=St*I-st;for(let ne=0;ne<ht;ne++){const ye=ne*C-ot;xt[A]=ye*P,xt[y]=Gt*z,xt[x]=gt,v.push(xt.x,xt.y,xt.z),xt[A]=0,xt[y]=0,xt[x]=V>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(ne/O),g.push(1-St/F),et+=1}}for(let St=0;St<F;St++)for(let Gt=0;Gt<O;Gt++){const ne=S+Gt+ht*St,ye=S+Gt+ht*(St+1),w=S+(Gt+1)+ht*(St+1),Y=S+(Gt+1)+ht*St;m.push(ne,ye,Y),m.push(ye,w,Y),K+=6}d.addGroup(M,K,D),M+=K,S+=et}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new fl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function $s(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=u.clone():Array.isArray(u)?n[a][s]=u.slice():n[a][s]=u}}return n}function Pn(o){const n={};for(let a=0;a<o.length;a++){const s=$s(o[a]);for(const u in s)n[u]=s[u]}return n}function UE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function dx(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:Ae.workingColorSpace}const NE={clone:$s,merge:Pn};var LE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ma extends cl{static get type(){return"ShaderMaterial"}constructor(n){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LE,this.fragmentShader=OE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=$s(n.uniforms),this.uniformsGroups=UE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(n).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class px extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=_a}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new rt,d_=new Pe,p_=new Pe;class _i extends px{constructor(n=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=dp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan($h*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return dp*2*Math.atan(Math.tan($h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ir.x,ir.y).multiplyScalar(-n/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-n/ir.z)}getViewSize(n,a){return this.getViewBounds(n,d_,p_),a.subVectors(p_,d_)}setViewOffset(n,a,s,u,f,h){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan($h*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,v=h.fullHeight;f+=h.offsetX*u/m,a-=h.offsetY*s/v,u*=h.width/m,s*=h.height/v}const d=this.filmOffset;d!==0&&(f+=n*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Gs=-90,Vs=1;class zE extends Wn{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new _i(Gs,Vs,n,a);u.layers=this.layers,this.add(u);const f=new _i(Gs,Vs,n,a);f.layers=this.layers,this.add(f);const h=new _i(Gs,Vs,n,a);h.layers=this.layers,this.add(h);const d=new _i(Gs,Vs,n,a);d.layers=this.layers,this.add(d);const m=new _i(Gs,Vs,n,a);m.layers=this.layers,this.add(m);const v=new _i(Gs,Vs,n,a);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,m]=a;for(const v of a)this.remove(v);if(n===_a)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(n===dc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const v of a)this.add(v),v.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,m,v,_]=this.children,g=n.getRenderTarget(),S=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),b=n.xr.enabled;n.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,u),n.render(a,f),n.setRenderTarget(s,1,u),n.render(a,h),n.setRenderTarget(s,2,u),n.render(a,d),n.setRenderTarget(s,3,u),n.render(a,m),n.setRenderTarget(s,4,u),n.render(a,v),s.texture.generateMipmaps=A,n.setRenderTarget(s,5,u),n.render(a,_),n.setRenderTarget(g,S,M),n.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class mx extends Yn{constructor(n,a,s,u,f,h,d,m,v,_){n=n!==void 0?n:[],a=a!==void 0?a:Zs,super(n,a,s,u,f,h,d,m,v,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class PE extends kr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},u=[s,s,s,s,s,s];this.texture=new mx(u,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:qi}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new fl(5,5,5),f=new Ma({name:"CubemapFromEquirect",uniforms:$s(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:rr});f.uniforms.tEquirect.value=a;const h=new Yi(u,f),d=a.minFilter;return a.minFilter===Gr&&(a.minFilter=qi),new zE(1,10,this).update(n,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(n,a,s,u){const f=n.getRenderTarget();for(let h=0;h<6;h++)n.setRenderTarget(this,h),n.clear(a,s,u);n.setRenderTarget(f)}}const Sd=new rt,BE=new rt,IE=new ce;class Pr{constructor(n=new rt(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,u){return this.normal.set(n,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const u=Sd.subVectors(s,a).cross(BE.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Sd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||IE.getNormalMatrix(n),u=this.coplanarPoint(Sd).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new vc,$u=new rt;class gx{constructor(n=new Pr,a=new Pr,s=new Pr,u=new Pr,f=new Pr,h=new Pr){this.planes=[n,a,s,u,f,h]}set(n,a,s,u,f,h){const d=this.planes;return d[0].copy(n),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=_a){const s=this.planes,u=n.elements,f=u[0],h=u[1],d=u[2],m=u[3],v=u[4],_=u[5],g=u[6],S=u[7],M=u[8],b=u[9],A=u[10],y=u[11],x=u[12],P=u[13],z=u[14],U=u[15];if(s[0].setComponents(m-f,S-v,y-M,U-x).normalize(),s[1].setComponents(m+f,S+v,y+M,U+x).normalize(),s[2].setComponents(m+h,S+_,y+b,U+P).normalize(),s[3].setComponents(m-h,S-_,y-b,U-P).normalize(),s[4].setComponents(m-d,S-g,y-A,U-z).normalize(),a===_a)s[5].setComponents(m+d,S+g,y+A,U+z).normalize();else if(a===dc)s[5].setComponents(d,g,A,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Lr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(n){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(n){const a=this.planes,s=n.center,u=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if($u.x=u.normal.x>0?n.max.x:n.min.x,$u.y=u.normal.y>0?n.max.y:n.min.y,$u.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint($u)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vx(){let o=null,n=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(u),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function FE(o){const n=new WeakMap;function a(d,m){const v=d.array,_=d.usage,g=v.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,v,_),d.onUploadCallback();let M;if(v instanceof Float32Array)M=o.FLOAT;else if(v instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)M=o.SHORT;else if(v instanceof Uint32Array)M=o.UNSIGNED_INT;else if(v instanceof Int32Array)M=o.INT;else if(v instanceof Int8Array)M=o.BYTE;else if(v instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:S,type:M,bytesPerElement:v.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,v){const _=m.array,g=m.updateRanges;if(o.bindBuffer(v,d),g.length===0)o.bufferSubData(v,0,_);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],A=g[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++S,g[S]=A)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const A=g[M];o.bufferSubData(v,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=n.get(d);m&&(o.deleteBuffer(m.buffer),n.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=n.get(d);(!_||_.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const v=n.get(d);if(v===void 0)n.set(d,a(d,m));else if(v.version<d.version){if(v.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,d,m),v.version=d.version}}return{get:u,remove:f,update:h}}class hl extends Ea{constructor(n=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:u};const f=n/2,h=a/2,d=Math.floor(s),m=Math.floor(u),v=d+1,_=m+1,g=n/d,S=a/m,M=[],b=[],A=[],y=[];for(let x=0;x<_;x++){const P=x*S-h;for(let z=0;z<v;z++){const U=z*g-f;b.push(U,-P,0),A.push(0,0,1),y.push(z/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const z=P+v*x,U=P+v*(x+1),it=P+1+v*(x+1),V=P+1+v*x;M.push(z,U,V),M.push(U,it,V)}this.setIndex(M),this.setAttribute("position",new Vr(b,3)),this.setAttribute("normal",new Vr(A,3)),this.setAttribute("uv",new Vr(y,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new hl(n.width,n.height,n.widthSegments,n.heightSegments)}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$E=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gT="gl_FragColor = linearToOutputTexel( gl_FragColor );",vT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ET=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:HE,alphahash_pars_fragment:GE,alphamap_fragment:VE,alphamap_pars_fragment:XE,alphatest_fragment:kE,alphatest_pars_fragment:qE,aomap_fragment:YE,aomap_pars_fragment:WE,batching_pars_vertex:jE,batching_vertex:ZE,begin_vertex:KE,beginnormal_vertex:QE,bsdfs:JE,iridescence_fragment:$E,bumpmap_pars_fragment:tT,clipping_planes_fragment:eT,clipping_planes_pars_fragment:nT,clipping_planes_pars_vertex:iT,clipping_planes_vertex:aT,color_fragment:rT,color_pars_fragment:sT,color_pars_vertex:oT,color_vertex:lT,common:uT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:fT,displacementmap_pars_vertex:hT,displacementmap_vertex:dT,emissivemap_fragment:pT,emissivemap_pars_fragment:mT,colorspace_fragment:gT,colorspace_pars_fragment:vT,envmap_fragment:_T,envmap_common_pars_fragment:xT,envmap_pars_fragment:ST,envmap_pars_vertex:yT,envmap_physical_pars_fragment:NT,envmap_vertex:MT,fog_vertex:ET,fog_pars_vertex:TT,fog_fragment:bT,fog_pars_fragment:AT,gradientmap_pars_fragment:RT,lightmap_pars_fragment:CT,lights_lambert_fragment:wT,lights_lambert_pars_fragment:DT,lights_pars_begin:UT,lights_toon_fragment:LT,lights_toon_pars_fragment:OT,lights_phong_fragment:zT,lights_phong_pars_fragment:PT,lights_physical_fragment:BT,lights_physical_pars_fragment:IT,lights_fragment_begin:FT,lights_fragment_maps:HT,lights_fragment_end:GT,logdepthbuf_fragment:VT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:qT,map_fragment:YT,map_pars_fragment:WT,map_particle_fragment:jT,map_particle_pars_fragment:ZT,metalnessmap_fragment:KT,metalnessmap_pars_fragment:QT,morphinstance_vertex:JT,morphcolor_vertex:$T,morphnormal_vertex:t1,morphtarget_pars_vertex:e1,morphtarget_vertex:n1,normal_fragment_begin:i1,normal_fragment_maps:a1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:o1,normalmap_pars_fragment:l1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:h1,opaque_fragment:d1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:g1,dithering_fragment:v1,dithering_pars_fragment:_1,roughnessmap_fragment:x1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:M1,shadowmap_vertex:E1,shadowmask_pars_fragment:T1,skinbase_vertex:b1,skinning_pars_vertex:A1,skinning_vertex:R1,skinnormal_vertex:C1,specularmap_fragment:w1,specularmap_pars_fragment:D1,tonemapping_fragment:U1,tonemapping_pars_fragment:N1,transmission_fragment:L1,transmission_pars_fragment:O1,uv_pars_fragment:z1,uv_pars_vertex:P1,uv_vertex:B1,worldpos_vertex:I1,background_vert:F1,background_frag:H1,backgroundCube_vert:G1,backgroundCube_frag:V1,cube_vert:X1,cube_frag:k1,depth_vert:q1,depth_frag:Y1,distanceRGBA_vert:W1,distanceRGBA_frag:j1,equirect_vert:Z1,equirect_frag:K1,linedashed_vert:Q1,linedashed_frag:J1,meshbasic_vert:$1,meshbasic_frag:tb,meshlambert_vert:eb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:ab,meshnormal_vert:rb,meshnormal_frag:sb,meshphong_vert:ob,meshphong_frag:lb,meshphysical_vert:ub,meshphysical_frag:cb,meshtoon_vert:fb,meshtoon_frag:hb,points_vert:db,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:vb,sprite_frag:_b},Dt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ki={basic:{uniforms:Pn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Pn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ze(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Pn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Pn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Pn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ze(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Pn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Pn([Dt.points,Dt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Pn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Pn([Dt.common,Dt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Pn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Pn([Dt.sprite,Dt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Pn([Dt.common,Dt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Pn([Dt.lights,Dt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ki.physical={uniforms:Pn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const tc={r:0,b:0,g:0},Or=new ya,xb=new Je;function Sb(o,n,a,s,u,f,h){const d=new ze(0);let m=f===!0?0:1,v,_,g=null,S=0,M=null;function b(P){let z=P.isScene===!0?P.background:null;return z&&z.isTexture&&(z=(P.backgroundBlurriness>0?a:n).get(z)),z}function A(P){let z=!1;const U=b(P);U===null?x(d,m):U&&U.isColor&&(x(U,1),z=!0);const it=o.xr.getEnvironmentBlendMode();it==="additive"?s.buffers.color.setClear(0,0,0,1,h):it==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||z)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,z){const U=b(z);U&&(U.isCubeTexture||U.mapping===mc)?(_===void 0&&(_=new Yi(new fl(1,1,1),new Ma({name:"BackgroundCubeMaterial",uniforms:$s(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(it,V,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(_)),Or.copy(z.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.material.uniforms.envMap.value=U,_.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Or)),_.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Fe,(g!==U||S!==U.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=U,S=U.version,M=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):U&&U.isTexture&&(v===void 0&&(v=new Yi(new hl(2,2),new Ma({name:"BackgroundMaterial",uniforms:$s(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(v)),v.material.uniforms.t2D.value=U,v.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,v.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Fe,U.matrixAutoUpdate===!0&&U.updateMatrix(),v.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||S!==U.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=U,S=U.version,M=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null))}function x(P,z){P.getRGB(tc,dx(o)),s.buffers.color.setClear(tc.r,tc.g,tc.b,z,h)}return{getClearColor:function(){return d},setClearColor:function(P,z=1){d.set(P),m=z,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(d,m)},render:A,addToRenderList:y}}function yb(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,h=!1;function d(C,I,ot,st,gt){let ht=!1;const q=g(st,ot,I);f!==q&&(f=q,v(f.object)),ht=M(C,st,ot,gt),ht&&b(C,st,ot,gt),gt!==null&&n.update(gt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,U(C,I,ot,st),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(gt).buffer))}function m(){return o.createVertexArray()}function v(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,I,ot){const st=ot.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ht=gt[I.id];ht===void 0&&(ht={},gt[I.id]=ht);let q=ht[st];return q===void 0&&(q=S(m()),ht[st]=q),q}function S(C){const I=[],ot=[],st=[];for(let gt=0;gt<a;gt++)I[gt]=0,ot[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ot,attributeDivisors:st,object:C,attributes:{},index:null}}function M(C,I,ot,st){const gt=f.attributes,ht=I.attributes;let q=0;const et=ot.getAttributes();for(const K in et)if(et[K].location>=0){const St=gt[K];let Gt=ht[K];if(Gt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;q++}return f.attributesNum!==q||f.index!==st}function b(C,I,ot,st){const gt={},ht=I.attributes;let q=0;const et=ot.getAttributes();for(const K in et)if(et[K].location>=0){let St=ht[K];St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),gt[K]=Gt,q++}f.attributes=gt,f.attributesNum=q,f.index=st}function A(){const C=f.newAttributes;for(let I=0,ot=C.length;I<ot;I++)C[I]=0}function y(C){x(C,0)}function x(C,I){const ot=f.newAttributes,st=f.enabledAttributes,gt=f.attributeDivisors;ot[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),gt[C]!==I&&(o.vertexAttribDivisor(C,I),gt[C]=I)}function P(){const C=f.newAttributes,I=f.enabledAttributes;for(let ot=0,st=I.length;ot<st;ot++)I[ot]!==C[ot]&&(o.disableVertexAttribArray(ot),I[ot]=0)}function z(C,I,ot,st,gt,ht,q){q===!0?o.vertexAttribIPointer(C,I,ot,gt,ht):o.vertexAttribPointer(C,I,ot,st,gt,ht)}function U(C,I,ot,st){A();const gt=st.attributes,ht=ot.getAttributes(),q=I.defaultAttributeValues;for(const et in ht){const K=ht[et];if(K.location>=0){let xt=gt[et];if(xt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const St=xt.normalized,Gt=xt.itemSize,ne=n.get(xt);if(ne===void 0)continue;const ye=ne.buffer,w=ne.type,Y=ne.bytesPerElement,pt=w===o.INT||w===o.UNSIGNED_INT||xt.gpuType===_p;if(xt.isInterleavedBufferAttribute){const ut=xt.data,bt=ut.stride,wt=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<K.locationSize;It++)x(K.location+It,ut.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<K.locationSize;It++)y(K.location+It);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let It=0;It<K.locationSize;It++)z(K.location+It,Gt/K.locationSize,w,St,bt*Y,(wt+Gt/K.locationSize*It)*Y,pt)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<K.locationSize;ut++)x(K.location+ut,xt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<K.locationSize;ut++)y(K.location+ut);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let ut=0;ut<K.locationSize;ut++)z(K.location+ut,Gt/K.locationSize,w,St,Gt*Y,Gt/K.locationSize*ut*Y,pt)}}else if(q!==void 0){const St=q[et];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(K.location,St);break;case 3:o.vertexAttrib3fv(K.location,St);break;case 4:o.vertexAttrib4fv(K.location,St);break;default:o.vertexAttrib1fv(K.location,St)}}}}P()}function it(){F();for(const C in s){const I=s[C];for(const ot in I){const st=I[ot];for(const gt in st)_(st[gt].object),delete st[gt];delete I[ot]}delete s[C]}}function V(C){if(s[C.id]===void 0)return;const I=s[C.id];for(const ot in I){const st=I[ot];for(const gt in st)_(st[gt].object),delete st[gt];delete I[ot]}delete s[C.id]}function O(C){for(const I in s){const ot=s[I];if(ot[C.id]===void 0)continue;const st=ot[C.id];for(const gt in st)_(st[gt].object),delete st[gt];delete ot[C.id]}}function F(){D(),h=!0,f!==u&&(f=u,v(f.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:F,resetDefaultState:D,dispose:it,releaseStatesOfGeometry:V,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:P}}function Mb(o,n,a){let s;function u(v){s=v}function f(v,_){o.drawArrays(s,v,_),a.update(_,s,1)}function h(v,_,g){g!==0&&(o.drawArraysInstanced(s,v,_,g),a.update(_,s,g))}function d(v,_,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,v,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];a.update(M,s,1)}function m(v,_,g,S){if(g===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<v.length;b++)h(v[b],_[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,v,0,_,0,S,0,g);let b=0;for(let A=0;A<g;A++)b+=_[A]*S[A];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Eb(o,n,a,s){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(O){return!(O!==wi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const F=O===sl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==Sa&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==va&&!F)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=a.precision!==void 0?a.precision:"highp";const _=m(v);_!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",_,"instead."),v=_);const g=a.logarithmicDepthBuffer===!0,S=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),it=b>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:v,logarithmicDepthBuffer:g,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:U,vertexTextures:it,maxSamples:V}}function Tb(o){const n=this;let a=null,s=0,u=!1,f=!1;const h=new Pr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||u;return u=S,s=g.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,S){a=_(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!u||b===null||b.length===0||f&&!y)f?_(null):v();else{const P=f?0:s,z=P*4;let U=x.clippingState||null;m.value=U,U=_(b,S,z,M);for(let it=0;it!==z;++it)U[it]=a[it];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function v(){m.value!==a&&(m.value=a,m.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function _(g,S,M,b){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,b!==!0||y===null){const x=M+A*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let z=0,U=M;z!==A;++z,U+=4)h.copy(g[z]).applyMatrix4(P,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return n.numPlanes=A,n.numIntersection=0,y}}function bb(o){let n=new WeakMap;function a(h,d){return d===Bd?h.mapping=Zs:d===Id&&(h.mapping=Ks),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bd||d===Id)if(n.has(h)){const m=n.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new PE(m.height);return v.fromEquirectangularTexture(o,h),n.set(h,v),h.addEventListener("dispose",u),a(v.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=n.get(d);m!==void 0&&(n.delete(d),m.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}class Ab extends px{constructor(n=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-n,h=s+n,d=u+a,m=u-a;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,h=f+v*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}const ks=4,m_=[.125,.215,.35,.446,.526,.582],Fr=20,yd=new Ab,g_=new ze;let Md=null,Ed=0,Td=0,bd=!1;const Br=(1+Math.sqrt(5))/2,Xs=1/Br,v_=[new rt(-Br,Xs,0),new rt(Br,Xs,0),new rt(-Xs,0,Br),new rt(Xs,0,Br),new rt(0,Br,-Xs),new rt(0,Br,Xs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class __{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,u=100){Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(n,s,u,f),a>0&&this._blur(f,0,0,a),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Md,Ed,Td),this._renderer.xr.enabled=bd,n.scissorTest=!1,ec(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===Zs||n.mapping===Ks?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:sl,format:wi,colorSpace:eo,depthBuffer:!1},u=x_(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rb(f)),this._blurMaterial=Cb(f,n,a)}return u}_compileMaterial(n){const a=new Yi(this._lodPlanes[0],n);this._renderer.compile(a,yd)}_sceneToCubeUV(n,a,s,u){const d=new _i(90,1,a,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(g_),_.toneMapping=sr,_.autoClear=!1;const M=new cx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),b=new Yi(new fl,M);let A=!1;const y=n.background;y?y.isColor&&(M.color.copy(y),n.background=null,A=!0):(M.color.copy(g_),A=!0);for(let x=0;x<6;x++){const P=x%3;P===0?(d.up.set(0,m[x],0),d.lookAt(v[x],0,0)):P===1?(d.up.set(0,0,m[x]),d.lookAt(0,v[x],0)):(d.up.set(0,m[x],0),d.lookAt(0,0,v[x]));const z=this._cubeSize;ec(u,P*z,x>2?z:0,z,z),_.setRenderTarget(u),A&&_.render(b,d),_.render(n,d)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=S,_.autoClear=g,n.background=y}_textureToCubeUV(n,a){const s=this._renderer,u=n.mapping===Zs||n.mapping===Ks;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new Yi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=n;const m=this._cubeSize;ec(a,0,0,3*m,2*m),s.setRenderTarget(a),s.render(h,yd)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=v_[(u-f-1)%v_.length];this._blur(n,f-1,f,h,d)}a.autoClear=s}_blur(n,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(n,h,a,s,u,"latitudinal",f),this._halfBlur(h,n,s,s,u,"longitudinal",f)}_halfBlur(n,a,s,u,f,h,d){const m=this._renderer,v=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Yi(this._lodPlanes[u],v),S=v.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Fr-1),A=f/b,y=isFinite(f)?1+Math.floor(_*A):Fr;y>Fr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fr}`);const x=[];let P=0;for(let O=0;O<Fr;++O){const F=O/A,D=Math.exp(-F*F/2);x.push(D),O===0?P+=D:O<y&&(P+=2*D)}for(let O=0;O<x.length;O++)x[O]=x[O]/P;S.envMap.value=n.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:z}=this;S.dTheta.value=b,S.mipInt.value=z-s;const U=this._sizeLods[u],it=3*U*(u>z-ks?u-z+ks:0),V=4*(this._cubeSize-U);ec(a,it,V,3*U,2*U),m.setRenderTarget(a),m.render(g,yd)}}function Rb(o){const n=[],a=[],s=[];let u=o;const f=o-ks+1+m_.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let m=1/d;h>o-ks?m=m_[h-o+ks-1]:h===0&&(m=0),s.push(m);const v=1/(d-2),_=-v,g=1+v,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,A=3,y=2,x=1,P=new Float32Array(A*b*M),z=new Float32Array(y*b*M),U=new Float32Array(x*b*M);for(let V=0;V<M;V++){const O=V%3*2/3-1,F=V>2?0:-1,D=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];P.set(D,A*b*V),z.set(S,y*b*V);const C=[V,V,V,V,V,V];U.set(C,x*b*V)}const it=new Ea;it.setAttribute("position",new Ui(P,A)),it.setAttribute("uv",new Ui(z,y)),it.setAttribute("faceIndex",new Ui(U,x)),n.push(it),u>ks&&u--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function x_(o,n,a){const s=new kr(o,n,a);return s.texture.mapping=mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ec(o,n,a,s,u){o.viewport.set(n,a,s,u),o.scissor.set(n,a,s,u)}function Cb(o,n,a){const s=new Float32Array(Fr),u=new rt(0,1,0);return new Ma({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function S_(){return new Ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function y_(){return new Ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wb(o){let n=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const m=d.mapping,v=m===Bd||m===Id,_=m===Zs||m===Ks;if(v||_){let g=n.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return a===null&&(a=new __(o)),g=v?a.fromEquirectangular(d,g):a.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return v&&M&&M.height>0||_&&M&&u(M)?(a===null&&(a=new __(o)),g=v?a.fromEquirectangular(d):a.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function u(d){let m=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&m++;return m===v}function f(d){const m=d.target;m.removeEventListener("dispose",f);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function h(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function Db(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return n[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&il("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function Ub(o,n,a,s){const u={},f=new WeakMap;function h(g){const S=g.target;S.index!==null&&n.remove(S.index);for(const b in S.attributes)n.remove(S.attributes[b]);for(const b in S.morphAttributes){const A=S.morphAttributes[b];for(let y=0,x=A.length;y<x;y++)n.remove(A[y])}S.removeEventListener("dispose",h),delete u[S.id];const M=f.get(S);M&&(n.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function d(g,S){return u[S.id]===!0||(S.addEventListener("dispose",h),u[S.id]=!0,a.memory.geometries++),S}function m(g){const S=g.attributes;for(const b in S)n.update(S[b],o.ARRAY_BUFFER);const M=g.morphAttributes;for(const b in M){const A=M[b];for(let y=0,x=A.length;y<x;y++)n.update(A[y],o.ARRAY_BUFFER)}}function v(g){const S=[],M=g.index,b=g.attributes.position;let A=0;if(M!==null){const P=M.array;A=M.version;for(let z=0,U=P.length;z<U;z+=3){const it=P[z+0],V=P[z+1],O=P[z+2];S.push(it,V,V,O,O,it)}}else if(b!==void 0){const P=b.array;A=b.version;for(let z=0,U=P.length/3-1;z<U;z+=3){const it=z+0,V=z+1,O=z+2;S.push(it,V,V,O,O,it)}}else return;const y=new(ax(S)?hx:fx)(S,1);y.version=A;const x=f.get(g);x&&n.remove(x),f.set(g,y)}function _(g){const S=f.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&v(g)}else v(g);return f.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function Nb(o,n,a){let s;function u(S){s=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,f,S*h),a.update(M,s,1)}function v(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,S*h,b),a.update(M,s,b))}function _(S,M,b){if(b===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];a.update(y,s,1)}function g(S,M,b,A){if(b===0)return;const y=n.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)v(S[x]/h,M[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,A,0,b);let x=0;for(let P=0;P<b;P++)x+=M[P]*A[P];a.update(x,s,1)}}this.setMode=u,this.setIndex=d,this.render=m,this.renderInstances=v,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function Lb(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:u,update:s}}function Ob(o,n,a){const s=new WeakMap,u=new Qe;function f(h,d,m){const v=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let C=function(){F.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),A===!0&&(U=2),y===!0&&(U=3);let it=d.attributes.position.count*U,V=1;it>n.maxTextureSize&&(V=Math.ceil(it/n.maxTextureSize),it=n.maxTextureSize);const O=new Float32Array(it*V*4*g),F=new sx(O,it,V,g);F.type=va,F.needsUpdate=!0;const D=U*4;for(let I=0;I<g;I++){const ot=x[I],st=P[I],gt=z[I],ht=it*V*4*I;for(let q=0;q<ot.count;q++){const et=q*D;b===!0&&(u.fromBufferAttribute(ot,q),O[ht+et+0]=u.x,O[ht+et+1]=u.y,O[ht+et+2]=u.z,O[ht+et+3]=0),A===!0&&(u.fromBufferAttribute(st,q),O[ht+et+4]=u.x,O[ht+et+5]=u.y,O[ht+et+6]=u.z,O[ht+et+7]=0),y===!0&&(u.fromBufferAttribute(gt,q),O[ht+et+8]=u.x,O[ht+et+9]=u.y,O[ht+et+10]=u.z,O[ht+et+11]=gt.itemSize===4?u.w:1)}}S={count:g,texture:F,size:new Pe(it,V)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let y=0;y<v.length;y++)b+=v[y];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",v)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function zb(o,n,a,s){let u=new WeakMap;function f(m){const v=s.render.frame,_=m.geometry,g=n.get(m,_);if(u.get(g)!==v&&(n.update(g),u.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),u.get(m)!==v&&(a.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&a.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const S=m.skeleton;u.get(S)!==v&&(S.update(),u.set(S,v))}return g}function h(){u=new WeakMap}function d(m){const v=m.target;v.removeEventListener("dispose",d),a.remove(v.instanceMatrix),v.instanceColor!==null&&a.remove(v.instanceColor)}return{update:f,dispose:h}}class _x extends Yn{constructor(n,a,s,u,f,h,d,m,v,_=Ys){if(_!==Ys&&_!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Ys&&(s=Xr),s===void 0&&_===Js&&(s=Qs),super(null,u,f,h,d,m,_,s,v),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=d!==void 0?d:Di,this.minFilter=m!==void 0?m:Di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}const xx=new Yn,M_=new _x(1,1),Sx=new sx,yx=new SE,Mx=new mx,E_=[],T_=[],b_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function io(o,n,a){const s=o[0];if(s<=0||s>0)return o;const u=n*a;let f=E_[u];if(f===void 0&&(f=new Float32Array(u),E_[u]=f),n!==0){s.toArray(f,0);for(let h=1,d=0;h!==n;++h)d+=a,o[h].toArray(f,d)}return f}function cn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function fn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function _c(o,n){let a=T_[n];a===void 0&&(a=new Int32Array(n),T_[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function Pb(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function Bb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(cn(a,n))return;o.uniform2fv(this.addr,n),fn(a,n)}}function Ib(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(cn(a,n))return;o.uniform3fv(this.addr,n),fn(a,n)}}function Fb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(cn(a,n))return;o.uniform4fv(this.addr,n),fn(a,n)}}function Hb(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(cn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),fn(a,n)}else{if(cn(a,s))return;R_.set(s),o.uniformMatrix2fv(this.addr,!1,R_),fn(a,s)}}function Gb(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(cn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),fn(a,n)}else{if(cn(a,s))return;A_.set(s),o.uniformMatrix3fv(this.addr,!1,A_),fn(a,s)}}function Vb(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(cn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),fn(a,n)}else{if(cn(a,s))return;b_.set(s),o.uniformMatrix4fv(this.addr,!1,b_),fn(a,s)}}function Xb(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function kb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(cn(a,n))return;o.uniform2iv(this.addr,n),fn(a,n)}}function qb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(cn(a,n))return;o.uniform3iv(this.addr,n),fn(a,n)}}function Yb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(cn(a,n))return;o.uniform4iv(this.addr,n),fn(a,n)}}function Wb(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function jb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(cn(a,n))return;o.uniform2uiv(this.addr,n),fn(a,n)}}function Zb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(cn(a,n))return;o.uniform3uiv(this.addr,n),fn(a,n)}}function Kb(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(cn(a,n))return;o.uniform4uiv(this.addr,n),fn(a,n)}}function Qb(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(M_.compareFunction=ix,f=M_):f=xx,a.setTexture2D(n||f,u)}function Jb(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(n||yx,u)}function $b(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(n||Mx,u)}function tA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(n||Sx,u)}function eA(o){switch(o){case 5126:return Pb;case 35664:return Bb;case 35665:return Ib;case 35666:return Fb;case 35674:return Hb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return Xb;case 35667:case 35671:return kb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Wb;case 36294:return jb;case 36295:return Zb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return tA}}function nA(o,n){o.uniform1fv(this.addr,n)}function iA(o,n){const a=io(n,this.size,2);o.uniform2fv(this.addr,a)}function aA(o,n){const a=io(n,this.size,3);o.uniform3fv(this.addr,a)}function rA(o,n){const a=io(n,this.size,4);o.uniform4fv(this.addr,a)}function sA(o,n){const a=io(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function oA(o,n){const a=io(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function lA(o,n){const a=io(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function uA(o,n){o.uniform1iv(this.addr,n)}function cA(o,n){o.uniform2iv(this.addr,n)}function fA(o,n){o.uniform3iv(this.addr,n)}function hA(o,n){o.uniform4iv(this.addr,n)}function dA(o,n){o.uniform1uiv(this.addr,n)}function pA(o,n){o.uniform2uiv(this.addr,n)}function mA(o,n){o.uniform3uiv(this.addr,n)}function gA(o,n){o.uniform4uiv(this.addr,n)}function vA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(n[h]||xx,f[h])}function _A(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(n[h]||yx,f[h])}function xA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(n[h]||Mx,f[h])}function SA(o,n,a){const s=this.cache,u=n.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(n[h]||Sx,f[h])}function yA(o){switch(o){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return uA;case 35667:case 35671:return cA;case 35668:case 35672:return fA;case 35669:case 35673:return hA;case 5125:return dA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}class MA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=eA(a.type)}}class EA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=yA(a.type)}}class TA{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(n,a[d.id],s)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function C_(o,n){o.seq.push(n),o.map[n.id]=n}function bA(o,n,a){const s=o.name,u=s.length;for(Ad.lastIndex=0;;){const f=Ad.exec(s),h=Ad.lastIndex;let d=f[1];const m=f[2]==="]",v=f[3];if(m&&(d=d|0),v===void 0||v==="["&&h+2===u){C_(a,v===void 0?new MA(d,o,n):new EA(d,o,n));break}else{let g=a.map[d];g===void 0&&(g=new TA(d),C_(a,g)),a=g}}}class hc{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=n.getActiveUniform(a,u),h=n.getUniformLocation(a,f.name);bA(f,h,this)}}setValue(n,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(n,s,u)}setOptional(n,a,s){const u=a[s];u!==void 0&&this.setValue(n,s,u)}static upload(n,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],m=s[d.id];m.needsUpdate!==!1&&d.setValue(n,m.value,u)}}static seqWithValue(n,a){const s=[];for(let u=0,f=n.length;u!==f;++u){const h=n[u];h.id in a&&s.push(h)}return s}}function w_(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const AA=37297;let RA=0;function CA(o,n){const a=o.split(`
`),s=[],u=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===n?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const D_=new ce;function wA(o){Ae._getMatrix(D_,Ae.workingColorSpace,o);const n=`mat3( ${D_.elements.map(a=>a.toFixed(4))} )`;switch(Ae.getTransfer(o)){case gc:return[n,"LinearTransferOETF"];case Fe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function U_(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),u=o.getShaderInfoLog(n).trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return a.toUpperCase()+`

`+u+`

`+CA(o.getShaderSource(n),h)}else return u}function DA(o,n){const a=wA(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function UA(o,n){let a;switch(n){case YM:a="Linear";break;case WM:a="Reinhard";break;case jM:a="Cineon";break;case ZM:a="ACESFilmic";break;case QM:a="AgX";break;case JM:a="Neutral";break;case KM:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const nc=new rt;function NA(){Ae.getLuminanceCoefficients(nc);const o=nc.x.toFixed(4),n=nc.y.toFixed(4),a=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function OA(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function zA(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(n,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(n,h),locationSize:d}}return a}function al(o){return o!==""}function N_(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function L_(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const PA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(o){return o.replace(PA,IA)}const BA=new Map;function IA(o,n){let a=fe[n];if(a===void 0){const s=BA.get(n);if(s!==void 0)a=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return pp(a)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(o){return o.replace(FA,HA)}function HA(o,n,a,s){let u="";for(let f=parseInt(n);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function z_(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function GA(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===k_?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===bM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ma&&(n="SHADOWMAP_TYPE_VSM"),n}function VA(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Zs:case Ks:n="ENVMAP_TYPE_CUBE";break;case mc:n="ENVMAP_TYPE_CUBE_UV";break}return n}function XA(o){let n="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ks:n="ENVMAP_MODE_REFRACTION";break}return n}function kA(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case q_:n="ENVMAP_BLENDING_MULTIPLY";break;case kM:n="ENVMAP_BLENDING_MIX";break;case qM:n="ENVMAP_BLENDING_ADD";break}return n}function qA(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function YA(o,n,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const m=GA(a),v=VA(a),_=XA(a),g=kA(a),S=qA(a),M=LA(a),b=OA(f),A=u.createProgram();let y,x,P=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(al).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(al).join(`
`),x.length>0&&(x+=`
`)):(y=[z_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[z_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.envMap?"#define "+_:"",a.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==sr?"#define TONE_MAPPING":"",a.toneMapping!==sr?fe.tonemapping_pars_fragment:"",a.toneMapping!==sr?UA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,DA("linearToOutputTexel",a.outputColorSpace),NA(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(al).join(`
`)),h=pp(h),h=N_(h,a),h=L_(h,a),d=pp(d),d=N_(d,a),d=L_(d,a),h=O_(h),d=O_(d),a.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",a.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=P+y+h,U=P+x+d,it=w_(u,u.VERTEX_SHADER,z),V=w_(u,u.FRAGMENT_SHADER,U);u.attachShader(A,it),u.attachShader(A,V),a.index0AttributeName!==void 0?u.bindAttribLocation(A,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(A,0,"position"),u.linkProgram(A);function O(I){if(o.debug.checkShaderErrors){const ot=u.getProgramInfoLog(A).trim(),st=u.getShaderInfoLog(it).trim(),gt=u.getShaderInfoLog(V).trim();let ht=!0,q=!0;if(u.getProgramParameter(A,u.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,A,it,V);else{const et=U_(u,it,"vertex"),K=U_(u,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(A,u.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ot+`
`+et+`
`+K)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||gt==="")&&(q=!1);q&&(I.diagnostics={runnable:ht,programLog:ot,vertexShader:{log:st,prefix:y},fragmentShader:{log:gt,prefix:x}})}u.deleteShader(it),u.deleteShader(V),F=new hc(u,A),D=zA(u,A)}let F;this.getUniforms=function(){return F===void 0&&O(this),F};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=u.getProgramParameter(A,AA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(A),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=RA++,this.cacheKey=n,this.usedTimes=1,this.program=A,this.vertexShader=it,this.fragmentShader=V,this}let WA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(n);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new ZA(n),a.set(n,s)),s}}class ZA{constructor(n){this.id=WA++,this.code=n,this.usedTimes=0}}function KA(o,n,a,s,u,f,h){const d=new lx,m=new jA,v=new Set,_=[],g=u.logarithmicDepthBuffer,S=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return v.add(D),D===0?"uv":`uv${D}`}function y(D,C,I,ot,st){const gt=ot.fog,ht=st.geometry,q=D.isMeshStandardMaterial?ot.environment:null,et=(D.isMeshStandardMaterial?a:n).get(D.envMap||q),K=et&&et.mapping===mc?et.image.height:null,xt=b[D.type];D.precision!==null&&(M=u.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Gt=St!==void 0?St.length:0;let ne=0;ht.morphAttributes.position!==void 0&&(ne=1),ht.morphAttributes.normal!==void 0&&(ne=2),ht.morphAttributes.color!==void 0&&(ne=3);let ye,w,Y,pt;if(xt){const Me=ki[xt];ye=Me.vertexShader,w=Me.fragmentShader}else ye=D.vertexShader,w=D.fragmentShader,m.update(D),Y=m.getVertexShaderID(D),pt=m.getFragmentShaderID(D);const ut=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),wt=st.isInstancedMesh===!0,It=st.isBatchedMesh===!0,Tt=!!D.map,At=!!D.matcap,Ce=!!et,Z=!!D.aoMap,rn=!!D.lightMap,ae=!!D.bumpMap,Jt=!!D.normalMap,Ct=!!D.displacementMap,_e=!!D.emissiveMap,Kt=!!D.metalnessMap,N=!!D.roughnessMap,T=D.anisotropy>0,$=D.clearcoat>0,mt=D.dispersion>0,_t=D.iridescence>0,dt=D.sheen>0,Wt=D.transmission>0,Ut=T&&!!D.anisotropyMap,zt=$&&!!D.clearcoatMap,me=$&&!!D.clearcoatNormalMap,yt=$&&!!D.clearcoatRoughnessMap,Vt=_t&&!!D.iridescenceMap,$t=_t&&!!D.iridescenceThicknessMap,ee=dt&&!!D.sheenColorMap,Ht=dt&&!!D.sheenRoughnessMap,pe=!!D.specularMap,oe=!!D.specularColorMap,Be=!!D.specularIntensityMap,H=Wt&&!!D.transmissionMap,Nt=Wt&&!!D.thicknessMap,lt=!!D.gradientMap,vt=!!D.alphaMap,Lt=D.alphaTest>0,Bt=!!D.alphaHash,re=!!D.extensions;let qe=sr;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(qe=o.toneMapping);const hn={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:ye,fragmentShader:w,defines:D.defines,customVertexShaderID:Y,customFragmentShaderID:pt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:It,batchingColor:It&&st._colorsTexture!==null,instancing:wt,instancingColor:wt&&st.instanceColor!==null,instancingMorph:wt&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:eo,alphaToCoverage:!!D.alphaToCoverage,map:Tt,matcap:At,envMap:Ce,envMapMode:Ce&&et.mapping,envMapCubeUVHeight:K,aoMap:Z,lightMap:rn,bumpMap:ae,normalMap:Jt,displacementMap:S&&Ct,emissiveMap:_e,normalMapObjectSpace:Jt&&D.normalMapType===iE,normalMapTangentSpace:Jt&&D.normalMapType===nE,metalnessMap:Kt,roughnessMap:N,anisotropy:T,anisotropyMap:Ut,clearcoat:$,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:yt,dispersion:mt,iridescence:_t,iridescenceMap:Vt,iridescenceThicknessMap:$t,sheen:dt,sheenColorMap:ee,sheenRoughnessMap:Ht,specularMap:pe,specularColorMap:oe,specularIntensityMap:Be,transmission:Wt,transmissionMap:H,thicknessMap:Nt,gradientMap:lt,opaque:D.transparent===!1&&D.blending===qs&&D.alphaToCoverage===!1,alphaMap:vt,alphaTest:Lt,alphaHash:Bt,combine:D.combine,mapUv:Tt&&A(D.map.channel),aoMapUv:Z&&A(D.aoMap.channel),lightMapUv:rn&&A(D.lightMap.channel),bumpMapUv:ae&&A(D.bumpMap.channel),normalMapUv:Jt&&A(D.normalMap.channel),displacementMapUv:Ct&&A(D.displacementMap.channel),emissiveMapUv:_e&&A(D.emissiveMap.channel),metalnessMapUv:Kt&&A(D.metalnessMap.channel),roughnessMapUv:N&&A(D.roughnessMap.channel),anisotropyMapUv:Ut&&A(D.anisotropyMap.channel),clearcoatMapUv:zt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:me&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&A(D.sheenRoughnessMap.channel),specularMapUv:pe&&A(D.specularMap.channel),specularColorMapUv:oe&&A(D.specularColorMap.channel),specularIntensityMapUv:Be&&A(D.specularIntensityMap.channel),transmissionMapUv:H&&A(D.transmissionMap.channel),thicknessMapUv:Nt&&A(D.thicknessMap.channel),alphaMapUv:vt&&A(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Jt||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ht.attributes.uv&&(Tt||vt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:bt,skinning:st.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Tt&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:_e&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ga,flipSided:D.side===qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:re&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&D.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return hn.vertexUv1s=v.has(1),hn.vertexUv2s=v.has(2),hn.vertexUv3s=v.has(3),v.clear(),hn}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const I in D.defines)C.push(I),C.push(D.defines[I]);return D.isRawShaderMaterial===!1&&(P(C,D),z(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function z(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=b[D.type];let I;if(C){const ot=ki[C];I=NE.clone(ot.uniforms)}else I=D.uniforms;return I}function it(D,C){let I;for(let ot=0,st=_.length;ot<st;ot++){const gt=_[ot];if(gt.cacheKey===C){I=gt,++I.usedTimes;break}}return I===void 0&&(I=new YA(o,C,D,f),_.push(I)),I}function V(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function O(D){m.remove(D)}function F(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:U,acquireProgram:it,releaseProgram:V,releaseShaderCache:O,programs:_,dispose:F}}function QA(){let o=new WeakMap;function n(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,m){o.get(h)[d]=m}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:u,dispose:f}}function JA(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function P_(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function B_(){const o=[];let n=0;const a=[],s=[],u=[];function f(){n=0,a.length=0,s.length=0,u.length=0}function h(g,S,M,b,A,y){let x=o[n];return x===void 0?(x={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:A,group:y},o[n]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=A,x.group=y),n++,x}function d(g,S,M,b,A,y){const x=h(g,S,M,b,A,y);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function m(g,S,M,b,A,y){const x=h(g,S,M,b,A,y);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function v(g,S){a.length>1&&a.sort(g||JA),s.length>1&&s.sort(S||P_),u.length>1&&u.sort(S||P_)}function _(){for(let g=n,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:m,finish:_,sort:v}}function $A(){let o=new WeakMap;function n(s,u){const f=o.get(s);let h;return f===void 0?(h=new B_,o.set(s,[h])):u>=f.length?(h=new B_,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:n,dispose:a}}function tR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new rt,color:new ze};break;case"SpotLight":a={position:new rt,direction:new rt,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new rt,color:new ze,distance:0,decay:0};break;case"HemisphereLight":a={direction:new rt,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":a={color:new ze,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[n.id]=a,a}}}function eR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let nR=0;function iR(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function aR(o){const n=new tR,a=eR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)s.probe.push(new rt);const u=new rt,f=new Je,h=new Je;function d(v){let _=0,g=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,A=0,y=0,x=0,P=0,z=0,U=0,it=0,V=0,O=0;v.sort(iR);for(let D=0,C=v.length;D<C;D++){const I=v[D],ot=I.color,st=I.intensity,gt=I.distance,ht=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=ot.r*st,g+=ot.g*st,S+=ot.b*st;else if(I.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(I.sh.coefficients[q],st);O++}else if(I.isDirectionalLight){const q=n.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,K=a.get(I);K.shadowIntensity=et.intensity,K.shadowBias=et.bias,K.shadowNormalBias=et.normalBias,K.shadowRadius=et.radius,K.shadowMapSize=et.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=I.shadow.matrix,P++}s.directional[M]=q,M++}else if(I.isSpotLight){const q=n.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(ot).multiplyScalar(st),q.distance=gt,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,s.spot[A]=q;const et=I.shadow;if(I.map&&(s.spotLightMap[it]=I.map,it++,et.updateMatrices(I),I.castShadow&&V++),s.spotLightMatrix[A]=et.matrix,I.castShadow){const K=a.get(I);K.shadowIntensity=et.intensity,K.shadowBias=et.bias,K.shadowNormalBias=et.normalBias,K.shadowRadius=et.radius,K.shadowMapSize=et.mapSize,s.spotShadow[A]=K,s.spotShadowMap[A]=ht,U++}A++}else if(I.isRectAreaLight){const q=n.get(I);q.color.copy(ot).multiplyScalar(st),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=q,y++}else if(I.isPointLight){const q=n.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const et=I.shadow,K=a.get(I);K.shadowIntensity=et.intensity,K.shadowBias=et.bias,K.shadowNormalBias=et.normalBias,K.shadowRadius=et.radius,K.shadowMapSize=et.mapSize,K.shadowCameraNear=et.camera.near,K.shadowCameraFar=et.camera.far,s.pointShadow[b]=K,s.pointShadowMap[b]=ht,s.pointShadowMatrix[b]=I.shadow.matrix,z++}s.point[b]=q,b++}else if(I.isHemisphereLight){const q=n.get(I);q.skyColor.copy(I.color).multiplyScalar(st),q.groundColor.copy(I.groundColor).multiplyScalar(st),s.hemi[x]=q,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Dt.LTC_FLOAT_1,s.rectAreaLTC2=Dt.LTC_FLOAT_2):(s.rectAreaLTC1=Dt.LTC_HALF_1,s.rectAreaLTC2=Dt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=S;const F=s.hash;(F.directionalLength!==M||F.pointLength!==b||F.spotLength!==A||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==P||F.numPointShadows!==z||F.numSpotShadows!==U||F.numSpotMaps!==it||F.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=U+it-V,s.spotLightMap.length=it,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=O,F.directionalLength=M,F.pointLength=b,F.spotLength=A,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=P,F.numPointShadows=z,F.numSpotShadows=U,F.numSpotMaps=it,F.numLightProbes=O,s.version=nR++)}function m(v,_){let g=0,S=0,M=0,b=0,A=0;const y=_.matrixWorldInverse;for(let x=0,P=v.length;x<P;x++){const z=v[x];if(z.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(y),g++}else if(z.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(y),h.identity(),f.copy(z.matrixWorld),f.premultiply(y),h.extractRotation(f),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(z.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(y),S++}else if(z.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(z.matrixWorld),U.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:s}}function I_(o){const n=new aR(o),a=[],s=[];function u(_){v.camera=_,a.length=0,s.length=0}function f(_){a.push(_)}function h(_){s.push(_)}function d(){n.setup(a)}function m(_){n.setupView(a,_)}const v={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:v,setupLights:d,setupLightsView:m,pushLight:f,pushShadow:h}}function rR(o){let n=new WeakMap;function a(u,f=0){const h=n.get(u);let d;return h===void 0?(d=new I_(o),n.set(u,[d])):f>=h.length?(d=new I_(o),h.push(d)):d=h[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}class sR extends cl{static get type(){return"MeshDepthMaterial"}constructor(n){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class oR extends cl{static get type(){return"MeshDistanceMaterial"}constructor(n){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}const lR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cR(o,n,a){let s=new gx;const u=new Pe,f=new Pe,h=new Qe,d=new sR({depthPacking:eE}),m=new oR,v={},_=a.maxTextureSize,g={[or]:qn,[qn]:or,[ga]:ga},S=new Ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:lR,fragmentShader:uR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ea;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Yi(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let x=this.type;this.render=function(V,O,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(rr),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=x!==ma&&this.type===ma,gt=x===ma&&this.type!==ma;for(let ht=0,q=V.length;ht<q;ht++){const et=V[ht],K=et.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;u.copy(K.mapSize);const xt=K.getFrameExtents();if(u.multiply(xt),f.copy(K.mapSize),(u.x>_||u.y>_)&&(u.x>_&&(f.x=Math.floor(_/xt.x),u.x=f.x*xt.x,K.mapSize.x=f.x),u.y>_&&(f.y=Math.floor(_/xt.y),u.y=f.y*xt.y,K.mapSize.y=f.y)),K.map===null||st===!0||gt===!0){const Gt=this.type!==ma?{minFilter:Di,magFilter:Di}:{};K.map!==null&&K.map.dispose(),K.map=new kr(u.x,u.y,Gt),K.map.texture.name=et.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const St=K.getViewportCount();for(let Gt=0;Gt<St;Gt++){const ne=K.getViewport(Gt);h.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),ot.viewport(h),K.updateMatrices(et,Gt),s=K.getFrustum(),U(O,F,K.camera,et,this.type)}K.isPointLightShadow!==!0&&this.type===ma&&P(K,F),K.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,I)};function P(V,O){const F=n.update(A);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new kr(u.x,u.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(O,null,F,S,A,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(O,null,F,M,A,null)}function z(V,O,F,D){let C=null;const I=F.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(I!==void 0)C=I;else if(C=F.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ot=C.uuid,st=O.uuid;let gt=v[ot];gt===void 0&&(gt={},v[ot]=gt);let ht=gt[st];ht===void 0&&(ht=C.clone(),gt[st]=ht,O.addEventListener("dispose",it)),C=ht}if(C.visible=O.visible,C.wireframe=O.wireframe,D===ma?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=o.properties.get(C);ot.light=F}return C}function U(V,O,F,D,C){if(V.visible===!1)return;if(V.layers.test(O.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===ma)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,V.matrixWorld);const st=n.update(V),gt=V.material;if(Array.isArray(gt)){const ht=st.groups;for(let q=0,et=ht.length;q<et;q++){const K=ht[q],xt=gt[K.materialIndex];if(xt&&xt.visible){const St=z(V,xt,D,C);V.onBeforeShadow(o,V,O,F,st,St,K),o.renderBufferDirect(F,null,st,St,V,K),V.onAfterShadow(o,V,O,F,st,St,K)}}}else if(gt.visible){const ht=z(V,gt,D,C);V.onBeforeShadow(o,V,O,F,st,ht,null),o.renderBufferDirect(F,null,st,ht,V,null),V.onAfterShadow(o,V,O,F,st,ht,null)}}const ot=V.children;for(let st=0,gt=ot.length;st<gt;st++)U(ot[st],O,F,D,C)}function it(V){V.target.removeEventListener("dispose",it);for(const F in v){const D=v[F],C=V.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const fR={[Dd]:Ud,[Nd]:zd,[Ld]:Pd,[js]:Od,[Ud]:Dd,[zd]:Nd,[Pd]:Ld,[Od]:js};function hR(o,n){function a(){let H=!1;const Nt=new Qe;let lt=null;const vt=new Qe(0,0,0,0);return{setMask:function(Lt){lt!==Lt&&!H&&(o.colorMask(Lt,Lt,Lt,Lt),lt=Lt)},setLocked:function(Lt){H=Lt},setClear:function(Lt,Bt,re,qe,hn){hn===!0&&(Lt*=qe,Bt*=qe,re*=qe),Nt.set(Lt,Bt,re,qe),vt.equals(Nt)===!1&&(o.clearColor(Lt,Bt,re,qe),vt.copy(Nt))},reset:function(){H=!1,lt=null,vt.set(-1,0,0,0)}}}function s(){let H=!1,Nt=!1,lt=null,vt=null,Lt=null;return{setReversed:function(Bt){if(Nt!==Bt){const re=n.get("EXT_clip_control");Nt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const qe=Lt;Lt=null,this.setClear(qe)}Nt=Bt},getReversed:function(){return Nt},setTest:function(Bt){Bt?ut(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Bt){lt!==Bt&&!H&&(o.depthMask(Bt),lt=Bt)},setFunc:function(Bt){if(Nt&&(Bt=fR[Bt]),vt!==Bt){switch(Bt){case Dd:o.depthFunc(o.NEVER);break;case Ud:o.depthFunc(o.ALWAYS);break;case Nd:o.depthFunc(o.LESS);break;case js:o.depthFunc(o.LEQUAL);break;case Ld:o.depthFunc(o.EQUAL);break;case Od:o.depthFunc(o.GEQUAL);break;case zd:o.depthFunc(o.GREATER);break;case Pd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Bt}},setLocked:function(Bt){H=Bt},setClear:function(Bt){Lt!==Bt&&(Nt&&(Bt=1-Bt),o.clearDepth(Bt),Lt=Bt)},reset:function(){H=!1,lt=null,vt=null,Lt=null,Nt=!1}}}function u(){let H=!1,Nt=null,lt=null,vt=null,Lt=null,Bt=null,re=null,qe=null,hn=null;return{setTest:function(Me){H||(Me?ut(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Me){Nt!==Me&&!H&&(o.stencilMask(Me),Nt=Me)},setFunc:function(Me,ke,dn){(lt!==Me||vt!==ke||Lt!==dn)&&(o.stencilFunc(Me,ke,dn),lt=Me,vt=ke,Lt=dn)},setOp:function(Me,ke,dn){(Bt!==Me||re!==ke||qe!==dn)&&(o.stencilOp(Me,ke,dn),Bt=Me,re=ke,qe=dn)},setLocked:function(Me){H=Me},setClear:function(Me){hn!==Me&&(o.clearStencil(Me),hn=Me)},reset:function(){H=!1,Nt=null,lt=null,vt=null,Lt=null,Bt=null,re=null,qe=null,hn=null}}}const f=new a,h=new s,d=new u,m=new WeakMap,v=new WeakMap;let _={},g={},S=new WeakMap,M=[],b=null,A=!1,y=null,x=null,P=null,z=null,U=null,it=null,V=null,O=new ze(0,0,0),F=0,D=!1,C=null,I=null,ot=null,st=null,gt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,et=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=et>=1):K.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=et>=2);let xt=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),ye=new Qe().fromArray(Gt),w=new Qe().fromArray(ne);function Y(H,Nt,lt,vt){const Lt=new Uint8Array(4),Bt=o.createTexture();o.bindTexture(H,Bt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let re=0;re<lt;re++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Nt+re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return Bt}const pt={};pt[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),pt[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pt[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(js),ae(!1),Jt(V0),ut(o.CULL_FACE),Z(rr);function ut(H){_[H]!==!0&&(o.enable(H),_[H]=!0)}function bt(H){_[H]!==!1&&(o.disable(H),_[H]=!1)}function wt(H,Nt){return g[H]!==Nt?(o.bindFramebuffer(H,Nt),g[H]=Nt,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Nt),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function It(H,Nt){let lt=M,vt=!1;if(H){lt=S.get(Nt),lt===void 0&&(lt=[],S.set(Nt,lt));const Lt=H.textures;if(lt.length!==Lt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Bt=0,re=Lt.length;Bt<re;Bt++)lt[Bt]=o.COLOR_ATTACHMENT0+Bt;lt.length=Lt.length,vt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,vt=!0);vt&&o.drawBuffers(lt)}function Tt(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const At={[Ir]:o.FUNC_ADD,[RM]:o.FUNC_SUBTRACT,[CM]:o.FUNC_REVERSE_SUBTRACT};At[wM]=o.MIN,At[DM]=o.MAX;const Ce={[UM]:o.ZERO,[NM]:o.ONE,[LM]:o.SRC_COLOR,[Cd]:o.SRC_ALPHA,[FM]:o.SRC_ALPHA_SATURATE,[BM]:o.DST_COLOR,[zM]:o.DST_ALPHA,[OM]:o.ONE_MINUS_SRC_COLOR,[wd]:o.ONE_MINUS_SRC_ALPHA,[IM]:o.ONE_MINUS_DST_COLOR,[PM]:o.ONE_MINUS_DST_ALPHA,[HM]:o.CONSTANT_COLOR,[GM]:o.ONE_MINUS_CONSTANT_COLOR,[VM]:o.CONSTANT_ALPHA,[XM]:o.ONE_MINUS_CONSTANT_ALPHA};function Z(H,Nt,lt,vt,Lt,Bt,re,qe,hn,Me){if(H===rr){A===!0&&(bt(o.BLEND),A=!1);return}if(A===!1&&(ut(o.BLEND),A=!0),H!==AM){if(H!==y||Me!==D){if((x!==Ir||U!==Ir)&&(o.blendEquation(o.FUNC_ADD),x=Ir,U=Ir),Me)switch(H){case qs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X0:o.blendFunc(o.ONE,o.ONE);break;case k0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case q0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case qs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case k0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case q0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,z=null,it=null,V=null,O.set(0,0,0),F=0,y=H,D=Me}return}Lt=Lt||Nt,Bt=Bt||lt,re=re||vt,(Nt!==x||Lt!==U)&&(o.blendEquationSeparate(At[Nt],At[Lt]),x=Nt,U=Lt),(lt!==P||vt!==z||Bt!==it||re!==V)&&(o.blendFuncSeparate(Ce[lt],Ce[vt],Ce[Bt],Ce[re]),P=lt,z=vt,it=Bt,V=re),(qe.equals(O)===!1||hn!==F)&&(o.blendColor(qe.r,qe.g,qe.b,hn),O.copy(qe),F=hn),y=H,D=!1}function rn(H,Nt){H.side===ga?bt(o.CULL_FACE):ut(o.CULL_FACE);let lt=H.side===qn;Nt&&(lt=!lt),ae(lt),H.blending===qs&&H.transparent===!1?Z(rr):Z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),f.setMask(H.colorWrite);const vt=H.stencilWrite;d.setTest(vt),vt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),_e(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function Jt(H){H!==EM?(ut(o.CULL_FACE),H!==I&&(H===V0?o.cullFace(o.BACK):H===TM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),I=H}function Ct(H){H!==ot&&(q&&o.lineWidth(H),ot=H)}function _e(H,Nt,lt){H?(ut(o.POLYGON_OFFSET_FILL),(st!==Nt||gt!==lt)&&(o.polygonOffset(Nt,lt),st=Nt,gt=lt)):bt(o.POLYGON_OFFSET_FILL)}function Kt(H){H?ut(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function N(H){H===void 0&&(H=o.TEXTURE0+ht-1),xt!==H&&(o.activeTexture(H),xt=H)}function T(H,Nt,lt){lt===void 0&&(xt===null?lt=o.TEXTURE0+ht-1:lt=xt);let vt=St[lt];vt===void 0&&(vt={type:void 0,texture:void 0},St[lt]=vt),(vt.type!==H||vt.texture!==Nt)&&(xt!==lt&&(o.activeTexture(lt),xt=lt),o.bindTexture(H,Nt||pt[H]),vt.type=H,vt.texture=Nt)}function $(){const H=St[xt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function mt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Wt(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $t(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(H){ye.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),ye.copy(H))}function Ht(H){w.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),w.copy(H))}function pe(H,Nt){let lt=v.get(Nt);lt===void 0&&(lt=new WeakMap,v.set(Nt,lt));let vt=lt.get(H);vt===void 0&&(vt=o.getUniformBlockIndex(Nt,H.name),lt.set(H,vt))}function oe(H,Nt){const vt=v.get(Nt).get(H);m.get(Nt)!==vt&&(o.uniformBlockBinding(Nt,vt,H.__bindingPointIndex),m.set(Nt,vt))}function Be(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,St={},g={},S=new WeakMap,M=[],b=null,A=!1,y=null,x=null,P=null,z=null,U=null,it=null,V=null,O=new ze(0,0,0),F=0,D=!1,C=null,I=null,ot=null,st=null,gt=null,ye.set(0,0,o.canvas.width,o.canvas.height),w.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ut,disable:bt,bindFramebuffer:wt,drawBuffers:It,useProgram:Tt,setBlending:Z,setMaterial:rn,setFlipSided:ae,setCullFace:Jt,setLineWidth:Ct,setPolygonOffset:_e,setScissorTest:Kt,activeTexture:N,bindTexture:T,unbindTexture:$,compressedTexImage2D:mt,compressedTexImage3D:_t,texImage2D:Vt,texImage3D:$t,updateUBOMapping:pe,uniformBlockBinding:oe,texStorage2D:me,texStorage3D:yt,texSubImage2D:dt,texSubImage3D:Wt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:zt,scissor:ee,viewport:Ht,reset:Be}}function F_(o,n,a,s){const u=dR(s);switch(a){case K_:return o*n;case J_:return o*n;case $_:return o*n*2;case tx:return o*n/u.components*u.byteLength;case yp:return o*n/u.components*u.byteLength;case ex:return o*n*2/u.components*u.byteLength;case Mp:return o*n*2/u.components*u.byteLength;case Q_:return o*n*3/u.components*u.byteLength;case wi:return o*n*4/u.components*u.byteLength;case Ep:return o*n*4/u.components*u.byteLength;case oc:case lc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case uc:case cc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Vd:case kd:return Math.max(o,16)*Math.max(n,8)/4;case Gd:case Xd:return Math.max(o,8)*Math.max(n,8)/2;case qd:case Yd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case Wd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case jd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case Kd:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case Qd:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case Jd:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case $d:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case tp:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case ep:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case np:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case ip:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case ap:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case rp:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case sp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case op:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case fc:case lp:case up:return Math.ceil(o/4)*Math.ceil(n/4)*16;case nx:case cp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case fp:case hp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function dR(o){switch(o){case Sa:case W_:return{byteLength:1,components:1};case rl:case j_:case sl:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case Xr:case _p:case va:return{byteLength:4,components:1};case Z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function pR(o,n,a,s,u,f,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Pe,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return M?new OffscreenCanvas(N,T):pc("canvas")}function A(N,T,$){let mt=1;const _t=Kt(N);if((_t.width>$||_t.height>$)&&(mt=$/Math.max(_t.width,_t.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(mt*_t.width),Wt=Math.floor(mt*_t.height);g===void 0&&(g=b(dt,Wt));const Ut=T?b(dt,Wt):g;return Ut.width=dt,Ut.height=Wt,Ut.getContext("2d").drawImage(N,0,0,dt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+dt+"x"+Wt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(N,T,$,mt,_t=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let dt=T;if(T===o.RED&&($===o.FLOAT&&(dt=o.R32F),$===o.HALF_FLOAT&&(dt=o.R16F),$===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.R8UI),$===o.UNSIGNED_SHORT&&(dt=o.R16UI),$===o.UNSIGNED_INT&&(dt=o.R32UI),$===o.BYTE&&(dt=o.R8I),$===o.SHORT&&(dt=o.R16I),$===o.INT&&(dt=o.R32I)),T===o.RG&&($===o.FLOAT&&(dt=o.RG32F),$===o.HALF_FLOAT&&(dt=o.RG16F),$===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RG8UI),$===o.UNSIGNED_SHORT&&(dt=o.RG16UI),$===o.UNSIGNED_INT&&(dt=o.RG32UI),$===o.BYTE&&(dt=o.RG8I),$===o.SHORT&&(dt=o.RG16I),$===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),$===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),$===o.UNSIGNED_INT&&(dt=o.RGB32UI),$===o.BYTE&&(dt=o.RGB8I),$===o.SHORT&&(dt=o.RGB16I),$===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),$===o.UNSIGNED_INT&&(dt=o.RGBA32UI),$===o.BYTE&&(dt=o.RGBA8I),$===o.SHORT&&(dt=o.RGBA16I),$===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),T===o.RGBA){const Wt=_t?gc:Ae.getTransfer(mt);$===o.FLOAT&&(dt=o.RGBA32F),$===o.HALF_FLOAT&&(dt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(dt=Wt===Fe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&n.get("EXT_color_buffer_float"),dt}function U(N,T){let $;return N?T===null||T===Xr||T===Qs?$=o.DEPTH24_STENCIL8:T===va?$=o.DEPTH32F_STENCIL8:T===rl&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xr||T===Qs?$=o.DEPTH_COMPONENT24:T===va?$=o.DEPTH_COMPONENT32F:T===rl&&($=o.DEPTH_COMPONENT16),$}function it(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Di&&N.minFilter!==qi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function V(N){const T=N.target;T.removeEventListener("dispose",V),F(T),T.isVideoTexture&&_.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),C(T)}function F(N){const T=s.get(N);if(T.__webglInit===void 0)return;const $=N.source,mt=S.get($);if(mt){const _t=mt[T.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&D(N),Object.keys(mt).length===0&&S.delete($)}s.remove(N)}function D(N){const T=s.get(N);o.deleteTexture(T.__webglTexture);const $=N.source,mt=S.get($);delete mt[T.__cacheKey],h.memory.textures--}function C(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let _t=0;_t<T.__webglFramebuffer[mt].length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[mt][_t]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=N.textures;for(let mt=0,_t=$.length;mt<_t;mt++){const dt=s.get($[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove($[mt])}s.remove(N)}let I=0;function ot(){I=0}function st(){const N=I;return N>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u.maxTextures),I+=1,N}function gt(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ht(N,T){const $=s.get(N);if(N.isVideoTexture&&Ct(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w($,N,T);return}}a.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+T)}function q(N,T){const $=s.get(N);if(N.version>0&&$.__version!==N.version){w($,N,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+T)}function et(N,T){const $=s.get(N);if(N.version>0&&$.__version!==N.version){w($,N,T);return}a.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+T)}function K(N,T){const $=s.get(N);if(N.version>0&&$.__version!==N.version){Y($,N,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+T)}const xt={[Fd]:o.REPEAT,[Hr]:o.CLAMP_TO_EDGE,[Hd]:o.MIRRORED_REPEAT},St={[Di]:o.NEAREST,[$M]:o.NEAREST_MIPMAP_NEAREST,[Pu]:o.NEAREST_MIPMAP_LINEAR,[qi]:o.LINEAR,[Jh]:o.LINEAR_MIPMAP_NEAREST,[Gr]:o.LINEAR_MIPMAP_LINEAR},Gt={[aE]:o.NEVER,[cE]:o.ALWAYS,[rE]:o.LESS,[ix]:o.LEQUAL,[sE]:o.EQUAL,[uE]:o.GEQUAL,[oE]:o.GREATER,[lE]:o.NOTEQUAL};function ne(N,T){if(T.type===va&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===qi||T.magFilter===Jh||T.magFilter===Pu||T.magFilter===Gr||T.minFilter===qi||T.minFilter===Jh||T.minFilter===Pu||T.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,xt[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,xt[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,xt[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Gt[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Di||T.minFilter!==Pu&&T.minFilter!==Gr||T.type===va&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const $=n.get("EXT_texture_filter_anisotropic");o.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ye(N,T){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",V));const mt=T.source;let _t=S.get(mt);_t===void 0&&(_t={},S.set(mt,_t));const dt=gt(T);if(dt!==N.__cacheKey){_t[dt]===void 0&&(_t[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),_t[dt].usedTimes++;const Wt=_t[N.__cacheKey];Wt!==void 0&&(_t[N.__cacheKey].usedTimes--,Wt.usedTimes===0&&D(T)),N.__cacheKey=dt,N.__webglTexture=_t[dt].texture}return $}function w(N,T,$){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const _t=ye(N,T),dt=T.source;a.bindTexture(mt,N.__webglTexture,o.TEXTURE0+$);const Wt=s.get(dt);if(dt.version!==Wt.__version||_t===!0){a.activeTexture(o.TEXTURE0+$);const Ut=Ae.getPrimaries(Ae.workingColorSpace),zt=T.colorSpace===ar?null:Ae.getPrimaries(T.colorSpace),me=T.colorSpace===ar||Ut===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let yt=A(T.image,!1,u.maxTextureSize);yt=_e(T,yt);const Vt=f.convert(T.format,T.colorSpace),$t=f.convert(T.type);let ee=z(T.internalFormat,Vt,$t,T.colorSpace,T.isVideoTexture);ne(mt,T);let Ht;const pe=T.mipmaps,oe=T.isVideoTexture!==!0,Be=Wt.__version===void 0||_t===!0,H=dt.dataReady,Nt=it(T,yt);if(T.isDepthTexture)ee=U(T.format===Js,T.type),Be&&(oe?a.texStorage2D(o.TEXTURE_2D,1,ee,yt.width,yt.height):a.texImage2D(o.TEXTURE_2D,0,ee,yt.width,yt.height,0,Vt,$t,null));else if(T.isDataTexture)if(pe.length>0){oe&&Be&&a.texStorage2D(o.TEXTURE_2D,Nt,ee,pe[0].width,pe[0].height);for(let lt=0,vt=pe.length;lt<vt;lt++)Ht=pe[lt],oe?H&&a.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ht.width,Ht.height,Vt,$t,Ht.data):a.texImage2D(o.TEXTURE_2D,lt,ee,Ht.width,Ht.height,0,Vt,$t,Ht.data);T.generateMipmaps=!1}else oe?(Be&&a.texStorage2D(o.TEXTURE_2D,Nt,ee,yt.width,yt.height),H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,Vt,$t,yt.data)):a.texImage2D(o.TEXTURE_2D,0,ee,yt.width,yt.height,0,Vt,$t,yt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&Be&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,ee,pe[0].width,pe[0].height,yt.depth);for(let lt=0,vt=pe.length;lt<vt;lt++)if(Ht=pe[lt],T.format!==wi)if(Vt!==null)if(oe){if(H)if(T.layerUpdates.size>0){const Lt=F_(Ht.width,Ht.height,T.format,T.type);for(const Bt of T.layerUpdates){const re=Ht.data.subarray(Bt*Lt/Ht.data.BYTES_PER_ELEMENT,(Bt+1)*Lt/Ht.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Bt,Ht.width,Ht.height,1,Vt,re)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ht.width,Ht.height,yt.depth,Vt,Ht.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,ee,Ht.width,Ht.height,yt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?H&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ht.width,Ht.height,yt.depth,Vt,$t,Ht.data):a.texImage3D(o.TEXTURE_2D_ARRAY,lt,ee,Ht.width,Ht.height,yt.depth,0,Vt,$t,Ht.data)}else{oe&&Be&&a.texStorage2D(o.TEXTURE_2D,Nt,ee,pe[0].width,pe[0].height);for(let lt=0,vt=pe.length;lt<vt;lt++)Ht=pe[lt],T.format!==wi?Vt!==null?oe?H&&a.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ht.width,Ht.height,Vt,Ht.data):a.compressedTexImage2D(o.TEXTURE_2D,lt,ee,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?H&&a.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ht.width,Ht.height,Vt,$t,Ht.data):a.texImage2D(o.TEXTURE_2D,lt,ee,Ht.width,Ht.height,0,Vt,$t,Ht.data)}else if(T.isDataArrayTexture)if(oe){if(Be&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,ee,yt.width,yt.height,yt.depth),H)if(T.layerUpdates.size>0){const lt=F_(yt.width,yt.height,T.format,T.type);for(const vt of T.layerUpdates){const Lt=yt.data.subarray(vt*lt/yt.data.BYTES_PER_ELEMENT,(vt+1)*lt/yt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,Vt,$t,Lt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Vt,$t,yt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,ee,yt.width,yt.height,yt.depth,0,Vt,$t,yt.data);else if(T.isData3DTexture)oe?(Be&&a.texStorage3D(o.TEXTURE_3D,Nt,ee,yt.width,yt.height,yt.depth),H&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Vt,$t,yt.data)):a.texImage3D(o.TEXTURE_3D,0,ee,yt.width,yt.height,yt.depth,0,Vt,$t,yt.data);else if(T.isFramebufferTexture){if(Be)if(oe)a.texStorage2D(o.TEXTURE_2D,Nt,ee,yt.width,yt.height);else{let lt=yt.width,vt=yt.height;for(let Lt=0;Lt<Nt;Lt++)a.texImage2D(o.TEXTURE_2D,Lt,ee,lt,vt,0,Vt,$t,null),lt>>=1,vt>>=1}}else if(pe.length>0){if(oe&&Be){const lt=Kt(pe[0]);a.texStorage2D(o.TEXTURE_2D,Nt,ee,lt.width,lt.height)}for(let lt=0,vt=pe.length;lt<vt;lt++)Ht=pe[lt],oe?H&&a.texSubImage2D(o.TEXTURE_2D,lt,0,0,Vt,$t,Ht):a.texImage2D(o.TEXTURE_2D,lt,ee,Vt,$t,Ht);T.generateMipmaps=!1}else if(oe){if(Be){const lt=Kt(yt);a.texStorage2D(o.TEXTURE_2D,Nt,ee,lt.width,lt.height)}H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,$t,yt)}else a.texImage2D(o.TEXTURE_2D,0,ee,Vt,$t,yt);y(T)&&x(mt),Wt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Y(N,T,$){if(T.image.length!==6)return;const mt=ye(N,T),_t=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+$);const dt=s.get(_t);if(_t.version!==dt.__version||mt===!0){a.activeTexture(o.TEXTURE0+$);const Wt=Ae.getPrimaries(Ae.workingColorSpace),Ut=T.colorSpace===ar?null:Ae.getPrimaries(T.colorSpace),zt=T.colorSpace===ar||Wt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,yt=T.image[0]&&T.image[0].isDataTexture,Vt=[];for(let vt=0;vt<6;vt++)!me&&!yt?Vt[vt]=A(T.image[vt],!0,u.maxCubemapSize):Vt[vt]=yt?T.image[vt].image:T.image[vt],Vt[vt]=_e(T,Vt[vt]);const $t=Vt[0],ee=f.convert(T.format,T.colorSpace),Ht=f.convert(T.type),pe=z(T.internalFormat,ee,Ht,T.colorSpace),oe=T.isVideoTexture!==!0,Be=dt.__version===void 0||mt===!0,H=_t.dataReady;let Nt=it(T,$t);ne(o.TEXTURE_CUBE_MAP,T);let lt;if(me){oe&&Be&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,pe,$t.width,$t.height);for(let vt=0;vt<6;vt++){lt=Vt[vt].mipmaps;for(let Lt=0;Lt<lt.length;Lt++){const Bt=lt[Lt];T.format!==wi?ee!==null?oe?H&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt,0,0,Bt.width,Bt.height,ee,Bt.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt,pe,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt,0,0,Bt.width,Bt.height,ee,Ht,Bt.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt,pe,Bt.width,Bt.height,0,ee,Ht,Bt.data)}}}else{if(lt=T.mipmaps,oe&&Be){lt.length>0&&Nt++;const vt=Kt(Vt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,pe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt[vt].width,Vt[vt].height,ee,Ht,Vt[vt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,Vt[vt].width,Vt[vt].height,0,ee,Ht,Vt[vt].data);for(let Lt=0;Lt<lt.length;Lt++){const re=lt[Lt].image[vt].image;oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt+1,0,0,re.width,re.height,ee,Ht,re.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt+1,pe,re.width,re.height,0,ee,Ht,re.data)}}else{oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ee,Ht,Vt[vt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,ee,Ht,Vt[vt]);for(let Lt=0;Lt<lt.length;Lt++){const Bt=lt[Lt];oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt+1,0,0,ee,Ht,Bt.image[vt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt+1,pe,ee,Ht,Bt.image[vt])}}}y(T)&&x(o.TEXTURE_CUBE_MAP),dt.__version=_t.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function pt(N,T,$,mt,_t,dt){const Wt=f.convert($.format,$.colorSpace),Ut=f.convert($.type),zt=z($.internalFormat,Wt,Ut,$.colorSpace),me=s.get(T),yt=s.get($);if(yt.__renderTarget=T,!me.__hasExternalTextures){const Vt=Math.max(1,T.width>>dt),$t=Math.max(1,T.height>>dt);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?a.texImage3D(_t,dt,zt,Vt,$t,T.depth,0,Wt,Ut,null):a.texImage2D(_t,dt,zt,Vt,$t,0,Wt,Ut,null)}a.bindFramebuffer(o.FRAMEBUFFER,N),Jt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,_t,yt.__webglTexture,0,ae(T)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,_t,yt.__webglTexture,dt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(N,T,$){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const mt=T.depthTexture,_t=mt&&mt.isDepthTexture?mt.type:null,dt=U(T.stencilBuffer,_t),Wt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=ae(T);Jt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,dt,T.width,T.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,N)}else{const mt=T.textures;for(let _t=0;_t<mt.length;_t++){const dt=mt[_t],Wt=f.convert(dt.format,dt.colorSpace),Ut=f.convert(dt.type),zt=z(dt.internalFormat,Wt,Ut,dt.colorSpace),me=ae(T);$&&Jt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,zt,T.width,T.height):Jt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const _t=mt.__webglTexture,dt=ae(T);if(T.depthTexture.format===Ys)Jt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(T.depthTexture.format===Js)Jt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function wt(N){const T=s.get(N),$=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const _t=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",_t)};mt.addEventListener("dispose",_t),T.__depthDisposeCallback=_t}T.__boundDepthTexture=mt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,N)}else if($){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),ut(T.__webglDepthbuffer[mt],N,!1);else{const _t=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,dt)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ut(T.__webglDepthbuffer,N,!1);else{const mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,_t)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function It(N,T,$){const mt=s.get(N);T!==void 0&&pt(mt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&wt(N)}function Tt(N){const T=N.texture,$=s.get(N),mt=s.get(T);N.addEventListener("dispose",O);const _t=N.textures,dt=N.isWebGLCubeRenderTarget===!0,Wt=_t.length>1;if(Wt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,h.memory.textures++),dt){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let zt=0;zt<T.mipmaps.length;zt++)$.__webglFramebuffer[Ut][zt]=o.createFramebuffer()}else $.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ut=0,zt=_t.length;Ut<zt;Ut++){const me=s.get(_t[Ut]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Jt(N)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<_t.length;Ut++){const zt=_t[Ut];$.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const me=f.convert(zt.format,zt.colorSpace),yt=f.convert(zt.type),Vt=z(zt.internalFormat,me,yt,zt.colorSpace,N.isXRRenderTarget===!0),$t=ae(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Vt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ut($.__webglDepthRenderbuffer,N,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){a.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)pt($.__webglFramebuffer[Ut][zt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,zt);else pt($.__webglFramebuffer[Ut],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Wt){for(let Ut=0,zt=_t.length;Ut<zt;Ut++){const me=_t[Ut],yt=s.get(me);a.bindTexture(o.TEXTURE_2D,yt.__webglTexture),ne(o.TEXTURE_2D,me),pt($.__webglFramebuffer,N,me,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),y(me)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ut,mt.__webglTexture),ne(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)pt($.__webglFramebuffer[zt],N,T,o.COLOR_ATTACHMENT0,Ut,zt);else pt($.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Ut,0);y(T)&&x(Ut),a.unbindTexture()}N.depthBuffer&&wt(N)}function At(N){const T=N.textures;for(let $=0,mt=T.length;$<mt;$++){const _t=T[$];if(y(_t)){const dt=P(N),Wt=s.get(_t).__webglTexture;a.bindTexture(dt,Wt),x(dt),a.unbindTexture()}}}const Ce=[],Z=[];function rn(N){if(N.samples>0){if(Jt(N)===!1){const T=N.textures,$=N.width,mt=N.height;let _t=o.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=s.get(N),Ut=T.length>1;if(Ut)for(let zt=0;zt<T.length;zt++)a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);const me=s.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,$,mt,0,0,$,mt,_t,o.NEAREST),m===!0&&(Ce.length=0,Z.length=0,Ce.push(o.COLOR_ATTACHMENT0+zt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ce.push(dt),Z.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ce))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let zt=0;zt<T.length;zt++){a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);const me=s.get(T[zt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,me,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ae(N){return Math.min(u.maxSamples,N.samples)}function Jt(N){const T=s.get(N);return N.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ct(N){const T=h.render.frame;_.get(N)!==T&&(_.set(N,T),N.update())}function _e(N,T){const $=N.colorSpace,mt=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==eo&&$!==ar&&(Ae.getTransfer($)===Fe?(mt!==wi||_t!==Sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(v.width=N.naturalWidth||N.width,v.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(v.width=N.displayWidth,v.height=N.displayHeight):(v.width=N.width,v.height=N.height),v}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=ht,this.setTexture2DArray=q,this.setTexture3D=et,this.setTextureCube=K,this.rebindTextures=It,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Jt}function mR(o,n){function a(s,u=ar){let f;const h=Ae.getTransfer(u);if(s===Sa)return o.UNSIGNED_BYTE;if(s===xp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Sp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Z_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===W_)return o.BYTE;if(s===j_)return o.SHORT;if(s===rl)return o.UNSIGNED_SHORT;if(s===_p)return o.INT;if(s===Xr)return o.UNSIGNED_INT;if(s===va)return o.FLOAT;if(s===sl)return o.HALF_FLOAT;if(s===K_)return o.ALPHA;if(s===Q_)return o.RGB;if(s===wi)return o.RGBA;if(s===J_)return o.LUMINANCE;if(s===$_)return o.LUMINANCE_ALPHA;if(s===Ys)return o.DEPTH_COMPONENT;if(s===Js)return o.DEPTH_STENCIL;if(s===tx)return o.RED;if(s===yp)return o.RED_INTEGER;if(s===ex)return o.RG;if(s===Mp)return o.RG_INTEGER;if(s===Ep)return o.RGBA_INTEGER;if(s===oc||s===lc||s===uc||s===cc)if(h===Fe)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===oc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===oc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gd||s===Vd||s===Xd||s===kd)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Gd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qd||s===Yd||s===Wd)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===qd||s===Yd)return h===Fe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Wd)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===jd)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zd)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qd)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jd)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===np)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ip)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===op)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fc||s===lp||s===up)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===fc)return h===Fe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===nx||s===cp||s===fp||s===hp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===fc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===cp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qs?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}class gR extends _i{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n}}class ic extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vR={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let u=null,f=null,h=null;const d=this._targetRay,m=this._grip,v=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(v&&n.hand){h=!0;for(const A of n.hand.values()){const y=a.getJointPose(A,s),x=this._getHandJoint(v,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=v.joints["index-finger-tip"],g=v.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,b=.005;v.inputState.pinching&&S>M+b?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&S<=M-b&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else m!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(u=a.getPose(n.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vR)))}return d!==null&&(d.visible=u!==null),m!==null&&(m.visible=f!==null),v!==null&&(v.visible=h!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new ic;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}const _R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const u=new Yn,f=n.properties.get(u);f.__webglTexture=a.texture,(a.depthNear!=s.depthNear||a.depthFar!=s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=u}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new Ma({vertexShader:_R,fragmentShader:xR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Yi(new hl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yR extends no{constructor(n,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",m=1,v=null,_=null,g=null,S=null,M=null,b=null;const A=new SR,y=a.getContextAttributes();let x=null,P=null;const z=[],U=[],it=new Pe;let V=null;const O=new _i;O.viewport=new Qe;const F=new _i;F.viewport=new Qe;const D=[O,F],C=new gR;let I=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let Y=z[w];return Y===void 0&&(Y=new Rd,z[w]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(w){let Y=z[w];return Y===void 0&&(Y=new Rd,z[w]=Y),Y.getGripSpace()},this.getHand=function(w){let Y=z[w];return Y===void 0&&(Y=new Rd,z[w]=Y),Y.getHandSpace()};function st(w){const Y=U.indexOf(w.inputSource);if(Y===-1)return;const pt=z[Y];pt!==void 0&&(pt.update(w.inputSource,w.frame,v||h),pt.dispatchEvent({type:w.type,data:w.inputSource}))}function gt(){u.removeEventListener("select",st),u.removeEventListener("selectstart",st),u.removeEventListener("selectend",st),u.removeEventListener("squeeze",st),u.removeEventListener("squeezestart",st),u.removeEventListener("squeezeend",st),u.removeEventListener("end",gt),u.removeEventListener("inputsourceschange",ht);for(let w=0;w<z.length;w++){const Y=U[w];Y!==null&&(U[w]=null,z[w].disconnect(Y))}I=null,ot=null,A.reset(),n.setRenderTarget(x),M=null,S=null,g=null,u=null,P=null,ye.stop(),s.isPresenting=!1,n.setPixelRatio(V),n.setSize(it.width,it.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){f=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){d=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||h},this.setReferenceSpace=function(w){v=w},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(w){if(u=w,u!==null){if(x=n.getRenderTarget(),u.addEventListener("select",st),u.addEventListener("selectstart",st),u.addEventListener("selectend",st),u.addEventListener("squeeze",st),u.addEventListener("squeezestart",st),u.addEventListener("squeezeend",st),u.addEventListener("end",gt),u.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await a.makeXRCompatible(),V=n.getPixelRatio(),n.getSize(it),u.renderState.layers===void 0){const Y={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,Y),u.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new kr(M.framebufferWidth,M.framebufferHeight,{format:wi,type:Sa,colorSpace:n.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,pt=null,ut=null;y.depth&&(ut=y.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Y=y.stencil?Js:Ys,pt=y.stencil?Qs:Xr);const bt={colorFormat:a.RGBA8,depthFormat:ut,scaleFactor:f};g=new XRWebGLBinding(u,a),S=g.createProjectionLayer(bt),u.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),P=new kr(S.textureWidth,S.textureHeight,{format:wi,type:Sa,depthTexture:new _x(S.textureWidth,S.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:n.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),v=null,h=await u.requestReferenceSpace(d),ye.setContext(u),ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ht(w){for(let Y=0;Y<w.removed.length;Y++){const pt=w.removed[Y],ut=U.indexOf(pt);ut>=0&&(U[ut]=null,z[ut].disconnect(pt))}for(let Y=0;Y<w.added.length;Y++){const pt=w.added[Y];let ut=U.indexOf(pt);if(ut===-1){for(let wt=0;wt<z.length;wt++)if(wt>=U.length){U.push(pt),ut=wt;break}else if(U[wt]===null){U[wt]=pt,ut=wt;break}if(ut===-1)break}const bt=z[ut];bt&&bt.connect(pt)}}const q=new rt,et=new rt;function K(w,Y,pt){q.setFromMatrixPosition(Y.matrixWorld),et.setFromMatrixPosition(pt.matrixWorld);const ut=q.distanceTo(et),bt=Y.projectionMatrix.elements,wt=pt.projectionMatrix.elements,It=bt[14]/(bt[10]-1),Tt=bt[14]/(bt[10]+1),At=(bt[9]+1)/bt[5],Ce=(bt[9]-1)/bt[5],Z=(bt[8]-1)/bt[0],rn=(wt[8]+1)/wt[0],ae=It*Z,Jt=It*rn,Ct=ut/(-Z+rn),_e=Ct*-Z;if(Y.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(_e),w.translateZ(Ct),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),bt[10]===-1)w.projectionMatrix.copy(Y.projectionMatrix),w.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Kt=It+Ct,N=Tt+Ct,T=ae-_e,$=Jt+(ut-_e),mt=At*Tt/N*Kt,_t=Ce*Tt/N*Kt;w.projectionMatrix.makePerspective(T,$,mt,_t,Kt,N),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function xt(w,Y){Y===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(Y.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(u===null)return;let Y=w.near,pt=w.far;A.texture!==null&&(A.depthNear>0&&(Y=A.depthNear),A.depthFar>0&&(pt=A.depthFar)),C.near=F.near=O.near=Y,C.far=F.far=O.far=pt,(I!==C.near||ot!==C.far)&&(u.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,ot=C.far),O.layers.mask=w.layers.mask|2,F.layers.mask=w.layers.mask|4,C.layers.mask=O.layers.mask|F.layers.mask;const ut=w.parent,bt=C.cameras;xt(C,ut);for(let wt=0;wt<bt.length;wt++)xt(bt[wt],ut);bt.length===2?K(C,O,F):C.projectionMatrix.copy(O.projectionMatrix),St(w,C,ut)};function St(w,Y,pt){pt===null?w.matrix.copy(Y.matrixWorld):(w.matrix.copy(pt.matrixWorld),w.matrix.invert(),w.matrix.multiply(Y.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(Y.projectionMatrix),w.projectionMatrixInverse.copy(Y.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=dp*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(w){m=w,S!==null&&(S.fixedFoveation=w),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=w)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let Gt=null;function ne(w,Y){if(_=Y.getViewerPose(v||h),b=Y,_!==null){const pt=_.views;M!==null&&(n.setRenderTargetFramebuffer(P,M.framebuffer),n.setRenderTarget(P));let ut=!1;pt.length!==C.cameras.length&&(C.cameras.length=0,ut=!0);for(let wt=0;wt<pt.length;wt++){const It=pt[wt];let Tt=null;if(M!==null)Tt=M.getViewport(It);else{const Ce=g.getViewSubImage(S,It);Tt=Ce.viewport,wt===0&&(n.setRenderTargetTextures(P,Ce.colorTexture,S.ignoreDepthValues?void 0:Ce.depthStencilTexture),n.setRenderTarget(P))}let At=D[wt];At===void 0&&(At=new _i,At.layers.enable(wt),At.viewport=new Qe,D[wt]=At),At.matrix.fromArray(It.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(It.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),wt===0&&(C.matrix.copy(At.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ut===!0&&C.cameras.push(At)}const bt=u.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=g.getDepthInformation(pt[0]);wt&&wt.isValid&&wt.texture&&A.init(n,wt,u.renderState)}}for(let pt=0;pt<z.length;pt++){const ut=U[pt],bt=z[pt];ut!==null&&bt!==void 0&&bt.update(ut,Y,v||h)}Gt&&Gt(w,Y),Y.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Y}),b=null}const ye=new vx;ye.setAnimationLoop(ne),this.setAnimationLoop=function(w){Gt=w},this.dispose=function(){}}}const zr=new ya,MR=new Je;function ER(o,n){function a(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,dx(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function u(y,x,P,z,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(y,x):x.isMeshToonMaterial?(f(y,x),g(y,x)):x.isMeshPhongMaterial?(f(y,x),_(y,x)):x.isMeshStandardMaterial?(f(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,U)):x.isMeshMatcapMaterial?(f(y,x),b(y,x)):x.isMeshDepthMaterial?f(y,x):x.isMeshDistanceMaterial?(f(y,x),A(y,x)):x.isMeshNormalMaterial?f(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,P,z):x.isSpriteMaterial?v(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,a(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===qn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,a(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===qn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,a(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,a(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=n.get(x),z=P.envMap,U=P.envMapRotation;z&&(y.envMap.value=z,zr.copy(U),zr.x*=-1,zr.y*=-1,zr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),y.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(zr)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,z){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=z*.5,x.map&&(y.map.value=x.map,a(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const P=n.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function TR(o,n,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,z){const U=z.program;s.uniformBlockBinding(P,U)}function v(P,z){let U=u[P.id];U===void 0&&(b(P),U=_(P),u[P.id]=U,P.addEventListener("dispose",y));const it=z.program;s.updateUBOMapping(P,it);const V=n.render.frame;f[P.id]!==V&&(S(P),f[P.id]=V)}function _(P){const z=g();P.__bindingPointIndex=z;const U=o.createBuffer(),it=P.__size,V=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,it,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,U),U}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const z=u[P.id],U=P.uniforms,it=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let V=0,O=U.length;V<O;V++){const F=Array.isArray(U[V])?U[V]:[U[V]];for(let D=0,C=F.length;D<C;D++){const I=F[D];if(M(I,V,D,it)===!0){const ot=I.__offset,st=Array.isArray(I.value)?I.value:[I.value];let gt=0;for(let ht=0;ht<st.length;ht++){const q=st[ht],et=A(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,ot+gt,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,gt),gt+=et.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,z,U,it){const V=P.value,O=z+"_"+U;if(it[O]===void 0)return typeof V=="number"||typeof V=="boolean"?it[O]=V:it[O]=V.clone(),!0;{const F=it[O];if(typeof V=="number"||typeof V=="boolean"){if(F!==V)return it[O]=V,!0}else if(F.equals(V)===!1)return F.copy(V),!0}return!1}function b(P){const z=P.uniforms;let U=0;const it=16;for(let O=0,F=z.length;O<F;O++){const D=Array.isArray(z[O])?z[O]:[z[O]];for(let C=0,I=D.length;C<I;C++){const ot=D[C],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let gt=0,ht=st.length;gt<ht;gt++){const q=st[gt],et=A(q),K=U%it,xt=K%et.boundary,St=K+xt;U+=xt,St!==0&&it-St<et.storage&&(U+=it-St),ot.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=et.storage}}}const V=U%it;return V>0&&(U+=it-V),P.__size=U,P.__cache={},this}function A(P){const z={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(z.boundary=4,z.storage=4):P.isVector2?(z.boundary=8,z.storage=8):P.isVector3||P.isColor?(z.boundary=16,z.storage=12):P.isVector4?(z.boundary=16,z.storage=16):P.isMatrix3?(z.boundary=48,z.storage=48):P.isMatrix4?(z.boundary=64,z.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),z}function y(P){const z=P.target;z.removeEventListener("dispose",y);const U=h.indexOf(z.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(u[z.id]),delete u[z.id],delete f[z.id]}function x(){for(const P in u)o.deleteBuffer(u[P]);h=[],u={},f={}}return{bind:m,update:v,dispose:x}}class bR{constructor(n={}){const{canvas:a=hE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:v=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),A=new Int32Array(4);let y=null,x=null;const P=[],z=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=sr,this.toneMappingExposure=1;const U=this;let it=!1,V=0,O=0,F=null,D=-1,C=null;const I=new Qe,ot=new Qe;let st=null;const gt=new ze(0);let ht=0,q=a.width,et=a.height,K=1,xt=null,St=null;const Gt=new Qe(0,0,q,et),ne=new Qe(0,0,q,et);let ye=!1;const w=new gx;let Y=!1,pt=!1;const ut=new Je,bt=new Je,wt=new rt,It=new Qe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Ce(){return F===null?K:1}let Z=s;function rn(R,W){return a.getContext(R,W)}try{const R={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:v,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${vp}`),a.addEventListener("webglcontextlost",vt,!1),a.addEventListener("webglcontextrestored",Lt,!1),a.addEventListener("webglcontextcreationerror",Bt,!1),Z===null){const W="webgl2";if(Z=rn(W,R),Z===null)throw rn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,Jt,Ct,_e,Kt,N,T,$,mt,_t,dt,Wt,Ut,zt,me,yt,Vt,$t,ee,Ht,pe,oe,Be,H;function Nt(){ae=new Db(Z),ae.init(),oe=new mR(Z,ae),Jt=new Eb(Z,ae,n,oe),Ct=new hR(Z,ae),Jt.reverseDepthBuffer&&S&&Ct.buffers.depth.setReversed(!0),_e=new Lb(Z),Kt=new QA,N=new pR(Z,ae,Ct,Kt,Jt,oe,_e),T=new bb(U),$=new wb(U),mt=new FE(Z),Be=new yb(Z,mt),_t=new Ub(Z,mt,_e,Be),dt=new zb(Z,_t,mt,_e),ee=new Ob(Z,Jt,N),yt=new Tb(Kt),Wt=new KA(U,T,$,ae,Jt,Be,yt),Ut=new ER(U,Kt),zt=new $A,me=new rR(ae),$t=new Sb(U,T,$,Ct,dt,M,m),Vt=new cR(U,dt,Jt),H=new TR(Z,_e,Jt,Ct),Ht=new Mb(Z,ae,_e),pe=new Nb(Z,ae,_e),_e.programs=Wt.programs,U.capabilities=Jt,U.extensions=ae,U.properties=Kt,U.renderLists=zt,U.shadowMap=Vt,U.state=Ct,U.info=_e}Nt();const lt=new yR(U,Z);this.xr=lt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(q,et,!1))},this.getSize=function(R){return R.set(q,et)},this.setSize=function(R,W,nt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,et=W,a.width=Math.floor(R*K),a.height=Math.floor(W*K),nt===!0&&(a.style.width=R+"px",a.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(q*K,et*K).floor()},this.setDrawingBufferSize=function(R,W,nt){q=R,et=W,K=nt,a.width=Math.floor(R*nt),a.height=Math.floor(W*nt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(Gt)},this.setViewport=function(R,W,nt,at){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,W,nt,at),Ct.viewport(I.copy(Gt).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,W,nt,at){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,nt,at),Ct.scissor(ot.copy(ne).multiplyScalar(K).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Ct.setScissorTest(ye=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(R=!0,W=!0,nt=!0){let at=0;if(R){let j=!1;if(F!==null){const Mt=F.texture.format;j=Mt===Ep||Mt===Mp||Mt===yp}if(j){const Mt=F.texture.type,Ot=Mt===Sa||Mt===Xr||Mt===rl||Mt===Qs||Mt===xp||Mt===Sp,qt=$t.getClearColor(),Yt=$t.getClearAlpha(),Qt=qt.r,jt=qt.g,Pt=qt.b;Ot?(b[0]=Qt,b[1]=jt,b[2]=Pt,b[3]=Yt,Z.clearBufferuiv(Z.COLOR,0,b)):(A[0]=Qt,A[1]=jt,A[2]=Pt,A[3]=Yt,Z.clearBufferiv(Z.COLOR,0,A))}else at|=Z.COLOR_BUFFER_BIT}W&&(at|=Z.DEPTH_BUFFER_BIT),nt&&(at|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",vt,!1),a.removeEventListener("webglcontextrestored",Lt,!1),a.removeEventListener("webglcontextcreationerror",Bt,!1),zt.dispose(),me.dispose(),Kt.dispose(),T.dispose(),$.dispose(),dt.dispose(),Be.dispose(),H.dispose(),Wt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Tn),lt.removeEventListener("sessionend",dl),Wi.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),it=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),it=!1;const R=_e.autoReset,W=Vt.enabled,nt=Vt.autoUpdate,at=Vt.needsUpdate,j=Vt.type;Nt(),_e.autoReset=R,Vt.enabled=W,Vt.autoUpdate=nt,Vt.needsUpdate=at,Vt.type=j}function Bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function re(R){const W=R.target;W.removeEventListener("dispose",re),qe(W)}function qe(R){hn(R),Kt.remove(R)}function hn(R){const W=Kt.get(R).programs;W!==void 0&&(W.forEach(function(nt){Wt.releaseProgram(nt)}),R.isShaderMaterial&&Wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,nt,at,j,Mt){W===null&&(W=Tt);const Ot=j.isMesh&&j.matrixWorld.determinant()<0,qt=xc(R,W,nt,at,j);Ct.setMaterial(at,Ot);let Yt=nt.index,Qt=1;if(at.wireframe===!0){if(Yt=_t.getWireframeAttribute(nt),Yt===void 0)return;Qt=2}const jt=nt.drawRange,Pt=nt.attributes.position;let he=jt.start*Qt,Ue=(jt.start+jt.count)*Qt;Mt!==null&&(he=Math.max(he,Mt.start*Qt),Ue=Math.min(Ue,(Mt.start+Mt.count)*Qt)),Yt!==null?(he=Math.max(he,0),Ue=Math.min(Ue,Yt.count)):Pt!=null&&(he=Math.max(he,0),Ue=Math.min(Ue,Pt.count));const He=Ue-he;if(He<0||He===1/0)return;Be.setup(j,at,qt,nt,Yt);let bn,be=Ht;if(Yt!==null&&(bn=mt.get(Yt),be=pe,be.setIndex(bn)),j.isMesh)at.wireframe===!0?(Ct.setLineWidth(at.wireframeLinewidth*Ce()),be.setMode(Z.LINES)):be.setMode(Z.TRIANGLES);else if(j.isLine){let kt=at.linewidth;kt===void 0&&(kt=1),Ct.setLineWidth(kt*Ce()),j.isLineSegments?be.setMode(Z.LINES):j.isLineLoop?be.setMode(Z.LINE_LOOP):be.setMode(Z.LINE_STRIP)}else j.isPoints?be.setMode(Z.POINTS):j.isSprite&&be.setMode(Z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)be.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))be.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const kt=j._multiDrawStarts,Bn=j._multiDrawCounts,Ee=j._multiDrawCount,sn=Yt?mt.get(Yt).bytesPerElement:1,jn=Kt.get(at).currentProgram.getUniforms();for(let on=0;on<Ee;on++)jn.setValue(Z,"_gl_DrawID",on),be.render(kt[on]/sn,Bn[on])}else if(j.isInstancedMesh)be.renderInstances(he,He,j.count);else if(nt.isInstancedBufferGeometry){const kt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Bn=Math.min(nt.instanceCount,kt);be.renderInstances(he,He,Bn)}else be.render(he,He)};function Me(R,W,nt){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Zi(R,W,nt),R.side=or,R.needsUpdate=!0,Zi(R,W,nt),R.side=ga):Zi(R,W,nt)}this.compile=function(R,W,nt=null){nt===null&&(nt=R),x=me.get(nt),x.init(W),z.push(x),nt.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),R!==nt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const at=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let Ot=0;Ot<Mt.length;Ot++){const qt=Mt[Ot];Me(qt,nt,j),at.add(qt)}else Me(Mt,nt,j),at.add(Mt)}),z.pop(),x=null,at},this.compileAsync=function(R,W,nt=null){const at=this.compile(R,W,nt);return new Promise(j=>{function Mt(){if(at.forEach(function(Ot){Kt.get(Ot).currentProgram.isReady()&&at.delete(Ot)}),at.size===0){j(R);return}setTimeout(Mt,10)}ae.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ke=null;function dn(R){ke&&ke(R)}function Tn(){Wi.stop()}function dl(){Wi.start()}const Wi=new vx;Wi.setAnimationLoop(dn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){ke=R,lt.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},lt.addEventListener("sessionstart",Tn),lt.addEventListener("sessionend",dl),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(it===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(W),W=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,W,F),x=me.get(R,z.length),x.init(W),z.push(x),bt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),w.setFromProjectionMatrix(bt),pt=this.localClippingEnabled,Y=yt.init(this.clippingPlanes,pt),y=zt.get(R,P.length),y.init(),P.push(y),lt.enabled===!0&&lt.isPresenting===!0){const Mt=U.xr.getDepthSensingMesh();Mt!==null&&ao(Mt,W,-1/0,U.sortObjects)}ao(R,W,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(xt,St),At=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,At&&$t.addToRenderList(y,R),this.info.render.frame++,Y===!0&&yt.beginShadows();const nt=x.state.shadowsArray;Vt.render(nt,R,W),Y===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,j=y.transmissive;if(x.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(j.length>0)for(let Ot=0,qt=Mt.length;Ot<qt;Ot++){const Yt=Mt[Ot];ur(at,j,R,Yt)}At&&$t.render(R);for(let Ot=0,qt=Mt.length;Ot<qt;Ot++){const Yt=Mt[Ot];lr(y,R,Yt,Yt.viewport)}}else j.length>0&&ur(at,j,R,W),At&&$t.render(R),lr(y,R,W);F!==null&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(U,R,W),Be.resetDefaultState(),D=-1,C=null,z.pop(),z.length>0?(x=z[z.length-1],Y===!0&&yt.setGlobalState(U.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function ao(R,W,nt,at){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||w.intersectsSprite(R)){at&&It.setFromMatrixPosition(R.matrixWorld).applyMatrix4(bt);const Ot=dt.update(R),qt=R.material;qt.visible&&y.push(R,Ot,qt,nt,It.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||w.intersectsObject(R))){const Ot=dt.update(R),qt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),It.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),It.copy(Ot.boundingSphere.center)),It.applyMatrix4(R.matrixWorld).applyMatrix4(bt)),Array.isArray(qt)){const Yt=Ot.groups;for(let Qt=0,jt=Yt.length;Qt<jt;Qt++){const Pt=Yt[Qt],he=qt[Pt.materialIndex];he&&he.visible&&y.push(R,Ot,he,nt,It.z,Pt)}}else qt.visible&&y.push(R,Ot,qt,nt,It.z,null)}}const Mt=R.children;for(let Ot=0,qt=Mt.length;Ot<qt;Ot++)ao(Mt[Ot],W,nt,at)}function lr(R,W,nt,at){const j=R.opaque,Mt=R.transmissive,Ot=R.transparent;x.setupLightsView(nt),Y===!0&&yt.setGlobalState(U.clippingPlanes,nt),at&&Ct.viewport(I.copy(at)),j.length>0&&ji(j,W,nt),Mt.length>0&&ji(Mt,W,nt),Ot.length>0&&ji(Ot,W,nt),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ur(R,W,nt,at){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[at.id]===void 0&&(x.state.transmissionRenderTarget[at.id]=new kr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?sl:Sa,minFilter:Gr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Mt=x.state.transmissionRenderTarget[at.id],Ot=at.viewport||I;Mt.setSize(Ot.z,Ot.w);const qt=U.getRenderTarget();U.setRenderTarget(Mt),U.getClearColor(gt),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),At&&$t.render(nt);const Yt=U.toneMapping;U.toneMapping=sr;const Qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),x.setupLightsView(at),Y===!0&&yt.setGlobalState(U.clippingPlanes,at),ji(R,nt,at),N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Pt=0,he=W.length;Pt<he;Pt++){const Ue=W[Pt],He=Ue.object,bn=Ue.geometry,be=Ue.material,kt=Ue.group;if(be.side===ga&&He.layers.test(at.layers)){const Bn=be.side;be.side=qn,be.needsUpdate=!0,Ni(He,nt,at,bn,be,kt),be.side=Bn,be.needsUpdate=!0,jt=!0}}jt===!0&&(N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt))}U.setRenderTarget(qt),U.setClearColor(gt,ht),Qt!==void 0&&(at.viewport=Qt),U.toneMapping=Yt}function ji(R,W,nt){const at=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Mt=R.length;j<Mt;j++){const Ot=R[j],qt=Ot.object,Yt=Ot.geometry,Qt=at===null?Ot.material:at,jt=Ot.group;qt.layers.test(nt.layers)&&Ni(qt,W,nt,Yt,Qt,jt)}}function Ni(R,W,nt,at,j,Mt){R.onBeforeRender(U,W,nt,at,j,Mt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(U,W,nt,at,R,Mt),j.transparent===!0&&j.side===ga&&j.forceSinglePass===!1?(j.side=qn,j.needsUpdate=!0,U.renderBufferDirect(nt,W,at,j,R,Mt),j.side=or,j.needsUpdate=!0,U.renderBufferDirect(nt,W,at,j,R,Mt),j.side=ga):U.renderBufferDirect(nt,W,at,j,R,Mt),R.onAfterRender(U,W,nt,at,j,Mt)}function Zi(R,W,nt){W.isScene!==!0&&(W=Tt);const at=Kt.get(R),j=x.state.lights,Mt=x.state.shadowsArray,Ot=j.state.version,qt=Wt.getParameters(R,j.state,Mt,W,nt),Yt=Wt.getProgramCacheKey(qt);let Qt=at.programs;at.environment=R.isMeshStandardMaterial?W.environment:null,at.fog=W.fog,at.envMap=(R.isMeshStandardMaterial?$:T).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",re),Qt=new Map,at.programs=Qt);let jt=Qt.get(Yt);if(jt!==void 0){if(at.currentProgram===jt&&at.lightsStateVersion===Ot)return ro(R,qt),jt}else qt.uniforms=Wt.getUniforms(R),R.onBeforeCompile(qt,U),jt=Wt.acquireProgram(qt,Yt),Qt.set(Yt,jt),at.uniforms=qt.uniforms;const Pt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pt.clippingPlanes=yt.uniform),ro(R,qt),at.needsLights=so(R),at.lightsStateVersion=Ot,at.needsLights&&(Pt.ambientLightColor.value=j.state.ambient,Pt.lightProbe.value=j.state.probe,Pt.directionalLights.value=j.state.directional,Pt.directionalLightShadows.value=j.state.directionalShadow,Pt.spotLights.value=j.state.spot,Pt.spotLightShadows.value=j.state.spotShadow,Pt.rectAreaLights.value=j.state.rectArea,Pt.ltc_1.value=j.state.rectAreaLTC1,Pt.ltc_2.value=j.state.rectAreaLTC2,Pt.pointLights.value=j.state.point,Pt.pointLightShadows.value=j.state.pointShadow,Pt.hemisphereLights.value=j.state.hemi,Pt.directionalShadowMap.value=j.state.directionalShadowMap,Pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pt.spotShadowMap.value=j.state.spotShadowMap,Pt.spotLightMatrix.value=j.state.spotLightMatrix,Pt.spotLightMap.value=j.state.spotLightMap,Pt.pointShadowMap.value=j.state.pointShadowMap,Pt.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=jt,at.uniformsList=null,jt}function Ta(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=hc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ro(R,W){const nt=Kt.get(R);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function xc(R,W,nt,at,j){W.isScene!==!0&&(W=Tt),N.resetTextureUnits();const Mt=W.fog,Ot=at.isMeshStandardMaterial?W.environment:null,qt=F===null?U.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:eo,Yt=(at.isMeshStandardMaterial?$:T).get(at.envMap||Ot),Qt=at.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,jt=!!nt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Pt=!!nt.morphAttributes.position,he=!!nt.morphAttributes.normal,Ue=!!nt.morphAttributes.color;let He=sr;at.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(He=U.toneMapping);const bn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,be=bn!==void 0?bn.length:0,kt=Kt.get(at),Bn=x.state.lights;if(Y===!0&&(pt===!0||R!==C)){const Dn=R===C&&at.id===D;yt.setState(at,R,Dn)}let Ee=!1;at.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Bn.state.version||kt.outputColorSpace!==qt||j.isBatchedMesh&&kt.batching===!1||!j.isBatchedMesh&&kt.batching===!0||j.isBatchedMesh&&kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&kt.instancing===!1||!j.isInstancedMesh&&kt.instancing===!0||j.isSkinnedMesh&&kt.skinning===!1||!j.isSkinnedMesh&&kt.skinning===!0||j.isInstancedMesh&&kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&kt.instancingMorph===!1&&j.morphTexture!==null||kt.envMap!==Yt||at.fog===!0&&kt.fog!==Mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==yt.numPlanes||kt.numIntersection!==yt.numIntersection)||kt.vertexAlphas!==Qt||kt.vertexTangents!==jt||kt.morphTargets!==Pt||kt.morphNormals!==he||kt.morphColors!==Ue||kt.toneMapping!==He||kt.morphTargetsCount!==be)&&(Ee=!0):(Ee=!0,kt.__version=at.version);let sn=kt.currentProgram;Ee===!0&&(sn=Zi(at,W,j));let jn=!1,on=!1,si=!1;const se=sn.getUniforms(),Zn=kt.uniforms;if(Ct.useProgram(sn.program)&&(jn=!0,on=!0,si=!0),at.id!==D&&(D=at.id,on=!0),jn||C!==R){Ct.buffers.depth.getReversed()?(ut.copy(R.projectionMatrix),pE(ut),mE(ut),se.setValue(Z,"projectionMatrix",ut)):se.setValue(Z,"projectionMatrix",R.projectionMatrix),se.setValue(Z,"viewMatrix",R.matrixWorldInverse);const An=se.map.cameraPosition;An!==void 0&&An.setValue(Z,wt.setFromMatrixPosition(R.matrixWorld)),Jt.logarithmicDepthBuffer&&se.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&se.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,on=!0,si=!0)}if(j.isSkinnedMesh){se.setOptional(Z,j,"bindMatrix"),se.setOptional(Z,j,"bindMatrixInverse");const Dn=j.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),se.setValue(Z,"boneTexture",Dn.boneTexture,N))}j.isBatchedMesh&&(se.setOptional(Z,j,"batchingTexture"),se.setValue(Z,"batchingTexture",j._matricesTexture,N),se.setOptional(Z,j,"batchingIdTexture"),se.setValue(Z,"batchingIdTexture",j._indirectTexture,N),se.setOptional(Z,j,"batchingColorTexture"),j._colorsTexture!==null&&se.setValue(Z,"batchingColorTexture",j._colorsTexture,N));const ba=nt.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0)&&ee.update(j,nt,sn),(on||kt.receiveShadow!==j.receiveShadow)&&(kt.receiveShadow=j.receiveShadow,se.setValue(Z,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Zn.envMap.value=Yt,Zn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&W.environment!==null&&(Zn.envMapIntensity.value=W.environmentIntensity),on&&(se.setValue(Z,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&pl(Zn,si),Mt&&at.fog===!0&&Ut.refreshFogUniforms(Zn,Mt),Ut.refreshMaterialUniforms(Zn,at,K,et,x.state.transmissionRenderTarget[R.id]),hc.upload(Z,Ta(kt),Zn,N)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(hc.upload(Z,Ta(kt),Zn,N),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&se.setValue(Z,"center",j.center),se.setValue(Z,"modelViewMatrix",j.modelViewMatrix),se.setValue(Z,"normalMatrix",j.normalMatrix),se.setValue(Z,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Dn=at.uniformsGroups;for(let An=0,Un=Dn.length;An<Un;An++){const ml=Dn[An];H.update(ml,sn),H.bind(ml,sn)}}return sn}function pl(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function so(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,W,nt){Kt.get(R.texture).__webglTexture=W,Kt.get(R.depthTexture).__webglTexture=nt;const at=Kt.get(R);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=nt===void 0,at.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const nt=Kt.get(R);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,nt=0){F=R,V=W,O=nt;let at=!0,j=null,Mt=!1,Ot=!1;if(R){const Yt=Kt.get(R);if(Yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(Z.FRAMEBUFFER,null),at=!1;else if(Yt.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Yt.__hasExternalTextures)N.rebindTextures(R,Kt.get(R.texture).__webglTexture,Kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pt=R.depthTexture;if(Yt.__boundDepthTexture!==Pt){if(Pt!==null&&Kt.has(Pt)&&(R.width!==Pt.image.width||R.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);const jt=Kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?j=jt[W][nt]:j=jt[W],Mt=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?j=Kt.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[nt]:j=jt,I.copy(R.viewport),ot.copy(R.scissor),st=R.scissorTest}else I.copy(Gt).multiplyScalar(K).floor(),ot.copy(ne).multiplyScalar(K).floor(),st=ye;if(Ct.bindFramebuffer(Z.FRAMEBUFFER,j)&&at&&Ct.drawBuffers(R,j),Ct.viewport(I),Ct.scissor(ot),Ct.setScissorTest(st),Mt){const Yt=Kt.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Yt.__webglTexture,nt)}else if(Ot){const Yt=Kt.get(R.texture),Qt=W||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Yt.__webglTexture,nt||0,Qt)}D=-1},this.readRenderTargetPixels=function(R,W,nt,at,j,Mt,Ot){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){Ct.bindFramebuffer(Z.FRAMEBUFFER,qt);try{const Yt=R.texture,Qt=Yt.format,jt=Yt.type;if(!Jt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-at&&nt>=0&&nt<=R.height-j&&Z.readPixels(W,nt,at,j,oe.convert(Qt),oe.convert(jt),Mt)}finally{const Yt=F!==null?Kt.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(Z.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,W,nt,at,j,Mt,Ot){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){const Yt=R.texture,Qt=Yt.format,jt=Yt.type;if(!Jt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-at&&nt>=0&&nt<=R.height-j){Ct.bindFramebuffer(Z.FRAMEBUFFER,qt);const Pt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Pt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Mt.byteLength,Z.STREAM_READ),Z.readPixels(W,nt,at,j,oe.convert(Qt),oe.convert(jt),0);const he=F!==null?Kt.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(Z.FRAMEBUFFER,he);const Ue=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await dE(Z,Ue,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Pt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Mt),Z.deleteBuffer(Pt),Z.deleteSync(Ue),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,nt=0){R.isTexture!==!0&&(il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const at=Math.pow(2,-nt),j=Math.floor(R.image.width*at),Mt=Math.floor(R.image.height*at),Ot=W!==null?W.x:0,qt=W!==null?W.y:0;N.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,nt,0,0,Ot,qt,j,Mt),Ct.unbindTexture()},this.copyTextureToTexture=function(R,W,nt=null,at=null,j=0){R.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,R=arguments[1],W=arguments[2],j=arguments[3]||0,nt=null);let Mt,Ot,qt,Yt,Qt,jt,Pt,he,Ue;const He=R.isCompressedTexture?R.mipmaps[j]:R.image;nt!==null?(Mt=nt.max.x-nt.min.x,Ot=nt.max.y-nt.min.y,qt=nt.isBox3?nt.max.z-nt.min.z:1,Yt=nt.min.x,Qt=nt.min.y,jt=nt.isBox3?nt.min.z:0):(Mt=He.width,Ot=He.height,qt=He.depth||1,Yt=0,Qt=0,jt=0),at!==null?(Pt=at.x,he=at.y,Ue=at.z):(Pt=0,he=0,Ue=0);const bn=oe.convert(W.format),be=oe.convert(W.type);let kt;W.isData3DTexture?(N.setTexture3D(W,0),kt=Z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),kt=Z.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),kt=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,W.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,W.unpackAlignment);const Bn=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ee=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),sn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),jn=Z.getParameter(Z.UNPACK_SKIP_ROWS),on=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,He.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,He.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Yt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Qt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,jt);const si=R.isDataArrayTexture||R.isData3DTexture,se=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Zn=Kt.get(R),ba=Kt.get(W),Dn=Kt.get(Zn.__renderTarget),An=Kt.get(ba.__renderTarget);Ct.bindFramebuffer(Z.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Ct.bindFramebuffer(Z.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Un=0;Un<qt;Un++)si&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Kt.get(R).__webglTexture,j,jt+Un),R.isDepthTexture?(se&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Kt.get(W).__webglTexture,j,Ue+Un),Z.blitFramebuffer(Yt,Qt,Mt,Ot,Pt,he,Mt,Ot,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):se?Z.copyTexSubImage3D(kt,j,Pt,he,Ue+Un,Yt,Qt,Mt,Ot):Z.copyTexSubImage2D(kt,j,Pt,he,Ue+Un,Yt,Qt,Mt,Ot);Ct.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else se?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(kt,j,Pt,he,Ue,Mt,Ot,qt,bn,be,He.data):W.isCompressedArrayTexture?Z.compressedTexSubImage3D(kt,j,Pt,he,Ue,Mt,Ot,qt,bn,He.data):Z.texSubImage3D(kt,j,Pt,he,Ue,Mt,Ot,qt,bn,be,He):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,j,Pt,he,Mt,Ot,bn,be,He.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,j,Pt,he,He.width,He.height,bn,He.data):Z.texSubImage2D(Z.TEXTURE_2D,j,Pt,he,Mt,Ot,bn,be,He);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Bn),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ee),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,sn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,jn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,on),j===0&&W.generateMipmaps&&Z.generateMipmap(kt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(R,W,nt=null,at=null,j=0){return R.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,at=arguments[1]||null,R=arguments[2],W=arguments[3],j=arguments[4]||0),il('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,nt,at,j)},this.initRenderTarget=function(R){Kt.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){V=0,O=0,F=null,Ct.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(n),a.unpackColorSpace=Ae._getUnpackColorSpace()}}class AR extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class Ex extends cl{static get type(){return"PointsMaterial"}constructor(n){super(),this.isPointsMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const H_=new Je,mp=new ox,ac=new vc,rc=new rt;class RR extends Wn{constructor(n=new Ea,a=new Ex){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,a){const s=this.geometry,u=this.matrixWorld,f=n.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ac.copy(s.boundingSphere),ac.applyMatrix4(u),ac.radius+=f,n.ray.intersectsSphere(ac)===!1)return;H_.copy(u).invert(),mp.copy(n.ray).applyMatrix4(H_);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,v=s.index,g=s.attributes.position;if(v!==null){const S=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=S,A=M;b<A;b++){const y=v.getX(b);rc.fromBufferAttribute(g,y),G_(rc,y,m,u,n,a,this)}}else{const S=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=S,A=M;b<A;b++)rc.fromBufferAttribute(g,b),G_(rc,b,m,u,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function G_(o,n,a,s,u,f,h){const d=mp.distanceSqToPoint(o);if(d<a){const m=new rt;mp.closestPointToPoint(o,m),m.applyMatrix4(s);const v=u.ray.origin.distanceTo(m);if(v<u.near||v>u.far)return;f.push({distance:v,distanceToRay:Math.sqrt(d),point:m,index:n,face:null,faceIndex:null,barycoord:null,object:h})}}class CR{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=V_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=V_();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}}function V_(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);const wR=`
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
`,DR=`
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
`,UR=({digDepth:o,epoch:n})=>{const a=un.useRef(null),s=un.useRef(o),u=un.useRef(n);return un.useEffect(()=>{s.current=o},[o]),un.useEffect(()=>{u.current=n},[n]),un.useEffect(()=>{const f=a.current;if(!f)return;const h=new AR,d=new _i(40,window.innerWidth/window.innerHeight,.1,100);d.position.set(0,0,10.6);const m=new bR({antialias:!0,alpha:!0,powerPreference:"high-performance"});m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.appendChild(m.domElement);const v={uTime:{value:0},uDigDepth:{value:s.current},uEpochMode:{value:0},uPointer:{value:new Pe(-3.2,-1.2)}},_=new hl(17.5,9.2,320,180),g=new Ma({vertexShader:wR,fragmentShader:DR,uniforms:v,transparent:!0,depthWrite:!0}),S=new Yi(_,g);h.add(S);const M=55,b=new Float32Array(M*3);for(let F=0;F<M;F++)b[F*3]=F/M*14-6.5,b[F*3+1]=-3.2+F%7*.45,b[F*3+2]=.6+F%5*.25;const A=new Ea;A.setAttribute("position",new Ui(b,3));const y=new Ex({color:16739108,size:.045,transparent:!0,opacity:.65}),x=new RR(A,y);h.add(x);const P=new Pe(-3.2,-1.2),z=F=>{const D=F.clientX/window.innerWidth*2-1,C=-(F.clientY/window.innerHeight)*2+1;P.set(D*7.8,C*4.2)};window.addEventListener("mousemove",z,{passive:!0});const U=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",U);let it=0;const V=new CR,O=()=>{it=requestAnimationFrame(O);const F=V.getElapsedTime();v.uTime.value=F,v.uDigDepth.value+=(s.current-v.uDigDepth.value)*.08;const D=u.current==="holocene"?0:u.current==="jurassic"?1:2;v.uEpochMode.value+=(D-v.uEpochMode.value)*.08,v.uPointer.value.lerp(P,.08),S.rotation.y=v.uPointer.value.x/7.8*.045,S.rotation.x=-(v.uPointer.value.y/4.2)*.035;const C=A.getAttribute("position");for(let I=0;I<M;I++){let ot=C.getY(I)+.004*(1+s.current*1.5);ot>1.2&&(ot=-3.6),C.setY(I,ot)}C.needsUpdate=!0,m.render(h,d)};return O(),()=>{cancelAnimationFrame(it),window.removeEventListener("mousemove",z),window.removeEventListener("resize",U),m.domElement&&f.contains(m.domElement)&&f.removeChild(m.domElement),_.dispose(),g.dispose(),A.dispose(),y.dispose(),m.dispose()}},[]),Et.jsx("div",{ref:a,className:"fixed inset-0 pointer-events-none z-10","aria-hidden":"true"})},NR=[{id:"alpine-humus",depthRange:"0 – 120 m",title:"Alpine Tundra & Basalt Outcrop",era:"Holocene Epoch",composition:"Bryophyte moss carpet, volcanic tuft, micro-flora",description:"Weathered sub-alpine volcanic shelves colonized by resilient olive mosses and high-altitude lavender wildflowers.",depthValue:0,epoch:"holocene"},{id:"metamorphic-schist",depthRange:"1.2 – 14 km",title:"Metamorphic Folding & Fossil Beds",era:"Jurassic – Paleozoic",composition:"Banded gneiss, compressed marine limestone, ash seams",description:"Ancient seabeds compressed under continental collision, preserving pelagic fossils alongside bands of volcanic ash.",depthValue:.48,epoch:"jurassic"},{id:"magma-conduit",depthRange:"18 – 45 km",title:"Lithospheric Fault & Magma Veins",era:"Hadean Deep Crust",composition:"Molten silicate intrusions, obsidian dikes, olivine mantle",description:"Incandescent magma arteries surging through deep tectonic fractures, radiating thermal energy across the lower crust.",depthValue:.95,epoch:"hadean"}],sc={Course:{subtitle:"Interactive Stratigraphy Curriculum",heading:"Read the Earth in Three Dimensions",summary:"Eight hands-on modules combining real-time 3D crustal cross-sections, thin-section petrography, and tectonic reconstruction.",items:[{title:"Module 01 — Sedimentary Chronicles",meta:"4.5 Hours • Interactive 3D Core",detail:"Trace marine transgressions, volcanic ashfall horizons, and unconformities."},{title:"Module 02 — Metamorphic Pressure & Heat",meta:"6.0 Hours • Shader Simulation",detail:"Observe foliation, fault shearing, and mineral recrystallization under tectonic stress."},{title:"Module 03 — Magmatic Intrusions & Veins",meta:"5.5 Hours • Thermal Mapping",detail:"Follow basaltic dikes and hydrothermal veins from mantle plumes to surface ridges."}]},"Field Guides":{subtitle:"Geospatial Expedition Atlases",heading:"Verified Field Sites & Outcrop Scans",summary:"High-resolution photogrammetric ridge models with millimeter-accurate mineral and fossil annotations.",items:[{title:"Icelandic Rift Basalt & Moss Escarpment",meta:"64.1466° N, 21.9426° W",detail:"Columnar flood basalts crowned by sub-arctic bryophytes and active fissure glow."},{title:"Dolomites Permian-Triassic Boundary",meta:"46.4102° N, 11.8440° E",detail:"Carbonate reef platforms interbedded with ancient volcanic tuff layers."},{title:"Hawaiian Shield Lava Tubes & Skylights",meta:"19.4069° N, 155.2834° W",detail:"Active pahoehoe crust channels with incandescent sub-surface magma conduits."}]},Geology:{subtitle:"Real-Time Crustal Slicer",heading:"Tectonic Ridge & Magma Telemetry",summary:"Inspect how surface alpine flora, folded metamorphic rock, and deep magmatic fractures coexist across vertical depth.",items:[{title:"Ridged Multifractal Relief",meta:"6-Octave Procedural Displacement",detail:"Simulates sharp obsidian and basalt cleavage planes with directional normal lighting."},{title:"Bioluminescent & Thermal Vein Mapping",meta:"Dynamic Shader Channels",detail:"Real-time molten silicate glow along lower tectonic overhangs and fault crevices."},{title:"Micro-Biome Cursor Illumination",meta:"Interactive Surface Probe",detail:"Move your cursor across the left slope to illuminate alpine moss and wildflowers."}]},Plans:{subtitle:"Access Tiers for Researchers & Studios",heading:"Explore Deep Time Without Limits",summary:"Choose a plan to unlock full-resolution LiDAR strata downloads, classroom licenses, and live guided tours.",items:[{title:"Field Explorer",meta:"$18 / month",detail:"Full interactive 3D crust maps, 40+ annotated outcrop guides, and depth slicing."},{title:"Academic & Research Lab",meta:"$49 / month",detail:"Raw DEM/mesh exports, custom stratigraphic column builder, and team seats."},{title:"Institution License",meta:"Custom Deployment",detail:"Unlimited university department access with dedicated WebGL shader workshops."}]},"Live Tour":{subtitle:"Guided Real-Time Geological Broadcasts",heading:"Walk the Fault Line with Structural Geologists",summary:"Join live multi-user 3D viewport sessions where geologists slice through active volcanic ridges and answer questions in real time.",items:[{title:"Sub-Crustal Magma Pathways",meta:"Daily Session • 18:00 UTC",detail:"Live cross-section tour of basaltic dike swarms and thermal vein networks."},{title:"Reading Alpine Unconformities",meta:"Weekly Workshop • Thursdays",detail:"How glacial erosion exposes 250-million-year-old seabed strata at high altitude."},{title:"Fossil Horizons in Deep Time",meta:"Interactive Q&A • Saturdays",detail:"Pinpointing mass-extinction markers and volcanic ash beds in 3D."}]}};function LR(){const[o,n]=un.useState(0),[a,s]=un.useState("holocene"),[u,f]=un.useState(!1),[h,d]=un.useState(null),[m,v]=un.useState(!1),[_,g]=un.useState(""),[S,M]=un.useState(!1),b=()=>{const A=o<.45?.55:o<.85?.95:0;n(A),s(A>.7?"hadean":A>.3?"jurassic":"holocene"),f(!0)};return Et.jsxs("div",{className:"relative min-h-screen w-full bg-black text-white overflow-hidden select-none",children:[Et.jsx(UR,{digDepth:o,epoch:a}),Et.jsxs("header",{className:"relative z-30 w-full px-6 sm:px-10 pt-5 pb-3 flex items-center justify-between",children:[Et.jsxs("button",{onClick:()=>{n(0),s("holocene"),f(!1),d(null)},className:"flex items-center gap-2.5 text-white focus:outline-none cursor-pointer group","aria-label":"Lithos Home",children:[Et.jsxs("svg",{width:"24",height:"22",viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform duration-300 group-hover:scale-105",children:[Et.jsx("path",{d:"M2 5.5L9.5 1.5L18.5 6.8L11 10.8L2 5.5Z",fill:"white"}),Et.jsx("path",{d:"M5.5 14.5L13 10.5L22 15.8L14.5 19.8L5.5 14.5Z",fill:"white"})]}),Et.jsx("span",{className:"font-editorial-serif italic text-[26px] sm:text-[28px] tracking-tight leading-none",children:"Lithos"})]}),Et.jsx("nav",{"aria-label":"Primary Navigation",className:"hidden lg:flex items-center gap-8 bg-[#1B1B1E]/90 border border-white/15 rounded-full px-8 py-3 text-[12px] font-medium text-white/85 backdrop-blur-md shadow-xl",children:["Course","Field Guides","Geology","Plans","Live Tour"].map(A=>Et.jsx("button",{onClick:()=>d(A),className:`transition hover:text-white cursor-pointer ${h===A?"text-[#D95B26] font-semibold":""}`,children:A},A))}),Et.jsxs("div",{className:"flex items-center gap-2.5",children:[Et.jsxs("button",{onClick:()=>f(A=>!A),className:"sm:inline-flex hidden items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white/85 px-3.5 py-2 rounded-full text-[11px] font-medium transition cursor-pointer",title:"Toggle Crustal Depth Slicer",children:[Et.jsx(MM,{className:"w-3 h-3 text-[#D95B26]"}),Et.jsxs("span",{children:["Depth: ",Math.round(o*45)," km"]})]}),Et.jsx("button",{onClick:()=>{M(!1),v(!0)},className:"bg-white hover:bg-neutral-200 text-black px-5 py-2.5 rounded-full text-xs font-semibold transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer",children:"Sign Up"})]})]}),Et.jsxs("main",{className:"relative z-20 flex flex-col justify-between min-h-[calc(100vh-84px)] px-6 sm:px-10 pb-8 sm:pb-10 pointer-events-none",children:[Et.jsx("div",{className:"w-full flex flex-col items-center text-center mt-5 sm:mt-8",children:Et.jsxs("h1",{className:"select-none",children:[Et.jsx("span",{className:"block font-editorial-serif italic font-normal text-6xl sm:text-[86px] md:text-[96px] tracking-[-0.01em] leading-[0.92] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]",children:"Layers hold"}),Et.jsx("span",{className:"block font-extrabold text-5xl sm:text-[78px] md:text-[86px] tracking-[-0.035em] leading-[0.95] text-white -mt-1 sm:-mt-2 drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)]",children:"tales of time"})]})}),Et.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-auto pt-48",children:[Et.jsx("div",{className:"max-w-[235px] pointer-events-auto",children:Et.jsx("p",{className:"text-[12px] text-white/80 leading-[1.52] font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]",children:"Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash, layered across millions of years beneath us."})}),Et.jsxs("div",{className:"max-w-[245px] pointer-events-auto self-end sm:self-auto",children:[Et.jsx("p",{className:"text-[12px] text-white/85 leading-[1.52] font-normal",children:"Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet."}),Et.jsx("button",{onClick:b,className:"mt-4 bg-[#D95B26] hover:bg-[#EA6830] active:bg-[#C44E1D] text-white px-7 py-3 rounded-full text-xs font-semibold shadow-[0_10px_30px_rgba(217,91,38,0.45)] transition transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer",children:"Start Digging"})]})]})]}),u&&Et.jsxs("aside",{className:"fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-3xl rounded-3xl bg-[#121215]/95 border border-white/15 p-5 sm:p-6 text-white shadow-2xl backdrop-blur-xl",children:[Et.jsxs("div",{className:"flex items-center justify-between gap-4 pb-3.5 border-b border-white/10",children:[Et.jsxs("div",{className:"flex items-center gap-2.5",children:[Et.jsx(xM,{className:"w-4 h-4 text-[#D95B26]"}),Et.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.15em] text-white/90",children:"Interactive Crustal Cross-Section Slicer"})]}),Et.jsxs("div",{className:"flex items-center gap-3",children:[Et.jsxs("span",{className:"text-[11px] text-[#D95B26] font-semibold",children:["Excavation Depth: ",(o*45).toFixed(1)," km"]}),Et.jsx("button",{onClick:()=>f(!1),"aria-label":"Close Strata Slicer",className:"w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer",children:Et.jsx(Qh,{className:"w-3.5 h-3.5"})})]})]}),Et.jsxs("div",{className:"mt-4 flex items-center gap-4",children:[Et.jsx("span",{className:"text-[11px] text-white/60 w-20",children:"Surface (0 km)"}),Et.jsx("input",{type:"range",min:0,max:1,step:.01,value:o,onChange:A=>{const y=parseFloat(A.target.value);n(y),y<.33?s("holocene"):y<.68?s("jurassic"):s("hadean")},className:"flex-1 accent-[#D95B26] cursor-pointer"}),Et.jsx("span",{className:"text-[11px] text-[#FF6B1A] w-24 text-right",children:"Mantle (45 km)"})]}),Et.jsx("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3",children:NR.map(A=>{const y=a===A.epoch;return Et.jsxs("button",{onClick:()=>{s(A.epoch),n(A.depthValue)},className:`text-left p-3.5 rounded-2xl border transition cursor-pointer ${y?"bg-[#D95B26]/15 border-[#D95B26] shadow-lg":"bg-white/5 border-white/10 hover:bg-white/10"}`,children:[Et.jsxs("div",{className:"flex items-center justify-between text-[10px] uppercase tracking-wider text-[#D95B26] font-semibold",children:[Et.jsx("span",{children:A.era}),Et.jsx("span",{children:A.depthRange})]}),Et.jsx("div",{className:"text-xs font-semibold text-white mt-1",children:A.title}),Et.jsx("p",{className:"text-[11px] text-white/65 mt-1 leading-relaxed",children:A.description})]},A.id)})})]}),h&&Et.jsx("div",{className:"fixed inset-0 z-50 bg-black/75 backdrop-blur-lg flex items-center justify-center p-4",children:Et.jsxs("div",{className:"w-full max-w-2xl rounded-3xl bg-[#141418] border border-white/15 p-6 sm:p-8 text-white shadow-2xl",children:[Et.jsxs("div",{className:"flex items-start justify-between gap-4 pb-4 border-b border-white/10",children:[Et.jsxs("div",{children:[Et.jsx("div",{className:"text-[11px] uppercase tracking-[0.18em] text-[#D95B26] font-semibold",children:sc[h].subtitle}),Et.jsx("h2",{className:"font-editorial-serif italic text-3xl sm:text-4xl text-white mt-1",children:sc[h].heading})]}),Et.jsx("button",{onClick:()=>d(null),"aria-label":"Close Modal",className:"w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer",children:Et.jsx(Qh,{className:"w-4 h-4"})})]}),Et.jsx("p",{className:"text-xs sm:text-sm text-white/75 mt-4 leading-relaxed",children:sc[h].summary}),Et.jsx("div",{className:"mt-5 space-y-3",children:sc[h].items.map(A=>Et.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[Et.jsxs("div",{children:[Et.jsx("div",{className:"text-xs font-semibold text-white",children:A.title}),Et.jsx("p",{className:"text-[11px] text-white/65 mt-1",children:A.detail})]}),Et.jsx("span",{className:"text-[11px] font-medium text-[#D95B26] shrink-0 bg-[#D95B26]/10 border border-[#D95B26]/30 px-3 py-1 rounded-full",children:A.meta})]},A.title))}),Et.jsxs("div",{className:"mt-6 flex items-center justify-between pt-4 border-t border-white/10",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-white/60",children:[Et.jsx(SM,{className:"w-3.5 h-3.5 text-[#D95B26]"}),Et.jsx("span",{children:"Real-time 3D WebGL Stratigraphy Engine"})]}),Et.jsx("button",{onClick:()=>{d(null),f(!0)},className:"bg-[#D95B26] hover:bg-[#EA6830] text-white px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer",children:"Launch 3D Crust Slicer"})]})]})}),m&&Et.jsx("div",{className:"fixed inset-0 z-50 bg-black/75 backdrop-blur-lg flex items-center justify-center p-4",children:Et.jsxs("div",{className:"w-full max-w-md rounded-3xl bg-[#141418] border border-white/15 p-6 sm:p-8 text-white shadow-2xl",children:[Et.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[Et.jsxs("div",{className:"flex items-center gap-2",children:[Et.jsx(yM,{className:"w-4 h-4 text-[#D95B26]"}),Et.jsx("h3",{className:"text-base font-semibold",children:"Join Lithos Geological Atlas"})]}),Et.jsx("button",{onClick:()=>v(!1),"aria-label":"Close Sign Up Modal",className:"w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer",children:Et.jsx(Qh,{className:"w-4 h-4"})})]}),S?Et.jsxs("div",{className:"py-6 text-center",children:[Et.jsx("div",{className:"w-11 h-11 rounded-full bg-[#D95B26]/20 border border-[#D95B26] text-[#D95B26] flex items-center justify-center mx-auto mb-3",children:Et.jsx(_M,{className:"w-5 h-5"})}),Et.jsx("div",{className:"text-sm font-semibold",children:"Field Pass Provisioned"}),Et.jsx("p",{className:"text-xs text-white/65 mt-1",children:"Your interactive 3D stratigraphic workspace is ready."}),Et.jsx("button",{onClick:()=>{v(!1),f(!0)},className:"mt-5 bg-[#D95B26] text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer",children:"Start Digging Now"})]}):Et.jsxs("form",{onSubmit:A=>{A.preventDefault(),_.trim().length>3&&M(!0)},className:"mt-4 space-y-4",children:[Et.jsx("p",{className:"text-xs text-white/70 leading-relaxed",children:"Create your researcher account to save custom 3D crustal cross sections, annotate fossil horizons, and join live geological tours."}),Et.jsxs("div",{children:[Et.jsx("label",{className:"block text-[11px] text-white/70 mb-1.5 font-medium",children:"Research or Personal Email"}),Et.jsx("input",{type:"email",required:!0,value:_,onChange:A=>g(A.target.value),placeholder:"geologist@university.edu",className:"w-full rounded-xl bg-black/60 border border-white/20 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D95B26]"})]}),Et.jsx("button",{type:"submit",className:"w-full bg-[#D95B26] hover:bg-[#EA6830] text-white py-3 rounded-full text-xs font-semibold transition cursor-pointer",children:"Create Free Atlas Account"})]})]})})]})}pM.createRoot(document.getElementById("root")).render(Et.jsx(un.StrictMode,{children:Et.jsx(LR,{})}));
