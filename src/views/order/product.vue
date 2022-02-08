<template>
  <div class="product contents">
    <div class="inner">
      <div class="page-title">
        <h2>어떤 품목을 맡기실건가요?</h2>
        <p>맡기실 세탁품목을 선택해주세요</p>
      </div>
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


    <div class="bottom">
      <div class="guide">
        <div class="guide_in">
          <span v-ripple>명품브랜드 확인</span>
          <span v-ripple>이용불가품목 안내</span>
          <span v-ripple>주문시 주의사항</span>
        </div>
      </div>
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

  .page-title {
    p {
      margin-top: 5px;
      color: #888;
    }
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

  .goods-list{
    padding:0 20px;
    padding-bottom:100px;
    
    
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
        justify-content: center;
        font-size:14px;
        background:#F4F7F9;
        height:40px;
        padding:0 15px;
        border-radius:12px;
        margin-bottom:10px;
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
