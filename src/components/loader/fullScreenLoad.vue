<template>
    <Teleport to="body">
        <div class="modal" v-if="view">
            <div class="loader">
                <loader></loader>
            </div>
        </div>
    </Teleport>
</template>
<script lang="ts" setup>
// import loader from './index.vue';
import { computed ,onMounted} from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
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
<style lang="scss">
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
}
</style>