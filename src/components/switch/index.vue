<template>
    <input type="checkbox" v-model="checked" @change ="change" class="cc-input-switch" id="cc-switch"/>
    <label class="cc-switch" for="cc-switch">
        <div class="circle">
        </div>
    </label>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data(){
            return{
                checked:this.modelValue
            }
        },
        props:{
            modelValue:{
                type:Boolean,
                default:false
            }
        },
        emits:['change','update:modelValue'],
        methods:{
            change(event:any){
                this.$emit('update:modelValue',event.target.checked);
            }
        }
    })
</script>
<style lang="scss">
$switch-width: 60px;
$switch-height: 30px;
$switch-radius: calc($switch-height / 2);
$circle-size: 20px;

.cc-switch {
    background: #fff;
    width: $switch-width;
    height: $switch-height;
    border-radius: $switch-radius;
    border: 2px solid #ccc;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    cursor:pointer;
    .circle {
        height: $circle-size;
        width: $circle-size;
        // background-color: #8BC34A;
        background-color: #ccc;
        box-sizing: border-box;
        position: absolute;
        border-radius: calc($circle-size /2);
        top: calc(($switch-height - $circle-size) /4);
        left: 5px;
        // border:1px #EEEEEE solid;
        box-shadow: 0px 0px 7px #9CCC65;
        transition: all .3s ease-in;
    }
}

.cc-input-switch {
    display: none;
}

.cc-input-switch:checked {
    &+.cc-switch {
        .circle {
            background-color: #8BC34A;
            left: $switch-width - $circle-size - 10px;
        }
    }
}
</style>