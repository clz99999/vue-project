<template>
  <div id="goodsModule">
    <img class="img_logo" id="img_logo" :src="'cms/'+goods_info.b_logo" alt="品牌logo">
    <img class="img_goods" id="img_goods" :src="'cms/'+goods_info.g_src" alt="商品图片">
    <!--商品信息：名称、价格-->
    <div class="item_info_name_pri">
      <span class="g_name">{{goods_info.color}}</span>
      <span class="g_price">$ {{goods_info.g_saleprice}}</span>
      <span class="g_style">{{goods_info.style}}</span>
    </div>
    <!--商品颜色选择-->
    <div class="item_info_color">
      <ul>

      </ul>
    </div>
    <!--收藏、线上试戴-->
    <div class="isAction">
      <a :plain="true" @click="getGoodId(goods_info)"><span class="fa fa-heart-o" >添加至收藏</span></a>
      <a href="#"><span class="online_try_btn">在线试戴</span></a>
    </div>

  </div>
</template>


<script>
  import '../../assets/js/jquery.js'
  export default{
    name: 'goodsModule',
    data(){
      return {

      }
    },
    props:{
      goods_info:{
        type:Object,
        required:true
      }
    },
    methods: {
      getGoodId:function (goods_info) {
        var params = goods_info.g_id;
        this.$emit('parmarChange',params)
        this.$message('商品已添加至您的收藏夹');
      },
      border_switch: function (e) {
        e.target.parentNode.style.borderWidth = 1 + 'px';

        //将其他兄弟节点边框设为0
        let thisLi = e.target.parentNode;//当前li节点
        let p = thisLi.parentNode.children;
        for (let i = 0; i < p.length; i++) {
          if (p[i] !== thisLi)
            p[i].style.borderWidth = 0 + 'px';
        }

        //设置对应的颜色图片地址
        let this_id = parseInt(e.target.parentNode.getAttribute('data-id'));//点击的当前图片id
        for (let i = 0; i < this.goods_info.length; i++) {
          if (this_id === this.goods_info[i].id) {
            document.getElementById("img_goods").setAttribute('src',this.goods_info[i].goods_src);
            let g_color = this.goods_info[this_id].goods_name;
            let g_pri = this.goods_info[this_id].goods_pri;
            let g_sty = this.goods_info[this_id].goods_sty;
            $(".g_name").html(g_color);
            $(".g_price").html(g_pri);
            $(".g_style").html(g_sty);
          }
        }
      }
    },
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
    width: 270px;
    height: 220px;
    /*border:1px solid red;*/
    position: relative;
    margin-top:50px;
  }
  #goodsModule:hover .isAction{
    visibility: visible;
  }
  /*爱心字体图标*/
  .fa-heart-o{
    font-size: 0.9em;
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
    width: 60px;
    height: 20px;
    top:0;
    left:0;
  }
  /*商品图片*/
  .img_goods{
    width: 170px;
    height: 120px;
    margin-top:30px;
  }
  /*商品信息（名称、价格）盒子*/
  .item_info_name_pri{
    width: 100%;
    margin-top:0px;
    /*border: 1px solid yellow;*/
    text-align: left;
  }
  /*商品名称*/
  .g_name{
    font-size:1em;
    margin-left: 5px;
  }
  /*商品价格*/
  .g_price{
    float: right;
    margin-right: 8px;
    /*font-weight: bolder;*/
    color: @maingold;
  }
  .g_style{
    position: absolute;
    text-align: center;
    top:180px;
    left: 235px;
  }
  /*商品颜色选择*/
  .item_info_color{
    margin-top: 10px;
  }
  /*商品颜色项*/
  .item_info_color ul {
    margin: 0;
    padding: 0;
  }
  /*颜色选中提示框*/
  .item_info_color ul li{
    list-style-type: none;
    float: left;
    border:0px solid @mainblack;
    width: 14px;
    height: 14px;
    border-radius:50%;
    margin-right:5px;
    position:relative;
    cursor:pointer;
  }
  /*加载后默认选中一个示例颜色*/
  .item_info_color ul li:nth-of-type(1){
    border-width:1px;
  }
  /*示例颜色*/
  .colorExam{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    width: 10px;
    height: 10px;
    border-radius:50%;
  }
  /*清除浮动*/
  .item_info_color ul::after{
      content: '';
      display: block;
      height: 0;
      width: 0;
      clear: both;
  }
  /*添加收藏、在线试戴盒子*/
  .isAction{
    width: 100%;
    margin-top:25px;
    visibility: hidden;
    text-align: left;
  }
  .isAction a{
    text-decoration: none;
  }
  .online_try_btn{
    float:right;
    font-size: 0.9em;
    border:1px solid #54B5D4;
    color:#54B5D4;
    vertical-align:bottom;
    margin-top: 3px;
    padding: 0px 2px;
  }
  .online_try_btn:hover{
    background-color:#54B5D4;
    color:#ffffff;
  }
</style>
