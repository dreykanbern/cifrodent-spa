import './styles/index.scss';
import store from "@/store";
import router from "@/router/router.js";
import { createApp } from 'vue';
import VueNextSelect from 'vue-next-select'
import App from './App';
import PrimeVue from 'primevue/config';
import components from "@/components/UI";
import {Tabs, Tab} from 'vue3-tabs-component';
import contextmenu from "v-contextmenu";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import vueBaseInput from 'vue-base-input';
import VueSidePanel from 'vue3-side-panel';
import MySelect from "@/components/UI/MySelect/MySelect";
import 'vue3-side-panel/dist/vue3-side-panel.css'
import 'vue3-easy-data-table/dist/style.css';
import "v-contextmenu/dist/themes/default.css";
import 'vue-base-input/src/assets/vue-base-input.css';



const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(MySelect)
    .use(VueNextSelect)
    .use(VueSidePanel)
    .use(vueBaseInput)
    .use(Tabs)
    .use(Tab)
    .use(contextmenu)
    .use(PrimeVue)
    .use(store)
    .use(router)
    .mount('#app');

app.component('EasyDataTable', Vue3EasyDataTable)