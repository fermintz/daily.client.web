<template>
  <div class="myCouponList contents">
    <div class="page-title">
      <h2>쿠폰으로 더 저렴하게<br>데일리세탁을 이용해보세요</h2>
    </div>

    <div class="divider" />

    <div class="list">
      <div class="no-data">
        현재 발급 받은 쿠폰이 없습니다.
      </div>

      <CouponItem v-for="item in 3" :key="item"/>

    </div>

 
    <dl class="coupon-guide">
      <dt>
        <v-icon>mdi-information-outline</v-icon>
        <label>쿠폰 사용 안내</label>
      </dt>
      <dd>
        <span>주문 1건에 1개의 쿠폰을 사용하실 수 있습니다.</span>  
        <span>결제 시 쿠폰을 적용하지 않으면 할인이 적용되지 않습니다.</span>  
        <span>유효기간이 경과된 쿠폰은 내역에서 자동 삭제됩니다.</span>  
        <span>반품시 할인 쿠폰이 적용된 상품의 경우 할인된 금액은 환불되지 않습니다.</span>  
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
    margin:30px 0;
  }

  .list{
    margin:30px 0 ;
    padding:0px;

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
    padding:15px;
    background:#f8f8f8;
    border-radius:10px;

    dt{
      margin-bottom:10px;
      .v-icon{
        font-size:18px;
        margin-right:5px;
      }
      label{
        font-weight:bold;
      }
    }
    dd{
      span{
        display:flex;
        align-items: flex-start;
        margin-bottom:5px;
        font-size:11px;
      }
      span:before{
        content:'';
        display: inline-block;
        width:2px;
        height:2px;
        margin-right:5px;
        margin-top:5px;
        background:#292929;
      }
    }
  }
}
</style>