import VueRouter from "vue-router";
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"

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
                    component: Message
                },
            ]
        },
        {
            path: "/about",
            component: About,

        }
    ]
})