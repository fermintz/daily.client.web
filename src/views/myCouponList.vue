<template>
  <div class="myCouponList contents">
    <div class="page-title">
      <h2>쿠폰으로 더 저렴하게<br>데일리세탁을 이용해보세요</h2>
    </div>

    <div class="coupon_push">
      <form method="get">
        <input type="text" placeholder="쿠폰코드를 입력해주세요">
        <v-btn text>등록하기</v-btn>
      </form>
    </div>

    <div class="divider" /> 

    <div class="list-head">
      <v-icon>mdi-ticket-percent-outline</v-icon>
      <span>보유쿠폰 <b>3</b>장</span>
    </div>

    <ul>
      <!-- <li class="no-data">현재 발급 받은 쿠폰이 없습니다.</li> -->
      <li v-for="item in 3" :key="item">
        <CouponItem />
      </li>
    </ul>

    <div class="divider" /> 
 
    <dl class="coupon-guide">
      <dt>
        <v-icon>mdi-information-outline</v-icon>
        <label>쿠폰 이용안내 및 주의사항</label>
      </dt>
      <dd>
        <span>할인쿠폰은 발행대상, 발행경로, 사용대상 등에 따라 구분될 수 있으며, 할인쿠폰의 세부구분, 할인금액(할인율), 사용방법, 사용기한 및 제한에 대한 사항은 할인쿠폰 또는 서비스화면에 표시됩니다. 할인쿠폰의 종류 및 내용과 발급여부에 관하여는 데일리세탁의 정책에 따라 달라질 수 있습니다.</span>  
        <span>할인쿠폰은 현금으로 출금될 수 없으며, 할인쿠폰에 표시된 유효기간이 만료되거나 이용계약이 종료되면 소멸합니다.</span>  
        <span>할인쿠폰은 데일리세탁에서 별도로 명시한 경우를 제외하고는 타인에게 양도할 수 없으며, 부정한 목적이나 용도로 사용할 수 없습니다. 이를 위반한 경우에는 데일리세탁에서 할인쿠폰을 소멸시키거나 "회원"자격을 정지할 수 있습니다.</span>  
        <span>"회원"이 부정한 방법으로 할인쿠폰을 획득한 사실이 확인될 경우 소유 중인 할인쿠폰 회수, ID 삭제 및 형사고발 등 기타 조치를 취할 수 있습니다.</span>  
        <span>사용자가 직접 쿠폰에 명시된 내용 및 개별 주의사항(이용조건)을 확인하여야 할 책임이 있으며, 명시된 이용조건에 따라서만 쿠폰을 사용하실 수 있습니다.</span>  
      </dd>
    </dl>
   
  </div>
</template>

<script>
import CouponItem from '@/components/couponItem'

export default {
  components:{
    CouponItem
  },
}
</script>

<style lang="scss" scoped>
.myCouponList{
  .page-title{
    h2{
      font-size:24px;
      line-height:30px;
    } 

  }
  .divider{
    height:1px;
    background: #e2e2e2;
    margin:35px 0;
  }

  .coupon_push{
    form{
      display:flex;
      flex-direction: column;
      gap:10px;
      input{
        height:45px;
        padding:0 10px;
        border:1px solid #c2c2c2;
        border-radius:5px;
      }
      .v-btn{
        height:45px;
        background:#292929;
        color:#fff;
        border-radius:5px;
        font-size:14px;
        
      }
    }
  }

  .list-head{
    display:flex;
    align-items: center;
    margin-bottom:10px;
    .v-icon{
      font-size:20px;
      margin-right:5px;
    }
    span{
      font-size:16px;
      b{
        font-weight:bold;
        color:#d22929;
      }
    }
  }

  ul{
    padding:0px;

    li{
      margin-bottom:15px;
    }

    .no-data{
      display:flex;
      justify-content: center;
      align-items: center;
      text-align:center;
      height:50px;
      border-radius:25px;
      margin-bottom:20px;
      background:#f8f8f8;
    }
  }
 
  
  .coupon-guide{
 
    dt{
      display:flex;
      align-items: center;
      margin-bottom:15px;

      .v-icon{
        font-size:20px;
        margin-right:5px;
      }
      label{
        font-size:16px;
      }
    }
    dd{
      display:flex;
      flex-direction: column;
      gap:10px;
      span{
        color:#595959;
        display:block;
        font-size:12px;
      }
    }
  }
}
</style>