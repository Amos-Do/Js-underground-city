"use strict";for(var wrapEl=document.querySelector(".wrap"),i=2;i<=9;i++){var multCard=document.createElement("div");multCard.setAttribute("class","card card-bg"),wrapEl.appendChild(multCard);for(var multUl=document.createElement("ul"),str='<li class="main-number">'.concat(i,"</li>"),k=1;k<=9;k++)str+="<li>".concat(i," x ").concat(k," = ").concat(i*k,"</li>");multUl.innerHTML=str,multCard.appendChild(multUl)}
//# sourceMappingURL=all.js.map
