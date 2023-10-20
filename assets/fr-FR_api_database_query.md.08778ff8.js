import{_ as a,s as e,q as s,S as t}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"查询表达式 (Query)","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/api/database/query.md","filePath":"fr-FR/api/database/query.md"}'),o={name:"fr-FR/api/database/query.md"},n=t(`<h1 id="查询表达式" tabindex="-1">查询表达式 (Query) <a class="header-anchor" href="#查询表达式" aria-label="Permalink to &quot;查询表达式 (Query)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/">开发 &gt; 数据库 &gt; 基本用法</a></p></div><p>查询表达式用于表达数据库操作中的约束条件。你可以在 <a href="./database.html"><code>Database</code></a> 或 <a href="./selection.html"><code>Selection</code></a> 的实例方法中使用。查询表达式的基本形式是一个字典，其中的键是字段名，值是约束条件。例如：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">database</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">bar</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">baz</span><span style="color:var(--shiki-token-text);">: { </span><span style="color:var(--shiki-token-parameter);">$gt</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">2</span><span style="color:var(--shiki-token-text);"> },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>上述查询表达式的意思是：<code>bar</code> 字段的值等于 <code>1</code>，且 <code>baz</code> 字段的值大于 <code>2</code>。</p><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><h3 id="fieldexpr" tabindex="-1">FieldExpr <a class="header-anchor" href="#fieldexpr" aria-label="Permalink to &quot;FieldExpr&quot;">​</a></h3><p>本节中定义的具体操作符构成的对象，例如 <code>{ $gt: 2 }</code>。</p><h3 id="shorthand" tabindex="-1">Shorthand <a class="header-anchor" href="#shorthand" aria-label="Permalink to &quot;Shorthand&quot;">​</a></h3><p>为了简化查询操作符的书写，我们为特定类型的字段引入了一些简写形式：</p><ul><li>如果该字段的类型是可比较类型，那么接受一个同类型的值，相当于 <a href="#eq"><code>$eq</code></a> 操作符</li><li>如果该字段的类型是可索引类型，那么接受一个数组，相当于 <a href="#in"><code>$in</code></a> 操作符</li><li>如果该字段的类型是字符串，那么接受一个正则表达式，相当于 <a href="#regex"><code>$regex</code></a> 操作符</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">type</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Extract</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">S</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">U</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">S</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">U</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">never</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">type</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Shorthand</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  | </span><span style="color:var(--shiki-token-constant);">Extract</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">Comparable</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  | </span><span style="color:var(--shiki-token-constant);">Extract</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">Indexable</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">[]&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  | </span><span style="color:var(--shiki-token-constant);">Extract</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">RegExp</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><h3 id="fieldquery" tabindex="-1">FieldQuery <a class="header-anchor" href="#fieldquery" aria-label="Permalink to &quot;FieldQuery&quot;">​</a></h3><p>某个字段的约束条件。可以是一个 <a href="#fieldexpr"><code>FieldExpr</code></a> 或 <a href="#shorthand"><code>Shorthand</code></a>。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">type</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">FieldQuery</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">FieldExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; | </span><span style="color:var(--shiki-token-constant);">Shorthand</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><h3 id="queryexpr" tabindex="-1">QueryExpr <a class="header-anchor" href="#queryexpr" aria-label="Permalink to &quot;QueryExpr&quot;">​</a></h3><p>一个字典，其中的键是字段名，值是该字段约束条件。除此以外，还可以使用逻辑运算符 <code>$or</code>, <code>$and</code>, <code>$not</code> 来组合多个约束条件。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">type</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">QueryExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">LogicalExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; &amp; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  [</span><span style="color:var(--shiki-token-constant);">K</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">in</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">keyof</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">]</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">null</span><span style="color:var(--shiki-token-text);"> | </span><span style="color:var(--shiki-token-constant);">FieldQuery</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">[</span><span style="color:var(--shiki-token-constant);">K</span><span style="color:var(--shiki-token-text);">]&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">LogicalExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">$or</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">QueryExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt;[]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">$and</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">QueryExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt;[]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">$not</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">QueryExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h3 id="query" tabindex="-1">Query <a class="header-anchor" href="#query" aria-label="Permalink to &quot;Query&quot;">​</a></h3><p>某个表的约束条件。它可以是：</p><ul><li>一个 <a href="#queryexpr"><code>QueryExpr</code></a>，用于约束表中的字段</li><li>一个 <a href="#shorthand"><code>Shorthand</code></a>，用于约束表中的主键 (如果主键唯一)</li><li>一个 <a href="./selection.html#callback"><code>Callback</code></a>，可以在其中使用求值表达式</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">type</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Query</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">QueryExpr</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">&gt; | </span><span style="color:var(--shiki-token-constant);">Shorthand</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Indexable</span><span style="color:var(--shiki-token-text);">&gt; | </span><span style="color:var(--shiki-token-constant);">Callback</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">T</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-constant);">boolean</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><h2 id="逻辑运算" tabindex="-1">逻辑运算 <a class="header-anchor" href="#逻辑运算" aria-label="Permalink to &quot;逻辑运算&quot;">​</a></h2><p>逻辑运算可以出现在 <code>QueryExpr</code> 或 <code>FieldExpr</code> 中。根据出现的场合，它们的类型和含义也会有所不同。</p><h3 id="or" tabindex="-1">$or <a class="header-anchor" href="#or" aria-label="Permalink to &quot;$or&quot;">​</a></h3><ul><li>类型: <code>QueryExpr[]</code> (作为 <code>QueryExpr</code> 时)</li><li>类型: <code>FieldExpr[]</code> (作为 <code>FieldExpr</code> 时)</li></ul><p>一组约束条件的或运算。</p><h3 id="and" tabindex="-1">$and <a class="header-anchor" href="#and" aria-label="Permalink to &quot;$and&quot;">​</a></h3><ul><li>类型: <code>QueryExpr[]</code> (作为 <code>QueryExpr</code> 时)</li><li>类型: <code>FieldExpr[]</code> (作为 <code>FieldExpr</code> 时)</li></ul><p>一组约束条件的与运算。</p><h3 id="not" tabindex="-1">$not <a class="header-anchor" href="#not" aria-label="Permalink to &quot;$not&quot;">​</a></h3><ul><li>类型: <code>QueryExpr</code> (作为 <code>QueryExpr</code> 时)</li><li>类型: <code>FieldExpr</code> (作为 <code>FieldExpr</code> 时)</li></ul><p>约束条件的否定。</p><h2 id="元素运算" tabindex="-1">元素运算 <a class="header-anchor" href="#元素运算" aria-label="Permalink to &quot;元素运算&quot;">​</a></h2><h3 id="in" tabindex="-1">$in <a class="header-anchor" href="#in" aria-label="Permalink to &quot;$in&quot;">​</a></h3><ul><li>类型: <code>T[]</code> (<code>T extends Indexable</code>)</li></ul><p>判断字段的值是否在给定的数组中。</p><h3 id="nin" tabindex="-1">$nin <a class="header-anchor" href="#nin" aria-label="Permalink to &quot;$nin&quot;">​</a></h3><ul><li>类型: <code>T[]</code> (<code>T extends Indexable</code>)</li></ul><p>判断字段的值是否不在给定的数组中。</p><h2 id="比较运算" tabindex="-1">比较运算 <a class="header-anchor" href="#比较运算" aria-label="Permalink to &quot;比较运算&quot;">​</a></h2><h3 id="eq" tabindex="-1">$eq <a class="header-anchor" href="#eq" aria-label="Permalink to &quot;$eq&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否等于给定的值。</p><h3 id="ne" tabindex="-1">$ne <a class="header-anchor" href="#ne" aria-label="Permalink to &quot;$ne&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否不等于给定的值。</p><h3 id="gt" tabindex="-1">$gt <a class="header-anchor" href="#gt" aria-label="Permalink to &quot;$gt&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否大于给定的值。</p><h3 id="gte" tabindex="-1">$gte <a class="header-anchor" href="#gte" aria-label="Permalink to &quot;$gte&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否大于或等于给定的值。</p><h3 id="lt" tabindex="-1">$lt <a class="header-anchor" href="#lt" aria-label="Permalink to &quot;$lt&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否小于给定的值。</p><h3 id="lte" tabindex="-1">$lte <a class="header-anchor" href="#lte" aria-label="Permalink to &quot;$lte&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否小于或等于给定的值。</p><h2 id="列表运算" tabindex="-1">列表运算 <a class="header-anchor" href="#列表运算" aria-label="Permalink to &quot;列表运算&quot;">​</a></h2><h3 id="el" tabindex="-1">$el <a class="header-anchor" href="#el" aria-label="Permalink to &quot;$el&quot;">​</a></h3><ul><li>类型: <a href="#fieldexpr"><code>FieldExpr&lt;U&gt;</code></a> (<code>T extends U[]</code>)</li></ul><p>判断列表中是否存在满足给定约束条件的元素。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>部分数据库可能不支持使用子条件，因此请尽量只使用 <a href="#eq"><code>$eq</code></a> 操作符。</p></div><h3 id="size" tabindex="-1">$size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;$size&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends any[]</code>)</li></ul><p>判断列表的长度是否等于给定的值。</p><h2 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h2><h3 id="regex" tabindex="-1">$regex <a class="header-anchor" href="#regex" aria-label="Permalink to &quot;$regex&quot;">​</a></h3><ul><li>类型: <code>RegExp</code> (<code>T extends string</code>)</li></ul><p>判断字段的值是否匹配给定的正则表达式。</p><h3 id="regexfor" tabindex="-1">$regexFor <a class="header-anchor" href="#regexfor" aria-label="Permalink to &quot;$regexFor&quot;">​</a></h3><ul><li>类型: <code>string</code> (<code>T extends string</code>)</li></ul><p>将字段的值作为正则表达式，判断给定的字符串是否匹配。</p><h2 id="位运算" tabindex="-1">位运算 <a class="header-anchor" href="#位运算" aria-label="Permalink to &quot;位运算&quot;">​</a></h2><h3 id="bitsallset" tabindex="-1">$bitsAllSet <a class="header-anchor" href="#bitsallset" aria-label="Permalink to &quot;$bitsAllSet&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否包含给定的全部位。</p><h3 id="bitsallclear" tabindex="-1">$bitsAllClear <a class="header-anchor" href="#bitsallclear" aria-label="Permalink to &quot;$bitsAllClear&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否不包含给定的全部位。</p><h3 id="bitsanyset" tabindex="-1">$bitsAnySet <a class="header-anchor" href="#bitsanyset" aria-label="Permalink to &quot;$bitsAnySet&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否包含给定的任意位。</p><h3 id="bitsanyclear" tabindex="-1">$bitsAnyClear <a class="header-anchor" href="#bitsanyclear" aria-label="Permalink to &quot;$bitsAnyClear&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否不包含给定的任意位。</p>`,87),l=[n];function r(i,p,c,k,h,d){return s(),e("div",null,l)}const v=a(o,[["render",r]]);export{x as __pageData,v as default};
