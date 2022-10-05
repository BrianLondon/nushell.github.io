import{_ as r,o,c as n,a as e,t,d as s,e as d}from"./app.fbc72659.js";const c={},i={id:"frontmatter-title-for-core",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),l=s(),p=s(" for core"),m={style:{"white-space":"pre-wrap","margin-top":"10px"}},f=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; metadata (expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>expression</code>: the expression you want metadata for</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the metadata of a variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> metadata <span class="token variable">$a</span>
</code></pre></div><p>Get the metadata of the input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> metadata
</code></pre></div>`,9);function u(a,_){return o(),n("div",null,[e("h1",i,[h,l,e("code",null,t(a.$frontmatter.title),1),p]),e("div",m,t(a.$frontmatter.core),1),f])}const x=r(c,[["render",u],["__file","metadata.html.vue"]]);export{x as default};
