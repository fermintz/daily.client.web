<template>
  <v-dialog
    v-model="visible"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <div class="basket">
      <div class="basket-head">
        <h2>
          장바구니
        </h2>
        <v-btn icon @click="handle(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <div class="basket-cont">

        <div class="goods-item" v-for="item in 2" :key="item">
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
        </div>

      </div>
      <div class="basket-bottom">
        <dl class="total">
          <dt>총금액</dt>
          <dd>55,800 원</dd>
        </dl>
        <div class="divider"></div>
        <div class="btns">
          <v-btn text @click="handle(false)"> 
            장바구니 닫기
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.basket{
  background:#fff;
  height:100%;
}

.basket-head{
  position: sticky;
  display:flex;
  justify-content: space-between;
  align-items: center;
  top:0px;
  width:100%;
  background:#0686D2;
  border-bottom:1px solid #e2e2e2;
  z-index:10;
  height:60px;


  h2{
    margin-left:20px;
    font-size:18px;
    color:#fff;
  }
  .v-btn{
    height:40px;
    width:40px;
    margin-right:10px;

    .v-icon{
      color:#fff;
    }
  }
}

.basket-cont{
  padding-bottom:60px;
  padding-top:10px;
   
    .goods-item{
      padding:15px;
      margin-bottom:10px;
      background:#fff;
      border-top:1px solid #e2e2e2;
      border-bottom:1px solid #e2e2e2;

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
    border-top:1px solid #292929;
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
</style>