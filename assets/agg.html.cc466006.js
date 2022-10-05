import{_ as p,o,c as e,a as n,t as s,d as t,e as c}from"./app.fbc72659.js";const r={},u={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},l=n("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),i=t(),k=t(" for lazyframe"),d={style:{"white-space":"pre-wrap","margin-top":"10px"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; agg ...Group by expressions</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...Group by expressions</code>: Expression(s) that define the aggregations to be applied</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Group by and perform an aggregation</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into <span class="token function">df</span>
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> min <span class="token operator">|</span> as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> max <span class="token operator">|</span> as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
</code></pre></div><p>Group by and perform an aggregation</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into lazy
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> min <span class="token operator">|</span> as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> max <span class="token operator">|</span> as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
    <span class="token operator">|</span> collect
</code></pre></div>`,9);function b(a,g){return o(),e("div",null,[n("h1",u,[l,i,n("code",null,s(a.$frontmatter.title),1),k]),n("div",d,s(a.$frontmatter.lazyframe),1),m])}const f=p(r,[["render",b],["__file","agg.html.vue"]]);export{f as default};
