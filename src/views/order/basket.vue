<template>
  <div class="basket">
    <ul class="list"> 
      <li class="goods-item" v-for="item in 10" :key="item">
        <div class="item-top">
          <label>미용실 수건류 80L</label>
          <v-btn icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="divider" />
        <div class="item-bottom">
          <div class="amount">
            <v-btn text>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <span>
              02
            </span>
            <v-btn text>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <div class="price">
            5,000 원
          </div>
        </div>
      </li>
    </ul>
    <div class="basket-bottom">
      <dl class="total">
        <dt>총금액</dt>
        <dd>55,800 원</dd>
      </dl>
      <div class="divider"></div>
      <div class="btns">
        <v-btn text @click="request('basket', false)"> 
          장바구니 닫기
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    requst(type, value){
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
  },
}
</script>

<style lang="scss" scoped>
.basket{
  padding:20px;
  .list{
    padding-bottom:60px;
    .goods-item{
      border:1px solid #e2e2e2;
      padding:15px;
      border-radius: 10px;
      margin-bottom:10px;

      .divider{
        height:1px;
        background:#e2e2e2;
        margin: 15px 0;
      }

      .item-top{
        display:flex;
        justify-content: space-between;
        align-items: center;

        .v-btn{
          width:24px;
          height:24px;
          background:#e2e2e2;

          .v-icon{
            font-size:18px;
          }
        }
      }
      .item-bottom{
        display:flex;
        justify-content: space-between;
        align-items: center;
        

        .amount{
          display:flex;
          align-items: center;

          span{
            background:#f2f2f2;
            height:25px;
            line-height:27px;
            padding:0 15px;
            margin:0 5px;
            border-radius:4px;
          }

          .v-btn{
            border:1px solid #e2e2e2;
            height:25px;
            min-width:30px;
            padding:0px;

            .v-icon{
              font-size:16px;
            }
          }
        }
      }
    }
  }
  .basket-bottom{
    position:fixed;
    border-top:1px solid #e2e2e2;
    background:#fff;
    left:0px;
    bottom:0px;
    width:100%;
    height:60px;
    padding:0 20px;
    display:flex;
    align-items: center;;

    dl{
      flex:2;
      display:flex;
      align-items: center;
      justify-content: space-between;
      dt{font-size:12px;}
      dd{font-size:16px;color:#F11064;font-weight:500;}
    }
    .divider{
      height:30px;
      width:1px;
      background:#e2e2e2;
      margin:0 20px;
    }
    .v-btn{
      flex:1;
      height:40px;
      border-radius:5px;
      font-size:14px;
    }
  }
}
</style>