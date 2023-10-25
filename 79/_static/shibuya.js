(()=>{function y(t){let e=t.getAttribute("aria-controls"),s=document.getElementById(e),c="data-expanded-"+e;t.addEventListener("click",function(){document.body.hasAttribute(c)?(document.body.removeAttribute(c),s.classList.remove("_expanded"),m(e,"false")):(document.body.setAttribute(c,"true"),s.classList.add("_expanded"),m(e,"true"))})}function m(t,e){let s=document.querySelectorAll('[aria-controls="'+t+'"]');for(el of s)el.setAttribute("aria-expanded",e)}var f=document.querySelectorAll(".js-menu");for(let t=0;t<f.length;t++)y(f[t]);var r=document.querySelector(".announcement"),S=document.querySelector(".announcement-close");if(r){let e=function(){t.textContent=`:root{--sy-s-banner-height:${r.clientHeight}px}`};L=e;let t=document.createElement("style");document.head.appendChild(t),S.addEventListener("click",()=>{r.parentNode.removeChild(r),document.head.removeChild(t)}),e(),window.addEventListener("resize",e)}var L;var v=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,d=document.documentElement;function A(){let t=d.classList.contains("dark"),e=t?"dark":"light";d.classList.remove(e);let s=t?"light":"dark";h(s),sessionStorage._theme=s}var i=document.querySelector(".js-theme");function h(t){d.classList.add(t);let e=i.getAttribute("data-aria-"+t);i.setAttribute("aria-label",e)}if(i){let t=v?"dark":"light",e=sessionStorage._theme||t;h(e),i.addEventListener("click",A)}function x(){let t=document.querySelector(".globaltoc");if(!t)return;let e=parseInt(t.getAttribute("data-expand-depth"),10),s=n=>{if(!e)return!1;let o=0;for(;n.parentNode&&n.parentNode!==t;)n=n.parentNode,n.nodeName==="UL"&&(o+=1);return e>=o};t.querySelectorAll("li > ul").forEach(n=>{let o=n.parentNode;o.classList.contains("current")||s(o)?o.classList.add("_expand"):o.classList.add("_collapse");let a=_(n);o.appendChild(a)})}function _(t){let e=document.createElement("button");e.innerHTML='<i class="i-icon chevron"></i>';let s=t.parentNode,c=t.previousSibling,n=c.textContent,o=()=>{s.classList.contains("_expand")?e.setAttribute("arial-label","Collapse "+n):e.setAttribute("arial-label","Expand "+n)};o();let a=g=>{g.preventDefault(),s.classList.contains("_expand")?(s.classList.remove("_expand"),s.classList.add("_collapse")):(s.classList.remove("_collapse"),s.classList.add("_expand")),o()};return c.getAttribute("href")==="#"&&c.addEventListener("click",a),e.addEventListener("click",a),e}x();function b(){let t='.localtoc a[href="'+location.hash+'"]',e=document.querySelector(t);e&&(document.querySelectorAll(".localtoc li").forEach(c=>{c.classList.remove("active")}),e.parentNode.classList.add("active"))}b();window.addEventListener("hashchange",()=>{b()},!1);var l=document.querySelector(".js-repo-stats");async function w(t,e){let s=`https://api.github.com/repos/${t}/${e}`,n=await(await fetch(s)).json(),o={stars:n.watchers,forks:n.forks};u(o),sessionStorage.setItem("_sy/repo/stats",JSON.stringify(o))}async function E(t,e){let s="https://gitlab.com/api/v4/projects/"+encodeURIComponent(t+"/"+e),n=await(await fetch(s)).json(),o={stars:n.star_count,forks:n.forks_count};u(o),sessionStorage.setItem("_sy/repo/stats",JSON.stringify(o))}function u({stars:t,forks:e}){t&&(document.querySelector(".js-repo-stars").textContent=t),e&&(document.querySelector(".js-repo-forks").textContent=e)}function k(){let t=sessionStorage.getItem("_sy/repo/stats");if(t)u(JSON.parse(t));else{let e=l.getAttribute("data-user"),s=l.getAttribute("data-repo"),c=l.getAttribute("data-type");c==="github"?w(e,s):c==="gitlab"&&E(e,s)}}l&&k();function q(t,e){let s=document.createElement("script");s.id="_carbonads_js",s.src=`//cdn.carbonads.com/carbon.js?serve=${t}&placement=${e}`;let c=document.querySelector(".yue > section"),n=document.querySelector(".yue > section > section");if(n)c.insertBefore(s,n);else{let o=document.querySelector(".yue > section > p");o?c.insertBefore(s,o.nextSibling):c.appendChild(s)}}var p=document.querySelector(".js-carbon");if(p){let t=p.getAttribute("data-carbon-code"),e=p.getAttribute("data-carbon-placement");t&&e&&q(t,e)}/windows/i.test(navigator.userAgent)&&document.body.classList.add("win");})();
