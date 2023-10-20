import{_ as p,p as l,s as c,D as a,I as t,S as e,v as s,L as n,q as k}from"./chunks/framework.26d7e063.js";const N=JSON.parse('{"title":"Install as a dependency","description":"","frontmatter":{"prev":{"text":"Installation","link":"/en-US/manual/starter/"},"next":{"text":"Developing Guide","link":"/en-US/guide/"}},"headers":[],"relativePath":"en-US/manual/starter/direct.md","filePath":"en-US/manual/starter/direct.md"}'),y={name:"en-US/manual/starter/direct.md"},h=e('<h1 id="install-as-a-dependency" tabindex="-1">Install as a dependency <a class="header-anchor" href="#install-as-a-dependency" aria-label="Permalink to &quot;Install as a dependency&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This guide assumes that you know about secondary knowledge of <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noreferrer">JavaScript</a> and <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a>. If you just started learning JavaScript development recently, or are not interested in coding, please <a href="./">Choose Other Installation Methods</a>.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is strongly recommended to use template project for developing Koishi. If you are not sure what you are doing, it is recommended to read <a href="./boilerplate.html">Template Project</a> first.</p></div><p>While it is recommended to use the <a href="./boilerplate.html">boilerplate project</a> for most users, it would be more flexible when you directly embed Koishi as a dependency for your complicated application.</p><h2 id="initialize-your-project" tabindex="-1">Initialize Your Project <a class="header-anchor" href="#initialize-your-project" aria-label="Permalink to &quot;Initialize Your Project&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Koishi is written with TypeScript, so TypeScript would be the first class programming language when you are developing Koishi. In the following section of documents, we will use TypeScript as example language. If you are writing vanilla JavaScript or other JavaScript dialects, you could modify your own code based on the example code.</p></div><p>Koishi requires <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> (at least v16, suggested to use LTS versions) Runtime, you need to install it.Here we suppose you have it installed already.</p><p>Initialize a directly as your bot, install Koishi and common plugins, here we would install several official plugins as example: console, sandbox and echo.</p>',8),v=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# Initialize project")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"init")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# Install Koishi and plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-console"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"             "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-sandbox"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"             "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-echo")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# Install TypeScript and related packages (skip this if you don't use TypeScript)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"typescript"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/node"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild-register"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-D")])])])],-1),d=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# Initialize project")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"init")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# Install Koishi and plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-console"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"                "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-sandbox"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-operator)"}},"\\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-text)"}},"                "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-echo")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# Install TypeScript and related packages (skip this if you don't use TypeScript)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"typescript"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/node"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"esbuild-register"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-D")])])])],-1),u=e(`<p>Create an entry file <code>index.ts</code> and write down the code below:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">console</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-console&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">sandbox</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-sandbox&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">echo</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-echo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Create a new Koishi application</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">Context</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">port</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">5140</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Install plugins</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">console</span><span style="color:var(--shiki-token-text);">)     </span><span style="color:#7F848E;font-style:italic;">// Koishi Console</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">sandbox</span><span style="color:var(--shiki-token-text);">)     </span><span style="color:#7F848E;font-style:italic;">// Sandbox for debugging</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">echo</span><span style="color:var(--shiki-token-text);">)        </span><span style="color:#7F848E;font-style:italic;">// Echo command</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Launch the Koishi application</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">start</span><span style="color:var(--shiki-token-text);">()</span></span></code></pre></div><p>Then launch this file:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:var(--shiki-token-function);">node</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-r</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">esbuild-register</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">.</span></span></code></pre></div><p>Finally, open your browser and enter <code>http://localhost:5140</code>, you will see the Console Web UI. Click the &quot;Sandbox&quot; icon on the left side, then click &quot;Add User&quot; button to create a simulated user. Now you can talk to the bot:</p>`,5),x=s("h2",{id:"configure-the-bot",tabindex:"-1"},[n("Configure the Bot "),s("a",{class:"header-anchor",href:"#configure-the-bot","aria-label":'Permalink to "Configure the Bot"'},"​")],-1),g=s("p",null,"If you want to connect the bot to a real chat platform, what you need to do is to install an adapter plugin:",-1),f=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 以 Satori 和 Discord 适配器为例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-satori"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-discord")])])])],-1),m=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 以 Satori 和 Discord 适配器为例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-satori"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-adapter-discord")])])])],-1),_=e(`<p>Then modify the <code>index.ts</code> you just created. Every time you activated an adapter plugin instance, a new bot instance would be created:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">satori</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-adapter-satori&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">discord</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-adapter-discord&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用 Satori 适配器的机器人</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">satori</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">endpoint</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;http://127.0.0.1:5500&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用 Satori 适配器的另一个机器人，可以有不同的通信方式</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">satori</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">endpoint</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;http://127.0.0.1:5501&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用 Discord 适配器的机器人</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 别忘了在使用之前，先安装相应的插件和完成准备工作</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">discord</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">token</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;QwErTyUiOpAsDfGhJkLzXcVbNm&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><h2 id="add-more-plugins" tabindex="-1">Add More Plugins <a class="header-anchor" href="#add-more-plugins" aria-label="Permalink to &quot;Add More Plugins&quot;">​</a></h2><p>Koishi plugins could be installed from <a href="https://www.npmjs.com" target="_blank" rel="noreferrer">npm</a>. Normally the name of Koishi plugins should follow the patterns described below:</p><ul><li>koishi-plugin-foo</li><li>@koishijs/plugin-foo</li><li>@bar/koishi-plugin-foo</li></ul><p>As for community plugins, you could install and apply in a similar way:</p>`,6),b=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# As the example, install puppeteer and forward plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-puppeteer"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-forward")])])])],-1),w=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# As the example, install puppeteer and forward plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-puppeteer"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi-plugin-forward")])])])],-1),C=e(`<div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">puppeteer</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-puppeteer&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">forward</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-forward&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">puppeteer</span><span style="color:var(--shiki-token-text);">)   </span><span style="color:#7F848E;font-style:italic;">// browser-related service</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">forward</span><span style="color:var(--shiki-token-text);">)     </span><span style="color:#7F848E;font-style:italic;">// message forwarding</span></span></code></pre></div><p>Please note the delicate differences in the import methods of the two plugins above.puppeteer plugin uses default export, but forward plugin uses export namespace.These two methods are fundamentally different and cannot be intermingled, so you will need to decide for yourself which situation is for each plugin.While this may cause some trouble, if you are a TypeScript user, it is easy to judge with the help of typographical tips.</p><p>Similarly, for the users of CommonJS, if you want to use <code>require</code> to get plugin objects, you should also note this difference:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// Here&#39;s .default is untraceable</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-puppeteer&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-parameter);">default</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// This cannot be written .default</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-forward&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><p>Users using other installation methods do not need to be interested in these details because the template project has already helped you to process them.</p><h2 id="apply-interaction" tabindex="-1">Apply Interaction <a class="header-anchor" href="#apply-interaction" aria-label="Permalink to &quot;Apply Interaction&quot;">​</a></h2><p>In addition to plugins already packaged, we can add our own interactive logic:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// Reply with &quot;world&quot;, after receiving &quot;Hello&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">on</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;message&#39;</span><span style="color:var(--shiki-token-text);">, (</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;Hello&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;world&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span></code></pre></div><p>Then restart your project:</p>`,9),T=e(`<p>But this is not recommended because your <code>index.ts</code> becomes too large once more features.You can write the above logic in a separate file <code>ping.ts</code> and load it as a plugin:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ping.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;ping&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// Reply with &quot;world&quot;, after receiving &quot;Hello&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">on</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;message&#39;</span><span style="color:var(--shiki-token-text);">, (</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;Hello&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">send</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;world&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// Here the ./ping is the path to index.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">*</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">ping</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;./ping&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">ping</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><h2 id="what-s-next" tabindex="-1">What&#39;s Next... <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s Next...&quot;">​</a></h2><p>Congratulations on mastering the basic of Koishi! Next, let&#39;s go to <a href="./../../guide/">developing guide</a> to learn more about Koishi.</p>`,5);function S(E,I,j,A,F,q){const i=l("tab-select"),o=l("chat-message"),r=l("chat-panel");return k(),c("div",null,[h,a(i,{class:"code"},{"tab-npm":t(()=>[v]),"tab-yarn":t(()=>[d]),_:1}),u,a(r,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[n("echo Bonjour")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[n("Bonjour")]),_:1})]),_:1}),x,g,a(i,{class:"code"},{"tab-npm":t(()=>[f]),"tab-yarn":t(()=>[m]),_:1}),_,a(i,{class:"code"},{"tab-npm":t(()=>[b]),"tab-yarn":t(()=>[w]),_:1}),C,a(r,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[n("Hello")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[n("world")]),_:1})]),_:1}),T])}const K=p(y,[["render",S]]);export{N as __pageData,K as default};
