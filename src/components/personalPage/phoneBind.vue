<template>
  <div id="phoneBind">
    <container>
      <phoneBind path="Personal/phoneBindSucceed"></phoneBind>
    </container>

  </div>
</template>

<script>
  import container from "../personal/personContainer.vue";
  import phoneBind from "../personal/phoneBind.vue";
  export default {
    name:"",
    data:function(){
return{

}
    },
    components:{
      phoneBind:phoneBind,
      container:container
    }
  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";




</style>
