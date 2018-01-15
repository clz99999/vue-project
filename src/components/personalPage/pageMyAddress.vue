<template>
  <div class="pageMyAddress-bigBox">
    <personContainer>
      <div v-for="(item,index) in myAddressReceiverData" @click="CurrentAddress(index)">
        <myAddress @updatePageMyAddress="updatePageMyAddress(index)" @delPageMyAddress="delPageMyAddress(index)"
                   :myAddressReceiverData="item" :key="index"></myAddress></div>

      <div class="myAddressAdd">
        <div @click="addAddress" class="pageMyAddress-box"><i class="el-icon-circle-plus-outline"></i><span>添加地址</span>
        </div>
      </div>
    </personContainer>


    <!--修改模态框-->
    <div class="pageMyAddress-model">
      <el-dialog title="添加/修改地址" :visible.sync="dialogFormVisible">
        <el-form :model="myAddressReceiverForm">
          <el-form-item label="收货人" :label-width="formLabelWidth">
            <el-input v-model="myAddressReceiverForm.a_receiver" auto-complete="off"></el-input>
          </el-form-item>

          <div>
            <el-form-item label="省" :label-width="formLabelWidth">
              <el-select class="mySelect" v-model="provinceValue" clearable placeholder="请选择">
                <el-option
                  v-for="item in province"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="市" :label-width="formLabelWidth">
              <el-select class="mySelect" v-model="cityValue" clearable placeholder="请选择">
                <el-option
                  v-for="item in city"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="区" :label-width="formLabelWidth">
              <el-select class="mySelect" v-model="regionValue" clearable placeholder="请选择">
                <el-option
                  v-for="item in region"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>


          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input v-model="myAddressReceiverForm.a_details" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="myAddressReceiverForm.a_phone" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script>
  import personContainer from '../personal/personContainer'
  import myAddress from '../personal/myAddress'
  export default{
    name: 'pageMyReview',
    components: {//2.注册组件
      'personContainer': personContainer,
      'myAddress': myAddress
    },
    data: function () {
      return {
        defaultAddressIndex:1,
        'CurrentAddressData':{},//当前选中地址
        'myAddressReceiverData': [],
        'myAddressReceiverForm': {},
        'myAddressData': {},
        dialogFormVisible: false,
        formLabelWidth: '120px',
        province: [{
          value: '四川省',
          label: '四川省'
        }],
        provinceValue: '',
        city: [{
          value: '成都市',
          label: '成都市'
        }],
        cityValue: '',
        region: [{
          value: '高新区',
          label: '高新区'
        }, {
          value: '武侯区',
          label: '武侯区'
        }, {
          value: '双流区',
          label: '双流区'
        }, {
          value: '成华区',
          label: '成华区'
        }, {
          value: '金牛区',
          label: '金牛区'
        }],
        regionValue: ''
      }
    },
    created: function () {//创建完成
      this.pageMyAddressAxiosPost();
    },
    mounted:function(){

    },
    methods: {
      pageMyAddressAxiosPost: function () {
        var userId=sessionStorage.getItem('userId');
        var oSpan=document.getElementsByClassName('span-icon');
        var that = this;
        this.$axios.post(this.$api.user.addressList,{'userId':userId},{
          transformRequest: [function (data) {
            var str = '';
            for (var key in data) {
              str += key + "=" + data[key] + "&"
            }
            str = str.substring(0, str.length - 1);
            console.log(str)
            return str
          }]
        })
          .then(function (response) {
            that.myAddressReceiverData = response.data.data;
          })
          .then(function(){
            for (var key in that.myAddressReceiverData){
              if (that.myAddressReceiverData[key].state==1){
                oSpan[key].className='el-icon-success span-icon'
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      //鼠标点击获取当前地址
      CurrentAddress:function(index){
        this.CurrentAddressData=this.myAddressReceiverData[index];
        this.defaultAddressIndex=index;
        var oSpan=document.getElementsByClassName('span-icon');
        for (var i=0;i<oSpan.length;i++){
          oSpan[i].className='span-icon'
        }
        oSpan[index].className='el-icon-success span-icon';
      },

//     弹出修改模态框
      updatePageMyAddress: function (index) {
        this.dialogFormVisible = true;
//        this.myAddressReceiverForm = {};
        this.index=index;
        for (var key in this.myAddressReceiverData[index]) {
          this.myAddressReceiverForm[key] = this.myAddressReceiverData[index][key]
        }
      },

      //添加地址弹出模态框
      addAddress: function () {
        this.regionValue = '';
        this.cityValue = '';
        this.provinceValue = '';
        this.myAddressReceiverForm = {};
        this.dialogFormVisible = true;
        this.index=-1;
      },

      confirm:function(){
        //添加
        var userId=sessionStorage.getItem('userId');
        var that=this;
        if (this.index==-1){
          var province=this.provinceValue;
          var city=this.cityValue;
          var region=this.regionValue;
          var name=this.myAddressReceiverForm.a_receiver;
          var phone=this.myAddressReceiverForm.a_phone;
          var receiver=this.myAddressReceiverForm.a_details;
          that.$axios.post(that.$api.user.addressAdd,
            {
              'userId':userId,
              'province': province,
              'city':city,
              'region':region,
              'name':name,
              'phone':phone,
              'receiver':receiver
            }, {
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
              that.pageMyAddressAxiosPost();
              that.dialogFormVisible = false;
              that.myAddressReceiverForm={}
            })
            .catch(function (error) {
              console.log(error);
            });
        }else{
          //修改
          var addressId=this.myAddressReceiverData[this.index].a_id;
          var name2=this.myAddressReceiverForm.a_receiver;
          var phone2=this.myAddressReceiverForm.a_phone;
          var receiver2=this.myAddressReceiverForm.a_details;
          var province2=this.provinceValue;
          var city2=this.cityValue;
          var region2=this.regionValue;
          that.$axios.post(that.$api.user.addressEdit,
            {
              'userId':userId,
              'addressId':addressId,
              'province': province2,
              'city':city2,
              'region':region2,
              'name':name2,
              'phone':phone2,
              'receiver':receiver2
            }, {
              transformRequest: [function (data) {
                var str = '';
                for (var key in data) {
                  str += key + "=" + data[key] + "&"
                }
                str = str.substring(0, str.length - 1);
                console.log(str)
                return str
              }]
            }
          ).then(function (response) {
              that.pageMyAddressAxiosPost();
              that.dialogFormVisible = false;
              that.myAddressReceiverForm={}
            })
            .catch(function (error) {
              console.log(error);
            });
        }

      },


      //删除地址
      delPageMyAddress: function (index) {
        var userId=sessionStorage.getItem('userId')
        var that = this;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          //删除
          var addressId = that.myAddressReceiverData[index].a_id;
          that.$axios.post(that.$api.user.addressDel,
            {'addressId': addressId,'userId':userId}, {
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
              that.pageMyAddressAxiosPost();
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

  .pageMyAddress-box {
    margin: 50px auto;
    width: 50%;
    color: rgba(0, 0, 0, 0.42);
  }

  .pageMyAddress-box > i {
    font-size: 1.5em;
    cursor: pointer;
    font-weight: 900;
  }

  .pageMyAddress-box > span {
    font-size: 1.5em;
    cursor: pointer;
  }

  .pageMyAddress-box:hover {
    color: rgba(0, 0, 0, 0.78);
    transition: all 0.4s;
  }

  .myAddressAdd{
    height: 120px;
    width: 283px;
    border: @clzXuLine;
    font-size: @mainfontsize;
    padding: 10px;
    color: @fontblack;
    float: left;
    background-color: white;
    margin: 10px;
    text-align: center;
  }
  .myAddressAdd:hover{
    border: 1px dashed rgba(0, 0, 0, 0.3);
    transition: all 1s;
  }
  .mySelect {
    /*margin-left: -300px;*/
  }
</style>
