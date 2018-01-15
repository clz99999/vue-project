<!--潮流街拍组件-->
<template>
  <div id="tideInfo">
    <a href="javascript:">
      <img id="img_cover" :src="'/cms'+fashionObj.f_img" alt="封面图">
      <h3>{{fashionObj.f_title}}</h3>
    </a>
    <p id="release_date">{{fashionObj.f_time}}</p>
    <section id="content_txt">{{fashionObj.f_artical}}</section>
  </div>
</template>
<script>
  export default{
    name:'tideInfo',
    props:['fashionObj']
  }
</script>
<style type="text/css" lang="less" scoped>
  @import '../../assets/css/common.less';

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
  a{
    text-decoration: none;
    color:rgba(0,0,0,.8);
  }
  /*盒子*/
  #tideInfo{
    width: 340px;
    border-bottom:1px solid @borderGray;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  /*封面图*/
  #tideInfo #img_cover{
    width: 100%;
    transition: all .5s;
    -moz-transition:all .5s; /* Firefox 4 */
    -webkit-transition:all .5s; /* Safari and Chrome */
    -o-transition:all .5s; /* Opera */
  }
  #tideInfo #img_cover:hover{
    transform:scale(1.05);
  }
  /*标题*/
  #tideInfo h3{
    margin-top: 14px;
  }
  #tideInfo h3:hover{
    color:@maingold;
  }
  /*发布日期*/
  #release_date{
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: darkgray;
  }
  /*多行文本省略显示*/
  #content_txt{
    overflow : hidden;
    font-size: 13px;
    color: #5a5a5a;
    margin-top: 30px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;/*第几行显示省略号*/
    -webkit-box-orient: vertical;
  }
</style>
