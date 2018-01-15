<template>
  <div id="change">
    <div class="first"><span class="inputTitle"><span class="warning">*</span>我的邮箱:</span><input v-on:blur="regEmail" class="isInput" type="text" v-model="emailInfo"/></div>
   <span v-if=emailTag class="Tag">{{text}}</span>
    <div><span class="inputTitle"><span class="warning">*</span>验证码:</span><input id="valid" class="isInput" v-on:blur="validate" type="text" placeholder="请输入下图中的验证码"/></div>
    <span class="nbsp"></span><input type="text" id="code"/><span class="font1">看不清，<span class="changeValid" @click="createCode">换一张</span></span>
    <span v-if=codeTag class="Tag">{{text1}}</span>
    <div class="btn" @click="emailChange">
      <mybtn1 text="保存"></mybtn1>
    </div>

  </div>
</template>
<script>
  var code;//在全局定义验证码
  import mybtn1 from ".././button/blackHover.vue";
  import mybtn2 from ".././button/goldHover.vue";
  export default{
    name: "phoneBind",
    data: function () {
      return {
        emailList: [],
        emailFlag: "false",
        regFlag:"false",
        emailInfo:'',
        text:'',
        text1:'',
        emailTag:false,
        codeTag:false
      }
    },
    components: {
      mybtn1: mybtn1,
      mybtn2: mybtn2
    },
    mounted: function () {
      this.createCode()
    },
    methods: {
      //  点击换一张，更换验证码
      createCode: function () {
        code = "";
        var codeLength = 4;//验证码的长度
        var checkCode = document.getElementById("code");
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
          var index = Math.floor(Math.random() * 36);
          code += random[index];
        }
        checkCode.value = code;
//        console.log(checkCode)
      },

// 绑定验证码验证函数
      validate: function () {
        var inputCode = document.getElementById("valid").value.toUpperCase(); //取得输入的验证码并转化为大写
        if (inputCode.length <= 0) { //若输入的验证码长度为0
         this.codeTag=true;
          this.text1='验证码不能为空！';
          this.regFlag=false;
        }
        else if (inputCode != code) { //若输入的验证码与产生的验证码不一致时
          this.codeTag=true;
          this.text1='验证码输入错误，请重新输入！';
          this.regFlag=false;
//          createCode();//刷新验证码
          document.getElementById("input").value = "";//清空文本框
        }
        else { //输入正确时
          this.codeTag=false;
          this.text1='';
          this.regFlag=true
        }
      },

      //验证邮箱格式是否正确
      regEmail: function () {
        var oinput = document.getElementsByClassName('isInput')[0];
        var email = oinput.value;
        //判断是否是正确的邮箱格式
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
        this.emailFlag = reg.test(email);
        if(this.emailFlag==false){
          this.emailTag=true;
          this.text="邮箱格式不正确，请重新输入！"
        }else{
          this.emailTag=false;
          this.text=""
        }
      },

      //修改邮箱
      emailChange: function () {
        var that = this;
        var oinput = document.getElementsByClassName('isInput')[0];
        var email = oinput.value;
        console.log("regFlag");
        console.log(this.regFlag);
        if (this.emailFlag == true&&this.regFlag==true) {
          this.$axios.post(this.$api.user.emailChange, {email: email}, {
            transformRequest: [function (data) {
              var str = '';
              for (var key in data) {
                str += key + "=" + data[key] + "&"
              }
              str = str.substring(0, str.length - 1);
              return str
            }]
          })
            .then(function (response) {
              that.emailList = response.data;
              that.$router.push({name:'emailValidSucceed',params:{
                emailInfo:that.emailInfo
              }})
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        else {

        }
      }

    }

  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";

  * {
    color: @fontblack;
  }

  /**颜色为红色*/
  .warning {
    color: @warningred;
  }

  /*input框格式对齐*/
  .inputTitle {
    display: inline-block;
    width: 100px;
    text-align: justify;
    font-size: @partfont;
  }

  .inputTitle::after {
    content: "";
    display: inline-block;
    width: 100%;
  }

  .isInput {
    vertical-align: top;
  }

  /*间距调整*/
  #change > div {
    margin-top: 15px;
  }

  /*空白span调整对齐*/
  .nbsp {
    display: inline-block;
    width: 215px;
  }

  /*显示验证码的框框*/
  #code {
    border: none;
    margin-right: 15px;
    background-color: @graybg;
    height: 25px;
    width: 162px;
    text-align: center;
    font-weight: 600;
    user-select: none;
    color: white;
  }

  /*'看不清，换一张'格式设置*/
  .font1, .changeValid {
    font-size: @partfont;
  }

  .changeValid {
    color: @mainblue;
    cursor: pointer;
  }

  #change > div {
    margin-top: 40px;
  }

  .btn {
    margin-top: 100px !important;
  }

  .first {
    margin-top: 100px !important;
  }
  /*邮箱和验证码格式不正确时，提示文字显示*/
  .Tag{
    display: block;
    margin-top: 10px;
    font-size: 13px;
    color: red;
  }

</style>
