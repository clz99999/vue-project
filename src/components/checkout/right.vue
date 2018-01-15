<template>
    <div id="right">
      <div >
        <div id="rightk">
          <p id="cou">
            <span>商品数量 ：</span>
            <span id="count">{{total2}}</span>
            <span class="el-icon-arrow-down" id="angleDown" :style="'transform:'+transform" @click="changeHeight"></span>
          </p>
          <span id="edit"><a href="javascript:">编辑</a></span>
        </div>
        <transition>
        <div id="goodsOrder" :style="'height:'+height">
            <div class="goods" v-for="item in goodsInfo">
              <goods :goodsObj="item"></goods>
            </div>
        </div>
        </transition>
        <div id="total">
          <h3>订单总额:</h3>
          <h3>￥<span>{{total1}}</span></h3>
        </div>
      </div>


    </div>
</template>

<script type="es6">
  import goods from '../checkout/goods'
    export default{
        name: '',
        data: function () {
            return {
              totalCount:0,
              totalPrice:0,
              goodsList:[
                {checkSrc:'./src/assets/images/gimg1.jpg', checkColor:'水蓝', checkCount:1, checkPrice:10},
                {checkSrc:'./src/assets/images/gimg2.jpg', checkColor:'粉', checkCount:2, checkPrice:20},
                {checkSrc:'./src/assets/images/gimg3.jpg', checkColor:'黄', checkCount:3, checkPrice:5},
                {checkSrc:'./src/assets/images/gimg1.jpg', checkColor:'绿', checkCount:2, checkPrice:5}
              ],
              height:0,
              transfrom:"rotate(0)",
              goodsInfo:[]
            }
        },
      created(){
        var _this = this;
        this.$axios.post(this.$api.store.goodsOrder,"userid=2").then(function (res) {
          _this.goodsInfo = res.data;
          _this.height = _this.goodsInfo.length * 122 + "px";
          //console.log(_this.goodsInfo);
        }).catch(function (err) {
          console.log(err);
        });

      },
      mounted:function(){

      },
      computed: {
        total1: function () {
          for (let i = 0; i < this.goodsInfo.length; i++) {
            this.totalPrice += this.goodsInfo[i].g_saleprice;
            sessionStorage.setItem('totalPrice',this.totalPrice);
          }
          return this.totalPrice
        },
        total2(){
          for (let i = 0; i < this.goodsInfo.length; i++) {
            this.totalCount += this.goodsInfo[i].s_count;
          }
          return this.totalCount
        }

      },

      methods: {
        changeHeight(){
          console.log(this.height);
          if (this.height == 0) {
            this.height = this.goodsInfo.length * 122 + "px";
            this.transform = "rotate(0)"
          } else {
            this.height = 0;
            this.transform = "rotate(180deg)"
          }

        }
      }
      ,
      components: {
        goods: goods
      }
    }

</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #right{
    padding: 30px 10px;
    margin: 0 auto;
    font-size: @mainfontsize;
    border: 1px solid @borderGray;
    overflow: hidden;
  }
  #right>div{
    width: 80%;
    margin: 0 auto;
  }
  #rightk{
    /*width: 100%;*/
    height: 30px;
    border-bottom: 1px solid @borderGray;
  }
  #total{
    margin: 10px 0;
    color: @fonttitle;
  }
  #cou,#total>h3:first-child{
    float: left;
  }
  #edit,#total>h3:last-child{
    float: right;
  }
  #edit>a:hover{
    text-decoration: underline;
    color: @mainblue;
  }
  #goodsOrder{
    overflow: hidden;
    transition: height 1s;
  }
  #angleDown{
    transition: transform 0.5s;
    cursor: pointer;
  }

</style>
