import { createApp } from 'vue'
import App from "./App.vue"
import {notifyPlugin} from './components/notify/notify-data'
import ccButton from "./components/button/index.vue";
import ccInput from "./components/input/index.vue"
import ccSwitch from "./components/switch/index.vue"
import ccTable from "./components/table/index.vue";
import ccCheckbox from "./components/checkbox/index.vue";
import ccTooltips from './components/tooltips/index.vue'
import ccTimeline from "./components/timeline/index.vue";
const app = createApp(App);
app.use(notifyPlugin);
app.component("ccButton",ccButton);
app.component("ccInput",ccInput);
app.component("ccSwitch",ccSwitch);
app.component("ccTable",ccTable);
app.component("ccCheckbox",ccCheckbox);
app.component("ccTooltips",ccTooltips);
app.component("ccTimeline",ccTimeline);
app.mount('#app');