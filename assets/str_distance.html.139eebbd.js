import{_ as r,o as n,c as i,a as e,t as a,d as s,e as o}from"./app.fbc72659.js";const c={},d={id:"frontmatter-title-for-strings",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),h=s(),p=s(" for strings"),_={style:{"white-space":"pre-wrap","margin-top":"10px"}},g=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str distance (compare-string) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>compare-string</code>: the first string to compare</li><li><code>...rest</code>: optionally check if string contains pattern by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>get the edit distance between two strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;nushell&#39;</span> <span class="token operator">|</span> str distance <span class="token string">&#39;nutshell&#39;</span>
</code></pre></div>`,7);function m(t,f){return n(),i("div",null,[e("h1",d,[l,h,e("code",null,a(t.$frontmatter.title),1),p]),e("div",_,a(t.$frontmatter.strings),1),g])}const x=r(c,[["render",m],["__file","str_distance.html.vue"]]);export{x as default};
