import type { App } from "vue";
import ccNotifys from "./cc-notifys.vue";
var ccNotifyOption = {
    state:[] as Array<NotifyType>,
    addNotification(notification:NotifyType){
        notification.timestamp = new Date();
        this.state.push(notification);
        var v = notification.timestamp;
        setTimeout(()=>{
            this.removeNotification(v);
        },5000);
    },
    removeNotification(timestamp:Date){
        let index = this.state.findIndex(e=>e.timestamp === timestamp);
        this.state.splice(index,1);
    }
}
const ccNotifysPlugin = {
    install(app: App){
        app.config.globalProperties.$ccNotify = ccNotifyOption;
        app.component("ccNotifys",ccNotifys);
        
    }
}
export default ccNotifysPlugin;