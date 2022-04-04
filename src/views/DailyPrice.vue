<template>
  <div class="dailyPrice contents">
    <div class="top">
      <h2>데일리세탁의 세탁가격을<br />확인해보세요</h2>
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
    </div>

    <div class="priceList">
      <dl v-for="items in priceTable" :key="items.category">
        <dt>
          <label>{{ items.category }}</label>
        </dt>
        <dd>
          <div class="item" v-for="item in items.product" :key="item.name">
            <label>{{ item.name }}</label>
            <span>{{ item.userAmount.toLocaleString() }}</span>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { groupBy } from "lodash";

export default {
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
    margin-bottom: 40px;
    h2 {
      margin-bottom: 15px;
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
        background: #292929;
        border: 0px;
        color: #fff;
      }
    }
  }

  .product {
  }

  dl {
    margin-bottom: 50px;

    dt {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;

      label {
        font-size: 16px;
        font-weight: bold;
      }
    }
    dd {
      margin-top: 20px;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        label {
          color: #888;
        }
        span::after {
          content: "원";
          font-weight: normal;
          margin-left: 5px;
        }
      }
      .item:last-child {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
