<template>
  <div id="offline">
    <div id="left">
      <div>
        <emailAddress @addressSave="addressSave"></emailAddress>
      </div>
      <div>
        <zymessage @messageInfo="messageSave" @editMessage="editMessage" :addressOk="addressOk"></zymessage>
      </div>
      <div id="orderTime">
        <zytitle :title="title"></zytitle>
        <div>
          <select id="day" v-model="timeInfo.week">
            <option value="0" selected="selected">----请选择星期----</option>
            <option value="1">周一</option>
            <option value="2">周二</option>
            <option value="3">周三</option>
            <option value="4">周四</option>
            <option value="5">周五</option>
            <option value="6">周六</option>
            <option value="7">周日</option>
          </select>
          <select id="period" v-model="timeInfo.time ">
            <option value="0" selected="selected">----请选择时间段----</option>
            <option value="1">8:00-10:00</option>
            <option value="2">10:00-12:00</option>
            <option value="3">14:00-16:00</option>
            <option value="4">16:00-18:00</option>
          </select>
        </div>

      </div>
      <div>
        <payMethod @cardNum="cardNumSave" :messageOk="messageOk" :payTitle="payTitle"></payMethod>
      </div>

    </div>
    <right id="right" ></right>
  </div>
</template>

<script>
  import zyaddress from '../checkout/address'
  import emailAddress from '../checkout/emailAddress'
  import zymessage from '../checkout/message'
  import payMethod from '../checkout/payMethod'
  import right from '../checkout/right.vue'
  import zytitle from '../checkout/title.vue'
  export default{
    name: '',
    data: function () {
      return {
        price:'588',
        title:"3.预约时间",
        payTitle:"4.支付方式",
        addressInfo:'',
        addressOk:3,
        messageInfo:'',
        messageOk:0,
        cardNumInfo:'',
        timeInfo:{}
      }
    },
    components:{
      zyaddress:zyaddress,
      emailAddress:emailAddress,
      zymessage:zymessage,
      payMethod:payMethod,
      right:right,
      zytitle:zytitle
    },
    methods:{
      //保存地址信息
      addressSave:function(addressInfo){
        this.addressInfo=addressInfo;
        this.addressOk=1;
      },
      //保存留言信息
      messageSave:function(messageInfo){
        this.messageInfo=messageInfo;
        this.addressOk=0;
        this.messageOk=1;
      },
      //保存卡号信息
      cardNumSave:function(cardNumInfo){
        this.cardNumInfo=cardNumInfo;
        let o_u_id = 2;   //用户id
        let o_a_id = 1;   //收货地址id
        let o_num = 2;   //订单编号
        let o_amount =sessionStorage.getItem('totalPrice');   //订单金额
        let o_state = 2;   //已支付
        let o_logistNum = 2;   //物流编号
        let o_underline = 0;  //线上
        let o_deposit = 0;  //没有交押金
        let booking_day = null;  //预约星期
        let booking_time = null;  //预约时间段
        let booking_remark = this.messageInfo;  //留言备注
        this.$axios.post(this.$api.store.orderSave,
          'o_u_id = 2&o_a_id = 1&o_amount = 244&o_state = 2&o_underline = 0' +
          '&o_deposit = 0&booking_remark = this.messageInfo')
          .then(function(data){
            console.log(data)
          }).catch(function(err){
            console.log(err)
          })
      },
      editMessage:function(){
        this.addressOk=1;
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #offline{
    overflow: hidden;
    width: 100%;
  }
  #left{
    width: 60%;
    padding: 10px;
    float: left;
    border: 1px solid @borderGray;
  }
  #right{
    width: 32%;
    float: right;
  }
  select{
    width: 260px;
    height: 30px;
    border: 0;
    margin-bottom: 30px;
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.49);
  }
  select:nth-child(even){
     margin-right: 40px;
   }
  #orderTime{
    text-align: center;
    padding-bottom: 50px;
    border-bottom: 1px dashed;
  }
</style>
