<template>
  <div class="myCouponList contents">
    <div class="page-title">
      <h2>쿠폰으로 더 저렴하게<br>데일리세탁을 이용해보세요</h2>
    </div>

    <div class="divider" />

    <ul class="list">
      <li class="no-data">
        현재 발급 받은 쿠폰이 없습니다.
      </li>

      <li class="coupon-item">
        <div class="left">
          <div class="coupon-info">
            <div class="price">
              <strong>3,000</strong>
              <span>원</span>
            </div>
            <div class="name">새해 명절 세탁쿠폰</div>
          </div>
          <dl class="minPrice">
            <dt>최소주문금액</dt>
            <dd>15,000 원</dd>
          </dl>
        </div>
        <div class="right">
          <img src="/img/coupon_base.png">
        </div>
        <dl class="d-day">
          D-23
        </dl>
      </li>

      <li class="coupon-item">
        <div class="left">
          <div class="coupon-info">
            <div class="price">
              <strong>3,000</strong>
              <span>원</span>
            </div>
            <div class="name">배송비 무료 지원</div>
          </div>
          <dl class="minPrice">
            <dt>최소주문금액</dt>
            <dd>30,000 원</dd>
          </dl>
        </div>
        <div class="right">
          <img src="/img/coupon_01.png">
        </div>
        <dl class="d-day">
          D-23
        </dl>
      </li>
    </ul>

 
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

    li{
      margin-bottom:15px;
    }

    li.no-data{
      text-align:center;
      color:#888;
    }
  }
  .coupon-item{
    display:flex;
    justify-content: space-between;
    border:1px solid #e2e2e2;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
    position:relative;
    border-radius:10px;

    .left{
      padding:20px;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      flex:1;
      height:120px;

      .coupon-info{
        .price{
          strong{
            font-size:24px;
            font-family:'Roboto';
            font-weight:600;
            color:#0CA0E2;
          }
          span{
            margin-left:5px;
          }
        }
        .name{
          margin-top:4px;
        }
      }

      .minPrice{
        justify-self: flex-end;
        display:flex;
        align-items: center;;
        dt{color:#888;font-size:10px;}
        dd{font-size:10px;margin-left:5px;}
      }
    }
    .right{
      width:120px;
      height:120px;
      img{
        display:block;
        width:100%;
      }
    }
    .d-day{
      position: absolute;
      top:15px;
      right:15px;
      font-size:11px;
      background:#292929;
      color:#fff;
      height:18px;
      line-height:19px;
      padding:0 10px;
      border-radius:15px;
    }
  }
  
  .coupon-guide{
    border:1px solid #e2e2e2;
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