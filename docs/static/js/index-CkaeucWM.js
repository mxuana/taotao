const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/404-CbGAwF9b.js","static/js/plugin-vueexport-helper-DlAUqK2U.js","static/js/element-BjNmfIZh.js","static/js/vue-wYnc_Ctr.js","static/css/404-BybA7w-n.css","static/js/index-CH02inUx.js","static/css/index-CJ3ftCcP.css","static/js/index-CChhbWzM.js","static/css/index-Bvl42sKH.css","static/js/index-xkKHo3kK.js","static/css/index-BytcxPtt.css"])))=>i.map(i=>d[i]);
import{c as j,n as re,g as ie,o as oe,u as L,b as Z,a as P,d as F,w as se,y as X,h as ae,j as B,Q as x,K as N,z as ue,F as V,a6 as le,a7 as ce,a4 as de,l as M,a8 as fe,J as I,U as pe,V as me,a0 as W,_ as ge,a9 as he,aa as ve,a3 as _e,ab as ye,ac as be}from"./vue-wYnc_Ctr.js";import{E as Se,a as we,b as Ee,c as Pe,d as Ce,e as Oe,f as Ne,g as Le,I as U}from"./element-BjNmfIZh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function ee(n){return ie()?(oe(n),!0):!1}function D(n){return typeof n=="function"?n():L(n)}const xe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Me=Object.prototype.toString,Ae=n=>Me.call(n)==="[object Object]",Te=()=>{};function ke(n){return Z()}function Ie(n,r=!0,t){ke()?j(n,t):r?n():re(n)}function Re(n){var r;const t=D(n);return(r=t==null?void 0:t.$el)!=null?r:t}const $=xe?window:void 0;function je(...n){let r,t,i,e;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,e]=n,r=$):[r,t,i,e]=n,!r)return Te;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const s=[],l=()=>{s.forEach(f=>f()),s.length=0},a=(f,p,v,E)=>(f.addEventListener(p,v,E),()=>f.removeEventListener(p,v,E)),c=F(()=>[Re(r),D(e)],([f,p])=>{if(l(),!f)return;const v=Ae(p)?{...p}:p;s.push(...t.flatMap(E=>i.map(o=>a(f,E,o,v))))},{immediate:!0,flush:"post"}),m=()=>{c(),l()};return ee(m),m}function Fe(){const n=P(!1),r=Z();return r&&j(()=>{n.value=!0},r),n}function De(n){const r=Fe();return X(()=>(r.value,!!n()))}function $e(n,r={}){const{window:t=$}=r,i=De(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let e;const s=P(!1),l=m=>{s.value=m.matches},a=()=>{e&&("removeEventListener"in e?e.removeEventListener("change",l):e.removeListener(l))},c=se(()=>{i.value&&(a(),e=t.matchMedia(D(n)),"addEventListener"in e?e.addEventListener("change",l):e.addListener(l),s.value=e.matches)});return ee(()=>{c(),a(),e=void 0}),s}function ze(n={}){const{window:r=$,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:e=!0,includeScrollbar:s=!0}=n,l=P(t),a=P(i),c=()=>{r&&(s?(l.value=r.innerWidth,a.value=r.innerHeight):(l.value=r.document.documentElement.clientWidth,a.value=r.document.documentElement.clientHeight))};if(c(),Ie(c),je("resize",c,{passive:!0}),e){const m=$e("(orientation: portrait)");F(m,()=>c())}return{width:l,height:a}}const Be=ae({__name:"App",setup(n){const r=P(!1),t=()=>r.value=!r.value,i=P(/Mobi|Android|iPhone/i.test(navigator.userAgent)),s=le().getRoutes(),l=ce(),a=X(()=>l),c=P(a.value.path),{width:m}=ze();return F(()=>m.value,()=>i.value=/Mobi|Android|iPhone/i.test(navigator.userAgent)),(f,p)=>{const v=Pe,E=Ce,o=Oe,u=Se,d=we,_=de("router-view"),b=Ee;return M(),B(V,null,[x(u,{modelValue:L(r),"onUpdate:modelValue":p[0]||(p[0]=y=>ue(r)?r.value=y:null),title:"Kuromia - 库洛米娅_",direction:"ltr",class:"menu-btn",size:L(i)?"80%":"30%","show-close":!1,"before-close":t},{default:N(()=>[x(o,{"default-active":L(c),router:"",onSelect:t},{default:N(()=>[(M(!0),B(V,null,fe(L(s).filter(y=>!y.meta.hidden),y=>(M(),I(E,{index:y.path},{default:N(()=>{var g;return[(g=y.meta)!=null&&g.icon?(M(),I(v,{key:0},{default:N(()=>[(M(),I(pe(y.meta.icon)))]),_:2},1024)):me("",!0),W(" "+ge(y.meta.title),1)]}),_:2},1032,["index"]))),256))]),_:1},8,["default-active"])]),_:1},8,["modelValue","size"]),x(d,{type:"primary",class:"menu-btn",round:"",plain:"",onClick:p[1]||(p[1]=y=>r.value=!L(r))},{default:N(()=>[W(" KUROMIA ")]),_:1}),x(b,{height:"100vh"},{default:N(()=>[x(_)]),_:1})],64)}}}),Ve="modulepreload",We=function(n){return"/origin-oxr/"+n},q={},A=function(r,t,i){let e=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));e=Promise.all(t.map(a=>{if(a=We(a),a in q)return;q[a]=!0;const c=a.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Ve,c||(f.as="script",f.crossOrigin=""),f.href=a,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((p,v)=>{f.addEventListener("load",p),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return e.then(()=>r()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})},Ue=[{path:"/",redirect:"/song-list",meta:{hidden:!0}},{path:"/404",component:()=>A(()=>import("./404-CbGAwF9b.js"),__vite__mapDeps([0,1,2,3,4])),meta:{hidden:!0}},{name:"Home",path:"/home",component:()=>A(()=>import("./index-CH02inUx.js").then(n=>n.W),__vite__mapDeps([5,2,3,1,6])),meta:{title:"按钮",icon:"Lollipop"}},{name:"SongList",path:"/song-list",component:()=>A(()=>import("./index-CChhbWzM.js"),__vite__mapDeps([7,2,3,1,8])),meta:{title:"歌单",icon:"Tickets"}},{name:"ChenZai",path:"/chenzai",component:()=>A(()=>import("./index-xkKHo3kK.js"),__vite__mapDeps([9,2,3,1,10])),meta:{title:"晨仔歌单",icon:"Tickets"}},{path:"/:pathMatch(.*)*",redirect:"/404",name:"ErrorPage",meta:{hidden:!0}}],T=he({history:ve("/origin-oxr/"),routes:Ue});var te={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(n,r){(function(t,i){n.exports=i()})(Ne,function(){var t={};t.version="0.2.0";var i=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(o){var u,d;for(u in o)d=o[u],d!==void 0&&o.hasOwnProperty(u)&&(i[u]=d);return this},t.status=null,t.set=function(o){var u=t.isStarted();o=e(o,i.minimum,1),t.status=o===1?null:o;var d=t.render(!u),_=d.querySelector(i.barSelector),b=i.speed,y=i.easing;return d.offsetWidth,a(function(g){i.positionUsing===""&&(i.positionUsing=t.getPositioningCSS()),c(_,l(o,b,y)),o===1?(c(d,{transition:"none",opacity:1}),d.offsetWidth,setTimeout(function(){c(d,{transition:"all "+b+"ms linear",opacity:0}),setTimeout(function(){t.remove(),g()},b)},b)):setTimeout(g,b)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var o=function(){setTimeout(function(){t.status&&(t.trickle(),o())},i.trickleSpeed)};return i.trickle&&o(),this},t.done=function(o){return!o&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(o){var u=t.status;return u?(typeof o!="number"&&(o=(1-u)*e(Math.random()*u,.1,.95)),u=e(u+o,0,.994),t.set(u)):t.start()},t.trickle=function(){return t.inc(Math.random()*i.trickleRate)},function(){var o=0,u=0;t.promise=function(d){return!d||d.state()==="resolved"?this:(u===0&&t.start(),o++,u++,d.always(function(){u--,u===0?(o=0,t.done()):t.set((o-u)/o)}),this)}}(),t.render=function(o){if(t.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var u=document.createElement("div");u.id="nprogress",u.innerHTML=i.template;var d=u.querySelector(i.barSelector),_=o?"-100":s(t.status||0),b=document.querySelector(i.parent),y;return c(d,{transition:"all 0 linear",transform:"translate3d("+_+"%,0,0)"}),i.showSpinner||(y=u.querySelector(i.spinnerSelector),y&&E(y)),b!=document.body&&f(b,"nprogress-custom-parent"),b.appendChild(u),u},t.remove=function(){p(document.documentElement,"nprogress-busy"),p(document.querySelector(i.parent),"nprogress-custom-parent");var o=document.getElementById("nprogress");o&&E(o)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var o=document.body.style,u="WebkitTransform"in o?"Webkit":"MozTransform"in o?"Moz":"msTransform"in o?"ms":"OTransform"in o?"O":"";return u+"Perspective"in o?"translate3d":u+"Transform"in o?"translate":"margin"};function e(o,u,d){return o<u?u:o>d?d:o}function s(o){return(-1+o)*100}function l(o,u,d){var _;return i.positionUsing==="translate3d"?_={transform:"translate3d("+s(o)+"%,0,0)"}:i.positionUsing==="translate"?_={transform:"translate("+s(o)+"%,0)"}:_={"margin-left":s(o)+"%"},_.transition="all "+u+"ms "+d,_}var a=function(){var o=[];function u(){var d=o.shift();d&&d(u)}return function(d){o.push(d),o.length==1&&u()}}(),c=function(){var o=["Webkit","O","Moz","ms"],u={};function d(g){return g.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(S,w){return w.toUpperCase()})}function _(g){var S=document.body.style;if(g in S)return g;for(var w=o.length,O=g.charAt(0).toUpperCase()+g.slice(1),C;w--;)if(C=o[w]+O,C in S)return C;return g}function b(g){return g=d(g),u[g]||(u[g]=_(g))}function y(g,S,w){S=b(S),g.style[S]=w}return function(g,S){var w=arguments,O,C;if(w.length==2)for(O in S)C=S[O],C!==void 0&&S.hasOwnProperty(O)&&y(g,O,C);else y(g,w[1],w[2])}}();function m(o,u){var d=typeof o=="string"?o:v(o);return d.indexOf(" "+u+" ")>=0}function f(o,u){var d=v(o),_=d+u;m(d,u)||(o.className=_.substring(1))}function p(o,u){var d=v(o),_;m(o,u)&&(_=d.replace(" "+u+" "," "),o.className=_.substring(1,_.length-1))}function v(o){return(" "+(o.className||"")+" ").replace(/\s+/gi," ")}function E(o){o&&o.parentNode&&o.parentNode.removeChild(o)}return t})})(te);var qe=te.exports;const z=Le(qe),H={title:"Kuromia",hasLogo:!0,theme:"light",themeEnums:{light:"#fff",dark:"#001529"}};z.configure({showSpinner:!1});const He=n=>n?`${n} - ${H.title}`:`${H.title}`;T.beforeEach((n,r,t)=>{document.title=He(n.meta.title||""),z.start(),t()});T.afterEach(()=>z.done());if(typeof window<"u"){let n=function(){var r=document.body,t=document.getElementById("__svg__icons__dom__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML="",r.insertBefore(t,r.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}function K(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);r&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,i)}return t}function R(n){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?K(Object(t),!0).forEach(function(i){Je(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ke(n,r){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Ge(n){var r=Ke(n,"string");return typeof r=="symbol"?r:String(r)}function Je(n,r,t){return(r=Ge(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}var h=function(n,r,t){Object.defineProperty(n,r,{configurable:!0,get:function(){return t},set:function(i){console.warn("tried to set frozen property ".concat(r," with ").concat(i))}})},G=function(n,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;Object.defineProperty(n,r,{configurable:!0,writable:!0,value:t})},Qe={abstract:!0,name:"VFragment",props:{name:{type:String,default:function(){return Math.floor(Date.now()*Math.random()).toString(16)}},html:{type:String,default:null}},setup:function(n,r){var t=P(null);j(function(){var e=t.value;if(e){var s=e.parentNode;e.__isFragment=!0,e.__isMounted=!1;var l=document.createComment("fragment#".concat(n.name,"#head")),a=document.createComment("fragment#".concat(n.name,"#tail"));e.__head=l,e.__tail=a;var c=document.createDocumentFragment();if(c.appendChild(l),Array.from(e.childNodes).forEach(function(p){var v=!p.hasOwnProperty("__isFragmentChild__");c.appendChild(p),v&&(h(p,"parentNode",e),h(p,"__isFragmentChild__",!0))}),c.appendChild(a),n.html){var m=document.createElement("template");m.innerHTML=n.html,Array.from(m.content.childNodes).forEach(function(p){c.appendChild(p)})}var f=e.nextSibling;s.insertBefore(c,e,!0),s.removeChild(e),h(e,"parentNode",s),h(e,"nextSibling",f),f&&h(f,"previousSibling",e),e.__isMounted=!0}});var i=r.slots.default();return i&&i.length&&i.forEach(function(e){return e.data=R(R({},e.data),{},{attrs:R({fragment:n.name},(e.data||{}).attrs)})}),function(){return[_e("div",{attrs:{fragment:n.name},ref:t},i)]}}},Ye={install:function(n){var r=window.Node.prototype.removeChild;window.Node.prototype.removeChild=function(e){if(!this.__isFragment){if(e.__isFragment&&e.__isMounted){for(;e.__head.nextSibling!==e.__tail;)r.call(this,e.__head.nextSibling);r.call(this,e.__head),r.call(this,e.__tail);var s=e.__head.previousSibling,l=e.__tail.nextSibling;return s&&h(s,"nextSibling",l),l&&h(l,"previousSibling",s),G(e,"parentNode"),e}var a=e.previousSibling,c=e.nextSibling,m=r.call(this,e);return a&&h(a,"nextSibling",c),c&&h(c,"previousSibling",a),m}if(this.parentNode){var f=this.parentNode.removeChild(e);return G(e,"parentNode"),f}};var t=window.Node.prototype.insertBefore;window.Node.prototype.insertBefore=function(e,s){var l=arguments.length>2&&arguments[2]!==void 0&&arguments[2],a=s&&s.__isFragment&&s.__isMounted?s.__head:s;if(this.__isFragment){var c=!e.hasOwnProperty("__isFragmentChild__"),m=!l||c;c&&h(e,"__isFragmentChild__",!0);var f=this.parentNode?this.parentNode.insertBefore(e,s):t.call(this,e,a);return m&&h(e,"parentNode",this),f}if(e.__isFragment&&e.__isMounted){if(e===s)return void console.error("something must be wrong");h(e,"parentNode",this),e.previousSibling&&h(e.previousSibling,"nextSibling",e.nextSibling),e.nextSibling&&h(e.nextSibling,"previousSibling",e.previousSibling),h(e,"nextSibling",s),h(e,"previousSibling",s.previousSibling),s.previousSibling&&h(s.previousSibling,"nextSibling",e),h(s,"previousSibling",e);for(var p=document.createDocumentFragment(),v=e.__head;v!==e.__tail;)p.appendChild(v),v=v.nextSibling;return p.appendChild(e.__tail),t.call(this,p,a),e}return t.call(this,e,a)};var i=window.Node.prototype.appendChild;window.Node.prototype.appendChild=function(e){var s=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!this.__isFragment)return i.call(this,e);if(this.parentNode){var l=!e.hasOwnProperty("__isFragmentChild__"),a=!s||l;l&&h(e,"__isFragmentChild__",!0);var c=this.parentNode.insertBefore(e,this.__tail,s);return a&&h(e,"parentNode",this),c}},n.component("VFragment",Qe)}};function Ze(n){return typeof n=="object"&&n!==null}function J(n,r){return n=Ze(n)?n:Object.create(null),new Proxy(n,{get(t,i,e){return i==="key"?Reflect.get(t,i,e):Reflect.get(t,i,e)||Reflect.get(r,i,e)}})}function Xe(n,r){return r.reduce((t,i)=>t==null?void 0:t[i],n)}function et(n,r,t){return r.slice(0,-1).reduce((i,e)=>/^(__proto__)$/.test(e)?{}:i[e]=i[e]||{},n)[r[r.length-1]]=t,n}function tt(n,r){return r.reduce((t,i)=>{const e=i.split(".");return et(t,e,Xe(n,e))},{})}function nt(n,r){return t=>{var i;try{const{storage:e=localStorage,beforeRestore:s=void 0,afterRestore:l=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:c=r.$id,paths:m=null,debug:f=!1}=t;return{storage:e,beforeRestore:s,afterRestore:l,serializer:a,key:((i=n.key)!=null?i:p=>p)(typeof c=="string"?c:c(r.$id)),paths:m,debug:f}}catch(e){return t.debug&&console.error("[pinia-plugin-persistedstate]",e),null}}}function Q(n,{storage:r,serializer:t,key:i,debug:e}){try{const s=r==null?void 0:r.getItem(i);s&&n.$patch(t==null?void 0:t.deserialize(s))}catch(s){e&&console.error("[pinia-plugin-persistedstate]",s)}}function Y(n,{storage:r,serializer:t,key:i,paths:e,debug:s}){try{const l=Array.isArray(e)?tt(n,e):n;r.setItem(i,t.serialize(l))}catch(l){s&&console.error("[pinia-plugin-persistedstate]",l)}}function rt(n={}){return r=>{const{auto:t=!1}=n,{options:{persist:i=t},store:e,pinia:s}=r;if(!i)return;if(!(e.$id in s.state.value)){const a=s._s.get(e.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const l=(Array.isArray(i)?i.map(a=>J(a,n)):[J(i,n)]).map(nt(n,e)).filter(Boolean);e.$persist=()=>{l.forEach(a=>{Y(e.$state,a)})},e.$hydrate=({runHooks:a=!0}={})=>{l.forEach(c=>{const{beforeRestore:m,afterRestore:f}=c;a&&(m==null||m(r)),Q(e,c),a&&(f==null||f(r))})},l.forEach(a=>{const{beforeRestore:c,afterRestore:m}=a;c==null||c(r),Q(e,a),m==null||m(r),e.$subscribe((f,p)=>{Y(p,a)},{detached:!0})})}}var it=rt();const ne=ye();ne.use(it);const k=be(Be);k.use(ne).use(T);k.use(Ye);T.isReady().then(()=>k.mount("#app"));for(const n in U)k.component(n,U[n]);export{A as _,ze as u};