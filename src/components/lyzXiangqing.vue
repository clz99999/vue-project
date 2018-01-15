<template>
  <div class="det-cont-box" >
  <h4>
    框架细节
  </h4>
  <div class="det-cont-cont">
    <p>镜架宽：{{detailsObj.g_width}}毫米</p>
    <p>镜架外宽：{{detailsObj.g_outerWidth}}毫米</p>
    <p>镜腿长：{{detailsObj.g_length}}毫米</p>
    <p>镜架内宽：{{detailsObj.g_innerWidth}}毫米</p>
    <p>重量：{{detailsObj.g_weight}}克</p>
    <p>材料：{{detailsObj.material}}</p>
  </div>
</div>
</template>
<script>
  export default{
    name: 'lyzXiangqing',
    data: function () {
      return {

      }
    },
    props:['detailsObj']
  }
</script>
<style>
  .det-cont-box{
    padding: 6% 5% 5% 5%;
  }
  .det-cont-cont{
    margin-top: 10px;
  }
  .det-cont-cont p{
    margin-top: 7px;
  }
</style>
