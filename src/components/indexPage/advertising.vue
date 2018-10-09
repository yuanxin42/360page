<template>
    <div class="news">
        <div class="newsBlock">
            <div class="headline">
                <div class="pic">
                    <a href="/n/10379.html"> <img src="//p1.ssl.qhimg.com/t01fcb5a240072a2dc0.jpg" alt="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？" title="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？"> </a>
                </div>
                <div class="text">
                    <a href="/n/10379.html">360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？</a>
                </div>
            </div>
            <!-- <ul class="news-list">
                                                        <li class="item need_to_fixed">
                                                            <span class="cate"></span>
                                                            <a href="/n/10381.html" title="给360安全大脑的一封信">给360安全大脑的一封信</a>
                                                        </li>
                                                        <li class="item need_to_fixed">
                                                            <span class="cate"></span>
                                                            <a href="/n/10393.html" title="2018全国网络安全周，三六零天御带你划重点">2018全国网络安全周，三六零天御带你划重点</a>
                                                        </li>
                                                        <li class="item need_to_fixed">
                                                            <span class="cate"></span>
                                                            <a href="/n/10394.html" title="区块链被黑最惨的一次，交完会费搞“失联”？">区块链被黑最惨的一次，交完会费搞“失联”？</a>
                                                        </li>
                                                        <li class="item need_to_fixed">
                                                            <span class="cate"></span>
                                                            <a href="/n/10402.html" title="让我留下眼泪的，不止假期已经远走......">让我留下眼泪的，不止假期已经远走......</a>
                                                        </li>
                                                        <li class="item need_to_fixed">
                                                            <span class="cate"></span>
                                                            <a href="/n/10389.html" title="360谭晓生获2018年网络安全优秀人才奖，全国仅10人上榜！">360谭晓生获2018年网络安全优秀人才奖，全国仅10人上榜！</a>
                                                        </li>
                                                    </ul> -->
        </div>
        <div class="newsBlock">
            <div class="headline">
                <div class="pic">
                    <a href="/n/10379.html"> <img src="//p3.ssl.qhimg.com/t01ac4af514efed3e3b.jpg" alt="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？" title="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？"> </a>
                </div>
                <div class="text">
                    <a href="/n/10379.html">360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？</a>
                </div>
            </div>
        </div>
        <div class="newsBlock">
            <div class="headline">
                <div class="pic">
                    <a href="/n/10379.html"> <img src="//p2.ssl.qhimg.com/t015da4dd2587ccd09f.jpg" alt="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？" title="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？"> </a>
                </div>
                <div class="text">
                    <a href="/n/10379.html">360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？</a>
                </div>
            </div>
        </div>
        <div class="newsBlock">
            <div class="headline">
                <div class="pic">
                    <a href="/n/10379.html"> <img src="//p1.ssl.qhimg.com/t01e5e1229216ab16d5.png" alt="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？" title="360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？"> </a>
                </div>
                <div class="text">
                    <a href="/n/10379.html">360安全大脑深度披露：曾经席卷全球的WannaCry为何堕入反杀之路？</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
@import "../../assets/css/common.less";
.news {
    width: @pagewidth;
    height: 420px;
    margin: 50px auto 0; // background: red;
    display: flex;
    .newsBlock {
        width: 300px; // background: orange;
        margin-right: 13.3px;
        border: 1px solid #e5e5e5;
        .headline {
            position: relative;
            .pic {
                width: 100%;
                height: 170px;
                overflow: hidden;
                a {
                    img {
                        width: 100%;
                        height: 170px;
                        transition: all 0.5s ease;
                    }
                    img:hover {
                        transform: scale(1.07);
                    }
                }
            }
            .text {
                width: 274px;
                height: 32px;
                line-height: 32px;
                background: #222;
                padding-left: 20px;
                text-align: center;
                color: #fff;
                opacity: 0.9;
                position: absolute;
                bottom: 0;
                .overflow();

                a {
                    color: #fff;
                }
            }
        }
    }
}
</style>
