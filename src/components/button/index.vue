<template>
    <button :class="['cc-button', type, size, , { round: round }, { isDisabled: isDisabled }]" @click="click">
        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script lang="ts" >
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
    emits: ["click"],
    props: {
        type: {
            type: Object as PropType<'danger' | 'success' | 'warning' | 'primary'>,
            default: "success"
        },
        size: {
            type: Object as PropType<'small' | 'medium ' | 'large'>,
            default: "medium"
        },
        isDisabled: {
            type: Boolean,
            default: false,
            required: false
        },
        round: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        click(event: Event) {
            this.$emit('click', event)
        }
    }
});
</script>
<style lang="scss" scoped>
// .cc-button{
$medium-min-width: 60px;
$medium-height: 32px;
$medium-round: calc($medium-height / 2);
$small-min-width: 40px;
$small-height: 23px;
$small-round: calc($small-height / 2);
$large-min-width: 70px;
$large-height: 40px;
$large-round: calc($large-height / 2);

// }
.cc-button {
    border-radius: 3px;
    height: $medium-height;
    min-width: $medium-min-width;
    background-color: #65d1d4;
    box-sizing: border-box;
    overflow: visible;
    border-width: 2px;
    font-size: 14px;
    border: none;
    color: #fff;
    transition: all .2s linear;
    font-size: 14px;
    padding: 0px 10px;
    cursor: pointer;

    &.round {
        border-radius: $medium-round;
    }

    &:hover {
        background-color: #53bcc0;
    }

    &.danger {
        background-color: #f1926e;

        &:hover {
            background-color: #ea8864
        }
    }

    &.success {
        background-color: #7ed6a5;

        &:hover {
            background-color: #69c894
        }
    }

    &.warning {
        background-color: #fccf71;

        &:hover {
            background-color: #e6bd65
        }
    }

    &.small {
        height: $small-height;
        min-width: $small-min-width;
        font-size: 12px;

        &.round {
            border-radius: $small-round;
        }
    }

    &.large {
        height: $large-height;
        min-width: $large-min-width;
        font-size: 14px;
        padding: 0px 12px;

        &.round {
            border-radius: $large-round;
        }
    }
}
</style>