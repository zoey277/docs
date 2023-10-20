import{_ as s,s as n,q as a,S as t}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"Extension de la console","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/guide/console/index.md","filePath":"fr-FR/guide/console/index.md"}'),e={name:"fr-FR/guide/console/index.md"},o=t(`<h1 id="extension-de-la-console" tabindex="-1">Extension de la console <a class="header-anchor" href="#extension-de-la-console" aria-label="Permalink to &quot;Extension de la console&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在学习本章之前，建议先完整阅读 <a href="./../../manual/usage/market.html#认识控制台">入门 &gt; 认识控制台</a>。</p></div><h2 id="创建扩展" tabindex="-1">创建扩展 <a class="header-anchor" href="#创建扩展" aria-label="Permalink to &quot;创建扩展&quot;">​</a></h2><p>在插件目录中新建这几个文件：</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">└── example</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+   ├── client</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+   │   ├── index.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+   │   ├── page.vue</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+   │   └── tsconfig.json</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    ├── src</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    │   └── index.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    ├── package.json</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    └── tsconfig.json</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">client/index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/client&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">Page</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./page.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 此 Context 非彼 Context</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 我们只是在前端同样实现了一套插件逻辑</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">page</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;页面标题&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">path</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;/custom-page&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">component</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Page</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">client/page.vue</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">k-layout</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    &lt;</span><span style="color:var(--shiki-token-parameter);">k-card</span><span style="color:var(--shiki-token-text);">&gt;扩展内容&lt;/</span><span style="color:var(--shiki-token-parameter);">k-card</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;/</span><span style="color:var(--shiki-token-parameter);">k-layout</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">template</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">client/tsconfig.json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;compilerOptions&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;rootDir&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;.&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;module&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;esnext&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;moduleResolution&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;node&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;types&quot;</span><span style="color:var(--shiki-token-text);">: [</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;">// 这一行的作用是导入相关全局类型</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;">// 以便于在编辑器中显示更好的代码提示</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-string);">&quot;@koishijs/client/global&quot;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    ],</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;include&quot;</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-string);">&quot;.&quot;</span><span style="color:var(--shiki-token-text);">],</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>然后修改插件的 <code>package.json</code>，添加以下依赖：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;peerDependencies&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;@koishijs/plugin-console&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;^5.11.0&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;devDependencies&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;@koishijs/client&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;^5.11.0&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>接着修改你的入口文件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">src/index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 此处需要导入 @koishijs/plugin-console 以获取类型</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> {} </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">resolve</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;my-plugin&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 在已有插件逻辑的基础上，添加下面这段</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">using</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;console&#39;</span><span style="color:var(--shiki-token-text);">], (</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">console</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">addEntry</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">dev</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;../client/index.ts&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">prod</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">__dirname</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;../dist&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>启动应用，并在控制台中配置你的插件。现在你已经可以在网页中看到并调试自己刚刚创建的页面了。</p>`,13),l=[o];function p(i,r,k,c,y,h){return a(),n("div",null,l)}const d=s(e,[["render",p]]);export{x as __pageData,d as default};
