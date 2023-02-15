import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import nav from './components/nav/nav.vue';
import App from "./App.vue"
import ccNotify from "./components/notify/index"
import ccButton from "./components/button/index.vue";
const app = createApp(App);
app.use(ccNotify);
app.component("ccButton",ccButton);
app.mount('#app')
