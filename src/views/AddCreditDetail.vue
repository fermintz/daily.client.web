<template>
  <div class="addCreditDetail">
    <div class="top">
      <h2>추가결제를 부탁드려요!</h2>
      <p>추가결제 완료 후 세탁이 진행됩니다.</p>
    </div>

    <div class="why">
      <dl class="order-num">
        <dt>주문번호</dt>
        <dd>
          <span @click="$router.push('myOrderDetail')">12345-1564</span>
        </dd>
      </dl>
      <dl>
        <dt>요청내용</dt>
        <dd>검수 중에 와이셔츠에서 심각한 오염을 발견하였습니다 오염을 제거하기 위해 추가 
세탁이 필요합니다.</dd>
      </dl>
      <dl>
        <dt>요청일</dt>
        <dd>2022년 3월 1일 (월요일)</dd>
      </dl>
      <dl class="price">
        <dt>요청금액</dt>
        <dd>5,000</dd>
      </dl>
    </div>

    <div class="divider-8"/>

    <div class="finish">
      <v-btn text>결제하기</v-btn>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.addCreditDetail{

  .divider{
    height:1px;
    background:#e2e2e2;
  }

  .divider-8{
    height:8px;
    background:#f2f2f2;
    margin:20px 0;
  }

  .top{
    padding:20px;
    h2{
      font-weight:bold;
      font-size:24px;
    }
    p{
      color:#898989;
      margin-bottom:0;
    }
  }

  .why{
    padding:0 20px 0px 20px;
    dl{
      display:flex;
      border-bottom:1px solid #e2e2e2;
      padding:15px 0;
      &:last-child{
        border-bottom:0;
      }
      dt{
        width:90px;
        font-weight:bold;
      }
      dd{
        flex:1;
        font-size:14px;
      }
    }

    .order-num{
      dd{
        display:flex;
        span{
          display:flex;
          align-items: center;
          background:#f2f2f2;
          padding:15px;
          height:28px;
          font-size:14px;
          border-radius:14px;
        }
      }
    }

    .price{
      dd{
        font-size:18px;
        font-weight:bold;
        color:#de0059;

        &:after{
          content:'원';
          font-size:14px;
          color:#292929;
          font-weight:normal;
          margin-left:5px;
        }
      }
    }
  }

  .finish{
    position: absolute;
    width:100%;
    bottom:0px;

    .v-btn{
      height:56px;
      width:100%;
      font-size:14px;
      background:#292929;
      color:#fff;
      border-radius:0px;
    }
  }
}
</style>