<template>
    <div class="cc-alert show" :class="type" ref="ccAlert">
        <button type="button" class="close" ref="ccClose" @click="close">
            <i class="remove"></i>
        </button>
        <p class="title">{{ title }}</p>
        <span class="message">{{ message }}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
    props: {
        title: {
            type: String,
            required: false
        },
        message: {
            type: String,
            required: false
        },
        timestamp:{
            type:Date,
            default:()=>new Date()
        },
        type:{
            type:Object as PropType<'info' | 'error' | 'success' | 'warning'>,
            default:"info"
        }
    },
    emits:['close'],
    methods:{
        close(){
            this.$emit('close',this.timestamp);
        }
    },
    mounted(){
    }
})
</script>
<style scoped lang="scss">
.cc-alert{
    background-color:#66c4de;
    border:none;
    box-sizing:border-box;
    border-radius:3px;
    color:#fff;
    padding-top:.9rem;
    padding-bottom:.9rem;
    position:relative;
    width:100%;
    font-weight:400;
    line-height:1.5;
    text-align:center;
    vertical-align:middle;
    padding-right:28px;
    padding-left:10px;
    margin:10px auto;
    opacity:0;
    z-index:1000;
    transition:all .3s ease-in-out;
    animation: topfadeIn .5s ease-in-out;
    .close{
      position:absolute;
      right:0px;
      top:0px;
      border:none;
      text-transform:none;
      overflow:visible;
      color:#fff;
      line-height:0;
      outline:none;
      width:25px;
      height:25px;
      padding:3px;
      top:50%;
      right:10px;
      transform:translateY(-50%);
      background-color:transparent;
      cursor:pointer;
      .remove{
        display:inline-block;
        color:#fff;
        &:before{
          font-size:20px;
          content: "×";
          font-weight:600;
          display:inline-block;
        }
      }
    }
    p.title{
      margin:0;
      font-size:16px;
      text-align:left;
      padding-left:20px;
    }
  }
  .show{
    opacity:1;
    display:block;
  }
  
  @keyframes topfadeIn{
    0%{
      opacity:0;
      transform:translateY(-50px);
    }
    100%{
      opacity:1;
      transform:translateY(0px);
    }
  }
  .cc-alert.success {
    background:#7ed6a5;
  }
  .cc-alert.success {
    background:#7ed6a5;
  }
  .cc-alert.warning{
    background:#fccf71;
  }
  .cc-alert.error{
    background:#f1926e;
  }
</style>