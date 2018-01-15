<!--线下试戴说明-->
<template>
  <div>
    <div id="backGround">
      <div><img src="../assets/images/offlineTryon/1-1.jpg" alt=""/></div>
      <div><img src="../assets/images/offlineTryon/2-1.jpg" alt=""/></div>
      <div><img src="../assets/images/offlineTryon/3.jpg" alt=""/></div>
      <div><img src="../assets/images/offlineTryon/4-1.jpg" alt=""/></div>
      <div><img src="../assets/images/offlineTryon/5-1.jpg" alt=""/></div>
      <div><img src="../assets/images/offlineTryon/6-1.jpg" alt=""/></div>
      <div><img src="../assets/images/offlineTryon/7.jpg" alt=""/></div>
      <div><img src="../assets/images/offlineTryon/8-1.jpg" alt=""/></div>
      <offBtn class="offBtn" text="开始体验"></offBtn>
    </div>
  </div>

</template>

<script>
  import commonNav from '../components/nav/commonNav.vue'
  import foot from '../components/foot/foot.vue'
  import offBtn from '../components/button/blackMiddle.vue'
  export default{
    name:'OfflineTryon',
    components:{
      'commonNav':commonNav,
      'foot':foot,
      'offBtn':offBtn
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";
  #backGround{
    position: relative;
    background-color: rgb(238,238,238);
    overflow: hidden;
  }
  #backGround div{
    width: 100%;
    font-size: 0;
  }
   #backGround div img{
    width: 1000px;
    margin: 0 12%;
  }
  .offBtn{
    position: absolute;
    bottom: 80px;left:50%;
    margin-left: -100px;
    background-color: transparent;
  }

</style>
