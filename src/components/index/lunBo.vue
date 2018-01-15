<template>
    <div>

      <swiper :options="swiperOption" ref="mySwiper" class="box">

        <swiper-slide class="swiper-slide" v-for="item in content1" :key="1">
          <lunboContent :obj="item"></lunboContent>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>

    </div>
</template>

<script>
  import lunboContent from './lunBoContent.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: '',
    data: function () {
      return {
        swiperOption: {
          effect: 'slide',
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween:0,
          speed:800,
          autoplay:{
            delay:4000,
            disableOnInteraction: false
          },
          paginationClickable: true,
          observeParents: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        content1:[
          {url:"src/assets/images/lunBo/2.png",lunboText1:"休闲 glasses ''",lunboText2:"轻盈灵活 时尚多变",lunboText3:"this the session to save",btnText:"查看更多"},
          {url:"src/assets/images/lunBo/1.png",lunboText1:"Brand Awards ''",lunboText2:"功能与美的完美结合",lunboText3:"品牌大赏",btnText:"查看品牌",position:"left"},
          {url:"src/assets/images/lunBo/3.png",lunboText1:"we are ''  我们是",lunboText2:"眼镜行业的非凡的演变",lunboText3:"由G-g glass  定制的框架",btnText:"了解我们"},
          {url:"src/assets/images/lunBo/4.png",lunboText1:"We will not do it ''",lunboText2:"选择权，永远在你",lunboText3:"即时试戴",btnText:"查看更多",position:"left"}
        ]
      }
    },
    components: {
      swiper: swiper,
      swiperSlide: swiperSlide,
      lunboContent:lunboContent
    },
    methods: {},
    computed: {
      swiper: function () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted: function () {
//      this.swiper.slideTo(0, 3000, false);
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped lang="less">


</style>
