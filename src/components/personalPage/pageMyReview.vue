<template>
  <div>
    <personContainer>
      <div v-for="(item,index) in myReviewsData">
        <myReviews @delPageMyReviews="delPageMyReviews(index)" @addPageMyReviews="addPageMyReviews" :myReviewsData="item"></myReviews>
      </div>
    </personContainer>
    <div>
      <el-dialog
        title="追加评论"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <!--<span>这是一段信息</span>-->
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="感谢您的评价！我们将再接再厉！"
          v-model="textarea3">
        </el-input>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button class="pageMyReview-btn" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import personContainer from '../personal/personContainer'
  import myReviews from '../personal/myReviews'
  export default{
    name: 'pageMyReview',
    components: {//2.注册组件
      'personContainer': personContainer,
      'myReviews': myReviews
    },
    data: function () {
      return {
        'myReviewsData': [],
        'dialogVisible':false,
        'textarea3': ''
      }
    },
    created: function () {//创建完成
//        this.axiosPost();//调用请求方法
      this.pageMyReviewAxiosPost()
    },
    mounted:function(){
//      this.isPageMyReview()
    },
    methods: {
      pageMyReviewAxiosPost:function(){
        var userId=sessionStorage.getItem('userId')
        var that=this;
        this.$axios.post(this.$api.user.reviewList,{
            'userId':userId
          }, {transformRequest: [function (data) {
              var str = '';
              for (var key in data) {
                str += key + "=" + data[key] + "&"
              }
              str = str.substring(0, str.length - 1);
              return str
            }]
          }
        )
          .then(function (response) {
            that.myReviewsData=that.myCollectData=response.data.data;
            if (that.myReviewsData.length==0) {
              var oDiv = document.getElementById('personContainer-content');
              oDiv.innerHTML = "您暂时还没评论！";
            }else {
              oDiv.innerHTML = "";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
//      isPageMyReview:function(){
//        if (this.myReviewsData.length==0){
//          var oContent=document.getElementById('personContainer-content');
//          oContent.innerHTML="您暂时还没有评论，可以去订单中心评论哦!"
//        }
//      },
//      删除
      delPageMyReviews:function(index) {
        var userId=sessionStorage.getItem('userId')
        var that=this;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function() {
          //删除
          var revId = that.myReviewsData[index].r_id;
          that.$axios.post(that.$api.user.delReview,
            {'revId': revId,'userId':userId}, {
              transformRequest: [function (data) {
                var str = '';
                for (var key in data) {
                  str += key + "=" + data[key] + "&"
                }
                str = str.substring(0, str.length - 1);
                return str
              }]
            }
          ).then(function (response) {
              that.pageMyReviewAxiosPost();
            })
            .catch(function (error) {
              console.log(error);
            });

          that.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(function(){
          that.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },


      handleClose:function(done) {
        this.$confirm('确认关闭？')
          .then(function() {
          done();
      })
      .catch(function() {console.log("程序错误")});
      },
      addPageMyReviews:function(){
        this.dialogVisible = true
      }
    }

  }
</script>

<style lang="less">
  @import "../../assets/css/common.less";
  .pageMyReview-btn{
    background-color: #b89665;
    border: none;
  }
  .pageMyReview-btn:hover{
    background-color: rgba(184, 150, 101, 0.76);
  }

</style>
