<template>
  <div>
    <div class="left-container">
    <lyzImage></lyzImage>
  </div>
  <div class="right-container" id="right-container">
    <lyzIntroduce :introObj="introInfo[0]"></lyzIntroduce>
    <lyzDynamic @learnmore="learnmore"></lyzDynamic>
  </div>

  <lyzRecommend></lyzRecommend>
    <div v-if="Learnmore==1">
      <lyzLearnmore @closeLearnmore="closeLearnmore"></lyzLearnmore>
    </div>

  </div>
  </template>

<script>
  import lyzRecommend from "../components/lyzRecommend"
  import lyzIntroduce from "../components/lyzIntroduce"
  import lyzShare from "../components/lyzShare"
  import lyzImage from "../components/lyzImage"
  import lyzDynamic from "../components/lyzDynamic"
  import lyzLearnmore from "../components/lyzLearnmore"

  //注册组件
  export default {
    name: 'buy',
    data:function(){
      return {
        Learnmore:0,
        introInfo:[],

      }
    },
    components:{//2.注册组件
      "lyzRecommend":lyzRecommend,
      "lyzIntroduce":lyzIntroduce,
      "lyzShare":lyzShare,
      "lyzImage":lyzImage,
      "lyzDynamic":lyzDynamic,
      "lyzLearnmore":lyzLearnmore

    },
    mounted:function(){
      this.lyzhaha()
    },
    methods:{
      learnmore:function(){
        this.Learnmore=1;
      },
      closeLearnmore:function(){
        this.Learnmore=0;
      },
      lyzright:function() {
        var that=this;
        var oDiv=document.getElementById("dynamic");
        var oBt=oDiv.getElementsByTagName("span");
        var aNav=oDiv.getElementsByTagName("nav");
        var share = document.getElementById("share");

        for (var i=0;i<aNav.length;i++){
          oBt[i].index=i;
          oBt[i].onclick=function(){
            that.isShow=this.index;
            for (var i=0;i<aNav.length;i++){
              oBt[i].className="";
              aNav[i].style.display="none";
            }
            this.className="active";
            aNav[this.index].style.display='block'

          }
        }
      },
      lyzhaha:function(){
        var right=document.getElementById("right-container");
        window.onscroll=function(){
          if(scrollY>100){
            right.className="";
            right.className="right-container-one";
          }
          if(scrollY<100){

            right.className="";
            right.className="right-container";
          }
          if(scrollY>1700){
            console.log("111111111",scrollY);
            right.className="";
            right.className="right-container-two";
          }

        }

      }
    },
    created:function(){
      var _this=this;
      let g_id=5;
      this.$axios.post(this.$api.store.intro,'g_id='+g_id).then(function(res){
        _this.introInfo =  res.data.data;
        console.log("2222222222222222");
        console.log(_this.introInfo);
      }).catch(function(err){
        console.log(err);
      })


    }
    }
</script>

<style>

  .right-container{
    position: relative;
    width: 440px;
    float: left;
    margin-left: 3%;
    margin-top: 2%;
  }
  .right-container-one{
    position: fixed;
    left:61%;
    top:-100px;
    width: 440px;
  }
  .right-container-two{
    position:static;
  width: 440px;
    float: left;
    margin-left: 3%;
    margin-top: 1600px;
  }

  .left-container{
    margin-left: 9%;
    float: left;
    margin-top: 2%;

  }
</style>
