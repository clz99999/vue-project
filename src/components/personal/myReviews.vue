<template>
  <div class="myReviews-content">
    <p class="myReviews-rTime">评论时间：{{myReviewsData.r_time}}<span class="myReviews-del" :sid=myReviewsData.g_id @click="DelMyReviews()">X</span></p>
    <div class="myReviews-leftContent">
      <div class="myReviews-box">
        <div>评论：{{myReviewsData.r_logis}}次</div>
        <div>评星：{{myReviewsData.r_acc}}星</div>
        <div>点赞：{{myReviewsData.r_points}}次</div>
      </div>
      <div class="myReviews-rContent">{{myReviewsData.r_content}}</div>
      <div class="myReviews-button" @click="addMyReviews()">
        <myReviewsAdditional text="追加评论"></myReviewsAdditional>
      </div>
    </div>
    <div class="myReviews-rightContent">
      <div class="myReviews-divImg">
        <img :src="myReviewsData.g_src">
      </div>
      <div>
        {{myReviewsData.g_name}}{{myReviewsData.material}}{{myReviewsData.style}}{{myReviewsData.color}}{{myReviewsData.frame}}
      </div>
    </div>
  </div>
</template>

<script>
  import myReviewsAdditional from "../button/goldHover"
  export default{
    name: 'myReviews',
    components: {//2.注册组件
      'myReviewsAdditional': myReviewsAdditional
    },
    props: {
      myReviewsData:{
        type:Object,
        required:true
      }
    },
    methods:{
      DelMyReviews:function(){
        this.$emit('delPageMyReviews');
      },
      addMyReviews:function(){
        this.$emit('addPageMyReviews');
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/common.less";

  .myReviews-content {
    font-size: @mainfontsize;
    width: 97%;
    overflow: hidden;
    padding: 0 15px 15px 15px;
    box-shadow: @clzBorder;
    background-color: white;
    color: @fontblack;
    margin-top: 20px;
    text-align: center;
  }

  .myReviews-content:hover {
    box-shadow: 7px 7px 7px rgba(205, 206, 204, 0.7);
    transition: all 0.3s;
  }

  .myReviews-leftContent {
    float: left;
    width: 48%;
  }

  .myReviews-rightContent {
    float: right;
    width: 48%;
    border-left: @clzXuLine;
    height: 200px;
  }

  .myReviews-rTime {
    text-align: left;
    margin: 0;
  }

  .myReviews-box {
    margin: 15px auto;
    width: 80%;
    overflow: hidden;
  }

  .myReviews-box div {
    float: left;
    width: 30%;
    border-right: @clzLine;
  }

  .myReviews-box div:last-child {
    border-right: none;
  }

  .myReviews-rContent {
    width: 100%;
    clear: both;
    margin: 30px 0 0 0;
  }

  .myReviews-divImg {
    width: 350px;
    height: 180px;
    margin: auto;
  }

  .myReviews-divImg img {
    width: 100%;
    height: 100%;
  }

  .myReviews-button button {
    margin-top: 50px;
  }

  .myReviews-del {
    float: right;
    margin-top: 5px;
    cursor: pointer;
    font-size: 25px;
    color: rgba(26, 26, 26, 0.5);
  }
</style>
