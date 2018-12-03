<template>
    <div class="page">
        <div class="tab">
            <div class="item" id="item1">告白公园</div>
            <div class="item" id="item2">精美范文</div>
        </div>
        <div class="letter-wrap">
            <Scroll ref="scroll" :autoUpdate="true"  >

            <div class="letter" v-for="item in result">
                <div class="content">{{item.content}}
                </div>
            </div>

         </Scroll>
        </div>
        <div class="back" @click="back">返回</div>
    </div>
</template>

<script>
    import axios from 'axios'
    import BottomBar from '@/components/BottomBar.vue'
    export default {
        name: "Notice",
        mounted(){
            axios.get('/api/users/getPublicNoitce').then((result)=>{
                this.result =result.data
                console.log(result)
            })
        },
        data(){
            return {
                result:[]
            }
        },
        components:{
            BottomBar
        },
        methods:{
            back(){
                this.$router.push({
                    path:'/'
                })
            }
        }
    }


</script>

<style scoped lang="stylus">


    .page
        background #f7ab9e
        height 100%
        overflow hidden
        .back
            color white
            position absolute
            left 0.6rem
            top 0.65rem
            font-size 0.4rem
            color #d80000
        .tab
         width 6rem
         height 0.7rem
         line-height 0.7rem
         display flex
         font-size 0.4rem
         margin 0 auto
         position: fixed;
         top: 0.6rem;
         left: 2.1rem;
         .item
           flex 1
           background white
           border 1px solid #dd3a3d
         #item1
           border-radius 0.15rem 0rem 0rem 0.15rem
           border-right 0px
           background: #dd3a3d;
           color white
         #item2
           border-radius 0rem 0.15rem 0.15rem 0rem
           color #dd3a3d
     .letter-wrap
         padding-top: 1.45rem;
         height 16rem
         .letter
            background white
            width 95%
            margin 0 auto
            margin-top 0.4rem
            .content
              font-size 0.4rem
              padding 0.2rem
              text-align left
              display inline-block
              vertical-align top
              padding 0.6rem
              line-height 1rem
              color: #27272f;
              word-break: break-all;
              word-wrap: break-word;
            .img
              display inline-block
              width 30%
            img
                /*width 4rem*/
                /*height 5rem*/
</style>