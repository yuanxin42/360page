<template>
    <div class="main">
        <ul id="nav">
            <li class="item">
                <a href="http://www.360.cn/download/">电脑软件</a>
            </li>
            <li class="item">
                <a href="http://www.360.cn/download/#mobile">手机软件</a>
            </li>
            <li class="item live-video">
                <a class="new-icon" href="" target="_self">视频
                    <i class="item-dot">·</i>直播</a>
            </li>
            <li class="item">
                <a class="hot-icon" href="https://jinrong.360jie.com.cn/?from=360com">金融科技</a>
            </li>
            <li class="item">
                <a href="//hao.360.cn/">个人服务</a>
            </li>
            <li class="item mall">
                <a href="http://i360mall.com/?utm_source=360guanwang&amp;utm_medium=360guanwangdaohang&amp;utm_campaign=360shangcheng360guanwangdaohang">360商城</a>
            </li>
            <li class="item indemnify">
                <a href="http://fuwu.360.cn/">安全理赔</a>
            </li>
            <li class="item indemnify">
                <a class="new-icon" href="http://college.360.cn">安全教育</a>
            </li>
            <li class="item normal-last">
                <a href="http://360.net">企业服务</a>
            </li>
            <li class="item small">
                <a href="http://wan.360.cn/">游戏</a>
            </li>
            <li class="item bbs">
                <a href="http://bbs.360.cn">社区</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang='less' scoped>
    @import "../../assets/css/common.less";
    .main{
        width: 100%;
        height: 61px;
        background: #f5f5f5;
        line-height: 61px;
        overflow: hidden;
        padding-left: 150px;
        padding-right: 120px;
        .item{
            float: left;
            // width: 79px;
            margin-left: 4px;
            margin-right: 30px;
            padding-right: 14px;
            background: url(//p2.ssl.qhimg.com/t01818bd8fcb21bf8c9.png) no-repeat right 30px;
        }
        .pop{

        }
    }
</style>
