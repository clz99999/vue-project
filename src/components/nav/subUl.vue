<template>
  <div id="subUl">
    <ul>
      <li>
        <div>
          <p><router-link :to="'/'+subText1">{{man}}</router-link></p>
          <p><router-link :to="'/'+subText2">{{woman}}</router-link></p>
          <p><router-link :to="'/'+subText3">{{all}}</router-link></p>
        </div>
      </li>
      <li>
        <img :src="firstImg" alt=""/>
        <title1 class="navTitle" :text="one"></title1>
      </li>
      <li>
        <img :src="secondImg" alt=""/>
        <title1 class="navTitle" :text="two"></title1>
      </li>
      <li v-if="thirdImg">
        <img :src="thirdImg" alt=""/>
        <title1 class="navTitle" :text="three"></title1>
      </li>
    </ul>
  </div>
</template>

<script>
  import title from '../nav/title.vue'
  export default {
    name: 'subUl',
    components:{
      'title1':title
    },
    data :function() {
      return {
      }
    },
    props:[
      'man','woman','all','firstImg','secondImg','thirdImg','one','two','three','subText1','subText2','subText3'
    ]
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  /*统一样式*/
  #subUl ul li{
    list-style: none;
    float: left;
    position: relative;
  }
  /*子菜单大小*/
  #subUl{
    display: none;
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    background-color: @bgwhite;
    /*background-color: red;*/
  }
  /*分类标签*/
  #subUl ul li:first-child{
    width: 80px;
    height: 160px;
    line-height: 30px;
    margin-top: 20px;
    margin-left: 220px;
    border-right:1px solid darkgray ;
    overflow: hidden;
    /*background-color: green;*/
  }
  #subUl ul li:first-child>div{
      margin-top: 30px;
  }
  /*子菜单移入效果*/
  #subUl ul li:first-child>div>p>a:hover{
    color: @maingold;
  }
  /*三张图片*/
  #subUl ul li:first-child~li{
    width: 280px;
    height: 156px;
    margin-left: 20px;
    margin-top: 20px;
    border: none;
    overflow: hidden;
  }
  #subUl ul li:first-child~li>img{
    width: 280px;
    height: 156px;
    transition: all .3s linear;
  }
  #subUl ul li:first-child~li:hover img{
    transform: scale(1.1,1.1);
  }
  #subUl .navTitle{
    position: absolute;
    right: 0;bottom: 25px;
    color: #8a8a8a;
    text-align: center;
  }
</style>
