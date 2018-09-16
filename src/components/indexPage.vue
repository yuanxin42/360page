<template>
 <div class="main">
    <pagehead></pagehead>
    <pagenav></pagenav>
    <lunbo></lunbo>
    <h3>2342343</h3>
  </div>
</template>

<script>
import pagehead from './indexPage/pagehead'
import pagenav from './indexPage/pagenav'
import lunbo from './indexPage/lunbo'
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
    lunbo
  }
}
</script>

<style lang='less' scoped>
    .main{
      width: 100%;
    }
</style>
