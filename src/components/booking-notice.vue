<template>
  <div class="booking-notice">
    <div class="title-line">
      <v-icon>mdi-alert-circle</v-icon>
      <div class="text">
        <h2>
          내일 세탁물을 <b>수거</b>할 예정입니다
        </h2>
        <p><span>13:00시까지</span> 세탁물을 문 앞에 놓아주세요</p>
      </div>
    </div>

    <div class="user-order-list">
      <div class="title-line">
        <h4>예약하신 세탁물</h4>
        <a>상세보기</a>
      </div>
      
      <ul>
        <li>
          <span>와이셔츠</span>
          <span>1개</span>
        </li>
        <li>
          <span>패딩점퍼</span>
          <span>1개</span>
        </li>
      </ul>

      <p>※ 주문량에 따라 수거시간이 지연 될 수 있습니다</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.booking-notice{
  border-bottom:1px solid #e2e2e2;
  margin-bottom:40px;
  padding-bottom:40px;

  .title-line{
    display:flex;
    align-items: flex-start;

    .v-icon{margin-right:10px;color:#F11064;}
    .text{
      flex:1;
      
      h2{        
         b{color:#F11064;} 
      }

      p{
        color:#888;
        margin-top:5px;
        span{color:#F11064;}
      }
    }
  }
}

.user-order-list{
  margin-top:30px;

  .title-line{
    margin-bottom:10px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    a{
      font-size:12px;
      text-decoration: underline;
    }
  }
  ul{
    padding:15px;

    border-radius:5px;
    background: #f8f8f8;
  }
  li{
    display:flex;
    justify-content: space-between;
    margin-bottom:8px;
  }
  li:last-child{margin-bottom:0px;}


  p{
    text-align:right;
    font-size:12px;
    margin-top:10px;
    color:#888;
  }
}

</style>