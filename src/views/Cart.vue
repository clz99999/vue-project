<template>
  <div>
    <common-nav></common-nav>
    <div style="width: 100%;height:auto;display:inline-block;margin-bottom: 20px">
        <div class="chart">
          <h1>购物袋</h1>
          <div class="chart_lef">
            <div v-for=" i in imgurl ">
              <cart-shop @ct="numberCount" :obj="i"></cart-shop>
            </div>
            <div>
              <h1 v-if="imgurl.length==0">您的购物车为空</h1>
            </div>
          </div>
          <div class="chart_right">
            <div class="right_le">
              <div>数量:{{num}}</div>
              <!--<div>小计:1</div>-->
              <hr/>
              <div>订单总额：￥{{goodsTotal}}</div>
              <router-link to="/checkoutOn"><mybtn text='进行结算'></mybtn></router-link>
              <router-link to="/ManSun"><div class="chart_shop">继续购物</div></router-link>
              <div>我们接受：</div>
              <img src="../assets/images/u144.png" alt="">
              <img src="../assets/images/u146.png" alt="" class="wx">
            </div>
            <div>需要帮助？<a href="">联系客服</a></div>
          </div>
        </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import  foot from '../components/foot/foot'
  import mybtn from '../components/button/blackMiddle.vue'
  import commonNav from '../components/nav/commonNav'
  import cartShop from '../components/cart/cartShop.vue'
export default {
  name:'',
  data:function () {
   return{
     imgurl:[],
     goodsTotal:0,
     //price
     num:0
     //count
    }
  },components:{
    'mybtn':mybtn,
    foot,
    commonNav,
    cartShop
  },
  created:function () {
    this.list();
  },
  updated:function(){
    // updated中这么试试
    this.$nextTick(function(){
      this.numberCount();
    });

  },
  methods:{
    list:function () {
      var that=this
//      var s
      this.$axios.post(this.$api.cart.cartList).then( function (response) {
        let json={}
        that.imgurl=response.data.goods;
//        console.log("in");
        console.log(that.imgurl);


      }).catch(function (err) {
        console.log(err)
      })
    },
    num1:function(){
     for(let i =0;i<this.imgurl.length;i++ ){
        this.num1 += this.imgurl


     }
    },
    numberCount:function (ap) {
//      console.log("total in");
      //计算总价
      var pArr = document.getElementsByClassName('proTotal');
      let totalprice=0;
      let totalnum=0;
//      console.log(pArr.length)
      for(var i = 0 ;i<pArr.length;i++){

        totalprice+=parseInt(pArr[i].value);
        totalnum+=parseInt(pArr[i].getAttribute('num'));
        console.log(pArr[i].getAttribute('num'))
      }
//      console.log(totalprice);
//      console.log(totalnum)

      this.$set(this,'goodsTotal',totalprice);
      this.$set(this,'num',totalnum);
//      this.goodsTotal = totalprice;
//      this.num = totalnum;
//      this.num = ap.count;
//      this.goodsTotal = ap.price;
//      console.log(this.goodsTotal);
//      console.log('zy');
    }
  }
  }


</script >
<style scoped lang="less">
  @import "../assets/css/common.less";
  .chart{
    width: 1110px;
    margin-top: 118px;
    margin-left: 118px;
    min-height: 400px;
    clear:both
  }
  .chart_lef{
    float: left;
  }
  .right_le{
     width: 300px;
     height: 311px;
     margin: 20px 0 0 40px;
   }
  .right_le>hr{
    width: 100%;
    border: solid 1px #e0e0e0;
    margin-top: 15px;
  }
  .chart_right{
    width: 390px;
    height: 378px;
    border: @borderGray 1px solid;
    float: right;
    margin-top: 37px;
  }
  .right_le>div,.right_le>mybtn{
    margin-top: 15px;

  }
  .chart_left>span:nth-child(2){
    position: absolute;
    top: 10px;
    left: 50px;
    color:#43acbf ;
    font-size: 16px;
    font-weight: bold;
    font-family: 微软雅黑;
  }

  .chart_shop{
    margin-left: 123px; ;
    font-size: 12px;
    font-family: 微软雅黑;
  }
  .right_le>img{
    width: 115px;
    margin-top: 15px;
    margin-right: 15px;
  }
  .chart_right>div:last-child{
    margin-left: 32%;
  }
  .wx{
    width: 148px;
  }
  .car{
    position: absolute;
    top: 300px;
    left:18%;
  }
</style>


