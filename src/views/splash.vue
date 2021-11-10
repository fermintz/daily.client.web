<template>
  <div class="splash">
    <img src="@/assets/img/logo_w.svg"/>

    <span>데일리세탁</span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.splash{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
  background:#0CA0E2;

  img{
    height:100px;
    opacity: 0;
    animation: up 1s forwards ease;
  }
  span{
    position: absolute;
    bottom:50px;
    margin-top:15px;
    color:#fff;
    font-weight:400;
    font-size:18px;
    letter-spacing:-0.4px;
    animation: up 1s forwards ease;
    animation-delay: .2s;
    opacity: 0;
  }

  @keyframes up {
    0%{
      opacity: 0;
      transform:translate(0, 100px);
    }
    100%{
      opacity: 1;
      transform:none;
    }
  }

  @keyframes down {
    0%{
      opacity: 0;
      transform:translate(0, -100px);
    }
    100%{
      opacity: 1;
      transform:none;
    }
  }
}
</style>