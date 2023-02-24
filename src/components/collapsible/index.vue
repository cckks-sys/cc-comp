<template>
    <div class="collapsible-frame">
        <button :class="['collapsible', { active: active }]" @click="clickCollapsible">{{ title }}</button>
        <div :class="['content', { active: active }]">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
defineProps({
    title: {
        type: String,
        default: ""
    }
})
const active = ref(false);

const emits = defineEmits(['click']);
function clickCollapsible() {
    active.value = !active.value;
    emits('click', active.value);
}
</script>
<style lang="scss">
.collapsible-frame {
    position: relative;

    .collapsible {
        border: none;
        outline: none;
        background: #fff;
        width: 100%;
        height: 50px;
        background: #90A4AE;
        text-align: left;
        padding-left: 10px;
        border-radius: 2px;
        font-size: 16px;
        cursor: pointer;
        transition: all .15s ease-in-out;

        &:hover,
        &.active {
            background: #78909C;
        }

        &:after {
            content: "";
            display: block;
            width: 14px;
            height: 14px;
            border-bottom: 4px #fff solid;
            border-right: 4px #fff solid;
            position: absolute;
            right: 30px;
            top: 17px;
            color: #ECEFF1;
            font-size: 3.2em;
            transform: rotate(45deg);
            border-radius: 2px;
            transform-origin: center;
            transition: all .2s ease-in-out;
        }

        &.active:after {
            content: "";
            transform: rotate(-45deg);
            top: 21px;
        }
    }

    .content {
        padding: 0px 18px;
        background: #ECEFF1;
        overflow: hidden;
        transition: all .2s ease-in-out;
        font-size: 16px;
        box-sizing: border-box;
        height: 0px;
        overflow: hidden;
        opacity: 0;

        &.active {
            height: auto;
            padding: 20px 18px;
            opacity: 1;
        }
    }
}
</style>