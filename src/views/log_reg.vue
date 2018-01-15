<template>
  <div id="box">
    <!--======================================登录模块=============================================-->
    <div id="log">
      <h1>登录</h1>
      <form action="">
        <p><input class="is_input" id="user_name" type="text" placeholder="用户名"/></p>
        <p><input class="is_input" id="pwd" type="password" placeholder="密码"/></p>
        <p id="rem_box"><input id="remember" type="checkbox"><label class="rem_pwd" for="remember">记住密码</label></p>
        <p><input  @click="userIogin" class="my_button" id="login_btn" type="button" value="登录"></p>
      </form>
      <a id="reget_pwd_btn" @click="reGetPwd()">忘记密码？</a>
      <!--三方登录-->
      <div id="log_other">
        <p id="other_title">第三方登录</p>
        <span class="other_icon fa fa-qq" title="qq"></span>
        <span class="other_icon fa fa-weixin" title="微信"></span>
        <span class="other_icon fa fa-weibo" title="新浪微博"></span>
      </div>
      <!--注册-->
      <p class="registe_title">我是新用户</p>
      <a id="to_registe" @click="logToReg()">创建我的账户</a>
      <p>g-glasses保证所有信息的安全和私密性，我们决不会将您的信息提供给第三方。</p>
    </div>

    <!--=======================================注册模块===========================================-->
    <div id="reg">
      <h1>注册</h1>
      <!--提交表单-->
      <form id="reg_form" action="">
        <p><input class="is_input" id="reg_uname" type="text" placeholder="用户名"/></p>
        <p><input class="is_input" id="reg_pwd" type="password" placeholder="密码"/></p>
        <p><input class="is_input" id="reg_again_pwd" type="password" placeholder="请再次输入密码"/></p>
        <p><input class="is_input" id="reg_phone_num" type="text" placeholder="手机号"/></p>
        <p class="verification_code">
          <input class="is_input is_short_input" id="input_code" type="password" placeholder="验证码"/>
          <input @click="sendSMS"  class="send_code my_button" type="button" value="发送验证码">
        </p>
        <p><input @click="userRegion" class="my_button" id="reg_btn" type="button" value="注册"></p>
      </form>
      <!--登录-->
      <p class="log_title">已有账号</p>
      <a id="to_log" @click="regToLog()">请在此登录</a>
      <p>g-glasses保证所有信息的安全和私密性，我们决不会将您的信息提供给第三方。</p>
    </div>
    <!--=======================================找回密码模块===========================================-->
    <div id="re_get_pwd">
        <h1>找回密码</h1>
        <!--提交表单-->
        <form id="re_form" action="">
          <p><input class="is_input" id="re_phone_num" type="text" placeholder="手机账号"/></p>
          <p class="verification_code">
            <input class="is_input is_short_input" id="re_input_code" type="password" placeholder="验证码"/>
            <input class="send_code my_button" type="button" value="发送验证码">
          </p>
          <p><input class="is_input" id="re_pwd" type="password" placeholder="新密码"/></p>
          <p><input class="is_input" id="re_again_pwd" type="password" placeholder="请再次输入密码"/></p>
          <p><input class="my_button" id="re_btn" type="button" value="确认"></p>
        </form>
        <!--登录或返回首页-->
        <a id="return_index">返回首页</a>
        <span>|</span>
        <a id="re_to_log" @click="reGetPwdToLog()">登录账号</a>
    </div>
  </div>
</template>


<script>
  export default{
    name:'log_reg',
    data:function(){
      return{
        loginList:[]
      }
    },
    methods:{
      //通过id设置样式,参数（id、要改变的css属性、属性值）
      setCss:function (id,cssAtr,atrVal) {
        document.getElementById(id).style[cssAtr] = atrVal;
      },
      //登录切换为注册
      logToReg:function(){
        this.setCss('log','position','absolute');
        this.setCss('log','visibility','hidden');

        this.setCss('log','top',0);
        this.setCss('log','left',0);

        this.setCss('reg','position','static');
        this.setCss('reg','visibility','visible');

        this.setCss('reg','transform','rotateY(360deg)');
        this.setCss('log','transform','rotateY(180deg)');

      },
      //注册切换为登录
      regToLog:function(){
        this.setCss('reg','position','absolute');
        this.setCss('reg','visibility','hidden');

        this.setCss('log','position','static');
        this.setCss('log','visibility','visible');

        this.setCss('log','transform','rotateY(360deg)');
        this.setCss('reg','transform','rotateY(180deg)');
      },
      //登录中的忘记密码
      reGetPwd:function () {
        this.setCss('log','display','none');
        this.setCss('re_get_pwd','display','block');
      },
      //找回密码中的登录
      reGetPwdToLog:function () {
        this.setCss('re_get_pwd','display','none');
        this.setCss('log','display','block');
      },

      //登录
      userIogin:function(){
        var that=this;
        var username=document.getElementById('user_name').value;
        var userpwd=document.getElementById('pwd').value;
        this.$axios.post(this.$api.user.login, {username: username,userpwd:userpwd}, {
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
            if (response.data.code==1){
//======================================登录成功=====================================================
              sessionStorage.setItem('userId',response.data.data.u_id);
              sessionStorage.setItem('userName',response.data.data.u_name);
//              that.$alert('<strong>登录成功</strong>', '', {
//                dangerouslyUseHTMLString: true
//              });
              that.$router.push("/index")
//              that.$route.push('路径')
            }
            if (response.data.code==2){
              that.$alert('<strong>密码错误</strong>', '', {
                dangerouslyUseHTMLString: true
              });
            }
            if (response.data.code==0){
              that.$alert('<strong>找不到账号</strong>', '', {
                dangerouslyUseHTMLString: true
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
//    <form id="reg_form" action="">
//    <p><input class="is_input" id="reg_uname" type="text" placeholder="用户名"/></p>
//    <p><input class="is_input" id="reg_pwd" type="password" placeholder="密码"/></p>
//    <p><input class="is_input" id="reg_again_pwd" type="password" placeholder="请再次输入密码"/></p>
//    <p><input class="is_input" id="reg_phone_num" type="password" placeholder="手机号"/></p>
//    <p class="verification_code">
//    <input class="is_input is_short_input" id="input_code" type="password" placeholder="验证码"/>
//    <input class="send_code my_button" type="button" value="发送验证码">
//    </p>
//    <p><input @click="userRegion" class="my_button" id="reg_btn" type="button" value="注册"></p>
//    </form>
      //点击注册
      userRegion:function(){
        var that=this;
        var regUname=document.getElementById('reg_uname').value;
        var regPwd=document.getElementById('reg_pwd').value;
        var regAgainPwd=document.getElementById('reg_again_pwd').value;
        var regPhone=document.getElementById('reg_phone_num').value;
        var txtCode=document.getElementById('input_code').value;
        if(regPwd==regAgainPwd&&regUname&&regPwd&&regAgainPwd&&regPhone&&txtCode){
          this.$axios.post(this.$api.user.regSMS, {txtPhone: regPhone,txtCode:txtCode}, {
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
              if(response.data=="成功"){
//============================注册成功============================
                var regUname2=document.getElementById('reg_uname').value;
                var regPwd2=document.getElementById('reg_pwd').value;
                var regPhone2=document.getElementById('reg_phone_num').value;
                that.$axios.post(that.$api.user.region, {
                  regUname: regUname2,
                  regPwd:regPwd2,
                  regPhone:regPhone2
                }, {
                  transformRequest: [function (data) {
                    var str = '';
                    for (var key in data) {
                      str += key + "=" + data[key] + "&"
                    }
                    str = str.substring(0, str.length - 1);
                    return str
                  }]
                });

                that.$alert('<strong>注册成功，请登录</strong>', '', {
                  dangerouslyUseHTMLString: true
                });
                window.location.reload();
              }else{
                that.$alert('<strong>验证码不正确</strong>', '', {
                  dangerouslyUseHTMLString: true
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });

        }else if(!regPwd){
          that.$alert('<strong>请输入密码</strong>', '', {
            dangerouslyUseHTMLString: true
          });
        }else if(regPwd!=regAgainPwd){
          that.$alert('<strong>原密码和新密码不匹配</strong>', '', {
            dangerouslyUseHTMLString: true
          });
        }else {
          that.$alert('<strong>格式不正确</strong>', '', {
            dangerouslyUseHTMLString: true
          });
        }
      },





      //发送验证码到手机
      sendSMS:function(){
        var txtPhone = document.getElementById('reg_phone_num').value;
        console.log(txtPhone);
        var that=this;
        var telStr=/^1[3|4|5|8][0-9]\d{4,8}$/
        if(!telStr.test(txtPhone)){
          this.$alert('<strong>手机号书写错误</strong>', '', {
            dangerouslyUseHTMLString: true
          });
        }else {
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
            this.$alert('<strong>发送成功！</strong>', '', {
              dangerouslyUseHTMLString: true
            });
        }

      },
    }

  }
</script>

<style lang="less">
  @import '../assets/css/common.less';
  @import '../assets/css/log_reg.less';
 </style>
