<template>
    <div class="out-circle">
        <p class="content">{{ content }}</p>
        <svg fill="#fff" :style="svg">
            <circle r="50" cx="54" cy="54" class="bg" :style="bg" />
            <circle r="50" cx="54" cy="54" class="circle" :style="circle" />
        </svg>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
const props = defineProps({
    r: {
        type: Number,
        default: 50
    },
    percent: {
        type: Number,
        default: 50
    },
    content: {
        type: String,
        default: "43132"
    },
    strokeWitdh:{
        type:Number,
        default:8
    }
})
const r = ref(props.r); // 半径
const strokeWitdh = ref(props.strokeWitdh); // 边框宽度
const allRoll = computed(() => 2 * 3.14 * r.value); // 总周长
const percent = ref(props.percent); // 百分比
const precentRoll = computed(() => percent.value / 100 * allRoll.value); // 百分比所占用的长度
// 下面样式改变大小和尺寸
const svg = reactive({
    width: (strokeWitdh.value + 2 * r.value) + 'px',
    height: (strokeWitdh.value + 2 * r.value) + 'px'
})
const bg = reactive({
    r: r.value,
    cx: strokeWitdh.value / 2 + r.value + 'px',
    cy: strokeWitdh.value / 2 + r.value + 'px',
    strokeWitdh: strokeWitdh.value
});
const circle = reactive({
    r: r.value,
    cx: strokeWitdh.value / 2 + r.value + 'px',
    cy: strokeWitdh.value / 2 + r.value + 'px',
    transformOrigin: strokeWitdh.value / 2 + r.value + 'px',
    strokeWitdh: strokeWitdh.value,
    strokeDasharray: allRoll.value + 'px',
    strokeDashoffset: allRoll.value - precentRoll.value + 'px'
});
</script>
<style lang="scss" scoped>
$r: 50px;
$stroke-width: 8px;
$stroke-girth: 2 * 3.14 * $r;
$circle-origin: calc($stroke-width / 2) + $r;

.out-circle {
    position: relative;
    display: inline-block;

    .content {
        color:#90A4AE;
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0px 0px;
    }

    svg {
        width: $stroke-width + 2*$r;
        height: $stroke-width + 2*$r;

        .circle {
            r: $r;
            cx: $circle-origin;
            cy: $circle-origin;
            transform: rotate(-90deg);
            transform-origin: $circle-origin;
            stroke: #63e37a;
            stroke-width: $stroke-width;
            stroke-linecap: round;
            stroke-dasharray: $stroke-girth $stroke-girth;
            stroke-dashoffset: 800;
            fill: none;
        }

        .bg {
            r: $r;
            cx: $circle-origin;
            cy: $circle-origin;
            stroke: #ccc;
            stroke-width: $stroke-width;
            stroke-linecap: round;
        }
    }
}
</style>