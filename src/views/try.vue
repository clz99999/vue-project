<template>
  <div class="container">
    <!--11111111111111111111111111111111111111111111111111111111111111-->
    <section id="instruction">
      <div class="in_left">
        <p>在线试戴</p>
        <p>在线试戴（英文：Myopia glasses）是一种新型的眼镜试戴方式，是G-g glass
          为方便广大用户而研发的专业技术。</p>
        <p>在线试戴又叫虚拟试戴，是属于虚拟镜像的一种，用户可以在试戴页面上传自己的头像，或者自选模特，保持正面朝前的照片，就可以立马预览眼镜戴上后的效果，极大的提高了用户的体验，也让选择眼镜更加的简单，用户的选择也更加的宽广，同时还免去了东奔西跑的麻烦。</p>
        <p>不同的脸型需要选择不同的眼镜，不同的品牌也适合不一样的人群，怎样的合理的去选择属于自己的眼镜，在线试戴就为用户提供了一个绝佳可行的方案，在这里你可以随心所欲的选择自己喜欢的品牌、款式、颜色等等……</p>

      </div>
      <div class="in_right">
        <p>自定义头像使用规范:</p>
        <div class="imgs">
          <img src="../../src/assets/images/u12.png" alt="">
          <ul>
            <li>上传一张您的正面照，<br/>
              保持你的脸水平向前。</li>
            <li>请务必使用没有戴眼<br/>
              镜的照片。</li>
            <li>避免过大幅度的扭转<br/>
              你的头部，保持正面。</li>
          </ul>
        </div>
      </div>
    </section>
    <!--22222222222222222222222222222222222222222222222222222222-->
    <section id="con">
      <p_try></p_try>
      <div class="bra_sel">
          <div class="top">
            <figure class="bar_img">
              <img src="../../src/assets/images/fan2.png" >
              <figcaption @click="modal_show">
                <p>选择您的眼镜</p>
              </figcaption>
            </figure>
          </div>
        <div class="botton">
          <li v-for="item in goods_info">
            <goodsModule :goods_info="item" v-on:parmarChange="getChild"></goodsModule>
          </li>

        </div>
      </div>
    </section>
    <!--=============================section 3=====================================-->
    <section id="modal" v-show="isShow">
      <div class="modal_con">
        <p class="p1" @click="modal_close()"><i class="el-icon-close"></i></p>
        <div class="av">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="pac">
            <el-breadcrumb-item :to="{ path: '/' }">线上试戴</el-breadcrumb-item>
            <el-breadcrumb-item>选择镜架</el-breadcrumb-item>
          </el-breadcrumb>

          <div class="logos">
            <span class="span1" @click="po_left"><i class="el-icon-arrow-left"></i></span>
            <span class="span2" @click="po_right"><i class="el-icon-arrow-right"></i></span>
              <div class="logos_con">
                <ul id="logo_ul">
                  <li v-for="item in mysrc" @click="getId(item)">
                    <logos :mysrc="item" ></logos>
                  </li>
                </ul>
              </div>
          </div>
          <div class="av_nav">
            <ul>
              <li>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    功能<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="nav_click">
                    <el-checkbox  class="nav_child">太阳镜</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">光学镜</el-checkbox>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    性别<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="nav_click">
                    <el-checkbox  class="nav_child">男</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">女</el-checkbox>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    边框<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="nav_click">
                    <el-checkbox  class="nav_child">全框</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">半框</el-checkbox>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    材质<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="nav_click">
                    <el-checkbox  class="nav_child">板材</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">金属</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">TR</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">PC</el-checkbox>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    颜色<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="nav_click">
                    <el-checkbox  class="nav_child">黑</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">白</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">蓝</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">红</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">黄</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">绿</el-checkbox>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    价格<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="nav_click">
                    <el-checkbox  class="nav_child">100元以内</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">100~200元</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">200~300元</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox class="nav_child">300~400元</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">400元以上</el-checkbox>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    支持线下试戴<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="nav_click">
                    <el-checkbox  class="nav_child">是</el-checkbox>
                    <el-dropdown-item></el-dropdown-item>
                    <el-checkbox  class="nav_child">否</el-checkbox>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
            </ul>
          </div>
          <div class="av_goods">
            <span class="span3" @click="goods_left"><i class="el-icon-arrow-left"></i></span>
            <span class="span4" @click="goods_right"><i class="el-icon-arrow-right"></i></span>
              <div class="goods_con">
                <ul>
                  <li v-for="item in mygoods"  @change="dian(item)">
                    <try_goods :mygoods="item" ></try_goods>
                  </li>
                </ul>

              </div>
          </div>
          <div class="save">
            <p>可多选喜欢的款式去试戴，一次最多只能选择6个 </p>
            <el-button type="primary" id="go_try" @click="goTry">选好了,去试戴</el-button>
          </div>
        </div>

      </div>
    </section>
    <!-- ===============================section 4================================-->
    <section id="prompt">
      <p>如何选择合适的眼镜</p>
      <p>选择合适的形状</p>
      <p>脸型决定着镜架的形状，仔细观察你的脸部，看看何处比较高，何处又比较平。选择镜架时候，你应该根据面部的情况反其道而行之。比如脸很圆的人就不适合再戴圆形的眼镜。不过各式各样的镜架你都试一下，或许你能找到令你惊喜的一款。</p>
      <p>在浏览我们的男士眼镜目录时，请考虑以下几点，以帮助您为您选择正确的眼镜架：</p>
      <p>长脸形的人，适合选择宽边、深色、大镜框的眼镜，由于形成了较强烈的横向切割，长脸的直线感被打破，在视觉上会显得脸型片段。没底边、透明、细框、金丝边框架的眼镜不适合长脸形的人。</p>
      <p>短脸型的人，镜框的颜色应该和脸色接近，色彩反差大容易形成脸部被切割的感觉，而使得脸型更短。没有底边镜框在视觉上容易和肤色相容，也不至于使脸的下半部显短。选择细边眼镜和透明、金丝、银丝边眼镜容易和脸型平衡协调，不要戴大镜框眼镜，以避免眼镜在脸上占据太大的空间。</p>
      <p>圆形脸的人，应该避免大镜框、深色镜框和宽边镜框。也不适合戴圆镜框或方正的镜框。因为圆镜框在圆脸上会使脸部出现过多的圆线，方正的镜框会和圆润的脸廓线形成对比，使脸型更圆。</p>

    </section>
    <!--<foot></foot>-->
  </div>

</template>

<style scoped lang="less">
  @import "../assets/css/common.less";
  .container{
    overflow: hidden;
    text-align: center;
    width: 100%;
    /*height: 700px;*/
    font-family: "微软雅黑";
    font-size: @mainfontsize;
    color: @fontblack;
  }
  /*说明*/
  #instruction{
    width: @pagewidth;
    /*height: 400px;*/
    /*border: 1px solid yellow;*/
    margin: auto;
    margin-top: 100px;
    overflow: hidden;
  }
  /*left*/
  #instruction .in_left{
    width: 50%;
    /*height: 400px;*/
    float: left;
    overflow: hidden;
  }
  #instruction .in_left p:nth-child(1){
    font-size: 2em;
    text-align: left;
  }
  #instruction .in_left p:nth-child(2),p:nth-child(3),p:nth-child(4){
    font-size: 1.13em;
    text-align: left;
    width: 96%;
    margin-top: 15px;
    text-align: left;
    line-height: 1.5em;

  }
  /*right*/
  #instruction .in_right{
    width: 38%;
    /*height: 400px;*/
    float: right;
  }
  #instruction .in_right p:nth-child(1){
    font-size: 1.13em;
    text-align: left;
  }
  #instruction .in_right .imgs{
    margin-top: 30px;
    width: 300px;
    height: 240px;
  }
  #instruction .in_right img{
    display: block;
    text-align: left;
    float: left;
  }
  #instruction .in_right ul{
      display: block;
      width: 200px;
      height:240px;
      float: right;
    }
  #instruction .in_right ul li{
    list-style-type: none;
    width: 100%;
    height: 70px;
    text-align: left;
    margin-top: 5px;
    margin-left: 50px;
    padding-top: 10px;
  }
  /*============================section 2================================*/
  #con{
    width: 93%;
    margin-top: 65px;
    overflow: hidden;
  }
  #con .bra_sel{
    width: 100%;
    margin-left: 661px;
  }
  #con .bra_sel .top{
    width: 100%;
    height: 300px;
  }
  #con .bra_sel .top .bar_img img{
    display: block;
    /*width: 700px;*/
    height: 320px;
    margin: 0px;
  }
  #con .bra_sel .top .bar_img{
    position: relative;
    background-color: #eae9e7;
  }
  #con .bra_sel .top .bar_img figcaption{
    width: 780px;
    height: 320px;
    position: absolute;
    cursor: pointer;
    top:0px;
    left:0px;
    background-color:rgba(255,255,255,0.6);
    opacity:0;
    transition: all 0.3s linear;
  }
  #con .bra_sel .top .bar_img figcaption:hover{
    opacity:1;
  }
  #con .bra_sel .top .bar_img figcaption p{
    display: block;
    font-size: 1.8em;
    font-weight: 500;
    margin-top:140px;
    color: @maingold;
  }
  #con .bra_sel .botton{
    width: 700px;
    /*height: 200px;*/
    background-color: red;
  }
  #con .bra_sel .botton li{
    float: left;
    margin-left: 20px;
    margin-right: 50px;
    list-style-type: none;
  }
  /*====================================sec3=====================================================*/
  #modal{
    text-align: ;
    width: 100%;
    height: 850px;
    position: absolute;
    top: 540px;
    background-color: rgba(60,60,60,0.5);
    transition: all 0.3s linear;
    z-index: 99;
  }
  #modal .modal_con{
    margin: auto;
    margin-top: 50px;
    width: 86%;
    height: 770px;
    background-color: @bgwhite;
    overflow: hidden;
  }
  #modal .modal_con .p1{
    display: block;
    width: 20px;
    float: right;
    cursor: pointer;
    margin: 10px 23px 0 0;
    font-size: 1.8em;
    font-weight: 700;
  }
  #modal .modal_con .av{
    margin: auto;
    overflow: hidden;
    margin-top: 50px;
    width: @pagewidth;
    height: @pagewidth;
  }
  #modal .modal_con .av .pac{
    display: block;
    font-size: 1.2em;
    margin: 10px 0 0 10px;
  }
.logos{
    width: 100%;
    height: 110px;
    margin-top:20px;
    /*background-color: #00A489;*/
    position: relative;
  }
  .logos_con{
    width: @pagewidth;
    height: 110px;
    overflow: hidden;
    margin: auto;
    /*background-color: yellow;*/
  }
  .logos_con>ul>li{
    display: block;
    list-style-type: none;
    float: left;
    margin-left: 19px;
  }
  .logos_con>ul{
    height: 110px;
    margin: auto;
    width: 870px;

  }
  .span1{
    position: absolute;
    left: 10px;
    font-size: 3.5em;
    top: 20px;
    /*border: 1px solid red;*/
    cursor: pointer;
  }
  .span2{
    position: absolute;
    right: 10px;
    font-size: 3.5em;
    top: 20px;
    /*border: 1px solid red;*/
    cursor: pointer;
  }
  .av_nav{
    margin: auto;
    width: 740px;
    margin-top: 30px;
    height: 20px;
  }
  .av_nav>ul{
    width: 740px;
    height: 20px;
  }
  .av_nav>ul>li{
    list-style-type: none;
    float: left;
    width: 100px;
    height: 20px;
    cursor: pointer;
  }
  .av_nav>ul>li:last-child{
    width: 120px;
    margin-left: 10px;
  }
  .nav_click{
    padding: 0px 8px 10px 8px;
  }
  .nav_click .nav_child{
    margin-top: 10px;
  }
  .av_goods{
    width: 100%;
    margin-top: 40px;
    height: 350px;
    position: relative;
  }
  .span3{
    position: absolute;
    left: 10px;
    font-size: 3.5em;
    top: 140px;
    /*border: 1px solid red;*/
    cursor: pointer;
  }
  .span4{
    position: absolute;
    right: 10px;
    font-size: 3.5em;
    top: 140px;
    /*border: 1px solid red;*/
    cursor: pointer;
  }
  .goods_con{
    width: @pagewidth;
    margin: auto;
    height: 350px;
    text-align: center;
    /*border: 1px solid indianred;*/
  }
  .goods_con>ul{
    margin: auto;
    width: 860px;
    height: 350px;
  }
  .goods_con>ul>li{
    width: 200px;
    height: 170px;
    list-style-type: none;
    float: left;
    margin-left: 10px;
  }
  .save{
    margin-top: 20px;
    overflow: hidden;
    width: 100%;
    height: 50px;
    position: relative;
  }
  .save p{
    width: 400px;
    height: 30px;
    text-align: left;
    margin-top: 10px;
    margin-left: 30px;
    font-size: 1.15em;
  }
  .save #go_try{
    display: block;
    margin: auto;
    width: 190px;
    height: 30px;
    line-height: 5px;
    float: right;
    outline: none;
    margin-left: 40px;
    position: absolute;
    left: 400px;
    top:7px;
  }
  /*-----------------------------------sec 4------------------------------------------*/
  #prompt{
    margin: auto;
    margin-top: 50px;
    margin-bottom: 100px;
    width: @pagewidth;
    /*height: 300px;*/
    border-top: 1px solid @maingold;
    /*background-color: #2fd6c8;*/
  }
  #prompt p{
    font-size: @mainfontsize;
    text-align: left;
    margin-top: 20px;
  }
  #prompt p:nth-child(1){
    font-weight: 700;
  }
</style>
<script type="es6">
  import p_try from '../components/try/p_try.vue'
  import logos from '../components/try/logos.vue'
  import try_goods from '../components/try/try_goods.vue'
  import goodsModule from '../components/try/goodsModule.vue'
//  import foot from '../foot/foot.vue'
  //显示
  var pagesize = 5;  //每一页条数
  var pagenum = 1;   //默认第几页
  var totolpage;

  var goodstotolpage;    //查询到的商品总数
  var goodspagesize1 = 8;  //每一页条数
  var goodspagenum1 = 1;   //默认第几页

  var logoid;  //品牌ID
  var goodsID=[];  //传过去商品id
  export default {
        data:function() {
            return {
              mygoods:[],
              mysrc:[],
              isShow:false,
              goods_info:[]
            }
        },
      components: {
        p_try,
        goodsModule,
        logos,
        try_goods
      },
    mounted:function () {
          this.auto_brand(),   //自动获取品牌
          this.brand_totolpage(),   //  自动获取品牌总数
            this.glass_totolpage(),  //  自动获取商品总数
            this.listen()     //   自动查询

      },
      methods: {
        getChild(params){         //收藏
          var userId = sessionStorage.getItem('userId');
          var goodsId = params;
          this.$axios.post(this.$api.tryOn.collection,{userId:userId,goodsId:goodsId},{
            transformRequest: [function (data) {
              var str = '';
              for(var key in data){
                str += key + "=" + data[key] + "&";
              }
              str = str.substring(0,str.length-1);
              return str;
            }]
          }).then(function (res) {

            if(res.data.affectedRows>0){

            }
          })
            .catch(function (err) {
              console.log(err);
            });
        },
        //关闭modal
        modal_close(){
          if(this.isShow==true){
            this.isShow=false;
          }

        },
        //显示modal
        modal_show(){
          if(this.isShow==false){
            this.isShow=true;
          }
        },
        //点击选择时代的6见商品
        goTry () {
          if(this.isShow==true){
            this.isShow=false;
          }
          this.$options.methods.getDoods.bind(this)();
        },
        //品牌上一页
        po_left() {
          if(pagenum==1){
            pagenum=1;
          }else {
            pagenum--;
            this.$options.methods.auto_brand.bind(this)();
          }

        },
        //品牌下一页
        po_right() {
          var barndTotol = totolpage/pagesize;
          barndTotol = Math.ceil(barndTotol);
          if(pagenum==barndTotol){
            pagenum=barndTotol;
          }else {
            pagenum++;
            this.$options.methods.auto_brand.bind(this)();
          }

        },
        //商品上一页
        goods_left() {
          if(goodspagenum1==1){
            goodspagenum1=1;
          }else {
            goodspagenum1--;
            this.$options.methods.listen.bind(this)();
          }
        },
        //商品下一页
        goods_right() {
          var glassTotol1 = goodstotolpage/goodspagesize1;
          glassTotol1 = Math.ceil(glassTotol1);
          if(goodspagenum1==glassTotol1){
            goodspagenum1=glassTotol1;
          }else {
            goodspagenum1++;
            this.$options.methods.listen.bind(this)();
          }
        },
        //自动获取品牌
        auto_brand () {   //自动获取logo图片  以及眼镜图片
          var that = this;
          this.$axios.post(this.$api.tryOn.chooseBrand,{logopagesize:pagesize,logopagenum:pagenum},{
            transformRequest: [function (data) {
              var str = '';
              for(var key in data){
                str += key + "=" + data[key] + "&";
              }
              str = str.substring(0,str.length-1);
              return str;
            }]
          }).then(function (res) {
            let arr =[];
            let arrglasses =[];
            for(var i in res.data.brand){    //logo
              var imgurl= res.data.brand[i];
              arr.push(imgurl);
            }
            that.mysrc=arr;
          })
            .catch(function (err) {
              console.log(err);
            });
        },
        //品牌总数
        brand_totolpage () {   //自动获取logo 总数
          this.$axios.post(this.$api.tryOn.getBrandTotolpage).then(function (res) {
//            console.log(res.data);
            var json = JSON.stringify(res.data);
            var arrParse = JSON.parse(json);
            totolpage = arrParse[0].brandTotol;

          })
            .catch(function (err) {
              console.log(err);
            });
        },
        //查询出商品总数
        glass_totolpage () {   //自动获取查询到商品总数
          this.$axios.post(this.$api.tryOn.getglassTotolpage,{brand:logoid},{
            transformRequest: [function (data) {
              var str = '';
              for(var key in data){
                str += key + "=" + data[key] + "&";
              }
              str = str.substring(0,str.length-1);
              return str;
            }]
          })
            .then(function (res) {
            var json = JSON.stringify(res.data);
            var arrParse = JSON.parse(json);
            goodstotolpage = arrParse[0].glassTotol;
          })
            .catch(function (err) {
              console.log(err);
            });
        },
        //查询函数
        listen() {
          var that = this;
          that.mygoods=[];
          this.$axios.post(this.$api.tryOn.screenGoods,{gpagesize1:goodspagesize1,gpagenum1:goodspagenum1,brand:logoid},{
            transformRequest: [function (data) {
              var str = '';
              for(var key in data){
                str += key + "=" + data[key] + "&";
              }
              str = str.substring(0,str.length-1);
              return str;
            }]
          }).then(function (res) {
            var arr=[];
            for(var i in res.data){
              var imgurl= res.data[i];
              arr.push(imgurl);
            }
            that.mygoods=arr;
          })
            .catch(function (err) {
              console.log(err);
            });
        },
        //获取品牌id
        getId(item) {
          goodspagenum1=1;
          logoid = item.b_id;
          this.$options.methods.listen.bind(this)();
          this.$options.methods.glass_totolpage.bind(this)();
        },
        dian(item){   //将选好的商品ID传进数组
          goodsID.push(item.g_id);
//          console.log(goodsID);
        },
        //////////////////////////////////////////////
        getDoods() {
          var pramars= goodsID;
          var that = this;
          this.$axios.post(this.$api.tryOn.getChoise,pramars,{
            transformRequest: [function (data) {
              var str = '';
              for(var key in data){
                str += key + "=" + data[key] + "&";
              }
              str = str.substring(0,str.length-1);
              return str;
            }]
          }).then(function (res) {
            var arr=[];
            for(var i in res.data){
              var imgurl= res.data[i];
              arr.push(imgurl);
            }
            that.goods_info=arr;
          })
            .catch(function (err) {
              console.log(err);
            });
        }

      }

  }
</script>
