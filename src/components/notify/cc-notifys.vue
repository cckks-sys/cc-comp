<template>
    <div class="cc-notifys">
        <cc-notify-item v-for="(item, index) in notifys" v-bind="item" v-key="item.timestamp.getTime()"
            @close="close(item.timestamp)"></cc-notify-item>
    </div>
</template>

<script lang="ts" setup>
import ccNotifyItem from './cc-notify-item.vue';
import { ref, inject, reactive, onMounted } from 'vue';
import { notifyData, removeNotification } from './notify-data';
import { watch } from 'vue';
const notifys = notifyData;
function close(timestamp: Date) {
    removeNotification(timestamp);
}
</script>
<style lang="scss">
.cc-notifys {
     position: fixed;
     width: 100vw;
     max-width: 33%;
     padding: 0px 2px;
     z-index: 100;
     pointer-events: all;
     left: 50%;
     top:0px;
     transform: translateX(-50%);
     @media screen and (max-width:900px) {
         max-width: 50%;
     }

     @media screen and (max-width:600px) {
         max-width: 95%;

     }
 }
</style>