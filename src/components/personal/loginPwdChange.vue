<template>
<div id="change">
  <div class="first"><span class="inputTitle"><span class="warning">*</span>原密码:</span><input class="isInput oldLpwd" type="password"/></div>
  <div><span class="inputTitle"><span class="warning">*</span>新密码:</span><input class="isInput newLpwd" type="password"/></div>
  <div><span class="inputTitle"><span class="warning">*</span>确认新密码:</span><input class="isInput sureLpwd" type="password"/></div>
  <div @click="LpwdChange">
    <mybtn text="确定" class="btn" @click="LpwdChange" ></mybtn>
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
  import mybtn from ".././button/blackHover.vue";
export default{
  name:"logingPwdChange",
  data:function(){
    return{
      LPwdList: [],
      dialogVisible: false,
      dialogVisible2: false
    }
  },
  components:{
    mybtn:mybtn
  },
  methods: {
    LpwdChange:function(){
      var that=this;
      var oinput1=document.getElementsByClassName('oldLpwd')[0];
      var oldLpwd=oinput1.value;
      var oinput2=document.getElementsByClassName('newLpwd')[0];
      var newLpwd=oinput2.value;
      var oinput3=document.getElementsByClassName('sureLpwd')[0];
      var sureLpwd=oinput3.value;
      this.$axios.post(this.$api.user.LpwdChange,{
          oldLpwd:oldLpwd,newLpwd:newLpwd,sureLpwd:sureLpwd},{
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
          that.LPwdList=response.data;
          console.log(12313);
          console.log(response);
          console.log(response.data.code);
          if(response.data.code==200){
            that.$router.push("/Personal/LpwdChangeSucceed");
          }else if(response.data.code==400){
that.dialogVisible=true
          }else if(response.data.code==500){
            that.dialogVisible2=true
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

*{
  color:@fontblack;
}
.warning{
  color: @warningred;
}
  .inputTitle{
    display: inline-block;
    width: 100px;
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
  margin-top: 40px;
}
.btn{
  margin-top: 100px!important;
}
  .first{
    margin-top: 100px!important;
  }

</style>
