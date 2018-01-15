<template>
    <div>
      <!--商品介绍-->
      <div>
        <PopularScience :popularScienceObj="popularScienceObj[0]"></PopularScience>
      </div>
      <!--筛选框-->
      <div>
        <optionNav :allGoodsInfo="allGoodsInfo" v-on:sendDataFromChild="getDataFromChild"></optionNav>
      </div>
      <!--商品列表-->
      <ul class="goods_list">
        <li class="goods_item" v-for="item in goodsInfo">
          <goodsModule :goods_item="item"></goodsModule>
        </li>
      </ul>
      <!--分页-->
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total,prev, pager, next, jumper"
          :total="totalItem">
          <!--:current-page.sync="currentPage"-->
          <!--:page-sizes="[3, 6, 9]"-->
          <!--:page-size="3"-->
          <!--:total="totalItem"-->
          <!--layout="total, prev, pager, next, jumper">-->
        </el-pagination>
      </div>
    </div>
</template>

<script >
  import PopularScience from '../components/goods/PopularScience'
  import optionNav from '../components/goods/optionNav.vue'
  import goodsModule from '../components/goods/goodsModule.vue'
  export default{
    name: '',
    data: function () {
      return {
        popularScienceObj: [
          {
            theme: '女士眼镜',
            Des1: '从精致优雅到大胆激烈，我们知道每个女人都有独特的风格。',
            Des2: '我们收藏的女性眼镜还包括男女皆宜的框架，可以过滤以更好地分类您的需求。金属，钛，塑料和木材纹理材料可以找到各种颜色，形状和大小。',
            Des3:'选择您的收藏夹后，使用我们的虚拟试用工具试戴它们，并探索我们的高品质镜头选项。与往常一样，您的眼镜可以根据阅读，远距离，电脑或中间视力进行定制。在网上购买之前，按价格，最新到货，或畅销书浏览我们的女士眼镜。为你找到完美的框架。',
            pImg: '/src/assets/images/goods/opticalWoman.jpg'
          }
        ],
        allGoodsInfo:[],
        goodsInfo:[],
        totalItem:'',
        currentPage: 1,
        pageSize:6,
        fromChildVal:'',
      }
    },

    methods:{
      //获取全部商品信息
      getAllGoodsInfo:function () {
        console.log(this.$api.goods.getAllGoodsInfo)

        let _this = this;

        this.$axios.post(this.$api.goods.getAllGoodsInfo)
          .then(function (res) {
            console.log("in");
            _this.allGoodsInfo = res.data;
            _this.totalItem = res.data.length;

          })
          .catch(function (err) {
            console.log(err);
          })
      },
      //获取子组件值
      getDataFromChild:function (fromChildVal) {
          if(fromChildVal==='半框'){
            this.fromChildVal = 17;
          }else if(fromChildVal==='全框'){
            this.fromChildVal = 16;
          }else{
            this.fromChildVal = '';
          }
      },
      //获取当前显示的商品信息
      getGoodsInfo:function () {
//        let currentPage = this.currentPage;
//        let pageSize = this.pageSize;
        let fromChildVal = this.fromChildVal;
        let _this = this;
        this.$axios.post(this.$api.goods.getGoodsInfo,"cPage="+_this.currentPage+"&pSize="+_this.pageSize+"&reFrame="+fromChildVal)
          .then(function (res) {
            _this.goodsInfo = res.data;
          })
          .catch(function (err) {
            console.log(err);
          })
      },
      //分页
//      handleSizeChange(val) {//每页条数改变时
//        let currentPage = this.currentPage;
//        let pageSize = val;
//        let _this = this;
//        this.$axios.post(this.$api.goods.getGoodsInfo,"cPage="+_this.currentPage+"&pSize="+val)
//          .then(function (res) {
//              _this.goodsInfo = res.data;
//          })
//          .catch(function (err) {
//            console.log(err);
//          })
//      },
      handleCurrentChange:function(val) {//当前页码改变时
//        let currentPage = val;
//        let pageSize = this.pageSize;
        let _this = this;
        this.$axios.post(this.$api.goods.getGoodsInfo, "cPage=" + val + "&pSize=" + _this.pageSize)
          .then(function (res) {
            _this.goodsInfo = res.data;
          })
          .catch(function (err) {
            console.log(err);
          })
      },
    },
    created: function () {
      this.getAllGoodsInfo();
      this.getGoodsInfo();
    },
    components: {
      PopularScience: PopularScience,
      optionNav: optionNav,
      goodsModule: goodsModule,
    },
  }
</script>

<style scoped lang="less">
  @import '../assets/css/common.less';
/*眼镜列表*/
  ul{
    margin:0;
    padding:0;
  }
  ul li{
    margin:0;
    padding:0;
    list-style-type: none;
  }
  .goods_list{
    margin:0 auto;
    width: 90%;
  }
  .goods_list::after{
    content: '';
    display:block;
    clear:both;
  }
  .goods_item{
    width: 30%;
    float:left;
    margin-right: 5%;
  }
  .goods_item:nth-of-type(3n+0){
    margin-right:0;
  }
  /*分页*/
  .pagination{
    text-align: center;
  }
</style>
