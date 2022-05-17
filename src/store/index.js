import Vue from "vue";
import VueX from "vuex";

import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import routerSave from './modules/routerSave'
import getters from './getters'


Vue.use(VueX)

const store = new VueX.Store({
    modules:{
        user,
        permission,
        app,
        routerSave,
    },
    getters
})

export default store