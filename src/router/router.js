import { createRouter,createWebHistory } from "vue-router"
import InputView from "@/views/InputView.vue"
// viewsにあるviewをimportしてください

const routes = [
    {
        path:"/",
        name:"InputView",
        component:InputView,
    },
    // こちらに他2つのviewのpath,name,componentを設定してください
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router