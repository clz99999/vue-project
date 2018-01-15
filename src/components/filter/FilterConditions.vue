<template>
  <div id="filter">
    <ul>
      <li>性别 <span class="fa fa-angle-down"></span>
        <ul>
          <li> <span class="fa fa-square-o"></span>女士</li>
          <li> <span class="fa fa-square-o"></span>男士</li>
          <li> <span class="fa fa-square-o"></span>所有</li>
        </ul>
      </li>
      <li>边框 <span class="fa fa-angle-down"></span>
        <ul>
          <li> <span class="fa fa-square-o"></span>半框</li>
          <li> <span class="fa fa-square-o"></span>全框</li>
          <li> <span class="fa fa-square-o"></span>所有</li>
        </ul>
      </li>
      <li>材质 <span class="fa fa-angle-down"></span>
        <ul>
          <li> <span class="fa fa-square-o"></span>板材</li>
          <li> <span class="fa fa-square-o"></span>金属</li>
          <li> <span class="fa fa-square-o"></span>TR</li>
          <li> <span class="fa fa-square-o"></span>PC</li>
          <li> <span class="fa fa-square-o"></span>所有</li>
        </ul>
      </li>
      <li>颜色 <span class="fa fa-angle-down"></span>
        <ul>
          <li> <span class="fa fa-square-o"></span>黑</li>
          <li> <span class="fa fa-square-o"></span>白</li>
          <li> <span class="fa fa-square-o"></span>蓝</li>
          <li> <span class="fa fa-square-o"></span>绿</li>
          <li> <span class="fa fa-square-o"></span>红</li>
          <li> <span class="fa fa-square-o"></span>所有</li>
        </ul>
      </li>
      <li>品牌 <span class="fa fa-angle-down"></span>
        <ul>
          <li> <span class="fa fa-square-o"></span>PASR</li>
          <li> <span class="fa fa-square-o"></span>GUCCI</li>
          <li> <span class="fa fa-square-o"></span>NIKON</li>
          <li> <span class="fa fa-square-o"></span>BOLON</li>
          <li> <span class="fa fa-square-o"></span>LOHO</li>
          <li> <span class="fa fa-square-o"></span>ESSILOR</li>
          <li> <span class="fa fa-square-o"></span>所有</li>
        </ul>
      </li>
      <li>价格 <span class="fa fa-angle-down"></span>
        <ul>
          <li> <span class="fa fa-square-o"></span>100 元以内</li>
          <li> <span class="fa fa-square-o"></span>100~200元</li>
          <li> <span class="fa fa-square-o"></span>200~300元</li>
          <li> <span class="fa fa-square-o"></span>300~400元</li>
          <li> <span class="fa fa-square-o"></span>所有</li>
        </ul>
      </li>
      <li>支持线下试戴 <span class="fa fa-angle-down"></span>
        <ul>
          <li> <span class="fa fa-square-o"></span>是</li>
          <li> <span class="fa fa-square-o"></span>否</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'FilterConditions',
    data:function(){
      return {

      }
    },
    components:{

    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #filter{
    width: 100%;
    height: 54px;
    background-color: @bggrey;
    border-top: 1px solid #c7c7c7;
    border-bottom: 1px solid #c7c7c7;
  }
  #filter>ul{
    width: 66%;
    height: 100%;
    margin: 0 20%;
    /*background-color: red;*/
  }
  #filter>ul>li{
    list-style: none;
    float: left;
    padding-left: 30px;
    padding-right: 30px;
    line-height: 54px;
    text-align: center;
    font-size:@mainfontsize;
    /*background-color: grey;*/
  }
  #filter>ul>li>span{
    margin-left: 10px;
  }
  /*移入效果*/
  #filter>ul>li:hover{
    cursor: pointer;
  }
  #filter>ul>li:hover ul{
    display: block;
  }
  #filter>ul>li>ul{
    display: none;
    width: 130%;
    margin-left: -20%;
    outline: 1px solid #c7c7c7;
    background-color: @bggrey ;
    margin-top: -54px;
  }
  #filter>ul>li>ul:before{
    content: '';
    width: 100%;
    height: 54px;
    background-color:  @bggrey ;
    float: left;
  }
  /*选项*/
  #filter>ul>li>ul>li{
    list-style: none;
    line-height: 30px;
    text-align: left;
    /*outline: 1px solid green;*/
  }
  #filter>ul>li>ul>li>span{
    margin-left: 20px;
    margin-right: 10px;
  }
  /*最后一排选项文字居中*/
  #filter>ul>li:last-child>ul>li{
    text-align: center;
    /*outline: 1px solid red;*/
  }
  #filter>ul>li:last-child>ul>li>span:last-child{
    margin-left: 0;
  }
  /*移入选项效果*/
  #filter>ul>li>ul>li:hover span{
    border: none;
    background-color:@maingold;
  }
</style>
