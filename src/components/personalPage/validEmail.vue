<template>
  <div id="validEmail">
    <container>
      <validEmail></validEmail>
    </container>

  </div>
</template>

<script>
  import container from "../personal/personContainer.vue";
  import validEmail from "../personal/emailChange.vue";
  export default {
    name: "",
    data: function () {
      return {}
    },
    components: {
      validEmail: validEmail,
      container: container
    }
  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";


</style>
