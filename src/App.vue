<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus">

#app
  /*font-family 'Avenir', Helvetica, Arial, sans-serif*/
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  width 100%
  height 100%
body,html
  margin 0
  padding 0
  height 100%
input[type=button], input[type=submit], input[type=file], button
  -webkit-appearance: none;
a
  display block
  text-decoration: none
  color #815d4b
.img-response
  max-width 100%
  height auto
  display inline-block
.input
  margin:0;
  padding:0;
.vue-toast-demo .tips-container .text
  font-size: 0.4rem !important;
  margin: 0;
.vue-toast-demo .tips-container
  width 80% !important
  height 1.5rem !important
  line-height 1.5rem !important
.clear:after
  display block
  content ' '
  height 0px
  clear both
</style>

<script>

</script>