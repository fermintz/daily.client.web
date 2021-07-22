<template>
  <div class="orderDetail contents">
    <div class="page-title">
      <h2>마지막으로 확인해주세요</h2>
      <p>정보가 상이할 경우 다시 주문해주세요</p>
    </div>

    <div class="divider" />

    <div class="order-info">
      <h3>예약정보</h3>
      <div class="order-date">
        <v-row>
          <v-col cols="6">
            <dl>
              <dt>수거일</dt>
              <dd>12일(토)</dd>
            </dl>
          </v-col>
          <v-col cols="6">
            <dl>
              <dt>수거시간</dt>
              <dd>오전(08:00~12:00)</dd>
            </dl>
          </v-col>
        </v-row>
      </div>

      <div class="user-info">
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
    </div>

    <div class="divider" />

    <div class="user-message">
      <h3>요청메세지</h3>
      <dl class="washing">
        <dt><v-icon>mdi-message-text-outline</v-icon>세탁소에게</dt>
        <dd>
          <ul class="user-check">
            <li>
              <v-icon>mdi-check-circle-outline</v-icon>
              <span
                >오염 제거요청(혈액/음식물/토사물/기타 등) 오염
                제거요청(혈액/음식물/토사물/기타 등)</span
              >
            </li>
            <li>
              <v-icon>mdi-check-circle-outline</v-icon>
              <span>수선 요청</span>
            </li>
          </ul>
          <div class="user-text">바지 기장 접은 만큼 줄여주세요!</div>
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
          <span class="name">티셔츠</span>
          <span class="amount">3</span>
          <span class="price">4,000</span>
        </li>
        <li>
          <span class="name">와이셔츠</span>
          <span class="amount">2</span>
          <span class="price">3,000</span>
        </li>
      </ul>
    </div>

    <div class="divider" />

    <div class="payment-info">
      <div class="payment-info-top">
        <h3>결제정보</h3>
        <v-btn text plain @click="request('modal',true)">쿠폰사용</v-btn>
      </div>

      <div class="price-info">
        <dl class="product">
          <dt>상품합계</dt>
          <dd>34,500</dd>
        </dl>
        <dl class="coupon">
          <dt>(-)쿠폰할인</dt>
          <dd>5,000</dd>
        </dl>
        <dl class="delivery">
          <dt>(+)수거배송비</dt>
          <dd>3,500</dd>
        </dl>
      </div>

      <div class="total">
        <label>최종 결제금액</label>
        <span>33,000</span>
      </div>
    </div>

    <!-- <div class="divider" />

    <div class="credit-select">
      <h3>결제카드 선택</h3>
      <ul class="card-list">
        <li
          v-for="(item, index) in 2"
          :key="item"
          @click="creditSeleted = index"
        >
          <div class="card-info">
            <label>현대카드</label>
            <div class="bottom">
              <span class="cate">법인</span>
              <span class="card-num">0080</span>
            </div>
          </div>
          <v-icon :color="creditSeleted === index ? '#0CA0E2' : '#e2e2e2'"
            >mdi-check-circle</v-icon
          >
        </li>
      </ul>

      <div class="btns">
        <v-btn icon plain>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div> -->

    <div class="divider" />

    <div class="detail-bottom">
      <div 
        class="terms-btn" 
        @click="request('termsModal', true)"
        v-ripple
      >
        <span>서비스정책(세탁정책, 보상정책, 유실물처리방침)에 대한 동의</span>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </div>
      <div class="terms-btn" v-ripple>
        <span>개인정보 수집 및 이용동의</span>
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
        <v-icon :color="termsBtn ? '#0CA0E2' : '#e2e2e2'"
          >mdi-check-circle-outline</v-icon
        >
        <label> 위 내용을 확인하였으며 결제에 동의합니다 </label>
      </v-btn>

    </div>
  </div>
</template>

<script>
export default {
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
    .order-date {
      margin-bottom: 20px;
      .col-6:last-child {
        dl {
          border-right: 0px;
        }
      }
      dl {
        border-right: 1px solid #e2e2e2;
        dt {
          font-size: 12px;
          color: #888;
          margin-bottom: 5px;
        }
      }
    }

    .user-info {
      border-radius: 5px;

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
  }

  .user-message {
    dl {
      margin-bottom: 20px;

      dt {
        font-size: 12px;
        margin-bottom: 5px;
        color: #888;

        .v-icon {
          margin-right: 5px;
          font-size: 16px;
        }
      }

      dd {
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        font-size: 14px;
      }
    }
    dl.washing {
      dd {
        .user-check {
          li {
            display: flex;
            font-size: 12px;
            margin-bottom: 5px;
            align-items: flex-start;
            .v-icon {
              font-size: 14px;
              color: #0ca0e2;
            }
            span {
              flex: 1;
              margin-left: 5px;
            }
          }
        }
        .user-text {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #e2e2e2;
        }

        background: #f1f5f9;
      }
    }
    dl.delivery {
      dd {
        background: #f6f3ea;
      }
    }

    dl:last-child {
      margin-bottom: 0px;
    }
  }

  .product-info {
    ul {
      li {
        display: flex;
        align-items: center;
        padding: 10px;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        margin-bottom: 6px;

        span.name {
          flex: 1;
        }
        span.price {
          margin-left: 30px;
        }
        span.price::after {
          content: "원";
          margin-left: 5px;
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
          font-size: 12px;
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

      label {
        font-size: 12px;
        margin-right: 20px;
      }
      span {
        font-size: 24px;
        font-weight: bold;
      }
      span:after {
        content: "원";
        font-size: 14px;
        margin-left: 5px;
        font-weight: normal;
      }
    }
  }

  .credit-select {
    .card-list {
      li {
        display: flex;
        border: 1px solid #e2e2e2;
        padding: 15px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        margin-bottom: 10px;

        .card-info {
          flex: 1;
          margin-right: 15px;

          label {
            font-size: 16px;
          }

          .bottom {
            margin-top: 5px;
            span {
              margin-right: 10px;
              font-size: 12px;
            }
          }
        }

        .v-icon {
          font-size: 32px;
        }
      }
      li:last-child {
        margin-bottom: 0px;
      }
    }

    .btns {
      text-align: center;
      margin-top: 20px;
      .v-btn {
        width: 50px;
        height: 50px;
        background: #e2e2e2;
        v-icon {
          color: #fff;
        }
      }
    }
  }

  .detail-bottom {
    .terms-btn {
      display: flex;
      align-items: center;
      padding: 15px;
      background: #f2f2f2;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 5px;

      span {
        flex: 1;
        margin-right: 15px;
        font-size: 12px;
      }

      .v-icon {
        color: #c2c2c2;
        font-size: 28px;
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
      li {
        color: #888;
        font-size: 12px;
        line-height:18px;
        margin-bottom: 15px;
      }
    }
  }

  .terms-fnish-btn {
    margin-top: 10px;
    border: 1px solid #e2e2e2;
    width: 100%;
    min-height: 50px;
    .v-icon {
      margin-right: 10px;
    }
  }

  .finish-btn {
    min-height: 50px;
    background: #0ca0e2;
    color: #fff;
    width: 100%;
    margin-top: 20px;
    font-size: 16px;
  }
}
</style>
