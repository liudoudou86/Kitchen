
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"上厨房","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.5.3","entryPagePath":"pages/menu/menu","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/menu/menu","iconPath":"/static/tabbar/list.png","selectedIconPath":"/static/tabbar/list_active.png","text":"菜谱"},{"pagePath":"pages/morning/morning","iconPath":"/static/tabbar/grid.png","selectedIconPath":"/static/tabbar/grid_active.png","text":"早餐"},{"pagePath":"pages/noon/noon","iconPath":"/static/tabbar/grid.png","selectedIconPath":"/static/tabbar/grid_active.png","text":"午餐"},{"pagePath":"pages/setting/setting","iconPath":"/static/tabbar/me.png","selectedIconPath":"/static/tabbar/me_active.png","text":"设置"}],"selectedIndex":0,"shown":true},"locales":{}};
  const __uniRoutes = [{"path":"pages/menu/menu","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"菜谱"},"isNVue":false}},{"path":"pages/morning/morning","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"早餐"},"isNVue":false}},{"path":"pages/noon/noon","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"午餐"},"isNVue":false}},{"path":"pages/setting/setting","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"设置"},"isNVue":false}},{"path":"pages/setting/submit/submit","meta":{"navigationBar":{"titleText":"提交"},"isNVue":false}},{"path":"pages/setting/modify/modify","meta":{"navigationBar":{"titleText":"修改"},"isNVue":false}},{"path":"pages/setting/morningmenu/morningmenu","meta":{"navigationBar":{"titleText":"早餐菜谱"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  