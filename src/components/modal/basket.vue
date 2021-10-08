<template>
  <v-bottom-sheet
    v-model="visible"
    overlay-opacity="0"
    scrollable
   >
      <div class="basket">
        <div class="basket-head">
          <div class="basket-title">
            <v-icon>mdi-basket-outline</v-icon>
            <label>장바구니</label>
          </div>
          <div class="head-btns">
            <v-btn text>
              <label>모두 지우기</label>
            </v-btn>
          </div>
        </div>

        <div class="basket-cont">
          <div class="no-item">
            장바구니에 담긴 상품이 없습니다
          </div>
          <div class="goods-item" v-for="item in 5" :key="item">
            <div class="item-top">
              <div class="name">
                <strong>미용실 수건류 80L</strong>
                <span>15,000 원</span>
              </div>

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

  </v-bottom-sheet>
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
.v-bottom-sheet.v-dialog{
  min-height:500px
}
.basket{
  padding:15px;
  padding-top:0px;
  padding-bottom:100px;
  background:#fff;
  overflow-y:scroll;
  min-height:500px

}

.basket-head{
  position:sticky;
  top:0px;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items: center;
  height:60px;
  background:#fff;
  z-index:12;

  .basket-title{
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:20px;

    label{
      font-size:18px;
      font-weight:bold;
      color:#292929;
    }

    .v-icon{
      color:#292929;
      font-size:18px;
      margin-right:5px;
    }
    
  }

  .head-btns{

    .v-btn{
      height:30px;
      background:#292929;
      border-radius:20px;

      label{
        color:#fff;
      }
    }
    .v-btn.close{
      width:30px;
      height:30px;
      background:#292929;
      margin-left:10px;

      .v-icon{
        color:#fff;
        font-size:18px;
      }
    }
  }

  

  
}

.basket-cont{
  background:#fff;
  overflow-y:auto;

    .no-item{
      background:#f2f2f2;
      padding:10px;
      border-radius:5px;
      margin:15px 0;
      text-align:center;
    }
    .goods-item{
      padding:15px;
      margin-bottom:10px;
      background:#fff;
      border:1px solid #e2e2e2;
      border-radius:10px;

      .divider{
        height:1px;
        background:#e2e2e2;
        margin: 15px 0;
      }

      .item-top{
        display:flex;
        justify-content: space-between;
        align-items: center;

        .name{
          strong{display:block;}
          span{display:block; font-size:11px;
          color:#898989;}
        }

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
    padding:0 15px;
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
      margin:0 15px;
    }
    .v-btn{
      flex:1;
      height:40px;
      border-radius:5px;
      font-size:13px;
      border:1px solid #c2c2c2;
    }
  }
</style>