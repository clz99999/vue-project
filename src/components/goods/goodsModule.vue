<template>
  <div id="goodsModule">
    <img class="img_logo" id="img_logo" :src="'cms/'+goods_item.b_logo" alt="品牌logo">
    <!--<a :href="'http://localhost:8080?id='+goods_item.g_id">-->
    <router-link :to="'/buy?goodsId='+goods_item.g_id">
      <img class="img_goods" id="img_goods" :src="'cms/'+goods_item.g_src" alt="商品图片">
    </router-link>
    <!--商品信息：名称、价格-->
    <div class="item_info_name_pri">
      <span class="g_name">{{goods_item.g_name}}</span>
      <span class="g_price">￥{{goods_item.g_saleprice}}</span>
    </div>
    <!--收藏、线上试戴-->
    <div class="isAction">
      <span class="fa fa-heart-o" >添加至收藏</span>
      <router-link to="/onlineTryon"><span class="online_try_btn">在线试戴</span></router-link>
    </div>

  </div>
</template>


<script type="es6">
  export default{
    name: 'goodsModule',
    data(){
      return {
      }
    },
    props:[
      'goods_item',
    ],
  }
</script>

<style type="text/css" lang="less">
  @import '../../assets/css/common.less';

  /*公共样式*/
  html, body {
    margin: 0;
    padding: 0;
    font-size: @mainfontsize;
    color: @fontblack;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
  a{
    cursor:pointer;
  }
  /*盒子*/
  #goodsModule{
    width: 100%;
    height: 470px;
    position: relative;
    margin-top:50px;
  }
  #goodsModule:hover .isAction{
    visibility: visible;
  }
  /*爱心字体图标*/
  .fa-heart-o{
    font-size: 1.1em;
    color:#54B5D4;
    margin-top:10px;
    line-height: .8em;
  }
  .fa-heart-o:hover{
    border-bottom:1px solid #54B5D4;
  }
  /*品牌logo*/
  .img_logo{
    position: absolute;
    top:0;
    left:0;
    width:100px;
  }
  /*商品图片*/
  .img_goods{
    width: 100%;
    margin-top:30px;
  }
  /*商品信息（名称、价格）盒子*/
  .item_info_name_pri{
    width: 100%;
    margin-top:10px;
  }
  /*商品名称*/
  .g_name{
    font-size:1.2em;
  }
  /*商品价格*/
  .g_price{
    float: right;
    font-weight: bolder;
  }
  /*添加收藏、在线试戴盒子*/
  .isAction{
    width: 100%;
    margin-top:10px;
    visibility: hidden;
  }
  .online_try_btn{
    float:right;
    border:1px solid #54B5D4;
    color:#54B5D4;
    vertical-align:bottom;
    line-height:1.7em;
  }
  .online_try_btn:hover{
    background-color:#54B5D4;
    color:#ffffff;
  }
</style>
