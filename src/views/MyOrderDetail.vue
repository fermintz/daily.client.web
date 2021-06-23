<template>
  <div class="myOrderDetail contents">
    <div class="order-state">
      <h2>
        고객님의 세탁물 배달이<br />
        완료되었습니다
      </h2>
      <a @click="requst('route','DeliveryInfo')">배송정보 상세보기</a>

      <div class="btns">
        <v-btn text plain @click="requst('message', true)">주문취소</v-btn>
      </div>
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
          <dd>
            종 누루고 #1245
          </dd>
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
              <span>오염 제거요청(혈액/음식물/토사물/기타 등) 오염 제거요청(혈액/음식물/토사물/기타 등)</span>
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

    <div class="check-product product-info">
      <h3>검수된 상품</h3>

      <ul>
        <li>
          <span class="name">티셔츠</span>
          <span class="amount">3</span>
          <span class="price">4,000</span>
        </li>
        <li class="checked">
          <span class="name">와이셔츠</span>
          <span class="amount">3</span>
          <span class="price">4,500</span>
        </li>
        <li class="checked">
          <span class="name">정장바지<label>추가</label></span>
          <span class="amount">1</span>
          <span class="price">2,500</span>
        </li>
      </ul>
    </div>

    <div class="divider" />

    <div class="add-payment-list">
      <h3>추가결제 요청내역</h3>

      <ul>
        <li>
          <div class="top">
            <div class="state">
              <span class="date">2021.04.15 12:34</span>
              <span class="text">결제완료</span>
            </div>
            <div class="message">
              맡기신 코트에 오염정도가 심해 추가 세탁이 필요합니다
            </div>
            <div class="price">
              <label>요청금액</label>
              <span>3,000</span>
            </div>
          </div>
          <div class="bottom">
            <v-btn text plain @click="requst('addPay',true)">
              <label>추가결제진행</label>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </li>
      </ul>
    </div>

    <div class="divider" />

    <div class="payment-list">
      <h3>결제내역</h3>

      <ul>
        <li>
          <div class="top">
            <label>선결제처리</label>
            <span>신한카드(0384)</span>
          </div>
          <div class="bottom">
            <span class="price">13,600</span>
            <span class="date">2021.05.03 12:34</span>
          </div>
        </li>
        <li>
          <div class="top">
            <label>추가결제금액</label>
            <span>신한카드(0384)</span>
          </div>
          <div class="bottom">
            <span class="price">3,400</span>
            <span class="date">2021.05.03 12:34</span>
          </div>
        </li>
      </ul>

      <div class="breakdown">
        <h4>선결제처리 내역</h4>
        <dl>
          <dt>상품합계</dt>
          <dd>18,600</dd>
        </dl>
        <dl>
          <dt>쿠폰할인</dt>
          <dd>-5,000</dd>
        </dl>
        <dl>
          <dt>수거배송비</dt>
          <dd>0</dd>
        </dl>
      </div>

      <div class="total">
        <label>총 결제금액</label>
        <span>20,800</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    requst(type, value) {
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.myOrderDetail {
  padding-bottom: 26px;

  .order-state {
    a {
      display: block;
      margin-top: 15px;
      text-decoration: underline;
      color: #0ca0e2;
    }

    .btns {
      text-align: right;
      margin-top: 10px;

      .v-btn {
        height: 30px;
        min-height: 30px;
        border: 1px solid #c2c2c2;
      }
    }
  }

  .divider {
    height: 1px;
    background: #e2e2e2;
    margin: 30px 0;
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
            display:flex;
            font-size:12px;
            margin-bottom:5px;
            align-items: flex-start;
            .v-icon{font-size:14px;color:#0CA0E2}
            span{flex:1;margin-left:5px;}
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

  .check-product {
    ul {
      li.checked {
        background: #fbeff4;
        border: 0px;

        span {
          label {
            color: #f11064;
            font-size: 12px;
            margin-left: 5px;
          }
        }

        span.amount {
          color: #f11064;
        }
        span.price {
          color: #f11064;
        }
      }
    }
  }

  .add-payment-list {
    ul {
      li {
        border: 1px solid #e2e2e2;
        border-radius: 5px;

        .top {
          padding: 15px;

          .state {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .date {
              color: #888;
              font-size: 12px;
            }
            .text {
              font-size: 12px;
              color: #f11064;
            }
          }

          .price {
            display: flex;
            justify-content: space-between;
            align-items: center;

            label {
              color: #888;
              font-size: 12px;
            }
            span:after {
              content: "원";
              margin-left: 5px;
            }
          }

          .message {
            margin: 10px 0;
          }
        }

        .bottom {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          overflow: hidden;
          border-top: 1px solid #e2e2e2;

          .v-btn {
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            border: 0px;
            border-radius: 0px;
            min-height:40px;

            label {
              margin-right: 10px;
            }
            .v-icon {
              font-size: 18px;
              color: #f11064;
            }
          }
        }
      }
    }
  }

  .payment-list {
    ul {
      li {
        padding: 15px;
        background: #f8f8f8;
        border-radius: 5px;
        margin-bottom: 10px;

        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;

          .price:after {
            content: "원";
            margin-left: 5px;
          }

          .date {
            color: #888;
            font-size: 12px;
          }
        }
      }
    }

    .breakdown {
      border: 1px solid #e2e2e2;
      padding: 15px;
      border-radius: 5px;
      h4{
        margin-bottom:10px;
      }

      dl {
        align-items: center;
        justify-content: space-between;
        display: flex;
        margin-bottom: 5px;

        dt {
          font-size: 12px;
          color:#888;
        }

        dd:after {
          content: "원";
          margin-left: 5px;
        }
      }
      dl:last-child {
        margin-bottom: 0px;
      }
    }

    .total {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 30px;
      label {
        margin-right: 20px;
      }
      span {
        font-size: 24px;
      }
      span:after {
        content: "원";
        font-size: 16px;
        margin-left: 5px;
      }
    }
  }
}
</style>
