<template>
  <div>
    <button @click="addcount">{{text}}</button>
    <br/>
    <slot name="head"></slot>
    <slot name="body"></slot>
    <!--<slot name="foot"></slot>-->
    点赞数:{{count}}
  </div>

</template>

<script>
  export default{
    name: "mybtn",
    data: function () {
      return {count: 0}
    },
    props: {
      text: {
        type: String,
        default: "我是button默认值",
        required: true,
        validator:function(value){
          return value.length>2
        }
      }
    },
    methods: {
      addcount: function () {
        this.count++;
        //触发父组件定义的myenent
        this.$emit("myevent")
      }
    }
  }


</script>


<style scoped>
  button {
    height: 40px;
    width: 200px;
    color: red;
  }
</style>

