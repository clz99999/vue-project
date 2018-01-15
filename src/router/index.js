import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import index from '@/views/index'
import contact from '@/views/contactUs'
import LegalNotice from '@/views/LegalNotice'
import OfflineTryon from '@/views/OfflineTryon'
import fashionShow from '@/views/fashionShow'
import brandStory from '@/views/brandStory'
import checkoutOn from '@/views/checkoutOn'
import checkoutOff from '@/views/checkoutOff'
import online from '@/components/checkout/online'
import goodsList from '@/views/goodsList'
import Personal  from "@/views/pagePpersonal.vue"
import login  from "@/views/log_reg.vue"
import aboutus  from "@/views/aboutus.vue"
import onlineTryon  from "@/views/try.vue"   //线上试戴
//import goodsList  from "@/views/goodsList.vue"
import ManSun  from "@/views/goodsList.vue"
import WomanSun  from "@/views/goodsList.vue"
import AllSun  from "@/views/goodsList.vue"
import Cart  from "@/views/Cart.vue"
import buy  from "@/views/lyzBuy.vue" //购买
import StreetBeatDetails from '@/views/StreetBeatDetails.vue'
import storyTitle from '@/views/storyTitle.vue'



import Order  from "@/components/personalPage/myOrder.vue"
import Security  from "@/components/personalPage/Security.vue"
import newLoginPwd  from "@/components/personalPage/newLoginPwd.vue"
import newPayPwd  from "@/components/personalPage/newPayPwd.vue"
import phoneBind  from "@/components/personalPage/phoneBind.vue"
import validEmail  from "@/components/personalPage/validEmail.vue"
import LpwdChangeSucceed  from "@/components/personalPage/LpwdChangeSucceed.vue"
import PpwdChangeSucceed  from "@/components/personalPage/PpwdChangeSucceed.vue"
import phoneBindSucceed  from "@/components/personalPage/phoneBindSucceed.vue"
import emailValidSucceed  from "@/components/personalPage/emaiValidSucceed.vue"
import pagePersonalInformation from '@/components/personalPage/pagePersonalInformation'
import afterSales from '@/components/personalPage/afterSales'
import orderLIstall from '@/components/personalPage/orderLIstall'

import pageMyCollect from '@/components/personalPage/pageMyCollect'
import pageMyAddress from '@/components/personalPage/pageMyAddress'
import pageMyReview from '@/components/personalPage/pageMyReview'





Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: '/',
      //redirect:'/index',
      component: home,
      children:[
        {
          path: 'index',  //首页
          name: 'index',
          component: index
        },
        {
          path: 'onlineTryon',  //线上试戴
          name: 'onlineTryon',
          component: onlineTryon
        },
        {
          path: 'StreetBeatDetails',  //街拍详情
          name: 'StreetBeatDetails',
          component: StreetBeatDetails
        },{
          path: 'storyTitle',  //故事详情
          name: 'storyTitle',
          component: storyTitle
        },
{
          path: 'Cart',  //购物车
          name: 'Cart',
          component: Cart
        },

        {
          path: 'contact',  //联系我们
          name: 'contact',
          component: contact
        },{
          path: 'buy',  //购买
          name: 'buy',
          component: buy
        },
        {
          path: 'aboutus',  //关于我们
          name: 'aboutus',
          component: aboutus
        },

        {
          path: 'LegalNotice',  //法律声明
          name: 'LegalNotice',
          component: LegalNotice
        },
        {
          path: 'OfflineTryon',  //线下试戴说明
          name: 'OfflineTryon',
          component: OfflineTryon
        },
        //{
        //  path: 'goodsList',  //商城列表
        //  name: 'goodsList',
        //  component: goodsList
        //},
        {
          path: 'ManSun',  //商城男士太阳镜
          name: 'ManSun',
          component: ManSun
        }, {
          path: 'WomanSun',  //商城女士太阳镜
          name: 'WomanSun',
          component: WomanSun
        }, {
          path: 'AllSun',  //商城所有太阳镜
          name: 'AllSun',
          component: AllSun
        },
        /*{
         path: 'sunMam',  //太阳镜男士
         name: 'sunMam',
         component: sunMam
         },
         {
         path: 'sunWomam',  //太阳镜女士
         name: 'sunWomam',
         component: sunWomam
         },*/
        {
          path: 'goodsList',  //太阳镜所有
          name: 'goodsList',
          component: goodsList
        },
        {
          path: 'fashionShow',  //潮流街拍
          name: 'fashionShow',
          component: fashionShow
        },
        {
          path: 'brandStory',  //品牌故事
          name: 'brandStory',
          component: brandStory
        },
        {
          path: 'checkoutOn',  //线上支付页面
          name: 'checkoutOn',
          component: checkoutOn
        },
        {
          path: 'checkoutOff',  //线下支付页面
          name: 'checkoutOff',
          component: checkoutOff
        },
        //个人中心
        {
          path: 'Personal',
          name: 'Personal',
          component: Personal,
          children:[
            {
              path: '/Personal',
              name: 'Order',
              //alias:'/Personal/Order',
              component: Order
            },
            {
              path: 'Order',
              name: 'Order',
              //alias:'/Personal/Order',
              component: Order,
            },

            {
              path: 'Security',
              name: 'Security',
              component: Security
            },
            {
              path: 'newLoginPwd',
              name: 'newLoginPwd',
              component: newLoginPwd
            },
            {
              path: 'newPayPwd',
              name: 'newPayPwd',
              component: newPayPwd
            },
            {
              path: 'phoneBind',
              name: 'phoneBind',
              component: phoneBind
            },
            {
              path: 'validEmail',
              name: 'validEmail',
              component: validEmail
            } ,
            {
              path: 'LpwdChangeSucceed',
              name: 'LpwdChangeSucceed',
              component: LpwdChangeSucceed
            },
            {
              path: 'PpwdChangeSucceed',
              name: 'PpwdChangeSucceed',
              component: PpwdChangeSucceed
            },
            {
              path: 'phoneBindSucceed',
              name: 'phoneBindSucceed',
              component: phoneBindSucceed
            },
            {
              path:'pageMyCollect',
              name:'pageMyCollect',
              component:pageMyCollect
            },
            {
              path:'pageMyAddress',
              name:'pageMyAddress',
              component:pageMyAddress
            },
            {
              path:'pageMyReview',
              name:'pageMyReview',
              component:pageMyReview
            },
            {
              path:'emailValidSucceed',
              name:'emailValidSucceed',
              component:emailValidSucceed
            },
            {
              path:'pagePersonalInformation',
              name: pagePersonalInformation,
              component: pagePersonalInformation
            },
            {
              path:'afterSales',
              name: 'afterSales',
              component: afterSales
            },
            {
              path:'orderLIstall',
              name: 'orderLIstall',
              component: orderLIstall
            }

          ]
        }
      ]
    }
  ]
})
