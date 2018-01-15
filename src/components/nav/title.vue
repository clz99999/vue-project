<template>
  <div>{{text}}</div>
</template>

<script>
  export default {
    name: 'title',
    data:function(){
      return {

      }
    },
    props:['text']
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  div{
    width: 166px;
    height: 30px;
    line-height: 30px;
    letter-spacing: 4px;
    background-color:@bggrey ;
  }
</style>
