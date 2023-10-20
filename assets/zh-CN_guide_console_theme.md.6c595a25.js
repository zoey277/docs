import{_ as e,p as t,s as o,v as a,L as s,D as p,I as r,S as l,q as i}from"./chunks/framework.3f494197.js";const _=JSON.parse('{"title":"主题开发 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/console/theme.md","filePath":"zh-CN/guide/console/theme.md"}'),k={name:"zh-CN/guide/console/theme.md"},c={id:"主题开发-实验性",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#主题开发-实验性","aria-label":'Permalink to "主题开发 <badge type="warning">实验性</badge>"'},"​",-1),y=l(`<p>Koishi 也允许插件定义控制台主题。让我们先从简单的色彩主题开始。</p><h2 id="色彩主题" tabindex="-1">色彩主题 <a class="header-anchor" href="#色彩主题" aria-label="Permalink to &quot;色彩主题&quot;">​</a></h2><p><a href="https://github.com/koishijs/koishi-plugin-theme-vanilla" target="_blank" rel="noreferrer">theme-vanilla</a> 插件提供了许多色彩主题，你可以参考它的源码来开发自己的主题：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 引入定义主题色的 CSS 文件</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./index.scss&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">theme</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;coffee-dark&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Coffee Dark&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">theme</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;coffee-light&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Coffee Light&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>如你所见，要定义一个色彩主题非常简单，只需要调用 <a href="./../../api/console/context.html#ctx-theme"><code>ctx.theme()</code></a> 即可。其中，<code>id</code> 用于标识主题，<code>name</code> 则会显示在主题选择器中。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意：<code>id</code> 必须以 <code>-dark</code> 或 <code>-light</code> 结尾，否则 Koishi 将无法正确回退 CSS 变量！</p></div><p>接下来让我们看看 <code>index.scss</code> 的内容：</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:var(--shiki-token-operator);">:root</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">.theme-root</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&amp;</span><span style="color:var(--shiki-token-text);">[</span><span style="color:var(--shiki-token-number);">theme</span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-string);">coffee-dark</span><span style="color:var(--shiki-token-text);">] {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg1</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#231F1E</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg2</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#262120</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg3</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#292423</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg4</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#342A27</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&amp;</span><span style="color:var(--shiki-token-text);">[</span><span style="color:var(--shiki-token-number);">theme</span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-string);">coffee-light</span><span style="color:var(--shiki-token-text);">] {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg1</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#EEE9E7</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg2</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#EAE4E1</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg3</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#E6DFDC</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">--bg4</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">#E3DBD6</span><span style="color:var(--shiki-token-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>Koishi 为主题系统预定义了许多 CSS 变量。只需要在属性选择器中修改这些变量的值，一个色彩主题就大功告成了。</p><h2 id="改变布局" tabindex="-1">改变布局 <a class="header-anchor" href="#改变布局" aria-label="Permalink to &quot;改变布局&quot;">​</a></h2><p>Koishi 同样允许主题改变控制台的布局：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">root</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./root.vue&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">layout</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./layout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">theme</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;windows-light&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Windows Light&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">components</span><span style="color:var(--shiki-token-text);">: { </span><span style="color:var(--shiki-token-parameter);">root</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">layout</span><span style="color:var(--shiki-token-text);"> },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>在上面的例子中，<a href="./../../api/console/context.html#ctx-theme"><code>ctx.theme()</code></a> 接受一个额外的 <code>components</code> 选项，用于覆盖默认的布局组件。其中，<code>root</code> 用于定制整个控制台的布局，<code>layout</code> 用于定制 <code>&lt;k-layout&gt;</code> 的实现。</p>`,13);function v(d,x,m,g,u,b){const n=t("badge");return i(),o("div",null,[a("h1",c,[s("主题开发 "),p(n,{type:"warning"},{default:r(()=>[s("实验性")]),_:1}),s(),h]),y])}const C=e(k,[["render",v]]);export{_ as __pageData,C as default};
