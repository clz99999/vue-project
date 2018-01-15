<template>
  <div id="succeed">
    <span class="font1">{{text1}}</span>
    <a href=""><span class="font2">{{text2}}</span></a>
    <div class="text3"><span class="font3">{{text3}}</span></div>
    <div class="text4"><span class="font4">{{text4}}</span></div>
    <router-link to="/Personal/Security"><mybtn text="返回" class="btn"></mybtn></router-link>
  </div>
</template>


<script>
  import mybtn from ".././button/blackHover.vue";
  export default {
    name: "succeed",
    data: function () {
      return {}
    },
    components: {
      mybtn: mybtn
    },
    props:['text1','text2','text3','text4']
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
.text3,.text4{
   margin-top: 15px;
 }
.font1{
  color: @succeedfont;
  font-size: 25px;
}
.font2{
  color: #53a6c1;
}
.font3{
  color: @warningred;
}
.font4{
  color: @grayfont;
}

  .btn{
    margin-top: 70px!important;
  }
  a{
    text-decoration: none;
  }
  a>span:hover{
    color: blue;
  }
</style>
