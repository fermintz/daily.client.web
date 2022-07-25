<template>
  <div class="receipt">
    
    <section class="top">

      <div class="page_title">
        <img src="@/assets/img/logo.svg">
        <h2>추가결제요청이 있습니다</h2>
        <p><b>나의정보 > 상품상세정보</b> 에서 추가결제를 진행해주세요</p>
        <p></p>
      </div>

      <dl class="order_number">
        <dt>주문번호</dt>
        <dd>5D0IFK-FA2H</dd>
      </dl>

      <div class="divider"></div>

      <dl>
        <dt>주문자</dt>
        <dd>박수민</dd>
      </dl>
      <dl>
        <dt>연락처</dt>
        <dd>010-8525-4561</dd>
      </dl>
      <dl>
        <dt>주소지</dt>
        <dd>부산시 북구 구남언덕로 15</dd>
      </dl>
    </section>

    <div class="divider bold"></div>

    <!-- <section class="guide">
      <h4>안내메세지</h4>
      <p>
        안녕하세요 데일리세탁입니다. 
      </p>
    </section> -->


    <section class="product">
      <h4>상품정보</h4>
      <ul>
        <li class="item" v-for="item in 5" :key="item">
          <div class="item_info">
            <span class="name">
              맨투맨/후드티이름이 길면 어떻게 될까요요요용 하하하하하
            </span>
            <span class="amount">
              1개
            </span>
            <span class="price">
              5,000원
            </span>
          </div>
        </li>
        <li class="item add">
          <div class="item_top">
            <span class="add">추가</span>
          </div>
          <div class="item_info">
            <span class="name">
              흰색 와이셔츠
            </span>
            <span class="amount">
              1개
            </span>
            <span class="price">
              3,000원
            </span>
          </div>
        </li>
        <li class="item change">
          <div class="item_top">
            <span class="change">변경</span>
          </div>
          <div class="item_info">
            <span class="name">
              맨투맨/후드티
            </span>
            <span class="amount">
              1개
            </span>
            <span class="price">
              5,000원
            </span>
          </div>
          <div class="change_info">
            <span class="amount">
              2개
            </span>
            <span class="price">
              10,000원
            </span>
          </div>
        </li>
        <li class="item del">
          <div class="item_top">
            <span class="del">삭제</span>
          </div>
          <div class="item_info">
            <span class="name">
              울/모직 코트(롱)
            </span>
            <span class="amount">
              1개
            </span>
            <span class="price">
              8,000원
            </span>
          </div>
        </li>
      </ul>
    </section>

    <div class="divider bold"></div>

    <section class="add_charge">
      <h4>확인내용</h4>
      <div class="item">
        <span>세탁물 외 추가결제금액</span>
        <strong>3,500원</strong>
      </div>
      
      <p>수선 비용 및 오염제거 비용 등</p>
    </section>

    <div class="divider bold"></div>

    <section class="price_info">
      <h4>금액정보</h4>
      <ul>
        <li>
          <span>전체 상품금액</span>
          <strong>25,000원</strong>
        </li>
        <li>
          <span><v-icon size="15px">mdi-plus-circle-outline</v-icon>추가요청금액</span>
          <strong>3,500원</strong>
        </li>
        <li>
          <span><v-icon size="15px">mdi-plus-circle-outline</v-icon>추가된 상품금액</span>
          <strong>5,000원</strong>
        </li>
        <li>
          <span><v-icon size="15px">mdi-minus-circle-outline</v-icon>제거된 상품금액</span>
          <strong>-8,000원</strong>
        </li>
        <li class="total">
          <span>최종 확정금액</span>
          <strong>22,000원</strong>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  components:{
  
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.receipt{
  min-height:100%;
  background:#fff;
  font-size:14px;
  padding-bottom:80px;

  .page_title{
    padding:30px 0;

    img{
      height:40px;
      display:block;
      margin-bottom:25px;
    }
    h2{
      font-size:24px;
      letter-spacing: -0.7px;
    }
    p{
      margin-top:10px;
      b{
        color:#D20059;
      }
    }
  }

  
  .divider{
    height:1px;
    margin:20px 0;
    background:#e2e2e2;

    &.bold{
      margin:0;
      height:8px;
      background:#f2f2f2;
    }
  }

  section{
    padding:25px;
    h4{
      margin-bottom:20px;
      font-size:16px;
      font-weight:bold;
    }
  }

  section.top{
    dl.order_number{
      display:flex;
      justify-content: space-between;
      align-items: center;
      dd{
        font-weight:bold;
      }
    }
    dl{
      display:flex;
      margin-bottom:10px;
      &:last-child{
        margin-bottom:0;
      }
      
      dt{
        width:80px;
        color:#898989;
        font-size:13px;
      }
    }
  }

  section.product{
    ul{
      display:flex;
      flex-direction: column;
      gap:10px;
    }
    .item{
      padding:15px;
      border:1px solid #e2e2e2;
      border-radius:3px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
      .item_top{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:8px;
        
        span{
          display:flex;
          align-items: center;
          border:1.5px solid #292929;
          height:18px;  
          font-size:11px; 
          padding:0 10px;
          border-radius:10px;
        }

        span.add{
          color:#0090FF;
          border-color:#0090FF;
        }
        span.change{
          color:#D20059;
          border-color:#D20059;
        }
      }
      .item_info{
        display:flex;
        align-items: center;
        .name{
          flex:1;
        }
        .amount{
          text-align:right;
          width:40px;
        }
        .price{
          text-align:right;
          width:80px;
        }
      }
    }

    .item.change{
      .item_info{
        .amount,.price{
          text-decoration: line-through;
        }
      }
      .change_info{
        margin-top:5px;
        display:flex;
        justify-content: flex-end;

        .amount{
          text-align:right;
          width:40px;
          color:#D20059;
        }
        .price{
          text-align:right;
          width:80px;
          color:#D20059;
        }
      }
    }

    .item.del{
      background:#f2f2f2;
      box-shadow: none;
      border:0px;
      .item_info{
        span{
          color:#898989;
        }
      }
    }
  }

  .add_charge{
    .item{
      display:flex;
      flex-direction: column;
      border-left:5px solid #e2e2e2;
      padding-left:10px;
      gap:5px;
      justify-content: space-between;

      strong{
        font-weight:bold;
      }
    }

    p{
      background:#f2f2f2;
      padding:15px;
      border-radius:5px;
      margin-top:15px;
    }
  }

  .price_info{
    ul{
      display:flex;
      flex-direction: column;
      gap:10px;
      li{
        display:flex;
        align-items: center;
        justify-content: space-between;

        span{
          display:flex;
          align-items: center;
          font-size:14px;
          color:#898989;
          .v-icon{
            margin-right:5px;
          }
        }
        strong{
          font-size:16px;
        }
      }
      li.total{
        margin-top:10px;
        border-top:1px solid #e2e2e2;
        padding-top:20px;
        span{
          color:#292929;
        }
        strong{
          font-family:'Roboto';
          font-size:24px;
          font-weight:600;
        }
      }
    }
  }


  .btns{
    text-align:center;
    margin:40px 0 20px 0;
    .v-btn{
      border:1px solid #292929;
      height:45px;
      border-radius:25px;
      padding:0px;
      width:150px;
      font-size:14px;
    }
  }
 
}
</style>