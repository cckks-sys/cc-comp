<template>
    <Teleport to="body">
        <div class="modal" v-if="view">
            <div class="loader">
                <p v-if="loadingType == 'message'" class="loader-message">{{ message }}</p>
                <loader v-else></loader>
            </div>
        </div>
    </Teleport>
</template>
<script lang="ts" setup>
import loader from './index.vue';
import { computed, onMounted } from 'vue';
import type { PropType } from 'vue';
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    loadingType:{
        type:Object as PropType<"message"|"circleLoad">,
        default:'circleLoad'
    },
    message: {
        type:String,
        default: "Loading..."
    }
})
const emits = defineEmits(['update:modelValue'])
const view = computed({
    get() {
        return props.modelValue
    },
    set(v: Boolean) {
        emits('update:modelValue', v);
    }

})
onMounted(()=>{
})
</script>
<style lang="scss" scoped>
.modal {
    background: #424242;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity: 0.8;
    z-index: 10;
    .loader {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .loader-message {
        color: #fff;
        animation: fade-in .7s ease-in-out infinite alternate;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>