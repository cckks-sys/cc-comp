import ccButton from "./button/index.vue";
import ccInput from "./input/index.vue"
import ccSwitch from "./switch/index.vue"
import ccTable from "./table/index.vue";
import ccCheckbox from "./checkbox/index.vue";
import ccTooltips from './tooltips/index.vue'
import ccTimeline from "./timeline/index.vue";
import ccLoader from './loader/index.vue'
import ccPagination from './pagination/index.vue';
import ccFullScreenLoad from './loader/fullScreenLoad.vue'
import ccCollapsible from './collapsible/index.vue'
export {notifyPlugin} from './notify/notify-data';
import type { App } from "vue";
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
    }
}
