import {createStore} from "vuex";
import {moduleFirst} from "@/store/moduleFirst";

export default createStore({
    modules: {
        module1: moduleFirst,
    },
    mutations: {
        MUT_PROPERTY1: (state, {newValue, toothId}) => {
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage1.indentOptions = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage1.indentOptions = newValue
                }
            })
        },
        MUT_PROPERTY2: (state, {newValue, toothId}) => {
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage2.indentOptions = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage2.indentOptions = newValue
                }
            })
        },
        MUT_COLOR1: (state, {newValue, toothId}) => {
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage1.colorVita = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage1.colorVita = newValue
                }
            })
        },
        MUT_COLOR2: (state, {newValue, toothId}) => {
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage2.colorVita = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage2.colorVita = newValue
                }
            })
        },
        MUT_FILLED_TOOTH1: (state, {newValue, toothId}) => {
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage1.isFilledTooth = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage1.isFilledTooth = newValue
                }
            })
        },
        MUT_FILLED_TOOTH2: (state, {newValue, toothId}) => {
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage2.isFilledTooth = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.stage2.isFilledTooth = newValue
                }
            })
        },
        MUT_CHOOSED_TEETH: (state, newValue) => {
            if (state.module1.chooseTeeth.length > 0) {
                console.log(state.module1.chooseTeeth)
                state.module1.chooseTeeth.forEach((el, key) => {
                    console.log(newValue.toothNumber === el.toothNumber)
                        if (newValue.toothNumber === el.toothNumber) {
                            state.module1.chooseTeeth.splice(key, 1)
                            state.module1.chooseTeeth.push(newValue)
                        }
                        else {
                            state.module1.chooseTeeth.push(newValue)
                        }
                    }
                )
            }
            else {
                state.module1.chooseTeeth.push(newValue)
            }



        }

    },
    getters: {
        GET_STATE1: state => state.module1.teeth1,
        GET_STATE2: state => state.module1.teeth2
    }
})