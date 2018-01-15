<template>
  <div id="optionNav" >
    <!--框架类型-->
    <el-select v-model="value1" @change="changeValue" name="frame_type" id="frame_type" value-key="frame_type" class="isOption" placeholder="框架类型">
      <el-option v-for="(item,index) in frame"
                 :key="index"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>

    <!--材质-->
    <el-select v-model="value2" name="material" id="material" value-key="material" class="isOption" placeholder="材质">
      <el-option v-for="(item,index) in material"
                 :key="index"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>

    <!--颜色-->
    <el-select v-model="value3" name="color" id="color" value-key="color" class="isOption" placeholder="颜色">
      <el-option v-for="(item,index) in color"
                 :key="index"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>

    <!--品牌-->
    <el-select v-model="value4" name="brand" id="brand" value-key="brand" class="isOption" placeholder="品牌">
      <el-option v-for="(item,index) in brand"
                 :key="index"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>

    <!--是否支持线下试戴-->
    <el-select  v-model="value5" name="offline_try" id="offline_try" value-key="offline_try" class="isOption" placeholder="是否支持线下试戴">
      <el-option v-for="(item,index) in offline_try"
                 :key="index"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>
  </div>

</template>


<script>
  export default {
    data(){
      return {
//        框架
        frame: [],
//        材料
        material: [],
//        颜色
        color: [],
//          品牌
        brand: [],
//          价格
        price: [],
//          是否支持线下试戴
        offline_try: [],
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        toParentValue:'',
      }
    },
    props:[
      'allGoodsInfo',
    ],
    methods:{
//    选择框值改变后传给父组件
      changeValue(value) {
        this.toParentValue = value;
        this.$emit("sendDataFromChild", this.toParentValue);
      },
      //去重复方法
      removeRep: function (val, key) {
        let arr = [];
        for (let i = 0; i < val.length; i++) {
          arr.push(val[i][key]);
        }

        arr.sort(); //先排序
        let res = [];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] !== res[res.length - 1]) {
            res.push(arr[i]);
          }
        }
        return res;
      },
      //全部去重复
      allRemoveRep:function () {
        this.frame = this.removeRep(this.allGoodsInfo,'frame');
        this.material = this.removeRep(this.allGoodsInfo,'material');
        this.color = this.removeRep(this.allGoodsInfo,'color');
        this.brand = this.removeRep(this.allGoodsInfo,'b_name');
        this.offline_try = this.removeRep(this.allGoodsInfo,'g_underline');
      },
      //选项改变时获取值

    },
    //立即调用
    created:function() {
      this.allRemoveRep();
    },
  }
</script>


<style lang="less">
  @import '../../assets/css/common.less';

  /*公共样式*/
  html,body{
    margin:0;
    padding:0;
    font-size:@mainfontsize;
    color:@fontblack;
    -moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;
  }
  /*选项导航条*/
  #optionNav{
    width: 100%;
    height: 50px;
    text-align: center;
    background-color:@bggrey;
    /*margin-top:54px;*/
  }
  /*各个选项公共样式*/
  .isOption{
    width: 12%;
    line-height: 50px;
    height: 20px;
  }
</style>
