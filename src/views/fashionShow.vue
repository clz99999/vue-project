<!--潮流街拍首页-->
<template>
  <div id="fashion">
    <div id="fashionTitle">
      <h1>潮流街拍</h1>
      <h2>We are the most fashionable ''</h2>
    </div>
    <div class="masonry">
      <div v-for="item in fashionShow">
        <router-link :to="'/StreetBeatDetails/'+item.f_id">
          <tideInfo class="item" :fashionObj="item" :key="1"></tideInfo>
        </router-link>
      </div>
   </div>
  </div>
</template>

<script>
  import tideInfo from '../components/fashion/tideInfo.vue'
  export default {
    name:'',
    components:{
      'tideInfo':tideInfo
    },
    data:function(){
      return {
        fashionShow:[]
      }
    },
    created:function(){
      var _this=this;
      this.$axios.post(this.$api.news.streetList).then(function(res){
        _this.fashionShow = res.data;
        console.log(_this.fashionShow);
      }).catch(function(err){
          console.log(err)
      })
    }
  }
</script>
<style lang="less" scoped>
  @import '../assets/css/common.less';
  /*遮罩*/
  #fashion{
    /*overflow: hidden;*/
    width: 100%;
    height: 100%;
    padding-bottom: 200px;
  }
  #fashion #fashionTitle:before{
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  /*背景图片*/
  #fashion #fashionTitle{
    width: 100%;
    height: 590px;
    position: relative;
    top: 54px ;left: 0;
    z-index: -2;
    text-align: center;
    color: white;
    background: url("../assets/images/fashionImgs/fashionshow.jpg") no-repeat 0 0;
    background-size: cover;
    overflow: hidden;
  }
  #fashion #fashionTitle h1{
    font-size: 36px;
    margin-top: 100px;
  }
  #fashion #fashionTitle h2{
    margin-top: 10px;
  }
  /*街拍排列*/
  #fashion .masonry{
    width: 80%;
    position: relative;
    top: 120px ;
    left: 10%;
    column-count: 3;/*一行显示多少列*/
    column-gap:10px;/*每列之间的间距*/
    cursor: pointer;
  }
  #fashion .masonry .item {
    break-inside: avoid;
    box-sizing: border-box;
    text-decoration: none;
    /*background-color: green;*/
  }

</style>
