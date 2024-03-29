import ccButton from "./components/button/index.vue";
import ccInput from "./components/input/index.vue"
import ccSwitch from "./components/switch/index.vue"
import ccTable from "./components/table/index.vue";
import ccCheckbox from "./components/checkbox/index.vue";
import ccTooltips from './components/tooltips/index.vue'
import ccTimeline from "./components/timeline/index.vue";
import ccLoader from './components/loader/index.vue'
import type { App } from "vue";
import ccPagination from './components/pagination/index.vue';
import ccFullScreenLoad from './components/loader/fullScreenLoad.vue';
import ccCollapsible from './components/collapsible/index.vue'
import circularProgressBar from './components/circularProgressBar/index.vue';
import rectangleProgressBar from './components/rectangleProgressBar/index.vue';
export default {
    install(app:App){
        app.component("ccButton",ccButton);
        app.component("ccInput",ccInput);
        app.component("ccSwitch",ccSwitch);
        app.component("ccTable",ccTable);
        app.component("ccCheckbox",ccCheckbox);
        app.component("ccTooltips",ccTooltips);
        app.component("ccTimeline",ccTimeline);
        app.component("ccLoader",ccLoader);
        app.component("ccPagination",ccPagination);
        app.component('ccFullScreenLoad',ccFullScreenLoad);
        app.component('ccCollapsible',ccCollapsible);
        app.component('circularProgressBar',circularProgressBar);
        app.component('rectangleProgressBar',rectangleProgressBar);
    }
}