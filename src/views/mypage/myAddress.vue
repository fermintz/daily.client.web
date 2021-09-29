<template>
  <div class="myAddress">
    <div class="location">
      <div class="page-title">
        <h2>수거/배달을 위한<br>주소를 선택/등록해주세요</h2>
      </div>
     
      <v-btn text class="add_btn" @click="$router.push('addressForm')">
        <v-icon>mdi-map-marker</v-icon>
        <span>주소등록하기</span>
      </v-btn>
    </div>

    <div class="line_bar" />

    <div class="item-list">
      <div class="no_data">
        등록된 주소가 없습니다.<br>주소를 등록해주세요
      </div>
      <AddressCard v-for="item in 2" :key="item"/>
    </div>
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
  .location{
    padding:0 20px;
    padding-bottom:20px;

    h2{
      margin-bottom:15px;
    }


    .add_btn{
      border:1px solid #e2e2e2;
      height:40px;
      width:100%;
      margin-top:10px;
      font-size:14px;
      border-radius:20px;

      .v-icon{
        font-size:16px;
        color:#01A1DF;
      }
    }
  }

  .line_bar{
    height:15px;
    background:#f2f2f2;
  }
  .item-list{
    .no_data{
      padding:15px;
      margin-bottom:15px;
      border-bottom:1px solid #e2e2e2;
      text-align:center;
      border-radius:4px;
      color:#898989;
    }
  }
}
</style>