<template>
 <div class="main">
    <pagehead></pagehead>
    <pagenav></pagenav>
  </div>
</template>

<script>
import pagehead from './indexPage/pagehead'
import pagenav from './indexPage/pagenav'
export default {
  name: 'indexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    pagehead,
    pagenav
  }
}
</script>

<style lang='less' scoped>
    .main{
      width: 100%;
    }
</style>
