<template>
  <div id="message">
    <div @click="editMessage">
      <zytitle :title="title"></zytitle>
    </div>

    <div v-if="addressOk==1" id="messageDiv">
    <!--<div id="messageDiv">-->
        <textarea v-model="messageInfo" name="message" id="txtMessage" placeholder="写下你想说的话...." cols="62" rows="5">
        </textarea>
      <blackBig id="btnMessage" text="完成" @btnClick="getMessage"></blackBig>
    </div>
    <div id="showMessage" v-if="addressOk==0">
        <span>留言：</span>{{messageInfo}}
    </div>
  </div>
</template>

<script>
  import zytitle from '../checkout/title'
  import blackBig from '../button/blackBig.vue'
  export default{
    name: '',
    data: function () {
      return {
        title:"2.留言",
        messageInfo:'',
//        addressOk:2,
//        messageChecked:'',
      }
    },
    methods:{
      getMessage:function(){
//        this.addressOk= 0;
//        this.messageChecked = this.messageInfo
        this.$emit('messageInfo',this.messageInfo)
      },
      editMessage:function(){
        this.$emit('editMessage')
        this.messageChecked='';
//        this.addressOk=1
      }
    },
    components:{
      zytitle:zytitle,
      blackBig:blackBig
    },
    props:['addressOk','messageOk']
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #message{
    text-align: center;
    font-size: @mainfontsize;
    border-bottom: 1px dashed;
    padding-bottom: 50px;
    letter-spacing: @letterspacing;
  }
  #btnMessage{
    margin: 20px 0;
  }
  textarea{
    box-shadow: 2px 2px 10px 3px #b5b5b5;
    border: 0;
    outline: none;
    resize: none;
  }
  textarea::-webkit-input-placeholder{
    color: @placeholder;
    text-indent: 0.5em;
    letter-spacing: 0.1em;
  }
  #messageDiv{
    overflow: hidden;
  }
</style>
