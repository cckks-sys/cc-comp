<template>
    <div class="tooltip">
        <span class="original-content">
            <slot></slot>
        </span>
        <span class="tooltiptext" v-if="message" :class="[tooltiptextStyle]">{{ message }}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
    data() {
        return {
            // tooltiptextStyle:{
            // }
        }
    },
    computed: {
        tooltiptextStyle() {
            return 'tooltiptext-' + this.direction;
        }
    },
    props: {
        message: String,
        direction: {
            type: Object as PropType<'top' | 'bottom' | 'left' | 'right'>,
            default: 'top'
        },
    }
});

</script>
<style lang="scss">
.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;

    // .original-content{
    //     color:#29B6F6;
    //     &:hover{
    //         color:#03A9F4;
    //     }
    // }
    .tooltiptext {
        opacity: 0;
        transition: all .3s ease-in-out;
        display: inline-block;
        min-width: 120px;
        background: #555;
        color: #fff;
        text-align: center;
        padding: 5px 0px;
        border-radius: 4px;
        position: absolute;
        top: 0px;
        left: 50%;
        margin-left: -60px;
        transform: translateY(-100%);

        &:after {
            content: "";
            position: absolute;
            top: 100%;
            border-width: 4px;
            border-color: #555 transparent transparent transparent;
            border-style: solid;
            left: 50%;
            transform: translateX(-2px);
        }

        &.tooltiptext-bottom {
            left: 50%;
            margin-left: -60px;
            bottom: 0px;
            transform: translateY(calc(100% + 5px));
            top: auto;
            &:after {
                content: "";
                position: absolute;
                bottom: 100%;
                border-width: 4px;
                border-color: transparent transparent #555 transparent;
                border-style: solid;
                left: 50%;
                top: auto;
                transform: translateX(-2px);
            }
        }

        &.tooltiptext-left {
            top: 50%;
            bottom: auto;
            left: 0px;
            right: auto;
            margin: auto;
            transform: translate(calc(-100% - 5px), -50%);
            &:after{
                content: "";
                position: absolute;
                top: 50%;
                left: 100%;
                transform: translateY(-50%);
                right: auto;
                bottom: auto;
                border-width: 4px;
                border-color: transparent transparent transparent #555;
            }
        }
        &.tooltiptext-right {
            top: 50%;
            bottom: auto;
            left: auto;
            right: 0px;
            margin: auto;
            transform: translate(calc(100% + 5px), -50%);
            &:after{
                content: "";
                position: absolute;
                top: 50%;
                left: auto;
                right: 100%;
                transform: translateY(-50%);
                bottom: auto;
                border-width: 4px;
                border-color: transparent #555 transparent transparent ;
            }
        }
    }

    &:hover {
        .tooltiptext {
            opacity: 1;
        }
    }
}
</style>