<!--品牌故事首页-->
<template>
  <div id="brand">
    <div id="brandTitle">
      <h1>品牌故事</h1>
      <h2>Our brand , Our story "</h2>
    </div>
    <div class="content" >
      <div class="brandbag" v-for="item in brandSty" v-if="item.s_img">
        <router-link :to="'/storyTitle/'+item.b_id">
          <brandModule  :brandObj="item"></brandModule>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import brandModule from '../components/story/brandModule.vue'
  export default{
    name: '',
    components:{
      'brandModule':brandModule
    },
    data:function(){
      return {
        brandSty:[]
      }
    },
    created:function(){
      var _this=this;
      this.$axios.post(this.$api.news.brandNew).then(function(res){
        _this.brandSty = res.data;
        console.log(_this.brandSty);
      });
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/common.less";
  #brand{
    /*overflow: hidden;*/
  }
  /*遮罩*/
  #brand #brandTitle:before{
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;left: 0;
    z-index: -1;
  }
  /*背景图片*/
   #brandTitle{
    width: 100%;
    height: 590px;
    position: relative;
    top: 54px ;left: 0;
    z-index: -2;
    text-align: center;
    color: white;
    background: url("../assets/images/brandImgs/brandstory.jpg") no-repeat 0 60%;
    background-size: cover;
    overflow: hidden;
  }
  #brand #brandTitle h1{
    font-size: 36px;
    margin-top: 100px;
  }
  #brand #brandTitle h2{
    margin-top: 10px;
  }

  /*品牌排列*/
  /*#brand .content{*/
    /*width: 80%;*/
    /*position: relative;*/
    /*top: 154px ;left: 10%;*/
    /*display: flex;*/
    /*justify-content: space-between;*/
  /*}*/
  /*#brand .content2{*/
    /*top: 244px;*/
  /*}*/
  /*#brand .content3{*/
    /*top: 334px;*/
  /*}*/
  /*#brand  .footer{*/
    /*position: relative;*/
    /*top: 420px;left: 0;*/
  /*}*/
  .content{
    overflow: hidden;
    width: @pagewidth;
    margin: 100px auto;
  }
  .brandbag{
    float:left;
    margin: 20px;
  }
</style>
