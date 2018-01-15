<template>
    <div>
      <zynav></zynav>

      <router-view></router-view>

      <zyfoot></zyfoot>
    </div>
</template>

<script type="es6">
  import zynav from '../components/nav/commonNav.vue'
  import zyfoot from '../components/foot/foot'
  import zyindex from './index'
    export default{
        name: '',
        data: function () {
            return {

            }
        },
      components: {
        zynav,
        zyfoot,
        zyindex
      }
    }
</script>

<style scoped lang="less">

</style>
