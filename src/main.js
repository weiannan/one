// 入口文件
console.log('OK')
import Vue from "vue"

import "./lib/mui/css/mui.min.css"
// import "./lib/mui/css/icons-extra.css"


import { Header } from "mint-ui"
Vue.component(Header.name, Header)

import app from "./App.vue"

var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(app)
})