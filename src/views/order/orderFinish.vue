<template>
  <div class="orderFinish">
    <div class="finish-title">
      <div class="title-video">
        <video autoplay loop>
          <source src="@/assets/video/partner.mp4" type="video/mp4">
        </video>
      </div>
      <strong>예약이 완료되었습니다</strong>
      <p>기사님이 방문하는 날에 맞춰 세탁물을 문앞에 내놓아주세요</p>
    </div>

    <div class="finish-btns">
      <v-btn text @click="$router.push('/')">
        메인으로 돌아가기
      </v-btn>
      <v-btn text>
        이용내역 확인하기
      </v-btn>
    </div>

    <div class="divider" />

    <div class="finish-guide">
      <ul>
        <li>예약시간 2시간 전까지 취소가가능합니다</li>
        <li>이후에는 취소 수수료 3,000원이 발생합니다</li>
        <li>취소는 [이용내역]>[상세보기] 페이지에서 취소할 수 있습니다</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderFinish{
  padding:0 26px;

  .finish-title{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    padding:40px 0;


    .title-video{
      width:200px;
      height:200px;
      border-radius:120px;
      overflow:hidden;
      border:1px solid #e2e2e2;
      background:#f2f2f2;
      margin-bottom:30px;
      video{
        width:200px;
        height:200px;
      }
    }
    

    strong{
      display:block;
      font-size:24px;
      font-weight:bold;
    }
    p{
      display:block;
      margin-top:10px;
      line-height:1.4;
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  .finish-btns{
    .v-btn{
      width:100%;
      background:#f2f2f2;
      margin-bottom:10px;
      height:45px;
      border-radius:4px;
    }

    .v-btn:nth-child(1){
      background:#F1F5F9;
    }
  }

  .finish-guide{
    font-size:12px;

    li:first-child{
      color:#F11064;
    }

    li{
      margin-bottom:5px;
      color:#888;
    }
  }

}

</style>