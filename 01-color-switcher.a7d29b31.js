!function(){var t=null,e=!1,n=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),a=document.querySelector("body");n.addEventListener("click",(function(){e||(n.disabled=!0,o.disabled=!1,e=!0,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));a.style.backgroundColor=t}),1e3))})),o.addEventListener("click",(function(){clearInterval(t),e=!1,n.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.a7d29b31.js.map
