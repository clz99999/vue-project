<template>
  <div class="orderListall_container_firstbox">
    <div class="orderListall_container_first_left">
      <div class="o_c_f_l_orderandtime">
        <div class="o_c_f_l_img">
          <img src="../../assets/images/lyzorder/u63.jpg" >
        </div>
      </div>
    </div>
    <div class="orderListall_container_first_right">
      <p><span>品名：</span><span>{{orderallObj.g_name}}</span></p>
      <p><span>颜色：</span><span>{{orderallObj.color}}</span></p>
      <p><span>单价：</span><span>RMB {{orderallObj.g_saleprice}}</span></p>
      <p> <span>数量：</span><span>{{orderallObj.go_count}}</span></p>
      <p> <span>小计：</span><span>{{goodsTotal}}</span></p>

    </div>
  </div>
</template>
<script>
  export default{
    name: 'orderListallfirst',
    data: function () {
      return {
        totalPrice:0
      }
    },
    props:['orderallObj'],
    computed:{
      goodsTotal: function () {
          this.totalPrice = this.orderallObj.g_saleprice * this.orderallObj.go_count;
        return this.totalPrice
      }
    }
  }
</script>
<style>

</style>
