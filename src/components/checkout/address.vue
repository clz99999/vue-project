<template>
    <div id="address">
      <div>
        <form action="">
          <input type="text" placeholder="姓名" v-model="addressInfo.a_receiver"/>
          <input type="text" placeholder="电话" v-model="addressInfo.a_phone"/>
          <input type="text" placeholder="邮箱" v-model="addressInfo.a_email"/>
          <input type="text" placeholder="邮编" v-model="addressInfo.a_postCode"/>
          <!--<VDistpicker id="province" :placeholders="placeholders"></VDistpicker>-->
          <div data-toggle="distpicker">
            <select id="province" data-province="---- 选择省 ----" v-model="addressInfo.a_province"></select>
            <select id="city" data-city="---- 选择市 ----" v-model="addressInfo.a_city"></select>
            <select id="county" data-district="---- 选择区 ----" v-model="addressInfo.a_region"></select>
          </div>
          <input type="text" placeholder="详细地址" v-model="addressInfo.details"/>
        </form>
          <div  id="divAddress">
            <blackBig text="确定" id="btnAddress" @btnClick="getVal"></blackBig>
          </div>
      </div>
    </div>
</template>

<script>
//  import VDistpicker from 'v-distpicker'
  import blackBig from '../button/blackBig.vue'
    export default{
        name: '',
        data: function () {
            return {
              addressInfo:{}
            }
        },
      mounted:function(){
//        this.getVal()
  },
        methods:{

          getVal:function(){
            this.$emit('addressSave',this.addressInfo)
          }
        },
        components:{
          blackBig:blackBig,
//          VDistpicker:VDistpicker
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #address{
    width: 700px;
    height: 371px;
  }
  #address>div{
    width: 569px;
    height: 340px;
    margin: 30px auto;
    /*text-align: center;*/
  }
  input,select{
    width: 260px;
    height: 30px;
    border: 0;
    float: left;
    margin-bottom: 30px;
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.49);
  }
  input:nth-child(odd),select:nth-child(odd){
    margin-right: 40px;
  }
  ::-webkit-input-placeholder{
    color: @placeholder;
    text-indent: 0.5em;
    letter-spacing: 0.1em;
  }
  #btnAddress{
    margin-left: 50px;
  }
  #address #divAddress{
    /*height: 35px !important;*/
  }
</style>
