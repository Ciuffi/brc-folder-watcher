(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],l=0,p=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function i(e){return o.p+"../static/js/"+({about:"about"}[e]||e)+"."+{about:"d9758966"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"337d":function(e,t,r){"use strict";var n=r("e8f8"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("034f"),r("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null),u=c.exports,l=(r("d3b7"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("div",{staticClass:"cards container is-flex"},[r("RunInput",{attrs:{submit:e.submit,response:e.response}}),r("RunStats",{attrs:{error:e.error,filename:e.filename,processed:e.processed}})],1),r("RunHistory")],1)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-info"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v(" BRC AutoRun ")]),r("h2",{staticClass:"subtitle"},[e._v(" Management System ")])])])])}],f=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[e._m(0),e._m(1),r("div",{staticClass:"card-footer"},[r("form",{staticStyle:{display:"flex",margin:"2% auto"},attrs:{action:"/",method:"post"},on:{submit:function(t){return t.preventDefault(),e.submit(e.fileName)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fileName,expression:"fileName"}],staticClass:"input is-success",attrs:{type:"text",name:"fileName",placeholder:"run name",value:""},domProps:{value:e.fileName},on:{input:function(t){t.target.composing||(e.fileName=t.target.value)}}}),r("input",{staticClass:"button is-success",attrs:{type:"submit",value:"submit"}})]),r("br"),""!==e.response?r("p",{style:{color:"error"===e.response?"red;":"green"}},[e._v(" "+e._s("error"===e.response?"There was an error setting the current run.":"Current run set successfully!")+" ")]):e._e()])])}),h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header has-background-grey"},[r("div",{staticClass:"has-text-white card-header-title"},[e._v("Set a new run")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-content"},[r("p",[e._v("Input the name of the sample in the current run")])])}],m={data:function(){return{fileName:""}},props:["submit","response"]},v=m,b=Object(i["a"])(v,f,h,!1,null,null,null),g=b.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[e._m(0),r("div",{staticClass:"card-content"},[r("p",[e._v(" Current run name: "+e._s(e.filename))]),e.processed?r("p",{staticStyle:{color:"green"}},[e._v("This run has been processed! ")]):r("p",{staticStyle:{color:"orange"}},[e._v("This file has not been processed")]),e.error?r("p",{staticStyle:{color:"red"}},[e._v("Something went wrong.. Please check the stacktrace.")]):e._e()])])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header has-background-grey"},[r("div",{staticClass:"has-text-white card-header-title"},[e._v("Current Run Statistics")])])}],w={props:["error","filename","processed"]},x=w,C=Object(i["a"])(x,y,_,!1,null,null,null),R=C.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"history card",staticStyle:{"text-align":"center",width:"80vw"}},[r("div",{staticClass:"card-header has-background-grey"},[r("div",{staticClass:"has-text-white card-header-title"},[e._v("Run History")])]),r("div",{staticClass:"card-content"},[r("p",[e._v("WIP")])])])}],O=(r("745a"),{}),E=Object(i["a"])(O,S,j,!1,null,null,null),P=E.exports,$={name:"home",components:{RunInput:g,RunStats:R,RunHistory:P},data:function(){return{processed:!1,filename:"loading...",error:!1,response:""}},methods:{getRunData:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.axios.get("/api/currentRun"));case 2:e=t.sent,this.processed=e.data.processed,this.filename=e.data.filename,this.error=e.data.error;case 6:case"end":return t.stop()}}),null,this)},submit:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=new FormData,t.set("fileName",e),n.next=4,regeneratorRuntime.awrap(this.axios({method:"post",url:"/api/newRun",data:t,headers:{"Content-Type":"multipart/form-data"}}));case 4:return r=n.sent,this.response=200===r.status?"success":"error",n.next=8,regeneratorRuntime.awrap(this.getRunData());case 8:case"end":return n.stop()}}),null,this)}},mounted:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.getRunData());case 2:case"end":return e.stop()}}),null,this)}},k=$,N=(r("337d"),Object(i["a"])(k,d,p,!1,null,"6da9bdab",null)),T=N.exports;n["a"].use(l["a"]);var D=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],M=new l["a"]({mode:"history",base:"/",routes:D}),I=M,H=r("bc3a"),A=r.n(H),J=r("a7fe"),L=r.n(J);r("92c6");n["a"].config.productionTip=!1,n["a"].use(L.a,A.a),new n["a"]({router:I,render:function(e){return e(u)}}).$mount("#app")},"745a":function(e,t,r){"use strict";var n=r("f845"),a=r.n(n);a.a},"85ec":function(e,t,r){},e8f8:function(e,t,r){},f845:function(e,t,r){}});
//# sourceMappingURL=app.703ec0f5.js.map