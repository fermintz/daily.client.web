<template>
  <div class="receipt">
    <div class="inner">
      <div class="logo">
        <img src="@/assets/img/logo.svg">
        <span>데일리세탁</span>
      </div>
      <div class="cont">
        <dl>
          <dt>주문번호</dt>
          <dd>5D0IFK-FA2H</dd>
        </dl>

        <div class="divider bold" />

        <dl>
          <dt>주문자</dt>
          <dd>박수민</dd>
        </dl>
        <dl>
          <dt>픽업/배달장소</dt>
          <dd>부산광역시 사상구 덕상로 1 (덕포동) 월드크리닝 덕포지사</dd>
        </dl>
        <dl>
          <dt>세탁픽업일</dt>
          <dd>2021년 12월 17일 오전</dd>
        </dl>

        <div class="divider" />

        <ul class="product">
          <li class="th">
            <span class="name">상품명</span>
            <span class="num">수량</span>
          </li>
          <li v-for="item in 10" :key="item">
            <span class="name">흰색와이셔츠</span>
            <span class="num">2개</span>
          </li>
        </ul>

        <div class="divider" />

        <ul class="credit">
          <li>
            <dl>
              <dt>결제상태</dt>
              <dd>정상</dd>
            </dl>
            <dl>
              <dt>거래일시</dt>
              <dd>2021년 12월 17일 15:50</dd>
            </dl>
            <dl>
              <dt>결제금액</dt>
              <dd>24,500 원</dd>
            </dl>
          </li>
          <li class="cancle">
            <dl>
              <dt>결제상태</dt>
              <dd>취소</dd>
            </dl>
            <dl>
              <dt>거래일시</dt>
              <dd>2021년 12월 17일 15:50</dd>
            </dl>
            <dl>
              <dt>결제금액</dt>
              <dd>24,500 원</dd>
            </dl>
          </li>
        </ul>

        <div class="divider" />

        <div class="company">
          <strong>(주)페이오티</strong>
          <ul>
            <li>사업자등록번호: 599-81-00659</li>
            <li>통신판매업: 2021-부산강서구-0877</li>
            <li>부산광역시 강서구 대저1동 2304-3</li>
            <li>대표: 차경진 | 연락처: 070-4709-1003</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.receipt{
  min-height:100%;

  .inner{
    background:#fff;
    padding:20px;
    padding-bottom:60px;
    border-radius:5px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  }

  .logo{
    padding:30px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      height:60px;
    }

    span{
      margin-top:10px;
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;

    &.bold{
      background:#292929;
    }
  }

  dl{
    display:flex;
    justify-content: space-between;
    margin-bottom:10px;
    dt{
      width:100px;
      color:#898989;
    }
    dd{
      text-align:right;
      flex:1;
    }

    &:last-child{
      margin-bottom:0px;
    }
  }

  ul.product{
    li.th{
      margin-bottom:15px;
      span{
        font-weight:bold;
      }
    }
    li{
      margin-bottom:10px;
      display:flex;
      span.name{
        flex:1;
      }
      span.num{
        text-align:center;
        width:60px;
      } 

      &:last-child{
        margin-bottom:0;
      }
    }
  }

  ul.credit{
    li{
      background:#f8f8f8;
      margin-bottom:10px;
      padding:15px;
      border-radius:5px;

      dl{
        margin-bottom:6px;

        &:last-child{
          margin-bottom:0;
        }
      }

      &:last-child{
        margin-bottom:0px;
      }

      &.cancle{
        background:#FBEFF4;
      }
    }
  }

  .company{
    strong{

    }

    ul{
      margin-top:10px;
      font-size:12px;
      color:#898989;
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