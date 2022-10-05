import{_ as r,o,c as i,a as e,t,d as s,e as n}from"./app.fbc72659.js";const c={},d={id:"frontmatter-title-for-misc",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-misc","aria-hidden":"true"},"#",-1),h=s(),p=s(" for misc"),u={style:{"white-space":"pre-wrap","margin-top":"10px"}},f=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; tutor (search) --find</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>search</code>: item to search for, or &#39;list&#39; to list available tutorials</li><li><code>--find {string}</code>: Search tutorial for a phrase</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Begin the tutorial</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor begin
</code></pre></div><p>Search a tutorial by phrase</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$in</span>&quot;</span>
</code></pre></div>`,9);function m(a,_){return o(),i("div",null,[e("h1",d,[l,h,e("code",null,t(a.$frontmatter.title),1),p]),e("div",u,t(a.$frontmatter.misc),1),f])}const b=r(c,[["render",m],["__file","tutor.html.vue"]]);export{b as default};
