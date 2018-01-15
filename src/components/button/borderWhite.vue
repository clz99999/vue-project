<!--首页白色按钮：透明背景白色字白色边框  hover效果：灰色背景白色字-->
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
    width: 176px;
    height: 40px;
    background-color: transparent;
    color: @bgwhite;
    font-size: @mainfontsize;
    outline: none;
    border: 1px solid @bgwhite;
    transition: all 0.3s;
  }
  button:hover{
    background-color: #515151;
    color: @bgwhite;
    transition: all 0.3s;
  }
</style>
