import{_ as s,s as n,q as e,S as a}from"./chunks/framework.3f494197.js";const v=JSON.parse(`{"title":"Number : Nombre","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.number().description('一个普通的数值。'),\\nbar: Schema.number().role('slider').min(0).max(100).step(1).default(30).description('一个 0 到 100 之间的整数。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"fr-FR/schema/basic/number.md","filePath":"fr-FR/schema/basic/number.md"}`),t={name:"fr-FR/schema/basic/number.md"},o=a(`<h1 id="number-nombre" tabindex="-1">Number : Nombre <a class="header-anchor" href="#number-nombre" aria-label="Permalink to &quot;Number : Nombre&quot;">​</a></h1><p><code>Schema.number()</code> 描述了一个数值，支持输入框和滑块。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;slider&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    .</span><span style="color:var(--shiki-token-function);">min</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">0</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">max</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">100</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">step</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">30</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,3),r=[o];function i(l,p,c,k,h,m){return e(),n("div",null,r)}const u=s(t,[["render",i]]);export{v as __pageData,u as default};
