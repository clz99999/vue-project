<!--线上试戴蓝色按钮：透明背景蓝色字蓝色边框  hover效果：蓝色背景白色字-->
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
    width: 70px;
    height: 22px;
    background-color: transparent;
    color: @mainblue;
    font-size: @mainfontsize;
    outline: none;
    border: 1px solid @mainblue;
    transition: all 0.3s;
  }
  button:hover{
    background-color: @mainblue;
    color: @bgwhite;
    transition: all 0.3s;
  }
</style>
