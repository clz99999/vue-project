<template>
  <div class="orderListall_container_thirdbox">
    <div class="orderListall_container_third_left">
      <div class="o_c_f_l_user">
        <p class="strong_p">支付及配送方式</p>
        <p><span>支付方式：</span><span>在线支付</span></p>
        <p><span>配送方式：</span><span>顺丰</span></p>
        <p><span>快递单号：</span><span>{{orderallObj.o_logistNum}}</span></p>
      </div>
    </div>
    <div class="orderListall_container_third_right">
      <div class="o_c_f_l_b_box">
        <span class="o_c_f_l_button">查看物流</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'orderListallthird',
    data: function () {
      return {

      }
    },
    props:['orderallObj']
  }
</script>
