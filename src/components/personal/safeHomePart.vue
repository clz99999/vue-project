<template>
  <div id="safe">
    <div class="part1">
      <img :src="dataInfo.imgSrc" alt=""/>
    </div>
    <div class="part2">
      <span class="font1">{{dataInfo.name}}</span>
      <div><span class="font2">{{dataInfo.describe}}</span></div>
    </div>
    <div class="part3">
        <router-link :to="'/'+dataInfo.path">
          <mybtn2 :text="dataInfo.operation" class="btn" v-if="state==1"></mybtn2>
          <mybtn1 :text="dataInfo.operation" class="btn" v-else></mybtn1>
        </router-link>
    </div>
  </div>
</template>


<script>
  import mybtn1 from ".././button/blackHover.vue";
  import mybtn2 from ".././button/goldHover.vue";
  export default {
    name: "safepart",
    data: function () {
      return {
        state:1
      }
    },
    components:{
      mybtn1:mybtn1,
      mybtn2:mybtn2
    },
    props:{
      dataInfo:{
        type:Object,
        required:true
      }
    }

  }


</script>

<style scoped lang="less">

  @import "../../assets/css/common.less";
  #safe {
    overflow: hidden;
    clear: both;
    width: 100%;
    /*border: 1px solid red;*/
    margin-top: 50px;
  }
  #safe > div {
    float: left;
    /*border: 1px solid blue;*/
  }
  .part1{
    width: 10%;
  }
  .part1 img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
  }
  .part2{
    width: 60%;
    /*border: 1px solid red;*/
  }
  .font1{
    display: block;
    width: 100%;
    color: @grayfont;
    text-align: left;
    padding-bottom: 12px;
  }
  .font2{
    display: block;
    text-align: left;
    color: @grayfont;
  }

.part3{
  width: 29%;
  /*border: 1px solid blue;*/
overflow: hidden;
}
  .btn{
    float: right;
    margin-top: 12px; ;
  }

</style>
