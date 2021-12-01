<template>
  <div class="product contents">
    <div class="shop_info">
      <div class="top">
        <dl>
          <dt>셀프빨래방</dt>
          <dd>워시프렌즈 광안점</dd>
        </dl>
        <v-btn icon>
          <v-icon>
            mdi-phone
          </v-icon>
        </v-btn>
      </div>

      <div class="shop_btns">
        <v-btn text>
          <label>이용불가품목 안내</label>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn text>
          <label>명품 브랜드 확인</label>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn text>
          <label>명품 브랜드 확인</label>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      
    </div>


    <div class="line" />

    <v-tabs
      v-model="tabActive"
      :show-arrows="false"
      slider-color="#0CA0E2"
      append
    >
      <v-tab
        v-for="(tab, index) in priceTable" 
        :key="index"
        :ripple="false"
      >
        <div class="tab-item" @click="popupHandle(index)">
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
            <label>상품카테</label>
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
        <dl class="goods_cate">
          <dt>
            <label>상품카테</label>
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


    <div class="btns">
      <v-btn text class="basket" @click="$refs.basket.handle(true)">
        <label>장바구니</label>
        <div class="badge">6</div>
      </v-btn>
      <v-btn text class="next" @click="$router.push('dateSelect')">
        <label>14,900원 예약하기</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
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
.product {
  padding:0px;

  .shop_info{
    .top{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:30px 20px 15px 20px;

      dl{
        dt{
          font-size:12px;
          color:#0CA0E2;
          margin-bottom:5px;
        }
        dd{
          font-size:22px;
          line-height:1;
          font-weight:bold;
        }
      }

      .v-btn{
        background:#f2f2f2;
        width:45px;
        height:45px;
        border-radius:10px;
        .v-icon{
          color:#3EC266;
        }
      }
    }

    .shop_btns{
      display:flex;
      align-items: center;
      overflow-x:auto;
      padding:20px;

      .v-btn{
        display:flex;
        align-items: center;
        background:#fff;
        height:32px;
        font-size:11px;
        border-radius:0px;
        padding:0 10px;
        border:1px solid #e2e2e2;
        margin-right:10px;
        border-radius:18px;

        .v-icon{
          font-size:14px;
          margin-left:10px;
          color:#aaa;
        }
      }

      .v-btn:last-child{
        margin-right:0px;
      }
    }

    .shop_btns::-webkit-scrollbar{
      display:none;
    }
    
  } 

  .line{
    height:10px;
    background:#e2e2e2;

  }

  .v-tabs{
    position:sticky;
    top:60px;
    z-index:99;
    border-bottom:1px solid #e2e2e2;
    background:#fff;


    .v-tab{
      min-width:58px;
      padding:0px 15px;

      label {
        display: block;
        font-size: 14px;
        font-weight:bold;
        letter-spacing: 0;
        color:#292929;
      }
    }

    .v-tab.v-tab--active{
      label{
        color:#0CA0E2
      }
    }

    
  }

  .goods-list{
    padding-bottom:80px;
    
    .tip{
      text-align:center;
      background:#f2f2f2;
      font-size:12px;
      padding:10px;
      color:#898989;
    }

    dl.goods_cate{
      dt{
        font-size:14px;
        font-weight:bold;
        background:#F4F7F9;
        padding:10px 15px;
        border-bottom:1px solid #e2e2e2;
      }

      .goods{
        display:flex;
        align-items: center;
        border-bottom:1px solid #e2e2e2;
        padding:15px 15px;

        .goods-info{
          flex:1;
          margin-right:10px;
          span{display:block;line-height:1.2;}
          span.goods-name{
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

  .btns{
    display:Flex;
    align-items: center;
    position: fixed;
    width:100%;
    bottom:0px;
    z-index:2;
    padding:6px 6px 5px 6px;
    border-top:1px solid #e2e2e2;
    background:#fff;

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

.v-window{
  overflow:initial
}
</style>
