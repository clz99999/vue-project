<template>
  <div class="personContainer-box">
    <!--<div class="personContainer-top"><span>个人中心&nbsp;></span>&nbsp;<span>{{}}</span></div>-->
    <div class="personContainer-content" id="personContainer-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'personContainer',
    data:function(){
      return{

      }
    },
    created: function () {

    },
    methods: {

    }
  }
</script>

<style lang="less">
  @import "../../assets/css/common.less";

  .personContainer-box {
    width: 100%;
    font-size: @mainfontsize;
    color: white;
  }


  .personContainer-content {
    background-color: @clzPersonContent;
    padding: 20px;
    overflow: hidden;
    color: black;
    text-align: center;
  }
</style>
