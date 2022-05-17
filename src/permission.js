import router from './router'
import store from './store'

import Nprogress from 'nprogress'

import { Message } from 'element-ui'
import { getToken } from './utils/auth'
import { setTitle } from './utils/mUtils'
import { clipPointsByRect } from 'echarts/lib/util/graphic'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    Nprogress.start()
    //title 设置预备
    const browserHeaderTitle = to.meta.title
    store.dispatch('SetbrowserHeaderTitle', browserHeaderTitle)
    if (getToken()) {
        // console.log("Token 1")
        if (to.path === '/login') {//跳过登录界面
            console.log('to === login,so pass')
            next({ path: '/' })
            Nprogress.done()
        }
        else {//已经登录完成有token去拉去user资料
            // console.log('just get token,now get userinfo')
            if (store.getters.roles.length === 0) {
                let token = getToken();
                //console.log("====》for userinfo by gettoken：", token)
                store.dispatch('GetInfo', token).then(res => {
                    // console.log("after getinfo state:",store.getters)
                    store.dispatch('GenerateRoutes', store.getters.roles).then(() => {
                        // console.log("addRoutes,and next")
                        router.addRoutes(store.getters.addRouters)//添加上可访问的路由
                        next({ ...to, replace: true })// hack方法 确保addRoutes已完成,动态加载完路由一定要这么写，不然会白屏
                        // console.log("total routers",router)
                    })
                }).catch((err) => {
                    console.log('err in permission', err)
                    store.dispatch('LogOut').then(() => {
                        Message.error(err || 'Verification failed, please login again')
                        next({ path: '/' })
                    })
                })
            }
            else {
                // console.log("else just next")
                next()
            }
        }
    } else {
        console.log('token 0')
        if (whiteList.indexOf(to.path) !== -1) {//在白名单里面，直接进入
            next()
        } else {
            next('/login')
            Nprogress.done()
        }
    }
})

router.afterEach(() => {
    Nprogress.done() // 结束Progress
    setTimeout(() => {
        //title设置完成
        const browserHeaderTitle = store.getters.browserHeaderTitle
        setTitle(browserHeaderTitle)
    }, 0)
})

