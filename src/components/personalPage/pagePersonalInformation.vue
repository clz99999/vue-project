<template>
    <div>
      <personContainer>
        <div class="pagePersonalInformation-box">
          <p>用户名:&nbsp;&nbsp;{{myInformationData[0].u_name}}</p>
          <p>性别:&nbsp;&nbsp;<span v-if="myInformationData[0].u_sex=0">女</span><span v-else>男</span></p>
          <p>出生日期:&nbsp;&nbsp;{{myInformationData[0].u_birth}}</p>
          <p>Email:&nbsp;&nbsp;{{myInformationData[0].u_email}}</p>
          <p>手机号:&nbsp;&nbsp;{{myInformationData[0].u_phone}}</p>
          <p>QQ:&nbsp;&nbsp;{{myInformationData[0].u_qq}}</p>
          <div>
          <router-link to="/Personal/Security?pname=> 修改资料"><blackHover text="修改个人资料"></blackHover></router-link>
          </div>
        </div>

      </personContainer>
    </div>
</template>

<script>
  import personContainer from '../personal/personContainer'
  import blackHover from '../button/blackHover.vue'
    export default{
      name: '',
      components:{
        'personContainer':personContainer,
        'blackHover':blackHover
      },
      data: function () {
        return {
          'myInformationData': []

        };
      },
      created: function () {//创建完成
        this.myInformationPost();
      },
      methods: {
        myInformationPost: function () {
          var that = this;
          var userId=sessionStorage.getItem('userId')
          this.$axios.post(this.$api.user.userInfo,{'userId':userId},{
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
              that.myInformationData=response.data.data
              console.log(that.myInformationData)
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
</script>

<style lang="less">
  @import '../../assets/css/common.less';
  .pagePersonalInformation-box{
    background-color: white;
    padding: 20px;
  }
  .pagePersonalInformation-box>p{
    margin: 10px 0;
  }
</style>
