import{_ as e,p as l,s as i,D as o,I as a,S as p,v as s,L as n,q as r}from"./chunks/framework.26d7e063.js";const C=JSON.parse('{"title":"部署到 k-on!","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/cookbook/practice/online.md","filePath":"zh-CN/cookbook/practice/online.md"}'),k={name:"zh-CN/cookbook/practice/online.md"},c=p(`<h1 id="部署到-k-on" tabindex="-1">部署到 k-on! <a class="header-anchor" href="#部署到-k-on" aria-label="Permalink to &quot;部署到 k-on!&quot;">​</a></h1><p><a href="https://koishi.online/" target="_blank" rel="noreferrer">Koishi Online (k-on!)</a> 是一个在线的 Koishi 运行时，你可以在这里体验 Koishi 的各种功能。</p><p>相比其他 Koishi 运行环境，k-on! 最大的特点在于它不存在后端，直接在浏览器中运行。这意味着你不需要安装或下载任何文件就能使用 Koishi。</p><h2 id="部署插件" tabindex="-1">部署插件 <a class="header-anchor" href="#部署插件" aria-label="Permalink to &quot;部署插件&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>阅读本节前请先阅读 <a href="./../../guide/develop/publish.html">发布插件</a>。</p></div><p>由于受到浏览器环境的限制，有许多插件无法直接在 k-on! 中运行，因此 k-on! 有着独立的插件市场。要将一个插件部署到 k-on! 中，需要满足以下条件：</p><ul><li>安全性限制：插件不能被标记为不安全</li><li>体积限制：插件的安装体积不得超过 5MB，打包体积不得超过 1MB <ul><li>安装体积：在安装时需要下载的文件总体积 (含依赖库，除去少量白名单依赖)</li><li>打包体积：入口文件被打包并缩减后的体积</li></ul></li><li>环境限制：不能使用 <code>child_process</code> 等在浏览器中无法实现的原生模块和二进制文件 <ul><li>我们对 <code>fs</code> 等常用 node 库做了模拟，但不能使用同步 API 如 <code>fs.readFileSync</code></li><li>如果插件必须依赖某些二进制文件，可以考虑使用 WebAssembly</li></ul></li><li>网络限制：如果插件需要访问网络，所使用到的网络服务必须支持跨域请求 <ul><li>也可以通过允许跨域的第三方服务器来转发请求</li></ul></li></ul><p>如果你的插件满足了以上条件，那么你可以在插件的 <code>package.json</code> 中添加以下字段：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;koishi&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;browser&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">true</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>接着为你的插件发布一个新版本，该插件随后就可以在 k-on! 中使用了。</p><h2 id="特殊场景的处理" tabindex="-1">特殊场景的处理 <a class="header-anchor" href="#特殊场景的处理" aria-label="Permalink to &quot;特殊场景的处理&quot;">​</a></h2><p>对于一些特殊的场景，我们也提供了对应的解决方案。</p><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><p>k-on! 提供了打包时的环境变量，你可以通过它们来判断当前插件是否在 k-on! 中运行。</p><ul><li><code>p<wbr>rocess.env.KOISHI_ENV</code>：固定为 <code>browser</code></li><li><code>p<wbr>rocess.env.KOISHI_BASE</code>：对应于插件入口文件的所在网络路径 (仅限生产环境)</li></ul><p>例如，如果插件的某些配置项在 k-on! 中无效，那么你可以配合 <code>.hidden()</code> 使用：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    .</span><span style="color:var(--shiki-token-function);">hidden</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">process</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">env</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">KOISHI_ENV</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;browser&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><h3 id="独立入口" tabindex="-1">独立入口 <a class="header-anchor" href="#独立入口" aria-label="Permalink to &quot;独立入口&quot;">​</a></h3><p>你可以选择让插件为普通的 Koishi 实例和 k-on! 实例提供不同的入口文件。首先修改插件的目录结构：</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">└── example</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    ├── src</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-string);">+   │   ├── node</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-string);">+   │   │   └── index.ts</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-string);">+   │   ├── browser</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-string);">+   │   │   └── index.ts</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-string);">+   │   ├── shared</span></span>
<span class="line highlighted"><span style="color:var(--shiki-token-string);">+   │   │   └── index.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    │   └── index.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    ├── package.json</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    └── tsconfig.json</span></span></code></pre></div><p>这里，<code>node</code> 目录存放 Node.js 环境下的入口文件，<code>browser</code> 目录存放浏览器环境下的入口文件，<code>shared</code> 目录存放一些两者共用的代码。原本的 <code>index.ts</code> 可以改成这样：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 你的逻辑应该位于 node 目录中，请不要修改这个文件</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./node&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 如果插件采用的是默认导出，你可以这么写</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">plugin</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./node&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./node&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">plugin</span></span></code></pre></div><p>然后，修改你的 <code>package.json</code>：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;main&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;lib/node/index.cjs&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;types&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;lib/index.d.ts&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;exports&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;.&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;node&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./lib/node/index.cjs&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;browser&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./lib/browser/index.mjs&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;types&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./lib/index.d.ts&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;./shared&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;require&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./lib/shared/index.cjs&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;import&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./lib/shared/index.mjs&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;./package.json&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./package.json&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h3 id="webassembly" tabindex="-1">WebAssembly <a class="header-anchor" href="#webassembly" aria-label="Permalink to &quot;WebAssembly&quot;">​</a></h3><p>如果你的 WebAssembly 模块是以 base64 等格式内联在源码中的，那么你不需要做任何处理。</p><p>如果你的 WebAssembly 模块是以相对路径的形式加载的，那么默认情况下它并不会被打包进插件中。你需要在 <code>package.json</code> 中添加以下字段，并确保打包后的代码使用了正确的相对路径：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;koishi&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;browser&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">true</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;exports&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;foo.wasm&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./path/to/foo.wasm&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h3 id="控制台扩展" tabindex="-1">控制台扩展 <a class="header-anchor" href="#控制台扩展" aria-label="Permalink to &quot;控制台扩展&quot;">​</a></h3><p>对于提供控制台扩展的文件，你可以使用以下代码：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">console</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">addEntry</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">process</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">env</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">KOISHI_BASE</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);"> [</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">process</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">env</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">KOISHI_BASE</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">+</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;/dist/index.js&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">process</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">env</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">KOISHI_BASE</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">+</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;/dist/style.css&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">] </span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">process</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">env</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">KOISHI_ENV</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;browser&#39;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);"> [</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// @ts-ignore</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">meta</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">url</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">replace</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">/</span><span style="color:var(--shiki-token-operator);">\\/</span><span style="color:var(--shiki-token-parameter);">src</span><span style="color:var(--shiki-token-operator);">\\/</span><span style="color:var(--shiki-token-number);">[</span><span style="color:var(--shiki-token-text);">^</span><span style="color:var(--shiki-token-number);">/]+</span><span style="color:var(--shiki-token-keyword);">$</span><span style="color:var(--shiki-token-parameter);">/</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;/client/index.ts&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">] </span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">dev</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;../client/index.ts&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">prod</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;../dist&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>同时，在插件的 <code>package.json</code> 中添加以下字段：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;main&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;lib/index.cjs&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;typings&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;lib/index.d.ts&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;exports&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;.&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;import&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./lib/index.mjs&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">&quot;require&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./lib/index.cjs&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;./package.json&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;./package.json&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;koishi&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;browser&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">true</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;public&quot;</span><span style="color:var(--shiki-token-text);">: [</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-string);">&quot;dist&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    ]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="本地测试" tabindex="-1">本地测试 <a class="header-anchor" href="#本地测试" aria-label="Permalink to &quot;本地测试&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>阅读本节前请先阅读 <a href="./../../guide/develop/workspace.html">工作区开发</a>。</p></div><p>如果你想在本地测试插件是否能在 k-on! 中运行，可以参考以下流程：</p><ol><li>克隆 koishijs/webui 和 koishijs/ponyfills 仓库。</li></ol>`,37),h=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"clone"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/webui")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"clone"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/ponyfills")])])])],-1),y=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"clone"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/webui")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"clone"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishijs/ponyfills")])])])],-1),v=s("ol",{start:"2"},[s("li",null,"启动 k-on! 开发脚本。")],-1),x=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-operator)"}},"cd"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"external/webui")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"run"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"dev")])])])],-1),d=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"workspace"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@root/webui"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"dev")])])])],-1),u=s("ol",{start:"3"},[s("li",null,[n("在浏览器中打开 "),s("code",null,"http://localhost:3000"),n(" 即可访问 k-on!")])],-1);function g(m,b,q,f,_,w){const t=l("tab-select");return r(),i("div",null,[c,o(t,{class:"code"},{"tab-npm":a(()=>[h]),"tab-yarn":a(()=>[y]),_:1}),v,o(t,{class:"code"},{"tab-npm":a(()=>[x]),"tab-yarn":a(()=>[d]),_:1}),u])}const I=e(k,[["render",g]]);export{C as __pageData,I as default};
