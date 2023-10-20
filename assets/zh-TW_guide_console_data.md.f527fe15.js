import{_ as s,s as n,q as a,S as t}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"数据交互","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/guide/console/data.md","filePath":"zh-TW/guide/console/data.md"}'),o={name:"zh-TW/guide/console/data.md"},e=t(`<h1 id="数据交互" tabindex="-1">数据交互 <a class="header-anchor" href="#数据交互" aria-label="Permalink to &quot;数据交互&quot;">​</a></h1><p>Koishi 控制台前后端的数据交互基本是通过 WebSocket 实现的。为了适应不同的场景，我们提供了多种数据交互的形式。</p><h2 id="被动推送" tabindex="-1">被动推送 <a class="header-anchor" href="#被动推送" aria-label="Permalink to &quot;被动推送&quot;">​</a></h2><p>后端代码：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">src/index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">resolve</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;path&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">DataService</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">declare</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">module</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">namespace</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Console</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Services</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">custom</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">CustomProvider</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">CustomProvider</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">DataService</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[]&gt; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#E5C07B;font-style:italic;">super</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">ctx</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;custom&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">async</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">() {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;Hello&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;World&#39;</span><span style="color:var(--shiki-token-text);">]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;my-plugin&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">using</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;console&#39;</span><span style="color:var(--shiki-token-text);">] </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">CustomProvider</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">console</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">addEntry</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">dev</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;client/index.ts&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">prod</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;dist&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>前端代码：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">client/index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/client&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Page</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./page.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">page</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;页面标题&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">path</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;/custom-page&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 只有当获得了 custom 数据，才可以访问页面</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">fields</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&#39;custom&#39;</span><span style="color:var(--shiki-token-text);">],</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">component</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Page</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 这里应该有类型支持，并且支持数据响应式变化 --&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">k-card</span><span style="color:var(--shiki-token-text);">&gt;{{ store.custom }}&lt;/</span><span style="color:var(--shiki-token-parameter);">k-card</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">store</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/client&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><h2 id="主动获取" tabindex="-1">主动获取 <a class="header-anchor" href="#主动获取" aria-label="Permalink to &quot;主动获取&quot;">​</a></h2><p>后端代码：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">src/index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">resolve</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;path&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">DataService</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">declare</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">module</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Events</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-string);">&#39;get-greeting&#39;</span><span style="color:var(--shiki-token-text);">(): </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;my-plugin&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">using</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;console&#39;</span><span style="color:var(--shiki-token-text);">] </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">console</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">addListener</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;get-greeting&#39;</span><span style="color:var(--shiki-token-text);">, () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;Hello&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;World&#39;</span><span style="color:var(--shiki-token-text);">]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">console</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">addEntry</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">dev</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;client/index.ts&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">prod</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;dist&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">client/page.vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">k-card</span><span style="color:var(--shiki-token-text);">&gt;{{ greeting }}&lt;/</span><span style="color:var(--shiki-token-parameter);">k-card</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">send</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/client&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">ref</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">greeting</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">ref</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[]&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;get-greeting&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">then</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">greeting</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">value</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">data</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">script</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><h2 id="权限管理" tabindex="-1">权限管理 <a class="header-anchor" href="#权限管理" aria-label="Permalink to &quot;权限管理&quot;">​</a></h2><p>当你引入了 @koishijs/plugin-auth 插件之后，你可以为你的页面访问和数据交互引入鉴权机制：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 只有已登录并且权限等级不低于 3 的用户才能访问此接口</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">console</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">addListener</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;get-greeting&#39;</span><span style="color:var(--shiki-token-text);">, () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;Hello&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;World&#39;</span><span style="color:var(--shiki-token-text);">]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}, { </span><span style="color:var(--shiki-token-parameter);">authority</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">3</span><span style="color:var(--shiki-token-text);"> })</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">client/index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">page</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;页面标题&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">path</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;/custom-page&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 只有已登录并且权限等级不低于 3 的用户才能访问此界面</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">authority</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">3</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">component</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Page</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,16),p=[e];function l(r,i,k,c,y,h){return a(),n("div",null,p)}const d=s(o,[["render",l]]);export{x as __pageData,d as default};
