/**
 * Created by zyy on 2017/12/16.
 *api主入口
 */

import news from './new.js'
import store from './store.js'
import tryOn from './try.js'
import user from './user.js'
import service from './service.js'
import common from './common.js'
import goods from './goods.js'
import cart from './cart.js'


export default {
    news,//潮流资讯
    store,//商城
    tryOn,//线上试戴
    user,//用户
    service,//售后服务
    common,//通用接口
    goods,//通用接口
    cart //购物车
}
