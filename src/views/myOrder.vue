<template>
  <div class="myOrder contents">
  
    <h2><span>어흥</span>님의<br>주문/배송내역</h2>
 
    <!-- <div class="no-order">
      <p>주문한 내역이 없습니다</p>
      <v-btn text>
        <label>주문하로 가기</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div> -->

    <MyOrderCard v-for="item in 10" :key="item"/>
  </div>
</template>

<script>
import MyOrderCard from '@/components/myOrderCard';

export default {
  components:{
    MyOrderCard
  },
}
</script>

<style lang="scss" scoped>
.myOrder{
  padding:40px 20px;

  .no-order{
    border-top:1px solid #e2e2e2;
    border-bottom:1px solid #e2e2e2;
    padding:30px 0;
    text-align:center;
    margin-bottom:20px;

    .v-btn{
      background:#fff;
      border:1px solid #c2c2c2;
      border-radius:40px;

      label{
        margin-right:10px;
      }

      .v-icon{
        color:#0CA0E2;
        font-size:18px;
      }
    }
  }


  h2{
    font-size:24px;
    line-height:30px;
    margin-bottom:30px;

    span{
      color:#0CA0E2;
    }
  } 


  ul{
    li{margin-bottom:20px;}
    li:last-child{
      margin-bottom:0px;
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  
}
</style>