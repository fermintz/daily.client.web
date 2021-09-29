<template>
  <div class="add_detail">

    <div class="inner">
      <div class="page-title">
        <h2>주문 변동내역을 확인해주세요</h2>
        <p>변경된 정보에 따라 추가금이 발생할 수 있습니다</p>
      </div>

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
      <div class="divider" />
    </div>

    <div class="request">
      <h3>추가세탁 필요 안내</h3>
      <ul class="images">
        <li class="img">
          <img src="https://source.unsplash.com/random">
        </li>
        <li class="img">
          <img src="https://source.unsplash.com/random">
        </li>
        <li class="img">
          <img src="https://source.unsplash.com/random">
        </li>
        <li class="img">
          <img src="https://source.unsplash.com/random">
        </li>
      </ul>
      <div class="message">
        <v-icon>mdi-message-text-outline</v-icon>
        <span>
          추석당일 일박으로 두번째 캠핑 무사히 마쳤어요 
          저녁에 천둥 번개를 동반한 폭우중 캠핑이었는데 다행이 물샘없이 무사히 잘 즐겼습니다~
          아침부터 햇볕이좋아 장비 싹 마르는 호강을 누렸네요^^
        </span>
      </div>
      <div class="price">
        <span>요청금액</span>
        <strong>5,000 원</strong>
      </div>
    </div>

    <div class="total_info">
      <h3>
        변동사항 종합
      </h3>

      <dl>
        <dt>
          상품변동으로 인한 환불금액
        </dt>
        <dd>
          (-) 4,000 원
        </dd>
      </dl>
      <dl>
        <dt>
          상품변동으로 인한 추가금액
        </dt>
        <dd>
          0 원
        </dd>
      </dl>
      <dl>
        <dt>
          추가세탁으로 인한 추가금액
        </dt>
        <dd>
          5,000 원
        </dd>
      </dl>
      <div class="divider" />
      <dl class="last">
        <dt>
          최종 추가결제금액
        </dt>
        <dd>
          1,000
        </dd>
      </dl>

      <div class="guide">
        <p>추가결제를 진행하지 않으시면 다음 작업으로 넘어가지 않습니다</p>
        <p>추가결제 요청 후 5일이내 결제하시지 않으시면 배송비를 제외한 나머지 금액은 환불되며 세탁물은 다시 재배송됩니다</p>
      </div>
    </div>

    <div class="bottom_btns">
      <v-btn text>
        추가결제하기
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add_detail{
  padding-top:20px;
  padding-bottom:50px;

  .page-title {
    margin-bottom:30px;
    p {
      margin:0px;
      margin-top:0px;
      color: #888;
    }
  }

  h3{
    font-weight:bold;
    font-size:16px;
  }

  .inner{
    padding:0 20px;
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
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

  .request{

    h3{
      margin-bottom:10px;
      padding:0 20px;
    }

    .images{
      padding:0px;
      display:flex;
      align-items: center;
      overflow-x:scroll;
      scroll-behavior: smooth;
      padding:0 20px;

      li{
        display:flex;
        justify-content: space-between;
        align-items: center;
        min-width:150px;
        height:100px;
        margin-right:10px;
        border-radius:5px;
        overflow:hidden;
        img{
          width:100%;
        }
      }
    }
    .images::-webkit-scrollbar{
      display:none;
    }
    .images::after{
      content:' ';
      min-width:20px;
      min-height:20px;
      display:block;
    }

    .message{
      display:flex;
      margin:0px;
      margin:20px 0;
      padding:0 20px;

      span{
        flex:1;
        margin-top:3px;
      }
      .v-icon{
        margin-right:10px;
        font-size:14px;
        background:#f2f2f2;
        width:26px;
        height:26px;
        border-radius:13px;
      }
    }

    .price{
      display:flex;
      justify-content: space-between;
      align-items: center;
      border:1px solid #e2e2e2;
      padding:15px;
      border-radius:5px;
      margin:0 20px;
      span{
        font-size:12px;
        color:#898989;
      }
      strong{
        color:#f11064;
        font-weight:bold;
        font-size:16px;
      }
    }
  }

  .total_info{
    padding:20px;
    margin-top:50px;
    background:#F1F3F5;
    h3{
      margin-bottom:15px;
    }
    dl{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:5px;
      dt{
        font-size:12px;
      }
      dd{
        font-weight:bold;
        font-size:12px;
      }
    }

    dl.last{
      dt{
        font-size:14px;
      }
      dd{
        font-size:24px;
        color:#f11064;
      }
      dd::after{
        content:'원';
        font-size:14px;
        color:#292929;
      }
    }

    .guide{
      margin-top:30px;
      p{
        margin-bottom:10px;
        font-size:12px;
        color:#797979;
      }
      p:before{
        content:'*';
        color:#d22828;
        margin-right:5px;
      }
    }
  }

  .bottom_btns{
    
    position: fixed;
    left:0px;
    bottom:0px;
    width:100%;
    background:#0CA0E2;
    
    .v-btn{
      width:100%;
      height:50px;
      font-size:14px;
      color:#fff;

      .v-icon{
        font-size:18px;
        margin-left:10px;
        color:#fff
      }
    }
  }
}
</style>