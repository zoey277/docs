import{_ as s,p as r,s as n,v as o,L as e,D as l,I as a,S as i,q as d}from"./chunks/framework.3f494197.js";const R=JSON.parse('{"title":"群组角色 (GuildRole) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/platform/role.md","filePath":"de-DE/api/platform/role.md"}'),c={name:"de-DE/api/platform/role.md"},g={id:"群组角色-实验性",tabindex:"-1"},u=o("a",{class:"header-anchor",href:"#群组角色-实验性","aria-label":'Permalink to "群组角色 (GuildRole) <badge type="warning">实验性</badge>"'},"​",-1),p=i(`<h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">GuildRole</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">color</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">position</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-setguildmemberrole" tabindex="-1">bot.setGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-setguildmemberrole" aria-label="Permalink to &quot;bot.setGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>设置群组内用户的角色。</p><h3 id="bot-unsetguildmemberrole" tabindex="-1">bot.unsetGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-unsetguildmemberrole" aria-label="Permalink to &quot;bot.unsetGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>取消群组内用户的角色。</p><h3 id="bot-getguildrolelist" tabindex="-1">bot.getGuildRoleList(guildId, next?) <a class="header-anchor" href="#bot-getguildrolelist" aria-label="Permalink to &quot;bot.getGuildRoleList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;GuildRole&gt;&gt;</code> 角色列表</li></ul><p>获取群组角色列表。</p>`,12),h={id:"bot-getguildroleiter-内置",tabindex:"-1"},b=o("a",{class:"header-anchor",href:"#bot-getguildroleiter-内置","aria-label":'Permalink to "bot.getGuildRoleIter(guildId) <badge>内置</badge>"'},"​",-1),I=i('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>AsyncIterable&lt;GuildRole&gt;</code> 异步迭代器</li></ul><p>获取群组角色列表的异步迭代器。</p><h3 id="bot-createguildrole" tabindex="-1">bot.createGuildRole(guildId, data) <a class="header-anchor" href="#bot-createguildrole" aria-label="Permalink to &quot;bot.createGuildRole(guildId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;string&gt;</code> 角色 ID</li></ul><p>创建群组角色。</p><h3 id="bot-modifyguildrole" tabindex="-1">bot.modifyGuildRole(guildId, roleId, data) <a class="header-anchor" href="#bot-modifyguildrole" aria-label="Permalink to &quot;bot.modifyGuildRole(guildId, roleId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改群组角色。</p><h3 id="bot-deleteguildrole" tabindex="-1">bot.deleteGuildRole(guildId, roleId) <a class="header-anchor" href="#bot-deleteguildrole" aria-label="Permalink to &quot;bot.deleteGuildRole(guildId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>删除群组角色。</p>',11);function k(m,_,y,v,x,f){const t=r("badge");return d(),n("div",null,[o("h1",g,[e("群组角色 (GuildRole) "),l(t,{type:"warning"},{default:a(()=>[e("实验性")]),_:1}),e(),u]),p,o("h3",h,[e("bot.getGuildRoleIter(guildId) "),l(t,null,{default:a(()=>[e("内置")]),_:1}),e(),b]),I])}const G=s(c,[["render",k]]);export{R as __pageData,G as default};
