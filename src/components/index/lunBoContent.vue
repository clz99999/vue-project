<template>
  <div id="lunbo" :style="{ backgroundImage: 'url(' + obj.url + ')' } ">
    <div id="lunboText" style="
    left: 10%;
    text-align: left;" v-if="obj.position=='left'">
      <p class="lunP">{{obj.lunboText1}}</p>
      <p class="lunH1">{{obj.lunboText2}}</p>
      <p class="lunP">{{obj.lunboText3}}</p>
      <div id="btnLunbo" class="">
        <whiteMiddle :text="obj.btnText"></whiteMiddle>
      </div>
      </div>
    <div id="lunboText" v-else>
        <p class="lunP animated slideInRight">{{obj.lunboText1}}</p>
        <p class="lunH1 animated slideInLeft">{{obj.lunboText2}}</p>
        <p class="lunP animated slideInRight">{{obj.lunboText3}}</p>
      <div id="btnLunbo" class="">
        <whiteMiddle :text="obj.btnText"></whiteMiddle>
      </div>
      </div>

    </div>
  </div>
</template>

<script type="es6">
  import whiteMiddle from '../button/whiteMiddle.vue'
  export default {

    data() {
    return {

      }
    },
    components:{
      whiteMiddle
    },
    props:["obj"]
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #lunbo{
    /*background: url("../../assets/images/lunBo/2.png") no-repeat;*/
    background-size:100% 100%;
    /*background-position: 90%;*/
    width: 100%;
    height: 636px;
    position: relative;
    overflow: hidden;
  }
  #lunboText{
    position: absolute;
    top: 20%;
    right: 10%;
    text-align: right;
  }
  #lunboText>p{
    font-weight: bold;
    margin: 30px 0;
  }
  .lunP{
    color: @fonttitle;
    font-size: 1.5rem;
    /*transform: translate(150px);*/
  }
  .lunH1{
    color: @fonttitle;
    font-size: 2.5rem;
    /*transform: translate(-150px);*/
  }

</style>
