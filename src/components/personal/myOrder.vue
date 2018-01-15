<!--我的订单-->
<template>
  <div id="order">
    <div class="notime">
      <span>订单号:</span>{{dataInfo.orderNo}}
      <span>时间:</span>{{dataInfo.create_time}}
      <span></span>
    </div>
    <div class="content">
      <img :src="dataInfo.go_img" alt=""/>
      <div class="list">
        <li>款式：{{dataInfo.go_name}}</li>
        <li>颜色：{{dataInfo.go_color}}</li>
        <li>尺寸：{{dataInfo.go_size}}</li>
        <li>价格：{{dataInfo.go_money}}</li>
        <li>状态：{{dataInfo.go_state}}</li>
      </div>
      <div class="btn">
        <router-link to="/Personal/orderLIstall?pname=> 查看订单"><div><mybtn1 text="查看"></mybtn1></div></router-link>
        <div> <mybtn2 text="申请退款"></mybtn2></div>
      </div>
    </div>
  </div>
</template>
<script>
import mybtn1 from "../button/blackHover.vue"
import mybtn2 from "../button/goldHover.vue"
  export  default {
    name: "myOrder",
    data: function () {
      return {
      }
    },
    props:{
      dataInfo:{
        type:Object,
        required:true
      }
    },
    components:{
      mybtn1:mybtn1,
      mybtn2:mybtn2
    }
  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";


  * {
    /*border: 1px solid yellow;*/
    list-style: none;
  }

  #order {
    /*border: 1px solid blue;*/
    height: 220px;
    width: 100%;
    box-shadow:@clzBorder;
    background-color: white;
    border-radius: 2px;
    margin-top: 5px;
  }
  #order:hover{
    box-shadow:@boxShowdowHover;
    -webkit-transition : all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  /*左上角的订单号和时间*/
  .notime {
    width: 300px;
    color: @grayfont;
  }

  .notime span {

    color: @grayfont;
  }

  /*下方内容*/
  .content {
margin-top: 10px;
  }

  .content>img, .content>div {
    float: left;
  }

  /*图片设置*/
  .content img {
    width: 400px;
    height: 160px;
  }

  /*商品详细信息栏*/
  .list li {
    width: 400px;
    height: 30px;
    line-height: 30px;
    color: @grayfont;
  }
/*设置button样式*/
  .btn{
    width: 240px;
  }
  .btn>div:last-of-type{
    margin-top: 90px;
  }

</style>
