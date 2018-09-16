<template>
    <div class="lunbo">
        <transition-group tag="ul" name="image">
            <li :key="0" v-show="lunboIndex === 0"><img src="../../assets/imgs/t01e6e7b1790fcb40b2.jpg" alt="#"></li>
            <li :key="1" v-show="lunboIndex === 1"><img src="../../assets/imgs/t01a83ee242957a054f.png" alt="#"></li>
            <li :key="2" v-show="lunboIndex === 2"><img src="../../assets/imgs/t01e7d89615e1846abe.jpg" alt="#"></li>
            <li :key="3" v-show="lunboIndex === 3"><img src="../../assets/imgs/t016fed337a2131cd83.jpg" alt="#"></li>
        </transition-group>
        <ul class="allbtn">
            <li :class="{btncolor:btnNum===0}" @click="changemark(0)"></li>
            <li :class="{btncolor:btnNum===1}" @click="changemark(1)"></li>
            <li :class="{btncolor:btnNum===2}" @click="changemark(2)"></li>
            <li :class="{btncolor:btnNum===3}" @click="changemark(3)"></li>
        </ul>
        <div class="leftbtn lunbobtn" @click="lunboJian()">&lt;</div>
        <div class="rightbtn lunbobtn" @click="lunboAdd()">&gt;</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      lunboIndex: 0,
      timer: null,
      btnNum: 0,
      jieliu: null
    }
  },
  methods: {
    stoplunbo () {
      clearInterval(this.timer)
      this.timer = null
    },
    changemark (index) {
      this.stoplunbo()
      this.lunboIndex = index
      this.btnNum = index
      this.runlunbo()
    },
    lunboJian () { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex--
          this.btnNum--
          if (this.lunboIndex === -1) {
            this.lunboIndex = 3
            this.btnNum = 3
          }
          this.jieliu = null
          this.runlunbo()
        }, 200)
      }
    },
    lunboAdd () { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex++
          this.btnNum++
          if (this.lunboIndex === 4) {
            this.lunboIndex = 0
            this.btnNum = 0
          }
          this.jieliu = null
          this.runlunbo()
        }, 200)
      }
    },
    runlunbo () {
      this.timer = setInterval(() => {
        this.lunboIndex++
        this.btnNum++
        if (this.lunboIndex === 4) {
          this.lunboIndex = 0
          this.btnNum = 0
        }
      }, 3000)
    }
  },
  components: {
  },
  mounted () {
    this.runlunbo()
  }
}
</script>

<style lang='less' scoped>
@import "../../assets/css/common.less";
.lunbo {
    position: relative;
    width: 100%;
    height: 440px;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
        height: 440px;
        position: absolute;
    }
    .allbtn {
        position: absolute;
        bottom: 20px;
        left: calc(50% - 80px);
        li {
            width: 20px;
            height: 20px;
            margin-right: 20px;
            background: #333;
            float: left;
            border-radius: 50%;
            opacity: 0.8;
            cursor: pointer;
        }
        .btncolor {
            background: #fff;
        }
    }
    .lunbobtn {
        position: absolute;
        width: 40px;
        height: 80px;
        font-size: 40px;
        line-height: 70px;
        color: #fff;
        background: #333;
        opacity: 0.5;
        top: 180px;
        text-align: center;
        cursor: pointer;
    }
    .rightbtn {
        right: 0;
    }
    .image-enter-active {
        transform: translateX(0);
        transition: all 0.5s ease;
    }

    .image-leave-active {
        transform: translateX(-100%);
        transition: all 0.5s ease;
    }

    .image-enter {
        transform: translateX(100%);
    }

    .image-leave {
        transform: translateX(0);
    }
}
</style>
