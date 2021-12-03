<template>
  <div class="myOrderDetail">
    <div class="order_state">
      <div class="state_title">
        <span>주문상태</span>
        <h2>주문완료</h2>
      </div>

      <div class="state_timeline">
        <dl class="timeline_item active">
          <dt>
            <v-icon>mdi-truck</v-icon>
          </dt>
          <dd>픽업중</dd>
        </dl>

        <dl>
          <dt>
            <v-icon>mdi-tshirt-crew</v-icon>
          </dt>
          <dd>검수중</dd>
        </dl>

        <dl>
          <dt>
            <v-icon>mdi-washing-machine</v-icon>
          </dt>
          <dd>세탁중</dd>
        </dl>

        <dl>
          <dt>
            <v-icon>mdi-home</v-icon>
          </dt>
          <dd>배송중</dd>
        </dl>
      </div>
 
      <div class="btns">
        <v-btn text @click="$router.push('workHistory')">작업히스토리</v-btn>
        <v-btn text @click="$refs.orderCancle.handle(true)">주문취소</v-btn>
      </div>

      
    </div>

    <div class="line" />

    <div class="order_info_tabs">
      <div class="tabs">
        <div 
          class="btn" 
          v-ripple 
          v-for="(item, index) in ['예약정보','상품정보','결제정보','추가결제']" 
          :key="index"
          @click="tabActive = index"
          :class="{active:tabActive === index}"
        >
          {{item}}
        </div>
      </div>

      <div class="tab_contents" v-show="tabActive === 0">
        <div class="inner">
          <div class="order_number">
            <span>주문번호</span>
            <strong>CDG305D0341</strong>
            <v-btn text>복사</v-btn>
          </div>
          <div class="order-date">
            <span>수거예약일</span>
            <strong>9월 12일(토) 오전</strong>
          </div>

          <div class="divider" />

          <div class="order-info">
            <h3>예약자</h3>
            
            <div class="info_box">
              <span class="name">박수민</span>
              <span class="phone">
                <v-icon>mdi-phone</v-icon> 
                <label>010-1234-1234</label>
              </span>
              <span class="address">
                <v-icon>mdi-map-marker</v-icon> 
                <label>부산시 북구 구남언덕로 15 3층</label>
              </span>
              <span class="gate">
                <v-icon>mdi-lock</v-icon> 
                <label>#0456 +  경비버튼</label>
              </span>
            </div>
          </div>

          <div class="divider" />

          <div class="order-info">
            <h3>세탁소</h3>
            <div class="info_box">
              <span class="name">세탁프리워시 금정점</span>
              <span class="phone">
                <v-icon>mdi-phone</v-icon> 
                <label>010-8525-4561</label>
              </span>
              <span class="address">
                <v-icon>mdi-map-marker</v-icon> 
                <label>부산시 금정구 부산대학로 63번길 2 과학기술연구동 201호</label>
              </span>
            </div>
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
        </div>
      </div> <!-- inner -->
    </div> <!-- tab_contents -->

    <div class="tab_contents" v-show="tabActive === 1">
      <div class="inner">
        <div class="user_product">
          <h3>주문내역</h3>
          <div class="item">
            <div class="left">
              <label>와이셔츠</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
          <div class="item">
            <div class="left">
              <label>와이셔츠</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
        </div>

        <div class="user_product check">
          <h3>변동내역</h3>
          <div class="item">
            <div class="left">
              <label>와이셔츠</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              2
            </div>
            <div class="total">
              8,000 원
            </div>
          </div> <!-- item -->
        </div>
      </div>
    </div> <!-- tab_contents -->

    <div class="tab_contents" v-show="tabActive === 2">
      <div class="inner">
        <div class="payment-list">
          <div class="breakdown">
            <h3>선결제정보</h3>

            <div class="list">
              <dl>
                <dt>상품합계</dt>
                <dd>18,600</dd>
              </dl>
              <dl>
                <dt>상품할인</dt>
                <dd>-2,000</dd>
              </dl>
              <dl>
                <dt>쿠폰할인</dt>
                <dd>-3,000</dd>
              </dl>
              <dl>
                <dt>수거배송비</dt>
                <dd>0</dd>
              </dl>
            </div>
          </div>

          <div class="total">
            <label>총 결제금액</label>
            <span>13,600</span>
          </div>

          <div class="divider" />

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
        </div>
      </div>
    </div> <!-- tab_contents -->

    <div class="tab_contents" v-show="tabActive === 3">
      <div class="inner">
        <div class="add-payment-list">
          <h3>추가결제 요청내역</h3>
          <ul>
            <li>
              <div class="top">
                <div class="state">
                  <span class="text">결제완료</span>
                  <span class="date">2021.04.15 12:34</span>
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
                <v-btn text @click="$router.push('addDetail')">
                  <label>추가결제 상세보기</label>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <OrderCancle ref="orderCancle"/>
  </div> <!-- myOrderDetail -->
</template>

<script>
import OrderCancle from '@/components/modal/orderCancle'

export default {
  components:{
    OrderCancle,
  },
  data(){
    return{
      tabActive:0,
      timelineActive:0,
    }
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.myOrderDetail {
  padding-bottom:70px;

  ul{
    padding:0px;
  }

  .inner{
    padding:20px;
  }

  .order_info_tabs{
    .tabs{
      display:flex;
      align-items: center;

      .btn{
        display:flex;
        align-items: center;
        justify-content: center;
        flex:1;
        height:50px;
        border-bottom:2px solid #e2e2e2;
      }
      .btn.active{
        color:#0CA0E2;
        border-bottom:2px solid #0CA0E2
      }
    }
  }

  .line{
    height:10px;
    background:#f2f2f2;
  }

  .order_state {
    padding:20px;

    .state_title{
      width:100%;
      text-align:center;
      span{

      }
      h2{
        font-size:24px;
        font-weight:bold;
      }
    }
    
    .state_timeline{
      display:flex;
      align-items: flex-start;
      justify-content: center;
      margin-top:30px;
      border-radius:10px;

      dl{
        margin:0 10px;
        display:flex;
        flex-direction: column;
        align-items: center;
        text-align:center;
        
        dt{
          display:flex;
          justify-content: center;
          align-items: center;
          width:50px;
          height:50px;
          border-radius:20px;
          background:#f2f2f2;

          .v-icon{
            font-size:22px;
            color:#c2c2c2;
          }
        }
        dd{
          margin-top:8px;
          color:#aaa
        }
      }

      dl.active{
        dt{
          background:#fff;
          border:2px solid #0CA0E2;
          .v-icon{
            color:#0CA0E2;
          }
        }
        dd{
          color:#292929;
          font-weight:bold;
        }
      }
    }

    .btns {
      text-align: center;
      margin-top: 30px;

      .v-btn {
        height: 30px;
        min-height: 30px;
        margin-left:10px;
        border-radius:15px;
        background:#f2f2f2;
      }

      .v-btn:last-child{
        background:#FBEFF4;
        color:#f11064;
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

  .order_number{
    display:flex;
    align-items: center;
    border-radius:5px;
    margin-bottom:10px;
    span{
      width:80px;
    }
    strong{
      flex:1;
      font-weight:bold;
      font-size:14px;
    }
    .v-btn{
      min-width:auto;
      height:24px;
      background:#e2e2e2;
      padding:0 10px;
      color:#292929;
      font-size:11px;
    }
  }

  .order-date{
    display:flex;
    align-items: center;
    border-radius:5px;

    span{
      width:80px;
      color:#292929;
    }

    strong{
      color:#0CA0E2;
      font-size:14px;
      font-weight:bold;
      border-radius:100px;
    }
  }

  .order-info {
    .info_box{
      span{
        display:block;
        margin-bottom:5px;
        background:#f8f8f8;
        padding:10px;
        border-radius:5px;

        .v-icon{
          font-size:14px;
          margin-right:10px;
          margin-top:2px;
          color:#aaa
        }
      }
      span:last-child{
        margin-bottom:0px;
      }


      span.address, span.phone{
        display:flex;
        align-items: flex-start;
        line-height:1.4;

        
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

  .user_product{
    h3{
      margin-bottom:10px;
    }
    .item{
      display:flex;
      align-items: center;
      border:1px solid #e2e2e2;
      padding:15px;
      border-radius:5px;
      margin-bottom:10px;

      .left{
        flex:1;
        label{
          display:block;
        }
        .price{
          display:flex;
          align-items: center;
          font-size:12px;
          span{
            text-decoration: line-through;
            color:#999;
          }
          strong{
            margin-left:5px;
          }
        }
      }

      .amount{
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:18px;
        width:30px;
        height:30px;
        font-size:12px;
        background:#f2f2f2;
      }
      .total{
        width:90px;
        text-align:right;
      }
    }

    .price_total{
      background:#f2f2f2;
      border-radius:5px;
      padding:15px;
      display:flex;
      align-items: center;
      justify-content: space-between;
      span{font-size:12px;}
      strong{font-weight:bold;}
    }
  }

  .user_product.check{
    margin-top:30px;

    .item{
      background:#FBEFF4;
      border:0px;
      .amount{
        color:#f11064;
        background:#fff;
      }
      .total{
        color:#f11064;
      }
    }
  }

  .add-payment-list {
    ul {
      padding:0px;
      li {
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        overflow:hidden;

        .top {
          padding: 15px;

          .state {
            display: flex;
            align-items: center;

            .date {
              color: #888;
              font-size: 12px;
              margin-left:10px;
            }
            .text {
              font-size: 12px;
              color: #f11064;
            }
          }

          .price {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top:20px;

            label {
              color: #888;
              font-size: 12px;
              margin-right:30px;
            }
            span{
              display:flex;
              align-items: center;
              font-weight:bold;
              line-height:1;
              font-size:16px
            }
            span:after {
              content: "원";
              font-size:12px;
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
        background: #FBEFF4;
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
          .price{
            color:#f11064;
          }

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
      .list{
        padding: 15px;
        border-radius: 5px;
        background:#f8f8f8;

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
      
    }

    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      label {
        margin-right: 20px;
      }
      span {
        display:flex;
        align-items: center;
        font-size: 18px;
        font-weight:bold;
      }
      span:after {
        content: "원";
        font-size: 14px;
        margin-left: 5px;
        font-weight:normal
      }
    }
  }
}
</style>
