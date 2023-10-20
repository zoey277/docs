import{_ as s,s as n,q as a,S as e}from"./chunks/framework.26d7e063.js";const d=JSON.parse(`{"title":"Object","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.string().required().description('这是一个必需属性。'),\\nbar: Schema.number().description('这是一个可选属性。'),\\nbaz: Schema.object({\\nqux: Schema.boolean().description('这是一个嵌套属性。'),\\n}),\\ncollapse: Schema.object({\\ninner: Schema.string().description('现在你看到我了！'),\\n}).description('点击右侧按钮查看嵌套属性。').collapse(),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"en-US/schema/basic/object.md","filePath":"en-US/schema/basic/object.md"}`),t={name:"en-US/schema/basic/object.md"},o=e(`<h1 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-label="Permalink to &quot;Object&quot;">​</a></h1><p><code>Schema.object()</code> 描述了一个具有给定属性的对象。</p><p>默认情况下所有属性都是可选的，可以通过 <code>.required()</code> 来声明一个必需属性。</p><p>使用 <code>.collapse()</code> 可以将对象默认折叠为一个单独的配置项。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">baz</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">qux</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">boolean</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">nested</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">inner</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }).</span><span style="color:var(--shiki-token-function);">collapse</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,5),i=[o];function r(p,l,c,k,h,y){return a(),n("div",null,i)}const x=s(t,[["render",r]]);export{d as __pageData,x as default};
