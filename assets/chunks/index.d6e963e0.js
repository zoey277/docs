import{n as $,a as k,q as c,s as i,v as t,x as _,u as r,f as Y,E as N,G as A,L as F,_ as f,H,t as b,y as U,I as L,F as I,r as j,e as q,z as G,c as y,p as Q,Q as B,D as h,A as R}from"./framework.3f494197.js";import{h as u,u as w}from"../app.25a6dac8.js";import"./theme.4cab993e.js";const V=o=>(N("data-v-3643fc79"),o=o(),A(),o),J={class:"screen screen-cover"},O=V(()=>t("h1",null,[t("span",{class:"koi"},"Koi"),F("shi.js")],-1)),W={class:"desc"},X={class:"actions"},Z=["href"],ee=V(()=>t("svg",{"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 320 512"},[t("g",null,[t("path",{fill:"var(--vp-c-brand-alt)",d:"M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z"}),t("path",{fill:"var(--vp-c-brand-darker)",d:"M313 182.57 290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z"})])],-1)),te=$({__name:"slide1",emits:["swipe"],setup(o){const{frontmatter:n}=k();return(l,d)=>(c(),i("div",J,[O,t("p",W,_(r(n).home.desc),1),t("div",X,[t("a",{class:"action-button primary",href:r(Y)(r(n).links.starter)},_(r(n).home.primary),9,Z),t("a",{class:"action-button secondary",onClick:d[0]||(d[0]=a=>l.$emit("swipe",1))},_(r(n).home.secondary),1)]),ee]))}});const se=f(te,[["__scopeId","data-v-3643fc79"]]);const ne={},oe={class:"screen screen-demo"},ae={class:"caption"},ce={class:"figure"};function ie(o,n){return c(),i("div",oe,[t("div",ae,[H(o.$slots,"default",{},void 0,!0)]),t("div",ce,[H(o.$slots,"figure",{},void 0,!0)])])}const K=f(ne,[["render",ie],["__scopeId","data-v-d48e8b84"]]),re=$({__name:"slide2",setup(o){const{frontmatter:n}=k();return(l,d)=>(c(!0),i(I,null,b(r(n).features,a=>(c(),U(K,{key:a.title},{default:L(()=>[t("h2",null,_(a.title),1),t("p",null,_(a.desc),1)]),_:2},1024))),128))}});const le=f(re,[["__scopeId","data-v-3b1893a8"]]),_e={class:"screen screen-development"},de={class:"introduction"},ue={class:"advantages"},pe={class:"icon"},ve=["viewBox"],he=["d"],fe={class:"desc"},me={class:"learn-more"},ge=["href"],ye=$({__name:"slide3",setup(o){const{frontmatter:n}=k();return(l,d)=>(c(),i("div",_e,[t("div",de,[t("h2",null,_(r(n).development.title),1),t("p",null,_(r(n).development.desc),1)]),t("div",ue,[(c(!0),i(I,null,b(r(n).advantages,a=>(c(),i("div",{class:"advantage",key:a.title},[t("span",pe,[(c(),i("svg",{viewBox:a.icon.viewBox},[t("path",{d:a.icon.path,fill:"currentColor"},null,8,he)],8,ve))]),t("h3",null,_(a.title),1),t("p",fe,_(a.desc),1),t("p",me,[t("a",{href:r(Y)(a.link)},"了解更多",8,ge)])]))),128))])]))}});const $e=f(ye,[["__scopeId","data-v-8383521b"]]),P=o=>(N("data-v-b7c72433"),o=o(),A(),o),ke={class:"screen screen-footer"},xe={class:"links"},we={class:"group-title"},be={class:"group-items"},Ie=["href"],Ce={class:"copyright"},Se=P(()=>t("div",null,"MIT Licensed",-1)),De=P(()=>t("div",null,"Copyright © 2019-2023 Shigma",-1)),Me={key:0,target:"_blank",rel:"noopener noreferrer",href:"https://beian.miit.gov.cn/"},Ye=$({__name:"slide4",setup(o){const{frontmatter:n}=k(),l=j(!1);return q(()=>{window.location.href.includes("ilharper.com")&&(l.value=!0)}),(d,a)=>(c(),i("footer",ke,[t("div",xe,[(c(!0),i(I,null,b(r(n).footer,m=>(c(),i("div",{key:m.text,class:"group"},[t("div",we,_(m.text),1),t("ul",be,[(c(!0),i(I,null,b(m.items,g=>(c(),i("li",{key:g.text},[t("a",{href:g.link,class:"link"},_(g.text),9,Ie)]))),128))])]))),128))]),t("div",Ce,[Se,De,l.value?(c(),i("a",Me,"浙ICP备2021029727号-1")):G("",!0)])]))}});const Be=f(Ye,[["__scopeId","data-v-b7c72433"]]),Ee=["src"],Le=["src"],Te=$({__name:"carousel",props:{position:{}},setup(o){const n=o,{frontmatter:l}=k(),d=y(()=>l.value.features.length),a=y(()=>n.position<1?0:n.position>d.value?1-d.value:1-n.position);return(m,g)=>{const C=Q("chat-panel");return c(!0),i(I,null,b(r(l).features,(p,x)=>(c(),i("div",{class:"mask",style:B({top:(x+a.value)*100+"vh"}),key:x},[h(K,{style:B({top:-(x+a.value)*100+"vh"})},{figure:L(()=>[h(C,{controls:""},{default:L(()=>[t("img",{src:r(Y)(p.image+".light.webp"),class:"light-only"},null,8,Ee),t("img",{src:r(Y)(p.image+".dark.webp"),class:"dark-only"},null,8,Le)]),_:2},1024)]),_:2},1032,["style"])],4))),128)}}});const ze=f(Te,[["__scopeId","data-v-677ea19d"]]),He=$({__name:"index",setup(o){const{frontmatter:n}=k(),l=y(()=>n.value.features.length),d=y(()=>l.value+2),a=y(()=>({transform:`translateY(${-u.position.value*100}vh)`}));function m(e,s,v){return e<s?s-e:e>v?v-e:0}const g=y(()=>({transform:`translateY(${m(u.position.value,1,l.value)*100}vh)`}));function C(e){return Math.max(Math.min(e,d.value),0)}function p(e){u.position.value=C(Math.round(u.position.value+e))}function x(e,s=0){return e>s?1:e<-s?-1:0}w("keydown",e=>{e.key==="ArrowDown"||e.key==="PageDown"?(e.preventDefault(),p(1)):(e.key==="ArrowUp"||e.key==="PageUp")&&(e.preventDefault(),p(-1))});let S=0,D=!1,E,M;function T(e){let s=e.target;for(;s instanceof HTMLElement;){if(s.tagName==="HEADER")return!0;s=s.parentElement}}return w("wheel",e=>{if(e.ctrlKey||e.shiftKey||Math.abs(e.deltaY)<50||T(e))return;const s=Date.now();s-S>=100&&p(Math.sign(e.deltaY)),S=s},{passive:!1}),w("touchstart",e=>{D=!0,E=M=e.changedTouches[0].clientY}),w("touchmove",e=>{if(!D||T(e))return;const{clientY:s}=e.changedTouches[0],v=u.position.value+(M-s)/innerHeight;u.position.value=C(v),u.position.value===v&&e.preventDefault(),M=s},{passive:!1}),w("touchend",e=>{D=!1;const{clientY:s}=e.changedTouches[0],v=E-s,z=Date.now();z-S>=100&&(u.position.value-=(M-E)/innerHeight,p(x(v,50))),S=z}),(e,s)=>(c(),i("div",{class:R(["container",{moving:r(D)}])},[t("div",{class:"track track-main",style:B(a.value)},[h(se,{onSwipe:s[0]||(s[0]=v=>p(1))}),h(le),h($e),h(Be)],4),t("div",{class:"track track-demo",style:B(g.value)},[h(ze,{position:r(u).position.value},null,8,["position"])],4)],2))}});const Ke=f(He,[["__scopeId","data-v-c7b1cbd5"]]);export{Ke as default};
