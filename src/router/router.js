import { createRouter,createWebHistory } from "vue-router"
import InputView from "@/views/InputView.vue"
import ResultView from "@/views/ResultView.vue"
import OtherView from "@/views/OtherView.vue"

const routes = [
    {
        path:"/",
        name:"InputView",
        component:InputView,
    },
    {
        path:"/result",
        name:"ResultView",
        component:ResultView,
    },
    {
        path:"/other",
        name:"OtherView",
        component:OtherView,
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router