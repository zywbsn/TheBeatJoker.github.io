import{d as b,o as T,r as p,c as R,a as v,b as E,e as P,f as L,g as x,h as f,t as C,u as g,i as s,w as n,F as V,l as j,m as B,j as F,s as M,k as S,n as A,p as U,q as H,v as q,x as z}from"./.store-SjO6jW5A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))_(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const e of o.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&_(e)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const I=b({__name:"App",setup(a){return T(()=>{console.log("...")}),(r,c)=>{const _=p("RouterView");return v(),R(_)}}}),D="modulepreload",G=function(a){return"/"+a},w={},W=function(r,c,_){let t=Promise.resolve();if(c&&c.length>0){const o=document.getElementsByTagName("link");t=Promise.all(c.map(e=>{if(e=G(e),e in w)return;w[e]=!0;const d=e.endsWith(".css"),l=d?'[rel="stylesheet"]':"";if(!!_)for(let m=o.length-1;m>=0;m--){const h=o[m];if(h.href===e&&(!d||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${l}`))return;const i=document.createElement("link");if(i.rel=d?"stylesheet":D,d||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),d)return new Promise((m,h)=>{i.addEventListener("load",m),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})}))}return t.then(()=>r()).catch(o=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o})},K=E("counter",()=>{const a=P(0),r=L(()=>a.value*2);function c(){a.value++}return{count:a,doubleCount:r,increment:c}}),J=E("theme",()=>{const a=e=>{const d=e.replace("#","").match(/../g),l=[];for(let u=0;u<3;u++)l[u]=parseInt(d[u],16);return l},r=(e,d,l)=>{const u=[e.toString(16),d.toString(16),l.toString(16)];for(let m=0;m<3;m++)u[m].length===1&&(u[m]="0"+u[m]);return"#"+u.join("")},c=(e,d)=>{const l=a(e);for(let i=0;i<3;i++)l[i]=Math.floor((255-l[i])*d+l[i]);return r(l[0],l[1],l[2])},_=(e,d)=>{const l=a(e);for(let i=0;i<3;i++)l[i]=Math.floor(l[i]*(1-d));return r(l[0],l[1],l[2])},t=(e,d,l=document.documentElement)=>{l.style.setProperty(e,d)};return{hex2Rgb:a,rgb2Hex:r,lighten:c,darken:_,setThemeColor:e=>{t("--el-color-primary",e),t("--el-color-primary-light-9",_(e,.9)),t("--el-color-primary-light-3",c(e,.3))}}}),Q={class:"bg-red-100"},X=b({__name:"index",setup(a){const r=K(),c=J();return T(()=>{console.log("home")}),(_,t)=>{const o=p("el-button");return v(),x("div",Q,[f(" Home:"+C(g(r).count)+" doubleCount:"+C(g(r).doubleCount)+" ",1),s(o,{onClick:g(r).increment,type:"primary"},{default:n(()=>[f("++")]),_:1},8,["onClick"]),s(o,{onClick:t[0]||(t[0]=e=>g(c).setThemeColor("#56AB2F")),type:"primary"},{default:n(()=>[f(" SET #56AB2F ")]),_:1}),s(o,{onClick:t[1]||(t[1]=e=>g(c).setThemeColor("#ff0000")),type:"primary"},{default:n(()=>[f(" SET #FF0000 ")]),_:1})])}}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),Z=S("span",null,"Navigator One",-1),ee=S("span",null,"Group One",-1),te=S("span",null,"item four",-1),oe=b({__name:"index",setup(a){const r=P(!0),c=(t,o)=>{console.log(t,o)},_=(t,o)=>{console.log(t,o)};return(t,o)=>{const e=p("el-radio-button"),d=p("el-radio-group"),l=p("el-icon"),u=p("el-menu-item"),i=p("el-menu-item-group"),m=p("el-sub-menu"),h=p("el-menu");return v(),x(V,null,[s(d,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=N=>r.value=N),style:{"margin-bottom":"20px"}},{default:n(()=>[s(e,{label:!1},{default:n(()=>[f("expand")]),_:1}),s(e,{label:!0},{default:n(()=>[f("collapse")]),_:1})]),_:1},8,["modelValue"]),s(h,{"default-active":"2",class:"el-menu-vertical-demo",collapse:r.value,onOpen:c,onClose:_},{default:n(()=>[s(m,{index:"1"},{title:n(()=>[s(l,null,{default:n(()=>[s(g(j))]),_:1}),Z]),default:n(()=>[s(i,null,{title:n(()=>[ee]),default:n(()=>[s(u,{index:"1-1"},{default:n(()=>[f("item one")]),_:1}),s(u,{index:"1-2"},{default:n(()=>[f("item two")]),_:1})]),_:1}),s(i,{title:"Group Two"},{default:n(()=>[s(u,{index:"1-3"},{default:n(()=>[f("item three")]),_:1})]),_:1}),s(m,{index:"1-4"},{title:n(()=>[te]),default:n(()=>[s(u,{index:"1-4-1"},{default:n(()=>[f("item one")]),_:1})]),_:1})]),_:1}),s(u,{index:"2"},{title:n(()=>[f("Navigator Two")]),default:n(()=>[s(l,null,{default:n(()=>[s(g(B))]),_:1})]),_:1}),s(u,{index:"3",disabled:""},{title:n(()=>[f("Navigator Three")]),default:n(()=>[s(l,null,{default:n(()=>[s(g(F))]),_:1})]),_:1}),s(u,{index:"4"},{title:n(()=>[f("Navigator Four")]),default:n(()=>[s(l,null,{default:n(()=>[s(g(M))]),_:1})]),_:1})]),_:1},8,["collapse"])],64)}}}),ne=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),re=(a,r)=>{const c=a.__vccOpts||a;for(const[_,t]of r)c[_]=t;return c},le={name:"index.vue"},se={class:"bg-slate-100 w-full h-full"};function ce(a,r,c,_,t,o){return v(),x("div",se,"User")}const ie=re(le,[["render",ce]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),O=Object.assign({"../views/Home/index.vue":Y,"../views/System/Menu/index.vue":ne,"../views/System/User/index.vue":ae}),$=[];for(const a in O){const r=a.replace("../views","").replace("/index.vue",""),c={name:r.replaceAll("/","-").replace("-",""),path:r,component:O[a].default};$.push(c)}const k=[{path:"/",component:()=>W(()=>import("./index-0Vxk1UG0.js"),__vite__mapDeps([0,1,2])),children:$}];console.log("routes",k);const ue=A({history:U("/"),routes:k}),y=H(I);y.use(q);y.use(z());y.use(ue);y.mount("#app");
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0Vxk1UG0.js","assets/.store-SjO6jW5A.js","assets/.store-cNm7AoyW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}