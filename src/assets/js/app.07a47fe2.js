(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/elections-registration-deadlines/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("MainComponent")],1)},r=[],o=n("b85c"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t.isLoading?[t._m(0)]:[n("div",{staticClass:"col-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedOption,expression:"selectedOption"}],staticClass:"select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedOption=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[t._v(" Select a State ")]),t._l(t.optionsData,(function(e,a){return n("option",{key:"select-drop-"+a,domProps:{value:e.id}},[t._v(" "+t._s(e.name||e.id||"-")+" ")])}))],2)]),n("div",{staticClass:"col-12"},[t.selectedData&&t.selectedOption?[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("div",{class:[t.checkDatePassed(t.selectedData.by_mail)?"box-red":"","box-message rounded mt-3 p-3"]},[n("div",{staticClass:"title"},[t._v(" by Mail ")]),n("div",{staticClass:"date"},[t._v(" "+t._s(t._f("formatDate")(t.selectedData.by_mail))+" ")]),n("div",[n("span",{staticClass:"title mr-3 link pointer",on:{click:function(e){return t.openLink(t.selectedData.link_to_register_by_mail)}}},[t._v(" Register Now ")])]),n("span",{staticClass:"icon-arrow-right icon-size"})])]),n("div",{staticClass:"col-md-4"},[n("div",{class:[t.checkDatePassed(t.selectedData.online)?"box-red":"","box-message rounded mt-3 p-3"]},[n("div",{staticClass:"title"},[t._v(" Online ")]),n("div",{staticClass:"date"},[t._v(" "+t._s(t._f("formatDate")(t.selectedData.online))+" ")]),n("div",[n("span",{staticClass:"title mr-3 link pointer",on:{click:function(e){return t.openLink(t.selectedData.link_to_register_online)}}},[t._v(" Register Now ")])]),n("span",{staticClass:"icon-arrow-right icon-size"})])]),n("div",{staticClass:"col-md-4"},[n("div",{class:[t.checkDatePassed(t.selectedData.in_person)?"box-red":"","box-message rounded mt-3 p-3"]},[n("div",{staticClass:"title"},[t._v(" In Person ")]),n("div",{staticClass:"date"},[t._v(" "+t._s(t._f("formatDate")(t.selectedData.in_person))+" ")]),n("div",[n("span",{staticClass:"title mr-3 link pointer",on:{click:function(e){return t.openLink(t.selectedData.link_to_register_in_person)}}},[t._v(" Register Now ")])]),n("span",{staticClass:"icon-arrow-right icon-size"})])])])]:[t._m(1)]],2)]],2)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t._v(" Loading... ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t._v(" Loading... ")])])}],l=(n("7db0"),n("a15b"),n("d81d"),n("fb6a"),n("ac1f"),n("1276"),{name:"MainComponent",filters:{formatDate:function(t){return t.split("/").slice(0,2).join("/")}},data:function(){return{startData:"HELLO",selectedOption:""}},computed:{isLoading:function(){return this.$store.state.isLoading},optionsData:function(){return this.isLoading?[{name:null,id:null}]:this.$store.state.registrationData.map((function(t){return{name:t.state,id:t.abbreviation}}))},selectedData:function(){var t=this.selectedOption;return this.$store.state.registrationData.find((function(e){return e.abbreviation===t}))},getUserLocation:function(){return this.$store.state.userLocation}},watch:{getUserLocation:function(){this.selectedOption=this.getUserLocation}},methods:{checkDatePassed:function(t){var e=new Date,n=new Date(t);return e.setHours(0,0,0,0),"Invalid Date"==n||e>n},tweetMessage:function(){var t="https://www.youthradio.org/",e="Tweet Something : ".concat(t),n="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(e));window.open(n,"pop","width=600, height=400, scrollbars=no")},validateSelection:function(t){this.selected=t},openLink:function(t){window.open(t,"_blank")}}}),u=l,d=(n("ec51"),n("2877")),f=Object(d["a"])(u,s,c,!1,null,"3acb1f3d",null),p=f.exports,v=n("6dd8"),h={name:"App",components:{MainComponent:p},data:function(){return{}},created:function(){var t=this.$route.query.fileName;this.$store.dispatch("fetchData",t)},mounted:function(){var t=this.$root.$el,e=new v["a"]((function(t){var e,n=Object(o["a"])(t);try{for(n.s();!(e=n.n()).done;){var a=e.value,i=a.contentRect.height,r="elementHeight:"+i;parent.postMessage(r,"*")}}catch(s){n.e(s)}finally{n.f()}}));e.observe(t)},methods:{}},m=h,_=(n("5c0b"),Object(d["a"])(m,i,r,!1,null,null,null)),g=_.exports,b=(n("99af"),n("d3b7"),n("96cf"),n("1da1")),w=n("2f62"),C=n("5626");a["a"].use(w["a"]);var D={isLoading:!1,registrationData:null,userLocation:"CT"},y={fetchData:function(t,e){var n=t.commit;n("CSV_DATA",e),n("GET_LOCATION")}},O={CSV_DATA:function(t,e){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isLoading=!0,n.next=3,fetch("".concat("/elections-registration-deadlines/","years/").concat(e)).then((function(t){return t.text()})).then((function(t){return Object(C["a"])(t)})).then((function(t){return delete t.columns,t}));case 3:a=n.sent,t.registrationData=a,t.isLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},GET_LOCATION:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ipapi.co/json").then((function(t){return t.json()}));case 2:n=e.sent,t.userLocation="US"===n.country?n.region_code:"CA";case 4:case"end":return e.stop()}}),e)})))()}},k=new w["a"].Store({mutations:O,state:D,actions:y}),L=n("8c4f");a["a"].use(L["a"]);var x=new L["a"]({mode:"history",base:"/elections-registration-deadlines/"}),j=x;a["a"].config.productionTip=!1,new a["a"]({store:k,router:j,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},6307:function(t,e,n){},"9c0c":function(t,e,n){},ec51:function(t,e,n){"use strict";var a=n("6307"),i=n.n(a);i.a}});
//# sourceMappingURL=app.07a47fe2.js.map