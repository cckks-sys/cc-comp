<template>
    <div class="cc-notifys">
        <cc-notify-item v-for="(item, index) in notifys" v-bind="item" v-key="item.timestamp.getTime()"
            @close="close(item.timestamp)"></cc-notify-item>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccNotifyItem from './cc-notify-item.vue';
export default defineComponent({
    components: {
        ccNotifyItem
    },
    data() {
        return {
            // notifys: [] as Array<NotifyType>
                notifys:this.$ccNotify.state
        }
    },
    methods: {
        getNotify(notify: NotifyType) {
            this.notifys.push(notify);
        },
        close(timestamp: Date) {
            let index =  this.notifys.findIndex(e=>e.timestamp === timestamp);
            this.notifys.splice(index,1);
            // this.$ccNotify.removeNotification(timestamp);
        }
    },
    mounted() {
    },
    unmounted() {

    }
})


</script>
<style>
.cc-alerts {
    position: fixed;
    width: 100%;
}
</style>