<template>
  <div id="box">
    <h1></h1>
    <div id="time"></div><!-- 时间-->
    <div id="fashionTitle">

    </div>
  </div>
</template>
<script>

  export  default {
    name:"",
    data:function(){
      return {
        fashionTitle:[]
      }
    },
    mounted:function(){
      var _this=this;
      setTimeout(function(){
        document.getElementsByTagName("h1")[0].innerHTML=_this.fashionTitle[0].f_title;
        document.getElementById("time").innerHTML=_this.fashionTitle[0].f_time;
        document.getElementById('fashionTitle').innerHTML=_this.fashionTitle[0].f_artical;
      },100)
    },
    created:function(){
      var f_id=this.$route.params.f_id;
      var _this=this;
      this.$axios.post(this.$api.news.streetList,'id='+f_id+'').then(function(res){
        _this.fashionTitle = res.data;
//        console.log(_this.fashionTitle);
      }).catch(function(err){
        console.log(err)
      })
    }
  }
</script>
<style>
  #box{
    margin-top: 150px;
  }
  #box h1{
    text-align: center;
  }
  #time{
    margin-top: 10px;
    text-align: center;
  }
  #fashionTitle{
    width: 66%;
    margin: 60px auto;
    line-height: 30px;
  }
  #fashionTitle img{
    width: 1000px;
  }
  #fashionTitle span{
    font-size: 14px;
  }
  #fashionTitle p{
    margin: 20px 0;
  }
</style>

