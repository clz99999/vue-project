/**
 * Created by zyy on 2017/12/16.
 * 用户接口
 *
 */
export default {
    userInfo:'/user/list.do',//个人信息---显示
    userEdit:'/user/update.do',//个人信息 --修改
    headImg:'Try/uploadImage.do',//头像上传
    login:'/login/login.do',//用户登录
    logout:'/login/logout.do',//用户登出
    colloctList:'/coll/coll.do',//收藏列表
    collectDel:'/coll/del.do',//我的收藏 --删除
    reviewList:'/rev/rev.do',//评论列表
    addressList:'/address/list.do',//地址管理 --显示
    addressAdd:'/address/add.do',//地址管理 --添加
    addressDel:'/address/del.do',//地址管理 --删除
    addressEdit:'/address/update.do',//地址管理 --修改

  region:'/user/region.do',//

//曹李志个人中心
    delReview: "/rev/del.do",//删除我的评论   clz
//蔡艺个人中心
    myOrder:'/user/order.do',//个人中心--我的订单
    LpwdChange:'/user/LpwdChange.do', //个人中心修改登录密码
    PpwdChange:'/user/PpwdChange.do', //个人中心修改支付密码
   emailChange:'/user/emailChange.do', //个人中心修改支付密码
    sendSMS:'/sendSMS.do' ,//个人中心发送短信验证码
   regSMS:'/reg.do' ,//个人中心判断验证码是否正确
  //刘云志个人中心
  orderListall:'/order/listall.do',


  updatePhone:'/user/updatePhone.do'



}
