<template>
  <div id="succeed">
    <container>
      <changeSucceed text1="支付密码修改成功"></changeSucceed>
    </container>

  </div>
</template>

<script >
  import container from "../personal/personContainer.vue";
  import changeSucceed from "../personal/succeed.vue";
  export default {
    name:"",
    data:function(){
      return {
      }
    },
    components:{
      changeSucceed:changeSucceed,
      container:container
    }

  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";




</style>
