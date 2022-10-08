
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"上厨房","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.6.4","entryPagePath":"pages/menu/menu","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/menu/menu","iconPath":"/static/tabbar/tab-home.png","selectedIconPath":"/static/tabbar/tab-home-current.png","text":"菜谱"},{"pagePath":"pages/morning/morning","iconPath":"/static/tabbar/tab-cate.png","selectedIconPath":"/static/tabbar/tab-cate-current.png","text":"早餐"},{"pagePath":"pages/noon/noon","iconPath":"/static/tabbar/tab-cate.png","selectedIconPath":"/static/tabbar/tab-cate-current.png","text":"午餐"},{"pagePath":"pages/material/material","iconPath":"/static/tabbar/tab-cart.png","selectedIconPath":"/static/tabbar/tab-cart-current.png","text":"采购单"},{"pagePath":"pages/setting/setting","iconPath":"/static/tabbar/tab-my.png","selectedIconPath":"/static/tabbar/tab-my-current.png","text":"设置"}],"selectedIndex":0,"shown":true},"locales":{}};
  const __uniRoutes = [{"path":"pages/menu/menu","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"菜谱","type":"default"},"isNVue":false}},{"path":"pages/morning/morning","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"早餐","type":"default"},"isNVue":false}},{"path":"pages/morning/modify/morningmodify","meta":{"navigationBar":{"titleText":"修改早餐菜谱","type":"default"},"isNVue":false}},{"path":"pages/noon/noon","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"正餐","type":"default"},"isNVue":false}},{"path":"pages/noon/modify/noonmodify","meta":{"navigationBar":{"titleText":"修改正餐菜谱","type":"default"},"isNVue":false}},{"path":"pages/material/material","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"采购单","type":"default"},"isNVue":false}},{"path":"pages/setting/setting","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"titleText":"设置","type":"default"},"isNVue":false}},{"path":"pages/setting/submit/submit","meta":{"navigationBar":{"titleText":"提交","type":"default"},"isNVue":false}},{"path":"pages/setting/modify/modify","meta":{"navigationBar":{"titleText":"修改","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  