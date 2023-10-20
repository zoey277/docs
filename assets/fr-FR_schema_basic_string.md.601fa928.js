import{_ as s,s as t,q as n,S as a}from"./chunks/framework.26d7e063.js";const x=JSON.parse(`{"title":"String : Chaîne de caractères","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\ntext: Schema.string().pattern(/^fff$/i).description('一段普通的文本。'),\\nsecret: Schema.string().role('secret').default('password').description('请输入密码。'),\\nlink: Schema.string().role('link').default('https://github.com').description('点击访问链接。'),\\narea: Schema.string().role('textarea', { rows: [2, 4] }).description('在下方输入多行文本。'),\\ncolor: Schema.string().role('color').description('选择一个颜色。'),\\ncustom: Schema.string().pattern(/^custom$/i).description('这里只能输入 \`custom\`。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"fr-FR/schema/basic/string.md","filePath":"fr-FR/schema/basic/string.md"}`),e={name:"fr-FR/schema/basic/string.md"},o=a(`<h1 id="string-chaine-de-caracteres" tabindex="-1">String : Chaîne de caractères <a class="header-anchor" href="#string-chaine-de-caracteres" aria-label="Permalink to &quot;String : Chaîne de caractères&quot;">​</a></h1><p><code>Schema.string()</code> 描述了一个字符串，支持多种特殊外观。</p><ul><li>secret：默认情况下不显示输入框中的内容，可点击按钮切换</li><li>link：点击可访问输入框中的链接 (同时输入框也会稍长一些)</li><li>textarea：输入框显示在配置项下侧，为自适应高度的多行文本域 <ul><li>可以通过 <code>rows</code> 属性来限制文本域的最小和最大行数</li></ul></li><li>color：输入框显示为颜色选择器</li></ul><p>可以使用 <code>.pattern()</code> 限制输入的内容符合某个正则表达式。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">text</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">secret</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;secret&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;password&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">link</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;link&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;https://github.com&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">area</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;textarea&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">rows</span><span style="color:var(--shiki-token-text);">: [</span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">4</span><span style="color:var(--shiki-token-text);">] }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">color</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">role</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;color&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">custom</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">pattern</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">/</span><span style="color:var(--shiki-token-keyword);">^</span><span style="color:var(--shiki-token-parameter);">custom</span><span style="color:var(--shiki-token-keyword);">$</span><span style="color:var(--shiki-token-parameter);">/</span><span style="color:var(--shiki-token-keyword);">i</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,5),r=[o];function i(l,p,c,k,h,y){return n(),t("div",null,r)}const d=s(e,[["render",i]]);export{x as __pageData,d as default};
