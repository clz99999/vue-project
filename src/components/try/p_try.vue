<template>
  <div class="p_container">
    <div class="p_left">
      <p>G-g glass</p>
      <p>欢迎使用虚拟试戴，在这里你可以选择喜欢的模特，或者上传自己的头像进行试戴眼镜。</p>
      <p>试戴完成后还可以保存试戴效果，以便与其他试戴图片进行比较。</p>
      <p>使用头像来源：<br>1、选择模特<br>2、自定义上传</p>
    </div>
    <div class="p_right">
      <div class="p_con">
        <p>上传您的照片</p>
        <div class="p_change">

          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus  avatar-uploader-icon"></i>
          </el-upload>

        </div>
        <div class="p_imgs">
          <ul>
            <li v-for="item in list">
              <img v-bind:src="item.src" @click="p_getsrc($event)">
            </li>
          </ul>
        </div>
      </div>
      <ul>
        <li @click="p_choice()" class="p_li1">选择模特</li>
        <li @click="p_upimage()" class="p_li2" >上传头像<input type="file" name="update"></li>
        <li @click="p_saveimgs()" class="p_li3">保存试戴</li>
        <li @click="p_contrast()" class="p_li4">效果对比</li>
      </ul>

    </div>
  </div>
</template>

<script>
  import '../../assets/js/jquery.js'
  export default {
    name: '',
    data () {
      return {
          list:[
            {src:"src/assets/images/mote1.jpg"},
            {src:'src/assets/images/mote2.jpg'},
            {src:'src/assets/images/mote3.jpg'}
          ]
        ,
        imageUrl: ''
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      p_choice() {
        $(".p_right>ul>li").css("background-color","white");
        $(".p_right>ul>li").css("color","black");
        $(".p_right>ul .p_li1").css("background-color","#404040");
        $(".p_right>ul .p_li1").css("color","white");
        var res = parseInt($(".p_imgs").css("top"));
        if(res==470){
          $(".p_imgs").css("top","320px")
        }else {
          $(".p_imgs").css("top","470px")
        }

      },
      p_upimage() {
        $(".p_right>ul>li").css("background-color","white");
        $(".p_right>ul>li").css("color","black");
        $(".p_right>ul .p_li2").css("background-color","#404040");
        $(".p_right>ul .p_li2").css("color","white");
      },
      p_saveimgs() {
        $(".p_right>ul>li").css("background-color","white");
        $(".p_right>ul>li").css("color","black");
        $(".p_right>ul .p_li3").css("background-color","#404040");
        $(".p_right>ul .p_li3").css("color","white");
      },
      p_contrast() {
        $(".p_right>ul>li").css("background-color","white");
        $(".p_right>ul>li").css("color","black");
        $(".p_right>ul .p_li4").css("background-color","#404040");
        $(".p_right>ul .p_li4").css("color","white");
      },
      p_getsrc(e) {
        $(".p_right .p_con .p_change").html("");
        var imgsrc = e.target.src;
        var img = "<img src='"+imgsrc+"' alt=''/>";
        $(".p_right .p_con .p_change").append(img);
        $(".p_right .p_con .p_change img").css({"height":"470px","position":"absolute","left":"-30px"});
      }
    }
  }
</script>

<style scoped>
  .p_container{
    width: 660px;
    height: 550px;
    float: left;
    border: 1px solid #F6EFEF;
  }
  /*左边*/
  .p_container .p_left{
    width: 170px;
    height: 550px;
    overflow: hidden;
    float: left;
    background-color: #404040;
    color: white;
  }
  .p_left p:nth-child(1){
    font-size: 12px;
    width: 60px;
    margin: 15px 0px 0px 100px;
  }
  .p_left p:nth-child(2){
    font-size: 14px;
    width: 110px;
    display: block;
    text-align: left;
    margin:50px 0px 0px 35px;
    line-height: 20px;
  }
  .p_left p:nth-child(3){
    font-size: 14px;
    width: 110px;
    display: block;
    text-align: left;
    margin:40px 0px 0px 35px;
    line-height: 20px;
  }
  .p_left p:nth-child(4){
    font-size: 14px;
    width: 110px;
    display: block;
    text-align: left;
    margin:40px 0px 0px 35px;
    line-height: 40px;
  }
  /*右*/
  .p_container .p_right{
    width: 490px;
    height: 650px;
    float: right;
    overflow: hidden;
  }
  .p_right .p_con{
    width: 380px;
    height: 470px;
    overflow: hidden;
    border: 1px dashed #959595;
    margin: 20px 0 0 45px;
    position: relative;
  }
  .p_right .p_con .p_change{
    width: 380px;
    height: 470px;
  }
  .p_right .p_con p{
    height: 20px;
    color: #B8B8B8;
    font-size: 18px;
    position: absolute;
    z-index: -2;
    margin: auto 0;
    left:0px;
    right: 0px;
    top:0px;
    bottom: 0px;
  }
  .p_right>ul{
    width: 480px;
    margin-left: 43px;
    margin-top: 10px;
  }
  .p_right>ul>li{
    list-style-type: none;
    width: 75px;
    height: 28px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid #959595;
    float: left;
    margin-right: 26px;
    line-height: 30px;
  }
  .p_right>ul>li:nth-child(4){
    margin-right: 0px;
  }
  .p_right .p_imgs{
    width: 380px;
    height: 150px;
    position: absolute;
    z-index: 20;
    top: 470px;
    transition: all 0.3s linear;
  }
  .p_right .p_imgs>ul{
    width: 380px;
    height: 150px;
    margin: 0px;
    padding: 0px;
  }
  .p_right .p_imgs>ul>li{
    list-style-type: none;
    width: 126.5px;
    height: 140px;
    float: left;
    background-color: #00A489;
  }
  .p_right .p_imgs>ul>li img{
    width: 126.5px;
    height: 150px;
    cursor: pointer;
  }

  /*上传按钮美化*/
  .p_li2 {
    position: relative;
    display: inline-block;
    overflow: hidden;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }
  .p_li2 input {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
  /*上传按钮美化end*/

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
