import{_ as t,o as p,c as o,a,t as n,d as e,e as c}from"./app.fbc72659.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u=e(),k=e(" for filters"),d={style:{"white-space":"pre-wrap","margin-top":"10px"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; each (block) --keep-empty --numbered</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run</li><li><code>--keep-empty</code>: keep empty result cells</li><li><code>--numbered</code>: iterate with an index</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Multiplies elements in list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token number">2</span> * <span class="token variable">$it</span> <span class="token punctuation">}</span>
</code></pre></div><p>Iterate over each element, keeping only values that succeed</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;found 2!&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>Iterate over each element, print the matching value and its index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token parameter variable">-n</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span>.item <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> $<span class="token string">&quot;found 2 at (<span class="token variable">$it</span>.index)!&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>Iterate over each element, keeping all results</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each --keep-empty <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;found 2!&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div>`,13);function m(s,b){return p(),o("div",null,[a("h1",r,[i,u,a("code",null,n(s.$frontmatter.title),1),k]),a("div",d,n(s.$frontmatter.filters),1),h])}const f=t(l,[["render",m],["__file","each.html.vue"]]);export{f as default};
