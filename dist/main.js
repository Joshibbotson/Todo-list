(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{v:()=>n});const n={nav:document.getElementById("nav"),inboxBtn:document.getElementById("inbox"),todayBtn:document.getElementById("today"),thisWeekBtn:document.getElementById("thisWeek"),addTaskBtn:document.getElementById("addTaskBtn"),titleInput:document.getElementById("titleInput").value},d={title:t.default.titleInput};let o=a;const a=[];let l=!0;var i;document.querySelector(".hamburger-btn").addEventListener("click",(()=>{l=!l,!0===l?n.nav.classList.remove("inactive-nav"):!1===l&&n.nav.classList.add("inactive-nav")})),n.addTaskBtn.addEventListener("click",((i=o).push(new function(e){this.title=e}(d.title.value)),void console.log(i)))})();