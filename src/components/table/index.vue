<template>
    <div class="card">
  <div class="card-header" v-if="title">
    <p class="card-title">{{ title }}</p>
  </div>
  <div class="card-body" :class="{hasTitle:hasTitle}">
    <table class="table">
      <thead class="text-primary">
        <tr>
          <th v-for="name in columnsName">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="column in tableData">
          <!-- <td v-for="item in column">{{item }}</td> -->
          <td v-for="item in columnsName" >{{ column[item] }}</td>

          
        </tr>
        <!-- <tr>
          <td>ARC</td>
          <td>Niger</td>
          <td>Oud-Turnhout</td>
        </tr>
        <tr>
          <td>ARC</td>
          <td>Niger</td>
          <td>Oud-Turnhout</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data(){
            return {
                // columns:[]
                hasTitle:false,
            }
        },
        props:{
            title:{
                type:String
            },
            tableData:Array<Object>,
            columnsName:Array<String>
        },
        computed:{
            // columns(){
            //     return this.tableData?.map(e=>e);
            // }
            hasTitle():Boolean{
                if(this.title){
                    return this.title?.length >0;
                }else{
                    return false;
                }
                
            }
        }
    });
</script>
<style lang="scss">
.card{
  display:inline-block;
   background:#F5F5F5;
}
.card-header{
  background:#43a047;
  box-shadow: 0px 3px 4px #66bb6a;
  margin-left:10px;
  margin-right:10px;
  border-radius:3px;
  p{
    margin:0px 0px;
    padding:16px 20px;
    
  }
}
.card-body{
  &.hasTitle{
    padding-top:30px;
    margin-top:-30px;
  }
  border-radius:5px;
  box-shadow:0px 0px,3px 0px rgba(0,0,0,0.2);
}
.table{
  // min-width:500px;
  font-weight:300;
  font-size:14px;
  line-height:22px;
  box-sizing:22px;
  overflow-x:auto;
  // background:#F5F5F5;
  border-spacing: 0;
  border-collapse: collapse;
  
  
  thead tr th{
    min-width:140px;
    font-size:12px;
    font-weight:700;
    line-height:16px;
    text-align:left;
    color:#4caf50;
    padding:12px 8px;
  }
  tbody tr{
    border-style:solid;
    border-width:1px 0px 0px ;
    border-color:#757575;
    td{
      // text-align:left;
      font-size:14px;
      font-weight:300;
      line-height:18px;
      
      padding:12px 8px;
    }
  }
}
</style>