import {createStore} from "vuex";
import {moduleFirst} from "@/store/moduleFirst";

export default createStore({
    modules: {
        module1: moduleFirst,
    },
    mutations: {
        MUT_PROPERTY: (state, {newValue, toothId}) => state.module1[`tooth${toothId}`].stage1.indentOptions = newValue,
        MUT_COLOR: (state, {newValue, toothId}) => state.module1[`tooth${toothId}`].stage1.colorVita = newValue,
        MUT_FILLED_TOOTH: (state, {newValue, toothId}) => this.state.module1[`tooth${toothId}`].stage1.isFilledTooth = newValue,
    }
})