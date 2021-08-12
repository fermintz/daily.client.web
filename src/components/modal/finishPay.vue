<template>
  <v-bottom-sheet
    v-model="visible"
    hide-overlay
  >

      <div class="finishPay">
        <div class="head">
          <h3>결제카드 선택</h3>
          <v-btn icon @click="handle(false)">
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </div>
        
        <ul class="card-list">
          <!-- <li class="no-data">
            <v-icon>mdi-credit-card-outline</v-icon>
            등록된 카드가 없습니다
          </li> -->
          <li
            v-for="(item, index) in 2"
            :key="item"
            @click="creditSeleted = index"
          >
            <div class="card-info">
              <label>현대카드</label>
              <div class="bottom">
                <span class="cate">법인</span>
                <span class="card-num">0080</span>
              </div>
            </div>
            <v-icon :color="creditSeleted === index ? '#0CA0E2' : '#e2e2e2'"
              >mdi-check-circle</v-icon
            >
          </li>
        </ul>


        <div class="cardAddBtn">
          <v-btn text>
            <v-icon>mdi-plus</v-icon>
            <label>카드 추가하기</label>
          </v-btn>
        </div>

        

        <div class="finishBtn" @click="$router.push('orderFinish')">
          <div class="total">
            <span>최종결제금액</span>
            <strong>34,900</strong>
          </div>
          <v-btn text>
            <label>결제완료하기</label>
          </v-btn>
        </div>
      </div> <!-- finishPay -->

    
  </v-bottom-sheet>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      creditSeleted:0,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  }
  
}
</script>

<style lang="scss" scoped>



.finishPay{
  width:100%;
  align-self: flex-end;
  background:#fff;
  border-top:1px solid #e2e2e2;

  .head{
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:60px;
    padding:0 20px;

    h3{
      font-weight:bold;
    }
  }

  .card-list {
      padding:15px;

      .no-data{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        padding:15px;
        border:1px dashed #e2e2e2;
        text-align:center;
        border-radius:10px;

        .v-icon{margin-bottom:5px;color:#c2c2c2}
      }

      li {
        display: flex;
        border:1px solid #e2e2e2;
        padding: 15px;
        border-radius:5px;
        margin-bottom:10px;

        .card-info {
          flex: 1;
          margin-right: 15px;

          label {
            font-size: 16px;
          }

          .bottom {
            margin-top: 5px;
            span {
              margin-right: 10px;
              font-size: 12px;
            }
          }
        }

        .v-icon {
          font-size: 32px;
        }
      }
      li:last-child {
        margin-bottom: 0px;
      }
    }

    .cardAddBtn {
      text-align:center;
      margin-top:15px;

      .v-btn {
        padding:0 20px;
        height: 36px;
        border-radius:18px;
        background: #EEF2F5;
        v-icon {
          color: #fff;
        }
      }
    }

    .finishBtn{
      padding:20px;

      .total{
        display:flex;
        justify-content: space-between;
        align-items: center;

        span{
          color:#898989;
        }
        strong{
          font-family:'Roboto';
          font-size:18px;
          font-weight:bold;
          color:#d22828;
        }
        strong:after{
          content:'원';
          font-size:14px;
          margin-left:5px;
          font-weight:normal;
          color:#292929;
        }
      }

      
      .v-btn{
        width:100%;
        height:50px;
        margin-top:10px;
        background:#0ca0e2;
        color:#fff;
        font-size:14px;
        border-radius:5px;

        label{
          color:#fff;
        }
      }
    }
}
</style>