// 入口文件
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'



import moment from "moment"




// 插件
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

// 插件
import { Header, Swipe, SwipeItem, Button } from "mint-ui"
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
// 路由
import router from "./router.js"

import app from "./App.vue"
Vue.filter("dataa",function(dataStr,pattern){
    return moment(dataStr).format(pattern)
})
var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(app),
    router
})