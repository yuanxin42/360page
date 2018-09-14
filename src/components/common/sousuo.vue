<template>
    <div class="sousuo">
        <div class="soubox"><span>网页</span><input type="text"></div>
        <button :style="{ width: widthlength+'px'}" class="btn">360搜索</button>
    </div>
</template>
<script>
export default {
  props: {
    widthlength: {
      type: Number,
      default: 118
    }
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang='less' scoped>
    @greencolor : #23ac38;
    .sousuo{
      width: 475px;
      height: 36px;
      margin-right: 50px;
      display: flex;
      border: 1px solid @greencolor;
      line-height: 36px;
      .soubox{
        flex: 1;
        display: flex;
        input{
          border: 0;
          flex: 1;
          height: 100%;
          outline:none;
        }
      }
      .btn{
        display: block;
        float: right;
        // min-width: 300px;
        height: 38px;
        color: white;
        background: @greencolor;
        border: 0;
        margin-top: -1px;
        cursor: pointer;
      }
    }
</style>
