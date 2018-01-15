<template>
    <div>
      <div class="personContainer-top"><span>个人中心&nbsp;</span>&nbsp;<span>{{$route.query.pname}}</span></div>
    </div>
</template>

<script>
    export default{
        name: ''
    }
</script>

<style lang="less">
  @import "../../assets/css/common.less";
  .personContainer-top {
    width: 100%;
    height: 40px;
    background-color: #353535;
    margin-bottom: 20px;
    line-height: 40px;
    text-align: left;
    color: white;
  }

  .personContainer-top span:first-child {
    margin-left: 20px;
  }
</style>
