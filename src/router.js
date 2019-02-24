import VueRouter from 'vue-router'




import Home from "./componters/tabbar/Home.vue"
import vip from "./componters/tabbar/Vip.vue"
import shopcar from "./componters/tabbar/Shopcar.vue"
import search from "./componters/tabbar/Search.vue"
import news from "./componters/news/NewsList.vue"
import NewsInfo from "./componters/news/Newsinfo.vue"


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path:"/", redirect:"/home"},
    { path: "/home", component: Home},
    { path: "/vip", component: vip},
    { path: "/shopcart", component: shopcar},
    { path: "/search", component: search},
    { path: "/home/newslist", component: news},
    { path: "/home/newslist/newsinfo/:id", component: NewsInfo}
  ],
  linkActiveClass: "mui-active"
})

// 把路由对象暴露出去
export default router