<template>
  <div class="myOrderDetail">
    <div class="section order-state">
      <span>주문상태</span>
      <h2>픽업완료</h2>
    </div>

    <div class="section add-credit">
      <div class="add-credit-item" v-ripple @click="$router.push('addCreditDetail')">
        <div class="top">
          <label><v-icon>mdi-alert-circle</v-icon> 추가결제요청</label>
          <span>요청일 2022.03.01</span>
        </div>
        <div class="message">
          {{creditMessage}}
        </div>
        <div class="price">
          <strong>5,000</strong>
          <v-icon>mdi-chevron-right-circle</v-icon>
        </div>
      </div>

       <!-- <div class="add-credit-item" v-ripple>
        <div class="top">
          <label><v-icon>mdi-alert-circle</v-icon> 추가결제요청</label>
          <span>요청일 2022.03.01</span>
        </div>
        <div class="message">
          추가결제를 요청합니다
        </div>
        <div class="price">
          <strong>2,500</strong>
          <v-icon>mdi-chevron-right-circle</v-icon>
        </div>
      </div> -->
    </div>

    <div class="section top-btns">
      <div class="inner">
        <v-btn text @click="$router.push('myOrderNotify')">작업알림내역</v-btn>
      </div>
    </div>
     

    <div class="divider-8" />

    <div class="section res-info">
      <div class="section-tit">
        <h4>예약정보</h4>
        <div class="order-number">
          <label>주문번호</label> 
          <span>35819-1596</span>
        </div>
      </div>

      <dl>
        <dt>주문한 사람</dt>
        <dd>박수민</dd>
      </dl>
      <dl>
        <dt>연락처</dt>
        <dd>010-8525-4561</dd>
      </dl>
      <dl>
        <dt>픽업/배달 장소</dt>
        <dd>부산시 북구 구남언덕로 15 3층</dd>
      </dl>

      <div class="divider" />

      <dl>
        <dt>픽업일</dt>
        <dd>2022년 3월 8일</dd>
      </dl>
      <dl>
        <dt>픽업시간</dt>
        <dd>오전</dd>
      </dl>

      <div class="divider" />

      <dl class="message">
        <dt>세탁관련 전달메세지</dt>
        <dd>
          <span>등록된 메세지가 없습니다.</span>
        </dd>
      </dl>

      <dl class="message">
        <dt>배송관련 전달메세지</dt>
        <dd>
          <span>
            현관에서 연락주시면 문을 열어드립니다.
          </span>
          <span>
            배송에 사용된 가방은 돌려주세요
          </span>
        </dd>
      </dl>

      <v-btn text @click="$refs.orderCancle.handle(true)">예약취소</v-btn>
      <p><span>*</span>예약취소는 주문 후 2시간전에만 가능합니다. 이후 주문 취소건에 대해서는 배송에 대한 패널티가 부과될 수 있습니다</p>
    </div> <!-- res-info -->

    <div class="divider-8" />

    <div class="section delivery-info">
      <div class="section-tit">
        <h4>픽업/배송 정보</h4>
      </div>
      <div class="no-data">
        픽업 및 배송정보가 등록되지 않았습니다.
      </div>
      <dl class="delivery-item">
        <dt>이미지</dt>
        <dd>
          <span>2022년 3월 8일 22시</span>
          <strong>픽업이 완료되었습니다</strong>
        </dd>
      </dl>
      <dl class="delivery-item">
        <dt>이미지</dt>
        <dd>
          <span>2022년 3월 12일 15시</span>
          <strong>배송이 완료되었습니다</strong>
        </dd>
      </dl>
    </div>

    <div class="divider-8" />

    <div class="section product-info">
      <div class="section-tit">
        <h4>상품정보</h4>
      </div>

      <div class="product-tabs">
        <v-btn 
          text
          v-for="(item, index) in ['내가 예약한 상품','검수 완료 후 상품']" 
          :key="index" 
          :class="{active:index === tabActive}"
          @click="tabActive = index"
        >
          {{item}}
        </v-btn>
      </div>

      <div class="product-table">
        <div class="item head">
          <span class="name">상품명</span>
          <span class="amount">수량</span>
          <span class="price">금액</span>
        </div>
        <div class="divider"/>
        <div class="item">
          <span class="name">흰색 와이셔츠</span>
          <span class="amount">1개</span>
          <span class="price">3,000</span>
        </div>
        <div class="item">
          <span class="name">맨투맨/후드티</span>
          <span class="amount"> 2개</span>
          <span class="price">5,000</span>
        </div>
        <div class="item">
          <span class="name">솜 패딩 롱(내장재 합성섬유)</span>
          <span class="amount">1개</span>
          <span class="price">9,000</span>
        </div>
        <div class="divider"/>
        <div class="item">
          <span class="name">봄맞이 할인쿠폰</span>
          <span class="price minus">- 5,000</span>
        </div>
        <div class="item">
          <span class="name">배송비</span>
          <span class="price">3,000</span>
        </div>
        <div class="item">
          <span class="name">추가결제비</span>
          <span class="price">5,000</span>
        </div>
        <div class="item">
          <span class="name">검수 후 차액</span>
          <span class="price minus">- 3,000</span>
        </div>
        <div class="divider"/>
        <div class="item total">
          <span class="name">합계</span>
          <span class="price">28,000</span>
        </div>
        <div class="divider"/>
        <p>상품은 예약당시 최종가격으로 표기됩니다.</p>
        <p>검수 후 차액정보는 금액에 따라 추가결제 및 부분환불이 있을 수 있습니다.</p>
      </div>
    </div>

    <div class="divider-8" />

    <div class="section credit-info">
      <div class="section-tit">
        <h4>결제정보</h4>
      </div>

      <div class="credit-item">
        <span>결제일시 2022.02.04 15:02</span>
        <label>현대비자개인(2719)</label>
        <strong>28,000</strong>
      </div>

      <div class="credit-item">
        <span>결제일시 2022.02.04 15:02</span>
        <label>현대비자개인(2719)</label>
        <strong>- 28,800</strong>
      </div>

    </div>



    <OrderCancle ref="orderCancle" />


  </div>
  <!-- myOrderDetail -->
</template>

<script>
import OrderCancle from "@/components/modal/orderCancle";

export default {
  components: {
    OrderCancle,
  },
  data() {
    return {
      tabActive: 0,
      timelineActive: 0,
      creditMessage:'검수 중에 와이셔츠에서 심각한 오염을 발견하였습니다 오염을 제거하기 위해 추가 세탁이 필요합니다. 없을때는 "추가결제를 요청합니다"로 작성'
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.myOrderDetail {
  padding-bottom: 70px;

  .section{
    padding:20px;

    .section-tit{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:20px;

      h4{
        font-size:18px;
        font-weight:bold;
      }

      .order-number{
        display:flex;
        align-items: center;
        background:#f2f2f2;
        padding:0 10px;
        height:24px;
        border-radius:12px;
        label{
          font-size:11px;
          color:#797979;
          margin-right:5px;
        }
        span{
          font-size:14px;
          font-weight:bold;
        }
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
  }

  .divider-8{
    height:8px;
    background:#f2f2f2;
  }

  .order-state{
    padding:20px;
    h2{
      font-size:24px;
      font-weight:bold;
    }
  }

  .top-btns{
    padding-top:0px;
    .inner{
      display:flex;
      align-items: center;

      .v-btn{
        height:40px;
        border:1px solid #292929;
        font-size:13px;
        padding:0 10px;
        margin-right:8px;
        flex:1;

        &:last-child{
          margin-right:0;
        }
      }
    }

    p{
      margin-bottom:0;
      margin-top:10px;
      font-size:12px;
      color:#898989;

      span{
        color:#d22828;
        margin-right:5px;
      }
    }
    
    
  }

  .add-credit{
    padding-top:0px;
  
    .add-credit-item{
      width:100%;
      border:1px solid #de0059;
      padding:15px;
      border-radius:10px;
      margin-bottom:10px;

      &:last-child{
        margin-bottom:0px;
      }
      .top{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:10px;

        label{
          font-size:16px;
          font-weight:bold;
          color:#292929;

          .v-icon{
            color:#de0059;
            font-size:20px;
          }
        }

        span{
          color:#898989;
        }

      }

      .message{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price{
        margin-top:10px;
        display:flex;
        justify-content: flex-end;
        align-items: center;

        strong{
          font-size:22px;
          margin-right:20px;
          font-weight:bold;
          color:#de0059;

          &:after{
            content:'원';
            font-size:14px;
            margin-left:5px;
            font-weight:normal;
            color:#292929;
          }
        }

        .v-icon{
          color:#292929;
        }
      }
    }
  }
  

  .res-info{
    .divider{
      margin:20px 0;
    }

    dl{
      display:flex;
      align-items: flex-start;
      margin-bottom:12px;

      dt{
        font-size:12px;
        width:110px;
      }

      dd{
        flex:1;
        font-size:14px;
      }

      &:last-child{
        margin-bottom:0px;
      }
    }

    dl.message{
      display:block;
      margin-bottom:30px;
      &:last-child{
        margin-bottom:0px;
      }
      dt{
        width:100%;
        margin-bottom:10px;
        font-size:13px;
      }
      dd{
        flex:auto;
        width:100%;
        span{
          display:block;
          margin-bottom:8px;
          border-radius:5px;
          background:#F2F3F8;
          padding:10px;
          font-size:13px;
        }
      }
    }

    .v-btn{
      width:100%;
      height:40px;
      border:1px solid #292929;
      font-size:14px;
    }
    
    p{
      margin-bottom:0;
      margin-top:15px;

      span{
        color:#de0059;
        margin-right:5px;
      }
    }
  }

  .delivery-info{
    .no-data{
      background:#f8f8f8;
      text-align:center;
      padding:10px;
      border-radius:5px;
    }
    dl{
      display:flex;
      align-items: center;
      margin-bottom:20px;

      &:last-child{
        margin-bottom:0;
      }

      dt{
        display:flex;
        align-items: center;
        justify-content: center;
        width:80px;
        height:80px;
        border-radius:5px;
        overflow:hidden;
        background:#f2f2f2;
        margin-right:20px;
      }

      dd{
        span{
          display:block;
          color:#898989;
          font-size:12px;
        }
        strong{
          display:block;
          font-size:14px;
        }
      }
    }
  }

  .product-info{
    .divider{
      margin:15px 0;
    }
    .product-tabs{
      display:flex;
      margin-bottom:20px;
      border-radius:5px;
      overflow:hidden;
      background:#f2f2f2;

      .v-btn{
        flex:1;
        height:50px;
        font-size:14px;
        border-radius:0px;
        color:#898989;
      }

      .v-btn.active{
        background:#292929;
         color:#fff;
      }

    }
    .item{
      display:flex;
      align-items: center;
      margin-bottom:10px;
      justify-content: space-between;
      
      span.name{
        flex:1;
        margin-right:15px;
      }
      span.amount{
        text-align:center;
        width:40px;
      }
      span.price{
        text-align:right;
        width:70px;
      }
      span.minus{
        color:#d22828;
      }
    }

    .item.total{
      align-items: center;
      span.price{
        font-size:18px;
        font-weight:bold;
      }
    }

    p{
      margin-bottom:5px;
      font-size:12px;
      color:#898989;

      &:last-child{
        margin-bottom:0;
      }
    }
  }

  .credit-info{
    .credit-item{
      background:#FBEFF4;
      border-radius:5px;
      padding:15px;
      margin-bottom:10px;
      &:last-child{
        margin-bottom:0px;
      }

      label{
        font-size:14px;
        display:block;
      }
      span{
        font-size:12px;
        color:#898989;
        display:block;
      }
      strong{
        font-size:14px;
        font-weight:bold;
        display:block;

        &:after{
          content:'원';
          font-size:12px;
          font-weight:normal;
          margin-left:5px;
        }
      }
    }
  }

  


}
</style>
