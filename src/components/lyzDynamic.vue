<template>
  <div>
  <div id="dynamic">
    <p id="dyn-sxp">
      <span class="active" id="span1">说明</span>
      <span id="span2">详情</span>
      <span id="span3">评论</span>
    </p>
    <nav id="description-container" style="display: block">
      <lyzShuoming></lyzShuoming>
    </nav>
    <nav id="details-container"  style="display: none">

      <lyzXiangqing :detailsObj="detailsInfo[0]"></lyzXiangqing>

    </nav>
    <nav id="comment-container"  style="display: none"><!--评论-->

    <div v-for="item in reviewInfo">
      <lyzPinglun :reviewObj="item"></lyzPinglun>
    </div>
      <el-button type="text" @click="dialogVisible = true" id="readMore">查看所有评论</el-button>

      <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        >
        <div class="allpinglun_cont">
        <div class="allpinglun_head">
          <h1>布里斯托尔</h1>
          <el-rate
            v-model="4.5"
            disabled
            show-score
            text-color="#ff9900"
            score-template=" ">
          </el-rate>
          <div>基于76条评论</div>
        </div>
        <div v-for="item in reviewInfo" id="hahahahah">
          <lyzPinglun :reviewObj="item"></lyzPinglun>
        </div>
  </div>
  </span>
      </el-dialog><!--查看所有评论-->
    </nav>

  </div>
  <div v-if="isShow!=2">
    <lyzSharetwo @learnmore="learnmore"></lyzSharetwo>
    <lyzShare></lyzShare>
  </div>
  </div>
</template>
<script>
  import lyzShare from "../components/lyzShare"
  import lyzSharetwo from "../components/lyzSharetwo"
  import lyzLearnmore from "../components/lyzLearnmore"
  import lyzPinglun from "../components/lyzPinglun"
  import lyzXiangqing from "../components/lyzXiangqing"
  import lyzShuoming from "../components/lyzShuoming"
  export default{
    name:"lyzDynamic",
    data:function () {
      return {
        isShow:0,
        reviewInfo:[],
        detailsInfo:[],
        goodsTotal:[],
        descriptionInfo:[],
        dialogVisible: false


      }
    },
    mounted:function(){
      this.lyztab()
    },
    components:{
      lyzShare:lyzShare,
      lyzSharetwo:lyzSharetwo,
      lyzLearnmore:lyzLearnmore,
      lyzPinglun:lyzPinglun,
      lyzXiangqing:lyzXiangqing,
      lyzShuoming:lyzShuoming
    },
    methods:{
      lyztab:function() {
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
      learnmore:function (){
          this.$emit('learnmore')
      },


    },
    created:function(){
      var _this=this;
      let u_id=26;
      let g_id=1;
      this.$axios.post(this.$api.store.review,'u_id='+u_id).then(function(res){
        _this.reviewInfo =  res.data.data;
      }).catch(function(err){
        console.log(err);
      });
      this.$axios.post(this.$api.store.details,'g_id='+g_id).then(function(res){
        _this.detailsInfo =  res.data.data;
      }).catch(function(err){
        console.log(err);
      });


    }
  }





</script>
<style>
  .v-modal{
    visibility: hidden;
  }
  #dynamic{
    box-shadow:  0 1px 4px rgba(0,0,0,.1);
  }
  #dynamic span.active{
    color: #4ca2be;
  }
  #dyn-sxp{
    text-align: center;
    width:100%;
    padding: 20px 0 0 0;
  }
  #span1{
    font-size: 16px;
    font-weight: 500;
    float: left;
    margin-left:4%;
    cursor: pointer;
  }#span2{
     font-size: 16px;
     font-weight: 500;
       cursor: pointer;

   }#span3{
      font-size: 16px;
      font-weight: 500;
      float: right;
      margin-right: 4%;
      cursor: pointer;
    }

  .det-cont-box{
    padding: 6% 5% 5% 5%;
  }

  .det-cont-cont{
    margin-top: 10px;
  }
  .det-cont-cont p{
    margin-top: 7px;
  }
  .comment-container{
    margin: 0 30px;

  }
  .com-cont-box{
    position: relative;
    padding:4%;
    border-bottom: 1px dotted #dfdfdf;
  }


  #readMore{
    width:92%;
    height:40px;
    background-color: white;
    color: black;
    border:1px solid black;
    display: inline-block;
    text-align: center;
    margin:6% 4%;
    border-radius:0
  }
  #readMore:hover{
    background-color:black;
    color: white;
    cursor: pointer;
  }
  #tab-first{
    float: left;
  }
  #tab-third{
    float: right;
  }
.dyna-color{
  margin-top: 10px;
  color: #adadad;
}
.dyna-user{
  color: #adadad;
}
  .dyna-size{
    margin-top: 5px;
  }
  .dyna-container{
    margin-top: 10px;
  }
  .allpinglun_cont{
    width:80%;
    margin:0 auto;
  }
  #hahahahah .com-cont-box{
    padding:4% 0
  }



</style>
