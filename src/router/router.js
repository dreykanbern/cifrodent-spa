import Screen0 from "@/pages/Screen0";
import Screen1 from "@/pages/Screen1";
import {createRouter} from "vue-router";


const routes = [
    {
        path: `/purchase-order-spa`,
        component: Screen0
    },
    {
        path: `/teeth-map`,
        component: Screen1
    },
]

const router = createRouter({
    routes,
})

export default router;