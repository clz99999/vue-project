<template>
    <div>
      <personContainer>
        <div class="pagePersonalInformation-box">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <div>
          <router-link to="/Personal/Security?pname=> 售后申请"><blackHover text="返回"></blackHover></router-link>
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
</style>
