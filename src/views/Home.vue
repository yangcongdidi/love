<template>
    <div class="page">
        <HelloWorld ></HelloWorld>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import BottomBar from '@/components/BottomBar.vue'
import Flexable from '../assets/flexable.min.js'
export default {
  name: 'home',
  components: {
    HelloWorld,
      BottomBar
  },
    data(){
      return {
          show:true,
      }
    }
}
</script>

<style lang="stylus" scoped>
    .page
     width 100%
     height 100%
</style>
