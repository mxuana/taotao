const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/404-DkY8rtOO.js","static/element-D4Jv_To6.js","static/vue-CkUNVx_6.js","static/404--rs9_9FX.css","static/index-B_e5Srm9.js","static/index-Bg_mewur.css","static/index-D4WvlTlv.js","static/index-Bcj7TtDm.css"])))=>i.map(i=>d[i]);
import{n as z,G as U,o as q,H as W,I as V,r as H,J as K,K as J,L as G,M as Q}from"./vue-CkUNVx_6.js";import{c as X,g as Y,I as j}from"./element-D4Jv_To6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const Z=(r,o)=>{const t=r.__vccOpts||r;for(const[n,e]of o)t[n]=e;return t},ee={};function te(r,o){const t=U("router-view");return q(),z(t)}const re=Z(ee,[["render",te]]),ne="modulepreload",ie=function(r){return"/origin-oxr/"+r},k={},N=function(o,t,n){let e=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));e=Promise.all(t.map(u=>{if(u=ie(u),u in k)return;k[u]=!0;const c=u.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ne,c||(f.as="script",f.crossOrigin=""),f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((h,_)=>{f.addEventListener("load",h),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}return e.then(()=>o()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})},oe=[{path:"/",redirect:"/song-list",meta:{hidden:!0}},{path:"/404",component:()=>N(()=>import("./404-DkY8rtOO.js"),__vite__mapDeps([0,1,2,3])),meta:{hidden:!0}},{name:"Home",path:"/home",component:()=>N(()=>import("./index-B_e5Srm9.js"),__vite__mapDeps([4,2,1,5])),meta:{title:"首页",svg:"shou_ye",color:"#2d8cf0"}},{name:"SongList",path:"/song-list",component:()=>N(()=>import("./index-D4WvlTlv.js"),__vite__mapDeps([6,2,1,7])),meta:{title:"歌单",svg:"shou_ye",color:"#2d8cf0"}},{path:"/:pathMatch(.*)*",redirect:"/404",name:"ErrorPage",meta:{hidden:!0}}],E=W({history:V("/origin-oxr/"),routes:oe});var D={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(r,o){(function(t,n){r.exports=n()})(X,function(){var t={};t.version="0.2.0";var n=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(i){var a,d;for(a in i)d=i[a],d!==void 0&&i.hasOwnProperty(a)&&(n[a]=d);return this},t.status=null,t.set=function(i){var a=t.isStarted();i=e(i,n.minimum,1),t.status=i===1?null:i;var d=t.render(!a),v=d.querySelector(n.barSelector),y=n.speed,w=n.easing;return d.offsetWidth,u(function(p){n.positionUsing===""&&(n.positionUsing=t.getPositioningCSS()),c(v,l(i,y,w)),i===1?(c(d,{transition:"none",opacity:1}),d.offsetWidth,setTimeout(function(){c(d,{transition:"all "+y+"ms linear",opacity:0}),setTimeout(function(){t.remove(),p()},y)},y)):setTimeout(p,y)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var i=function(){setTimeout(function(){t.status&&(t.trickle(),i())},n.trickleSpeed)};return n.trickle&&i(),this},t.done=function(i){return!i&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(i){var a=t.status;return a?(typeof i!="number"&&(i=(1-a)*e(Math.random()*a,.1,.95)),a=e(a+i,0,.994),t.set(a)):t.start()},t.trickle=function(){return t.inc(Math.random()*n.trickleRate)},function(){var i=0,a=0;t.promise=function(d){return!d||d.state()==="resolved"?this:(a===0&&t.start(),i++,a++,d.always(function(){a--,a===0?(i=0,t.done()):t.set((i-a)/i)}),this)}}(),t.render=function(i){if(t.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var a=document.createElement("div");a.id="nprogress",a.innerHTML=n.template;var d=a.querySelector(n.barSelector),v=i?"-100":s(t.status||0),y=document.querySelector(n.parent),w;return c(d,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),n.showSpinner||(w=a.querySelector(n.spinnerSelector),w&&R(w)),y!=document.body&&f(y,"nprogress-custom-parent"),y.appendChild(a),a},t.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(n.parent),"nprogress-custom-parent");var i=document.getElementById("nprogress");i&&R(i)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var i=document.body.style,a="WebkitTransform"in i?"Webkit":"MozTransform"in i?"Moz":"msTransform"in i?"ms":"OTransform"in i?"O":"";return a+"Perspective"in i?"translate3d":a+"Transform"in i?"translate":"margin"};function e(i,a,d){return i<a?a:i>d?d:i}function s(i){return(-1+i)*100}function l(i,a,d){var v;return n.positionUsing==="translate3d"?v={transform:"translate3d("+s(i)+"%,0,0)"}:n.positionUsing==="translate"?v={transform:"translate("+s(i)+"%,0)"}:v={"margin-left":s(i)+"%"},v.transition="all "+a+"ms "+d,v}var u=function(){var i=[];function a(){var d=i.shift();d&&d(a)}return function(d){i.push(d),i.length==1&&a()}}(),c=function(){var i=["Webkit","O","Moz","ms"],a={};function d(p){return p.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(b,S){return S.toUpperCase()})}function v(p){var b=document.body.style;if(p in b)return p;for(var S=i.length,O=p.charAt(0).toUpperCase()+p.slice(1),P;S--;)if(P=i[S]+O,P in b)return P;return p}function y(p){return p=d(p),a[p]||(a[p]=v(p))}function w(p,b,S){b=y(b),p.style[b]=S}return function(p,b){var S=arguments,O,P;if(S.length==2)for(O in b)P=b[O],P!==void 0&&b.hasOwnProperty(O)&&w(p,O,P);else w(p,S[1],S[2])}}();function g(i,a){var d=typeof i=="string"?i:_(i);return d.indexOf(" "+a+" ")>=0}function f(i,a){var d=_(i),v=d+a;g(d,a)||(i.className=v.substring(1))}function h(i,a){var d=_(i),v;g(i,a)&&(v=d.replace(" "+a+" "," "),i.className=v.substring(1,v.length-1))}function _(i){return(" "+(i.className||"")+" ").replace(/\s+/gi," ")}function R(i){i&&i.parentNode&&i.parentNode.removeChild(i)}return t})})(D);var se=D.exports;const L=Y(se),F={title:"Kuromia",hasLogo:!0,theme:"light",themeEnums:{light:"#fff",dark:"#001529"}};L.configure({showSpinner:!1});const ae=r=>r?`${r} - ${F.title}`:`${F.title}`;E.beforeEach((r,o,t)=>{console.log("🚀 ~ router.beforeEach ~ to:",r),document.title=ae(r.meta.title||""),L.start(),t()});E.afterEach(()=>L.done());if(typeof window<"u"){let r=function(){var o=document.body,t=document.getElementById("__svg__icons__dom__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML="",o.insertBefore(t,o.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()}function A(r,o){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);o&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function x(r){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?A(Object(t),!0).forEach(function(n){ce(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function ue(r,o){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,o||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function le(r){var o=ue(r,"string");return typeof o=="symbol"?o:String(o)}function ce(r,o,t){return(o=le(o))in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}var m=function(r,o,t){Object.defineProperty(r,o,{configurable:!0,get:function(){return t},set:function(n){console.warn("tried to set frozen property ".concat(o," with ").concat(n))}})},M=function(r,o){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;Object.defineProperty(r,o,{configurable:!0,writable:!0,value:t})},de={abstract:!0,name:"VFragment",props:{name:{type:String,default:function(){return Math.floor(Date.now()*Math.random()).toString(16)}},html:{type:String,default:null}},setup:function(r,o){var t=H(null);K(function(){var e=t.value;if(e){var s=e.parentNode;e.__isFragment=!0,e.__isMounted=!1;var l=document.createComment("fragment#".concat(r.name,"#head")),u=document.createComment("fragment#".concat(r.name,"#tail"));e.__head=l,e.__tail=u;var c=document.createDocumentFragment();if(c.appendChild(l),Array.from(e.childNodes).forEach(function(h){var _=!h.hasOwnProperty("__isFragmentChild__");c.appendChild(h),_&&(m(h,"parentNode",e),m(h,"__isFragmentChild__",!0))}),c.appendChild(u),r.html){var g=document.createElement("template");g.innerHTML=r.html,Array.from(g.content.childNodes).forEach(function(h){c.appendChild(h)})}var f=e.nextSibling;s.insertBefore(c,e,!0),s.removeChild(e),m(e,"parentNode",s),m(e,"nextSibling",f),f&&m(f,"previousSibling",e),e.__isMounted=!0}});var n=o.slots.default();return n&&n.length&&n.forEach(function(e){return e.data=x(x({},e.data),{},{attrs:x({fragment:r.name},(e.data||{}).attrs)})}),function(){return[J("div",{attrs:{fragment:r.name},ref:t},n)]}}},fe={install:function(r){var o=window.Node.prototype.removeChild;window.Node.prototype.removeChild=function(e){if(!this.__isFragment){if(e.__isFragment&&e.__isMounted){for(;e.__head.nextSibling!==e.__tail;)o.call(this,e.__head.nextSibling);o.call(this,e.__head),o.call(this,e.__tail);var s=e.__head.previousSibling,l=e.__tail.nextSibling;return s&&m(s,"nextSibling",l),l&&m(l,"previousSibling",s),M(e,"parentNode"),e}var u=e.previousSibling,c=e.nextSibling,g=o.call(this,e);return u&&m(u,"nextSibling",c),c&&m(c,"previousSibling",u),g}if(this.parentNode){var f=this.parentNode.removeChild(e);return M(e,"parentNode"),f}};var t=window.Node.prototype.insertBefore;window.Node.prototype.insertBefore=function(e,s){var l=arguments.length>2&&arguments[2]!==void 0&&arguments[2],u=s&&s.__isFragment&&s.__isMounted?s.__head:s;if(this.__isFragment){var c=!e.hasOwnProperty("__isFragmentChild__"),g=!l||c;c&&m(e,"__isFragmentChild__",!0);var f=this.parentNode?this.parentNode.insertBefore(e,s):t.call(this,e,u);return g&&m(e,"parentNode",this),f}if(e.__isFragment&&e.__isMounted){if(e===s)return void console.error("something must be wrong");m(e,"parentNode",this),e.previousSibling&&m(e.previousSibling,"nextSibling",e.nextSibling),e.nextSibling&&m(e.nextSibling,"previousSibling",e.previousSibling),m(e,"nextSibling",s),m(e,"previousSibling",s.previousSibling),s.previousSibling&&m(s.previousSibling,"nextSibling",e),m(s,"previousSibling",e);for(var h=document.createDocumentFragment(),_=e.__head;_!==e.__tail;)h.appendChild(_),_=_.nextSibling;return h.appendChild(e.__tail),t.call(this,h,u),e}return t.call(this,e,u)};var n=window.Node.prototype.appendChild;window.Node.prototype.appendChild=function(e){var s=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!this.__isFragment)return n.call(this,e);if(this.parentNode){var l=!e.hasOwnProperty("__isFragmentChild__"),u=!s||l;l&&m(e,"__isFragmentChild__",!0);var c=this.parentNode.insertBefore(e,this.__tail,s);return u&&m(e,"parentNode",this),c}},r.component("VFragment",de)}};function pe(r){return typeof r=="object"&&r!==null}function T(r,o){return r=pe(r)?r:Object.create(null),new Proxy(r,{get(t,n,e){return n==="key"?Reflect.get(t,n,e):Reflect.get(t,n,e)||Reflect.get(o,n,e)}})}function me(r,o){return o.reduce((t,n)=>t==null?void 0:t[n],r)}function ge(r,o,t){return o.slice(0,-1).reduce((n,e)=>/^(__proto__)$/.test(e)?{}:n[e]=n[e]||{},r)[o[o.length-1]]=t,r}function he(r,o){return o.reduce((t,n)=>{const e=n.split(".");return ge(t,e,me(r,e))},{})}function ve(r,o){return t=>{var n;try{const{storage:e=localStorage,beforeRestore:s=void 0,afterRestore:l=void 0,serializer:u={serialize:JSON.stringify,deserialize:JSON.parse},key:c=o.$id,paths:g=null,debug:f=!1}=t;return{storage:e,beforeRestore:s,afterRestore:l,serializer:u,key:((n=r.key)!=null?n:h=>h)(typeof c=="string"?c:c(o.$id)),paths:g,debug:f}}catch(e){return t.debug&&console.error("[pinia-plugin-persistedstate]",e),null}}}function B(r,{storage:o,serializer:t,key:n,debug:e}){try{const s=o==null?void 0:o.getItem(n);s&&r.$patch(t==null?void 0:t.deserialize(s))}catch(s){e&&console.error("[pinia-plugin-persistedstate]",s)}}function $(r,{storage:o,serializer:t,key:n,paths:e,debug:s}){try{const l=Array.isArray(e)?he(r,e):r;o.setItem(n,t.serialize(l))}catch(l){s&&console.error("[pinia-plugin-persistedstate]",l)}}function _e(r={}){return o=>{const{auto:t=!1}=r,{options:{persist:n=t},store:e,pinia:s}=o;if(!n)return;if(!(e.$id in s.state.value)){const u=s._s.get(e.$id.replace("__hot:",""));u&&Promise.resolve().then(()=>u.$persist());return}const l=(Array.isArray(n)?n.map(u=>T(u,r)):[T(n,r)]).map(ve(r,e)).filter(Boolean);e.$persist=()=>{l.forEach(u=>{$(e.$state,u)})},e.$hydrate=({runHooks:u=!0}={})=>{l.forEach(c=>{const{beforeRestore:g,afterRestore:f}=c;u&&(g==null||g(o)),B(e,c),u&&(f==null||f(o))})},l.forEach(u=>{const{beforeRestore:c,afterRestore:g}=u;c==null||c(o),B(e,u),g==null||g(o),e.$subscribe((f,h)=>{$(h,u)},{detached:!0})})}}var ye=_e();const I=G();I.use(ye);const C=Q(re);C.use(I).use(E);C.use(fe);E.isReady().then(()=>C.mount("#app"));for(const r in j)C.component(r,j[r]);export{Z as _};
