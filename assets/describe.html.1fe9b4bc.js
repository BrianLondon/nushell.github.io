import{_ as r,o,c as i,a,t as s,d as t,e as n}from"./app.fbc72659.js";const c={},d={id:"frontmatter-title-for-core",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),l=t(),h=t(" for core"),u={style:{"white-space":"pre-wrap","margin-top":"10px"}},f=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; describe </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Describe the type of a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> describe
</code></pre></div>`,5),_={id:"frontmatter-title-for-database",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),b=t(),g=t(" for database"),k={style:{"white-space":"pre-wrap","margin-top":"10px"}},x=n(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; describe </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Describe SQLite database constructed query</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.db <span class="token operator">|</span> from table table_1 <span class="token operator">|</span> <span class="token keyword">select</span> col_1 <span class="token operator">|</span> describe
</code></pre></div>`,5),v={id:"frontmatter-title-for-dataframe",tabindex:"-1"},w=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),y=t(),S=t(" for dataframe"),$={style:{"white-space":"pre-wrap","margin-top":"10px"}},q=n(`<h2 id="signature-2" tabindex="-1"><a class="header-anchor" href="#signature-2" aria-hidden="true">#</a> Signature</h2><p><code>&gt; describe --quantiles</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--quantiles {table}</code>: optional quantiles for describe</li></ul><h2 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h2><p>dataframe description</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> describe
</code></pre></div>`,7);function E(e,B){return o(),i("div",null,[a("h1",d,[p,l,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.core),1),f,a("h1",_,[m,b,a("code",null,s(e.$frontmatter.title),1),g]),a("div",k,s(e.$frontmatter.database),1),x,a("h1",v,[w,y,a("code",null,s(e.$frontmatter.title),1),S]),a("div",$,s(e.$frontmatter.dataframe),1),q])}const N=r(c,[["render",E],["__file","describe.html.vue"]]);export{N as default};
