<template>
<div class="learnmore">
  <div class="learnmore_cont">
    <div class="learnmore_cont_box">
      <p>在EyeBuyDirect，我们保证我们的眼镜质量。如果您对眼镜不满意，请联系我们以获取退款或更换。</p>
      <p class="l_m_strong">14天适合和风格保证</p>
      <p>EBD有14天适合＆样式保证允许顾客做平等的交换或回归没有询问。</p>
      <p class="l_m_strong">365天的产品保证</p>
      <p>我们的365天产品保证意味着客户在12个月内有资格获得一次性更换。只有在材料和工艺方面存在明显缺陷的情况下，才会发行一次性替换品。</p>
      <p class="l_m_strong">条款和条件</p>
      <p>产品保修不包括事故，疏忽或不当保养造成的损坏。</p>
      </div>
    <div class="learnmore_close" @click="closeLearnmore">
      <span class="fa fa-times" id="learnmore_closespan"></span>
    </div>
  </div>
  </div>
  </template>


<script>
  export default{
    name:"lyzLearnmore",
    methods:{
      closeLearnmore:function(){
        this.$emit('closeLearnmore')
      }
    }
  }

</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  .learnmore{
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.8);
    position: fixed;
  }
  .learnmore_cont{
    width:630px;
    background-color: white;
    margin:15% auto;
    padding: 30px 45px 40px;
    font-size: 15px;
  }
  .l_m_strong{
font-weight: 900;
    margin-top: 10px;
    font-size: 17px;
  }
  .learnmore_close{
    position: absolute;
    top:27%;
    left:72%;
  }
  .learnmore_close:hover{
    cursor: pointer;
  }


  #learnmore_closespan{
    color:white;
    font-size: 25px;
  }
</style>
