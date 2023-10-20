import{_ as o,p as e,s as l,D as i,I as n,S as a,q as p,v as s}from"./chunks/framework.3f494197.js";const _=JSON.parse('{"title":"编写测试","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/cookbook/practice/testing.md","filePath":"fr-FR/cookbook/practice/testing.md"}'),r={name:"fr-FR/cookbook/practice/testing.md"},k=a('<h1 id="编写测试" tabindex="-1">编写测试 <a class="header-anchor" href="#编写测试" aria-label="Permalink to &quot;编写测试&quot;">​</a></h1><p>如果你是一位成熟的开发者，你一定知道测试的重要性。比起让机器人真正运行起来交给用户去试错，预先编写好的测试具有许多前者所不具有的优点：</p><ul><li>可以在无网络的情况下运行</li><li>可以模拟出多用户交互等复杂情况</li><li>可以在内存中模拟你想要的数据库</li><li>能够有效避免风控带来的损失</li><li>便于调试与错误定位</li></ul><p>本章将介绍官方插件 <code>@koishijs/plugin-mock</code>。你可以用它来快速检验你编写的 Koishi 插件。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中介绍的样例用到了 <a href="https://mochajs.org/" target="_blank" rel="noreferrer">Mocha</a> 和 <a href="https://www.chaijs.com/" target="_blank" rel="noreferrer">Chai</a>。它们都是比较通用的测试库和断言库，但并非绑定 @koishijs/plugin-mock 一同使用。你也可以根据你的喜好选择其他工具，比如 <a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a> 等等。</p></div><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>首先在工作区中安装所需的测试工具以及 @koishijs/plugin-mock：</p>',7),c=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"mocha"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"chai"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-mock"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/mocha"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/chai"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-DW")])])])],-1),y=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"add"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"mocha"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"chai"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@koishijs/plugin-mock"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/mocha"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"@types/chai"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-DW")])])])],-1),h=a(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里的 <code>-W</code> 表明直接安装到根工作区。你也可以改成只对一个插件添加这些依赖，不过考虑到你可能会在其他插件中也用到它们，安装到根工作区会更加方便。</p></div><p>接着在插件目录中创建存放测试文件的 <code>tests</code> 目录，并在其中新建 <code>index.spec.ts</code> 文件：</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">└── example</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    ├── src</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    │   └── index.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+   ├── tests</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">+   │   └── index.spec.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    └── package.json</span></span></code></pre></div><p>这个文件将用于编写测试代码：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">index.spec.ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">mock</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-mock&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">Context</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">mock</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><h3 id="配置测试脚本" tabindex="-1">配置测试脚本 <a class="header-anchor" href="#配置测试脚本" aria-label="Permalink to &quot;配置测试脚本&quot;">​</a></h3><p>TODO</p><h2 id="模拟会话消息" tabindex="-1">模拟会话消息 <a class="header-anchor" href="#模拟会话消息" aria-label="Permalink to &quot;模拟会话消息&quot;">​</a></h2><p>对于聊天机器人来说最常见的需求是处理用户的消息。为此，我们提供了 <strong>客户端 (Client)</strong> 对象，用于模拟特定频道和用户的输入：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">mock</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-mock&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">Context</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">mock</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个 userId 为 123 的私聊客户端</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">mock</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">client</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;123&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 这是一个简单的中间件例子，下面将测试这个中间件</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">(({ </span><span style="color:#E06C75;font-style:italic;">content</span><span style="color:var(--shiki-token-text);"> }, </span><span style="color:#E06C75;font-style:italic;">next</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;天王盖地虎&#39;</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;宝塔镇河妖&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  } </span><span style="color:var(--shiki-token-keyword);">else</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">next</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 这一句不能少，要等待 app 启动完成</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">before</span><span style="color:var(--shiki-token-text);">(() </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">start</span><span style="color:var(--shiki-token-text);">())</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">after</span><span style="color:var(--shiki-token-text);">(() </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">stop</span><span style="color:var(--shiki-token-text);">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-function);">it</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;example 1&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-keyword);">async</span><span style="color:var(--shiki-token-text);"> () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 将“天王盖地虎”发送给机器人将会获得“宝塔镇河妖”的回复</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">shouldReply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;天王盖地虎&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;宝塔镇河妖&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 将“天王盖地虎”发送给机器人将会获得某些回复</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">shouldReply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;天王盖地虎&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 将“宫廷玉液酒”发送给机器人将不会获得任何回复</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">shouldNotReply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;宫廷玉液酒&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><h2 id="模拟数据库" tabindex="-1">模拟数据库 <a class="header-anchor" href="#模拟数据库" aria-label="Permalink to &quot;模拟数据库&quot;">​</a></h2><p>@koishijs/plugin-database-memory 是 Koishi 的一个基于内存的数据库实现，非常适合用于编写测试。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">mock</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-mock&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">memory</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;@koishijs/plugin-database-memory&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">Context</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">mock</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">memory</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 这次我们来测试一下这个指令</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">authority</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);"> }).</span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">(() </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 创建两个来自不同用户的客户端对象</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client1</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">mock</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">client</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;123&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client2</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">mock</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">client</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;456&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-function);">before</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-keyword);">async</span><span style="color:var(--shiki-token-text);"> () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">start</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 在数据库中初始化两个用户，userId 分别为 123 和 456，权限等级分别为 1 和 2</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// app.mock.initUser() 方法本质上只是 app.database.createUser() 的语法糖</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">mock</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">initUser</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;123&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">mock</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">initUser</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;456&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-function);">after</span><span style="color:var(--shiki-token-text);">(() </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">stop</span><span style="color:var(--shiki-token-text);">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-function);">it</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;example 2&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-keyword);">async</span><span style="color:var(--shiki-token-text);"> () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 用户 123 尝试调用 foo 指令，但是权限不足</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client1</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">shouldReply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;权限不足。&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 用户 456 得以正常调用 foo 指令</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">client2</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">shouldReply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div>`,13);function v(x,d,u,m,g,f){const t=e("tab-select");return p(),l("div",null,[k,i(t,{class:"code"},{"tab-npm":n(()=>[c]),"tab-yarn":n(()=>[y]),_:1}),h])}const b=o(r,[["render",v]]);export{_ as __pageData,b as default};
