<template>
  <div class="dailyPrice contents">
    <h2>
      고객님의 대표 주소지의 
      <br>세탁소 가격표를 보여드립니다
    </h2>

    <dl v-for="items in priceTable" :key="items.category">
      <dt>
        <img src="@/assets/img/product-icon2.png">
        <label>{{items.category}}</label>
      </dt>
      <dd>
        <div class="item" v-for="item in items.product" :key="item.name">
          <label>{{item.name}}</label>
          <span>{{item.userAmount.toLocaleString()}}</span>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import { groupBy } from 'lodash';

export default {
  mounted() {
    this.getProductList();
  },
  data(){
    return{
      priceTable: [],
    }
  },
  methods: {
    async getProductList() {
      const products = await fetch('https://api.dailywash.co.kr/info/products')
        .then(data => data.json());
      
      const categories = groupBy(products, value => value.category);
      const result = Object.keys(categories).map(key => {
        return {
          category: key,
          product: categories[key].map(({ name, amount }) => ({ name, userAmount: amount })),
        }
      });

      this.priceTable = result;
    },
  },
}
</script>

<style lang="scss" scoped>
.dailyPrice{
  h2{
    margin-bottom:40px;
  }

  dl{
    margin-bottom:50px;

    dt{
      display:flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;
      padding-bottom:10px;
      img{height:20px;}
      label{
        font-size:16px;
        font-weight:bold;
        margin-left:10px;
      }
    }
    dd{
      margin-top:20px;

      .item{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:10px;
        label{
          color:#888;
        }
        span::after{
          content:'원';
          font-weight:normal;
          margin-left:5px;
        }
       }
      .item:last-child{
        margin-bottom:0px;
      }
    }
  }
}
</style>