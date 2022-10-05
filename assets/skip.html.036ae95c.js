import{_ as t,o as p,c as o,a,t as n,d as e,e as c}from"./app.fbc72659.js";const r={},i={id:"frontmatter-title-for-filters",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u=e(),d=e(" for filters"),h={style:{"white-space":"pre-wrap","margin-top":"10px"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; skip (n)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>n</code>: the number of elements to skip</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Skip two elements</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>editions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2018</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2021</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token number">2</span>
</code></pre></div><p>Skip the first value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> skip
</code></pre></div>`,9);function m(s,f){return p(),o("div",null,[a("h1",i,[l,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",h,n(s.$frontmatter.filters),1),k])}const b=t(r,[["render",m],["__file","skip.html.vue"]]);export{b as default};
