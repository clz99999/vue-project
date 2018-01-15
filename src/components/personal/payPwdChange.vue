<template>
  <div id="change">
    <!--<div><span class="inputTitle">已验证手机:</span></div>-->
    <!--<div class="first"><span class="inputTitle"><span class="warning">*</span>请填写手机校验码:</span><input class="isInput" type="text"/></div>-->
    <!--<span class="nbsp"></span> <mybtn2 text="获取验证码" class="getbtn"></mybtn2>-->
    <div><span class="inputTitle"><span class="warning">*</span>原密码:</span><input class="isInput oldPpwd" type="text"/>
    </div>
    <div><span class="inputTitle"><span class="warning">*</span>新密码:</span><input class="isInput newPpwd" type="text"/>
    </div>
    <!--<span class="nbsp2"></span><span>{{text}}</span>-->
    <div><span class="inputTitle"><span class="warning">*</span>确认新密码:</span><input class="isInput surePpwd"
                                                                                    type="text"/></div>
    <div @click="PpwdChange">
      <mybtn1 text="确定" class="btn"></mybtn1>
    </div>

    <!--弹出模态框1-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>原密码不正确，请重新输入</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

    <!--弹出模态框2-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible2"
      width="30%"
      :before-close="handleClose">
      <span>两次输入的密码不一致，请重新输入</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>


<script>
  import mybtn1 from ".././button/blackHover.vue";
  import mybtn2 from ".././button/goldHover.vue";
  export default{
    name: "payPwdChange",
    data: function () {
      return {
        PPwdList: [],
        dialogVisible: false,
        dialogVisible2: false
      }
    },
    components: {
      mybtn1: mybtn1,
      mybtn2: mybtn2
    },
    methods: {
      PpwdChange: function () {
        var that = this;
        var oinput1 = document.getElementsByClassName('oldPpwd')[0];
        var oldPpwd = oinput1.value;
        var oinput2 = document.getElementsByClassName('newPpwd')[0];
        var newPpwd = oinput2.value;
        var oinput3 = document.getElementsByClassName('surePpwd')[0];
        var surePpwd = oinput3.value;
        this.$axios.post(this.$api.user.PpwdChange, {
            oldPpwd: oldPpwd, newPpwd: newPpwd, surePpwd: surePpwd
          }, {
            transformRequest: [function (data) {
              var str = '';
              for (var key in data) {
                str += key + "=" + data[key] + "&"
              }
              str = str.substring(0, str.length - 1);
              return str
            }]
          }
        ).then(function (response) {
            that.PPwdList = response.data;
            console.log(response.data.code);
            if (response.data.code == 200) {
              that.$router.push("/Personal/PpwdChangeSucceed")
            } else if (response.data.code == 400) {
              that.dialogVisible = true
            } else if (response.data.code == 500) {
              that.dialogVisible2 = true
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      handleClose:function(done) {
        this.$confirm('确认关闭？')
          .then(function() {
            done();
          })
          .catch(function(){});
      }


    }
  }


</script>


<style scoped lang="less">
  @import "../../assets/css/common.less";

  * {
    color: @fontblack;
  }

  .warning {
    color: @warningred;
  }

  .inputTitle {
    display: inline-block;
    width: 150px;
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

  #change > div {
    margin-top: 15px;
  }

  .getbtn {
    margin-top: 0;
    display: inline-block;
  }

  .nbsp {
    display: inline-block;
    width: 90px;
  }

  .nbsp2 {
    display: inline-block;
    width: 50px;
  }

  #change > div {
    margin-top: 40px;
  }

  .first {
    margin-top: 100px !important;
  }

  .btn {
    margin-top: 100px !important;
  }
</style>
