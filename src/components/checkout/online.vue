<template>
    <div id="online">
      <div id="left">
        <div>
          <emailAddress @addressSave="addressSave"></emailAddress>
        </div>

        <zymessage @messageInfo="messageSave" @editMessage="editMessage" :addressOk="addressOk"></zymessage>
        <payMethod @cardNum="cardNumSave" :payTitle="payTitle" :messageOk="messageOk"></payMethod>
      </div>
      <right id="right"></right>
    </div>
</template>

<script>
    import zyaddress from '../checkout/address'
    import emailAddress from '../checkout/emailAddress'
    import zymessage from '../checkout/message'
    import payMethod from '../checkout/payMethod'
    import right from '../checkout/right.vue'
    export default{
        name: '',
        data: function () {
            return {
                price:'588',
                payTitle:'3.支付方式',
                addressInfo:'',
                addressOk:3,
                messageInfo:'',
                messageOk:0,
                cardNumInfo:''
            }
        },
        components:{
          zyaddress:zyaddress,
          emailAddress:emailAddress,
          zymessage:zymessage,
          payMethod:payMethod,
          right:right
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
            let o_amount = sessionStorage.getItem('totalPrice');   //订单金额
            let o_state = 2;   //已支付
            let o_logistNum = 2;   //物流编号
            let o_underline = 0;  //线上
            let o_deposit = 0;  //没有交押金
            let booking_day = null;  //预约星期
            let booking_time = null;  //预约时间段
            let booking_remark = this.messageInfo;  //留言备注
            this.$axios.post(this.$api.store.orderSave,
              'o_u_id = 2&o_a_id = 1&o_amount = '+o_amount+'&o_state = 2&o_underline = 0' +
              '&o_deposit = 0&booking_remark = '+this.messageInfo+'')
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
    #online{
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
</style>
