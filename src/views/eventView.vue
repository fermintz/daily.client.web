<template>
  <div class="event_view">
    <div class="event_img">
      <img src="/img/event01.png" />
    </div>
    <div class="coupon">
      <div class="coupon_item">
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
      <h4>
        <v-icon>mdi-information-outline</v-icon>
        <label>쿠폰 주의사항</label>
      </h4>
      <ul>
        <li>할인쿠폰은 발행대상, 발행경로, 사용대상 등에 따라 구분될 수 있으며, 할인쿠폰의 세부구분, 할인금액(할인율), 사용방법, 사용기한 및 제한에 대한 사항은 할인쿠폰 또는 서비스화면에 표시됩니다. 할인쿠폰의 종류 및 내용과 발급여부에 관하여는 데일리세탁의 정책에 따라 달라질 수 있습니다.</li>
        <li>할인쿠폰은 현금으로 출금될 수 없으며, 할인쿠폰에 표시된 유효기간이 만료되거나 이용계약이 종료되면 소멸합니다.</li>
        <li>할인쿠폰은 데일리세탁에서 별도로 명시한 경우를 제외하고는 타인에게 양도할 수 없으며, 부정한 목적이나 용도로 사용할 수 없습니다. 이를 위반한 경우에는 데일리세탁에서 할인쿠폰을 소멸시키거나 "회원"자격을 정지할 수 있습니다.</li>
        <li>"회원"이 부정한 방법으로 할인쿠폰을 획득한 사실이 확인될 경우 소유 중인 할인쿠폰 회수, ID 삭제 및 형사고발 등 기타 조치를 취할 수 있습니다.</li>
        <li>사용자가 직접 쿠폰에 명시된 내용 및 개별 주의사항(이용조건)을 확인하여야 할 책임이 있으며, 명시된 이용조건에 따라서만 쿠폰을 사용하실 수 있습니다.</li>
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

    .coupon_item{
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
      display:flex;
      align-items: center;
      
      .v-icon{
        font-size:20px;
        margin-right:5px;
      }      

      label{
        font-size:16px;
        font-weight:bold;
      }
    }
    ul{
      padding:0px;
      margin-top:10px;

      li{ 
        color:#292929;
        margin-bottom:15px;
        background:#f2f2f2;
        padding:10px;
        border-radius:4px;
      }
    }
  }
}
</style>
