import VueRouter from 'vue-router'




import Home from "./componters/tabbar/Home.vue"
import vip from "./componters/tabbar/Vip.vue"
import shopcar from "./componters/tabbar/Shopcar.vue"
import search from "./componters/tabbar/Search.vue"


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/home", component: Home},
    { path: "/vip", component: vip},
    { path: "/shopcart", component: shopcar},
    { path: "/search", component: search},

  ],
  linkActiveClass: "mui-active"
})

// 把路由对象暴露出去
export default router