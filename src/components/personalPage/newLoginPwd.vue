<template>
  <div id="newLoginPwd">
    <container>
      <newLoginPwd></newLoginPwd>
    </container>
  </div>
</template>

<script>
  import container from "../personal/personContainer.vue";
  import newLoginPwd from "../personal/loginPwdChange.vue";
  export default {
    name: "",
    data: function () {
      return {

      }
    },
    components: {
      newLoginPwd: newLoginPwd,
      container: container
    },
    methods: {

    }
  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";




</style>
