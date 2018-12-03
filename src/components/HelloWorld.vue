<template >
  <div class="page">
    <div class="rabbit">
      <div class="ear" id="ear1">
        <div class="litter-ear" id="litter-ear1"></div>
      </div>
      <div class="ear" id="ear2">
        <div class="litter-ear" id="litter-ear2"></div>
      </div>
      <div class="eyes" id="eyes1">
        <div class="yanzhu" id="yanzhu1"></div>
        <div class="litter-yanjing" id="litter-yanjing1"></div>
      </div>
      <div class="eyes" id="eyes2">
        <div class="yanzhu" id="yanzhu2"></div>
        <div class="litter-yanjing" id="litter-yanjing2"></div>
      </div>
      <div class="jiuwo" id="jiuwo1"></div>
      <div class="jiuwo" id="jiuwo2"></div>
      <!--<div class="mouth"></div>-->
      <!--<div class="huxu"></div>-->
      <div class="mouth big-mouth">
        <div class="toungue"></div>
      </div>
      <div class="bizi">

      </div>
    </div>
    <div class="letter clear">
      <div class="clear">
        <div class="heart"></div>
        <div class="line1-box">
          <div class="text">小洋情书</div>
          <!--<div class="line orange"></div>-->
          <!--<div class="line gray"></div>-->
        </div>
      </div>
      <div class="line2-box">
        <div class="line2 orange"></div>
        <div class="line2 gray"></div>
        <div class="line2 orange"></div>
      </div>

      <router-link to="muban" class="circle-box">
        <div  class="circle-button">
          <span class="text">立即告白</span>
        </div>
      </router-link>
    </div>

  </div>

</template>

<script>
    export default {
        name:"Index"
    }
</script>

<style scoped lang="stylus">
  .page
    height: 100%;
    background: #f7ab9e;
    background: -webkit-gradient(linear, left top, left bottom, from(#f7ab9e), to(#edc9c3));
    background: linear-gradient(#f7ab9e, #edc9c3);
    padding-top 1rem
    box-sizing border-box

  .rabbit
    -webkit-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8);
    position: relative;
    z-index: 999999;
    .ear
      width: 1.7rem;
      height: 1.3rem;
      background #e69a9a
    /* border-radius: 90% 50% 60% 60%; */
    /*animation earAnimation 5s infinite linear*/
    .litter-ear
      width: 0.8rem;
      height: 0.5rem;
      background: #d73d3d;
      border-radius: 1rem 1rem 0.4rem 0.4rem;
    #litter-ear1
      position: absolute;
      left: 0.6em;
      top: 0.6rem;
    #litter-ear2
      position: absolute;
      right: 0.6em;
      top: 0.6rem;
    #ear1
      position: absolute;
      left: 1rem;
      top: 1rem;
      border-radius: 1rem 1rem 0.4rem 0.4rem;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);


    #ear2
      position: absolute;
      right: 1rem;
      top: 1rem;
      border-radius: 1rem 1rem 0.4rem 0.4rem;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);

    .jiuwo
      width: 1.388888888888889rem;
      height: 1.3rem;
      background-color: #e69a9a;
      margin: auto;
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
      z-index: 9999;
    #jiuwo1
      position absolute
      top 6.3rem
      left 1rem
      border-radius: 80% 80% 60% 60%;
    #jiuwo2
      position: absolute;
      top: 6.3rem;
      right: 1rem;
      border-radius: 80% 60% 70% 60%;
    .eyes
      width: 1.2rem;
      height: 1.2rem;
      background: #825931;
      border-radius: 90% 90% 80% 80%;
      .yanzhu
        background: #fff;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        position: absolute;
      .litter-yanjing
        background: #825931;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        position: absolute;
        bottom: 0.4rem;
        right: 0.2rem;
        animation letterEye 2s infinite linear
      #litter-yanjing1
        bottom: 0.4rem;
        right: 0.2rem;
      #litter-yanjing2
        bottom: 0.4rem;
        left: 0.5rem;
      #yanzhu1
        bottom: 0.3rem;
        right: 0.2rem;
      #yanzhu2
        bottom: 0.3rem;
        left: 0.4rem;
    #eyes1
      position: absolute;
      left: 2.8rem;
      top: 3rem;
    #eyes2
      position: absolute;
      right: 2.8rem;
      top: 3rem;

    .huxu
      width: 0.1rem;
      height: 1rem;
      margin: 0 auto;
      /* margin-top: 3rem; */
      background: #ffb2c6;
    .bizi
      position: absolute;
      top: 4.5rem;
      left: 50%;
      margin-left: -0.1rem;
      width: 0.2rem;
      height: 0.2rem;
      background: #e69a9a;
      margin: 0 auto;
      border-radius: 50%;

    .mouth
      position: absolute;
      top: 5.2rem;
      left: 50%;
      right: 0rem;
      background-color: #ec7977;
      overflow: hidden;
      -webkit-transform-origin: center top;
      transform-origin: center top;
      -webkit-animation: laugh 1.9s linear 0s infinite;
      animation: laugh 6s linear 0s infinite;
      width: 1rem;
      height: 1rem;
      margin-left: -0.4rem;
      border-radius: 0 0 50% 50%;
      -webkit-box-shadow: 2px 2px 0px 0px rgba(63,106,52,0.3);
      box-shadow: 2px 2px 0px 0px rgba(63,106,52,0.3);
      .toungue
        width: 1rem;
        height: 1rem;
        background-color: #c71f1c;
        border-radius: 20px;
        position: absolute;
        top: 25px;
        right: 3px;

  .letter
    background: #fff;
    width: 8rem;
    height: 8rem;
    position: absolute;
    top: 6.2rem;
    left: 1rem;
    -webkit-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    .line
      width: 3.2rem;
      height: 0.4rem;
      background: #f7ab9c;
      margin-bottom: 0.4rem;
      border-radius: 10px;
    .line2
      width: 80%;
      height: 0.4rem;
      margin: 0 auto;
      background: #f7ab9c;
      margin-bottom: 0.4rem;
      border-radius: 10px;
    .line2-box
      margin-top: 0.4rem;
    .line1-box
      float left
      text-align left
      margin-top 1rem
      margin-left 1rem
      .text
        font-size 0.7rem
    .heart
      float left
      margin-top: 0.4rem;
      margin-left: 0.6rem;
      background url("../assets/images/heart.png")
      width: 2.4rem;
      height: 2.4rem;
      background-size: 100%;
  .circle-button
    width: 3rem;
    height: 3rem;
    background: #c86e70;
    border-radius: 50%;
    font-weight: bold;
    z-index: 999999;
    margin: 0 auto;
    color: #ffffff;
    -webkit-box-shadow: 0.2rem 0.18rem 0.8rem #a22f2f;
    /*box-shadow: 0.2rem 0.18rem 0.8rem #664e5e;*/
    -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    -webkit-animation: gelatine 2s infinite;
    animation: gelatine 2s infinite;
    .text
      display: inline-block;
      font-size: 0.8rem;
      width: 2rem;
      margin-top: 0.4rem;
  .orange
    background #e69a9a !important
  .gray
    background #d5c2c2 !important
  @keyframes gelatine {

    0%{
      transform: scale(1, 1);
    }
    84%{
      transform: scale(1, 1);
    }
    85% {
      -webkit-transform: scale(0.9, 1.1);
      transform: scale(0.9, 1.1);
    }

    90% {
      -webkit-transform: scale(1.1, 0.9);
      transform: scale(1.1, 0.9);
    }

    95% {
      -webkit-transform: scale(0.95, 1.05);
      transform: scale(0.95, 1.05);
    }

    100%{
      transform: scale(1, 1);
    }


  }

  @keyframes earAnimation {
    0%{
      border-radius 0%
    }
    50%{
      border-radius 0%
    }
    75%{
      border-radius 100%

    }

    100%{
      border-radius 0%


    }
  }
  @keyframes laugh {
    0%{
      -webkit-transform: scale(0, 0);
      transform: scale(0, 0);
    }
    49%{
      -webkit-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    50% {
      -webkit-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    60% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    70% {
      -webkit-transform: scale(1, 0.6);
      transform: scale(1, 0.6);
    }
    80% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    90% {
      -webkit-transform: scale(1, 0.6);
      transform: scale(1, 0.6);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
  @keyframes letterEye{
    0% {
      transform: translate(0rem,0rem);
    }
    20%{
      transform: translate(0.15rem,0.1rem);
    }
    40% {
      transform: translate(0rem,0rem);
    }
    60%{
      transform: translate(-0.15rem,-0.1rem);
    }
    70%{
      transform: translate(-0.15rem,0.1rem);
    }
  }

</style>