<!--商城标题-->
<template>
  <div id="box">
    <div class="text">
      <h1>{{popularScienceObj.theme}}</h1>
      <p>{{popularScienceObj.Des1}}</p>
      <p>{{popularScienceObj.Des2}}</p>
      <p>{{popularScienceObj.Des3}}</p>
    </div>
    <div class="img">
      <img :src="popularScienceObj.pImg" alt=""/>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'PopularScience',
    data:function(){
      return {}
    },
    props:[
      'popularScienceObj'
    ]
  }
</script>
<style scoped lang="less">
  @import "../../assets/css/common.less";
  #box{
    width: 100%;
    height: 450px;
    background-color: @bgwhite;
    position: relative;
    left: 0;
    /*top: 54px;*/
  }
  #box div{
    float: left;
  }
  #box .text{
    width: 566px;
    height: 380px;
    margin-left: 96px;
    margin-top: 50px;
    color: @fonttitle;
  }
  #box .text>h1{
    font-weight: 100;
  }
  #box .text>p:nth-of-type(1){
    margin-top: 30px;
  }
  #box .text>p{
    margin-top: 20px;
    font-size: 16px;
  }
  /*图片*/
  #box .img{
    width: 400px;
    height: 380px;
    margin-left: 160px;
    margin-top: 50px;
  }
  #box .img>img{
    width: 400px;
  }
</style>
