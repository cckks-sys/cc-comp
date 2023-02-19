import { reactive} from "vue";
import type { App } from "vue";
import ccNotifys from './cc-notifys.vue';
export const notifyData = reactive([] as Array<NotifyType>);
export function addNotification (notification :NotifyTypeInput){
    notification.timestamp = new Date();
    notifyData.push(<NotifyType>notification);
}
export function removeNotification(timestamp :Date){
    var index = notifyData.findIndex((e)=>e.timestamp == timestamp);
    notifyData.splice(index,1);
    
}
export const notifyPlugin = {
    install(app:App){
        app.component("ccNotifys",ccNotifys);
        app.config.globalProperties.$addNotification = addNotification;
    }
}