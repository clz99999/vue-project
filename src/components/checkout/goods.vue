<template>
      <div id="goods">
        <div id="leftImg">
          <img :src="goodsObj.g_src" alt=""/>
        </div>
        <div id="rightOptions">
          <h4>参数</h4>
          <p>颜色 : <span >{{goodsObj.color}}</span></p>
          <p>数量 : <span>{{goodsObj.s_count}}</span></p>
          <p>价格 : ￥<span>{{goodsObj.g_saleprice}}</span></p>
        </div>
    </div>
</template>

<script>
    export default{
        name: '',
        data: function () {
            return {

            }
        },
        props:['goodsObj']
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  #goods{
    font-size: @mainfontsize;
    letter-spacing: @letterspacing;
    width: 298px;
    height: 121px;
    border: 0;
    overflow: hidden;
    border-bottom: 1px solid @borderGray;
  }
  #goods>#leftImg{
    float: left;
    width: 45%;
  }
  #goods>#leftImg>img{
    width: 90%;
  }
  #goods>#rightOptions{
    float: right;
    width: 54%;
    margin-top: 22px;
  }
  #goods>#rightOptions>p,#goods>#rightOptions>h4{
    margin: 0;
  }
</style>
