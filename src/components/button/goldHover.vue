<!--个人中心金色按钮：金色背景白色字  hover效果：金色变浅-->
<template>
  <div>
    <button>{{text}}</button>
  </div>
</template>

<script>
  export default{
    name: '',
    data: function () {
      return {}
    },
    props:['text']
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  button{
    width: 105px;
    height: 30px;
    background-color: @maingold;
    color: @bgwhite;
    font-size: @mainfontsize;
    outline: none;
    border: 0;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover{
    background-color: @goldhover;
    color: @bgwhite;
    transition: all 0.3s;
  }
</style>
