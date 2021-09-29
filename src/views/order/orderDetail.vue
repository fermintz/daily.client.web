<template>
  <div class="orderDetail contents">
    <div class="page-title">
      <h2>마지막으로 확인해주세요</h2>
      <p>정보가 상이할 경우 다시 주문해주세요</p>
    </div>

    <div class="divider" />

    <div class="order-info">
      <h3>예약정보</h3>
      <dl class="order-date">
        <dt>수거일</dt>
        <dd>9월 12일(토)</dd>
      </dl>
      <dl>
        <dt>이름</dt>
        <dd>박수민</dd>
      </dl>
      <dl>
        <dt>전화</dt>
        <dd>010-8525-4561</dd>
      </dl>
      <dl>
        <dt>주소</dt>
        <dd>
          부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티
        </dd>
      </dl>
      <dl>
        <dt>출입문</dt>
        <dd>종 누루고 #1245</dd>
      </dl>
    </div>

    <div class="divider" />

    <div class="shop_info">
      <h3>세탁소정보</h3>
      <dl>
        <dt>세탁소명</dt>
        <dd>세탁프리워시 금정점</dd>
      </dl>
      <dl>
        <dt>연락처</dt>
        <dd>070-7807-6857</dd>
      </dl>
      <dl>
        <dt>대표자</dt>
        <dd>차경진</dd>
      </dl>
      <dl>
        <dt>주소지</dt>
        <dd>부산광역시 강서구 대저1동 2304-3</dd>
      </dl>
    </div>

    <div class="divider" />

    <div class="user-message">
      <h3>요청메세지</h3>
      <dl class="washing">
        <dt><v-icon>mdi-message-text-outline</v-icon>세탁소에게</dt>
        <dd>
          <ul>
            <li>
              오염 제거요청(혈액/음식물/토사물/기타 등) 오염 제거요청(혈액/음식물/토사물/기타 등)
            </li>
            <li>
              수선 요청
            </li>
            <li>
              바지 기장 접은 만큼 줄여주세요!
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="delivery">
        <dt><v-icon>mdi-message-text-outline</v-icon>기사님에게</dt>
        <dd>현관문앞에 나둘게요</dd>
      </dl>
    </div>

    <div class="divider" />

    <div class="product-info">
      <h3>선택한 상품</h3>
      <ul>
        <li>
          <div class="left">
            <label>정장/교복 자켓</label>
            <div class="price">
              <span>7,900</span>
              <strong>7,900원</strong>
            </div>
          </div>
          <div class="amount">2개</div>
          <div class="total_price">
            15,800
          </div>
        </li>
      </ul>
    </div>

    <div class="divider" />

    <div class="payment-info">
      <div class="payment-info-top">
        <h3>결제정보</h3>
        <v-btn text plain @click="$refs.couponUse.handle(true)">쿠폰사용</v-btn>
      </div>

      <div class="price-info">
        <dl class="product">
          <dt><v-icon>mdi-plus-circle</v-icon>상품합계</dt>
          <dd>34,500</dd>
        </dl>
        <dl class="sale">
          <dt><v-icon>mdi-minus-circle</v-icon>상품할인</dt>
          <dd>2,000</dd>
        </dl>
        <dl class="coupon">
          <dt><v-icon>mdi-minus-circle</v-icon>쿠폰할인</dt>
          <dd>5,000</dd>
        </dl>
        <dl class="delivery">
          <dt><v-icon>mdi-plus-circle</v-icon>수거배송비</dt>
          <dd>3,500</dd>
        </dl>
      </div>

      <div class="total">
        <label>최종 결제금액</label>
        <span>31,000</span>
      </div>
    </div>


    <div class="divider" />

    <div class="detail-bottom">
      <div 
        class="terms-btn" 
        v-ripple
        @click="$router.push('terms')"
      >
        <span>서비스정책(세탁정책, 보상정책, 유실물처리방침)에 대한 동의</span>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </div>
      <div 
        class="terms-btn" 
        v-ripple
        @click="$router.push('terms')"
      >
        <span>개인정보 수집 및 이용동의</span>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </div>
      <div 
        class="terms-btn" 
        v-ripple
        @click="$router.push('terms')"
      >
        <span>보상정책 대한 동의</span>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </div>

      <div class="guide">
        <h3>최소 주문금액은 <span>15,000원</span>입니다</h3>

        <ul>
          <li>
            예약시간 2시간 전까지 취소가 가능합니다 이후에는 취소 수수료
            3,000원이 발생합니다. 취소는 [이용내역] > [상세보기] 페이지에서
            취소할 수 있습니다.
          </li>
          <li>
            케이라벨이 없거나, 세탁표기법상 드라이클리닝 및 물세탁이 모두 금지된
            제품은 전문가가 소재와 상태를 확인 후 세탁을 진행합니다. 다만
            세탁결과에 대해서는 책임을 지지않으니 유의해 주십시오
          </li>
        </ul>
      </div>

      <v-btn
        text
        plain
        class="terms-fnish-btn"
        @click="termsBtn = !termsBtn"
        :style="{ background: termsBtn ? '#F1F5F9' : '#fff' }"
      >
        <v-icon :color="termsBtn ? '#0CA0E2' : '#a2a2a2'"
          >mdi-check-circle-outline</v-icon
        >
        <label> 위 내용을 확인하였으며 결제에 동의합니다 </label>
      </v-btn>
      
      <v-btn text class="order-finish-btn" @click="$router.push('orderFinish')">
        결제하기
      </v-btn>

    </div>

    <CouponUse ref="couponUse"/>

  </div>
</template>


<script>
import CouponUse from '@/components/modal/couponUse'



export default {
  components:{
    CouponUse
  },
  data() {
    return {
      creditSeleted: 0,
      termsBtn: false,
    };
  },
  methods:{
    request(type, value){
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
 }
};
</script>

<style lang="scss" scoped>
.orderDetail {
  padding-bottom: 80px;

  ul{
    padding:0px;
    margin:0px;
  }

  .page-title {
    p {
      margin-top: 5px;
      color: #888;
    }
  }

  .divider {
    height: 1px;
    background: #e2e2e2;
    margin: 40px 0;
  }

  h3 {
    margin-bottom: 20px;
  }

  .order-info {
    dl {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      dt {
        width: 60px;
        font-size: 12px;
        color: #888;
      }
      dd {
        flex: 1;
        background: #f8f8f8;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
      }
    }
  }

  .shop_info{
    dl {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      dt {
        width: 60px;
        font-size: 12px;
        color: #888;
      }
      dd {
        flex: 1;
        background: #f8f8f8;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
      }
    }
  }

  .user-message {
    dl {
      margin-bottom: 40px;

      dt {
        font-size: 12px;
        margin-bottom:10px;
        color: #888;

        .v-icon {
          margin-right: 5px;
          font-size: 16px;
        }
      }
    }

    dl.washing {
      dd {
        ul {
          li {
            background:#F1F5F9;
            margin-bottom:10px;
            padding:10px;
            border-radius:5px;
          }
          li:last-child{
            margin-bottom:0px;
          }
        }
      }
    }
    dl.delivery {
      dd {
        background: #f6f3ea;
        padding:10px;
        border-radius:5px;
      }
    }

    dl:last-child {
      margin-bottom: 0px;
    }
  }

  .product-info {
    ul {
      padding:0px;
      li {
        display: flex;
        align-items: center;
        padding: 10px;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        margin-bottom: 6px;

        .left{
          flex:1;
          margin-right:15px;

          .price{
            span{
              font-size:11px;
              text-decoration: line-through;
              color:#999;
              margin-right:5px;
            }
            strong{
              font-size:11px;
            }
          }
        }

        .amount{
          display:flex;
          justify-content: center;
          align-items: center;
          border-radius:18px;
          width:36px;
          height:36px;
          background:#f2f2f2;
          font-size:11px;
        }

        .total_price{
          width:90px;
          font-weight:500;
          text-align:right;
        }
        .total_price:after{
          content:'원';
          margin-left:2px;
          font-size:12px;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }

  .payment-info {
    .payment-info-top {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        margin: 0px;
      }

      .v-btn {
        min-height: 30px;
        height: 30px;
        color: #f11064;
        border: 1px solid #f11064;
      }
    }

    .price-info {
      border: 1px solid #e2e2e2;
      padding: 15px;
      border-radius: 5px;

      dl {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        dt {
          display:flex;
          align-items: center;
          font-size: 12px;
          .v-icon{
            font-size:16px;
            margin-right:5px;
          }
        }
        dd:after {
          content: "원";
          margin-left: 5px;
        }
      }
      dl.coupon {
        dd {
          color: #f11064;
        }
      }
      dl:last-child {
        margin-bottom: 0px;
      }
    }

    .total {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      margin-top: 20px;

      label{
        margin-right:30px;
        font-size:12px;
      }
      span {
        display:flex;
        align-items: flex-end;
        font-size: 24px;
        line-height: 1;
        font-weight: bold;
      }
      span:after {
        content: "원";
        font-size: 12px;
        margin-left: 5px;
        font-weight: normal;
      }
    }
  }

 
  .detail-bottom {
    .terms-btn {
      display: flex;
      align-items: center;
      padding: 10px;
      background: #f2f2f2;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 5px;

      span {
        flex: 1;
        margin-right: 15px;
        font-size: 14px;
      }

      .v-icon {
        color: #aaa;
      }
    }
  }

  .guide {
    margin-top: 30px;
    h3 {
      span {
        color: #f11064;
      }
    }

    ul {
      padding:0px;
      li {
        color: #797979;
        font-size: 12px;
        line-height:18px;
        margin-bottom: 15px;
      }
    }
  }

  .terms-fnish-btn {
    margin-top: 10px;
    border: 1px solid #c2c2c2;
    width: 100%;
    min-height: 50px;
    font-size:14px;

    .v-icon {
      margin-right: 10px;
      color:#aaa;
    }
  }

  .order-finish-btn{
    position: fixed;
    bottom:0px;
    left:0px;
    border-radius:0px;
    width:100%;
    height:50px;
    margin-top:20px;
    background:#0ca0e2;
    color:#fff;
    font-size:16px;
    font-weight:bold;
  }
}
</style>
