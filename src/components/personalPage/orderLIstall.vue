<template>
  <personContainer>
<div id="orderListall">
  <orderListall_head></orderListall_head>
<div class="orderListall_container">
  <div class="orderListall_container_first">
    <orderListalltime :orderallObj="orderlistallInfo[0]"></orderListalltime>
    <div v-for="item in orderlistallInfo">
    <orderListallfirst  :orderallObj="item"></orderListallfirst>
    </div>
  </div>
  <div class="orderListall_container_second">
    <orderListallsecond :orderallObj="orderlistallInfo[0]"></orderListallsecond>
  </div>
  <div class="orderListall_container_third">
    <orderListallthird :orderallObj="orderlistallInfo[0]"></orderListallthird>
  </div>
</div>
</div>
  </personContainer>
</template>
<script type="javascript">
  import personContainer from "../personal/personContainer"
  import orderListall_head from "../personal/orderListall_head"
  import orderListallfirst from "../personal/orderListallfirst"
  import orderListallsecond from "../personal/orderListallsecond"
  import orderListallthird from "../personal/orderListallthird"
  import orderListalltime from "../personal/orderListalltime"
  export default {
    name:"orderListall",
    data:function () {
      return {
        orderlistallInfo:[]
      }
    },
    components:{
      "personContainer":personContainer,
      "orderListall_head":orderListall_head,
      "orderListallfirst":orderListallfirst,
      "orderListallsecond":orderListallsecond,
      "orderListallthird":orderListallthird,
      "orderListalltime":orderListalltime
    },
    created:function(){
      var that=this;
      this.$axios.post(this.$api.user.orderListall).then(function(res){
        that.orderlistallInfo =  res.data.data;
//        console.log(_this.orderlistallInfo);
      }).catch(function(err){
        console.log(err);
      })

    }
  };

</script>
<style>

  .orderListall_container{
    width:90%;
    box-shadow: 0 1px 4px rgba(0,0,0,.1);
    margin:0 auto;
    font-size: 18px;

  }
  .orderListall_container_first{
    overflow: hidden;
    width:1100px;
    margin:0 auto;
    border-bottom: 1px dashed #b6b7b5;
  }
  .orderListall_container_first_left{
    float: left;
    width:430px;
    margin:0 auto;
  }
  .orderListall_container_second{
    overflow: hidden;
    width:1100px;
    margin:0 auto;
    border-bottom: 1px dashed #b6b7b5;
  }

  .orderListall_container_second_left{
    float: left;
    width:500px;
    margin:0 auto;
    text-align: left;
  }
  .orderListall_container_third_left{
    float: left;
    width:350px;
    margin:0 auto;
    text-align: left;
  }
  .orderListall_container_fourth_left{
    float: left;
    width:350px;
    margin:0 auto;
    text-align: left;
  }
  .o_c_f_l_orderandtime{
    margin:0 auto;
    text-align: left;
  }
  .o_c_f_l_user{
    margin:0 auto;
  }
  .o_c_f_l_pay{
    margin:0 auto;
  }
  .o_c_f_l_img{
    width:400px;
  }
  .o_c_f_l_img img{
    width:100%;
  }
  .strong{
    font-weight: 600;
  }
  .strong_p{
    font-weight: 900;
  }

  .orderListall_container_first_right{
    float: left;
    text-align: left;
    display: inline-block;
    color: rgb(148, 148, 148);
    width:250px;
    margin-left:300px;
  }
  .orderListall_container_third_right{
    float: left;
    width:100px;
    margin-top: 120px;
  }
  .orderListall_container_firstbox{
    margin:0 auto;
    overflow: hidden;
    width:1000px;
  }
  .orderListall_container_thirdbox{
    margin:0 auto;
    overflow: hidden;
    width:1000px;
    padding: 50px;
  }
  .orderListall_container_secondbox{
    margin:0 auto;
    overflow: hidden;
    width:1000px;
    padding: 50px;
  }

  .orderListall_container_third{
    overflow: hidden;
    width:1100px;
    margin:0 auto;
    border-bottom: 1px dashed #b6b7b5;
  }
  .o_c_f_l_button{
    width:100px;
    height:40px;
    background-color: #b79464;
    display:inline-block;
    color: white;
    line-height:40px;
    font-size: 14px;
    text-align: center;
  }
  #orderListalltime_cont{
    padding: 20px;
   }
</style>
