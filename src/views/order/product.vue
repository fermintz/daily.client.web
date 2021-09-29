<template>
  <div class="product contents">
    <div class="shop_info">
      <div class="cate">
        <span>셀프빨래방</span>
      </div>
      <h2>워시프렌즈 광안점</h2>
      <div class="shop_btns">
        <v-btn text rounded>
          <v-icon>mdi-map-marker</v-icon>
          <label>위치</label>
        </v-btn>
        <v-btn text rounded>
          <v-icon>mdi-phone</v-icon>
          <label>전화</label>
        </v-btn>
      </div>
    </div>

    <div class="info_btns">
      <div class="btn" v-ripple>
        <span><v-icon size="18" class="mr-1" color="#aaa">mdi-alert-circle</v-icon>이용불가품목 안내</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>
    </div>

    <div class="line" />

    <v-tabs
      v-model="tabActive"
      :show-arrows="false"
      height="60"
      slider-color="#0CA0E2"
      append
    >
      <v-tab
        v-for="(tab, index) in priceTable" 
        :key="index"
        :ripple="false"
      >
        <div class="tab-item">
          <strong>
            <img :src="'/img/product-icon' + (index + 2) + '.png'" />
          </strong>
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
        <div class="tip">
        물빠짐/줄어듬이 있는 세탁물은 별도의 상품을 이용해주세요
        </div>
        <div class="goods" v-for="item in tab.product" :key="item">
          <div class="goods-info">
            <span class="goods-name">
              <label>{{ item.name }}</label>
              <v-btn icon>
                <v-icon >mdi-help-circle-outline</v-icon>
              </v-btn>
            </span>
            <span class="sub">일반적인 티티티티티셔츠</span>
          </div>
          <div class="goods-price">
            <span>{{item.userAmount}}원</span>
            <strong>{{ item.userAmount }}원</strong>
          </div>
          <div class="goods-btns">
            <v-btn icon class="add" @click="$refs.snackbar.handle(true)">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </div>
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
  </div>
</template>

<script>
import { groupBy } from "lodash";
import Basket from '@/components/modal/basket'
import Snackbar from '@/components/modal/snackbar'

export default {
  components:{
    Basket, Snackbar
  },
  mounted() {
    this.getProductList();
  },
  data() {
    return {
      tabActive: null,
      priceTable: [],
    };
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
    padding:30px 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .cate{
      span{
        color:#0CA0E2;
      }
    }
    .shop_btns{
      display:flex;
      align-items: center;
      margin-top:15px;
      .v-btn{
        background:#f2f2f2;
        height:24px;
        width:auto;
        min-width:auto;
        padding:0 10px;
        margin-right:10px;
        .v-icon{
          font-size:14px;
        }
      }
    }
  } 

  .info_btns{
    border-top:1px solid #e2e2e2;
    .btn{
      height:50px;
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:0 15px;
    }
  }
 
  .line{
    height:10px;
    background:#fff;
    border-top:1px solid #e2e2e2;
    border-bottom:1px solid #e2e2e2;
  }

  .v-tabs{
    position:sticky;
    top:0px;
    z-index:99;
    border-bottom:1px solid #e2e2e2;
    background:#fff;
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;

    .v-tab{
      min-width:58px;
      padding:0px;
    }
  }

  .v-tabs-items{
    height:100%;
  }


  .tab-item {
    display:inline-block;
    position: relative;
    text-align: center;

    strong {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 22px;
      }
    }
    label {
      display: block;
      font-size: 10px;
      margin-top: 8px;
      letter-spacing: 0;;
    }
  }

  .tab-item:after{
    content:'';
    width:60px;
  }

  .tab-item.active:after{
    content:'';
    position:absolute;
    left:0px;
    width:100%;
    bottom:0;
    height:2px;
    background:#D20A61;
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

    .goods{
      display:flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;
      padding:15px 15px;

      .goods-info{
        flex:1;
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

    .goods:last-child{
      border-bottom:0px;
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
