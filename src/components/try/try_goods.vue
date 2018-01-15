<template>
 <div class="goods">
   <img :src="'cms/'+mygoods.g_src">

   <!--<el-checkbox class="mycheck" v-model="checked" :value="mygoods.g_id"></el-checkbox>-->
   <input type="checkbox" class="mycheck" >
 </div>
</template>

<style>
  .goods{
    width: 200px;
    height: 170px;
    position: relative;
  }
  .goods img{
    position: absolute;
    margin: auto;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 170px;
    height: 140px;
  }
  .mycheck{
    position: absolute;
    top:140px;
    right: 20px;
    z-index: 5;
    color: @maingold;
  }
</style>
<script>
  var arr =[];
    export default {
        data() {
            return {

            }
        },
      props:{
        mygoods:{
          type:Object,
          required:true
        }
      },
      methods:{

      }
    }
</script>
