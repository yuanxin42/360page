<template>
  <div class="main">
    <pagehead></pagehead>
    <pagenav></pagenav>
    <lunbo></lunbo>
    <dynamic></dynamic>
    <software></software>
    <advertising></advertising>
    <div class="copyright">
      <p>Copyright©2005-2018 360.cn 版权所有 360互联网安全中心</p>
      <p>
        <a style="color:#999" href="http://www.miitbeian.gov.cn/">京ICP证080047号[京ICP备08010314号-6]</a>
        <a style="color:#999" href="http://www.360.cn/licence1.html"> 文网文[2009]024号</a>
        <a style="color:#999" href="http://www.360.cn/licence2.html"> 新出网证（京）字069号</a>
        <a style="color:#999" href="http://www.360.cn/gongshangyingyezhizhao.html">工商营业执照</a>
      </p>
      <p></p>
      <p>
        <a style="color:#999" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000006"><img src="//p.ssl.qhmsg.com/t01d8eda6e551cf2615.png"><span class="lastTit">京公网安备 11000002000006号</span></a>
      </p>
    </div>

  </div>
</template>

<script>
import pagehead from './indexPage/pagehead'
import pagenav from './indexPage/pagenav'
import lunbo from './indexPage/lunbo'
import dynamic from './indexPage/dynamic'
import software from './indexPage/software'
import advertising from './indexPage/advertising'
export default {
  name: 'indexPage',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    pagehead,
    pagenav,
    lunbo,
    dynamic,
    software,
    advertising
  }
}
</script>

<style lang='less' scoped>
@import "../assets/css/common.less";
.main {
  width: 100%;
  .copyright {
    margin: 0 auto;
    width: @pagewidth;
    padding: 40px 0 40px 0;
    p {
      text-align: center;
      font-size: 12px;
       .lastTit{
          vertical-align: middle;
       }
    }
  }
}
</style>
