<template>
    <div id="app">
      <container>
        <safeHomePart v-for="(item,index) in dataInfo" :dataInfo="item" :key="index"></safeHomePart>
      </container>
    </div>
</template>

<script>
  import container from "../personal/personContainer.vue";
  import safeHomePart from "../personal/safeHomePart.vue";
    export  default {
        name: "security",
        data: function () {
return{
  dataInfo:[
    {
    imgSrc:"../../src/assets/icon/per01.png",
    name:"登录密码",
    describe:"为保证你的购物安全，建议您定期更改密码以保护账号安全",
    operation:"修改",
      path:"Personal/newLoginPwd"
  },
    {
      imgSrc:"../../src/assets/icon/per02.png",
      name:"支付密码",
      describe:"在选择支付时，均需通过支付密码进行身份验证，为您的资产账户安全加把锁",
      operation:"修改",
      path:"Personal/newPayPwd"
    },
    {
      imgSrc:"../../src/assets/icon/per03.png",
      name:"绑定手机",
      describe:"验证后，可用于快速找回登录密码及支付密码，接受账户余额变动提醒",
      operation:"立即绑定",
      path:"Personal/phoneBind"
    },
    {
      imgSrc:"../../src/assets/icon/per04.png",
      name:"验证邮箱",
      describe:"您的邮箱还没验证，为了保障账户安全，请验证",
      operation:"立即验证",
      path:"Personal/validEmail"
    }

  ]
}
        },
      components:{
        container:container,
        safeHomePart:safeHomePart
      }
    }


</script>

<style scoped lang="less">


</style>
