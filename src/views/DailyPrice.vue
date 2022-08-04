<template>
  <div class="dailyPrice contents">
    <div class="top">
      <h2>데일리세탁의 세탁가격을<br />확인해보세요</h2>
      
      <div class="search" @click="$refs.luxuryBrand.show(true)">
        <span>명품브랜드 검색</span>
        <v-icon>mdi-magnify</v-icon>
      </div>
    </div>

    <LuxuryBrand ref="luxuryBrand"/>

    <div class="priceList">
      <div class="area">
        <v-btn
          text
          :class="{active: priceActive === index}"
          @click="priceActive = index"
          v-for="(item, index) in ['서울', '부산']"
          :key="index"
          >{{ item }}</v-btn
        >
      </div>
      <dl v-for="items in priceTable" :key="items.category">
        <dt>
          <label>{{ items.category }}</label>
        </dt>
        <dd><div class="item" :class="{event:true}">
            <div class="left ">
              <div class="icons">
                <span>이벤트</span>
              </div>
              <label>상품이름</label>
              <p>부가적인 설명</p>
            </div>
            <div class="right">
              <span class="normal">5,000</span>
              <div class="sale">
                <span class="per">0%</span>
                <span class="price">5,000</span>
              </div>
            </div>
          </div>
          <div class="item" v-for="item in items.product" :key="item.name">
            <div class="left">
              <div class="icons">
                <span>이벤트</span>
              </div>
              <label>{{ item.name }}</label>
              <p>부가적인 설명</p>
            </div>
            <div class="right">
              <span class="normal">{{ item.userAmount.toLocaleString() }}</span>
              <div class="sale">
                <span class="per">50%</span>
                <span class="price">{{ item.userAmount.toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { groupBy } from "lodash";
import LuxuryBrand from '@/components/modal/luxuryBrand.vue'

export default {
  components :{
    LuxuryBrand,
  },
  mounted() {
    this.getProductList();
  },
  data() {
    return {
      priceActive: 0,
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
    },
  },
};
</script>

<style lang="scss" scoped>
.dailyPrice {
  .top {
    margin-bottom: 30px;
    h2 {
      margin-bottom: 10px;
      font-size:24px;
      line-height:1.3;
    }

    
  }

  .search{
    display:Flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:3px solid #292929;
    border-radius:0px;
    height:50px;
    padding:0px;
    margin-bottom:30px;

    span{
      font-size:16px;
      color:#898989;
    }
    .v-icon{
      width:32px;
      height:32px;
      margin-left:20px;
      background:#292929;
      color:#fff;
      border-radius:16px;
      font-size:16px;
    }
  }

  .area {
      border-radius: 5px;
      margin-bottom: 20px;
      .v-btn {
        border-radius: 5px;
        height: 40px;
        border-radius: 25px;
        padding: 0 20px;
        border: 1px solid #e2e2e2;
        margin-right: 10px;
        background: #fff;
        font-size: 13px;
      }

      .v-btn.active {
        background: #0090FF;
        border: 0px;
        color: #fff;
      }
    }

  dl {
    margin-bottom: 50px;

    dt {
      display: flex;
      align-items: center;
      background:#f2f2f2;
      border-radius:5px;
      height:40px;
      padding:0 15px;


      label {
        font-size: 16px;
        font-weight: bold;
      }
    }
    dd {
      margin-top: 20px;
      display:flex;
      flex-direction: column;
      gap:15px;
      padding:0 5px;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left{
          display:flex;
          flex-direction: column;
          flex:1;
          margin-right:20px;
          .icons{
            display:none;
          }
          label{
            font-size:14px;

          }
          p{
            font-size:12px;
            color:#797979;
            margin:0;
          }
        }
        .right{
          .normal{
            display:none;
            text-align:right;
          }
          .sale{
            display:flex;
            align-items: center;
            font-size:16px;
            .per{
              display:none;
             
            }
            .price{
              font-weight:bold;
              &:after{
                content:'원';
                font-size:14px;
                font-weight:normal;
              }
            }
          }
        }
      }

      .item.event{
        .left{
          .icons{
            display:flex;
            margin-bottom:5px;
            span{
              background:#D20A61;
              color:#fff;
              padding:1px 5px;
              border-radius:3px;
              font-size:11px;
            }
          }
        }
        .right{
          .normal{
            display:block;
            text-decoration:line-through;
            color:#898989;

            &:after{
              content:'원'
            }
          }
          .per{
            display:block;
            margin-right:5px;
            color:#D20A61;
          }
        }
      }
    }
  }
}
</style>
