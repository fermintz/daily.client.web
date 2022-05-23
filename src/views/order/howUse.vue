<template>
  <div class="howUse contents">
    <div class="page-title">
      <h2>이용방법을 선택해주세요</h2>
      <span>선결제와 후불결제 중 선택하실 수 있습니다</span>
    </div>

    <div class="selectCards">
      <div class="card" @click="$router.push('product')">
        <div class="image">
          <img src="@/assets/img/howUse01.png">
        </div>
        <div class="cont">
          <div class="left">
            <strong>
              수거 후 결제하기
            </strong>
            <span>품목 선택없이 검수 후 세탁물 인수증을 받아 나중에 결제</span>
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
            <span>직접 상품 선택하여 먼저 결제하기</span>
          </div>
          <div class="right">
            <v-icon>mdi-chevron-right-circle-outline</v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.howUse{
  .selectCards{
    display:flex;
    flex-direction: column;
    gap:20px;
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
          height:170px;
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
          }
          span{
            font-size:14px;
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
}
</style>