<template>
  <div>
    <div id="checkout">
      <div id="btnCheck">
        <div id="blackMiddle">
          <blackMiddle text="线上支付"></blackMiddle>
        </div>
        <div id="whiteMiddle">
          <whiteMiddle text="线下预约支付"></whiteMiddle>
        </div>
      </div>
      <div id="zyonline">
        <zyonline ></zyonline>
      </div>


      <!--<div id="zyoffline">
      <zyoffline></zyoffline>
      </div>-->
    </div>

  </div>
</template>

<script>
  import blackMiddle from '../components/button/blackMiddle'
  import whiteMiddle from '../components/button/whiteMiddle'
  import zyonline from '../components/checkout/online'
  import zyoffline from '../components/checkout/offline.vue'
    export default{
        name: '',
        data: function () {
            return {
            }
        },
      components:{
        blackMiddle:blackMiddle,
        whiteMiddle:whiteMiddle,
        zyonline:zyonline,
        zyoffline:zyoffline
      }
    }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";
  #checkout{
    width: @pagewidth;
    margin: 0 auto;
    padding: 30px 0;
  }
  #btnCheck{
    width: 450px;
    overflow: hidden;
    margin: 50px auto;
  }
  #whiteMiddle{
    float: right;
  }
  #blackMiddle{
    float: left;
  }
</style>
