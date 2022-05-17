const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    addRouters: state => state.permission.addRouters,
    routers: state => state.permission.routers,
    browserHeaderTitle: state=>state.app.browserHeaderTitle,
    refProductList:state=>state.app.refProductList,
    get_catch: state => state.routerSave.catch_components,
    scroll_top:state=>state.routerSave.scroll_top
  }
  
  export default getters