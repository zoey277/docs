import{_ as s,s as a,q as n,S as t}from"./chunks/framework.26d7e063.js";const d=JSON.parse('{"title":"编写翻译文件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/guide/i18n/translation.md","filePath":"zh-TW/guide/i18n/translation.md"}'),e={name:"zh-TW/guide/i18n/translation.md"},o=t(`<h1 id="编写翻译文件" tabindex="-1">编写翻译文件 <a class="header-anchor" href="#编写翻译文件" aria-label="Permalink to &quot;编写翻译文件&quot;">​</a></h1><p><code>i18n.define()</code> 允许开发者为自己的插件提供多套翻译，但直接将每种语言的翻译文本写进源代码并不利于代码的解耦。因此我们建议开发者将翻译文件写在一个单独的目录中，同时 <code>i18n.define()</code> 只需要引用这个目录中的文件即可：</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">plugin-root</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">├── src</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">│   ├── locales</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">│   │   ├── en-US.yml</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">│   │   └── zh-CN.yml</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">│   └── index.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">└── package.json</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;en-US&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;./locales/en-US&#39;</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">i18n</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">define</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;zh-CN&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;./locales/zh-CN&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在上面的例子中我们使用了 yaml 作为翻译文件的格式。这是因为它的语法简洁美观，非常适合本地化开发。你也可以采用 json 等任何你喜欢的格式进行开发。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Node.js 并不支持直接加载 yaml / yml 后缀的文件，但我们可以通过适当的 <a href="https://nodejs.org/api/cli.html#-r---require-module" target="_blank" rel="noreferrer">register</a> 解决这个问题。对此我们的官方脚手架已经内置了相应的支持。</p></div><h2 id="指令本地化" tabindex="-1">指令本地化 <a class="header-anchor" href="#指令本地化" aria-label="Permalink to &quot;指令本地化&quot;">​</a></h2><p>在 <a href="./../basic/command.html#编写帮助">编写帮助</a> 一节中，我们已经了解到指令和参数的描述文本都是在指令注册时就定义的。这种做法对单语言开发固然方便，但并不适合多语言开发，因为它将翻译逻辑与代码逻辑耦合了。如果你希望你编写的指令支持多语言，那么需要将翻译文本单独定义：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">commands</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">description</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">指令描述</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">usage</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-keyword);">|</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">      指令用法</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">      可以是多行文本</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">examples</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-keyword);">|</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">      foo qux</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">      foo --bar qux</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">options</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">选项描述</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">option</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><h3 id="作用域渲染" tabindex="-1">作用域渲染 <a class="header-anchor" href="#作用域渲染" aria-label="Permalink to &quot;作用域渲染&quot;">​</a></h3><h2 id="工作区开发" tabindex="-1">工作区开发 <a class="header-anchor" href="#工作区开发" aria-label="Permalink to &quot;工作区开发&quot;">​</a></h2><h2 id="覆盖默认文本" tabindex="-1">覆盖默认文本 <a class="header-anchor" href="#覆盖默认文本" aria-label="Permalink to &quot;覆盖默认文本&quot;">​</a></h2>`,13),l=[o];function i(r,p,c,k,h,y){return n(),a("div",null,l)}const x=s(e,[["render",i]]);export{d as __pageData,x as default};
