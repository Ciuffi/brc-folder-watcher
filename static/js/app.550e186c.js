(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function i(e){return o.p+"../static/js/"+({about:"about"}[e]||e)+"."+{about:"130e3012"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",{staticClass:"cards container is-flex"},[n("RunInput"),n("RunStats")],1),n("RunHistory")],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-info"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" BRC AutoRun ")]),n("h2",{staticClass:"subtitle"},[e._v(" Management System ")])])])])}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[e._m(0),e._m(1),n("div",{staticClass:"card-footer"},[n("form",{staticStyle:{display:"flex",margin:"2% auto"},attrs:{action:"/",method:"post"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fileName,expression:"fileName"}],staticClass:"input is-success",attrs:{type:"text",name:"fileName",placeholder:"run name",value:""},domProps:{value:e.fileName},on:{input:function(t){t.target.composing||(e.fileName=t.target.value)}}}),n("input",{staticClass:"button is-success",attrs:{type:"submit",value:"submit"}})]),n("br"),""!==e.response?n("p",{style:{color:"error"===e.response?"red;":"green"}},[e._v(" "+e._s("error"===e.response?"There was an error setting the current run.":"Current run set successfully!")+" ")]):e._e()])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header has-background-grey"},[n("div",{staticClass:"has-text-white card-header-title"},[e._v("Set a new run")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-content"},[n("p",[e._v("Input the name of the sample in the current run")])])}],m=(n("96cf"),{data:function(){return{fileName:"",response:""}},methods:{submit:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=new FormData,e.set("fileName",this.fileName),n.next=4,regeneratorRuntime.awrap(this.axios({method:"post",url:"/api/newRun",data:e,headers:{"Content-Type":"multipart/form-data"}}));case 4:t=n.sent,this.response=200===t.status?"success":"error",this.$forceUpdate();case 7:case"end":return n.stop()}}),null,this)}}}),v=m,b=Object(i["a"])(v,p,h,!1,null,null,null),_=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[e._m(0),n("div",{staticClass:"card-content"},[n("p",[e._v(" Current run name: "+e._s(e.filename))]),e.processed?n("p",{staticStyle:{color:"green"}},[e._v("This run has been processed! ")]):n("p",{staticStyle:{color:"orange"}},[e._v("This file has not been processed")]),e.error?n("p",{staticStyle:{color:"red"}},[e._v("Something went wrong.. Please check the stacktrace.")]):e._e()])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header has-background-grey"},[n("div",{staticClass:"has-text-white card-header-title"},[e._v("Current Run Statistics")])])}],w={data:function(){return{processed:!1,filename:"loading...",error:!1}},mounted:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.axios.get("/api/currentRun"));case 2:e=t.sent,this.processed=e.data.processed,this.filename=e.data.filename,this.error=e.data.error;case 6:case"end":return t.stop()}}),null,this)}},C=w,x=Object(i["a"])(C,y,g,!1,null,null,null),S=x.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"history card",staticStyle:{"text-align":"center",width:"80vw"}},[n("div",{staticClass:"card-header has-background-grey"},[n("div",{staticClass:"has-text-white card-header-title"},[e._v("Run History")])]),n("div",{staticClass:"card-content"},[n("p",[e._v("WIP")])])])}],R=(n("745a"),{}),E=Object(i["a"])(R,j,O,!1,null,null,null),P=E.exports,$={name:"home",components:{RunInput:_,RunStats:S,RunHistory:P}},k=$,N=(n("b8d3"),Object(i["a"])(k,d,f,!1,null,"6044c241",null)),T=N.exports;r["a"].use(l["a"]);var M=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new l["a"]({mode:"history",base:"/",routes:M}),H=I,A=n("bc3a"),D=n.n(A),J=n("a7fe"),L=n.n(J);n("92c6");r["a"].config.productionTip=!1,r["a"].use(L.a,D.a),new r["a"]({router:H,render:function(e){return e(u)}}).$mount("#app")},"745a":function(e,t,n){"use strict";var r=n("f845"),a=n.n(r);a.a},"85ec":function(e,t,n){},b6fa:function(e,t,n){},b8d3:function(e,t,n){"use strict";var r=n("b6fa"),a=n.n(r);a.a},f845:function(e,t,n){}});
//# sourceMappingURL=app.550e186c.js.map