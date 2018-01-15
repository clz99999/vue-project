<template>
    <div id="selectAddress">
      <input type="radio" name="add" @change="select($event)" :id="addressObj.a_id"/>
      <label :for="addressObj.a_id">{{addressObj.a_receiver}}，{{addressObj.a_phone}},{{addressObj.a_postCode}},{{addressObj.a_province}}，{{addressObj.a_city}}，{{addressObj.a_region}}，{{addressObj.a_details}}</label>
    </div>
</template>

<script>
    export default{
        name: '',
        data: function () {
            return {

            }
        },
      props:['addressObj'],
      methods:{
        select:function(e){
          var inputChecked= e.target.id;
          this.$emit('inputChecked',inputChecked)
        }
      }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #selectAddress{
    font-size: @mainfontsize;
  }
</style>
