<template>
  <div class="myCollect-box">
    <div class="myCollect-content">
      <div class="myCollect-del" :sid=myCollectData.c_id @click="DelMyCollect()">X</div>
      <div class="myCollect-divImg">
        <img :src="'/cms'+myCollectData.g_src">
      </div>
      <p>款式：{{myCollectData.g_name}}</p>
      <p>价格：￥<b>{{myCollectData.g_saleprice}}</b></p>
      <div class="myCollect-recommend">
        <p>
          <el-rate
            v-model="myCollectData.g_outerWidth"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points">
          </el-rate>
        </p>
        <p class="myCollect-rac-span">
          <span>材质：{{myCollectData.material}}</span>
          <span>风格：{{myCollectData.style}}</span>
          <span>框型：{{myCollectData.frame}}</span>
        </p>
      </div>
      <div class="myCollect-divBox">
        <myCollectButtonTry class="myCollectButtonTry" text="试戴"></myCollectButtonTry>
        <myCollectButtonLook class="myCollectButtonLook" text="查看"></myCollectButtonLook>
      </div>
    </div>
  </div>
</template>

<script>
  import myCollectButtonTry from "../button/blackHover"
  import myCollectButtonLook from "../button/goldHover"
  export default{
    name: 'myCollect',
    components:{//2.注册组件
      'myCollectButtonTry':myCollectButtonTry,
      'myCollectButtonLook':myCollectButtonLook
    },
    props:{
      myCollectData:{
        type:Object,
        required:true
      }
    },
    methods:{
      DelMyCollect:function(){
        //触发父组件的delPageMyCollect事件
        this.$emit('delPageMyCollect');
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/common.less";

  .myCollect-content{
    width: 40%;
    box-shadow: @clzBorder;
    font-size: @mainfontsize;
    border-top: 1px rgba(0, 0, 0, 0.06) solid;
    border-left: 1px rgba(0, 0, 0, 0.07) solid;
    background-color: white;
    color: @fontblack;
    float: left;
    margin: 15px 4% ;
    text-align: center;

  }
  .myCollect-content:hover{
    box-shadow: 7px 7px 7px rgba(205,206,204,0.7);
    transition: all 0.3s;
  }
  .myCollect-del{
    float: right;
    margin: 10px 10px 0 0;
    cursor: pointer;
    font-size: 25px;
    color: rgba(26, 26, 26, 0.5);
  }
  .myCollect-divImg{
    width: 95%;
    margin: auto;
    clear: both;
    height: 200px;
  }
  .myCollect-divImg img{
    width: 100%;
    height: 100%;
  }
  .myCollect-recommend{
    margin: auto;
    width: 95%;
    border-bottom: @clzXuLine;
    border-top: @clzXuLine;
  }
  .myCollect-recommend p:first-child{
    text-align: left;
  }

  .myCollect-rac-span>span:first-child{
    margin-right: 50px;
  }

  .myCollect-rac-span>span:nth-child(2){
    margin-right: 50px;
  }

  .myCollect-divBox{
    overflow: hidden;
  }
  .myCollect-divBox button:first-child{
    margin: 20px 20px 15px 0;
    width: 120px;
  }
  .myCollect-divBox button:last-child{
    margin: 20px 0 15px 20px;
    width: 120px;
  }
  .myCollect-divBox>.myCollectButtonTry{
    float: left;
  }
  .myCollect-divBox>.myCollectButtonLook{
    float: right;
    margin-right: 20px;
  }
</style>
