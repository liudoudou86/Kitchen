"use strict";var n=require("../../common/vendor.js");const u={data(){return{tableData:[],materialsData:[],loading:!1}},onShow(){this.getTableData(),this.getMaterialsData()},methods:{getTableData(){this.loading=!0,n.rn.callFunction({name:"readMorningMenuData"}).then(t=>{this.tableData=t.result.data,this.loading=!1,console.log(t)}).catch(t=>{console.log(t)})},getMaterialsData(){this.loading=!0,n.rn.callFunction({name:"readMorningMaterialsData"}).then(t=>{this.materialsData=t.result,this.loading=!1,console.log(t)}).catch(t=>{console.log(t)})},getRowData(t){console.log("\u51C6\u5907\u4F20\u7684\u6570\u636E",t),n.index.navigateTo({url:"modify/morningmodify?item="+encodeURIComponent(JSON.stringify(t)),success:function(a){console.log("\u56DE\u8C03\u6210\u529F",a)},fail:function(a){console.log("\u56DE\u8C03\u5931\u8D25",a)}})}}};if(!Array){const t=n.resolveComponent("uni-th"),a=n.resolveComponent("uni-tr"),l=n.resolveComponent("uni-td"),s=n.resolveComponent("uni-table");(t+a+l+s)()}const g=()=>"../../uni_modules/uni-table/components/uni-th/uni-th.js",d=()=>"../../uni_modules/uni-table/components/uni-tr/uni-tr.js",_=()=>"../../uni_modules/uni-table/components/uni-td/uni-td.js",m=()=>"../../uni_modules/uni-table/components/uni-table/uni-table.js";Math||(g+d+_+m)();function b(t,a,l,s,i,r){return{a:n.p({width:"60",align:"center"}),b:n.p({width:"100",align:"center"}),c:n.p({width:"100",align:"center"}),d:n.p({width:"100",align:"center"}),e:n.p({width:"100",align:"center"}),f:n.p({width:"90",align:"center"}),g:n.f(i.tableData,(o,c,e)=>({a:n.t(o.date),b:"61218b79-9-"+e+","+("61218b79-8-"+e),c:n.t(o.morningfood),d:"61218b79-10-"+e+","+("61218b79-8-"+e),e:n.t(o.morningsoup),f:"61218b79-11-"+e+","+("61218b79-8-"+e),g:n.t(o.fruit),h:"61218b79-12-"+e+","+("61218b79-8-"+e),i:n.t(o.other),j:"61218b79-13-"+e+","+("61218b79-8-"+e),k:n.o(p=>r.getRowData(o)),l:"61218b79-14-"+e+","+("61218b79-8-"+e),m:c,n:"61218b79-8-"+e+",61218b79-0"})),h:n.p({align:"center"}),i:n.p({align:"left"}),j:n.p({align:"left"}),k:n.p({align:"left"}),l:n.p({align:"left"}),m:n.sr("table","61218b79-0"),n:n.p({loading:i.loading,border:!0,stripe:!0,emptyText:"\u6682\u65E0\u66F4\u591A\u6570\u636E"}),o:n.t(i.materialsData)}}var h=n._export_sfc(u,[["render",b],["__file","D:/Coding/Kitchen/pages/morning/morning.vue"]]);wx.createPage(h);
