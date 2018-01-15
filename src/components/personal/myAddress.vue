<template>
  <div class="myAddress-box">
    <p class="myAddress-icon">
    <span class="span-icon"></span>
    <i class="el-icon-edit-outline" @click="updateMyAddress()"></i>
    <i class="el-icon-delete" @click="delMyAddress()"></i>
    </p>
    <h3>{{myAddressReceiverData.a_receiver}}&nbsp;&nbsp;<span>{{myAddressReceiverData.a_phone}}</span></h3>
    <p>{{myAddressReceiverData.a_province}}&nbsp;&nbsp;<span>{{myAddressReceiverData.a_city}}&nbsp;&nbsp;</span><span>{{myAddressReceiverData.a_region}}</span></p>
    <p>{{myAddressReceiverData.a_details}}</p>
  </div>
</template>

<script>
  export default{
    name: 'myAddress',
    props: {
      myAddressReceiverData:{
        type:Object,
        required:true
      }
    },
    methods: {
      delMyAddress: function () {
        this.$emit('delPageMyAddress');
      },
      updateMyAddress:function(){
        this.$emit('updatePageMyAddress');
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/common.less";

  .myAddress-box {
    height: 120px;
    width: 283px;
    border: @clzXuLine;
    font-size: @mainfontsize;
    padding: 10px;
    color: @fontblack;
    float: left;
    background-color: white;
    margin: 10px;
    text-align: center;
  }

  .myAddress-box:hover {
    border: 1px dashed rgba(0, 0, 0, 0.3);
    transition: all 1s;
  }

  .myAddress-icon {
    width: 100%;
    float: right;
    margin: 0;
  }

  .myAddress-icon > .el-icon-edit-outline {
    margin-right: 10px;
    float: right;
  }
  .myAddress-icon > .el-icon-delete{
    float: right;
    margin-right: 10px;
  }
  .myAddress-icon span:first-child{
    float: left;
    margin-left: 10px;
    color: rgba(0, 128, 0, 0.55);
  }

  .myAddress-icon > .el-icon-edit-outline:hover {
    color: @maingold;
    transition: all 0.2s;
  }

  .myAddress-icon > .el-icon-delete:hover {
    color: @maingold;
    transition: all 0.2s;
  }
</style>
