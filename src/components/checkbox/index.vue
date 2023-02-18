<template>
    <label class="container" :class="{ disabled: disabled }">
        <input type="checkbox" :disabled="disabled" v-model="checked"/>
        <span class="check-mark"></span>
        <span class="checkname">{{ checkName }}</span>
    </label>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    emits:['update:modelValue'],
    props: {
        checkName: {
            type: String,
            default: "214"
        },
        modelValue: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed:{
        checked:{
            set(value:Boolean){
                this.$emit('update:modelValue',value);
            },
            get(){
                return this.modelValue;
            }
        }
    }
});

</script>
<style lang="scss" scoped>
.container {
    &.disabled {
        cursor: not-allowed !important;
    }

    font-size: 14px;
    text-align: left;
    position: relative;
    display:inline-block;
    cursor: pointer;

    .check-mark {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: #BDBDBD;
        border-radius: 50%;
        box-sizing: border-box;
        user-select: none;
        transform: translateY(5px);

    }

    .checkname {
        margin-left: 10px;
        color: #212121;
    }

    &:hover {
        .checkname {
            color: #263238;
        }

        .check-mark {
            background: #9E9E9E;
        }
    }

    input[type=checkbox] {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;

        &:checked {
            ~.check-mark {
                background: #fff;
                border: 6px solid #4DD0E1;
                transition: background .1s ease-in-out, border-color .1s linear;
            }
        }
    }

}

//     .back-circle{
//   width:50px;
//   height:50px;
//   background:#607D8B;
//   border-radius:50%;
//   box-sizing:border-box;
//    user-select:none;
//   &.checked{
//     background:#fff;
//    border:15px solid #4DD0E1;
//     transition: background .1s ease-in-out ,border-color .1s linear;
//   }

// }
</style>