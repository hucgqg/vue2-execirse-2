import VueRouter from "vue-router";
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

const router = new VueRouter({
    routes: [
        {
            name: "zhuye",
            path: "/home",
            component: Home,
            meta: { "title": "主页" },
            children: [
                {
                    name: "xinwen",
                    path: "news",
                    component: News,
                    meta: { "isAuth": true, "title": "新闻" },
                    // 局部路由守卫
                    beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem("school") === "s") {
                                next()
                            } else {
                                alert("无权访问")
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: "xiaoxi",
                    path: "message",
                    component: Message,
                    meta: { "isAuth": true, "title": "消息" },
                    children: [
                        {
                            name: "d",
                            path: "detail",
                            component: Detail,
                            meta: { "title": "消息" },
                            props(route) {// 这里的参数传过来的是$route
                                return {
                                    id: route.query.id,
                                    title: route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        },
        {
            path: "/about",
            component: About,
            meta: { "title": "关于" },
        }
    ]
})
// 前置路由守卫,切换路由前执行
// router.beforeEach((to, from, next) => {
//     console.log("beforeEach", to, from, next)
//     if (to.meta.isAuth) {
//         if (localStorage.getItem("school") === "s") {
//             next()
//         } else {
//             alert("无权访问")
//         }
//     } else {
//         next()
//     }
// })
// 后置路由守卫，切换路由后执行
router.afterEach((to, from, next) => {
    console.log("afterEach", to, from, next)
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "四部曲"
    }
})
export default router