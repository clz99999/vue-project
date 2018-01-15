<template>
  <div id="succeed">
    <container>
      <changeSucceed text1="已发送验证邮件至:" :text2="emailInfo" text3="（请立即完成验证，邮箱验证不通过则修改邮箱失败）" text4="验证邮件24小时内有效，请尽快登录您的邮箱点击验证链接完成验证。"></changeSucceed>
      <!--<h1>{{this.$route.params.emailInfo}}</h1>-->
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
    methods:{

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
