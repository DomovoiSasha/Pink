!function(e,t){"use strict";var n="img/sprite.svg",a=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var o,r,i="localStorage"in e&&null!==e.localStorage,l=function(){t.body.insertAdjacentHTML("afterbegin",r)},c=function(){t.body?l():t.addEventListener("DOMContentLoaded",l)};if(i&&localStorage.getItem("inlineSVGrev")==a&&(r=localStorage.getItem("inlineSVGdata")))return c(),!0;try{o=new XMLHttpRequest,o.open("GET",n,!0),o.onload=function(){o.status>=200&&o.status<400&&(r=o.responseText,c(),i&&(localStorage.setItem("inlineSVGdata",r),localStorage.setItem("inlineSVGrev",a)))},o.send()}catch(e){}}(window,document);