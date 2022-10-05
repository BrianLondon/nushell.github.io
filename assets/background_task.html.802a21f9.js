import{_ as s,r as a,o as i,c as r,a as e,b as n,d as t,e as l}from"./app.fbc72659.js";const u={},c=e("h1",{id:"background-task-in-nu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#background-task-in-nu","aria-hidden":"true"},"#"),t(" Background task in Nu")],-1),h=e("p",null,`Currently Nushell doesn't have built-in background task management feature, but you can make it "support" background task with some tools, here are some example:`,-1),d=t("using a third-party task management tools, like "),_={href:"https://github.com/Nukesor/pueue",target:"_blank",rel:"noopener noreferrer"},p=t("pueue"),m=t("using a terminal multiplexer, like "),g={href:"https://github.com/tmux/tmux/wiki",target:"_blank",rel:"noopener noreferrer"},k=t("tmux"),b=t(" or "),f={href:"https://zellij.dev/",target:"_blank",rel:"noopener noreferrer"},w=t("zellij"),x=e("h2",{id:"using-nu-with-pueue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-nu-with-pueue","aria-hidden":"true"},"#"),t(" Using nu with pueue")],-1),v=t("Borrows the power of "),y={href:"https://github.com/Nukesor/pueue",target:"_blank",rel:"noopener noreferrer"},N=t("pueue"),j=t(", it is possible to schedule background tasks to pueue, and manage those tasks (such as viewing logs, killing tasks, or getting the running status of all tasks)"),B=e("p",null,"Unlike terminal multiplexer, you don't need to attach to multiple tmux sessions, and get task status easily.",-1),I=t("Here we provide a "),U={href:"https://github.com/nushell/nu_scripts/tree/main/background_task",target:"_blank",rel:"noopener noreferrer"},V=t("nushell module"),C=t(" to work with pueue easiler."),E=e("p",null,'Here is a setup example to make nushell "support" background task:',-1),L=e("li",null,"install pueue",-1),T=t("run "),z=e("code",null,"pueued",-1),H=t(" with default config, you can refer to "),S={href:"https://github.com/Nukesor/pueue/wiki/Get-started#start-the-daemon",target:"_blank",rel:"noopener noreferrer"},$=t("start-the-daemon page"),A=t(" for more information."),D=t("put the "),G={href:"https://github.com/nushell/nu_scripts/blob/main/background_task/job.nu",target:"_blank",rel:"noopener noreferrer"},R=t("job.nu"),Y=t(" file under "),q=e("code",null,"$env.NU_LIB_DIRS",-1),F=t("."),J=e("li",null,[t("add a line to the "),e("code",null,"$nu.config-path"),t(" file: "),e("code",null,"use job.nu")],-1),K=e("li",null,"restart nu.",-1),M=l('<p>Then you will get some commands to schedule background tasks. (e.g: <code>job spawn</code>, <code>job status</code>, <code>job log</code>)</p><p>Cons note: It spawned a fresh nushell to execute the given command, so it doesn&#39;t inherit current scope&#39;s variables, custom commands, alias definition, except env variables which can convert value to string. Therefore, if you want to use custom commands or variables, you have to <code>use</code> or <code>define</code> them within the given block.</p><h2 id="using-nu-with-terminal-multiplexer" tabindex="-1"><a class="header-anchor" href="#using-nu-with-terminal-multiplexer" aria-hidden="true">#</a> Using nu with terminal multiplexer</h2><p>You can choose and install a terminal multiplexer and use it.</p><p>It allows you to easily switch between multiple programs in one terminal, detach them (they continue to run in the background) and reconnect them to a different terminal. As a result, it is very flexible and usable.</p>',5);function O(P,Q){const o=a("ExternalLinkIcon");return i(),r("div",null,[c,h,e("ol",null,[e("li",null,[d,e("a",_,[p,n(o)])]),e("li",null,[m,e("a",g,[k,n(o)]),b,e("a",f,[w,n(o)])])]),x,e("p",null,[v,e("a",y,[N,n(o)]),j]),B,e("p",null,[I,e("a",U,[V,n(o)]),C]),E,e("ol",null,[L,e("li",null,[T,z,H,e("a",S,[$,n(o)]),A]),e("li",null,[D,e("a",G,[R,n(o)]),Y,q,F]),J,K]),M])}const X=s(u,[["render",O],["__file","background_task.html.vue"]]);export{X as default};
