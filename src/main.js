import './styles/index.scss';
import { createApp } from 'vue';
import App from './App';
import components from "@/components/UI";
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app');
