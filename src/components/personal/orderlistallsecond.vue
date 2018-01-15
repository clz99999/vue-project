<template>
  <div class="orderListall_container_secondbox">
    <div class="orderListall_container_second_left">
      <div class="o_c_f_l_user">
        <p class="strong_p">收货人信息</p>
        <p><span>收货人：</span><span>张三</span></p>
        <p><span>收货地址：</span><span>{{orderallObj.a_province}}{{orderallObj.a_city}}{{orderallObj.a_region}}{{orderallObj.a_details}}</span></p>
        <p><span>联系电话：</span><span>{{orderallObj.a_phone}}</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'orderListallsecond',
    data: function () {
      return {

      }
    },
    props:['orderallObj']
  }
</script>
<style>

</style>
