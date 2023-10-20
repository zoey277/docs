import{_ as s,s as a,q as n,S as t}from"./chunks/framework.26d7e063.js";const x=JSON.parse('{"title":"编写数据库插件","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/guide/database/writing.md","filePath":"fr-FR/guide/database/writing.md"}'),o={name:"fr-FR/guide/database/writing.md"},e=t(`<h1 id="编写数据库插件" tabindex="-1">编写数据库插件 <a class="header-anchor" href="#编写数据库插件" aria-label="Permalink to &quot;编写数据库插件&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">注意</p><p>此页文档正在施工，其中的内容可能不是最新。</p></div><p>现在让我们介绍一下如何编写一个数据库支持。与上面介绍的方法类似，我们也采用注入的方式，不过这次我们需要先实现一个类。我们用 mysql 来举个例子：</p><p>由于数据库支持往往要被其他插件或用户所使用，有一个好的类型标注是非常重要的。因此这里我们就只提供 TypeScript 的范例了。</p><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">createPool</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">Pool</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">PoolConfig</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;mysql&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">Database</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 从 Database 类派生出一个子类并将其默认导出</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">MysqlDatabase</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Database</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">private</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">pool</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Pool</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">PoolConfig</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> {}) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#E5C07B;font-style:italic;">super</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">ctx</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">this</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">pool</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">createPool</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">config</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">query</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">sql</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">values</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">any</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-constant);">Promise</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">any</span><span style="color:var(--shiki-token-text);">&gt; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Promise</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">reject</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-constant);">this</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">pool</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">query</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">sql</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">values</span><span style="color:var(--shiki-token-text);">, (</span><span style="color:#E06C75;font-style:italic;">error</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">results</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">fields</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-parameter);">error</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          </span><span style="color:var(--shiki-token-function);">reject</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">error</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        } </span><span style="color:var(--shiki-token-keyword);">else</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          </span><span style="color:var(--shiki-token-function);">resolve</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">results</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 实现内置方法</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">set</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">upsert</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">remove</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">create</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">drop</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">eval</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">stats</span><span style="color:var(--shiki-token-text);">() {}</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p>当然，真正的 <a href="./../../plugins/database/mysql.html">@koishijs/plugin-database-mysql</a> 要比上面的例子复杂的多，我们还需要处理有关数据库的更多细节。你可以在 <a href="https://github.com/koishijs/koishi/tree/master/plugins/database/mysql" target="_blank" rel="noreferrer">这里</a> 看到完整的源代码。</p>`,7),l=[e];function p(r,i,k,c,y,h){return n(),a("div",null,l)}const d=s(o,[["render",p]]);export{x as __pageData,d as default};
