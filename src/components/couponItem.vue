<template>
  <div class="coupon-item" v-ripple>
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
  </div>
</template>

<style lang="scss" scoped>
 .coupon-item{
    display:flex;
    justify-content: space-between;
    border:1px solid #e2e2e2;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
    position:relative;
    border-radius:10px;
    margin-bottom:15px;
    background:#fff;

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
</style>