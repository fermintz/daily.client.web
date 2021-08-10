<template>
  <div class="product contents">
    <div class="page-title">
      <h2>맡기실 세탁물을 선택해주세요</h2>
    </div>

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
            {{ item.userAmount }} 원
          </div>
          <div class="goods-btns">
            <v-btn icon class="add">
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
      <v-btn text class="next" @click="$router.push('userMessage')">
        <label>14,900원 예약하기</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>

    <Basket ref="basket"/>
  </div>
</template>

<script>
import { groupBy } from "lodash";
import Basket from '@/components/modal/basket'

export default {
  components:{
    Basket
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

  
  .page-title{
    padding:0 20px;
    margin-bottom:30px;
  }

  .v-tabs{
    position:sticky;
    top:0px;
    z-index:99;
    border-bottom:1px solid #e2e2e2;
    padding:0 15px;
    background:#fff;

    .v-tab{
      min-width:60px;
      padding:0px;
    }
  }

  .v-tabs-items{
    height:100vh
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
      font-size: 9px;
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
    padding:20px;
    padding-bottom:80px;
    
    .tip{
      text-align:center;
      background:#F4F5F8;
      font-size:12px;
      padding:10px;
      border-radius:5px;
    }

    .goods{
      display:flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;
      padding:15px 0;

      .goods-info{
        flex:1;
        span{display:block;}
        span.goods-name{
          display:flex;
          align-items: center;
          label{}
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
          margin-top:5px;
        }
      }
      .goods-price{
        font-size:12px;
        margin:0 15px;
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
    border-top:1px solid #c2c2c2;
    border-bottom:1px solid #c2c2c2;

    .v-btn{
      height:50px;
      background:#fff;
      border-radius:0;
      border-right:1px solid #c2c2c2;
    }

    .v-btn.basket{
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
      label{
        font-size:14px;
      }

      .v-icon{
        color:#0CA0E2;
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
