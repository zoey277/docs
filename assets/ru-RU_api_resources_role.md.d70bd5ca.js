import{_ as a,p as i,s as r,v as l,L as e,D as d,I as s,S as o,q as n}from"./chunks/framework.26d7e063.js";const q=JSON.parse('{"title":"群组角色 (GuildRole)","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/resources/role.md","filePath":"ru-RU/api/resources/role.md"}'),u={name:"ru-RU/api/resources/role.md"},c=o(`<h1 id="群组角色" tabindex="-1">群组角色 (GuildRole) <a class="header-anchor" href="#群组角色" aria-label="Permalink to &quot;群组角色 (GuildRole)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">GuildRole</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-setguildmemberrole" tabindex="-1">bot.setGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-setguildmemberrole" aria-label="Permalink to &quot;bot.setGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>设置群组内用户的角色。</p><h3 id="bot-unsetguildmemberrole" tabindex="-1">bot.unsetGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-unsetguildmemberrole" aria-label="Permalink to &quot;bot.unsetGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>取消群组内用户的角色。</p><h3 id="bot-getguildrolelist" tabindex="-1">bot.getGuildRoleList(guildId, next?) <a class="header-anchor" href="#bot-getguildrolelist" aria-label="Permalink to &quot;bot.getGuildRoleList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;GuildRole&gt;&gt;</code> 角色列表</li></ul><p>获取群组角色列表。</p>`,13),g={id:"bot-getguildroleiter-内置",tabindex:"-1"},p=l("a",{class:"header-anchor",href:"#bot-getguildroleiter-内置","aria-label":'Permalink to "bot.getGuildRoleIter(guildId) <badge>内置</badge>"'},"​",-1),h=o('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>AsyncIterable&lt;GuildRole&gt;</code> 异步迭代器</li></ul><p>获取群组角色列表的异步迭代器。</p><h3 id="bot-createguildrole" tabindex="-1">bot.createGuildRole(guildId, data) <a class="header-anchor" href="#bot-createguildrole" aria-label="Permalink to &quot;bot.createGuildRole(guildId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;GuildRole&gt;</code></li></ul><p>创建群组角色。</p><h3 id="bot-updateguildrole" tabindex="-1">bot.updateGuildRole(guildId, roleId, data) <a class="header-anchor" href="#bot-updateguildrole" aria-label="Permalink to &quot;bot.updateGuildRole(guildId, roleId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改群组角色。</p><h3 id="bot-deleteguildrole" tabindex="-1">bot.deleteGuildRole(guildId, roleId) <a class="header-anchor" href="#bot-deleteguildrole" aria-label="Permalink to &quot;bot.deleteGuildRole(guildId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>删除群组角色。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="guild-role-created" tabindex="-1">guild-role-created <a class="header-anchor" href="#guild-role-created" aria-label="Permalink to &quot;guild-role-created&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>创建群组角色时触发。</p><h3 id="guild-role-updated" tabindex="-1">guild-role-updated <a class="header-anchor" href="#guild-role-updated" aria-label="Permalink to &quot;guild-role-updated&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>群组角色信息更新时触发。</p><h3 id="guild-role-deleted" tabindex="-1">guild-role-deleted <a class="header-anchor" href="#guild-role-deleted" aria-label="Permalink to &quot;guild-role-deleted&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>删除群组角色时触发。</p>',21);function b(I,m,k,_,x,P){const t=i("badge");return n(),r("div",null,[c,l("h3",g,[e("bot.getGuildRoleIter(guildId) "),d(t,null,{default:s(()=>[e("内置")]),_:1}),e(),p]),h])}const v=a(u,[["render",b]]);export{q as __pageData,v as default};
