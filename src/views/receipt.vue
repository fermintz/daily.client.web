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

        <ul>
          <li class="th">
            <span class="name">상품명</span>
            <span class="num">검수전</span>
            <span class="num">검수후</span>
          </li>
          <li v-for="item in 10" :key="item">
            <span class="name">흰색와이셔츠</span>
            <span class="num">1개</span>
            <span class="num">2개</span>
          </li>
        </ul>

        <div class="divider" />

        <dl>
          <dt>세탁업체</dt>
          <dd>월드크리닝(덕포지사)</dd>
        </dl>
        <dl>
          <dt>전화번호</dt>
          <dd>051-123-1234</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>부산광역시 사상구 덕상로 1 (덕포동) 월드크리닝 덕포지사</dd>
        </dl>

        <div class="divider" />

        <dl>
          <dt>인수증 발급일시</dt>
          <dd>2021년 12월 17일 16:40</dd>
        </dl>


        <div class="btns">
          <v-btn text>확인완료</v-btn>
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
  padding:15px;
  background:#f2f2f2;
  min-height:100%;

  .inner{
    background:#fff;
    padding:25px;
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
    margin:20px 0;

    &.bold{
      background:#292929;
    }
  }

  dl{
    display:flex;
    justify-content: space-between;
    margin-bottom:10px;
    dt{
      margin-right:30px;
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

  ul{
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