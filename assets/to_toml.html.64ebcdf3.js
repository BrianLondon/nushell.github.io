import{_ as n,o,c as r,a as t,t as s,d as e,e as c}from"./app.fbc72659.js";const p={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=t("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),d=e(),u=e(" for formats"),h={style:{"white-space":"pre-wrap","margin-top":"10px"}},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to toml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an TOML string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to toml
</code></pre></div>`,5);function f(a,m){return o(),r("div",null,[t("h1",i,[l,d,t("code",null,s(a.$frontmatter.title),1),u]),t("div",h,s(a.$frontmatter.formats),1),_])}const k=n(p,[["render",f],["__file","to_toml.html.vue"]]);export{k as default};
