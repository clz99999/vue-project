<template>
  <div class="com-cont-box" >
    <p class="dyna-user"> <span>{{reviewObj.u_name}}</span><span>于{{reviewObj.r_time}}</span>
    <div class="pingfen">
    <el-rate
      v-model="reviewObj.r_acc"
      disabled
      show-score
      text-color="#ff9900"
      score-template=" ">
    </el-rate>

    </div>
    </p>
    <p class="dyna-color"><span>颜色：{{reviewObj.color}}</span></p>

    <p class="dyna-container"><span>{{reviewObj.r_content}}</span></p>
  </div>
</template>
<script>
  export default{
    name: 'lyzPinglun',
    data: function () {
      return {

      }
    },
    props:['reviewObj']
  }
</script>
<style>
  .com-cont-box{
    position: relative;
    padding:4%;
    border-bottom: 1px dotted #dfdfdf;
  }
  .dyna-user{
    color: #adadad;
  }
  .pingfen{
    position: absolute;
    top:20px;
    right:20px;
  }
  .dyna-color{
    margin-top: 10px;
    color: #adadad;
  }
  .dyna-container{
    margin-top: 10px;
  }
</style>
