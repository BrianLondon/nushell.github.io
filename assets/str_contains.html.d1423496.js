import{_ as e,o,c as p,a as s,t as n,d as t,e as c}from"./app.fbc72659.js";const i={},r={id:"frontmatter-title-for-strings",tabindex:"-1"},l=s("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),u=t(),d=t(" for strings"),h={style:{"white-space":"pre-wrap","margin-top":"10px"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str contains (string) ...rest --insensitive --not</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>string</code>: the string to find</li><li><code>...rest</code>: optionally check if input contains string by column paths</li><li><code>--insensitive</code>: search is case insensitive</li><li><code>--not</code>: does not contain</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Check if input contains string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Check if input contains string case insensitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains <span class="token parameter variable">-i</span> <span class="token string">&#39;.RB&#39;</span>
</code></pre></div><p>Check if input contains string in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token string">&#39;e&#39;</span> ColA
</code></pre></div><p>Check if input contains string in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token parameter variable">-i</span> <span class="token string">&#39;E&#39;</span> ColA
</code></pre></div><p>Check if input contains string in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test hello<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token string">&#39;e&#39;</span> ColA ColB
</code></pre></div><p>Check if input string contains &#39;banana&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> str contains <span class="token string">&#39;banana&#39;</span>
</code></pre></div><p>Check if list contains string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one two three<span class="token punctuation">]</span> <span class="token operator">|</span> str contains o
</code></pre></div><p>Check if list does not contain string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one two three<span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token parameter variable">-n</span> o
</code></pre></div>`,21);function k(a,b){return o(),p("div",null,[s("h1",r,[l,u,s("code",null,n(a.$frontmatter.title),1),d]),s("div",h,n(a.$frontmatter.strings),1),g])}const v=e(i,[["render",k],["__file","str_contains.html.vue"]]);export{v as default};
