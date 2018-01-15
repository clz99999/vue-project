<template>
  <div class="orderListall_head">

    <div class="orderListall_head__box">

      <div class="orderListall_head__step" id="orderListall_head__step1">
        <div class="orderListall_head_circular">1</div>
        <span class="orderListall_head_span">订单提交</span>
        <div class="orderListall_head_line"></div>
      </div>
      <div class="orderListall_head__step" id="orderListall_head__step2">
        <div class="orderListall_head_circular">2</div>
        <span class="orderListall_head_span">付款成功</span>
        <div class="orderListall_head_line"></div>
      </div>
      <div class="orderListall_head__step" id="orderListall_head__step3">
        <div class="orderListall_head_circular">3</div>
        <span class="orderListall_head_span">商品出库</span>
        <div class="orderListall_head_line"></div>
      </div>
      <div class="orderListall_head__step" id="orderListall_head__step4">
        <div class="orderListall_head_circular">4</div>
        <span class="orderListall_head_span">等待收货</span>
        <div class="orderListall_head_line"></div>
      </div>
      <div class="orderListall_head__step" id="orderListall_head__step5">
        <div class="orderListall_head_circular">5</div>
        <span class="orderListall_head_span">完成</span>
      </div>
    </div>
  </div>
</template>
<script type="javascript">

  export default {
    name:"orderListall_head"

  };

</script>
<style>
  .orderListall_head{
    width:100%;
  }
  .orderListall_head__box{
    height:120px;
    margin:0 auto;
    width:1162px;
  }
  .orderListall_head__step{
    text-align: center;
    float: left;
    position: relative;
  }
  .orderListall_head__step:first-child~.orderListall_head__step{
    margin-left: 200px;
  }

  .orderListall_head_circular{
    width: 40px;;
    height:40px;
    border-radius: 50%;
    border:1px solid black;
    text-align: center;
    line-height:40px ;
    font-weight: 500;
    font-size:20px;
    margin:0 auto;
  }
  .orderListall_head_line{
    width:140px;
    position: absolute;
    top:35%;
    left:120%;
    outline:1px solid black;
  }
  .orderListall_head_span{
    margin-top: 10px;
    display: block;
  }
</style>
