<template>
    <div class="main">
        <ul class="nav">
            <!--  其实正常应该是一个json串，遍历获取li -->
            <li :class="{item:true,onstyle:liIndex===index}" v-for="(item,index) in liobj" :key='index'>
                <a :href="item.url" v-on:mouseover="changeActive(index)" v-on:mouseout="removeActive()">{{item.title}}</a>
            </li>
        </ul>
        <div :style="{height:navBlock}" class="navBlock">
             <a href="http://www.360.cn/weishi/index.html?source=homepage" target="_blank"> <img src="//p.ssl.qhmsg.com/d/inn/6ea3b7d2/pc/p_weishi.png" alt="360安全卫士">360安全卫士</a>
        </div>
    </div>
</template>
<script>
import navobj from './navjson'
export default {
  data () {
    return {
      liobj: [],
      liIndex: null,
      navBlock: 0 + 'px'
    }
  },
  methods: {
    changeActive (index) {
      this.liIndex = index
      this.navBlock = 300 + 'px'
    },
    removeActive (index) {
      this.liIndex = null
      this.navBlock = 0 + 'px'
    }
  },
  mounted () {
    this.liobj = navobj.data
  }
}
</script>
<style lang='less' scoped>
@import "../../assets/css/common.less";
.main {
    width: 100%;
    position: relative;
    .nav {
        height: 61px;
        background: #f5f5f5;
        line-height: 61px;
        padding-left: 150px;
        padding-right: 120px;
        overflow: hidden;
        .item {
            float: left; // width: 79px;
            margin-left: 4px;
            margin-right: 30px;
            padding-right: 14px;
            background: url(//p2.ssl.qhimg.com/t01818bd8fcb21bf8c9.png) no-repeat right 30px;
        }
        .onstyle {
            background-position: right -164px;
        }
    }
    .navBlock {
        width: 100%;
        background: #fff;
        transition: all 0.5s ease;
        position: absolute;
        overflow: hidden;
        z-index: 1;
    }
}
</style>
