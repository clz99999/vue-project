<!--个人中心导航栏-->
<template>
  <div id="list">
    <img :src="imgSrc" alt=""/>
    <p><span>{{name}}</span></p>
    <li><span class="fa fa-diamond"></span><b><span>订单管理</span></b></li>
    <router-link to="/Personal/Order?pname=> 我的订单"><li><span>我的订单</span></li></router-link>
    <router-link to="/personal/pageMyCollect?pname=> 我的收藏"><li><span>我的收藏</span></li></router-link>
    <li><span class="fa fa-handshake-o"></span><b><span>服务管理</span></b></li>
    <router-link to="/personal/afterSales?pname=> 售后申请 "><li><span>售后申请</span></li></router-link>
    <router-link to="/personal/pageMyReview?pname=> 我的评论"><li><span>我的评论</span></li></router-link>
    <li><span class="fa fa-user-o"></span><b><span>个人设置</span></b></li>
    <router-link to="/personal/pagePersonalInformation?pname=> 个人资料"><li><span>个人资料</span></li></router-link>
    <router-link to="/Personal/Security?pname=> 账号安全"><li><span>账号安全</span></li></router-link>
    <router-link to="/personal/pageMyAddress?pname=> 地址管理"><li><span>地址管理</span></li></router-link>
    <!--<router-views/>-->
  </div>
</template>


<script>
  export default {
    name: "personList",
    data:function(){
      return{
        imgSrc:"/src/assets/images/img1.png",
        name:""
      }
    },
    created: function(){
      this.getInfo()
    },
    methods:{
      getInfo:function(){
        console.log("121212")
        var userName=sessionStorage.getItem('userName');
        this.name=userName
      }
    }

  }


</script>


<style lang="less" scoped>
  /*@import url("./src/assets/css/common.less");*/
  @import "../../assets/css/common.less";
  /*@import "";*/
  *{
    color:@fontblack ;
  }
  p{
    text-align: center;
  }
  #list{
    list-style: none;
    width: 160px;
  }
  li:hover span{
    color: @colorhover;

  };
  li{
    text-align: center;
    width: 160px;
    height: 40px;
    line-height: 40px;
    cursor:pointer;
    position: relative;
    /*border:1px solid red;*/

  }
  li:hover{
    background-color: @colorbg;
  }
  #list img{
    width: 150px;
    height: 150px;
    -webkit-border-radius: 75px;
    -moz-border-radius: 75px;
    border-radius: 75px; ;
  }
  #list a{
    text-decoration: none ;
  }
  .fa{
    position: absolute;
    left: 18px;
    top:12px;
  }
</style>
