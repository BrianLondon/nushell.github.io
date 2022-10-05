import{_ as o,o as n,c as r,a as e,t,d as s,e as c}from"./app.fbc72659.js";const d={},l={id:"frontmatter-title-for-network",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title-for-network","aria-hidden":"true"},"#",-1),p=s(),h=s(" for network"),u={style:{"white-space":"pre-wrap","margin-top":"10px"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; post (path) (body) --user --password --content-type --content-length --headers --raw --insecure</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: the URL to post to</li><li><code>body</code>: the contents of the post body</li><li><code>--user {any}</code>: the username when authenticating</li><li><code>--password {any}</code>: the password when authenticating</li><li><code>--content-type {any}</code>: the MIME type of content to post</li><li><code>--content-length {any}</code>: the length of the content being posted</li><li><code>--headers {any}</code>: custom headers you want to add</li><li><code>--raw</code>: return values as a string instead of a table</li><li><code>--insecure</code>: allow insecure server connections when using SSL</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Performs HTTP POST operation.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Post content to url.com</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post url.com <span class="token string">&#39;body&#39;</span>
</code></pre></div><p>Post content to url.com, with username and password</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post <span class="token parameter variable">-u</span> myuser <span class="token parameter variable">-p</span> mypass url.com <span class="token string">&#39;body&#39;</span>
</code></pre></div><p>Post content to url.com, with custom header</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post <span class="token parameter variable">-H</span> <span class="token punctuation">[</span>my-header-key my-header-value<span class="token punctuation">]</span> url.com
</code></pre></div><p>Post content to url.com with a json body</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post <span class="token parameter variable">-t</span> application/json url.com <span class="token punctuation">{</span> field: value <span class="token punctuation">}</span>
</code></pre></div>`,15);function m(a,b){return n(),r("div",null,[e("h1",l,[i,p,e("code",null,t(a.$frontmatter.title),1),h]),e("div",u,t(a.$frontmatter.network),1),g])}const y=o(d,[["render",m],["__file","post.html.vue"]]);export{y as default};
