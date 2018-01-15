<template>
  <div class="left-container-inner">

<div id="dimension">
  <div class="frame-image-content">
  <div class="frame-image">
    <div class="frame-img-box">
      <img class="img-first" src="../assets/pl5143_0.1200x600.1488190753.jpg" >
    </div>
    <span class="tryOn">TRY ON</span>
  </div>
</div>
  <div class="frame-image-content">
    <div class="frame-image">
      <div class="frame-img-box">
        <img class="img-first" src="../assets/pl5143_2.1200x600.1488190754.jpg" >
      </div>

    </div>
  </div>
  <div class="frame-image-content">
    <div class="frame-image">
      <div class="frame-img-box">
        <img class="img-first" src="../assets/pl5143_1.1200x600.1488190753.jpg" >
      </div>

    </div>
  </div>
  <div class="frame-image-content">
    <div class="frame-image">
      <div class="frame-img-box">
        <img class="img-first" src="../assets/pl5143_3.1200x600.1488190754.jpg" >
      </div>

    </div>
  </div>
  <div class="">
    <img src="../assets/pl5143_m1.400x600.1488198739.jpg" class="img-second">
  </div>
  <div >
    <img src="../assets/pl5143_m2.400x600.1488198739.jpg" class="img-third">
  </div>
  </div>
</div>


</template>

<script>
  export default{
    name:"lyzImage"
  }


</script>

<style lang="less">

  .left-container-inner {

  }
  #dimension{

  }
  .frame-image-content{
    padding: 30px 20px;
    position: relative;
    background-color: #f4f4f4;
  }
  .frame-image-content:first-child~.frame-image-content{
    margin-top:12px;
  }
  .frame-img-box{

    margin:0;
    padding: 0;
  }
.img-first{
  width:700px;
  margin:0 auto;
}
  .tryOn{
    position: absolute;
    top:10px;
    left:20px;
    background-color: white;
    border:1px solid black;
    padding: 8px 40px;
  }
  .tryOn:hover{
    color: white;
    background-color: black;
  }
  .img-second{
    float: left;
    margin-top: 12px;
    width:365px;
  }
  .img-third{
    float: left;
    width:365px;
    margin-top: 12px;
    margin-left: 10px;
  }
</style>
