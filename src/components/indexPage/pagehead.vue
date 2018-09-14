<template>
    <div class="head">
        <div class="headTit">
            <div class="titLeft">
                <a href="https://www.360.cn/"><img src="../../assets/img/t01d91636862957f76e.png" alt="#"></a>
            </div>
            <div class="titMiddle">
                <sousuo></sousuo>
            </div>
            <div class="titRight">
                <div class="user-btn">
                    <a class="chinese-version" href="//www.360.cn/">中文版</a>
                    <a href="http://www.360totalsecurity.com/">Global</a>
                </div>
                <div class="user-btn">
                    <a href="//i.360.cn/login/?src=pcw_home&amp;destUrl=https://www.360.cn/" target="_self">登录</a>
                    <span class="line">|</span>
                    <a href="//i.360.cn/reg/?src=pcw_home&amp;destUrl=https://www.360.cn/" target="_self">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sousuo from '../common/sousuo'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    sousuo
  }
}
</script>

<style lang='less' scoped>
@import "../../assets/css/common.less";
.head {
    width: @pagewidth;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    padding-top: 25px;
    padding-bottom: 25px;
    // background: red;
    margin: 0 auto;
    .titLeft {
        float: left;
        width: 350px;
        padding-right: 50px;
        // background: blue;
        text-align: right;
    }
    .titMiddle {
        width: 525px;
        float: left;
    }
    .titRight {
        width: 275px;
        float: left;
        overflow: hidden;
        // background: paleturquoise;
        .user-btn{
            // padding-left: 20px;
            padding-right: 20px;
            float: left;
            a{
                font-size: 13px;
                color: #999;
                margin-right: 12px;
            }
            .chinese-version{
                color: #23ac38
            }
            .line{
                color: #999;
                margin-right: 12px;
            }
        }
    }
}
</style>
