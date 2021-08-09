<template>
  <div class="wallet contents">
    <div class="page-title">
      <h2>결제수단 관리</h2>
      <p>결제에 사용하실 카드를 등록/관리 할 수 있습니다</p>
    </div>

    <div class="item-list">

      <div class="no-data">
        등록된 결제수단이 없습니다
      </div>
      <CreditCardItem v-for="item in 2" :key="item"/>
    </div>

    <v-btn text class="addBtn" @click="$router.push('cardAdd')">
      <v-icon>mdi-plus-circle-outline</v-icon>
      <label>결제수단 등록하기</label>
    </v-btn>
  </div>
</template>

<script>
import CreditCardItem from '@/components/creditCardItem'

export default {
  components:{
    CreditCardItem,
  },
}
</script>

<style lang="scss" scoped>
.wallet{

  .item-list{
    margin-top:30px;
  }

  .no-data{
    padding:15px;
    margin-bottom:15px;
    background:#f2f2f2;
    text-align:center;
    border-radius:4px;
  }

  .addBtn{
    width:100%;
    height:50px;
    border:1px solid #e2e2e2;
    border-radius:10px;

    .v-icon{
      font-size:18px;
      color:#0CA0E2
    }
    label{
      font-size:14px;
    }
  }
}
</style>