<template>
  <div class="orderDetail">
    <div class="page-title">
      <h2>마지막으로 확인해주세요</h2>
      <p>정보가 상이할 경우 다시 주문해주세요</p>
    </div>

    <div class="order-info">
      <h3>예약정보</h3>
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

      <div class="divider" />

      <dl>
        <dt>세탁픽업일</dt>
        <dd>세탁프리워시 금정점</dd>
      </dl>
      <dl>
        <dt>픽업시간</dt>
        <dd>070-7807-6857</dd>
      </dl>
    </div>

    <div class="divider-8" />

    <div class="product-info">
      <h3>선택한 상품</h3>
      <div class="product_btn" v-ripple>
        <div class="left">
          <strong>선택한 상품목록 보기</strong>
          <span>상품7개 <b>22,500원</b></span>
        </div>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>
    </div>

    <div class="divider-8" />

      <div class="user-message">
      <h3>요청사항</h3>

      <dl class="wash">
        <dt>
          <strong>세탁</strong>
        </dt>
        <dd>
          <div class="selectorBox">
            <input class="selector" v-ripple 
              @focus.stop="washSelectMenu = !washSelectMenu" 
              @blur.self="washSelectMenu = !washSelectMenu"
              :value="washSelectText"
            >
   
            <div class="selectMenu" v-show="washSelectMenu">
              <span 
                v-for="(item, index) in washMessage" 
                :key="index"
                @click="washSelectText = item.text, washSelectMenu = false"
              >{{item.text}}</span>
            </div>
          </div>
          <textarea placeholder="내용을 입력해주세요"></textarea>
        </dd>
      </dl>

      <dl class="repair">
        <dt>
          <strong>수선</strong>
        </dt>
        <dd>
          <textarea placeholder="ex) 검은색 바지 기장을 5cm정도 줄여주세요"></textarea>
        </dd>
      </dl>

      <dl class="delivery">
        <dt>
          <strong>배송</strong>
        </dt>
        <dd>
          
            
          <textarea placeholder="내용을 입력해주세요"></textarea>
        </dd>
      </dl>
    </div>

    <div class="divider-8" />

    <div class="coupon_use">
      <h3>쿠폰사용</h3>
      <div class="no-data">사용가능한 쿠폰이 없습니다.</div>

      <div class="coupon_btn" v-ripple>
        <div class="left">
          <strong>쿠폰사용하기</strong>
          <span>적용가능한 쿠폰이 <b>1개</b>있습니다</span>
        </div>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>

      <div class="coupon_btn use" v-ripple>
        <div class="left">
          <strong>무료배송이벤트</strong>
          <span><b>3,500</b>원 할인적용</span>
        </div>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>
    </div>

    <div class="divider-8" />

    <div class="payment">

      <h3>결제금액</h3>

      <div class="price-info">
        <dl class="product">
          <dt>주문금액</dt>
          <dd>34,500</dd>
        </dl>
        <dl class="sale">
          <dt><v-icon>mdi-plus-circle-outline</v-icon>배송비</dt>
          <dd>2,000</dd>
        </dl>
        <dl class="coupon">
          <dt><v-icon>mdi-minus-circle-outline</v-icon>쿠폰할인</dt>
          <dd>5,000</dd>
        </dl>
        <div class="divider"></div>
        <dl class="total">
          <dt>최종결제금액</dt>
          <dd>24,200</dd>
        </dl>
      </div>
    </div>

    <div class="divider-8" />

    <div class="detail-bottom">
      <h3>주문정보 및 서비스 약관동의</h3>
      <div class="terms-btn" v-ripple @click="$router.push('terms')">
        <span>서비스 이용약관 동의</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>
      <div class="terms-btn" v-ripple @click="$router.push('terms')">
        <span>운영정책 및 보상정책에 대한 동의</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>
      <div class="terms-btn" v-ripple @click="$router.push('terms')">
        <span>개인정보 수집 및 이용에 대한 동의</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>

      <div class="company">
        <ul>
          <li>
            <span>회사명</span>
            <strong>페이오티</strong>
          </li>
          <li>
            <span>사업자등록번호</span>
            <strong>599-81-00659</strong>
          </li>
          <li>
            <span>통신판매업</span>
            <strong>2021-부산강서구-0877</strong>
          </li>
          <li>
            <span>사업자주소</span>
            <strong>부산광역시 강서구 대저1동 2304-3 3층 페이오티</strong>
          </li>
          <li>
            <span>연락처</span>
            <strong>070-7807-6857</strong>
          </li>
        </ul>
      </div>

      <div class="divider" />

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
        :class="{ active: termsBtn }"
        @click="termsBtn = !termsBtn"
      >
        <v-icon>mdi-check-circle-outline</v-icon>
        <label>위 내용을 확인하였으며 결제에 동의합니다</label>
      </v-btn>

      <v-btn text class="order-finish-btn" @click="$router.push('orderFinish')">
        <strong>15,900원</strong> 결제하기
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      couponActive: true,
      termsBtn: false,
      washSelectText:'세탁',
      washSelectMenu:false,
      washMessage:[
        {id:0,text:'깨끗하게 세탁 부탁드립니다'},
        {id:1,text:'직접입력'}
      ],
      deliveryMessgae:[
        {id:0,text:'안전하게 배송해주세요'},
        {id:1,text:'수거한 백은 돌려주세요'},
        {id:2,text:'직접입력'}
      ]
      
    };
  },
  methods: {
    request(type, value) {
      const data = JSON.stringify({ type: type, value: value });
      window.ReactNativeWebView.postMessage(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.orderDetail {
  padding-bottom: 80px;

  ul {
    padding: 0px;
    margin: 0px;
  }

  .page-title {
    padding:0 20px;
    p {
      margin-top: 5px;
      color: #888;
    }
  }

  .divider {
    height: 1px;
    background: #e2e2e2;
    margin:15px 0;
  }

  .divider-8{
    height:8px;
    background:#f2f2f2;
  }

  h3 {
    font-size:16px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .order-info {
    padding:35px 20px;
    display:flex;
    flex-direction: column;
    gap:10px;

    dl {
      display: flex;
      align-items: center;

      dt {
        width: 80px;
        font-size: 12px;
        color: #888;
      }
      dd {
        flex: 1;
        border-radius: 5px;
        font-size: 14px;
      }
    }
  }


  .user-message {
    padding:35px 20px;

    dl{
      margin-bottom:20px;

      &:last-child{
        margin-bottom:0;
      }
      dt{
        margin-bottom:10px;
      }
      dd{
        textarea{
          width:100%;
          resize: none;
          min-height:80px;
          border:1px solid #c2c2c2;
          border-radius:10px;
          padding:10px;
        }
      }
    }

    .selectorBox{
      position: relative;

      .selector{
        width:100%;
        height:50px;
        padding:0 10px;
        border:1px solid #c2c2c2;
        border-radius:10px;
      }

      .selectMenu{
        position: absolute;
        width:100%;
        top:0px;
        background:#fff;
        border-radius:10px;
        display:flex;
        flex-direction: column;
        border:2px solid #292929;

        span{
          display:flex;
          align-items: center;
          padding:10px;
        }
      }
    }


    .wash{
      dd{
        textarea{
          display:block;
          margin-top:10px;
        }
      }
    }

    .repair{
      
    }
  }

  .coupon_use {
    padding:35px 20px;
    .no-data {
      display: flex;
      background: #f2f2f2;
      height: 50px;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
    }

    .coupon_btn{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:15px;
      border:1px solid #292929;
      border-radius:10px;

      .left{
        display:flex;
        flex-direction:column;
        strong{
          font-size:16px;
        }
        span{
          color:#898989;
          b{color:#f11064;}
        }
      }
    }


  }

  .product-info {
    padding:35px 20px;
    
    .product_btn{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:15px;
      border:1px solid #292929;
      border-radius:10px;

      .left{
        display:flex;
        flex-direction:column;
        strong{
          font-size:16px;
        }
        span{
          color:#898989;
          b{color:#f11064;}
        }
      }
    }
  }

  .payment {
    padding:35px 20px;

    .price-info {
      display:flex;
      flex-direction: column;
      gap:10px;

      dl {
        display: flex;
        justify-content: space-between;
        align-items: center;

        dt {
          display: flex;
          align-items: center;

          .v-icon {
            font-size: 16px;
            margin-right: 5px;
          }
        }
        dd:after {
          content: "원";
          margin-left: 5px;
        }
      }
      dl.total{
        dt{}
        dd{
          
        }
      }

  
    }
  }

  .detail-bottom {
    padding:35px 20px;
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

    h3 {
      span {
        color: #f11064;
      }
    }

    ul {
      padding: 0px;
      li {
        color: #797979;
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 15px;

        &:last-child{
          margin-bottom:0px;
        }
      }
    }
  }

  .company {
    border: 1px solid #e2e2e2;
    padding: 15px;
    border-radius: 5px;
    margin: 30px 0;

    ul {
      li {
        display: flex;
        font-size: 11px;
        margin-bottom: 5px;
        span {
          width: 100px;
          color: #898989;
        }
        strong {
          flex: 1;
        }
      }
      li:last-child {
        margin-bottom: 0px;
      }
    }
  }

  .terms-fnish-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border: 1px solid #c2c2c2;
    width: 100%;
    min-height: 50px;
    font-size: 13px;

    .v-icon {
      margin-right: 10px;
      font-size: 20px;
      color: #aaa;
    }

    &.active {
      border: 1px solid #0ca0e2;
      .v-icon {
        color: #0ca0e2;
      }
    }
  }

  .order-finish-btn {
    position: fixed;
    bottom: 0px;
    left: 0px;
    border-radius: 0px;
    width: 100%;
    height: 50px;
    margin-top: 20px;
    background: #0ca0e2;
    color: #fff;
    font-size: 16px;

    strong {
      font-weight: bold;
      margin-right: 5px;
    }
  }
}
</style>
