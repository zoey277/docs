import{_ as l,p as r,s as i,v as a,L as e,D as o,I as n,S as s,q as c}from"./chunks/framework.26d7e063.js";const D=JSON.parse('{"title":"适配器 (Adapter)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/api/core/adapter.md","filePath":"zh-CN/api/core/adapter.md"}'),d={name:"zh-CN/api/core/adapter.md"},p=s("",3),h=s("",7),_={id:"adapter-connect-抽象",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#adapter-connect-抽象","aria-label":'Permalink to "adapter.connect(bot) <badge>抽象</badge>"'},"​",-1),b=a("ul",null,[a("li",null,[a("strong",null,"bot:"),e(),a("code",null,"Bot"),e(" 机器人实例")]),a("li",null,[e("返回值: "),a("code",null,"Promise<void>")])],-1),u=a("p",null,[e("连接 Bot 所需的操作，将在 "),a("code",null,"bot.start()"),e(" 中被调用。")],-1),m={id:"adapter-disconnect-抽象",tabindex:"-1"},v=a("a",{class:"header-anchor",href:"#adapter-disconnect-抽象","aria-label":'Permalink to "adapter.disconnect(bot) <badge>抽象</badge>"'},"​",-1),y=s("",14),x={id:"client-prepare-抽象",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#client-prepare-抽象","aria-label":'Permalink to "client.prepare() <badge>抽象</badge>"'},"​",-1),g=a("ul",null,[a("li",null,[e("返回值: "),a("code",null,"WebSocket | Promise<WebSocket>")])],-1),P=a("p",null,"根据机器人实例生成一个 WebSocket 对象。",-1),C={id:"client-accept-抽象",tabindex:"-1"},T=a("a",{class:"header-anchor",href:"#client-accept-抽象","aria-label":'Permalink to "client.accept() <badge>抽象</badge>"'},"​",-1),S=a("p",null,[e("WebSocket 连接成功建立后的回调函数。你需要实现这个方法，并在其中手动调用 "),a("code",null,"bot.resolve()"),e(" 回调函数表示已经连接成功。")],-1);function w(A,q,W,N,B,V){const t=r("badge");return c(),i("div",null,[p,a("p",null,[e("标有 "),o(t,null,{default:n(()=>[e("抽象")]),_:1}),e(" 的方法需要平台自行实现。")]),h,a("h3",_,[e("adapter.connect(bot) "),o(t,null,{default:n(()=>[e("抽象")]),_:1}),e(),k]),b,u,a("h3",m,[e("adapter.disconnect(bot) "),o(t,null,{default:n(()=>[e("抽象")]),_:1}),e(),v]),y,a("h3",x,[e("client.prepare() "),o(t,null,{default:n(()=>[e("抽象")]),_:1}),e(),f]),g,P,a("h3",C,[e("client.accept() "),o(t,null,{default:n(()=>[e("抽象")]),_:1}),e(),T]),S])}const z=l(d,[["render",w]]);export{D as __pageData,z as default};
