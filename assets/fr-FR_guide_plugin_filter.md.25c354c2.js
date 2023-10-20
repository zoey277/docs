import{_ as s,s as n,q as a,S as t}from"./chunks/framework.3f494197.js";const x=JSON.parse('{"title":"Filtres","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/guide/plugin/filter.md","filePath":"fr-FR/guide/plugin/filter.md"}'),o={name:"fr-FR/guide/plugin/filter.md"},e=t(`<h1 id="filtres" tabindex="-1">Filtres <a class="header-anchor" href="#filtres" aria-label="Permalink to &quot;Filtres&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在学习本节之前，建议先完整阅读 <a href="./../../manual/usage/customize.html#过滤器">入门 &gt; 过滤器</a>。</p></div><p>默认情况下，一个会话事件、中间件或者指令都对所有的会话生效。但如果我们希望这些功能只对部分群聊或者用户生效，我们就需要用到 <strong>过滤器</strong>。</p><h2 id="属性过滤器" tabindex="-1">属性过滤器 <a class="header-anchor" href="#属性过滤器" aria-label="Permalink to &quot;属性过滤器&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请不要滥用这项功能：在源码中直接书写账号或群号会导致隐私泄露，并且其他用户无法使用你的插件。推荐 <a href="#配置文件中的过滤器">在配置文件中使用过滤器</a>。</p></div><p>让我们先从最简单的会话过滤器开始。<strong>属性过滤器</strong>可以用来快速创建满足特定条件的子上下文：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">)                  </span><span style="color:#7F848E;font-style:italic;">// 选择来自用户 112233 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">self</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">)                  </span><span style="color:#7F848E;font-style:italic;">// 选择发送给机器人 112233 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">)                 </span><span style="color:#7F848E;font-style:italic;">// 选择来自群组 445566 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">channel</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;778899&#39;</span><span style="color:var(--shiki-token-text);">)               </span><span style="color:#7F848E;font-style:italic;">// 选择来自频道 778899 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">platform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;discord&#39;</span><span style="color:var(--shiki-token-text);">)             </span><span style="color:#7F848E;font-style:italic;">// 选择来自平台 discord 的会话</span></span></code></pre></div><p>这种写法也支持链式的调用：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自平台 discord 中用户 112233 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">platform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;discord&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><p>利用上下文，你可以非常方便地对每个环境进行分别配置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 在所有环境注册中间件</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">callback</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 注册指令 my-command，仅对机器人 112233 有效</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">self</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;my-command&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 当有人申请加群 445566 时触发 listener</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">on</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;guild-request&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">listener</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 安装插件 ./my-plugin，仅限 Telegram 平台使用</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">platform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;telegram&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;./my-plugin&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><p>是不是非常方便呢？</p><h2 id="条件过滤器" tabindex="-1">条件过滤器 <a class="header-anchor" href="#条件过滤器" aria-label="Permalink to &quot;条件过滤器&quot;">​</a></h2><p>如果简单的会话过滤器无法满足你的需求，你也可以给一个上下文添加<strong>条件过滤器</strong>：它传入一个会话对象，并返回一个布尔类型。条件过滤器有三种添加方式：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 满足当前上下文条件，且消息内容为“啦啦啦”</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;啦啦啦&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 满足当前上下文条件，或消息内容为“啦啦啦”</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;啦啦啦&#39;</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 满足当前上下文条件，且消息内容不为“啦啦啦”</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">exclude</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">content</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">===</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;啦啦啦&#39;</span><span style="color:var(--shiki-token-text);">)</span></span></code></pre></div><p>上述方法也可以传入一个上下文作为参数，分别表示两个上下文的交集、并集和差集：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自群组 1122233 和用户 445566 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自群组 1122233 或用户 445566 的会话</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 选择来自群组 1122233 的会话，但来自用户 445566 的会话除外</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">guild</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;112233&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">exclude</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">user</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;445566&#39;</span><span style="color:var(--shiki-token-text);">))</span></span></code></pre></div><p>与选择器方法类似，过滤器方法也会返回一个新的上下文，你可以在其上自由的添加监听器、中间件、指令和插件。</p><h2 id="配置文件中的过滤器" tabindex="-1">配置文件中的过滤器 <a class="header-anchor" href="#配置文件中的过滤器" aria-label="Permalink to &quot;配置文件中的过滤器&quot;">​</a></h2><p>如果你遵循了模块化的开发理念，你的插件应该具有较为独立的功能。那么此时，你的插件内部其实并不需要使用过滤器，而是在插件加载时指定一次即可。在这种情况下，Koishi 提供了直接在配置文件中指定过滤器的方法：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">plugins</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">repeater</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">$filter</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;"># 仅在 telegram 平台下 2 个特定频道内注册插件</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">$and</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        - </span><span style="color:var(--shiki-token-parameter);">$eq</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">            - </span><span style="color:var(--shiki-token-parameter);">$</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">platform</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">            - </span><span style="color:var(--shiki-token-string);">telegram</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        - </span><span style="color:var(--shiki-token-parameter);">$in</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">            - </span><span style="color:var(--shiki-token-parameter);">$</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">channel</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">            - - </span><span style="color:var(--shiki-token-string);">&#39;123456&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">              - </span><span style="color:var(--shiki-token-string);">&#39;456789&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">onRepeat</span><span style="color:var(--shiki-token-text);">:</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">minTimes</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">3</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">probability</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">0.5</span></span></code></pre></div><p>这相当于</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">ctx</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">platform</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;telegram&#39;</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">channel</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;123456&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;456789&#39;</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  .</span><span style="color:var(--shiki-token-function);">plugin</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-function);">require</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-repeater&#39;</span><span style="color:var(--shiki-token-text);">), {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">onRepeat</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">minTimes</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">3</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">probability</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">0.5</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span></code></pre></div><p>我必须承认这种写法并不是很简便，但事实上它设计出来也不是让你手写的。在控制台的「插件配置」界面我们提供了图形化的过滤器配置，你可以在那里轻松地配置每个插件的会话过滤器。这个图形化界面对插件组也同样有效。</p><h2 id="隐藏过滤器设置" tabindex="-1">隐藏过滤器设置 <a class="header-anchor" href="#隐藏过滤器设置" aria-label="Permalink to &quot;隐藏过滤器设置&quot;">​</a></h2><p>特别地，如果你的插件不涉及任何会话，不需要设置会话过滤器，你也可以在插件中手动声明 <code>filter</code> 属性为 <code>false</code> (声明方式参考 <a href="./schema.html#插件的元属性">插件的元属性</a>)：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 作为导出整体的函数插件</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;Foo&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">filter</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">false</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {}</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 作为默认导出的类插件</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Bar</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">static</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">filter</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">false</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="定义条件属性" tabindex="-1">定义条件属性 <a class="header-anchor" href="#定义条件属性" aria-label="Permalink to &quot;定义条件属性&quot;">​</a></h2><p>过滤器除了可以控制插件生效的范围，还能控制具体配置项的取值。使用 <code>Schema.computed()</code> 创建一个条件属性，它可以在会话满足不同过滤器时取不同的值：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Computed</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">computed</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">Number</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">(({ </span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);"> }) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 在会话满足不同过滤器时取不同的值</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">value</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">config</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div>`,31),l=[e];function p(i,r,k,c,y,h){return a(),n("div",null,l)}const d=s(o,[["render",p]]);export{x as __pageData,d as default};
