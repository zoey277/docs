import{_ as e,s as t,q as a,S as i}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"插件系统 (Registry)","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/api/service/registry.md","filePath":"fr-FR/api/service/registry.md"}'),o={name:"fr-FR/api/service/registry.md"},r=i('<h1 id="插件系统" tabindex="-1">插件系统 (Registry) <a class="header-anchor" href="#插件系统" aria-label="Permalink to &quot;插件系统 (Registry)&quot;">​</a></h1><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><p>以下实例属性都是只读的。</p><h3 id="ctx-scope" tabindex="-1">ctx.scope <a class="header-anchor" href="#ctx-scope" aria-label="Permalink to &quot;ctx.scope&quot;">​</a></h3><ul><li>类型: <code>State</code></li></ul><p>当前上下文关联的 State 对象。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-plugin" tabindex="-1">ctx.plugin(plugin, options?) <a class="header-anchor" href="#ctx-plugin" aria-label="Permalink to &quot;ctx.plugin(plugin, options?)&quot;">​</a></h3><ul><li><strong>plugin:</strong> <code>Plugin</code> 要安装的插件</li><li><strong>options:</strong> <code>any</code> 要传入插件的参数</li><li>返回值: <code>Fork</code></li></ul><p>当前上下文中安装一个插件。参见 <a href="./../../guide/plugin/">认识插件</a>。</p><h3 id="ctx-using" tabindex="-1">ctx.using(deps, plugin) <a class="header-anchor" href="#ctx-using" aria-label="Permalink to &quot;ctx.using(deps, plugin)&quot;">​</a></h3><ul><li><strong>deps:</strong> <code>string[]</code> 依赖的服务列表</li><li><strong>plugin:</strong> <code>Plugin</code> 要安装的插件</li><li>返回值: <code>this</code></li></ul><p>安装一个存在服务依赖的插件。参见 <a href="./../../guide/plugin/service.html#服务的依赖关系">服务的依赖关系</a>。</p><h3 id="ctx-dispose" tabindex="-1">ctx.dispose(plugin?) <a class="header-anchor" href="#ctx-dispose" aria-label="Permalink to &quot;ctx.dispose(plugin?)&quot;">​</a></h3><ul><li><strong>plugin:</strong> <code>Plugin</code> 要移除的插件</li><li>返回值: <code>Runtime</code></li></ul><p>移除插件中所注册的钩子、中间件、指令和子插件等。<code>plugin</code> 是默认为当前上下文所在的插件。如果既没有提供 <code>plugin</code>，上下文也不是一个插件上下文的话，会抛出一个错误。参见 <a href="./../../guide/plugin/#卸载插件">卸载插件</a>。</p><h3 id="ctx-start" tabindex="-1">ctx.start() <a class="header-anchor" href="#ctx-start" aria-label="Permalink to &quot;ctx.start()&quot;">​</a></h3><ul><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>启动此应用。</p><h3 id="ctx-stop" tabindex="-1">ctx.stop() <a class="header-anchor" href="#ctx-stop" aria-label="Permalink to &quot;ctx.stop()&quot;">​</a></h3><ul><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>停止此应用。</p><h2 id="类-state" tabindex="-1">类：State <a class="header-anchor" href="#类-state" aria-label="Permalink to &quot;类：State&quot;">​</a></h2><h2 id="类-runtime" tabindex="-1">类：Runtime <a class="header-anchor" href="#类-runtime" aria-label="Permalink to &quot;类：Runtime&quot;">​</a></h2>',24),l=[r];function s(c,n,d,u,h,p){return a(),t("div",null,l)}const m=e(o,[["render",s]]);export{x as __pageData,m as default};
