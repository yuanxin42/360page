<template>
 <div class="main">
    <pagehead></pagehead>
    <pagenav></pagenav>
    <lunbo></lunbo>
    <dynamic></dynamic>
    <h3>2342343</h3>
  </div>
</template>

<script>
import pagehead from './indexPage/pagehead'
import pagenav from './indexPage/pagenav'
import lunbo from './indexPage/lunbo'
import dynamic from './indexPage/dynamic'
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
    dynamic
  }
}
</script>

<style lang='less' scoped>
    .main{
      width: 100%;
    }
</style>
