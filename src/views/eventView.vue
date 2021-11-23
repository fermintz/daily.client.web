<template>
  <div class="event_view">
    <div class="event_img">
      <img src="/img/event01.png" />
    </div>
    <div class="coupon">
      <div class="coupon_img">
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
      <v-btn text class="notActive" :ripple="false">
        <label>할인쿠폰 다운받기</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <p>이미 다운받으신 쿠폰입니다</p>
    </div>

    <div class="guide">
      <h4>쿠폰 주의사항</h4>
      <ul>
        <li>- 쿠폰은 중복사용이 불가능합니다</li>
        <li>- 다운로드는 1회로 제한합니다</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.event_view{

  .event_img{
    img{
      width:100%;
      display:block;
    }
  }
  .coupon{
    padding:40px;
    display:Flex;
    flex-direction: column;
    align-items: center;

    .coupon_img{
      position: relative;
      display:flex;
      width:100%;
      max-width:300px;
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

    .v-btn{
      height:50px;
      background:#292929;
      border-radius:25px;
      margin-top:30px;
      padding:0 25px;
      label{
        font-size:16px;
        color:#fff;
        margin-right:10px;
      }
      .v-icon{
        font-size:20px;
        color:#898989;
      }
    }

    p{
      margin:0px;
      margin-top:10px;
      color:#d22828;
      font-size:12px;
    }

    .v-btn.notActive{
      background:#c2c2c2;
      .v-icon{
        color:#fff;
      }
    }
  }

  .guide{
    padding:20px 20px 50px 20px;
    width:100%;
    border-top:1px solid #e2e2e2;

    h4{
      font-size:16px;
      font-weight:bold;
    }
    ul{
      padding:0px;
      margin-top:10px;

      li{ 
        color:#898989;
        margin-bottom:5px;
      }
    }
  }
}
</style>
