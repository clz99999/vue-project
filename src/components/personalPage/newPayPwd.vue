<template>
  <div id="newPayPwd">
    <container>
      <newPayPwd></newPayPwd>
    </container>

  </div>
</template>

<script>
  import container from "../personal/personContainer.vue";
  import newPayPwd from "../personal/payPwdChange.vue";
  export default {
    name:"",
    data:function(){
return{
}
    },
    components:{
      newPayPwd:newPayPwd,
      container:container
    },
    methods:{

    }
  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";




</style>
