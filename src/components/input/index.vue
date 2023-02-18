<template>
    <div class="cc-input">
        <input type="input" :placeholder="placeholder" v-model="value" @change="change" @blur="blur"
            @focus="focus" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    emits: ['change', "blur", "focus","update:modelValue"],
    props: {
        placeholder: {
            type: String,
            default: "please input"
        },
        modelValue: {
            type: String
        }
    },
    computed:{
        value:{
           
            set(value:String){
                this.$emit('update:modelValue',value);
            },
             get(){
                return this.modelValue
            }
        }
    },
    methods: {
        change(event: any) {
            this.$emit('change', event);
        },
        blur(event: any) {
            this.$emit('blur', event);
        },
        focus(event: any) {
            this.$emit('focus', event);
        },
    }
})
</script>
<style lang="scss">
.cc-input {
    display: inline-block;

    input[type='input'] {
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.7);
        width: 250px;
        height: 40px;
        border-radius: 2px;
        border: none;
        outline: none;
        font-size: 13px;
        font-weight: 600;
        padding: 0 0 0 15px;
        color: #4D8DCB;

        &:focus {
            box-shadow: 0px 0px 2px 1px #4D8DCB;
        }
    }

}
</style>