(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,".test {\n    color: red;\n}\n\nimg {\n    width: 200px;\n    height: 200px;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var u=n(o[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),a=n.n(r),o=n(659),i=n.n(o),s=n(56),c=n.n(s),d=n(540),u=n.n(d),l=n(113),p=n.n(l),f=n(208),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;const m=n.p+"59282063aebe9f2f63c6.jpg",g=n.p+"b357266551a439a83fd8.jpg",v=n.p+"805fd8c2a86700dd2aec.jpg",b=n.p+"ac70cd01d18b28738d62.jpg",y=()=>{(()=>{let e=document.querySelector("body"),t=document.createElement("div");t.classList.add("content"),e.appendChild(t)})();let e=document.querySelector(".content");return e.classList.add("homePage"),{addDiv:t=>{let n=document.createElement("div"),r=document.createElement("p");r.textContent=t||"Arbor Magna invites you on a culinary adventure through ancient flavors.  Fresh, seasonal ingredients are transformed into dishes inspired by historical recipes, with a modern twist.  Dine in our elegant yet comfortable space, adorned with botanical murals and warm lighting.  Unwind and savor a unique taste of history at Arbor Magna.",n.classList.add("para"),n.appendChild(r),e.appendChild(n)},addImage:t=>{const n=new Image;n.src=t,e.appendChild(n)},addTitle:t=>{let n=document.createElement("h1");n.textContent=t||"Arbor Magna",e.appendChild(n)},addFooter:()=>{let t=document.createElement("div");t.classList.add("footer");let n=document.createElement("p");n.textContent="©Arbor Magna copyright 2024",t.appendChild(n),e.appendChild(t)}}},w=e=>{document.querySelector(`${e}`).addEventListener("click",(()=>{(()=>{let e=document.querySelector("body"),t=document.querySelector(".content");e.removeChild(t)})(),y().addTitle("Menu")}))};!function(){const e=y();e.addTitle(),e.addImage(g),e.addDiv(),e.addImage(m),e.addDiv("Arbor Magna's service whispers luxury, not shouts it. Knowledgeable staff guide you through the historical inspiration behind each dish.  Attentive but unobtrusive, they ensure your experience is seamless, from pre-dinner drink recommendations to after-dinner botanical curiosities."),e.addImage(b),e.addDiv("Step into Arbor Magna and be greeted by a warm embrace.  Sunlight streams through floor-to-ceiling windows, dappling botanical murals that wind across the exposed brick walls.  Comfortable booths upholstered in emerald green offer intimacy, while the antique brass bar gleams under soft pendant lights. The air hums with gentle conversation and the clinking of glasses, promising an evening of refined pleasure."),e.addImage(v),e.addDiv("Arbor Magna's menu is a journey through time on a plate. Imagine Roman flatbreads drizzled with truffle honey, or a Viking-inspired roasted boar with berry reduction. Modern touches elevate the classics: think molecular foams infused with ancient herbs, or delicate desserts reimagining forgotten spices. Every bite promises a surprising, delicious link to the past."),e.addFooter()}(),w("#menu"),w("#about"),w("#location")})()})();