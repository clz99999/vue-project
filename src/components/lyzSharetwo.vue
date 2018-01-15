<template>
  <div id="sharetwo">
    <div class="sharetwo_box">
    <div class="sharetwo_left">
      <p class="s_t_strong">14天</p>
      <p>舒适＆个性</p>
      <p class="s_t_strong">承诺</p>
    </div>
  <div class="sharetwo_right">
    <p>
      享受两个星期来尝试我们的框架。
    </p>
    <p>发回免费交换或返回。</p>
    <p class="sharetwo_learnmore" @click="learnmore">了解更多 <span class="fa fa-info-circle" id="s_t_learnmore"></span></p>
  </div>
      </div>


  </div>
</template>

<script>

  export default{
    name:"lyzSharetwo",
    methods:{
      learnmore:function(){
        this.$emit('learnmore')
      }
    }

  }

</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  #sharetwo{
    clear: both;
    text-align: center;
    position: relative;
    margin-top: 30px;
    border: 1px solid #e5e5e5;

  }
  .sharetwo_box{
    width:80%;
    margin:0 auto;
    padding:20px;
    overflow: hidden;
  }
  .sharetwo_left{
    float: left;
    font-size: 1em;
  }
  .sharetwo_right{
    float: left;
    margin-left:8%;
    text-align: left;
    font-size: 0.92em;
  }
#s_t_learnmore{
  color: #5caac4;
}
  .s_t_strong{
    font-weight: 900;
  }
  .sharetwo_learnmore{
    margin-top: 5px;
    cursor: pointer;
  }

</style>
