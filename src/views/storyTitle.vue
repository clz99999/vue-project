<template>
  <div>
    <div id="storyContent">

    </div>
  </div>
</template>
<script>
  export default{
    name:'',
    data:function(){
      return {
        storyTitle:[]
      }
    },
    mounted:function(){
      var _this=this;
      setTimeout(function(){
        document.getElementById('storyContent').innerHTML=_this.storyTitle[0].s_production;
      },100)
    },
    created:function(){
      var b_id=this.$route.params.b_id;
      var _this=this;
      this.$axios.post(this.$api.news.brandStory,'id='+b_id+'').then(function(res){
        _this.storyTitle = res.data;
      }).catch(function(err){
        console.log(err)
      })
    }
  }
</script>
<style >
  #storyContent{
    text-align: center;
  }
  #storyContent p{
    margin-top: 20px;
  }
  #storyContent img{
    width: 1000px;
  }
</style>
