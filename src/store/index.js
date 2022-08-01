import {createStore} from "vuex";
import {moduleFirst} from "@/store/moduleFirst";

export default createStore({
    modules: {
        module1: moduleFirst,
    },
})