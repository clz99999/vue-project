<template>
  <div class="pagePpersonal-Box">
    <personList class="pagePpersonal-personList"></personList>
    <div class="pagePpersonal-review">
      <div class="pagePpersonal-personCrumbs">
        <personCrumbs></personCrumbs>
      </div>
      <div>
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import personList from "../components/personal/personList"
  import personCrumbs from "../components/personal/personCrumbs"
  export default{
    name: 'pagePpersonal',
    components:{
      'personList':personList,
      'personCrumbs':personCrumbs
    }
  }
</script>

<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/animate.css";
  .pagePpersonal-Box{
    width: 90%;
    margin:0 auto;
    padding: 100px 0;
    overflow: hidden;
  }
  .pagePpersonal-personList{
    float: left;
  }
  .pagePpersonal-review{
    width: 86%;
    float: right;
    margin-top: 120px;

  }

</style>
