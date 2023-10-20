import{_ as s,s as n,q as t,S as a}from"./chunks/framework.3f494197.js";const d=JSON.parse(`{"title":"Union: Tagged 2","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\nSchema.object({\\nshared: Schema.string().description('公用的配置项。'),\\ntype: Schema.union(['foo', 'bar']).required().description('选择一个类型。'),\\n}).description('基础配置'),\\nSchema.union([\\nSchema.object({\\ntype: Schema.const('foo').required(),\\nvalue: Schema.number().default(114514).description('请输入一个数值。'),\\n}).description('特殊配置 1'),\\nSchema.object({\\ntype: Schema.const('bar').required(),\\ntext: Schema.string().description('请输入一个字符串。'),\\n}).description('特殊配置 2'),\\n]),\\n])\\n"},"headers":[],"relativePath":"en-US/schema/advanced/union-tagged-2.md","filePath":"en-US/schema/advanced/union-tagged-2.md"}`),e={name:"en-US/schema/advanced/union-tagged-2.md"},o=a(`<h1 id="union-tagged-2" tabindex="-1">Union: Tagged 2 <a class="header-anchor" href="#union-tagged-2" aria-label="Permalink to &quot;Union: Tagged 2&quot;">​</a></h1><p>一种比较复杂的场景是以对象的某个属性值确定对象的其他属性的类型。善用 Intersect 和 Union，我们就可以轻松实现表单项的联动效果！试着切换 <code>type</code> 的取值，并观察下方表单项的变化吧。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">shared</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">type</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">([</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">]).</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;基础配置&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">union</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">type</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">const</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;foo&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">value</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">number</span><span style="color:var(--shiki-token-text);">().</span><span style="color:var(--shiki-token-function);">default</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-number);">114514</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;特殊配置 1&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">object</span><span style="color:var(--shiki-token-text);">({</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">type</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">const</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;bar&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">required</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">text</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">string</span><span style="color:var(--shiki-token-text);">(),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }).</span><span style="color:var(--shiki-token-function);">description</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;特殊配置 2&#39;</span><span style="color:var(--shiki-token-text);">),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  ]),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">])</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意这个例子中对于 <code>default()</code> 和 <code>required()</code> 的使用。由于配置项默认情况下都是可选的，所以下方的 <code>type</code> 配置项如果类型与上方的默认值不同，就必须加上 <code>required()</code>。在这个例子中，<code>type</code> 本来就是一个必需属性，所以下方的每一个 <code>type</code> 都必须加上 <code>required()</code>。</p></div>`,4),i=[o];function r(p,l,c,k,h,y){return t(),n("div",null,i)}const x=s(e,[["render",r]]);export{d as __pageData,x as default};
