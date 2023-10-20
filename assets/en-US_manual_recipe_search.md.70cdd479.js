import{_ as e,s as i,q as o,S as a}from"./chunks/framework.26d7e063.js";const m=JSON.parse('{"title":"Search Marketplace","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/recipe/search.md","filePath":"en-US/manual/recipe/search.md"}'),t={name:"en-US/manual/recipe/search.md"},r=a('<h1 id="search-marketplace" tabindex="-1">Search Marketplace <a class="header-anchor" href="#search-marketplace" aria-label="Permalink to &quot;Search Marketplace&quot;">​</a></h1><p>There are many plugins in the Koishi marketplace. A set of search query syntax was provided in order to make the searching experience smooth and convinient. You can enter the syntax like <code>is:preview</code> in the search box to quickly filter plugins for a category.</p><h2 id="search-terms" tabindex="-1">Search Terms <a class="header-anchor" href="#search-terms" aria-label="Permalink to &quot;Search Terms&quot;">​</a></h2><p>In addition to special syntax with colon numbers, the search term you enter will be used for querying：</p><ul><li>Plugin name</li><li>Plugin description</li><li>Plugin keywords</li></ul><h2 id="plugin-identification" tabindex="-1">Plugin identification <a class="header-anchor" href="#plugin-identification" aria-label="Permalink to &quot;Plugin identification&quot;">​</a></h2><p>We provide four categories of plugin identifiers, which are also filters.Including:</p><ul><li><code>is:verified</code>: Official Verified (tick)</li><li><code>is:insecure</code>: Unsecure (exclamation mark)</li><li><code>is:preview</code>: Developing (wrenk)</li><li><code>created:&gt;date</code>: Recently created (bud)</li></ul><p>In addition, there are some unmarked filters:</p><ul><li><code>is:installed</code>: Installed</li><li><code>is:portable</code>: Portable</li><li><code>updated:&gt;date</code>: Recently updated</li></ul><p>The above filters can also be reversely selected, e.g. <code>not:insecure</code> or <code>created:&lt;date</code>.In the sidebar, you can click on the identifier to select, click twice to reverse the selection, click three times to cancel the selection.</p><h2 id="plugin-categories" tabindex="-1">Plugin Categories <a class="header-anchor" href="#plugin-categories" aria-label="Permalink to &quot;Plugin Categories&quot;">​</a></h2><p>We currently offer 14 base categories. They are:</p><ul><li><code>category:core</code>: Core features</li><li><code>category:adapter</code>: Adapter</li><li><code>category:storage</code>: Storage service</li><li><code>category:extension</code>: Extensions</li><li><code>category:console</code>: Console</li><li><code>category:manage</code>: Management tools</li><li><code>category:preset</code>: Behavior presets</li><li><code>category:image</code>: Image service</li><li><code>category:media</code>: Information service</li><li><code>category:tool</code>: Utils</li><li><code>category:ai</code>: Artificial intelligence</li><li><code>category:meme</code>: Fun interactives</li><li><code>category:game</code>: Games</li><li><code>category:gametool</code>: Game Support</li></ul><p>The categories of plugins are maintained by members of the Koishi team, usually within one week after the plugin is published.Very few plugins do not belong to any category.If you think your plugin is not sorted correctly, you can submit an issue for feedback.</p><h2 id="sort-plugins" tabindex="-1">Sort Plugins <a class="header-anchor" href="#sort-plugins" aria-label="Permalink to &quot;Sort Plugins&quot;">​</a></h2><p>Plugins in the marketplace will be sorted by default according to their ratings.Rating is a value between 0 and 5 and will show as stars after rounded.Rating is weighted by multiple indicators, with some common indicators listed below:</p><ul><li>Open-sourced</li><li>Mark as insecure/preview</li><li>Downloads of the plugin</li><li>Size of the plugin</li></ul><p>Beside to sort by rating, you can also choose another sorting method:</p><ul><li><code>sort:download</code>: sorted by download</li><li><code>sort:created</code>: sorted by creation time</li><li><code>sort:updated</code>: sorted by update time</li></ul><p>If you want to sort reversely, add <code>-asc</code> backwards. Such as <code>sort:creed-asc</code>.In the sidebar, you can click on the &quot;Sort Type&quot; to sort, click twice to reverse the sequencing, click three times to cancel the sequencing.</p><h2 id="quick-experience" tabindex="-1">Quick Experience <a class="header-anchor" href="#quick-experience" aria-label="Permalink to &quot;Quick Experience&quot;">​</a></h2><p>::: Warning Quick experience is still experimental. It is only available in the marketplace in official documents. :::</p><p><a href="https://koishi.online" target="_blank" rel="noreferrer">Koishi Online (k-on!)</a> is an online Koishi runtime.You can quickly experience the functionality of the plugin without installing Koishi locally.A plugin that can used on k-on! will show a lightning button. Click it to quickly create a k-on! instance.如果你是插件开发者，可以参考 <a href="./../../cookbook/practice/online.html">这篇文章</a> 来将你的插件部署到 k-on!。</p>',24),c=[r];function l(n,s,d,u,h,p){return o(),i("div",null,c)}const f=e(t,[["render",l]]);export{m as __pageData,f as default};
