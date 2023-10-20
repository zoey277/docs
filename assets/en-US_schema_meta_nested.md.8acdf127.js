import{_ as s,s as a,q as e,S as n}from"./chunks/framework.3f494197.js";const d=JSON.parse(`{"title":"Nested Type","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.object({\\nbar: Schema.array(\\nSchema.object({\\nbaz: Schema.number().required().description('在右侧填写数值。'),\\n}).description('这是数组的元素，它本身又是一个对象。'),\\n).default([{ baz: 114514 }]).description('这是一个嵌套属性，类型为数组。'),\\nqux: Schema.dict(\\nSchema.string().required().description('在右侧填写字符串。'),\\n).default({ welcome: 'Hello World' }).description('这是一个嵌套属性，类型为字典。'),\\n}),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"en-US/schema/meta/nested.md","filePath":"en-US/schema/meta/nested.md"}`),t={name:"en-US/schema/meta/nested.md"},o=n(`<h1 id="nested-type" tabindex="-1">Nested Type <a class="header-anchor" href="#nested-type" aria-label="Permalink to &quot;Nested Type&quot;">​</a></h1><p>一些类型 (例如 <a href="./../basic/object.html">Object</a> 和 <a href="./../basic/array.html">Array</a>) 允许将其他类型作为参数传入，形成新的组合类型。你可以任意嵌套这些类型，以满足更复杂的需求。</p><p>例子里的 <code>String</code> 是 <code>Schema.string().required()</code> 的简写形式。类似的写法对于 <code>Number</code> 和 <code>Boolean</code> 也是成立的。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Schema</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      .</span><span style="color:var(--shiki-token-function);">array</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">baz</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      }))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      .</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">([{ </span><span style="color:var(--shiki-token-parameter);">baz</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">114514</span><span style="color:var(--shiki-token-text);"> }]),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">qux</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">Schema</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      .</span><span style="color:var(--shiki-token-function);">dict</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">String</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      .</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">({ </span><span style="color:var(--shiki-token-parameter);">welcome</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;Hello World&#39;</span><span style="color:var(--shiki-token-text);"> }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,4),r=[o];function i(p,l,c,k,h,y){return e(),a("div",null,r)}const m=s(t,[["render",i]]);export{d as __pageData,m as default};
