<!--法律申明-->
<template>
  <div>
    <div id="imgBackground">
      <div id="text">
        <h1>使用条款</h1>
        <h3>隐私政策</h3>
        <p>G-g glass非常重视您个人信息的安全和隐私。我们不会交易，出售或出租您的个人身份信息。我们坚决保护您的个人信息。以下政策适用于G-g glass，Inc.（统称为“G-g glass”，“我们”，“我们”或“我们的”）生产和维护的EyeBuyDirect.com网站（以下简称“网站”）。我们已经制定了这个安全和隐私政策（“隐私政策”），以表明我们在您访问我们的网站期间可能收集的个人信息的种类，为什么我们收集您的信息，我们如何处理您的个人信息，何时可能披露您的个人信息，以及您如何管理您的个人信息。</p>
        <p>请注意，本隐私政策中所述的做法仅适用于通过本网站收集的信息，并且在适用情况下，通过本网站的客户服务部门与本网站相关。这些做法不一定反映通过我们运营的其他网站或其他离线方式收集的信息。</p>
        <p>通过访问我们的网站，您接受我们的隐私政策中描述的做法。如果您不同意本隐私政策的条款，请不要使用本网站。我们保留随时修改我们的隐私政策条款的权利，恕不另行通知。继续使用我们的网站和/或我们的分支机构网站对这些条款进行更改意味着您接受这些更改。</p>
        <p>如果您对我们的隐私政策有任何问题或疑虑，请通过电子邮件eyecare@eyebuydirect.com与我们联系。</p>
        <h3>什么关于我的信息被收集和存储？</h3>
        <p>G-g glass坚持我们所有业务的最高标准的道德操守。我们致力于保护所有网站访问者的隐私。我们的隐私政策很简单，除了下面披露的内容外。我们不会将您的个人信息出售，交换，赠送或出租给G-g glass以外的任何公司。我们只要求我们需要的信息。我们收集和储存的信息完全取决于您如何使用我们的网站。</p>
        <h3>个人信息</h3>
        <p>我们收集并存储您在本网站上输入的一些信息或通过我们的客户服务部门。例如，当您开立账户或下订单时，我们会存储以下信息：姓名，账单地址，送货地址，电子邮件地址，电话号码，信用卡号码和到期日期。我们使用这些信息来提供您订购的产品和服务，处理和运送订单，发送订单和运输确认以及提供客户服务。注册可能是必需的，个人信息也可能在网站的某些部分收集，您在其中明确地提供这样的信息，例如社区发布（即聊天或公告板），建议或客户服务请求。G-g glass是G-g glass集团的一部分。通过接受这些条款和条件，您（i）允许我们严格与G-g glass集团内的公司分享您的数据，并（ii）给予您明确的，具体的和知情的同意，以接收这些公司有关光学产品和眼镜的宣传材料的电子邮件。您的数据将不会与任何第三方公司共享。G-g glass和/或本集团其他公司发送给您的每封电子邮件都将包含“取消订阅”链接</p>
        <h3>匿名信息</h3>
        <p>通过您使用本网站，我们也可能收集某些不能单独识别您的信息（“匿名信息”）。一般来说，这些信息是通过“交通数据”收集的。当您与本网站互动时，我们会自动收集和存储信息。例如，我们每次访问本网站时都会收集您的IP地址，浏览器信息和参考站点域名。我们收集客户流量模式和网站使用情况。这些信息用于分析和改进本网站，并为我们的客户提供满意的购物体验。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import commonNav from '../components/nav/commonNav.vue'
  import foot from '../components/foot/foot.vue'
  export default {
    name: 'LegalNotice',
    components:{
      'commonNav':commonNav,
      'foot':foot
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";
  #imgBackground{
    width: 100%;
    height: 960px;
    background: url("../assets/images/11.jpg") no-repeat 10% 70%;
    background-size: 140%;
    overflow: hidden;
    position: relative;
    top: 54px;
    z-index: -2;
  }
  #imgBackground:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;left: 0;
    background-color: rgba(255,255,255,.8);
    z-index: -1;
  }
  #text{
    width: 80%;
    height: 600px;
    margin: 0 auto;
    text-align: center;
    color: @fontblack;
  }
  h1{
    margin-top: 40px;
    font-weight: 100;
  }
  h3{
    margin-top: 20px;
  }
  p{
    font-size: @mainfontsize;
    margin-top: 15px;
    text-align: left;
  }
  /*页脚*/
  .footer{
    margin-top: 50px;
  }
</style>
