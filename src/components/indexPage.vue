<template>
 <div class="main">
    <pagehead></pagehead>
    <pagenav></pagenav>
    <lunbo></lunbo>
    <dynamic></dynamic>
    <software></software>
    <h3>2342343</h3>
  </div>
</template>

<script>
import pagehead from './indexPage/pagehead'
import pagenav from './indexPage/pagenav'
import lunbo from './indexPage/lunbo'
import dynamic from './indexPage/dynamic'
import software from './indexPage/software'
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
    software
  }
}
</script>

<style lang='less' scoped>
    .main{
      width: 100%;
    }
</style>
