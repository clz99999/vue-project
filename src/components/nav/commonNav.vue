<template>
  <div id="myNav">
      <nav>
        <!--LOGO-->

          <h1>
            <router-link to="/">
            <span>G</span>-g <span>glasses</span>
          </router-link>
          </h1>


        <!--导航菜单-->
        <ul class="sub">
          <li>
            光学镜
            <subUl class="subUL" man='男士' woman='女士' all='所有' :firstImg="firstImg" :secondImg="secondImg" :thirdImg="thirdImg" :one="oneGlass" :two="twoGlass" :three="threeGlass" subText1="ManSun" subText2="WomanSun" subText3="AllSun"></subUl>
          </li>
          <li>
            太阳镜
            <subUl class="subUL"  man='男士' woman='女士' all='所有' :firstImg="firstImgSun" :secondImg="secondImgSun" :thirdImg="thirdImgSun" :one="sunGlass1" :two="sunGlass2" :three="sunGlass3" subText1="ManSun" subText2="WomanSun" subText3="AllSun"></subUl>
          </li>
          <li>
            眼镜试戴
            <subUl class="subUL" man='线上试戴' woman='线下试戴' :firstImg="online" :secondImg="underline" :one="online1" :two="underline1" subText1="onlineTryon" subText2="OfflineTryon"></subUl>
          </li>
          <li>
            潮流资讯
            <subUl class="subUL" man='潮流街拍' woman='品牌故事' :firstImg="fashion" :secondImg="story" :one="fashion1" :two="story1" subText1="fashionShow" subText2="brandStory"></subUl>
          </li>
          <router-link to="/aboutus">
            <li>
            关于我们
          </li>
          </router-link>
        </ul>
        <!--登录注册-->
        <ul class="login">
          <li>
            <input @focus="search" @blur='leave' class="searchBtn" type="text" placeholder="Search"/>
            <span class="fa fa-search"></span>
          </li>
          <div v-if=!name><router-link to="/login"><li>登录/注册</li></router-link></div>
          <div v-else><router-link  to="/Personal"><li><span class="loginName">{{name}}</span> <router-link to="/login"><span class="fa fa-mail-reply exit" title="退出登录" @click="clearName"></span></router-link></li></router-link></div>
          <router-link to="/personal/pageMyCollect?pname=> 我的收藏"><li>
            <span class="fa fa-heart-o"></span>
          </li>
          </router-link>
          <router-link to="/Cart">
          <li>
            <span class="fa fa-shopping-bag"></span>
          </li>
          </router-link>
        </ul>
      </nav>
  </div>
</template>

<script>
  import subUl from '../nav/subUl.vue'
  export default {
    name: 'commonNav',
    components:{
      'subUl':subUl
    },
    created:function(){
      this.getname()
    },
    data:function(){
      return {
        firstImg:'src/assets/images/p1.jpg',
        secondImg:'src/assets/images/p2.jpg',
        thirdImg:'src/assets/images/p3.jpg',
        firstImgSun:'src/assets/images/sun1.jpg',
        secondImgSun:'src/assets/images/sun2.jpg',
        thirdImgSun:'src/assets/images/sun3.jpg',
        online:'src/assets/images/j1.jpg',
        underline:'src/assets/images/j2.jpg',
        fashion:'src/assets/images/1.jpg',
        story:'src/assets/images/4.jpg',
        oneGlass:'斑斓灰 " ',
        twoGlass:'透宝蓝 " ',
        threeGlass:'俏佳人 " ',
        sunGlass1:'冰灵粉 " ',
        sunGlass2:'熏衣紫 " ',
        sunGlass3:'极夜黑 " ',
        online1:'线上试戴 " ',
        underline1:'线下试戴 " ',
        fashion1:'潮流街拍 " ',
        story1:'品牌故事 " ',
        name:'',
        state:true

      }
    },
    methods:{
      getname:function(){
        this.name=sessionStorage.getItem('userName')
      },
      search:function(){
        var a=document.getElementsByClassName("searchBtn")[0];
        a.style.width="100px";
//        console.log(a);
      },
      leave:function(){
        var a=document.getElementsByClassName("searchBtn")[0];
        a.style.width="64px";
      },
      clearName:function(){
        sessionStorage.removeItem('userName');
        localStorage.removeItem('userId');
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  /*导航在最上*/
  #myNav{
    position: relative;
    z-index: 555;
  }
  /*LI标签公共样式*/
  #myNav ul li{
    list-style: none;
    float: left;
    font-size: @mainfontsize;
  }

  #myNav ul>li:hover{
    cursor: pointer;
    color: @maingold;
  }
  /*导航的大小*/
  #myNav>nav{
    width: 100%;
    height: 50px;
    background-color: @bgwhite;
    box-shadow: 0 2px 4px 2px rgba(225,225,225,.2);
    position: fixed;
  }
  /*LOGO的大小*/
  #myNav>nav>h1{
    float: left;
    width: 22%;
    height: 50px;
    color: @fontblack;
    line-height: 50px;
    text-align: center;
    font-size: 25px;
  }
  /*LOGO的颜色字体*/
  #myNav>nav>h1>a>span:first-child{
    color: @maingold;
    font-weight: bold;
  }
  #myNav>nav>h1>a>span:last-child{
    font-weight: 100;
  }
  /*导航菜单*/
  #myNav>nav>ul{
    float: left;
    /*outline: 1px solid red;*/
  }
  /*主菜单*/
  #myNav .sub{
    width: 45%;
    height: 100%;
    line-height: 50px;
  }
  #myNav .sub>li{
    width: 110px;
    height: 50px;
  }
  /*移入显示子菜单*/
  #myNav .sub>li:hover .subUL{
    display: block;
    color: @fontblack;
  }
  /*登录菜单*/
  #myNav .login{
    width: 24%;
    height: 100%;
    margin-left: 110px;
    line-height: 50px;
  }
  #myNav .login li,.exit{
    color: #b8b8b8;
    margin-left: 30px;
    position: relative;
  }
  #myNav .login>li:hover,
  .exit:hover {
    color: @mainblue;
  }
  #myNav .login .searchBtn{
    width: 64px;
    outline: none;
    border: none;
    border-bottom: 1px solid #d1d1d1;
    transition: all .3s linear;
    position: absolute;
    top: 18px;right: 20px;
  }
  #myNav .login .searchBtn::-webkit-input-placeholder{
    color: #d1d1d1;
    font-size: 12px;
  }
.loginName{
  color: @mainblue;
}
</style>
