<template>
  <div class="coupon_item" v-ripple>
    <div class="coupon_info">
      <label>배송비 무료쿠폰</label>
      <strong>3,500</strong>
      <span>5만원 이상 구매 시 할인</span>
      <span>다운로드 후 30일동안 사용가능</span>
    </div>
    <div class="coupon_bg">
      <label>COUPON</label>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 .coupon_item{
    position: relative;
    display:flex;
    width:100%;
    background:#fff;
    overflow:hidden;
    z-index:3;
    border-radius:10px;
    border:1px solid #e2e2e2;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.05);

    .coupon_info{
      flex:1;
      position: relative;
      z-index:2;
      text-align:left;
      padding:18px;
      label{
        display:block;
        color:#292929;
        font-size:13px;
        font-weight:bold;
      }
      strong{
        display:block;
        font-size:40px;
        font-family:'Roboto';
        font-weight:600;
        line-height:1;
        color:#0CA0E2;
        margin:5px 0;
      }
      strong:after{
        content:'원';
        font-family:'Noto Sans KR';
        font-size:16px;
        margin-left:5px;
        color:#292929;
      }
      span{
        display:block;
        font-size:11px;
        margin:0px;
        border-radius:10px;
        color:#898989;
      }
    }

    .coupon_bg{
      position: relative;
      display:flex;
      align-items: center;
      justify-content: center;
      overflow:hidden;
      width:75px;
      background:#0CA0E2;
      
      label{
        font-family:'Roboto';
        font-weight:600;
        letter-spacing: 6px;
        color:#0E7AAB;
        writing-mode: tb-rl;
      }

      span{
        position: absolute;
        width:20px;
        height:20px;
        border-radius:100%;
        background:#fff;
        left:-10px;
      }
    }
  }
</style>