import{_ as t,o,c as p,a,t as n,d as e,e as r}from"./app.fbc72659.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u=e(),d=e(" for filters"),h={style:{"white-space":"pre-wrap","margin-top":"10px"}},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; merge (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run and merge into the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Merge an index column into the input table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span> <span class="token operator">|</span> wrap name <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> wrap index <span class="token punctuation">}</span>
</code></pre></div><p>Merge two records</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span>, b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token punctuation">{</span>c: <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>Merge two records with overlap key</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span>, b: <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token punctuation">{</span>b: <span class="token number">2</span>, c: <span class="token number">4</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div>`,11);function m(s,g){return o(),p("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",h,n(s.$frontmatter.filters),1),k])}const f=t(c,[["render",m],["__file","merge.html.vue"]]);export{f as default};
