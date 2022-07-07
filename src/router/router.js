import Screen0 from "@/pages/Screen0";
import Screen1 from "@/pages/Screen1";
import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: `/`,
        component: Screen0,
    },
    {
        path: `/teeth-map`,
        component: Screen1,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;