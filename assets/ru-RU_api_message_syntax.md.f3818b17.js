import{_ as s,s as a,q as t,S as e}from"./chunks/framework.3f494197.js";const v=JSON.parse('{"title":"语法规范","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/message/syntax.md","filePath":"ru-RU/api/message/syntax.md"}'),n={name:"ru-RU/api/message/syntax.md"},o=e(`<h1 id="语法规范" tabindex="-1">语法规范 <a class="header-anchor" href="#语法规范" aria-label="Permalink to &quot;语法规范&quot;">​</a></h1><p>大多数涉及消息的地方都可以使用消息元素，例如：</p><ul><li>消息相关的机器人 API</li><li>指令和中间件的返回值</li><li>本地化文件的翻译条目</li></ul><p>本节将介绍这些地方传入字符串时所用到的语法规范。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><p>消息元素的语法与 HTML 类似，但是不完全相同。</p><h3 id="字符" tabindex="-1">字符 <a class="header-anchor" href="#字符" aria-label="Permalink to &quot;字符&quot;">​</a></h3><p>你可以在消息元素内使用任何字符。不过部分特殊字符需要转义：</p><table><thead><tr><th style="text-align:center;">原始字符</th><th style="text-align:center;">转义写法</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&quot;</code></td><td style="text-align:center;"><code>&amp;quot;</code></td></tr><tr><td style="text-align:center;"><code>&amp;</code></td><td style="text-align:center;"><code>&amp;amp;</code></td></tr><tr><td style="text-align:center;"><code>&lt;</code></td><td style="text-align:center;"><code>&amp;lt;</code></td></tr><tr><td style="text-align:center;"><code>&gt;</code></td><td style="text-align:center;"><code>&amp;gt;</code></td></tr></tbody></table><p>根据上下文的不同，有些字符可能不需要被转义或使用其他的转义方式。</p><p>除此以外，你可以使用十进制或十六进制转义任何字符。例如 <code>&#39;</code> 也可以被书写成 <code>&amp;#39;</code> 或 <code>&amp;#x27;</code>。</p><h3 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-label="Permalink to &quot;标签&quot;">​</a></h3><p>使用一对尖括号包裹元素名，加上可选的属性、闭合指示符，就构成了一个标签。</p><p>元素名由小写字母、数字和连字符组成，且必须以字母开头。在元素名前后添加 <code>/</code> 表示这是一个结束标签或自闭合标签，没有 <code>/</code> 符号时则表示这是一个起始标签：</p><ul><li><code>&lt;tag&gt;</code> 一个起始标签</li><li><code>&lt;/tag&gt;</code> 一个结束标签</li><li><code>&lt;tag/&gt;</code> 一个自闭合标签</li></ul><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><p>起始或自闭合标签的元素名后接受可选的属性列表。每个属性必须形如以下形式：</p><ul><li><code>key</code></li><li><code>key=&quot;value&quot;</code> (此时 <code>value</code> 中的 <code>&quot;</code> 需要被转义)</li><li><code>key=&#39;value&#39;</code> (此时 <code>value</code> 中的 <code>&#39;</code> 需要被转义)</li></ul><p>下面是一段示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">foo</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;1&quot;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">bar</span><span style="color:var(--shiki-token-text);">/&gt;</span></span></code></pre></div><h3 id="元素" tabindex="-1">元素 <a class="header-anchor" href="#元素" aria-label="Permalink to &quot;元素&quot;">​</a></h3><p>一个元素要么是自闭合标签，要么由一对同名的起始标签和结束标签构成。元素的内容指起始标签和结束标签中间的部分，可以包含文本内容或其他元素。对于自闭合标签，元素的内容为空。下面是一段示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">parent</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  text content</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">child</span><span style="color:var(--shiki-token-text);">/&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">parent</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><p>当存在未配对的元素时，将自动视为文本内容的一部分。文本内容前后如果存在包含换行符的连续空白字符，则会被忽略。这意味着下面两段代码是等价的：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;</span><span style="color:var(--shiki-token-parameter);">foo</span><span style="color:var(--shiki-token-text);">&gt; bar</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- comment --&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);">&gt;</span><span style="color:var(--shiki-token-parameter);">&amp;lt;</span><span style="color:var(--shiki-token-text);">foo</span><span style="color:var(--shiki-token-parameter);">&amp;gt;</span><span style="color:var(--shiki-token-text);"> bar&lt;/</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h3><p>使用成对的 <code>&lt;!--</code> 和 <code>--&gt;</code> 插入一段注释。注释中的部分不会被渲染。</p><h3 id="插值" tabindex="-1">插值 <a class="header-anchor" href="#插值" aria-label="Permalink to &quot;插值&quot;">​</a></h3><p>在本地化条目中我们在上述规范的基础上额外允许插值语法。插值语法通过一对花括号 <code>{}</code> 声明，其可能出现在属性值或元素内容中。当表示属性值时，花括号将取代引号的作用。</p><p>插值语法中的内容会被解析为一个取值表达式，其结果会被转换为字符串后插入到原始字符串中。下面是一段示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">foo</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">{bar}</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  {baz}qux</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><p>当传入 <code>{ bar: 1, baz: 2 }</code> 时，上述消息元素将会被解析为：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">foo</span><span style="color:var(--shiki-token-text);">=</span><span style="color:var(--shiki-token-string);">&quot;1&quot;</span><span style="color:var(--shiki-token-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  2qux</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">&lt;/</span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);">&gt;</span></span></code></pre></div><p>这里的取值表达式会有别于 JavaScript 表达式，它实际相当于传入对象的一个属性路径。例如当传入数组 <code>[&#39;a&#39;, &#39;b&#39;]</code> 时，取值表达式 <code>{0}</code> 将会被解析为 <code>a</code> (而不是 <code>0</code>)。</p><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><h3 id="与-html-的区别" tabindex="-1">与 HTML 的区别 <a class="header-anchor" href="#与-html-的区别" aria-label="Permalink to &quot;与 HTML 的区别&quot;">​</a></h3><p>下面列举出了一些消息元素与 HTML 语法上的区别：</p><ul><li>没有空元素，所有元素都必须手动闭合</li><li>未配对的元素被视为文本内容的一部分</li></ul><h3 id="与-jsx-的区别" tabindex="-1">与 JSX 的区别 <a class="header-anchor" href="#与-jsx-的区别" aria-label="Permalink to &quot;与 JSX 的区别&quot;">​</a></h3><p>在大部分使用场景下，我们都推荐直接使用 JSX，这会拥有更好的编辑器支持。你可以对比下面三种写法，它们是等价的：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">h</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;你好呀，&#39;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">+</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">h</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;at&#39;</span><span style="color:var(--shiki-token-text);">, { </span><span style="color:var(--shiki-token-parameter);">id</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">userId</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">\`&lt;&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">    你好呀，</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">    &lt;at id=&quot;</span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">userId</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-string);">&quot;/&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-string);">  &lt;/&gt;\`</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> &lt;&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    你好呀，</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    &lt;</span><span style="color:var(--shiki-token-parameter);">at</span><span style="color:var(--shiki-token-text);"> </span><span style="color:#D19A66;font-style:italic;">id</span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-keyword);">{</span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">userId</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-text);">/&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  &lt;/&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>而在本地化条目中，你将无法使用 JSX，此时就需要使用带插值的消息元素了。例如：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:var(--shiki-token-parameter);">welcome</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">你好呀，&lt;at id={userId}/&gt;</span></span></code></pre></div><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">middleware</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">session</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">session</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">text</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;welcome&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">session</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">})</span></span></code></pre></div><p>下面列举出了一些插值的消息元素与 JSX 语法上的区别：</p><ul><li>使用 <code>&lt;!--</code> 和 <code>--&gt;</code> 作为注释，而不是 <code>{/*</code> 和 <code>*/}</code></li><li><code>{}</code> 内只能是取值表达式，而不能是任意 JavaScript 表达式或其他元素</li></ul>`,49),l=[o];function p(r,i,c,k,h,y){return t(),a("div",null,l)}const x=s(n,[["render",p]]);export{v as __pageData,x as default};
