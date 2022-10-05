import{_ as r,o as n,c as o,a as e,t,d as s,e as l}from"./app.fbc72659.js";const c={},p={id:"frontmatter-title-for-network",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title-for-network","aria-hidden":"true"},"#",-1),h=s(),d=s(" for network"),u={style:{"white-space":"pre-wrap","margin-top":"10px"}},_=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url path ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally operate by cell path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get path of a url</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com/foo/bar&#39;</span> <span class="token operator">|</span> url path
</code></pre></div><p>A trailing slash will be reflected in the path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com&#39;</span> <span class="token operator">|</span> url path
</code></pre></div>`,9);function m(a,f){return n(),o("div",null,[e("h1",p,[i,h,e("code",null,t(a.$frontmatter.title),1),d]),e("div",u,t(a.$frontmatter.network),1),_])}const k=r(c,[["render",m],["__file","url_path.html.vue"]]);export{k as default};
