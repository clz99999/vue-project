<!--品牌故事组件-->
<template>
  <div id="prsr">
    <!--底层图片-->
    <img id="prsr_bg" :src="'/cms'+brandObj.s_img" alt="底层图片">
    <!--蒙层-->
    <div id="prsr_cover">
      <img id="prsr_logo" :src="'/cms'+brandObj.b_logo" alt="品牌logo">
      <h2 id="prsr_title">{{brandObj.b_story}}</h2>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'brandList',
    data:function(){
      return {

      }
    },
    props:[
      'brandObj'
    ]
  }
</script>


<style type="text/css" lang="less">
@import "../../assets/css/common.less";

/*公共样式*/
html,body{
  margin:0;
  padding:0;
  font-size:@mainfontsize;
  color:@fontblack;
  -moz-user-select:none; /*火狐*/
  -webkit-user-select:none; /*webkit浏览器*/
  -ms-user-select:none; /*IE10*/
  -khtml-user-select:none; /*早期浏览器*/
  user-select:none;
}
  /*盒子*/
  #prsr{
    width:340px;
    height: 260px;
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  /*盒子鼠标悬浮*/
  #prsr:hover #prsr_bg{
    transform: scale(1.1);
  }
  /*底层图片*/
  #prsr_bg{
    width: 100%;
    transition: all .8s;
    -moz-transition:all .8s; /* Firefox 4 */
    -webkit-transition:all .8s; /* Safari and Chrome */
    -o-transition:all .8s; /* Opera */
  }
  /*盒子蒙层*/
  #prsr_cover{
    width: 100%;
    height: 100%;
    background-color:rgba(255,255,255,.8);
    position: absolute;
    top: 0;  left:0;
    cursor: pointer;
    transition: all .8s;
    -moz-transition:all .8s; /* Firefox 4 */
    -webkit-transition:all .8s; /* Safari and Chrome */
    -o-transition:all .8s; /* Opera */

  }
  /*盒子蒙层鼠标悬浮*/
  #prsr_cover:hover{
    background-color:rgba(255,255,255,.6);
  }
  /*品牌标志*/
  #prsr_logo{
    width: 100px;
    height: 60px;
    margin-top:70px;
  }
  /*品牌中文名称*/
  #prsr_title{
    margin-top: 0;
    font-size:2em;
    color: #7e7e7e;
  }
</style>
