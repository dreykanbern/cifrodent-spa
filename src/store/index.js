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
            state.module1.chooseTeeth = [...state.module1.chooseTeeth.filter(el => (el.toothNumber === newValue.toothNumber && el.stageNumber !== newValue.stageNumber) || el.toothNumber !== newValue.toothNumber), newValue]
        },
        MUT_TOOTH_STATE: (state, {newValue, toothId}) => { 
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.toothState = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.toothState = newValue
                }
            })
        },
        MUT_COPY_STATE: (state, {newValue, toothId}) => { 
            state.module1.teeth1.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.copyState = newValue
                }
            })
            state.module1.teeth2.forEach(el => {
                if (el.toothId === `tooth${toothId}`) {
                    el.copyState = newValue
                }
            })
        },
        MUT_RESET_STATE: (state) => {
            Object.assign(state, getDefaultState());
            function getDefaultState() {
                return {
                    //Начальное состояние приложения
                    module1: moduleFirst,
                };
            }
        },
        // Эта мутация будет изменять массив newChooseTeeth в state Vuex
        MUT_SET_NEW_CHOOSE_TEETH (state, newChooseTeeth) {
            state.module1.newChooseTeeth = newChooseTeeth;
        },

    },
    actions: {
        // Это действие будет вызываться в компоненте, чтобы обновить массив newChooseTeeth в state Vuex
        updateNewChooseTeeth({ commit }, newChooseTeeth) {
            commit('MUT_SET_NEW_CHOOSE_TEETH', newChooseTeeth);
        }
    },
    getters: {
        GET_STATE1: state => state.module1.teeth1,
        GET_STATE2: state => state.module1.teeth2,
        GET_NEW_CHOOSE_TEETH (state) {
            return state.module1.newChooseTeeth;
        }
    }
})