<template>
  <div class="shop_search">
    <div class="inner">
      <div class="video_wrap">
        <img src="@/assets/video/car.gif">
      </div>
      <span>부산시 북구</span>
      <h2>고객님의 주소와 가까운<br>협력세탁소를 찾고 있습니다</h2>
      <p>잠시만 기다려주세요</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    setTimeout(() => {
      this.$router.push('termsView')
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.shop_search{
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;

  .inner{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .video_wrap{
      display:flex;
      align-items: center;
      justify-content: center;
      width:180px;
      height:180px;
      border-radius:90px;
      border:1px solid #e2e2e2;
      overflow:hidden;

      img{
        width:100%;
      }
    }
    span{
      display:block;
      margin-top:40px;
      color:#0CA0E2;
    }
    h2{
      font-size:18px;
      margin-top:15px;
      text-align:center;
      line-height:1.2;
      
    }
    p{
      margin:0;
      padding:0;
      margin-top:10px;
      color:#898989;
    } 
  } 
  
}
</style>