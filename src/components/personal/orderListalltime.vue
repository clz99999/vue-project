<template>
  <div id="orderListalltime_cont">
  <span class="strong">订单号：</span><span>{{orderallObj.o_num}}</span><span class="strong">&nbsp;时间：</span><span>{{orderallObj.create_time}}</span><span>总价：</span><span></span>
  </div>
</template>
<script>
  export default{
    name: 'orderListalltime',
    data: function () {
      return {
        total:''
      }
    },
    props:['orderallObj']
  }
</script>
<style>
#orderListalltime_cont{
  float:left;
  text-align: left;
  font-size: 20px;
}
</style>
