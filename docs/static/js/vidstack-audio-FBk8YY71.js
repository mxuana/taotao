var s=Object.defineProperty;var p=(t,i,r)=>i in t?s(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;var e=(t,i,r)=>p(t,typeof i!="symbol"?i+"":i,r);import{s as a}from"./index-Cz3wnC-L.js";import{H as d,a as u}from"./vidstack-CSv7rfHP-BlXpVrDI.js";import"./index-Cs3aolA2.js";import"./vue-DwQkaS4S.js";import"./element-B2K_PfVG.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./vidstack-DSYpsFWk-CI6S9pjo.js";class A extends d{constructor(r,o){super(r,o);e(this,"$$PROVIDER_TYPE","AUDIO");e(this,"airPlay");a(()=>{this.airPlay=new u(this.media,o)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.ctx.notify("provider-setup",this)}get audio(){return this.media}}export{A as AudioProvider};