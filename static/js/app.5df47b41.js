(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],l=0,p=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function i(e){return o.p+"../static/js/"+({about:"about"}[e]||e)+"."+{about:"d9758966"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}s[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"511f":function(e,t,r){"use strict";var n=r("5510"),s=r.n(n);s.a},5510:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),o={},u=Object(i["a"])(o,s,a,!1,null,null,null),c=u.exports,l=(r("d3b7"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("div",{staticClass:"cards container is-flex"},[r("RunInput",{attrs:{submit:e.submit,response:e.response}}),r("RunStats",{attrs:{error:e.error,filename:e.filename,processed:e.processed}})],1),r("RunHistory",{attrs:{reload:e.getHistory,runs:e.runs}})],1)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-info"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v(" BRC AutoRun ")]),r("h2",{staticClass:"subtitle"},[e._v(" Management System ")])])])])}],f=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[e._m(0),e._m(1),r("div",{staticClass:"card-footer"},[r("form",{staticStyle:{display:"flex",margin:"2% auto"},attrs:{action:"/",method:"post"},on:{submit:function(t){return t.preventDefault(),e.submit(e.fileName)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fileName,expression:"fileName"}],staticClass:"input is-success",attrs:{type:"text",name:"fileName",placeholder:"run name",value:""},domProps:{value:e.fileName},on:{input:function(t){t.target.composing||(e.fileName=t.target.value)}}}),r("input",{staticClass:"button is-success",attrs:{type:"submit",value:"submit"}})])]),""!==e.response?r("div",{staticStyle:{margin:"1% auto"}},[r("p",{style:{color:"error"===e.response?"red;":"green"}},[e._v(" "+e._s("error"===e.response?"There was an error setting the current run.":"Current run set successfully!")+" ")])]):e._e()])}),h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header has-background-grey"},[r("div",{staticClass:"has-text-white card-header-title"},[e._v("Set a new run")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-content"},[r("p",[e._v("Input the name of the sample in the current run")])])}],v={data:function(){return{fileName:""}},props:["submit","response"]},m=v,_=Object(i["a"])(m,f,h,!1,null,null,null),g=_.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",staticStyle:{"text-align":"center",width:"30vw"}},[e._m(0),r("div",{staticClass:"card-content"},[r("p",[e._v(" Current run name: "+e._s(e.filename))]),e.processed?r("p",{staticStyle:{color:"green"}},[e._v("This run has been processed! ")]):r("p",{staticStyle:{color:"orange"}},[e._v("This file has not been processed")]),e.error?r("p",{staticStyle:{color:"red"}},[e._v("Something went wrong.. Please check the stacktrace.")]):e._e()])])},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header has-background-grey"},[r("div",{staticClass:"has-text-white card-header-title"},[e._v("Current Run Statistics")])])}],w={props:["error","filename","processed"]},x=w,C=Object(i["a"])(x,y,b,!1,null,null,null),R=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"history card",staticStyle:{"text-align":"center",width:"80vw"}},[r("div",{staticClass:"card-header has-background-grey"},[r("div",{staticClass:"has-text-white card-header-title",staticStyle:{width:"100%",display:"inline"}},[r("p",{staticStyle:{float:"left"}},[e._v("Run History")]),r("button",{staticClass:"button is-info",staticStyle:{float:"right"},on:{click:e.reload}},[e._v("Reload")])])]),e.runs.length>0?r("div",{staticClass:"card-content"},e._l(e.processedRuns,(function(t){var n=t.pipeline_start,s=t._id,a=t.name,i=t.error,o=t.processed,u=t.created,c=t.slims,l=t.finished,d=t.folder;return r("div",{key:s,staticClass:"message",class:{"is-success":o&&!n,"is-warning":!o&&!i&&!n,"is-danger":i,"is-info":!!n}},[r("div",{staticClass:"message-header"},[e._v(" run name: "+e._s(a)+" "),i?e._e():r("p",[e._v("processed: "+e._s(o?"yes":"no"))]),i?r("p",[e._v(" Error!")]):e._e()]),r("div",{staticClass:"message-body",staticStyle:{"text-align":"left"}},[r("p",[r("b",[e._v("SLIMS url: ")]),e._v(" "+e._s(c||"not set"))]),r("p",[r("b",[e._v("Started on:")]),e._v(" "+e._s(new Date(u)))]),r("p",[r("b",[e._v("Run finished at: ")]),e._v(" "+e._s(l?new Date(l):"unfinished"))]),r("p",[r("b",[e._v("Run folder: ")]),e._v(" "+e._s(d||"unfinished"))]),r("p",[r("b",[e._v("Pipeline started on: ")]),e._v(" "+e._s(n?new Date(n):"unfinished"))])])])})),0):r("div",[r("h1",{staticStyle:{padding:"5%"}},[e._v("Currently no runs.")])])])},j=[],O=(r("d81d"),{props:{runs:{type:Array,require:!0},reload:{type:Function,require:!0}},computed:{processedRuns:function(){var e=this,t=this.runs.map((function(t){return t.error=e.isBool(t.error),t.processed=e.isBool(t.processed),t}));return t}},methods:{isBool:function(e){var t="false"===e||"true"===e;return t?"false"!==e:e}}}),k=O,E=(r("745a"),Object(i["a"])(k,S,j,!1,null,null,null)),P=E.exports,D={name:"home",components:{RunInput:g,RunStats:R,RunHistory:P},data:function(){return{processed:!1,filename:"loading...",error:!1,response:"",interval:function(){},runs:[]}},methods:{getRunData:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.axios.get("/api/currentRun"));case 3:e=t.sent,this.processed=e.data.processed,this.filename=e.data.filename,this.error=e.data.error,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.filename="unset";case 12:case"end":return t.stop()}}),null,this,[[0,9]])},getHistory:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.axios.get("/api/history"));case 2:e=t.sent,this.runs=e.data,console.log(this.runs);case 5:case"end":return t.stop()}}),null,this)},submit:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=new FormData,t.set("fileName",e),n.next=4,regeneratorRuntime.awrap(this.axios({method:"post",url:"/api/newRun",data:t,headers:{"Content-Type":"multipart/form-data"}}));case 4:return r=n.sent,this.response=200===r.status?"success":"error",n.next=8,regeneratorRuntime.awrap(this.getRunData());case 8:case"end":return n.stop()}}),null,this)}},mounted:function(){this.getRunData(),this.getHistory(),self.interval=setInterval(this.getRunData,6e3)},beforeDestroy:function(){clearInterval(self.interval)}},$=D,N=(r("511f"),Object(i["a"])($,d,p,!1,null,"c67e5c08",null)),T=N.exports;n["a"].use(l["a"]);var H=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],I=new l["a"]({mode:"history",base:"/",routes:H}),M=I,B=r("bc3a"),q=r.n(B),A=r("a7fe"),L=r.n(A);r("92c6");n["a"].config.productionTip=!1,n["a"].use(L.a,q.a),new n["a"]({router:M,render:function(e){return e(c)}}).$mount("#app")},"745a":function(e,t,r){"use strict";var n=r("f845"),s=r.n(n);s.a},"85ec":function(e,t,r){},f845:function(e,t,r){}});
//# sourceMappingURL=app.5df47b41.js.map