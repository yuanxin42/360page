<template>
    <div class="main">
        <div class="newBlock">
            <h2 class="title">
                <a href="//www.360.cn/news.html" style="color:#23ac38">最新动态</a>
                <a href="//www.360.cn/news.html" class="more">更多&gt;</a>
            </h2>
            <ul class="pic">
                <li>
                    <a class="picImg" href="">
                        <img src="../../assets/imgs/t01b68886e4ba7bb7c5.png" alt="">
                    </a>
                    <div class="picTitle">
                        <a href="http://www.360.cn/n/10274.html">360公司于上交所敲锣 成功回归A股</a>
                    </div>
                </li>
                <li>
                    <a class="picImg" href="">
                        <img src="../../assets/imgs/t0103968d1bc80ae8ba.png" alt="">
                    </a>
                    <div class="picTitle">
                        <a href="http://www.360.cn/n/10274.html">360公司于上交所敲锣 成功回归A股</a>
                    </div>
                </li>
                <li>
                    <a class="picImg" href="">
                        <img src="../../assets/imgs/t014cad66c488e589f3.png" alt="">
                    </a>
                    <div class="picTitle">
                        <a href="http://www.360.cn/n/10274.html">360公司于上交所敲锣 成功回归A股</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="fastDownload">
            <h2 class="title">
                <a href="http://www.360.cn/download/index.html" style="color:#23ac38">快速下载</a>
                <a href="//www.360.cn/news.html" class="more">更多&gt;</a>
            </h2>
        </div>
    </div>
</template>
<script>
// import navobj from './navjson.json'
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
.main {
    width: @pagewidth;
    height: 290px;
    margin: 0 auto; // background: red;
    display: flex; // display:flex;
    justify-content: space-between;
    .pageTitle() {
        font-weight: normal;
        font-size: 20px;
        padding-left: 10px;
        background: url(//p4.ssl.qhimg.com/t017c7686ec51e9a8b9.png) no-repeat left 4px;
        height: 27px;
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex; // display:flex;
        justify-content: space-between; // position: relative;
        .more {
            line-height: 28px;
            color: #999;
            font-size: 14px;
        }
        .more:hover {
            color: @green
        }
    }
    .newBlock {
        width: 898px;
        height: 290px; // background: blue;
        .pic {
            display: flex;
            li {
                width: 290px;
                margin-right: 12px;
                border: 1px solid #e5e5e5;
                .picTitle {
                    margin-top: 12px;
                    margin-bottom: 12px;
                    height: 20px;
                    line-height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: center;
                }
                .picImg {
                    display: inline-block;
                    width: 100%;
                    height: 162px;
                    overflow: hidden;
                    img {
                        transition: all 0.5s ease;
                    }
                    img:hover {
                        transform: scale(1.06);
                    }
                }
            }
        }
        .title {
            .pageTitle()
        }
    }
    .fastDownload {
        width: 327px;
        height: 266px; // background: orange;
        // align-self:flex-end;
        .title {
            .pageTitle()
        }
    }
}
</style>
