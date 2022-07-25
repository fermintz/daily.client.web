<template>
  <div class="howUse contents">
    <div class="inner">
      <div class="page-title">
        <h2>이용방법을 선택해주세요</h2>
        <p>세탁물 선택이 어려우신 경우 패스하기를 통해 <br>빠르게 세탁물 접수가 가능합니다</p>
      </div>
    </div>

    <div class="btns">
      <v-btn text rounded>세탁가격표 확인하기</v-btn>
    </div>

    <div class="selectCards">
      <div class="card" @click="$router.push('orderDetail')">
        <div class="image">
          <img src="@/assets/img/howUse01.png">
        </div>
        <div class="cont">
          <div class="left">
            <strong>
              세탁물 선택 패스하기
            </strong>
            <span>수거배송 보증금만 결제 후 검수 및 세탁 시 금액을 청구합니다</span>
          </div>
          <div class="right">
            <v-icon>mdi-chevron-right-circle-outline</v-icon>
          </div>
        </div>
      </div>

      <div class="card" @click="$router.push('product')">
        <div class="image">
          <img src="@/assets/img/howUse02.png">
        </div>
        <div class="cont">
          <div class="left">
            <strong>
             세탁물 직접 선택하기
            </strong>
            <span>맡기실 세탁물을 직접 선택한 후 먼저 결제합니다.</span>
          </div>
          <div class="right">
            <v-icon>mdi-chevron-right-circle-outline</v-icon>
          </div>
        </div>
      </div>
    </div>
    
    <!-- <div class="inner">
      <div class="divider" />
      <div class="guide">
        <h4>유의사항</h4>
        <ul>
          <li>
            <b>[세탁물 직접 선택하기]</b>에서 선택하신 세탁물이 상이할 경우 추가금이 요청될 수 있습니다.
          </li>
        </ul>
      </div>
    </div> -->

    
  </div>
</template>

<style lang="scss" scoped>
.howUse{
  padding:0;

  .inner{
    padding:0 20px;
  }
  .page-title{
    margin-bottom:25px;
  }

  .btns{
    display:flex;
    margin-bottom:25px;
    padding:0 20px;
    overflow-x:auto;
    gap:10px;
    .v-btn{
      max-height:40px;
      border:1px solid #0CA0E2;
      font-size:14px;
      color:#0CA0E2;
    }

    &::-webkit-scrollbar{
      display:none;
    }
  }
  .selectCards{
    display:flex;
    flex-direction: column;
    overflow-x:scroll;
    padding:0 20px;
    gap:20px;

    &::-webkit-scrollbar{
      display:none;
    }
    .card{
      border:1px solid #d2d2d2;
      border-radius:10px;
      overflow:hidden;
      /* box-shadow: 5px 5px 20px rgba(0,0,0,0.09), 3px 3px 6px rgba(0,0,0,0.02); */

      .image{
        display:Flex;
        justify-content: center;
        background:#F1F5F9;
        border-bottom:1px solid #e2e2e2;
        img{
          object-fit: cover;
          height:140px;
        }
      }
      
      .cont{
        display:flex;
        justify-content: space-between;
        padding:15px;

        .left{
          display:flex;
          flex-direction: column;
          flex:1;
          margin-right:20px;

          strong{
            font-weight:bold;
            font-size:18px;
            line-height: 1.4;
          }
          span{
            font-size:14px;
            margin-top:5px;
            line-height:1.4
          }
        }

        .right{
          display:flex;
          align-items: flex-end;
          .v-icon{
            font-size:30px;
            color:#292929;
          }
        }
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:40px 0;
  }

  .guide{
    padding-bottom:40px;

    h4{
      font-size:16px;
      font-weight:bold;
      margin-bottom:10px;
    }

    ul{
      display:flex;
      flex-direction: column;
      padding:0;
      gap:10px;

      li{
        line-height:1.4;
        b{font-weight:bold;}
      }
    }
  }
}
</style>