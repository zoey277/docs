import{_ as a,s,q as e,S as t}from"./chunks/framework.3f494197.js";const v=JSON.parse(`{"title":"数组 (Array)","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\n  array: Schema.array(Number).description('这是一个数组，点击右侧的按钮添加元素。'),\\n  table: Schema.array(String).role('table').description('以表格形式显示的数组。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-CN/schema/basic/array.md","filePath":"zh-CN/schema/basic/array.md"}`),n={name:"zh-CN/schema/basic/array.md"},o=t(`<h1 id="数组" tabindex="-1">数组 (Array) <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组 (Array)&quot;">​</a></h1><p><code>Schema.array()</code> 描述了一个数组，其中的元素满足给定的类型。</p><p>使用 <code>.role(&#39;table&#39;)</code> 可以将数组以表格形式显示。</p><p>例子里的 <code>Number</code> 是 <code>Schema.number().required()</code> 的简写。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">array</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">array</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">Number</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">table</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">array</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">String</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;table&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,5),r=[o];function i(p,l,c,k,h,y){return e(),s("div",null,r)}const m=a(n,[["render",i]]);export{v as __pageData,m as default};
