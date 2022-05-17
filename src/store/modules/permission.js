import { asyncRouterMap, constantRouterMap } from '@/router/index';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
 function hasPermission(roles, route) {
  // roles为权限身份数组
  if (route.meta && route.meta.roles) {
    console.log("传入的roles",roles,"router名字：",route.meta.title,"router权限：",route.meta.roles)
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)//有roles返回true
  } else {
    console.log("没有meta的route：",route.meta)
    return true
  }
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
   // 返回满足条件的子路由对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        // route.children重新过滤赋值;
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true // 返回该权限路由对象;
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, addrouters) => {
      state.addRouters = addrouters;//可访问的路由
      // console.log("addRouters",state.addRouters)
      state.routers = constantRouterMap.concat(addrouters);//总路由
      // console.log("state.routers",state.routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        let roles = data;
        let accessedRouters = '';
        if (roles.indexOf('admin') >= 0) {
          //console.log("admin > = 0")
          // 如果是管理员，直接将asyncRouterMap所有权限路由赋值给新路由;
          accessedRouters = asyncRouterMap
        } else {
          console.log("nonadmin")
          // 非管理员用户,如roles:['editor','developer']，则需要过滤权asyncRouterMap限路由数据
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
          console.log( accessedRouters)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
};

export default permission;

