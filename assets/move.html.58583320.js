import{_ as t,o,c as p,a,t as s,d as e,e as c}from"./app.fbc72659.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u=e(),d=e(" for filters"),m={style:{"white-space":"pre-wrap","margin-top":"10px"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; move ...columns --after --before</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...columns</code>: the columns to move</li><li><code>--after {string}</code>: the column that will precede the columns moved</li><li><code>--before {string}</code>: the column that will be the next after the columns moved</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Move a column before the first column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move index <span class="token parameter variable">--before</span> name
</code></pre></div><p>Move multiple columns after the last column and reorder them</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move value name <span class="token parameter variable">--after</span> index
</code></pre></div><p>Move columns of a record</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> name: foo, value: a, index: <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token operator">|</span> move name <span class="token parameter variable">--before</span> index
</code></pre></div>`,11);function k(n,f){return o(),p("div",null,[a("h1",l,[i,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",m,s(n.$frontmatter.filters),1),h])}const v=t(r,[["render",k],["__file","move.html.vue"]]);export{v as default};
