<template>
  <div class="con">
    <!--<img src="../../assets/images/RodenStock.png" alt="">-->
    <img :src="'cms/'+mysrc.b_logo">
  </div>
</template>

<style scoped lang="less">
  @import '../../assets/css/common.less';
  .con{
    width: 150px;
    height: 110px;
    background-color: @bggrey ;
  }
.con img{
  width: 150px;
  height: 110px;
  cursor: pointer;
}
</style>
<script>
    export default {
        data() {
            return {}
        },
      props:{
          mysrc:{
            type:Object,
            required:true
          }
      }
    }
</script>
