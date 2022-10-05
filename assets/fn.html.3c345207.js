import{_ as t,o,c as r,a as e,t as s,d as n,e as c}from"./app.fbc72659.js";const i={},d={id:"frontmatter-title-for-db-expression",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-db-expression","aria-hidden":"true"},"#",-1),l=n(),h=n(" for db-expression"),u={style:{"white-space":"pre-wrap","margin-top":"10px"}},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fn (name) ...arguments --distinct</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: function name</li><li><code>...arguments</code>: function arguments</li><li><code>--distinct</code>: distict values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates a function expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fn count name_1 <span class="token operator">|</span> into nu
</code></pre></div><p>orders query by a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token punctuation">(</span>fn lead col_a<span class="token punctuation">)</span>
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function m(a,_){return o(),r("div",null,[e("h1",d,[p,l,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.db_expression),1),f])}const b=t(i,[["render",m],["__file","fn.html.vue"]]);export{b as default};
