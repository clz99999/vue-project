<template>
<div id="change">
  <div class="first"><span class="inputTitle"><span class="warning">*</span>我的手机:</span><input class="isInput" id="txtPhone" type="text" v-model="emailInfo"/></div>
  <span class="nbsp"></span>
  <div @click="sendSMS"><mybtn2 text="获取验证码" class="getbtn"></mybtn2></div>
  <div><span class="inputTitle"><span class="warning">*</span>请填写手机校验码:</span><input class="isInput" id="txtCode" type="text"/></div>
 <div @click="regSMS"><mybtn1 text="确定" class="btn"></mybtn1></div>
</div>
</template>
<script>
  import mybtn1 from ".././button/blackHover.vue";
  import mybtn2 from ".././button/goldHover.vue";
  export default{
  name:"phoneBind",
  data:function(){
    return{
      phoneList:[],
      emailInfo:''
    }
  },
  components:{
    mybtn1:mybtn1,
    mybtn2:mybtn2
  },
    methods:{
      //发送验证码到手机
      sendSMS:function(){
        var txtPhone = document.getElementById("txtPhone").value;
        var that=this;
        this.$axios.post(this.$api.user.sendSMS, {txtPhone: txtPhone}, {
          transformRequest: [function (data) {
            var str = '';
            for (var key in data) {
              str += key + "=" + data[key] + "&"
            }
            str = str.substring(0, str.length - 1);
            return str
          }]
        })
      },
      //验证输入的验证码是否正确
      regSMS:function(){
        var userId=sessionStorage.getItem('userId')
        var txtPhone = document.getElementById("txtPhone").value;
        var txtCode = document.getElementById("txtCode").value;
        var that=this;
        this.$axios.post(this.$api.user.regSMS, {txtPhone:txtPhone,txtCode: txtCode}, {
          transformRequest: [function (data) {
            var str = '';
            for (var key in data) {
              str += key + "=" + data[key] + "&"
            }
            str = str.substring(0, str.length - 1);
            return str
          }]
        }).then(function (response) {
          that.phoneList = response.data;

          if(response.data=="成功"){
            var txtPhone=document.getElementById("txtPhone").value;
            that.$axios.post(that.$api.user.updatePhone, {txtPhone: txtPhone,userId:userId}, {
              transformRequest: [function (data) {
                var str = '';
                for (var key in data) {
                  str += key + "=" + data[key] + "&"
                }
                str = str.substring(0, str.length - 1);
                return str
              }]
            }).then(function(response){

            }).catch(function(error){
              console.log(error)
            })
            that.$router.push({name:'phoneBindSucceed',params:{
              emailInfo:that.emailInfo
            }})
          }else{
          }
        })
          .catch(function (error) {
            console.log(error);
          });
  }
    },
    props:['path']
}

</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";

*{
  color:@fontblack;
}
.warning{
  color: @warningred;
}
  .inputTitle{
    display: inline-block;
    width: 160px;
    text-align: justify;
    font-size: @partfont;
  }
  .inputTitle::after{
    content:"";
    display:inline-block;
    width:100%;
  }
  .isInput{
    vertical-align: top;
  }
  #change>div{
    margin-top: 15px;
  }
  .getbtn{
    margin-top: 0;
    display: inline-block;
  }
  .nbsp{
    display: inline-block;
    width: 100px;
  }
  #change>div{
    margin-top: 40px;
  }
  .btn{
    margin-top: 100px!important;
  }
  .first{
    margin-top: 100px!important;
  }


</style>
