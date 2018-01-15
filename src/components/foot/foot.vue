<template>
  <div id="footer">
    <div class="content">
      <div>
        <p>注册独家优惠</p>
        <p>
          <input type="text" placeholder="Enter Your Email Here"/>
        </p>
        <footBtn text="提交" id="footBtn"></footBtn>
        <!--图标-->
        <ul class="footIcon">
          <li class="fa fa-facebook"></li>
          <li class="fa fa-google-plus"></li>
          <li class="fa fa-twitter"></li>
          <li class="fa fa-tumblr"></li>
          <li class="fa fa-linkedin"></li>
          <li class="fa fa-dribbble"></li>
        </ul>
      </div>
      <!--文字链接-->
      <ul class="footText">
        <li>常见问题</li>
        <router-link tag="li" to="/contact">联系我们</router-link>
        <router-link tag="li" to="/about">集团介绍</router-link>
        <router-link tag="li" to="/LegalNotice">法律申明</router-link>
        <router-link tag="li" to="/OfflineTryon">线下试戴</router-link>
      </ul>
      <!--最后一排文字-->
      <div>COPYRIGHT @2017 OPTEC TECHNOLOGY LIMITED. ALL RIGHT RESERVED.</div>
    </div>
  </div>
</template>

<script>
  import footBtn from '../button/goldSmall.vue'
  export default {
    name: 'foot',
    components:{
      'footBtn':footBtn
    }

  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #footer{
    width: 100%;
    height: 218px;
    background-color: @mainblack;
    overflow: hidden;
  }
  #footer .content{
    color: @maingold;
    width: 86%;
    height: 170px;
    margin: 32px auto ;
    font-size: @mainfontsize;
  }
  #footer .content>div{
    width: 100%;
    height: 36px;
    /*outline: 1px solid red;*/
  }
  #footer .content>div>p{
    float: left;
    height: 36px;
    line-height: 36px;
    /*outline: 1px solid red;*/
  }
  #footer .content>div>p:nth-of-type(2){
    margin-left: 150px;
  }
  /*输入框*/
  #footer .content>div>p>input{
    width: 216px;
    height: 30px;
    outline: none;
    border: none;
  }
  #footer .content>div>p>input::-webkit-input-placeholder{
    color: #d1d1d1;
    font-size: 12px;
  }
  /*图标*/
  #footer .footIcon{
    float: right;
  }
  #footer .footIcon>li{
    color: white;
    height: 36px;
    line-height: 36px;
    font-size: 20px;
    padding-right: 20px;
    transition: all .1s linear;
  }
  #footer .footIcon>li:hover{
    cursor: pointer;
    color: @maingold;
    transform: scale(1.4,1.4);
  }
  /*链接文字*/
  #footer .footText{
    height: 80px;
    line-height: 80px;
  }
  #footer .footText>li{
    cursor: pointer;
    float: left;
    list-style: none;
  }
  #footer .footText>li:first-child~li{
    margin-left: 32px;
  }
  /*最后一排文字*/
  #footer .content>div:last-child{
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 13px;
    word-spacing: 2px;
    border-top: 1px solid @maingold;
  }
  /*提交按钮*/
  #footer .content #footBtn{
    float: left;
    margin-left: 2px;
    margin-top: 4px;
  }
</style>
