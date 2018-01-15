<!--联系我们-->
<template>
  <div>
    <div id="box">
      <h1>联系我们 & Contact With Us </h1>
      <h2><span>G</span>-g glasses by yong</h2>
      <div>
        <p>网址：www.prsr.com.cn</p>
        <p>电话：400-874-6988</p>
        <p>上海市长宁区中山西路1065号SOHO 中山广场 B 座1201室</p>
      </div>
    </div>
  </div>
</template>

<script>
  import commonNav from '../components/nav/commonNav.vue'
  import foot from '../components/foot/foot.vue'
  export default{
    name: 'contactUs',
    components:{
      'commonNav':commonNav,
      'foot':foot
    }
  }
</script>

<style  scoped lang="less">
  @import "../assets/css/common.less";
  #box{
    color: @fontblack;
    width: 100%;
    height: 600px;
    background: url("../assets/images/pq-heroslider-greynew-1.jpg") no-repeat 0 60%;
    background-size: cover;
    overflow: hidden;
  }
  #box>h1{
    margin-top: 180px;
    margin-left: 100px;
  }
  #box>h2{
    margin-top: 10px;
    margin-left: 100px;
  }
  #box>h2>span{
    color: @maingold;
  }
  #box>div{
    width: 500px;
    height: 160px;
    border: 1px solid darkgray;
    margin-top: 30px;
    margin-left: 80px;
  }
  #box>div:after{
    content: '';
    width: 486px;
    height: 176px;
    float: left;
    margin-top: -126px;
    margin-left: 6px;
    border: 1px solid darkgray;
  }
  #box>div>p{
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
