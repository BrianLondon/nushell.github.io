import{_ as l,r,o as a,c as i,f as h,a as t,b as n,d as e,e as s}from"./app.fbc72659.js";const c={},d=t("h1",{id:"nushell-0-28",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-28","aria-hidden":"true"},"#"),e(" Nushell 0.28")],-1),u=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=t("p",null,"Today, we're releasing 0.28 of Nu. In this release we've added new commands for working with tables, paths, and lots of general feature improvements.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),m=e("Nu 0.28 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.28.0",target:"_blank",rel:"noopener noreferrer"},g=e("pre-built binaries"),b=e(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},x=e("crates.io"),k=e(". If you have Rust installed you can install it using "),v=t("code",null,"cargo install nu",-1),y=e("."),N=s(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2><h3 id="rotate-andrasio" tabindex="-1"><a class="header-anchor" href="#rotate-andrasio" aria-hidden="true">#</a> Rotate (andrasio)</h3><p>With the new <code>rotate</code> command, we have an easier way to turn rows to columns and columns to rows.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[col1, col2, col3]; [cell1, cell2, cell3] [cell4, cell5, cell6]] | rotate
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 Column0 \u2502 Column1 \u2502 Column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 cell4   \u2502 cell1   \u2502 col1
 1 \u2502 cell5   \u2502 cell2   \u2502 col2
 2 \u2502 cell6   \u2502 cell3   \u2502 col3
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>You can also rotate counter-clockwise:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[col1, col2, col3]; [cell1, cell2, cell3] [cell4, cell5, cell6]] | rotate counter-clockwise
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 Column0 \u2502 Column1 \u2502 Column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 col3    \u2502 cell3   \u2502 cell6
 1 \u2502 col2    \u2502 cell2   \u2502 cell5
 2 \u2502 col1    \u2502 cell1   \u2502 cell4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="column-rolling-andrasio" tabindex="-1"><a class="header-anchor" href="#column-rolling-andrasio" aria-hidden="true">#</a> Column rolling (andrasio)</h3><p>You are now able to move columns around in the same way you may do a bitwise-rotate.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &#39;00000100&#39;
| split chars
| each { str to-int }
| rotate counter-clockwise _
| reject _
| rename bit1 bit2 bit3 bit4 bit5 bit6 bit7 bit8
| roll column 3

\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 bit4 \u2502 bit5 \u2502 bit6 \u2502 bit7 \u2502 bit8 \u2502 bit1 \u2502 bit2 \u2502 bit3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502    0 \u2502    0 \u2502    1 \u2502    0 \u2502    0 \u2502    0 \u2502    0 \u2502    0
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="dropping-columns-andrasio" tabindex="-1"><a class="header-anchor" href="#dropping-columns-andrasio" aria-hidden="true">#</a> Dropping columns (andrasio)</h3><p>The new <code>drop column</code> subcommand also gives you the ability to remove the last column from a table.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[lib, extension]; [nu-core, rs] [rake, rb]] | drop column
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   lib
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 nu-core
 rake
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="ansi-strip-fdncred" tabindex="-1"><a class="header-anchor" href="#ansi-strip-fdncred" aria-hidden="true">#</a> ANSI strip (fdncred)</h3>`,17),C=e("With the new "),I={href:"https://github.com/nushell/nushell/pull/3095",target:"_blank",rel:"noopener noreferrer"},T=t("code",null,"ansi strip",-1),W=e(" command"),j=e(", you can remove ansi sequences from a string of text."),S=s(`<h3 id="path-joining-kubouch" tabindex="-1"><a class="header-anchor" href="#path-joining-kubouch" aria-hidden="true">#</a> Path joining (kubouch)</h3><p>We now have a <code>path join</code> command which allows you to join part of a path to an existing path following the path conventions for your platform.</p><p>For example, on Windows:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &#39;C:\\Users\\viking&#39; | path join spam.txt
</code></pre></div><p>Or Unix-based systems:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &#39;/home/viking&#39; | path join spam.txt
</code></pre></div><h2 id="functionality" tabindex="-1"><a class="header-anchor" href="#functionality" aria-hidden="true">#</a> Functionality</h2><h3 id="experimental-built-in-table-paging-rezural" tabindex="-1"><a class="header-anchor" href="#experimental-built-in-table-paging-rezural" aria-hidden="true">#</a> (Experimental) Built-in table paging (rezural)</h3>`,8),V=e("If you build Nushell with the optional "),z=t("code",null,"--features=table-pager",-1),F=e(" you'll see some new capabilities we're working on that will let you "),L={href:"https://github.com/nushell/nushell/pull/3128",target:"_blank",rel:"noopener noreferrer"},B=e("view a table with a built-in pager"),E=e("."),A=s('<p>In the future, we&#39;ll likely move this to its own command so that you can enable paging in much the same way you would use <code>less</code> in other shells.</p><p>Let us know how this works for you.</p><h3 id="timing-your-pipelines-fdncred" tabindex="-1"><a class="header-anchor" href="#timing-your-pipelines-fdncred" aria-hidden="true">#</a> Timing your pipelines (fdncred)</h3><p>You can now see the time spent in the last set of commands you sent to Nushell by checking the new <code>$nu.env.CMD_DURATION</code> environment variable.</p><p>This will let you, for example, add timings to your prompts for all your fancy prompt needs.</p><h3 id="improved-matches-ilius-kubouch" tabindex="-1"><a class="header-anchor" href="#improved-matches-ilius-kubouch" aria-hidden="true">#</a> Improved matches (ilius, kubouch)</h3>',6),D=e("The "),O=t("code",null,"match",-1),P=e(" command has a "),U={href:"https://github.com/nushell/nushell/pull/3111",target:"_blank",rel:"noopener noreferrer"},Y=e("few new flags"),J=e(" to give you more control over how you'd like to match text."),R=e("You're now also able to "),q={href:"https://github.com/nushell/nushell/pull/3114",target:"_blank",rel:"noopener noreferrer"},$=e("invert the match"),K=e("."),M=t("h3",{id:"fetch-now-uses-the-latest-surf-and-rustls-fdncred",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#fetch-now-uses-the-latest-surf-and-rustls-fdncred","aria-hidden":"true"},"#"),e(" Fetch now uses the latest surf and rustls (fdncred)")],-1),G=e("We're experimenting with moving away from openssl for some commands. In this release, we've moved "),H={href:"https://github.com/nushell/nushell/pull/3120",target:"_blank",rel:"noopener noreferrer"},Q=t("code",null,"fetch",-1),X=e(" to use the latest surf"),Z=e(", which gives us the ability to use rustls instead of openssl. Please try this out and let us know how it works for you."),ee=t("h3",{id:"cleaner-help-output-kubouch",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cleaner-help-output-kubouch","aria-hidden":"true"},"#"),e(" Cleaner help output (kubouch)")],-1),te=e("We've cleaned up the help, so that there's now a difference between "),oe={href:"https://github.com/nushell/nushell/pull/3124",target:"_blank",rel:"noopener noreferrer"},ne=e("the synopsis for a command and its full help text"),se=e(". This makes "),le=t("code",null,"help commands",-1),re=e(" output a table that's much easier to read."),ae=t("h3",{id:"json-order-is-now-preserved-again-andrasio",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#json-order-is-now-preserved-again-andrasio","aria-hidden":"true"},"#"),e(" JSON order is now preserved, again (andrasio)")],-1),ie=t("p",null,"We previously supported preserving the order of fields of JSON when serialized and deserialized, but as we changed and updated dependencies we lost this ability.",-1),he=e("In this release, it's been re-added so that "),ce={href:"https://github.com/nushell/nushell/pull/3126",target:"_blank",rel:"noopener noreferrer"},de=e("fields will preserve order"),ue=e(" once again."),_e=t("h3",{id:"exit-codes-tiffany352",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#exit-codes-tiffany352","aria-hidden":"true"},"#"),e(" Exit codes (tiffany352)")],-1),pe=e("The "),me=t("code",null,"exit",-1),fe=e(" command can now "),ge={href:"https://github.com/nushell/nushell/pull/3132",target:"_blank",rel:"noopener noreferrer"},be=e("optionally take an exit code"),we=e(", allowing you to quit a nushell with an exit code that can be detect outside of the shell."),xe=t("h3",{id:"vscode-extension-is-now-published-fdncred",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#vscode-extension-is-now-published-fdncred","aria-hidden":"true"},"#"),e(" VSCode extension is now published (fdncred)")],-1),ke=e("VSCode users can now use the VSCode extension for Nushell "),ve={href:"https://marketplace.visualstudio.com/items?itemName=TheNuProjectContributors.vscode-nushell-lang",target:"_blank",rel:"noopener noreferrer"},ye=e("right from the VSCode marketplace"),Ne=e("!"),Ce=t("h2",{id:"internal",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#internal","aria-hidden":"true"},"#"),e(" Internal")],-1),Ie=e("Improved "),Te={href:"https://github.com/nushell/nushell/pull/3078",target:"_blank",rel:"noopener noreferrer"},We=e("tests for nu-env"),je=e(" (andrasio)"),Se=e("We now remove the "),Ve={href:"https://github.com/nushell/nushell/pull/3084",target:"_blank",rel:"noopener noreferrer"},ze=e("current directory ("),Fe=t("code",null,".",-1),Le=e(") from paths"),Be=e(" where possible (iCodeSometime)"),Ee=e("We've begun a multi-step process of simplifying how tables are rendered. The first step is to "),Ae={href:"https://github.com/nushell/nushell/pull/3088",target:"_blank",rel:"noopener noreferrer"},De=e("convert drawing table to return strings"),Oe=e(" (rezural)."),Pe=e("We've "),Ue={href:"https://github.com/nushell/nushell/pull/3089",target:"_blank",rel:"noopener noreferrer"},Ye=e("vendored an ansi term crate"),Je=e(" to make it easier to improve. This helped make "),Re={href:"https://github.com/nushell/nushell/pull/3100",target:"_blank",rel:"noopener noreferrer"},qe=e("'Light' colors"),$e=e(" easier to reach. (fdncred)"),Ke=e("We've removed some "),Me={href:"https://github.com/nushell/nushell/pull/3091",target:"_blank",rel:"noopener noreferrer"},Ge=e("unnecessary dependencies"),He=e(" (stormasm)"),Qe=e("Some general "),Xe={href:"https://github.com/nushell/nushell/pull/3093",target:"_blank",rel:"noopener noreferrer"},Ze=e("improvements to parser logic"),et=e(" (ilius)"),tt=e("Some crashes in "),ot={href:"https://github.com/nushell/nushell/pull/3099",target:"_blank",rel:"noopener noreferrer"},nt=t("code",null,"flatten",-1),st=e(" and docs were fixed"),lt=e(" (stormasm)"),rt=e("We're now using the "),at={href:"https://github.com/nushell/nushell/pull/3112",target:"_blank",rel:"noopener noreferrer"},it=e("host for output"),ht=e(" rather than "),ct=t("code",null,"std::err",-1),dt=e(" for better portability. (LhKipp)"),ut=e("Improved ergnomics "),_t={href:"https://github.com/nushell/nushell/pull/3133",target:"_blank",rel:"noopener noreferrer"},pt=e("when working with $nothing"),mt=e(" (fdncred)"),ft=e("Fixed some "),gt={href:"https://github.com/nushell/nushell/pull/3140",target:"_blank",rel:"noopener noreferrer"},bt=e("locking logic when working with output"),wt=e(" (ahkrr)"),xt=e("Bel and backspace are "),kt={href:"https://github.com/nushell/nushell/pull/3144",target:"_blank",rel:"noopener noreferrer"},vt=e("now part of "),yt=t("code",null,"char",-1),Nt=e(" (fdncred)"),Ct={href:"https://github.com/nushell/nushell/pull/3146",target:"_blank",rel:"noopener noreferrer"},It=e("Trash functionality has been fixed"),Tt=e(" (tw4452852)"),Wt=e("Today's crates.io release was also "),jt={href:"https://github.com/nushell/nu_scripts/blob/main/nu_release.nu",target:"_blank",rel:"noopener noreferrer"},St=e("fully automated, thanks to Nushell"),Vt=e(" (jonathandturner)"),zt=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Ft=e("Instructions for building and "),Lt={href:"https://github.com/nushell/nushell.github.io/pull/109",target:"_blank",rel:"noopener noreferrer"},Bt=e("running the website locally"),Et=e(" (jakevossen5)"),At=e("Updates to the "),Dt={href:"https://github.com/nushell/nushell.github.io/pull/108",target:"_blank",rel:"noopener noreferrer"},Ot=e("docker instructions"),Pt=e(" (jakevossen5)"),Ut=e("Improvements to the "),Yt={href:"https://github.com/nushell/nushell.github.io/pull/107",target:"_blank",rel:"noopener noreferrer"},Jt=e("environment documentation"),Rt=e(" (stormasm)"),qt=e("Fixed typo in the "),$t={href:"https://github.com/nushell/nushell.github.io/pull/106",target:"_blank",rel:"noopener noreferrer"},Kt=e("textview docs"),Mt=e(" (davidmalcolm)"),Gt=e("Corrected "),Ht={href:"https://github.com/nushell/nushell.github.io/pull/104",target:"_blank",rel:"noopener noreferrer"},Qt=e("Nushell version in excerpt"),Xt=e(" (iCodeSometime)"),Zt=e("Fixed a typo in the "),eo={href:"https://github.com/nushell/nushell.github.io/pull/103",target:"_blank",rel:"noopener noreferrer"},to=e("PowerShell comparison"),oo=e(" (JTurtl3)"),no=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),so=e("We're continuing our 1.0 planning and hope to publish a proposal soon for your feedback. There are also some on-going experiments, including a new "),lo={href:"https://github.com/jonathandturner/reedline",target:"_blank",rel:"noopener noreferrer"},ro=e("line editor"),ao=e(" that are offering good insights into better ways of working with the terminal."),io=t("p",null,"And, of course, we hear the feedback about improving completions. We're very much interested in beginning experiments here that will lead to a far better experience as we approach 1.0.",-1);function ho(co,uo){const o=r("ExternalLinkIcon");return a(),i("div",null,[d,u,_,h(" more "),p,t("p",null,[m,t("a",f,[g,n(o)]),b,t("a",w,[x,n(o)]),k,v,y]),N,t("p",null,[C,t("a",I,[T,W,n(o)]),j]),S,t("p",null,[V,z,F,t("a",L,[B,n(o)]),E]),A,t("p",null,[D,O,P,t("a",U,[Y,n(o)]),J]),t("p",null,[R,t("a",q,[$,n(o)]),K]),M,t("p",null,[G,t("a",H,[Q,X,n(o)]),Z]),ee,t("p",null,[te,t("a",oe,[ne,n(o)]),se,le,re]),ae,ie,t("p",null,[he,t("a",ce,[de,n(o)]),ue]),_e,t("p",null,[pe,me,fe,t("a",ge,[be,n(o)]),we]),xe,t("p",null,[ke,t("a",ve,[ye,n(o)]),Ne]),Ce,t("ul",null,[t("li",null,[Ie,t("a",Te,[We,n(o)]),je]),t("li",null,[Se,t("a",Ve,[ze,Fe,Le,n(o)]),Be]),t("li",null,[Ee,t("a",Ae,[De,n(o)]),Oe]),t("li",null,[Pe,t("a",Ue,[Ye,n(o)]),Je,t("a",Re,[qe,n(o)]),$e]),t("li",null,[Ke,t("a",Me,[Ge,n(o)]),He]),t("li",null,[Qe,t("a",Xe,[Ze,n(o)]),et]),t("li",null,[tt,t("a",ot,[nt,st,n(o)]),lt]),t("li",null,[rt,t("a",at,[it,n(o)]),ht,ct,dt]),t("li",null,[ut,t("a",_t,[pt,n(o)]),mt]),t("li",null,[ft,t("a",gt,[bt,n(o)]),wt]),t("li",null,[xt,t("a",kt,[vt,yt,n(o)]),Nt]),t("li",null,[t("a",Ct,[It,n(o)]),Tt]),t("li",null,[Wt,t("a",jt,[St,n(o)]),Vt])]),zt,t("ul",null,[t("li",null,[Ft,t("a",Lt,[Bt,n(o)]),Et]),t("li",null,[At,t("a",Dt,[Ot,n(o)]),Pt]),t("li",null,[Ut,t("a",Yt,[Jt,n(o)]),Rt]),t("li",null,[qt,t("a",$t,[Kt,n(o)]),Mt]),t("li",null,[Gt,t("a",Ht,[Qt,n(o)]),Xt]),t("li",null,[Zt,t("a",eo,[to,n(o)]),oo])]),no,t("p",null,[so,t("a",lo,[ro,n(o)]),ao]),io])}const po=l(c,[["render",ho],["__file","2021-03-09-nushell_0_28.html.vue"]]);export{po as default};
