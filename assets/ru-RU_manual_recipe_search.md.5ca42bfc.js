import{_ as e,s as o,q as a,S as i}from"./chunks/framework.26d7e063.js";const _=JSON.parse('{"title":"搜索插件市场","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/manual/recipe/search.md","filePath":"ru-RU/manual/recipe/search.md"}'),l={name:"ru-RU/manual/recipe/search.md"},c=i('<h1 id="搜索插件市场" tabindex="-1">搜索插件市场 <a class="header-anchor" href="#搜索插件市场" aria-label="Permalink to &quot;搜索插件市场&quot;">​</a></h1><p>Koishi 有着丰富的插件生态。为了让用户更方便地搜索插件，我们提供了一套搜索语法。你可以在搜索框中输入形如 <code>is:preview</code> 的语法来快速过滤某个类别的插件。</p><h2 id="搜索词" tabindex="-1">搜索词 <a class="header-anchor" href="#搜索词" aria-label="Permalink to &quot;搜索词&quot;">​</a></h2><p>除去含有冒号的特殊语法外，你输入的搜索词会被用于查询：</p><ul><li>插件名称</li><li>插件描述</li><li>插件的关键词</li></ul><h2 id="插件标识" tabindex="-1">插件标识 <a class="header-anchor" href="#插件标识" aria-label="Permalink to &quot;插件标识&quot;">​</a></h2><p>我们提供了四种插件标识，它们本身也是过滤条件。包括：</p><ul><li><code>is:verified</code>：官方认证 (对钩)</li><li><code>is:insecure</code>：不安全 (叹号)</li><li><code>is:preview</code>：开发中 (扳手)</li><li><code>created:&gt;date</code>：近期新增 (树苗)</li></ul><p>此外，还有一写不带标识的过滤条件：</p><ul><li><code>is:installed</code>：已安装</li><li><code>is:portable</code>：快速体验</li><li><code>updated:&gt;date</code>：近期更新</li></ul><p>上述的过滤条件也可以反向选择，例如 <code>not:insecure</code> 或 <code>created:&lt;date</code>。在侧边栏中，你可以点击标识名称进行选择，点击第二次反向选择，点击第三次则会取消选择。</p><h2 id="插件分类" tabindex="-1">插件分类 <a class="header-anchor" href="#插件分类" aria-label="Permalink to &quot;插件分类&quot;">​</a></h2><p>我们目前提供了 14 个基础分类。它们分别是：</p><ul><li><code>category:core</code>：核心功能</li><li><code>category:adapter</code>：适配器</li><li><code>category:storage</code>：存储服务</li><li><code>category:extension</code>：扩展功能</li><li><code>category:console</code>：控制台</li><li><code>category:manage</code>：管理工具</li><li><code>category:preset</code>：行为预设</li><li><code>category:image</code>：图片服务</li><li><code>category:media</code>：资讯服务</li><li><code>category:tool</code>：实用工具</li><li><code>category:ai</code>：人工智能</li><li><code>category:meme</code>：趣味交互</li><li><code>category:game</code>：娱乐玩法</li><li><code>category:gametool</code>：游戏辅助</li></ul><p>插件的分类由 Koishi 团队成员负责维护，通常在插件发布后的一周内完成。极少数插件不会属于任何类别。如果你认为你的插件没有被正确分类，可以提交议题进行反馈。</p><h2 id="插件排序" tabindex="-1">插件排序 <a class="header-anchor" href="#插件排序" aria-label="Permalink to &quot;插件排序&quot;">​</a></h2><p>插件市场中的插件会默认根据其评分进行排序。评分是一个 0~5 之间的数值，并在四舍五入后会显示为星星的个数。评分由多个指标加权计算得到，下面列举出了一些常见的指标：</p><ul><li>插件是否开源</li><li>插件是否被标记为不安全 / 开发中</li><li>插件的下载量</li><li>插件的安装体积</li></ul><p>除了按照评分排序，你还可以选择其他的排序方式：</p><ul><li><code>sort:download</code>：按下载量排序</li><li><code>sort:created</code>：按创建时间排序</li><li><code>sort:updated</code>：按更新时间排序</li></ul><p>如果要反向排序，可以在后面加上 <code>-asc</code>，例如 <code>sort:created-asc</code>。在侧边栏中，你可以点击排序方式进行排序，点击第二次反向排序，点击第三次则会取消排序。</p><h2 id="快速体验" tabindex="-1">快速体验 <a class="header-anchor" href="#快速体验" aria-label="Permalink to &quot;快速体验&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>快速体验目前仍然是实验性功能，仅在官方文档中的插件市场里可用。</p></div><p><a href="https://koishi.online" target="_blank" rel="noreferrer">Koishi Online (k-on!)</a> 是一个在线的 Koishi 运行时。你可以在其中快速体验插件的功能，而无需在本地安装 Koishi。适配了 k-on! 的插件会显示一个闪电按钮，点击即可快速创建一个 k-on! 实例。如果你是插件开发者，可以参考 <a href="./../../cookbook/practice/online.html">这篇文章</a> 来将你的插件部署到 k-on!。</p>',24),d=[c];function t(r,s,n,h,p,u){return a(),o("div",null,d)}const g=e(l,[["render",t]]);export{_ as __pageData,g as default};
