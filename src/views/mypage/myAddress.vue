<template>
  <div class="myAddress contents">
    <div class="page-title">
      <h2>수거/배달 장소관리</h2>
      <p>세탁물 수거/배달에 사용될 장소를 관리/등록합니다</p>
    </div>

    <div class="item-list">
      <div class="no-data">
        등록된 주소가 없습니다
      </div>
      <AddressCard v-for="item in 3" :key="item"/>
    </div>

    <v-btn text class="addBtn" @click="$router.push('cardAdd')">
      <v-icon>mdi-plus-circle-outline</v-icon>
      <label>결제수단 등록하기</label>
    </v-btn>
  </div>
</template>

<script>
import AddressCard from '@/components/addressCard'

export default {
  components:{
    AddressCard
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.myAddress{
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