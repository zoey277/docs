import{_ as i,p,s as c,v as s,L as a,D as e,I as t,S as l,q as h}from"./chunks/framework.3f494197.js";const J=JSON.parse('{"title":"内置组件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/api/message/components.md","filePath":"zh-TW/api/message/components.md"}'),_={name:"zh-TW/api/message/components.md"},k=s("h1",{id:"内置组件",tabindex:"-1"},[a("内置组件 "),s("a",{class:"header-anchor",href:"#内置组件","aria-label":'Permalink to "内置组件"'},"​")],-1),d=s("code",null,"ctx.broadcast()",-1),m=s("h2",{id:"核心组件",tabindex:"-1"},[a("核心组件 "),s("a",{class:"header-anchor",href:"#核心组件","aria-label":'Permalink to "核心组件"'},"​")],-1),u={id:"调用指令-会话",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#调用指令-会话","aria-label":'Permalink to "调用指令 (execute) <badge>会话</badge>"'},"​",-1),y=l('<p>按照子元素执行指令，并使用指令的输出替换此元素。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">foo&lt;</span><span style="color:var(--shiki-token-parameter);">execute</span><span style="color:var(--shiki-token-text);">&gt;echo 123&lt;/</span><span style="color:var(--shiki-token-parameter);">execute</span><span style="color:var(--shiki-token-text);">&gt;bar</span></span></code></pre></div>',2),g={id:"等待输入-会话",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#等待输入-会话","aria-label":'Permalink to "等待输入 (prompt) <badge>会话</badge>"'},"​",-1),b=l('<p>输出子元素并等待用户输入，并使用输入内容替换此元素。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">你输入的内容为：&lt;</span><span style="color:var(--shiki-token-parameter);">prompt</span><span style="color:var(--shiki-token-text);">&gt;请输入一段文本。&lt;/</span><span style="color:var(--shiki-token-parameter);">prompt</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div>',2),f={id:"国际化-会话-广播",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#国际化-会话-广播","aria-label":'Permalink to "国际化 (i18n) <badge>会话+广播</badge>"'},"​",-1),C=l(`<ul><li><strong>path:</strong> 本地化路径</li></ul><p>渲染本地化文件中对应的路径替换此元素。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">i18n</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">path</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;foo.bar&quot;</span><span style="color:var(--shiki-token-text);">/&gt;</span></span></code></pre></div><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">Hello, world!</span></span></code></pre></div><p>传入 <code>path</code> 为 <code>foo.bar</code> 时：</p>`,5),P={id:"时间-会话-广播",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#时间-会话-广播","aria-label":'Permalink to "时间 (i18n:time) <badge>会话+广播</badge>"'},"​",-1),A=l('<ul><li><strong>value:</strong> 时间长度（毫秒）</li></ul><p>根据本地语言渲染时间长度。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">剩余时间：&lt;</span><span style="color:var(--shiki-token-parameter);">i18n:time</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">value</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">{value}</span><span style="color:var(--shiki-token-text);">/&gt;</span></span></code></pre></div><p>传入 <code>value</code> 为 <code>114514</code> 时：</p>',4),V={id:"随机选取-实验性",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#随机选取-实验性","aria-label":'Permalink to "随机选取 (random) <badge type="warning">实验性</badge>"'},"​",-1),N=l(`<p>选择随机的子元素。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">此次抛硬币的结果是&lt;</span><span style="color:var(--shiki-token-parameter);">random</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;正面&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;反面&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">random</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div>`,2),q={id:"复数-实验性",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#复数-实验性","aria-label":'Permalink to "复数 (plural) <badge type="warning">实验性</badge>"'},"​",-1),E=l(`<ul><li><strong>count:</strong> 用于判断的数值</li></ul><p>根据 <code>count</code> 数值决定选择子元素。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">You have &lt;</span><span style="color:var(--shiki-token-parameter);">plural</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">count</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">{count}</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;no apples&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;one apple&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;{count} apples&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">plural</span><span style="color:var(--shiki-token-text);">&gt;.</span></span></code></pre></div><p>传入 <code>count</code> 为 2 时：</p>`,4),w=l('<h2 id="扩展组件" tabindex="-1">扩展组件 <a class="header-anchor" href="#扩展组件" aria-label="Permalink to &quot;扩展组件&quot;">​</a></h2><h3 id="网页渲染" tabindex="-1">网页渲染 (html) <a class="header-anchor" href="#网页渲染" aria-label="Permalink to &quot;网页渲染 (html)&quot;">​</a></h3><h3 id="内容审查" tabindex="-1">内容审查 (censor) <a class="header-anchor" href="#内容审查" aria-label="Permalink to &quot;内容审查 (censor)&quot;">​</a></h3>',3);function K(R,$,z,B,W,H){const n=p("badge"),o=p("chat-message"),r=p("chat-panel");return h(),c("div",null,[k,s("ul",null,[s("li",null,[a("标有 "),e(n,null,{default:t(()=>[a("会话")]),_:1}),a(" 的组件只能在会话环境下使用 (常见的会话环境包括中间件和指令的内部)")]),s("li",null,[a("标有 "),e(n,null,{default:t(()=>[a("会话+广播")]),_:1}),a(" 的组件只能在会话环境或 "),d,a(" 中使用")])]),m,s("h3",u,[a("调用指令 (execute) "),e(n,null,{default:t(()=>[a("会话")]),_:1}),a(),v]),y,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("foo123bar")]),_:1})]),_:1}),s("h3",g,[a("等待输入 (prompt) "),e(n,null,{default:t(()=>[a("会话")]),_:1}),a(),x]),b,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("请输入一段文本。")]),_:1}),e(o,{nickname:"Alice"},{default:t(()=>[a("你好！")]),_:1}),e(o,{nickname:"Koishi"},{default:t(()=>[a("你输入的内容为：你好！")]),_:1})]),_:1}),s("h3",f,[a("国际化 (i18n) "),e(n,null,{default:t(()=>[a("会话+广播")]),_:1}),a(),T]),C,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("Hello, world!")]),_:1})]),_:1}),s("h3",P,[a("时间 (i18n:time) "),e(n,null,{default:t(()=>[a("会话+广播")]),_:1}),a(),S]),A,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("剩余时间：1 分钟 55 秒")]),_:1})]),_:1}),s("h3",V,[a("随机选取 (random) "),e(n,{type:"warning"},{default:t(()=>[a("实验性")]),_:1}),a(),I]),N,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("此次抛硬币的结果是反面")]),_:1})]),_:1}),s("h3",q,[a("复数 (plural) "),e(n,{type:"warning"},{default:t(()=>[a("实验性")]),_:1}),a(),D]),E,e(r,null,{default:t(()=>[e(o,{nickname:"Koishi"},{default:t(()=>[a("You have 2 apples.")]),_:1})]),_:1}),w])}const L=i(_,[["render",K]]);export{J as __pageData,L as default};
