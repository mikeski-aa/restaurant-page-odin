(()=>{"use strict";var e={208:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(601),r=a.n(n),o=a(314),i=a.n(o)()(r());i.push([e.id,".test {\n    color: red;\n}\n\nimg {\n    width: 200px;\n    height: 200px;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),a&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=a):l[2]=a),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=n.base?d[0]+n.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var h=a(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=r(p,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,r){var o=n(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=a(o[i]);t[s].references--}for(var d=n(e,r),c=0;c<o.length;c++){var l=a(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},659:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var r=void 0!==a.layer;r&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,r&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),a.nc=void 0,(()=>{var e=a(72),t=a.n(e),n=a(825),r=a.n(n),o=a(659),i=a.n(o),s=a(56),d=a.n(s),c=a(540),l=a.n(c),u=a(113),h=a.n(u),p=a(208),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.A,f),p.A&&p.A.locals&&p.A.locals;const m=a.p+"59282063aebe9f2f63c6.jpg",g=a.p+"b357266551a439a83fd8.jpg",b=a.p+"805fd8c2a86700dd2aec.jpg",v=a.p+"ac70cd01d18b28738d62.jpg",y=a.p+"44576bba67f8f09640f9.jpg",w=a.p+"ff0ec4175692d6698507.jpg",A=a.p+"57c71df36bbdf72852af.jpeg",T=a.p+"913b454de17ae7704a3b.jpg",x=a.p+"ba4bf951c055d8159e67.jpg",k=a.p+"5665670823768e371ff2.png",S=()=>{(()=>{let e=document.querySelector("body"),t=document.createElement("div");t.classList.add("content"),e.appendChild(t)})();let e=document.querySelector(".content");return{content:e,addDiv:t=>{let a=document.createElement("div"),n=document.createElement("p");n.textContent=t||"Arbor Magna invites you on a culinary adventure through ancient flavors.  Fresh, seasonal ingredients are transformed into dishes inspired by historical recipes, with a modern twist.  Dine in our elegant yet comfortable space, adorned with botanical murals and warm lighting.  Unwind and savor a unique taste of history at Arbor Magna.",a.classList.add("para"),a.appendChild(n),e.appendChild(a)},addImage:t=>{const a=new Image;a.src=t,e.appendChild(a)},addTitle:(t,a)=>{let n=document.createElement(a||"h1");n.textContent=t||"Arbor Magna",e.appendChild(n)},addFooter:()=>{let t=document.createElement("div");t.classList.add("footer");let a=document.createElement("p");a.textContent="©Arbor Magna copyright 2024",t.appendChild(a),e.appendChild(t)}}},C=e=>{document.querySelector(`${e}`).addEventListener("click",(()=>{switch((()=>{let e=document.querySelector("body"),t=document.querySelector(".content");e.removeChild(t)})(),e){case"#menu":!function(){const e=S();e.content.classList.add("menuPage"),e.addTitle("Menu","h1"),e.addTitle("Starters (Primi Piatti)","h2"),e.addTitle("Romanesco Soup with Truffle Dust (6€)","h3"),e.addImage(x),e.addDiv("A creamy blend of Romanesco broccoli, toasted almonds, and pecorino cheese, finished with a touch of luxurious truffle dust. (Vegetarian)"),e.addTitle("Main Courses (Secondi Piatti)","h2"),e.addTitle("Pan-Seared Salmon with Hippocras Glaze (22€)","h3"),e.addImage(T),e.addDiv("Fresh salmon cooked to perfection, glazed with a medieval spiced wine sauce of honey, cinnamon, and ginger. Served with roasted root vegetables."),e.addTitle("Lamb Tajine with Apricot and Pistachio Couscous (24€)","h3"),e.addImage(A),e.addDiv("Slow-cooked Moroccan lamb in a fragrant stew with apricots, toasted almonds, and warm spices. Served on a bed of fluffy couscous with pistachios."),e.addTitle("Desserts (Dolci)","h2"),e.addTitle("Baklava Cheesecake (8€)","h3"),e.addImage(y),e.addDiv("A decadent twist on a classic cheesecake, layered with flaky phyllo dough, chopped nuts, and honey syrup."),e.addTitle("Chocolate Aztec Chili Pot (7€)","h3"),e.addImage(w),e.addDiv("A rich dark chocolate mousse infused with a hint of chili pepper, served in a dark chocolate cup and garnished with candied pumpkin seeds. (Vegan)"),e.addFooter()}();break;case"#home":M();break;case"#about":!function(){const e=S();e.content.classList.add("aboutPage"),e.addTitle("About Arbor Magna","h1"),e.addImage(v),e.addDiv("Arbor Magna, meaning \"Great Tree,\" isn't just a Berlin restaurant; it's a historical culinary journey. Founded by archaeologist couple Amelia and David, the restaurant uses fresh ingredients to reimagine dishes from forgotten civilizations. Sunlight spills through murals depicting botanical wonders, casting warmth on exposed brick walls and emerald green booths. Antique brass lights and gentle conversation create a refined atmosphere."),e.addDiv("Amelia's menu explores the past with a modern touch. Roman flatbreads with truffle honey or Viking-inspired boar with berry reduction share space with modern creations – think molecular foams infused with ancient herbs. The knowledgeable staff, some with backgrounds in history, act as your guides, sharing the stories behind each dish. From pre-dinner drinks inspired by historical libations to after-dinner botanical curiosities, Arbor Magna offers a truly immersive dining experience."),e.addFooter()}();break;case"#location":!function(){const e=S();e.content.classList.add("locationPage"),e.addTitle("Where to find us","h1"),e.addDiv("52.509434, 13.289474"),e.addImage(k),e.addFooter()}()}}))};function M(){const e=S();e.content.classList.add("homePage"),e.addTitle(),e.addImage(g),e.addDiv(),e.addImage(m),e.addDiv("Arbor Magna's service whispers luxury, not shouts it. Knowledgeable staff guide you through the historical inspiration behind each dish.  Attentive but unobtrusive, they ensure your experience is seamless, from pre-dinner drink recommendations to after-dinner botanical curiosities."),e.addImage(v),e.addDiv("Step into Arbor Magna and be greeted by a warm embrace.  Sunlight streams through floor-to-ceiling windows, dappling botanical murals that wind across the exposed brick walls.  Comfortable booths upholstered in emerald green offer intimacy, while the antique brass bar gleams under soft pendant lights. The air hums with gentle conversation and the clinking of glasses, promising an evening of refined pleasure."),e.addImage(b),e.addDiv("Arbor Magna's menu is a journey through time on a plate. Imagine Roman flatbreads drizzled with truffle honey, or a Viking-inspired roasted boar with berry reduction. Modern touches elevate the classics: think molecular foams infused with ancient herbs, or delicate desserts reimagining forgotten spices. Every bite promises a surprising, delicious link to the past."),e.addFooter()}M(),C("#home"),C("#menu"),C("#about"),C("#location")})()})();