(()=>{"use strict";var e={1619:(e,t,r)=>{r(7280),r(5363),r(71);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const l=s;var u=r(4767),c=r(7083),d=r(9582);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(97)]).then(r.bind(r,9097)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(780)]).then(r.bind(r,780))},{path:"department",component:()=>Promise.all([r.e(736),r.e(367)]).then(r.bind(r,4367))},{path:"mentors",component:()=>Promise.all([r.e(736),r.e(868)]).then(r.bind(r,4868))},{path:"index",component:()=>Promise.all([r.e(736),r.e(780)]).then(r.bind(r,780))},{path:"login",component:()=>Promise.all([r.e(736),r.e(53)]).then(r.bind(r,8053))},{path:"register",component:()=>Promise.all([r.e(736),r.e(870)]).then(r.bind(r,9870))},{path:"questions",component:()=>Promise.all([r.e(736),r.e(749)]).then(r.bind(r,7749))},{path:"profile",component:()=>Promise.all([r.e(736),r.e(127)]).then(r.bind(r,127)),meta:{requiresAuth:!0}},{path:"admin",component:()=>Promise.all([r.e(736),r.e(168)]).then(r.bind(r,5168)),meta:{requiresAuth:!0,isAdmin:!0},children:[{path:"",component:()=>Promise.all([r.e(736),r.e(808)]).then(r.bind(r,5808))},{path:"questions",component:()=>Promise.all([r.e(736),r.e(727)]).then(r.bind(r,5727))},{path:"user",component:()=>Promise.all([r.e(736),r.e(427)]).then(r.bind(r,427))},{path:"interview",component:()=>r.e(713).then(r.bind(r,7713))},{path:"interview-queue",component:()=>Promise.all([r.e(736),r.e(481)]).then(r.bind(r,5481))},{path:"group",component:()=>Promise.all([r.e(736),r.e(634)]).then(r.bind(r,2634))}]}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(726)]).then(r.bind(r,6726))}],p=m,h=(0,c.BC)((function(){const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("/")});return t.beforeEach(((e,t,r)=>{e.matched.some((e=>e.meta.requiresAuth))&&e.meta.requiresAuth&&"true"!==localStorage.getItem("login")?r({path:"/login",query:{redirect:e.fullPath}}):r()})),t.beforeEach(((e,t,r)=>{e.matched.some((e=>e.meta.requiresAdmin))&&e.meta.requiresAdmin&&"true"!==localStorage.getItem("admin")?r({path:"/",query:{redirect:e.fullPath}}):r()})),t}));async function f(e,t){const n="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,4767)),i="function"===typeof h?await h({store:n}):h;n.$router=i;const s=e(l);return s.use(o.Z,t),{app:s,store:n,storeKey:a,router:i}}var b=r(4434);const v={config:{},plugins:{Notify:b.Z}},g="/";async function y({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:g})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}f(n.ri,v).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1768)),Promise.resolve().then(r.bind(r,2062))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,r)}))))},1768:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,api:()=>i});var n=r(7083),o=r(52),a=r.n(o);const i=a().create(),s=(0,n.xr)((({app:e})=>{i.interceptors.request.use((e=>{var t;const r=null===(t=localStorage.getItem("token"))||void 0===t?void 0:t.toString();return r&&(e.headers={Authorization:r?"Bearer "+r:""}),e}),(e=>Promise.reject(e))),i.interceptors.response.use((e=>{1!==e.data.code&&2!==e.data.code||localStorage.removeItem("token");const t=e.headers;return console.log(t),t["new-token"]&&localStorage.setItem("token",t["new-token"]),e}),(e=>Promise.reject(e))),e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2062:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(7083),o=r(7886);const a=(0,n.xr)((({app:e})=>{e.use(o.VueReCaptcha,{siteKey:"6Lc7o1ocAAAAAKUxmRgGoPfNZwkSFMD2WDQk5AwZ",useRecaptchaNet:!0})}))},4767:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b,storeKey:()=>f,useStore:()=>v});var n=r(7083),o=r(7874);function a(){return{user_id:0,name:"",authorized:!1,admin:!1,token:""}}const i=a,s={},l=s,u={userId(e){return e.user_id},name(e){return e.name},authenticated(e){return e.authorized},admin(e){return e.admin},token(e){return e.token}},c=u,d={setUserId(e,t){e.user_id=t},setName(e,t){e.name=t},setAuthenticated(e,t){e.authorized=t},setAdmin(e,t){e.admin=t},setToken(e,t){e.token=t}},m=d,p={namespaced:!0,actions:l,getters:c,mutations:m,state:i},h=p,f=Symbol("vuex-key"),b=(0,n.h)((function(){return(0,o.MT)({modules:{account:h},strict:!1})}));function v(){return(0,o.oR)(f)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{53:"c610cbb4",97:"00092ca5",127:"8f0be20a",168:"d2e7aaf6",367:"2ed9a15d",427:"09ffd299",481:"83688e20",634:"7a724d28",713:"62eb2603",726:"64e988cc",727:"eed35a02",749:"cf55c489",780:"f788d318",808:"e6724a53",868:"c23fcb5f",870:"33816796"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{97:"ec3b7333",143:"9cc7a115",168:"c2d2441b",367:"e1c87f41",736:"45b96d46",749:"752db845",780:"0862a98f",868:"a1089675"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="msc-recruitment:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var m=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={97:1,168:1,367:1,749:1,780:1,868:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var c=l(r)}for(t&&t(n);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return r.O(c)},n=self["webpackChunkmsc_recruitment"]=self["webpackChunkmsc_recruitment"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(1619)));n=r.O(n)})();