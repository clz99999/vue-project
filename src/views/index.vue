<template>
    <div id="index">
      <div id="replay">
        <zylunbo></zylunbo>
      </div>
      <!-- 线上试戴-->
      <div id="onlineWear">
        <div id="onlineGif" class="floLeft">
          <!--<img src="../assets/images/index/huibai.gif" alt=""/>-->
        </div>
        <div id="onlineText">
          <div id="perfect">
          <p id="online1" class="perH1 left perfect">" 线上试戴 G-g style</p>
          <p id="online2" class="perP left perfect">perfect compatibiity</p>
          <p id="online3" class="perH2 left perfect">等待追求完美的你</p>
          <div id="btnonline" class="left perfect" >
            <router-link to="/onlineTryon"><whiteMiddle text="即刻试戴"></whiteMiddle></router-link>
          </div>
        </div>
          <!--<img src="../assets/images/index/2.jpg" alt=""/>-->
        </div>
        <div>

        </div>
      </div>
      <!-- 线下试戴-->
      <div id="offlineWear">
        <div id="offlineGif">
          <!--<img src="../assets/images/index/huibai.gif" alt=""/>-->
        </div>
        <div id="offlineText" class="floLeft">
          <!-- 线下试戴左边-->
          <div id="appoint">
            <p id="offline1" class="perP offline offleft" >perfect style</p>
            <p id="offline2" class="perH1 offline2 offleft">线下试戴 "</p>
            <p id="offline3" class="perP offline offleft">送货上门，享受尊贵服务</p>
            <div class="btnoff">
              <div id="btnSun" class="floLeft  offline offleft">
                <borderWhite text="预约太阳镜"></borderWhite>
              </div>
              <div id="btnxiu" class="floLeft offline offleft">
                <borderWhite text="预约休闲镜"></borderWhite>
              </div>
            </div>

          </div>

        <div>

        </div>
      </div>
        <!-- 线下试戴右边-->
        <div class="offlineRight">
          <div id="line" class="totop">
            <div id="width"></div>
            <div id="height"></div>
          </div>
          <div id="Text" >
            <div class="rightTitle">
              <img class="floLeft" src="../assets/images/index/2.jpg" alt=""/>
              <p class="perH1">至尊体验</p>
            </div>

            <p class="perP">
              在商城选择你喜欢的款式 <br/>
              选择你喜欢的眼镜，忘记旧的“这些不适合我”<br/>
              我们将送货上门<br/>
              试戴过后再完成付款<br/>
            </p>
          </div>
        </div>
      </div>
      <!-- 品牌-->
      <div id="brand">
        <!-- 品牌左边-->
        <div id="brandLeft" class="floLeft bleft">
          <div id="brandText">
            <p class="perH1">丰富的品牌，不同风格, <br/>
              为您演绎新的自我</p>
            <p class="perP">没有两个面孔是相同的。 <br/>
              就像指纹一样，你脸上的形状对你来说是独一无二的。 <br/>
              就像你的个性一样，你的脸表达了你真正的自我。 <br/>
              你的眼镜应该像你一样独特而富有表现力。</p>
            <div id="btnBrand">
              <whiteMiddle text="查看品牌"></whiteMiddle>
            </div>
          </div>
        </div>
        <!-- 品牌右边-->
        <div id="brandRight" class="floRight bleft">
          <img src="../assets/images/index/s1.png" alt=""/>
        </div>
      </div>
      <!-- 照片墙-->
      <div id="photoWall">
        <div id="auto">
          <p class="perH1"># 潮流街拍鉴赏</p>
          <div id="btnPhoto">
            <whiteMiddle text="进入街拍"></whiteMiddle>
          </div>
          <!-- 图片-->
          <div id="container">
            <div class="p1 "><img :src="'/cms'+photoWall[1].f_img"  alt="" class="p1 transition"/></div>
            <div class="p2 "><img :src="'/cms'+photoWall[2].f_img"  alt="" class="p2 transition"/></div>
            <div class="p3 "><img :src="'/cms'+photoWall[3].f_img" alt="" class="p3 transition"/></div>
            <div class="p4 "><img :src="'/cms'+photoWall[4].f_img" alt="" class="p4 transition"/></div>
            <div class="p5 "><img :src="'/cms'+photoWall[5].f_img"  alt="" class="p5 transition"/></div>
            <div class="p6 "><img :src="'/cms'+photoWall[6].f_img"  alt="" class="p6 transition"/></div>
            <div class="p7 "><img :src="'/cms'+photoWall[7].f_img"  alt="" class="p7 transition"/></div>
            <div class="p8 "><img :src="'/cms'+photoWall[8].f_img"  alt="" class="p8 transition"/></div>
            <div class="p9 "><img :src="'/cms'+photoWall[9].f_img"  alt="" class="p9 transition"/></div>
            <div class="p10"><img :src="'/cms'+photoWall[10].f_img" alt="" class="p10 transition"/></div>
          </div>
        </div>
      </div>
      <!-- 品牌logo-->
      <div id="brandLogo">
        <div class="logoAuto">
          <p class="perH1"># 合作的品牌</p>
          <div class="logoAfter logo1" :style="'background-image:url(/cms'+ brand[0].b_logo+')'"></div>
          <div class="logoAfter logo2" :style="'background-image:url(/cms'+ brand[1].b_logo+')'"></div>
          <div class="logoAfter logo3" :style="'background-image:url(/cms'+ brand[2].b_logo+')'"></div>
          <div class="logoAfter logo4" :style="'background-image:url(/cms'+ brand[3].b_logo+')'"></div>
          <div id="logo5" class="logoAfter logo5" :style="'background-image:url(/cms'+ brand[4].b_logo+')'"></div>
        </div>
      </div>
      <!-- 潮流-->
      <div id="fashion">
        <div id="fashionAuto">
          <!-- 潮流左边-->
          <div id="faLeft" class="floLeft">
            <div id="faText">
              <p class="perH1">潮流资讯，一手掌握‘’ </p>
              <p>关注我们的微信微博，了解最新的灵感和创作。</p>
              <span class="fa fa-wechat icon-size "></span>
              <span class="fa fa-weibo icon-size"></span>
              <div id="website">
                <p>收藏我们的网站</p>
                <p class="perH2">BLINK</p>
              </div>
            </div>
            <div>
            </div>
          </div>
          <!-- 潮流右边-->
          <div id="faRight" class="floRight">
            <div class="faImg">
              <img src="../assets/images/index/cl1.jpg" alt=""/>
              <div class="btnCL">
                <whiteMiddle text="进入资讯"></whiteMiddle>
              </div>
            </div>
            <div class="faImg">
              <img src="../assets/images/index/cl2.jpg" alt=""/>
              <div class="btnCL">
                <whiteMiddle text="进入资讯"></whiteMiddle>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
</template>

<script type="es6">
  import zynav from '../components/nav/commonNav.vue'
  import zyfoot from '../components/foot/foot'
  import zylunbo from '../components/index/lunBo.vue'
  import whiteMiddle from '../components/button/whiteMiddle.vue'
  import borderWhite from '../components/button/borderWhite.vue'
    export default{
        name: '',
        data() {
            return {
              scrolled: '',
              photoWall:[],
              brand:[]
            }
        },
      methods:{
        handleScroll(){
          //this.scrolled = window.scrollY >0;
          var perfect = document.getElementsByClassName('perfect');
          if(window.scrollY >350){
            //console.log("window.scrollY",window.scrollY);
            for(let i=0; i<perfect.length; i++){
              perfect[i].classList.remove("left");
              perfect[i].classList.add("right");
            }
          }
          var offline = document.getElementsByClassName('offline');
          var offline2 = document.getElementById('offline2');
          var line = document.getElementById('line');
          if(window.scrollY > 800){
            for(let i=0; i<offline.length; i++){
              offline[i].classList.remove("offleft");
                offline[i].classList.add("offright");

            }
            offline2.classList.remove("offleft");
            offline2.classList.add("xiuxian");
            line.classList.remove("totop");
            line.classList.add("tobottom");

          }
          var brandLeft = document.getElementById('brandLeft');
          var brandRight = document.getElementById('brandRight');
          if(window.scrollY > 1200){
            brandLeft.classList.remove("bleft");
            brandLeft.classList.remove("bleft");
            brandLeft.classList.add("btoright");
            brandRight.classList.add("bToleft");

          }
        }
      },
      created:function (){
        var _this=this;
        this.$axios.post(this.$api.news.indexFashion).then(function (res) {
          _this.photoWall= res.data;
        }).catch(function (err) {
          console.log(err);
        });
        this.$axios.post(this.$api.news.brandNew).then(function(res){
          console.log(res.data);
          _this.brand = res.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
      mounted(){
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
      },
      components: {
        zynav,
        zyfoot,
        whiteMiddle,
        borderWhite,
        zylunbo
      }
    }
</script>

<style scoped lang="less">
@import "../assets/css/index.less";
</style>
