import { createApp } from 'vue'
import App from "./App.vue"
import {notifyPlugin} from './components/notify/notify-data'
import loadComponentPlugin from './loadComponentPlugin';
const app = createApp(App);
app.use(loadComponentPlugin);
app.use(notifyPlugin);
app.mount('#app');