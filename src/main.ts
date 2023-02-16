import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import nav from './components/nav/nav.vue';
import App from "./App.vue"
import ccNotify from "./components/notify/index"
import ccButton from "./components/button/index.vue";
import ccInput from "./components/input/index.vue"
import ccSwitch from "./components/switch/index.vue"
import ccTable from "./components/table/index.vue";
const app = createApp(App);
app.use(ccNotify);
app.component("ccButton",ccButton);
app.component("ccInput",ccInput);
app.component("ccSwitch",ccSwitch);
app.component("ccTable",ccTable);
app.mount('#app');