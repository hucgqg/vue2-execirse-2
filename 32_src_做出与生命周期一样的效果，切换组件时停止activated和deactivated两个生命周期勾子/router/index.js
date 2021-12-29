import VueRouter from "vue-router";
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News
                },
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "d",
                            // path: "detail/:id/:title",
                            path: "detail",
                            component: Detail,

                            // 第一种写法，直接将值传给props进行接收
                            // props: { id: "id", title: "title" }

                            // 第二种写法,只接收params传过来的参数，无法正常接收query
                            // props: true

                            // 第三种写法，函数写法，这里可以接收params和query
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

        }
    ]
})