import Screen0 from "@/pages/Screen0";
import Screen1 from "@/pages/Screen1";
import Screen2 from "@/pages/Screen2";
import Screen3 from "@/pages/Screen3";
import {createRouter, createWebHashHistory} from "vue-router";
import SuccessPage from "@/pages/SuccessPage";


const routes = [
    {
        path: `/`,
        name: 'MainPage',
        component: Screen0,
    },
    {
        path:`/success-page`,
        name: 'SuccessPage',
        component: SuccessPage,
    },
    {
        path: `/teeth-map`,
        name: 'TeethMap',
        component: Screen1,
    },
    {
        path: `/teeth-map/tooth/:id/`,
        component: Screen2,
    },

    {
        path: `/teeth-map/final-data/`,
        component: Screen3,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;