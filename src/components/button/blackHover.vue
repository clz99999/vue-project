<!--个人中心黑色按钮：黑色背景白色字  hover效果：黑色变浅-->
<template>
  <div>
    <button >{{text}}</button>
  </div>
</template>

<script>
  export default{
    name: '',
    data: function () {
      return {}
    },
//    methods: function(){
//    this.$emit('LpwdChange')
//  },

    props:['text']

  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  button{
    width: 105px;
    height: 30px;
    background-color: @mainblack;
    color: @bgwhite;
    font-size: @mainfontsize;
    outline: none;
    border: 0;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover{
    background-color: rgba(51,51,51,0.80);
    color: @bgwhite;
    transition: all 0.3s;
  }
</style>
