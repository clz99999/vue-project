<template>
  <div id="succeed">
    <container>
      <changeSucceed text1="手机号码绑定成功" :text2="emailInfo"></changeSucceed>
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
        emailInfo:this.$route.params.emailInfo
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
