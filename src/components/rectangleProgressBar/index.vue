<template>
    <div class="outline">
        <span class="percentage">{{ percentage }}%</span>
        <div class="line" :style="line"></div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const props = defineProps({
    percentage: {
        type: Number,
        default: 0,
    },
});
const line = reactive({
    width: props.percentage + "%",
});
</script>
<style lang="scss" scoped>
.outline {
    background: #ccc;
    width: 100%;
    height: 20px;
    border-radius: 2px;
    position: relative;
    overflow: hidden;

    .percentage {
        position: absolute;
        font-size: 6px;
        text-indent: 2em;
        line-height: 20px;
        color: #757575;
    }

    .line {
        height: 100%;
        width: 0%;
        background: #63e37a;
        overflow: hidden;
    }
}
</style>
