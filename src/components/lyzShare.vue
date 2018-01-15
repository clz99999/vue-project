<template>
  <div id="share">
    <h4 id="share-h4">喜欢它？分享它！</h4>
    <p id="share-p">
      <i id="share-i-sina" class="fa fa-weibo"></i>
      <i id="share-i-tencent"class="fa fa-qq"></i>
    <i id="share-i-wechat"class="fa fa-wechat"></i>
      <i id="share-i-facebook"class="fa fa-facebook"></i>
    </p>

  </div>
</template>

<script>
  export default{
    name:"lyzShare"
  }

</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  #share{
    clear: both;
    text-align: center;
    position: relative;
    margin-top: 30px;

  }
  #share-p{
margin-top: 18px;
  }
  #share-i-sina{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 22px;
    background-color: #d9251c;
    text-align: center;
    color: white;
    line-height:35px;
  }
  #share-i-wechat{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 20px;
    background-color: #00ca0d;
    text-align: center;
    color: white;
    line-height:35px;
    margin-left: 20px;
  }
  #share-i-tencent{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 20px;
    background-color: #5c9ad0;
    text-align: center;
    color: white;
    line-height:35px;
    margin-left: 20px;
  }
  #share-i-facebook{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 22px;
    background-color: #293a50;
    text-align: center;
    color: white;
    line-height:35px;
    margin-left: 20px;
  }

</style>
