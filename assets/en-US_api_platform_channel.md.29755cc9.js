import{_ as n,p as l,s,v as e,L as a,D as o,I as i,S as r,q as c}from"./chunks/framework.26d7e063.js";const C=JSON.parse('{"title":"频道 (Channel)","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/platform/channel.md","filePath":"en-US/api/platform/channel.md"}'),h={name:"en-US/api/platform/channel.md"},d=r(`<h1 id="频道" tabindex="-1">频道 (Channel) <a class="header-anchor" href="#频道" aria-label="Permalink to &quot;频道 (Channel)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>消歧义：本节介绍跨平台协议中的频道对象。</p><ul><li>要了解数据库中的频道，请前往 <a href="./../database/built-in.html#channel">API &gt; 数据库 &gt; 内置数据结构</a></li><li>要了解两者的区别，请前往 <a href="./../glossary.html#频道">API &gt; 术语表</a></li></ul></div><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Channel</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getchannel" tabindex="-1">bot.getChannel(channelId) <a class="header-anchor" href="#bot-getchannel" aria-label="Permalink to &quot;bot.getChannel(channelId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li>返回值: <code>Promise&lt;Channel&gt;</code> 频道信息</li></ul><p>获取频道信息。</p><h3 id="bot-getchannellist" tabindex="-1">bot.getChannelList(guildId, next?) <a class="header-anchor" href="#bot-getchannellist" aria-label="Permalink to &quot;bot.getChannelList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;Channel&gt;&gt;</code> 频道列表</li></ul><p>获取某个群组的频道列表。</p>`,11),p={id:"bot-getchanneliter-内置",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#bot-getchanneliter-内置","aria-label":'Permalink to "bot.getChannelIter(guildId) <badge>内置</badge>"'},"​",-1),u=e("ul",null,[e("li",null,[e("strong",null,"guildId:"),a(),e("code",null,"string"),a(" 群组 ID")]),e("li",null,[a("返回值: "),e("code",null,"AsyncIterable<Channel>"),a(" 异步迭代器")])],-1),k=e("p",null,"获取某个群组的频道列表的异步迭代器。",-1);function _(b,m,v,x,I,f){const t=l("badge");return c(),s("div",null,[d,e("h3",p,[a("bot.getChannelIter(guildId) "),o(t,null,{default:i(()=>[a("内置")]),_:1}),a(),g]),u,k])}const P=n(h,[["render",_]]);export{C as __pageData,P as default};
