import{_ as s,s as a,q as t,S as e}from"./chunks/framework.3f494197.js";const y=JSON.parse(`{"title":"默认值","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.string().description('默认值为 \`lol\` 的属性。').default('lol'),\\nbar: Schema.number().description('默认值为 \`2333\` 的属性。').default(2333),\\nbaz: Schema.boolean().description('默认值为 \`true\` 的属性。').default(true),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ja-JP/schema/meta/default.md","filePath":"ja-JP/schema/meta/default.md"}`),n={name:"ja-JP/schema/meta/default.md"},o=e(`<h1 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-label="Permalink to &quot;默认值&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请注意：<code>.required()</code> 与 <code>.default()</code> 不能同时使用。</p></div><p><code>.default()</code> 用于设置某个配置项的默认值。如果你传入了值，那么默认值将不会有任何行为；如果没有传入值，则默认值会作为初始状态呈现在表单中。</p><p>在配置项菜单中可以选择将配置项恢复为默认值。如果你将某个配置项修改为了默认值，则该配置项实际上会被清除，以确保配置文件的简洁性。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;lol&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">2333</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">baz</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">boolean</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">true</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,5),l=[o];function r(i,p,c,k,h,d){return t(),a("div",null,l)}const u=s(n,[["render",r]]);export{y as __pageData,u as default};
