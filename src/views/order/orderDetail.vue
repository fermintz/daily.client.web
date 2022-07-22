<template>
  <div class="orderDetail">
    <div class="page-title">
      <h2>마지막으로 확인해주세요</h2>
      <p>정보가 상이할 경우 다시 주문해주세요</p>
    </div>

    <section class="order-info">
      <h3>예약정보</h3>
      <dl class="name">
        <dt>이름</dt>
        <dd>박수민</dd>
      </dl>
      <dl class="tel">
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
    </section>

    <div class="divider-8" />

    <section class="product-info">
      <h3>선택한 상품</h3>
      <div class="product_btn" v-ripple v-show="true" @click="$refs.productList.show(true)">
        <div class="left">
          <strong>선택한 상품목록 보기</strong>
          <span>상품7개 / 22,500원</span>
        </div>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>

      <div class="deferred" v-show="false">
        <strong>후불결제서비스</strong>
        <p>세탁물선택을 데일리세탁에 위탁 후 차후에 상품금액을 결제합니다</p>
        <span>보증금 <b>9,900</b>원</span>
      </div>
    </section>

    <div class="divider-8" />

    <section class="user-message">
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
    </section>

    <div class="divider-8" />

    <section class="coupon_use">
      <h3>쿠폰사용</h3>
      <div class="no-data" v-show="false">사용가능한 쿠폰이 없습니다.</div>

      <div class="coupon_btn" v-ripple v-show="true"  @click="$refs.couponUse.show(true)">
        <div class="left">
          <strong>쿠폰 적용하기</strong>
          <span>적용가능한 쿠폰이 <b>1개</b>있습니다</span>
        </div>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>

      <div class="coupon_btn use" v-ripple  v-show="false" @click="$refs.couponUse.show(true)">
        <div class="left">
          <strong>무료배송이벤트</strong>
          <span><b>3,500</b>원 할인적용</span>
        </div>
        <v-icon>
          mdi-chevron-right
        </v-icon>

      </div>
    </section>

    <div class="divider-8" />

    <section class="payment">

      <h3>결제금액</h3>

      <div class="price-info">
        <dl class="product">
          <dt>주문금액</dt>
          <dd>34,500</dd>
        </dl>
        <dl class="sale">
          <dt><v-icon>mdi-plus-circle-outline</v-icon>배송비</dt>
          <dd>3,500</dd>
        </dl>
        <dl class="coupon">
          <dt><v-icon>mdi-minus-circle-outline</v-icon>쿠폰할인</dt>
          <dd>-5,000</dd>
        </dl>
        <div class="divider"></div>
        <dl class="total">
          <dt>최종결제금액</dt>
          <dd>24,200</dd>
        </dl>
      </div>
      <p><v-icon>mdi-alert-circle-outline</v-icon>세탁 검수내용에 따라 추가금액이 발생 할 수 있습니다</p>
    </section>

    <div class="divider-8" />

    <section class="page_bottom">
      <h3>약관에 동의해주세요</h3>
      <p>동의사항 내용 미숙지로 인한 과실은 데일리세탁에서 어떠한 책임도 지지 않습니다</p>
  
      <ul class="agree">
        <li>
          <span class="check active">
            <v-icon>mdi-check</v-icon>
          </span>
          <span class="text">서비스 이용약관 동의</span>
          <v-btn text>약관보기</v-btn>
        </li>
        <li>
          <span class="check">
            <v-icon>mdi-check</v-icon>
          </span>
          <span class="text">운영정책 및 보상정책에 대한 동의</span>
          <v-btn text>약관보기</v-btn>
        </li>
        <li>
          <span class="check">
            <v-icon>mdi-check</v-icon>
          </span>
          <span class="text">개인정보 수집 및 이용동의</span>
          <v-btn text>약관보기</v-btn>
        </li>
        <li>
          <span class="check">
            <v-icon>mdi-check</v-icon>
          </span>
          <span class="text">세탁서비스 고지사항</span>
          <v-btn text>약관보기</v-btn>
        </li>
        <li class="all">
          <span class="check">
            <v-icon>mdi-check</v-icon>
          </span>
          <span class="text">모두 동의합니다</span>
        </li>
      </ul>

      <v-btn text class="finish">
        24,200원 결제하기
      </v-btn>

      <div class="company">
        <strong>페이오티</strong>
        <div class="company_info">
          <span>사업자등록번호:599-81-00659</span>
          <span>통신판매업:2021-부산강서구-0877</span>
          <span>부산광역시 강서구 대저1동 2304-3</span>
          <span>대표자:차경진</span>
          <span>고객센터:070-4709-1003</span>
        </div>
      </div>
    </section>


    <DetailInProduct ref="productList"/>
    <CouponUse ref="couponUse" />
  </div>
</template>

<script>
import DetailInProduct from '@/components/modal/detailInProduct.vue';
import CouponUse from '@/components/modal/couponUse.vue';
export default {
  components: {
    DetailInProduct, CouponUse
  },
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

  section{
    padding:24px;
  }

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
    padding-top:0px;
    display:flex;
    flex-direction: column;
    gap:6px;

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
    dl.name, dl.tel{
      dd{
        font-weight:bold;
      }
    }
  }


  .user-message {

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
          border-radius:8px;
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
        border-radius:8px;
      }

      .selectMenu{
        position: absolute;
        width:100%;
        top:0px;
        background:#fff;
        border-radius:8px;
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
  }

  .product-info {
    .product_btn{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:15px;
      border:1px solid #c2c2c2;
      border-radius:8px;

      .left{
        display:flex;
        flex-direction:column;
        strong{
          font-size:16px;
        }
        span{
          margin-top:3px;
          color:#898989;
        }
      }
    }

    .deferred{
      display:flex;
      flex-direction: column;
      gap:3px;
      padding:15px;
      border:1px solid #e2e2e2;
      border-radius:8px;
      
      strong{
        font-size:16px;
      }
      
      p{
        color:#898989;
        margin-bottom:0;
      }
      span{
        text-align:right;
        
        b{
          font-size:20px;
          font-weight:600;
          margin-left:5px;
        }
      }
    }
  }


  .coupon_use {
    .no-data{
      color:#898989;
    }
    .coupon_btn{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:15px;
      border:1px solid #c2c2c2;
      border-radius:8px;

      .left{
        display:flex;
        flex-direction:column;
        strong{
          font-size:16px;
        }
        span{
          color:#898989;
          margin-top:3px;
          color:#f11064;

          b{font-weight:bold;}
        }
      }
    }

  }

  
  .payment {
    .price-info {
      display:flex;
      flex-direction: column;
      gap:5px;

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
        dd{
          font-size:16px;
        }
        dd:after {
          content: "원";
          margin-left: 5px;
        }
      }
      dl.total{
        dd{
          font-size:22px;
          font-weight:600;
        }
      }
    }
    p{
      margin-top:30px;
      margin-bottom:0;
      color:#898989;
      .v-icon{
        font-size:15px;
        color:#f11064;
        margin-right:5px;
      }
    }
  }

  .page_bottom{
    h3{
      margin-bottom:5px;
    }
    p{
      margin-bottom:25px;
      color:#898989;
    }
    ul{
      display:flex;
      flex-direction: column;
      gap:15px;
      margin-bottom:30px;
      li{
        display:flex;
        align-items: center;
        .check{
          display:flex;
          align-items: center;
          justify-content: center;
          width:26px;
          height:26px;
          border:1px solid #292929;
          border-radius:5px;
          margin-right:10px;

          .v-icon{
            font-size:18px;
            color:#fff;
          }
        }
        .check.active{
          background:#0090FF;
          border-color:#0082E6;
        }
        .text{
          flex:1;
        }

        .v-btn{
          min-width:unset;
          height:24px;
          border:1px solid #c2c2c2;
          border-radius:5px;
          padding:0 5px;
          font-size:10px;
        }
      }

      li.all{
        padding-top:20px;
        margin-top:5px;
        border-top:1px solid #e2e2e2;
        .check{
          border-color:#292929;
        }
        .text{
          font-weight:bold;
        }
      }
    }

    .company{
      margin-top:30px;
      strong{
        display:block;
        margin-bottom:5px;
      }
      .company_info{
        display:flex;
        flex-wrap: wrap;
        font-size:12px;
        
        span{
          margin-right:5px;
          color:#898989;
        }
      }
    }

    .finish{
      height:50px;
      background:#0090FF;
      width:100%;
      color:#fff;
      font-size:16px;
      border-radius:8px;
    }
  }


}
</style>
