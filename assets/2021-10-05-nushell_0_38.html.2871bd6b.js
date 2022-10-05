import{_ as s,r as l,o as r,c as h,f as i,a as t,b as n,d as e,e as a}from"./app.fbc72659.js";const _={},d=t("h1",{id:"nushell-0-38",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-38","aria-hidden":"true"},"#"),e(" Nushell 0.38")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=t("p",null,"Today, we're releasing 0.38 of Nu. This release includes polish to the user interface, improvements to how columns are passed, lots of bug fixes, and updates on the upcoming engine.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g=e("Nu 0.38 is available as "),m={href:"https://github.com/nushell/nushell/releases/tag/0.38.0",target:"_blank",rel:"noopener noreferrer"},f=e("pre-built binaries"),b=e(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=e("crates.io"),y=e(". If you have Rust installed you can install it using "),x=t("code",null,"cargo install nu",-1),v=e("."),N=a('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="quickly-jump-to-a-shell-tw4452852" tabindex="-1"><a class="header-anchor" href="#quickly-jump-to-a-shell-tw4452852" aria-hidden="true">#</a> Quickly jump to a shell (tw4452852)</h2><p>If you&#39;ve used shells, you&#39;ve no doubt used the <code>n</code> and <code>p</code> commands to quickly jump between them. This can be a big time saver when you&#39;re working in multiple directories.</p><p>In this release, we&#39;ve added a <code>g</code> command that helps you quickly jump to a particular shell. This helps in the cases where you end up with more than two shells open and you already know what shell you want to jump to.</p><h2 id="additional-improvements" tabindex="-1"><a class="header-anchor" href="#additional-improvements" aria-hidden="true">#</a> Additional improvements</h2>',7),q=e("Improvements in "),I={href:"https://github.com/nushell/nushell/pull/4027",target:"_blank",rel:"noopener noreferrer"},j=e("updated table cell values"),T=e(" (andrasio)"),F=t("code",null,"update cells",-1),W=e(" command now "),C={href:"https://github.com/nushell/nushell/pull/4039",target:"_blank",rel:"noopener noreferrer"},E=e("can take a list of columns"),V=e(" (ArtoLord)"),A=e("You can now also "),L={href:"https://github.com/nushell/nushell/pull/4062",target:"_blank",rel:"noopener noreferrer"},B=e("pass a list of columns to "),M=t("code",null,"select",-1),R=e(" (JoshCheek)"),U=e("Improvements in "),S={href:"https://github.com/nushell/nushell/pull/4036",target:"_blank",rel:"noopener noreferrer"},Y=e("how html table scraping works"),z=e(" and "),D={href:"https://github.com/nushell/nushell/pull/4043",target:"_blank",rel:"noopener noreferrer"},J=e("also"),K=e(" (luccasmmg)"),O=e("Fix to "),P={href:"https://github.com/nushell/nushell/pull/4037",target:"_blank",rel:"noopener noreferrer"},Q=e("compiling on nightly"),G=e(" (gilescope)"),H=e("Removed "),X={href:"https://github.com/nushell/nushell/pull/4038",target:"_blank",rel:"noopener noreferrer"},Z=e("unused deps"),$=e(" (gilescope)"),ee=e("Completions now "),te={href:"https://github.com/nushell/nushell/pull/4023",target:"_blank",rel:"noopener noreferrer"},oe=e("can complete inside of an argument"),ne=e(" (tw4452852)"),se=e("We now "),le={href:"https://github.com/nushell/nushell/pull/4052",target:"_blank",rel:"noopener noreferrer"},re=e("expand tilde when reading plugin directories"),he=e(" (hedonihilist)"),ie=e("We also "),ae={href:"https://github.com/nushell/nushell/pull/4058",target:"_blank",rel:"noopener noreferrer"},_e=e("turn off ansi colors when not in a TTY"),de=e("Fixed some of the "),ce={href:"https://github.com/nushell/nushell/pull/4061",target:"_blank",rel:"noopener noreferrer"},ue=e("wasm deps"),pe=e(" (jt)"),ge=e("Fixed a "),me={href:"https://github.com/nushell/nushell/pull/4022",target:"_blank",rel:"noopener noreferrer"},fe=e("leak of a "),be=t("code",null,"let",-1),we=e("-binding"),ke=e(" (Pantonshire)"),ye=e("Use "),xe={href:"https://github.com/nushell/nushell/pull/4021",target:"_blank",rel:"noopener noreferrer"},ve=e("SIMD-enabled compiler flags"),Ne=e(" (aminya)"),qe=e("Updated polars "),Ie={href:"https://github.com/nushell/nushell/pull/4013",target:"_blank",rel:"noopener noreferrer"},je=e("dependency to 0.16"),Te=e(" (elferherrera)"),Fe=e("Updates to how "),We={href:"https://github.com/nushell/nushell/pull/4008",target:"_blank",rel:"noopener noreferrer"},Ce=t("code",null,"path join",-1),Ee=e(" works"),Ve=e(" (kubouch)"),Ae=e("Moved "),Le=t("code",null,"nu-path",-1),Be=e(" tests into "),Me={href:"https://github.com/nushell/nushell/pull/4015",target:"_blank",rel:"noopener noreferrer"},Re=e("integration tests"),Ue=e(" (kubouch)"),Se=e("New support for "),Ye={href:"https://github.com/nushell/nushell/pull/4048",target:"_blank",rel:"noopener noreferrer"},ze=e("converting to column paths"),De=e(" (fdncred)"),Je=e("Cleanup "),Ke={href:"https://github.com/nushell/nushell/pull/4029",target:"_blank",rel:"noopener noreferrer"},Oe=e("fixes to make tests more resilient"),Pe=e(" (kubouch)"),Qe=e("Internal improvement "),Ge={href:"https://github.com/nushell/nushell/pull/4031",target:"_blank",rel:"noopener noreferrer"},He=e("to make working with spans easier"),Xe=e(" (elferherrera)"),Ze=e("Fix to "),$e={href:"https://github.com/nushell/nushell/pull/4033",target:"_blank",rel:"noopener noreferrer"},et=e("gitpod"),tt=e(" (Merith-TK)"),ot=e("Fix to "),nt={href:"https://github.com/nushell/nushell/pull/4034",target:"_blank",rel:"noopener noreferrer"},st=e("big int handling in "),lt=t("code",null,"to",-1),rt=e(" (pjmore)"),ht=e("Fixed a "),it={href:"https://github.com/nushell/nushell/pull/4040",target:"_blank",rel:"noopener noreferrer"},at=e("typo"),_t=e(" (lildata)"),dt=e("Fixed "),ct={href:"https://github.com/nushell/nushell/pull/4051",target:"_blank",rel:"noopener noreferrer"},ut=e("some typos in the tutor"),pt=e(" (hojjatabdollahi)"),gt=e("Removed "),mt={href:"https://github.com/nushell/nushell/pull/4063",target:"_blank",rel:"noopener noreferrer"},ft=e("the experimental scrolling support as it had broken"),bt=t("h2",{id:"engine-q",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#engine-q","aria-hidden":"true"},"#"),e(" Engine-q")],-1),wt=t("p",null,[e("Engine-q continues to grow to become the upcoming engine for Nushell. Over the last three weeks, it gained basic filesystem support, improved completions, lots of new internal commands including "),t("code",null,"select"),e(", "),t("code",null,"ps"),e(", "),t("code",null,"sys"),e(", and more.")],-1),kt=e("We've also added a full module system, a new error reporter using "),yt={href:"https://github.com/zkat/miette",target:"_blank",rel:"noopener noreferrer"},xt=e("miette"),vt=e(", and support for externals."),Nt=t("p",null,"It's grown to the stage that some of us are starting to dogfood using engine-q as our shell.",-1),qt=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),It=t("p",null,"For the next few months, as engine-q matures, we'll be contributing to both Nushell and engine-q. This will help Nushell continue to grow and help support users of Nushell. We'll also use the knowledge we get from support Nushell in how we design these last pieces of engine-q.",-1),jt=t("p",null,"As it grows, we'll make a way to help us test engine-q until we're confident it's ready to be moved into place.",-1);function Tt(Ft,Wt){const o=l("ExternalLinkIcon");return r(),h("div",null,[d,c,u,i(" more "),p,t("p",null,[g,t("a",m,[f,n(o)]),b,t("a",w,[k,n(o)]),y,x,v]),N,t("ul",null,[t("li",null,[q,t("a",I,[j,n(o)]),T]),t("li",null,[F,W,t("a",C,[E,n(o)]),V]),t("li",null,[A,t("a",L,[B,M,n(o)]),R]),t("li",null,[U,t("a",S,[Y,n(o)]),z,t("a",D,[J,n(o)]),K]),t("li",null,[O,t("a",P,[Q,n(o)]),G]),t("li",null,[H,t("a",X,[Z,n(o)]),$]),t("li",null,[ee,t("a",te,[oe,n(o)]),ne]),t("li",null,[se,t("a",le,[re,n(o)]),he]),t("li",null,[ie,t("a",ae,[_e,n(o)])]),t("li",null,[de,t("a",ce,[ue,n(o)]),pe]),t("li",null,[ge,t("a",me,[fe,be,we,n(o)]),ke]),t("li",null,[ye,t("a",xe,[ve,n(o)]),Ne]),t("li",null,[qe,t("a",Ie,[je,n(o)]),Te]),t("li",null,[Fe,t("a",We,[Ce,Ee,n(o)]),Ve]),t("li",null,[Ae,Le,Be,t("a",Me,[Re,n(o)]),Ue]),t("li",null,[Se,t("a",Ye,[ze,n(o)]),De]),t("li",null,[Je,t("a",Ke,[Oe,n(o)]),Pe]),t("li",null,[Qe,t("a",Ge,[He,n(o)]),Xe]),t("li",null,[Ze,t("a",$e,[et,n(o)]),tt]),t("li",null,[ot,t("a",nt,[st,lt,n(o)]),rt]),t("li",null,[ht,t("a",it,[at,n(o)]),_t]),t("li",null,[dt,t("a",ct,[ut,n(o)]),pt]),t("li",null,[gt,t("a",mt,[ft,n(o)])])]),bt,wt,t("p",null,[kt,t("a",yt,[xt,n(o)]),vt]),Nt,qt,It,jt])}const Et=s(_,[["render",Tt],["__file","2021-10-05-nushell_0_38.html.vue"]]);export{Et as default};
