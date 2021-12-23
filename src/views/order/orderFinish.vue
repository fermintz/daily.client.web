<template>
  <div class="orderFinish">
    <div class="finish-title">
      <div class="title-video">
        <div class="image">
          <img src="@/assets/video/finish.gif">
        </div>
        <v-icon>
          mdi-check-circle
        </v-icon>
      </div>
      <strong>세탁 예약이 완료되었습니다</strong>
      <p>예약하신 <b>5월 17일(수요일) 오전</b>에 세탁물을<br/>문앞에 내놓아주세요</p>
    </div>

    <div class="finish-btns">
      <v-btn text class="how">
        <label>세탁물 내놓는 방법안내</label>
        <v-icon>mdi-chevron-right</v-icon>
        
      </v-btn>
      <v-btn text @click="$router.push('/')" class="main">
        <label>메인으로 돌아가기</label>
        <v-icon>mdi-chevron-right</v-icon>
        
      </v-btn>
      <v-btn text class="mypage">
        <label>이용내역 확인하기</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <div class="divider" />

    <div class="finish-guide">
      <ul>
        <li>취소는 예약된 수거시간 전까지 가능합니다</li>
        <li>수거된 이후에 취소는 수수료 3,000원이 발생합니다</li>
        <li>취소는 [이용내역] > [상세보기] 에서 취소할 수 있습니다</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderFinish{
  display:flex;
  flex-direction: column;
  justify-content: center;
  height:100vh;
  padding:0 30px;

  .finish-title{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    margin-bottom:30px;

    .title-video{
      position: relative;
      margin-bottom:30px;

      .image{
        width:250px;
        height:250px;
        border:1px solid #d2d2d2;
        border-radius:100%;
        overflow:hidden;
        img{
          display:block;
          width:100%;
        }
      }
      
      .v-icon{
        position: absolute;
        right:10px;
        bottom:10px;
        font-size:46px;
        color:#0CA0E2;
        background:#fff;
        border-radius:100%;
        z-index:2
      }
    }
    

    strong{
      display:block;
      font-size:24px;
      font-weight:bold;
    }
    p{
      display:block;
      font-size:14px;
      margin-top:10px;
      line-height:1.4;

      b{
        color:#F11064
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:20px 0;
  }

  .finish-btns{
    .v-btn{
      display:Flex;
      justify-content: space-between;
      padding:0 15px;
      width:100%;
      background:#f2f2f2;
      margin-bottom:10px;
      height:45px;
      border-radius:5px;
      font-size:14px;
    }

    .v-btn.how{
      border:1px solid #0C85E2;
      background:#fff;
      color:#0C85E2;
    }

    .v-btn:last-child{
      margin-bottom:0px;
    }
  }

  .finish-guide{
    font-size:12px;
    li{
      margin-bottom:5px;
      color:#888;
    }
    li:last-child{
      margin-bottom:0px;
    }
  }

}

</style>