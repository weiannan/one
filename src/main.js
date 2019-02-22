// 入口文件
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import VueResource from "vue-resource"
Vue.use(VueResource)

// 插件
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

// 插件
import { Header, Swipe, SwipeItem } from "mint-ui"
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// 路由
import router from "./router.js"

import app from "./App.vue"

var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(app),
    router
})