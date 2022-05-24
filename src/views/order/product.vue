<template>
  <div class="product contents">
    <div class="inner">
      <div class="page-title">
        <h2>어떤 품목을 맡기실건가요?</h2>
      </div>
    </div>

    <div class="guide_btns">
      <span>명품브랜드 <v-icon>mdi-help-circle-outline</v-icon></span>
      <b class="bar">|</b>
      <span>이용불가품목 <v-icon>mdi-help-circle-outline</v-icon></span>
      <b class="bar">|</b>
      <span>주문 주의사항 <v-icon>mdi-help-circle-outline</v-icon></span>
    </div>

    <v-tabs
      v-model="tabActive"
      :show-arrows="false"
      hide-slider
      append
      height="40px"
    >
      <v-tab
        v-for="(tab, index) in priceTable" 
        :key="index"
        :ripple="false"

      >
        <div class="tab-item">
          <!-- <strong>
            <img :src="'/img/product-icon' + (index+1) + '.png'" />
          </strong> -->
          <label>{{ tab.category }}</label>
        </div>
      </v-tab>
    </v-tabs>


    <v-tabs-items 
      v-model="tabActive"
      continuous
    >
      <v-tab-item
        v-for="tab in priceTable" :key="tab"
        class="goods-list"
        reverse-transition
      >
        <dl class="goods_cate">
          <dt>
            <label>남성</label>
            
          </dt>
          <dd>
            <div class="goods" v-for="item in tab.product" :key="item">
              <div class="goods-info">
                <span class="goods-name">
                  <label>{{ item.name }}</label>
                  
                  <!-- <v-btn icon>
                    <v-icon >mdi-help-circle-outline</v-icon>
                  </v-btn> -->
                </span>
                <span class="goods-sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <!-- <span class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, </span> -->
              </div>
              <div class="goods-price">
                <!-- <span>{{item.userAmount}}원</span> -->
                <strong>{{ item.userAmount }}원</strong>
              </div>
              <div class="goods-btns">
                <v-btn icon class="add" @click="$refs.snackbar.handle(true)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </dd>
        </dl>
        <dl class="goods_cate">
          <dt>
            <label>여성</label>
          </dt>
          <dd>
            <div class="goods" v-for="item in tab.product" :key="item">
              <div class="goods-info">
                <span class="goods-name">
                  <label>{{ item.name }}</label>
                  <!-- <v-btn icon>
                    <v-icon >mdi-help-circle-outline</v-icon>
                  </v-btn> -->
                </span>
                <!-- <span class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, </span> -->
              </div>
              <div class="goods-price">
                <!-- <span>{{item.userAmount}}원</span> -->
                <strong>{{ item.userAmount }}원</strong>
              </div>
              <div class="goods-btns">
                <v-btn icon class="add" @click="$refs.snackbar.handle(true)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </dd>
        </dl>
      </v-tab-item>
    </v-tabs-items>

    <div class="floating">
      <div class="cont" v-show="floating">
        <div class="image">
          <img src="@/assets/img/howUse01.png">
        </div>
        <strong>
          상품선택이 어렵다면 데일레세탁 검수에 맡기세요 수거한 세탁물을 직접 검수 후 결제요청을 드립니다
        </strong>
        <span>※ 상품선택이 없는 경우, 보증금 10,000원 결제가 필요합니다.</span>
        <div class="next" v-ripple>
          <label>상품선택 넘기기</label>
          <v-icon>mid-chevron-right</v-icon>
        </div>
      </div>
      <v-btn icon class="floatingBtn" @click="floating = !floating">
        <v-icon v-if="floating"> 
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-alert-circle-outline
        </v-icon>
      </v-btn>
    </div>

    <div class="bottom">
      <!-- <div class="guide">
        <div class="guide_in">
          
          <span v-ripple>주문시 주의사항</span>
        </div>
      </div> -->
      <div class="btns">
        <v-btn text class="basket" @click="$refs.basket.handle(true)">
          <label>장바구니</label>
          <div class="badge">6</div>
        </v-btn>
        <v-btn text class="next" @click="$router.push('userMessage')">
          <label>14,900원 예약하기</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>  
    

    <Basket ref="basket"/>
    <Snackbar ref="snackbar" text="장바구니에 담았습니다"/>
    <ProductInPopup ref="productInPopup"/>
  </div>
</template>

<script>
import { groupBy } from "lodash";
import Basket from '@/components/modal/basket'
import Snackbar from '@/components/modal/snackbar'
import ProductInPopup from '@/components/modal/productInPopup'

export default {
  components:{
    Basket, Snackbar, ProductInPopup
  },
  mounted() {
    this.getProductList();
  },
  data() {
    return {
      tabActive: 0,
      oncePopup: false,
      priceTable: [],
      floating:true,
    };
  },
  watch:{
    tabActive(value){
      if(value === 1 && !this.oncePopup){
        this.$refs.productInPopup.handle(true)
        this.oncePopup = true
      }
    }
  },
  methods: {
    async getProductList() {
      const products = await fetch(
        "https://api.dailywash.co.kr/info/products"
      ).then((data) => data.json());

      const categories = groupBy(products, (value) => value.category);
      const result = Object.keys(categories).map((key) => {
        return {
          category: key,
          product: categories[key].map(({ name, amount }) => ({
            name,
            userAmount: amount,
          })),
        };
      });

      this.priceTable = result;
      console.log(this.priceTable);
    },

    request(type, value){
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
  },
};
</script>

<style lang="scss" scoped>
.product.contents {
  padding:0px;

  .inner{
    padding:0 20px;
  }

  .page-title{
    margin-bottom:0px;
  }

  .guide_btns{
    display:flex;
    align-items: center;
    overflow-x:scroll;
    margin-top:5px;
    padding:0 20px;
    gap:6px;
    margin-bottom:20px;

    span{
      flex:none;
      min-width:auto;
      display:flex;
      align-items: center;
      border-radius:4px;
      font-size:12px;
      color:#898989;
      .v-icon{
        font-size:13px;
        margin-left:2px;
        color:#898989;
      }
    }

    b.bar{
      color:#d2d2d2;
    }
  }

  .guide_btns::-webkit-scrollbar{
    display:none;
  }

  .v-tabs{
    position:sticky;
    padding-bottom:20px;
    top:60px;
    z-index:99;
    background:#fff;

    .v-tab{
      min-width:auto;
      background:#f2f2f2;
      margin-right:6px;
      border-radius:12px;
      padding:0px 12px;

      label {
        display: block;
        font-size: 12px;
        letter-spacing: 0;
        color:#898989;
      }

      &:first-child{
        margin-left:20px;
      }
    }

    .v-tab.v-tab--active{
      background:#292929;
      label{
        font-size:14px;
        font-weight:bold;
        color:#fff
      }
    }
  }

  .floating{
    display:flex;
    align-items: flex-end;
    position: fixed;
    padding:0 15px;
    right:0px;
    bottom:81px;
    z-index:99;

    .cont{
      border:1px solid #d2d2d2;
      background: #fff;
      margin-right:10px;
      border-radius:10px;
      margin-bottom:38px;
      padding:15px;
      box-shadow: 3px 3px 20px rgba(0,0,0,0.1) ,1px 1px 3px rgba(0,0,0,0.05);

      .image{
        display:flex;
        justify-content: center;
        background:#f8f8f8;
        border-radius:7px;
        margin-bottom:15px;
        img{
          height:170px;
        }
      }

      strong{
        display:block;
        margin-bottom:10px;
        line-height:1.3;
      }
      span{
        display:block;
        font-size:11px;
        margin-bottom:15px;
      }

      .next{
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius:5px;
        height:40px;
        background:#292929;
        color:#fff
      }
    }
    
    .floatingBtn{
      width:50px;
      height:50px;
      background:#F11064;
      .v-icon{
        color:#fff;
        font-size:30px;
      }
    }
    
  }

  .goods-list{
    padding:0 20px;
    padding-bottom:120px;
    
    
    .tip{
      text-align:center;
      background:#f2f2f2;
      font-size:12px;
      padding:10px;
      color:#898989;
    }

    dl.goods_cate{
      margin-bottom:20px;
      
      dt{
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:14px;
        background:#F4F7F9;
        height:40px;
        padding:0 15px;
        border-radius:12px;
        margin-bottom:10px;

        .right{
          display:Flex;
          align-items: center;

          span{
            display:flex;
            align-items: center;
            font-size:12px;
            padding:2px 5px;
            border-radius:3px;

            .v-icon{
              font-size:15px;
              margin-left:3px;
            }
          }
          span.bar{
            padding:0;
            color:#c2c2c2;
          }
        }
      }

      .goods{
        display:flex;
        align-items: center;
        padding:20px 0px;
        border-bottom:1px solid #e2e2e2;

        &:last-child{
          border-bottom:0
        }


        .goods-info{
          flex:1;
          margin-right:10px;
          span{display:block;line-height:1.2;}
          span.goods-name{
            font-size:14px;
            display:flex;
            align-items: center;
            
            .v-btn{
              width:20px;
              height:20px;
              padding:0px;
              .v-icon{
                font-size:16px;
                color:#D20A61;
              }
            }
          }

          span.goods-sub{
            font-size:11px;
            margin-top:5px;
            color:#898989;
          }

          span.sub{
            font-size:11px;
            color:#888;
            margin-top:3px;
          }
        }
        .goods-price{
          margin-right:15px;
          text-align:right;
          span{
            font-size:11px;
            color:#999;
            line-height:1.2;
            text-decoration:line-through;
            display:block;
          }
          strong{
            display:block;
            font-weight:500;
            line-height:1.2;
            font-size:14px;
          }
          
        }
        .goods-btns{
          .v-btn{
            width:34px;
            height:34px;
            border:1px solid #e2e2e2;
            margin-left:10px;
            .v-icon{
              font-size:18px;
            }
          }
          .v-btn:first-child{
            margin-left:0px;
          }

          .add{
            background:#c2c2c2;
            border:0px;
            .v-icon{
              color:#fff;
            }
          }
        }
      }
    }

    
  }

  .bottom{
    position: fixed;
    width:100%;
    padding:10px;
    padding-top:0px;
    bottom:0px;
    z-index:2;
    background:#fff;

    .guide{
      display:flex;
      justify-content: center;

      .guide_in{
        width:100%;
        background:#f2f2f2;
        display:flex;
        
        border-radius:5px;
        
        align-items: center;
        span{
          display:flex;
          align-items: center;
          justify-content: center;
          height:34px;
          flex:1;
          font-size:11px;
          border-right:1px solid #e2e2e2;

          &:last-child{
            border-right:0
          }
        }
      }
    }
  

    .btns{
      display:Flex;
      align-items: center;
      background:#fff;
      margin-top:6px;

      .v-btn{
        height:50px;
        background:#fff;
        border-radius:0;
      }

      .v-btn.basket{
        border:1px solid #c2c2c2;
        border-radius:5px;
        margin-right:6px;
        .badge{
          display:flex;
          justify-content: center;
          align-items: center;
          width:18px;
          height:18px;
          border-radius:100px;
          background:#D20A61;
          color:#fff;
          font-size:10px;
          margin-left:5px;
        }
      }

      .v-btn.next{
        background:#0CA0E2;
        border-radius:5px;
        label{
          font-size:14px;
          color:#fff
        }

        .v-icon{
          color:#fff;
          font-size:18px;
          margin-left:5px;
        }
      }
      
      .v-btn:last-child{
        border-right:0;
      }

      .basket{
        flex:1;
      }

      .next{
        flex:2;
      }
    }

    
  }
}

.v-window{
  overflow:initial
}
</style>
