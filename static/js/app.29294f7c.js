(function(t){function e(e){for(var r,i,c=e[0],o=e[1],u=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s=[];function i(t){return c.p+"../static/js/"+({about:"about"}[t]||t)+"."+{about:"130e3012"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var u=new Error;s=function(e){o.onerror=o.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),c={},o=Object(i["a"])(c,a,s,!1,null,null,null),u=o.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"cards container is-flex"},[n("RunInput"),n("RunStats")],1),n("RunHistory")],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-info"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(" BRC AutoRun ")]),n("h2",{staticClass:"subtitle"},[t._v(" Management System ")])])])])}],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[n("div",{staticClass:"card-header has-background-grey"},[n("div",{staticClass:"has-text-white card-header-title"},[t._v("Set a new run")])]),n("div",{staticClass:"card-content"},[n("p",[t._v("Input the name of the sample in the current run")])]),n("div",{staticClass:"card-footer"},[n("form",{staticStyle:{display:"flex",margin:"2% auto"},attrs:{action:"/",method:"post"}},[n("input",{staticClass:"input is-success",attrs:{type:"text",name:"fileName",placeholder:"run name",value:""}}),n("input",{staticClass:"button is-success",attrs:{type:"submit",value:"submit"}})])])])}],v={},m=Object(i["a"])(v,p,h,!1,null,null,null),b=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[t._m(0),n("div",{staticClass:"card-content"},[n("p",[t._v(" Current run name: "+t._s(t.filename))]),t.processed?n("p",{staticStyle:{color:"green"}},[t._v("This run has been processed! ")]):n("p",{staticStyle:{color:"orange"}},[t._v("This file has not been processed")]),t.error?n("p",{staticStyle:{color:"red"}},[t._v("Something went wrong.. Please check the stacktrace.")]):t._e()])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header has-background-grey"},[n("div",{staticClass:"has-text-white card-header-title"},[t._v("Current Run Statistics")])])}],g=(n("96cf"),{data:function(){return{processed:!1,filename:"loading...",error:!1}},mounted:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.axios.get("/api/currentRun"));case 2:t=e.sent,this.processed=t.data.processed,this.filename=t.data.filename,this.error=t.data.error;case 6:case"end":return e.stop()}}),null,this)}}),w=g,C=Object(i["a"])(w,y,_,!1,null,null,null),x=C.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history card",staticStyle:{"text-align":"center",width:"80vw"}},[n("div",{staticClass:"card-header has-background-grey"},[n("div",{staticClass:"has-text-white card-header-title"},[t._v("Run History")])]),n("div",{staticClass:"card-content"},[n("p",[t._v("WIP")])])])}],O=(n("745a"),{}),R=Object(i["a"])(O,S,j,!1,null,null,null),E=R.exports,P={name:"home",components:{RunInput:b,RunStats:x,RunHistory:E}},k=P,$=(n("b8d3"),Object(i["a"])(k,d,f,!1,null,"6044c241",null)),T=$.exports;r["a"].use(l["a"]);var M=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new l["a"]({mode:"history",base:"/",routes:M}),H=I,A=n("bc3a"),J=n.n(A),L=n("a7fe"),q=n.n(L);n("92c6");r["a"].config.productionTip=!1,r["a"].use(q.a,J.a),new r["a"]({router:H,render:function(t){return t(u)}}).$mount("#app")},"745a":function(t,e,n){"use strict";var r=n("f845"),a=n.n(r);a.a},"85ec":function(t,e,n){},b6fa:function(t,e,n){},b8d3:function(t,e,n){"use strict";var r=n("b6fa"),a=n.n(r);a.a},f845:function(t,e,n){}});
//# sourceMappingURL=app.29294f7c.js.map