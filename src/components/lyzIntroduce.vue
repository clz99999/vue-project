<template>
  <div id="intr">
    <h1 id="intr-h1">{{introObj.g_name}}</h1>
    <p id="intr-span">哑光黑色眼镜</p>
    <div class="intr-Maxcolor">
    <span>颜色：</span>
    <p class="intr-bigcolor">
    <div class="intr-color1 on"></div>
      <em class="intr-color-name">灰色条纹</em>

    <div class="intr-color2"></div>
      <em class="intr-color-name">烧焦石英</em>

      </p>
    </div>
      <div class="intr-Maxprice">
        <span>价格：</span>
        <p class="intr-bigprice">
          <span>RMB</span>
          <span>{{introObj.g_saleprice}}</span>
        </p>
      </div>
      <div class="intr-Maxbuy" >
        <el-button type="text" @click="lyzTobuy"id="intr-buy" >加入购物袋</el-button>
        <el-dialog
          title="提示"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
          <span id="lyzandclz">加入购物袋成功</span>
  </span>
        </el-dialog>

        <div class="intr-Maxlove" @click="lyzLove">
              <span :style="'color:'+bgColor" :class="className" id="intr-love"></span>
              <span id="intr-love-span">添加至收藏夹</span>
        </div>
      </div>
  </div>

</template>

<script>
  export default{
    name:"lyzIntroduce",
    data:function(){
      return {
        bgColor:'black',
        className:'fa fa-heart-o',
        centerDialogVisible: false

      }

    },
    methods:{
      lyzLove:function(){
        var haha = document.getElementById("intr-love-span");
        if(this.bgColor=='black'){
          this.className="fa fa-heart";
          this.bgColor='red';
          haha.innerHTML="";
          haha.innerHTML="已添加";
          let id=3;
          let g_id=3;
          this.$axios.post(this.$api.coll.collectadd,'id='+id+'&g_id='+g_id).then(function(res){

            }).catch(function(err){

          })
        }else{
          this.bgColor='black';
          this.className="fa fa-heart-o";
          haha.innerHTML="添加至收藏夹"
          let id=3;
          let g_id=3;
          this.$axios.post(this.$api.coll.collectdel,'id='+id+'&g_id='+g_id).then(function(res){

          }).catch(function(err){

          })
        }

      },
      lyzTobuy:function(){
        this.centerDialogVisible = true;
        let u_id=10;
        let g_id=10;
        this.$axios.post(this.$api.store.tobuy,'u_id='+u_id+'&g_id='+g_id).then(function(res){
          cosole.log(res.data)
        }).catch(function(err){

        })
      }
    },
    props:['introObj']
  }


</script>

<style lang="less">
  @import "../assets/css/common.less";
  @qianhuicolor:#b0b0b0;
  @shenhuicolor:#a3a3a3;
  *{
    margin:0;
    padding:0;
  }
  #intr{
    clear: both;
  }
  #intr-span{
    color:@qianhuicolor;
    font-size:1em;
    margin-top: 5px;
  }
  #intr-h1{
    text-align: left
  }
  .intr-bigcolor{
      margin-top: 10px;
  }
  .intr-bigprice{
    margin-top: 10px;
  }
  .intr-color1{
    border-radius: 50%;
    width:25px;
    height:25px;
    background-image: url("../assets/u=783908680,2688329114&fm=200&gp=0.jpg");
    display: inline-block;
  }
  .intr-color2{
    border-radius: 50%;
    width:25px;
    height:25px;
    background-image: url("../assets/u=1256385374,960927481&fm=27&gp=0.jpg");
    display: inline-block;
  }
  .intr-color-name{
    display: inline-block;
    font-size: 0.9em;
    color:@shenhuicolor;
    margin-left: 5px;
    margin-top: 7px;
    vertical-align: top;
  }
  .on{
    width:26px;
    height:26px;
    border:1px double #aaa;
  }
  #intr-buy{
    width:124px;
    height:34px;
    background-color: @fontblack;
    color:@bgwhite;
    text-align: center;
    font-size: 13px;
    float: left;
    border-radius: 0;
  }
  #intr-buy:hover{
    background-color: @bgwhite;
    color:@fontblack;
    outline:1px solid @fontblack;
    cursor: pointer;
  }

  #intr-love{
    font-size: 20px;
    /*color: red;*/
  }
  .intr-Maxcolor{
    margin-top: 20px;
  }
  .intr-Maxprice{
    margin-top: 20px;
  }
  .intr-Maxbuy{
    margin-top: 30px;
    height: 40px;
  }
  .intr-Maxlove{
    float: left;
    margin-top: 9px;
    margin-left: 30px;
  }
  .intr-Maxlove:hover{
    text-decoration:underline;
    cursor: pointer;
  }

</style>
