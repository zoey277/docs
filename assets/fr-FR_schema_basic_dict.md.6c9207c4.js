import{_ as t,s as a,q as s,S as e}from"./chunks/framework.3f494197.js";const v=JSON.parse(`{"title":"Dict : Dictionnaire","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\ndict: Schema.dict(Boolean).description('这是一个字典，点击右侧的按钮添加属性。'),\\ntable: Schema.dict(String).role('table').description('以表格形式显示的字典。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"fr-FR/schema/basic/dict.md","filePath":"fr-FR/schema/basic/dict.md"}`),n={name:"fr-FR/schema/basic/dict.md"},o=e(`<h1 id="dict-dictionnaire" tabindex="-1">Dict : Dictionnaire <a class="header-anchor" href="#dict-dictionnaire" aria-label="Permalink to &quot;Dict : Dictionnaire&quot;">​</a></h1><p><code>Schema.dict()</code> 类型描述了一个字典，其中的键是任意字符串，而值是给定的类型。</p><p>使用 <code>.role(&#39;table&#39;)</code> 可以将字典以表格形式显示。</p><p>例子里的 <code>Boolean</code> 是 <code>Schema.boolean().required()</code> 的简写。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">dict</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">dict</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">Boolean</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">table</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">dict</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">String</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;table&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,5),i=[o];function c(r,l,p,k,h,d){return s(),a("div",null,i)}const _=t(n,[["render",c]]);export{v as __pageData,_ as default};
