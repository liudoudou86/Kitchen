"use strict";var e=require("../../common/vendor.js");const r={data(){return{tableData:[],materials:[],loading:!1}},onShow(){this.getTableDataList(),this.getMaterialsDataList()},methods:{getTableDataList(){e.rn.callFunction({name:"readWeekData"}).then(n=>{this.tableData=n.result.data,console.log(n)}).catch(n=>{console.log(n)})},getMaterialsDataList(){e.rn.callFunction({name:"readMaterialsData"}).then(n=>{this.materials=n.result,console.log(n)}).catch(n=>{console.log(n)})}}};if(!Array){const n=e.resolveComponent("uni-th"),c=e.resolveComponent("uni-tr"),l=e.resolveComponent("uni-td"),i=e.resolveComponent("uni-table");(n+c+l+i)()}const u=()=>"../../uni_modules/uni-table/components/uni-th/uni-th.js",_=()=>"../../uni_modules/uni-table/components/uni-tr/uni-tr.js",b=()=>"../../uni_modules/uni-table/components/uni-td/uni-td.js",g=()=>"../../uni_modules/uni-table/components/uni-table/uni-table.js";Math||(u+_+b+g)();function p(n,c,l,i,o,m){return{a:e.p({width:"60",align:"center"}),b:e.p({width:"100",align:"center"}),c:e.p({width:"100",align:"center"}),d:e.p({width:"100",align:"center"}),e:e.p({width:"100",align:"center"}),f:e.p({width:"100",align:"center"}),g:e.p({width:"90",align:"center"}),h:e.f(o.tableData,(a,s,t)=>({a:e.t(a.date),b:"c7b2e1a2-10-"+t+","+("c7b2e1a2-9-"+t),c:e.t(a.morning),d:"c7b2e1a2-11-"+t+","+("c7b2e1a2-9-"+t),e:e.t(a.noon),f:"c7b2e1a2-12-"+t+","+("c7b2e1a2-9-"+t),g:e.t(a.night),h:"c7b2e1a2-13-"+t+","+("c7b2e1a2-9-"+t),i:e.t(a.soup),j:"c7b2e1a2-14-"+t+","+("c7b2e1a2-9-"+t),k:e.t(a.fruit),l:"c7b2e1a2-15-"+t+","+("c7b2e1a2-9-"+t),m:"c7b2e1a2-16-"+t+","+("c7b2e1a2-9-"+t),n:s,o:"c7b2e1a2-9-"+t+",c7b2e1a2-0"})),i:e.p({align:"center"}),j:e.p({align:"left"}),k:e.p({align:"left"}),l:e.p({align:"left"}),m:e.p({align:"left"}),n:e.p({align:"left"}),o:e.sr("table","c7b2e1a2-0"),p:e.p({loading:o.loading,border:!0,stripe:!0,emptyText:"\u6682\u65E0\u66F4\u591A\u6570\u636E"}),q:e.t(o.materials)}}var d=e._export_sfc(r,[["render",p],["__file","D:/Coding/Kitchen/pages/week/week.vue"]]);wx.createPage(d);
