<template>
      <div id="emailAddress">
        <div   @click="editAddress">
          <zytitle :title="title"></zytitle>
        </div>

        <div id="changeAddress">
          <!-- 选择邮寄地址-->
          <div id="showAdd" v-if="addressCheckedInfo==''">
            <div v-for="item in addressInfo" class="radioDiv">
              <selectAddress  @inputChecked="inputChecked" :addressObj="item" ></selectAddress>
            </div>
            <div id="addAddress">
              <input type="radio" name="add" id="add" @change="addNewAddress"/>
              <label for="add">添加新地址</label>

            </div>
            <div :style="'height:'+newAddressHeight" id="addBox"><zyaddress @addressSave="addressSave"></zyaddress></div>
          </div>
          <div id="showAddress" v-else>
            {{addressCheckedInfo.a_receiver}}<br/>{{addressCheckedInfo.a_phone}}<br/>{{addressCheckedInfo.a_email}}{{addressCheckedInfo.a_postCode}}
            {{addressCheckedInfo.a_province}}<br/>{{addressCheckedInfo.a_city}}<br/>{{addressCheckedInfo.a_region}}<br/>
            {{addressCheckedInfo.a_details}}
          </div>
        </div>
      </div>
</template>

<script type="es6">
  import zyaddress from '../checkout/address'
  import selectAddress from '../checkout/selectAddress'
  import zytitle from '../checkout/title.vue'
  export default{
    name: '',
    data: function () {
      return {
        title:"1.邮寄地址",
        address:[
          {a_id:1,a_receiver:'张三',a_phone:'13354268523',a_postCode:'610123',a_province:'四川省',a_city:'成都市',a_region:"高新区",a_details:'国信安xxxxxxx'},
          {a_id:2,a_receiver:'李四',a_phone:'13354268523',a_postCode:'610123',a_province:'四川省',a_city:'成都市',a_region:"高新区",a_details:'国信安xxxxxxx'},
          {a_id:3,a_receiver:'ccc',a_phone:'13354268523',a_postCode:'610123',a_province:'四川省',a_city:'成都市',a_region:"高新区",a_details:'国信安xxxxxxx'},
          {a_id:4,a_receiver:'ddd',a_phone:'13354268523',a_postCode:'610123',a_province:'四川省',a_city:'成都市',a_region:"高新区",a_details:'国信安xxxxxxx'}
        ],
        addressInfo:[],
        goodsInfo:[],
        addressCheckedInfo:'',
        newAddressHeight:'20px'
      }
    },
    components:{
      zyaddress:zyaddress,
      selectAddress:selectAddress,
      zytitle:zytitle
    },
    methods:{
      addressSave:function(addressInfo){
        this.addressCheckedInfo=addressInfo
        this.$emit('addressSave', addressInfo)
      },
      inputChecked: function (a_id) {
//        this.$emit('inputChecked',inputChecked)
        this.newAddressHeight = '20px';
        this.addressCheckedInfo = this.addressInfo.find(item => item.a_id == a_id)
        //console.log(this.addressCheckedInfo);
        this.$emit('addressSave', this.addressCheckedInfo)
      },
      addNewAddress: function () {
        this.addressCheckedInfo = '';
        this.newAddressHeight = '371px'
      },
      editAddress: function () {
        this.newAddressHeight = '20px'
        this.addressCheckedInfo = '';
      }
    },
    created: function () {
      var _this = this;
      this.$axios.post(this.$api.store.address, 'uid=1').then(function (res) {
        _this.addressInfo = res.data;
        //console.log(_this.addressInfo);
      }).catch(function (err) {
        console.log(err);
      })

    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
    #emailAddress{
       font-size: @mainfontsize;
      border-bottom: 1px dashed;
     }
    #showAdd{
      margin-left: 30px;
    }
    #addBox{
      transition: all 1s;
      overflow: hidden;
    }
  #showAddress{
    width: 90%;
    margin: 20px auto;
  }
</style>
