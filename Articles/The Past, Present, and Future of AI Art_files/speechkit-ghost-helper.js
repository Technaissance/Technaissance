!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";(()=>{let t;var e;e=()=>{try{const e=(()=>{t=document.getElementById("speechkit-module");const e=t.getAttribute("data-container");if(e)return document.querySelector(e);const n=document.getElementsByClassName("speechkit-container");if(n.length)return n[0];const o=document.body.classList.contains("post-template"),r=document.body.classList.contains("page-template");if(!o&&!r)throw Error("The player is only available on single Posts and Pages.");const a=document.getElementsByClassName("post-full-content");if(a.length)return a[0];const s=document.getElementsByTagName("Article");if(s.length){const t=s[0].getElementsByTagName("Header");return t.length?t[0]:s[0]}const i=document.getElementsByClassName("content");return i.length?i[0]:null})();if(!e)throw Error("Unable to display the audio player. See https://ghost.org/integrations/speechkit/#advanced for further information.");const n=t.getAttribute("data-project-id"),o=t.getAttribute("data-dm-attr-name");if(!n)throw Error("The <script> tag is missing the data-project-id attribute.");const r=document.createElement("div");r.setAttribute("id","speechkit-player"),r.style.width="100%",r.style.marginBottom="1em",e.insertBefore(r,e.firstChild),import("https://proxy.beyondwords.io/npm/@beyondwords/audio-player@latest/dist/module/index.js").then(({default:t})=>{const e=t.sdk,r={projectId:n,skBackend:"https://audio.beyondwords.io",articleUrl:window.location.href};o&&(r.dmAttrName=o),e.player(r).then()})}catch(t){console.log(`SpeechKit ${String.fromCodePoint(128266)} ${t.message}`)}},"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})()}));
