import{_ as e,s as t,q as a,S as l}from"./chunks/framework.26d7e063.js";const p=JSON.parse('{"title":"会话过滤器 (Selector)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/service/selector.md","filePath":"ja-JP/api/service/selector.md"}'),o={name:"ja-JP/api/service/selector.md"},c=l('<h1 id="会话过滤器" tabindex="-1">会话过滤器 (Selector) <a class="header-anchor" href="#会话过滤器" aria-label="Permalink to &quot;会话过滤器 (Selector)&quot;">​</a></h1><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><h3 id="ctx-filter" tabindex="-1">ctx.filter <a class="header-anchor" href="#ctx-filter" aria-label="Permalink to &quot;ctx.filter&quot;">​</a></h3><ul><li>类型: <code>(session: Session) =&gt; boolean</code></li></ul><p>当前上下文绑定的会话过滤器。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><p>有关这里的 API，请参见 <a href="./../../guide/plugin/selector.html#会话过滤器">使用上下文</a>。</p><h3 id="ctx-any" tabindex="-1">ctx.any() <a class="header-anchor" href="#ctx-any" aria-label="Permalink to &quot;ctx.any()&quot;">​</a></h3><ul><li>返回值: <code>Context</code> 新的上下文</li></ul><p>选取上下文全集。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这个方法与 <code>ctx.root</code> 的区别在于，后者不受插件管理器控制，容易产生内存泄漏。因此我们建议，除非你已经为你的插件声明了副作用，你应当尽量使用这个方法。参见 <a href="./../../guide/plugin/lifecycle.html#dispose-事件"></a>。</p></div><h3 id="ctx-never" tabindex="-1">ctx.never() <a class="header-anchor" href="#ctx-never" aria-label="Permalink to &quot;ctx.never()&quot;">​</a></h3><ul><li>返回值: <code>Context</code> 新的上下文</li></ul><p>选取上下文空集。</p><h3 id="ctx-self" tabindex="-1">ctx.self(...values) <a class="header-anchor" href="#ctx-self" aria-label="Permalink to &quot;ctx.self(...values)&quot;">​</a></h3><h3 id="ctx-user" tabindex="-1">ctx.user(...values) <a class="header-anchor" href="#ctx-user" aria-label="Permalink to &quot;ctx.user(...values)&quot;">​</a></h3><h3 id="ctx-guild" tabindex="-1">ctx.guild(...values) <a class="header-anchor" href="#ctx-guild" aria-label="Permalink to &quot;ctx.guild(...values)&quot;">​</a></h3><h3 id="ctx-channel" tabindex="-1">ctx.channel(...values) <a class="header-anchor" href="#ctx-channel" aria-label="Permalink to &quot;ctx.channel(...values)&quot;">​</a></h3><h3 id="ctx-platform" tabindex="-1">ctx.platform(...values) <a class="header-anchor" href="#ctx-platform" aria-label="Permalink to &quot;ctx.platform(...values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>string[]</code> 允许的机器人 / 用户 / 群组 / 频道 / 平台名称构成的数组</li><li>返回值: <code>Context</code> 新的上下文</li></ul><p>选取当前上下文的子集，限定机器人 / 用户 / 群组 / 频道 / 平台名称为所给定的值。</p><h3 id="ctx-union" tabindex="-1">ctx.union(filter) <a class="header-anchor" href="#ctx-union" aria-label="Permalink to &quot;ctx.union(filter)&quot;">​</a></h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> 另一个上下文或者过滤器函数</li><li>返回值: <code>Context</code> 新的上下文</li></ul><p>给出当前上下文和其他上下文的并集。</p><h3 id="ctx-intersect" tabindex="-1">ctx.intersect(filter) <a class="header-anchor" href="#ctx-intersect" aria-label="Permalink to &quot;ctx.intersect(filter)&quot;">​</a></h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> 另一个上下文或者过滤器函数</li><li>返回值: <code>Context</code> 新的上下文</li></ul><p>给出当前上下文和其他上下文的交集。</p><h3 id="ctx-exclude" tabindex="-1">ctx.exclude(filter) <a class="header-anchor" href="#ctx-exclude" aria-label="Permalink to &quot;ctx.exclude(filter)&quot;">​</a></h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> 另一个上下文或者过滤器函数</li><li>返回值: <code>Context</code> 新的上下文</li></ul><p>给出当前上下文和其他上下文的差集。</p>',30),i=[c];function r(n,s,d,h,u,x){return a(),t("div",null,i)}const b=e(o,[["render",r]]);export{p as __pageData,b as default};
