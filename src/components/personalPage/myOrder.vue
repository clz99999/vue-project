<template>
  <div id="order">
    <container>
      <orderPart v-for="(item,index) in orderlist" :dataInfo="item" :key="index"></orderPart>
    </container>

  </div>
</template>

<script>
  import container from "../personal/personContainer.vue";
  import orderPart from "../personal/myOrder.vue";
  export default {
    name: "order",
    data: function () {
      return {
        orderlist:[]
      }
    },
    components: {
      container: container,
      orderPart: orderPart
    },
    created:function(){//创建完成
        this.axiosPost();//调用方法/
    },
    methods:{
      axiosPost:function(){
        var that=this;
        this.$axios.post(this.$api.user.myOrder).then(function (response) {
            that.orderlist=response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }//post

      }


  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";


</style>
