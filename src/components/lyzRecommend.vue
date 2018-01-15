<template>
  <div>
  <div id="reco">
    <h1 id="reco-h1">为你推荐</h1>

    <div class="waikuang">
      <div class="waikuang-box">
      <div class="kuang1">
        <img src="../assets/pl5090_3.360x180.1488195140.jpg">
        <br/>
        <span class="zuo">概念</span>
        <span class="you">$ 52</span>
      </div>


      <div class="kuang2">
        <img src="../assets/pm0092_3.360x180.1488196013.jpg">
        <br/>
        <span class="zuo">光环</span>
        <span class="you">$ 52</span>
      </div>



      <div class="kuang3">
        <img src="../assets/pl5419_3.360x180.1488195308.jpg">
        <br/>
        <span class="zuo">极光</span>
        <span class="you">$ 52</span>
      </div>
        </div>
    </div>
  </div>
  <div id="rela">
    <h1 id="rela-h1">相关商品</h1>

    <div class="waikuang">
      <div class="waikuang-box">
      <div class="kuang1">
        <img src="../assets/pl5090_3.360x180.1488195140.jpg">
        <br/>
        <span class="zuo">概念</span>
        <span class="you">$ 52</span>
      </div>


      <div class="kuang2">
        <img src="../assets/pm0092_3.360x180.1488196013.jpg">
        <br/>
        <span class="zuo">光环</span>
        <span class="you">$ 52</span>
      </div>



      <div class="kuang3">
        <img src="../assets/pl5419_3.360x180.1488195308.jpg">
        <br/>
        <span class="zuo">极光</span>
        <span class="you">$ 52</span>
      </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default{
    name:"lyzRecommend"
  }

</script>

<style>
  *{
    transition: all .25s ease-out;
    /*outline:1px solid red;*/
    margin:0;
    padding:0;}
  #reco{
    float: left;
    margin:60px auto;
    width:100%;
    text-align: center;
     }
  #rela{
    float: left;
    margin:0 auto;
    width:100%;
    text-align: center;
  }
  #reco-h1{

  }
  .zuo{
    position: absolute;
    top:180px;
    left:50px;

  }
  .you{
    position: absolute;
    top:180px;
    right: 50px;
  }
  .kuang1{
    width:360px;
    float: left;
    position: relative;
  }
  .kuang2{
    width:360px;
    float: left;
    margin-left:5%;
    position: relative;
  }
  .kuang3{
    width:360px;
    float: left;
    margin-left:5%;
    position: relative;
  }
  .waikuang{

    text-align: center;
    position: relative;
  }
.waikuang-box{
  width:80%;
  height: 250px;
  margin:20px auto;
  overflow: hidden;
  /*float: left;*/
}
</style>
