<!--页脚金色按钮：透明背景金色字金色边框  hover效果：金色背景白色字-->
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
    background-color: transparent;
    color: @maingold;
    font-size: @mainfontsize;
    outline: none;
    border: 1px solid @maingold;
    transition: all 0.3s;
  }
  button:hover{
    background-color: @maingold;
    color: @bgwhite;
    transition: all 0.3s;
  }
</style>
