import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

// const whiteList = [
// 	'/'
// ];

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true},
    //{ path: '/404', component: () => import('@/views/404'), hidden: true },
    {
        path: '',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/index'),
            meta: { title: '首页', icon: 'home' }
        }]
    }
]

export default new Router({
    mode:'history',
    base: '/',
    routes: constantRouterMap,
    
})

export const asyncRouterMap = [
    {
        name:'productCenter',
        path: '/productCenter',
        meta: { title: '产品中心', icon: 'productCenter',roles:['developer'] },
        redirect:'productList',
        component: Layout,
        children:[{
            name:'productList',
            path:'productList',
            meta: { title: '产品列表', roles:['developer'],icon: 'productList',keepAlive:true},
            component:()=>import("@/views/productCenter/productList") ,
            beforeEnter:(to,from,next)=>{
                next()
            },
        },
        {
            name:'addProduct',
            path:'addProduct',
            meta: { title: '产品添加', roles:['developer'],icon: 'addProduct' },
            component:()=>import("@/views/productCenter/addProduct") 
        },
        {
            name:'Categroylist',
            path:'Categroylist',
            meta: { title: '分类列表', roles:['developer'],icon: 'Categroylist' },
            component:()=>import("@/views/productCenter/categroylist") 
        },
        {
            name:'updateProduct',
            path:'updateProduct',
            hidden: true,
            meta: { title: '产品更新'},
            component:()=>import("@/views/productCenter/updateProduct") 
        }]
    },
    {
        path: '/maketCenter',
        component: Layout,
        meta: { title: '市场中心', icon: 'maketCenter',roles:['editor'] },
        children: [{
            path:'flashList',   
            meta: { title: '秒杀活动列表',roles:['editor'],icon:'flashList' },
            component:()=>import("@/views/maketCenter/flashList") 
        },
        {
            path:'promotionList',
            meta: { title: '促销活动列表',roles:['editor'],icon:'promotionList' },
            component:()=>import("@/views/maketCenter/promotionList") 
        },
        {
            path:'advertList',
            meta: { title: '广告列表', roles:['editor'],icon:'advertList'},
            component:()=>import("../views/maketCenter/advertList") 
        },{
            path:'flashSession',
            hidden:true,
            meta:{title:'秒杀产品列表',roles:['editor'],icon:'advertList'},
            component:()=>import("../views/maketCenter/flashSession")
        }]
    },
    {
        path:'/fundAudit',
        meta:{title:'资金审计',icon:'fundAudit',roles:['admin']},
        component: Layout,
        children:[{
            path:'visualCapital',
            meta:{ title: '资金报表', roles:['admin'],icon: 'visualCapital' },
            component:()=>import("@/views/fundAuditCenter/visualCapital") 
        },
        {
            path:'fundAuditStatistics',
            meta:{ title: '资金统计', roles:['admin'],icon: 'fundAuditStatistics' },
            component:()=>import("@/views/fundAuditCenter/fundAuditStatistics") 
        }]
    },
    {
        path: '/permissionCenter',
        meta: { title: '权限中心', icon: 'permissionCenter',roles:['developer','editor']  },
        component: Layout,
        children:[{
            hidden:true,
            path:'customerUser',
            meta: { title: '买家用户管理', roles:['admin'], icon: 'customerUser' },
            component:()=>import("@/views/permissionCenter/customerUser") 
        },
        {
            path:'adminUser',
            meta: { title: '后台用户管理', roles:['admin'], icon: 'adminUser' },
            component:()=>import("@/views/permissionCenter/adminUser") 
        },{
            path:'permissionSizer',
            meta: { title: '权限展示', roles:['editor','developer'], icon: 'permissionSizer' },
            component:()=>import("@/views/permissionCenter/permissionSizer") 
        }
        // {
        //     path:'UserCenter',
        //     meta:{ title:'个人中心',icon:'personalCenter'},
        //     component:()=>import("@/views/permissionCenter/userCenter")
        // },
        // {
        //     path:'example',
        //     meta:{ title:'随机',roles:['admin']},
        //     component:()=>import("@/views/permissionCenter/example")
        // }
        ]
    }
]
