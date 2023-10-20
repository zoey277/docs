import{_ as s,s as e,q as t,S as a}from"./chunks/framework.3f494197.js";const u=JSON.parse(`{"title":"Computed：条件求值","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.computed(Number).description('这是一个属性。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"de-DE/schema/advanced/computed.md","filePath":"de-DE/schema/advanced/computed.md"}`),o={name:"de-DE/schema/advanced/computed.md"},n=a(`<h1 id="computed-条件求值" tabindex="-1">Computed：条件求值 <a class="header-anchor" href="#computed-条件求值" aria-label="Permalink to &quot;Computed：条件求值&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此类型只能在 Koishi 中使用。</p></div><p><code>Schema.computed()</code> 类型可用于合并多个类型。一种最常见的用法是将配置项分为多组显示。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">computed</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">Number</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;配置项&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div>`,4),p=[n];function c(i,r,l,d,k,h){return t(),e("div",null,p)}const v=s(o,[["render",c]]);export{u as __pageData,v as default};
