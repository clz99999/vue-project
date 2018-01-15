<template>
  <div>
    <personContainer>
      <div v-for='(item,index) in myCollectData'>
        <myCollect :myCollectData="item" @delPageMyCollect="delpageMyCollect(index)" :key="index"></myCollect>
      </div>
    </personContainer>

  </div>
</template>

<script>
  import personContainer from '../personal/personContainer'
  import myCollect from '../personal/myCollect'
  export default{
    name: 'pageMyCollect',
    components: {//2.注册组件
      'personContainer': personContainer,
      'myCollect': myCollect
    },
    data: function () {
      return {
        'myCollectData': []

      };
    },
    created: function () {//创建完成

    },
    mounted: function () {//挂载完成
      this.pageMyCollectAxiosPost();
    },
    methods: {
      pageMyCollectAxiosPost: function () {
        var userId=sessionStorage.getItem('userId')
        var that = this;
        this.$axios.post(this.$api.user.colloctList,{'userId':userId},{
          transformRequest: [function (data) {
            var str = '';
            for (var key in data) {
              str += key + "=" + data[key] + "&"
            }
            str = str.substring(0, str.length - 1);
            return str
          }]
        })
          .then(function (response) {
            that.myCollectData = response.data.data;
            console.log(response.data.data)
            if (that.myCollectData.length==0) {
              var oDiv = document.getElementById('personContainer-content');
              oDiv.innerHTML = "您暂时还没收藏！";
            }else {
              oDiv.innerHTML = "";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      //删除
      delpageMyCollect: function (index) {
        var that=this;
        var userId=sessionStorage.getItem('userId')
        console.log(userId)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          //删除
          var colId = that.myCollectData[index].c_id;
          that.$axios.post(that.$api.user.collectDel,//'http://localhost:1557/coll/del.do',
            {'colId': colId,'userId':userId}, {
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
              that.pageMyCollectAxiosPost();
            })
            .catch(function (error) {
              console.log(error);
            });

          that.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(function () {
          that.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/common.less";

</style>

