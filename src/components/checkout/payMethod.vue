<template>
  <div id="payMethod">
    <zytitle :title="payTitle"></zytitle>
    <div id="payImg" v-if="messageOk==1">
      <span><el-button type="text" @click="open5"><img :src="weichat" id="weichat" alt=""/></el-button></span>
      <span><el-button type="text" @click="open5"><img :src="pay" id="pay" alt=""/></el-button></span>
      <span @click="cardPay"><img :src="unionPay" id="unionPay" alt="" />银联支付</span>
    </div>
    <div id="cardNum" v-if="cardShow==1">
      <div id="ckuang">
        <p id="card">信用卡或借记卡</p>
        <div>
          <input  type="text" placeholder="卡号" v-model="cardNumInfo" /><br/>
          <span id="cardreg" v-if="cardReg==true">输入的卡号格式不正确!</span>
        </div>
      </div>
      <el-button type="text" @click="open3"><blackBig id="btnMessage" @btnClick="cardNum" text="完成"></blackBig></el-button>
    </div>

  </div>
</template>

<script type="es6">
  import zytitle from '../checkout/title'
  import blackBig from '../button/blackBig.vue'
  export default{
    name: '',
    data: function () {
      return {
        weichat:"./src/assets/images/微信.png",
        pay:"./src/assets/images/支付宝.png",
        unionPay:"./src/assets/images/银联.png",
        cardShow:0,
        cardNumInfo:'',
        cardReg:false
      }
    },
    components:{
      zytitle:zytitle,
      blackBig:blackBig
    },
    methods:{
      cardPay:function(){
        this.cardShow = 1
      },
      cardNum:function(){
        this.$emit('cardNum',this.cardNumInfo)
      },
      open5() {

            this.$alert(`<div id="codeBox">
          <div id="contentBox">
          <img src="./src/assets/images/QRcode.jpg" alt=""/>
          <span >扫一扫付款</span>
          </div>
          </div>`, '支付', {
              dangerouslyUseHTMLString: true
            }).then(()=>{
              location.href = '/'
            }).catch((err)=>{

            });
        this.cardShow = 0
      },
      open3() {
        var cardReg = /^(\d{16}|\d{19})$/;
        if (this.cardNumInfo != null) {
          if (cardReg.test(this.cardNumInfo)) {
            this.$prompt('请输入密码', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              /*inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
               inputErrorMessage: '邮箱格式不正确'*/
            }).then(({ value }) => {
              this.$message({
                type: 'success',
                message: '支付成功，正在跳转首页...'
              });
              //this.$router.push('/')
              location.href = '/'
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消输入'
              });
            });
          } else {
            this.cardReg = true
        }
      }
      }
    },
    props: ['payTitle', 'messageOk']
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #payMethod{
    text-align: center;
    font-size: @mainfontsize;
    padding-bottom: 50px;
    letter-spacing: @letterspacing;
  }
  #btnMessage{
    margin: 20px 0;
  }
  #payImg{
    width: 100%;
    height: 120px;
    margin: 0 auto;
  }
  #payImg>span{
    vertical-align: middle;
    width: 28%;
    height: 50px;
    display: inline-block;
    border: 1px solid @borderGray;
    margin: 30px 10px;
    color: #909090;
    cursor: pointer;
  }

  #payImg>span img:not(#unionPay){
    width: 90px;
    /*vertical-align: middle;*/
    /*margin: 10px 0;*/
  }
  #payImg>span #unionPay{
    width: 40px;
    vertical-align: middle;
    margin: 15px 0;
  }
  #cardNum{
    text-align: center;
  }
  #cardNum>#ckuang{
    width: 66%;
    margin: 0 auto;
    box-shadow: 2px 2px 10px 3px #b5b5b5;
  }
  #card{
    font-size: 1.5 * @mainfontsize;
  }
  input{
    width: 430px;
    height: 30px;
    border: 0;
    outline: none;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.49);
  }
  ::-webkit-input-placeholder{
    color: @placeholder;
    text-indent: 0.5em;
    letter-spacing: 0.1em;
  }
  #cardreg{
    color: red;
  }




</style>
