<template>
  <div id="email">
    <span id="address">{{title}}</span>
    <span class="edit">编辑</span>
  </div>
</template>

<script>
    export default{
        name: '',
        data: function () {
            return {}
        },
        props:["title"]
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #email{
    margin: 20px 0;
    padding: 5px;
    overflow: hidden;
    cursor:pointer;
  }
  #address{
    font-size: 1.5 * @mainfontsize;
    float: left;
  }
  .edit{
    color: @mainblue;
    font-size: @mainfontsize;
    float: right;
  }
</style>
