"use strict";var t=require("../../common/vendor.js");const g={data(){return{morningFoodData:[],morningSoupData:[],dinnerFoodData:[],dinnerSoupData:[],coldData:[],fruitData:[],otherData:[],loading:!1}},onShow(){this.getMorningFoodData(),this.getMorningSoupData(),this.getDinnerFoodData(),this.getDinnerSoupData(),this.getColdData(),this.getFruitData(),this.getOtherData()},methods:{getMorningFoodData(){this.loading=!0,t.rn.callFunction({name:"readKitchenData",data:{time:"\u65E9\u9910\u4E3B\u98DF"}}).then(n=>{console.log(n),this.morningFoodData=n.result.data,this.loading=!1}).catch(n=>{console.log(n)})},getMorningSoupData(){this.loading=!0,t.rn.callFunction({name:"readKitchenData",data:{time:"\u65E9\u9910\u6C64"}}).then(n=>{console.log(n),this.morningSoupData=n.result.data,this.loading=!1}).catch(n=>{console.log(n)})},getDinnerFoodData(){this.loading=!0,t.rn.callFunction({name:"readKitchenData",data:{time:"\u6B63\u9910\u4E3B\u83DC"}}).then(n=>{console.log(n),this.dinnerFoodData=n.result.data,this.loading=!1}).catch(n=>{console.log(n)})},getDinnerSoupData(){this.loading=!0,t.rn.callFunction({name:"readKitchenData",data:{time:"\u6B63\u9910\u6C64"}}).then(n=>{console.log(n),this.dinnerSoupData=n.result.data,this.loading=!1}).catch(n=>{console.log(n)})},getColdData(){this.loading=!0,t.rn.callFunction({name:"readKitchenData",data:{time:"\u51C9\u83DC"}}).then(n=>{console.log(n),this.coldData=n.result.data,this.loading=!1}).catch(n=>{console.log(n)})},getFruitData(){this.loading=!0,t.rn.callFunction({name:"readKitchenData",data:{time:"\u6C34\u679C"}}).then(n=>{console.log(n),this.fruitData=n.result.data,this.loading=!1}).catch(n=>{console.log(n)})},getOtherData(){this.loading=!0,t.rn.callFunction({name:"readKitchenData",data:{time:"\u5176\u4ED6"}}).then(n=>{console.log(n),this.otherData=n.result.data,this.loading=!1}).catch(n=>{console.log(n)})},getMaterials(n){console.log(n.materials),t.index.hideLoading(),t.index.showModal({content:`\u914D\u6599\u8868\uFF1A
`+n.materials,showCancel:!1})}}};if(!Array){const n=t.resolveComponent("uni-th"),c=t.resolveComponent("uni-tr"),s=t.resolveComponent("uni-td"),u=t.resolveComponent("uni-table");(n+c+s+u)()}const d=()=>"../../uni_modules/uni-table/components/uni-th/uni-th.js",h=()=>"../../uni_modules/uni-table/components/uni-tr/uni-tr.js",m=()=>"../../uni_modules/uni-table/components/uni-td/uni-td.js",D=()=>"../../uni_modules/uni-table/components/uni-table/uni-table.js";Math||(d+h+m+D)();function _(n,c,s,u,o,i){return{a:t.p({width:"130",align:"center"}),b:t.p({width:"130",align:"center"}),c:t.p({width:"130",align:"center"}),d:t.p({width:"130",align:"center"}),e:t.p({width:"130",align:"center"}),f:t.p({width:"130",align:"center"}),g:t.p({width:"130",align:"center"}),h:t.f(o.morningFoodData,(a,e,l)=>({a:t.t(a.nickname),b:t.o(r=>i.getMaterials(a)),c:e})),i:t.p({align:"center"}),j:t.f(o.morningSoupData,(a,e,l)=>({a:t.t(a.nickname),b:t.o(r=>i.getMaterials(a)),c:e})),k:t.p({align:"center"}),l:t.f(o.dinnerFoodData,(a,e,l)=>({a:t.t(a.nickname),b:t.o(r=>i.getMaterials(a)),c:e})),m:t.p({align:"center"}),n:t.f(o.dinnerSoupData,(a,e,l)=>({a:t.t(a.nickname),b:t.o(r=>i.getMaterials(a)),c:e})),o:t.p({align:"center"}),p:t.f(o.coldData,(a,e,l)=>({a:t.t(a.nickname),b:t.o(r=>i.getMaterials(a)),c:e})),q:t.p({align:"center"}),r:t.f(o.fruitData,(a,e,l)=>({a:t.t(a.nickname),b:t.o(r=>i.getMaterials(a)),c:e})),s:t.p({align:"center"}),t:t.f(o.otherData,(a,e,l)=>({a:t.t(a.nickname),b:t.o(r=>i.getMaterials(a)),c:e})),v:t.p({align:"center"}),w:t.sr("table","130dca0f-0"),x:t.p({loading:o.loading,border:!0,stripe:!0,emptyText:"\u6682\u65E0\u66F4\u591A\u6570\u636E"})}}var p=t._export_sfc(g,[["render",_],["__file","D:/Coding/Kitchen/pages/menu/menu.vue"]]);wx.createPage(p);
