import{_ as p,p as i,s as r,D as s,I as n,S as l,v as o,L as a,q as c}from"./chunks/framework.26d7e063.js";const ns=JSON.parse('{"title":"指令开发","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/guide/basic/command.md","filePath":"de-DE/guide/basic/command.md"}'),k={name:"de-DE/guide/basic/command.md"},h=l("",5),y=l("",19),v=l("",5),d=l("",6),x=l("",3),u=l("",5),_=l("",21),m=o("p",null,"echo <message>",-1),g=o("p",null,"输出收到的信息",-1),f=o("p",null,"可用的选项有：",-1),b=o("p",{class:"indent-1"},"-t, --timeout <seconds> 设定延迟发送的时间",-1),C=l("",4),T=o("p",null,"echo <message>",-1),A=o("p",null,"输出收到的信息",-1),E=o("p",null,"注意：参数请写在最前面，不然会被当成 message 的一部分！",-1),P=o("p",null,"可用的选项有：",-1),w=o("p",{class:"indent-1"},"-t, --timeout <seconds> 设定延迟发送的时间",-1),S=o("p",null,"使用示例：",-1),q=o("p",{class:"indent-1"},"echo -t 300 Hello World 五分钟后发送 Hello World",-1),V=l("",3),I=o("p",null,"当前可用的指令有：",-1),K=o("p",{class:"indent-1"},"help 显示帮助信息",-1),N=o("p",null,"输入“帮助+指令名”查看特定指令的语法和使用示例。",-1),D=o("p",null,"指令：bar",-1),R=o("p",null,"一条看不见的指令",-1),F=o("p",null,[a("如果要查看隐藏的指令和选项，可以使用 "),o("code",null,"help -H"),a("：")],-1),$=o("p",null,"当前可用的指令有：",-1),z=o("p",{class:"indent-1"},"help 显示帮助信息",-1),H=o("p",{class:"indent-1"},"bar 一条看不见的指令",-1),J=o("p",null,"输入“帮助+指令名”查看特定指令的语法和使用示例。",-1),O=o("p",null,"指令：bar",-1),W=o("p",null,"一条看不见的指令",-1),B=o("p",null,"可用的选项有：",-1),j=o("p",{class:"indent-1"},"--foo <text> 一个看不见的选项",-1),G=l("",6);function L(M,Q,U,X,Y,Z){const t=i("chat-message"),e=i("chat-panel");return c(),r("div",null,[h,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("echo Hello!")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a("Hello!")]),_:1})]),_:1}),y,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("test 100 --foo 200")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a('number 100 string "200"')]),_:1}),s(t,{nickname:"Alice"},{default:n(()=>[a("test xyz")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a("参数 arg 输入无效，请提供一个数字。")]),_:1})]),_:1}),v,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("test -adb text --gamma=1 --foo-bar baz --no-xyz")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a('{ "alpha": true, "d": true, "beta": "text", "gamma": 1, "fooBar": "baz", "xyz": false }')]),_:1})]),_:1}),d,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("test -b 80")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a('{ "alpha": 100, "beta": 80 }')]),_:1})]),_:1}),x,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("test --anonymous")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a('{ "writer": 0 }')]),_:1})]),_:1}),u,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("test -f bar")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a("bar")]),_:1}),s(t,{nickname:"Alice"},{default:n(()=>[a("test -f baaaz")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a("选项 beta 输入无效，请检查语法。")]),_:1})]),_:1}),_,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("echo -h")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[m,g,f,b]),_:1})]),_:1}),C,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("echo -h")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[T,A,E,P,w,S,q]),_:1})]),_:1}),V,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("help")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[I,K,N]),_:1}),s(t,{nickname:"Alice"},{default:n(()=>[a("help bar")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[D,R]),_:1}),s(t,{nickname:"Alice"},{default:n(()=>[a("bar --foo 123")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[a("secret: 123")]),_:1})]),_:1}),F,s(e,null,{default:n(()=>[s(t,{nickname:"Alice"},{default:n(()=>[a("help -H")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[$,z,H,J]),_:1}),s(t,{nickname:"Alice"},{default:n(()=>[a("help bar -H")]),_:1}),s(t,{nickname:"Koishi"},{default:n(()=>[O,W,B,j]),_:1})]),_:1}),G])}const ts=p(k,[["render",L]]);export{ns as __pageData,ts as default};
