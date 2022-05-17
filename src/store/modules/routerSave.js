const routerSave = {
  state: {
    catch_components: [],
    scroll_top:0
  },
  // 异步数据
  actions: {
    // 增加路由
    addRoute({commit,rootState}, data) {
      const ArrList = rootState.keepAlive.catch_components
      let common = false
      ArrList.forEach(item => {
        if (item === data) {
          common = true
        }
      })
      if (!common) {
        ArrList.push(data)
      }
      commit('get_catch', ArrList)
    },
    save_scroll({commit},data){
      console.log("save_scroll!!!!")
      commit('SAVE_SCROLL',data)
    },
    removeRoute({commit,rootState}, data) {
      const ArrList = rootState.keepAlive.catch_components
      let index = null
      ArrList.forEach((item, num) => {
        if (item === data) {
          index = num
        }
      })
      if (index) {
        ArrList.splice(index, 1)
      }
      commit('get_catch', ArrList)
    },
    // 移除所有路由
    removeAllRoute({commit,rootState}, data) {
      commit('get_catch', [])
    }
  },
  // 同步数据
  mutations: {
    get_catch(state, data) {
      state.catch_components = data
    },
    
    SAVE_SCROLL(state,data){
      state.scroll_top = data
    }
  }
}
export default routerSave