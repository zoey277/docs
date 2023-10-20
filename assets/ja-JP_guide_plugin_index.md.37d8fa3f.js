import{_ as s,s as n,q as a,S as t}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"认识插件","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/plugin/index.md","filePath":"ja-JP/guide/plugin/index.md"}'),o={name:"ja-JP/guide/plugin/index.md"},e=t(`<h1 id="认识插件" tabindex="-1">认识插件 <a class="header-anchor" href="#认识插件" aria-label="Permalink to &quot;认识插件&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在学习本章之前，建议先完整阅读 <a href="./../../manual/usage/market.html">入门 &gt; 安装和配置插件</a>。</p></div><p>模块化是 Koishi 的核心特性。借助插件系统，Koishi 得以将各种功能解耦出来，并以模块的形式分发。在「开发上手」中我们已经体验了基础的插件开发范例。本章将介绍更多的模块化编写方式，并介绍一些场景下的最佳实践。</p><h2 id="插件的基本形式" tabindex="-1">插件的基本形式 <a class="header-anchor" href="#插件的基本形式" aria-label="Permalink to &quot;插件的基本形式&quot;">​</a></h2><p>一个插件需要是以下三种基本形式之一：</p><ol><li>一个接受两个参数的函数，第一个参数是所在的上下文，第二个参数是传入的配置项</li><li>一个接受两个参数的类，第一个参数是所在的上下文，第二个参数是传入的配置项</li><li>一个对象，其中的 <code>apply</code> 方法是第一种形式中所说的函数</li></ol><p>而一个插件在被加载时，则相当于进行了上述函数的调用。因此，下面的四种写法是基本等价的：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">callback</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">callback</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">: </span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">callback</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">callback</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>看起来插件似乎只是将函数调用换了一种写法，但这种写法能够帮助我们将多个逻辑组合在一起并模块化，同时可以在插件内部对所需的选项进行初始化，这些都能极大地提高了代码的可维护性。</p><h2 id="模块化的插件" tabindex="-1">模块化的插件 <a class="header-anchor" href="#模块化的插件" aria-label="Permalink to &quot;模块化的插件&quot;">​</a></h2><p>插件化最大的好处就是可以把不同的功能写在不同的模块中。此时插件将作为模块的导出，它可以是 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%AF%BC%E5%85%A5%E9%BB%98%E8%AE%A4%E5%80%BC" target="_blank" rel="noreferrer">默认导出</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%AF%BC%E5%85%A5%E6%95%B4%E4%B8%AA%E6%A8%A1%E5%9D%97%E7%9A%84%E5%86%85%E5%AE%B9" target="_blank" rel="noreferrer">导出整体</a>。</p><p>对于对象形式的插件，你还可以额外提供一个 <code>name</code> 属性作为插件的名称。对于函数和类形式的插件来说，插件名称便是函数名或类名。具名插件有助于更好地描述插件的功能，并被用于插件关系可视化中，实际上不会影响任何运行时的行为。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">foo.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 整体导出对象形式的插件</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;Foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {}</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">bar.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 默认导出类形式的插件</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Bar</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Bar</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">namespace</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Bar</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Bar</span></span></code></pre></div><h2 id="嵌套的插件" tabindex="-1">嵌套的插件 <a class="header-anchor" href="#嵌套的插件" aria-label="Permalink to &quot;嵌套的插件&quot;">​</a></h2><p>Koishi 的插件也是可以嵌套的。你可以将你编写的插件解耦成多个独立的子模块，再将调用这些子模块的一个新插件作为入口模块，就像这样：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 入口文件，从上述模块分别加载插件</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Foo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./foo&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Bar</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">Foo</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">Bar</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>这样当你加载上述模块时，就相当于同时加载了 foo 和 bar 两个模块。这样的做法不仅能够减轻心智负担，解耦出的模块还享受独立的热重载，你可以在不影响一个模块运行的情况下修改另一个的代码！</p><p>当你在开发较为复杂的功能时，可以将插件分解成多个独立的子插件，并在入口文件中依次加载这些子插件。许多大型插件都采用了这种写法。</p><h2 id="在配置文件中加载" tabindex="-1">在配置文件中加载 <a class="header-anchor" href="#在配置文件中加载" aria-label="Permalink to &quot;在配置文件中加载&quot;">​</a></h2><p>一个模块可以作为插件被 Koishi 的配置文件加载，其需要满足以下两条中的一条：</p><ul><li>此模块的<strong>默认导出</strong>是一个插件</li><li>此模块的<strong>导出整体</strong>是一个插件</li></ul><p>这两种写法并无优劣之分，你完全可以按照自己的需求调整导出的形式。按照惯例，如果你的插件是一个函数，我们通常直接导出 apply 方法，并将导出整体作为一个插件；如果你的插件是一个类，那么我们通常使用默认导出的形式。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里默认导出的优先级更高。因此，只要模块提供了默认导出，Koishi 就会尝试加载这个默认导出，而不是导出整体。在开发中请务必注意这一点。</p></div><p>配置文件中的 <code>plugins</code> 字段记录了插件的信息：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">console</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">dialogue</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">prefix</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;#&#39;</span></span></code></pre></div><p>这里的键对应插件的路径，值则为插件的配置。这个路径的解析逻辑如下：</p><ul><li>对于 foo，我们将尝试读取 @koishijs/plugin-foo 和 koishi-plugin-foo</li><li>对于 @foo/bar，我们将尝试读取 @foo/koishi-plugin-bar</li></ul><p>换言之，上述配置文件相当于下面的代码：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-parameter);">default</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-dialogue&#39;</span><span style="color:var(--shiki-token-text);">), { </span><span style="color:var(--shiki-token-parameter);">prefix</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;#&#39;</span><span style="color:var(--shiki-token-text);"> })</span></span></code></pre></div><p>在这个例子中，console 是官方插件，并且使用了默认导出；dialogue 是社区插件，并且使用了导出整体。配置文件使你得以无视这些区别，每个插件的加载方式都会由 CLI 自动检测。</p>`,31),l=[e];function p(i,r,k,c,y,h){return a(),n("div",null,l)}const d=s(o,[["render",p]]);export{x as __pageData,d as default};
