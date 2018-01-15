<template>
  <div>
    <div class="chart_left">
      <img src="../../assets/images/u7.png" alt="" >
      <span>有货</span><!--变量-->
      <img src="obj.g_src" alt="">
      <img src="obj.cart_img1" alt="">
      <div class="price"> ￥<span class="cl">{{obj.g_saleprice}}</span></div><!--价格-->
      <div class="details">
        <div>镜框：{{obj.g_frame}}</div><!--变量-->
        <div>颜色：{{obj.color}}</div><!--变量-->
        <div>材质：{{obj.g_material}}</div><!--变量-->
        <div id="number"> 数量：
          <el-input-number size="mini" v-model="num" :min="1" :max="10" ></el-input-number>
        </div>
      </div>
      <hr class="hr1"/>
      <div class="tota">
        <span>￥<span class="total">{{total}}</span></span>
        <input type="hidden" :value="total" :num="num" class="proTotal">
      </div>
      <hr class="hr2"/>
      <img src="../../assets/images/im-guarantee.png" alt="" class="im">
      <span class="gu">12个月的产品保证| 14天风险免费退货</span>
      <img src="../../assets/images/del.png" alt="" class="del" @click="Clear">
    </div>
  </div>
</template>
<script>
  export default {
    name:"",
    props:['obj'],
    data:function(){
      return {
        num:1,
        totalgoods:0
      }
    },
    computed:{
      total:function(){
        this.totalgoods = this.obj.g_saleprice * this.num;
        return this.totalgoods;
      }
    },
    mounted:function () {
      let inpF = document.getElementById('number');
      let incre = inpF.getElementsByClassName('el-input-number__increase');
      let decre = inpF.getElementsByClassName('el-input-number__decrease');
      let that = this;
      for(var i=0;i<incre.length;i++){
        incre[i].addEventListener("click",function () {
          let inpF = document.getElementById('number');
          let inp = inpF.getElementsByClassName("el-input__inner")[0];
          let ap = {
            count:inp.value,
            price:that.totalgoods
          };
          that.$emit('ct',ap);
        });

        decre[i].addEventListener("click",function () {
          let inpF = document.getElementById('number');
          let inp = inpF.getElementsByClassName("el-input__inner")[0];
          let ap = {
            count:inp.value,
            price:that.totalgoods
          };
          that.$emit('ct',ap);
        });
      }
    },
    methods:{
      Clear:function () {
        var that=this
        var path=this.imgurl.s_id
        console.log(path)
        this.$axios.post(this.$api.cart.carupdate)
      }
    }


  }
</script>
<style scoped lang="less">
  @import "../../assets/css/common.less";
  @import url("//unpkg.com/element-ui@2.0.8/lib/theme-chalk/index.css");
  .chart_left>img:nth-child(3) ,.chart_left>img:nth-child(4) {
    position: absolute;
    left: 40px;
    top: 93px;
    width: 172px;
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

  .chart_left{
    font-size: 14px;
    width: 653px;
    height: 376px;
    border: @borderGray 1px solid;
    position: relative;
    margin-top: 37px;
  }
  .details{
    position: absolute;
    top: 14%;
    left: 42%;
  }
  .details>div{
    margin-top: 20px;
  }
  .price{
    position: absolute;
    top: 14%;
    margin-top: 20px;
    left: 80%;

  }
  .hr1{
    border: 1px dashed @borderGray;
    position: absolute;
    top:65%;
    left: 42%;
    width: 295px;
  }
  .tota{
    width: 295px;
    position: absolute;
    top:70%;
    left: 80%;
  }
  .total>span:nth-child(1){
    position: absolute;
    left: 80%;
  }
  h1{
    font-size: 28px;
    color: @fontblack;
    font-weight: 100;
  }
  .hr2{
    border: 1px solid #eeeeee;
    width: 100%;
    position: absolute;
    top: 83%;
  }
  .im{
    position: absolute;
    top: 89%;
    left: 32%;
  }
  .gu{
    position: absolute;
    top: 89%;
    left: 37%;
    color: #c2c2c2;
  } .chart_left>img:nth-child(3) {
      position: absolute;
      left: 40px;
      top: 93px;
      width: 172px;
    }
  .del{
    width:30px;
    float: right;
    margin-right: 10px;

  }
</style>
