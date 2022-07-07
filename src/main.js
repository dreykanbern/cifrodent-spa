import './styles/index.scss';
import router from "@/router/router.js";
import { createApp } from 'vue';
import App from './App';
import components from "@/components/UI";
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css"



const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(contextmenu)
    .use(router)
    .mount('#app');
