<template>
  <div class="page">
    <h1>app by 小洋</h1>
    <bottom-bar></bottom-bar>
  </div>

</template>

<script>
    import BottomBar from '@/components/BottomBar.vue'
    export default {
        components: {
            BottomBar
        },
    }
</script>
<style scoped lang="stylus">
  .page
    background #f7ab9e
    height 100%
    overflow hidden
    font-size 0.7rem
</style>
