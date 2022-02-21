<template>
  <v-bottom-navigation
    fixed
    v-model="value"
    color="#0CA0E2"
    app
    class="bottom_navigation"
  >
    <v-btn @click="$router.push('myOrder')">
      <span>이용내역</span>
      <v-icon>mdi-text-box-outline</v-icon>
      
     </v-btn>
    <v-btn  @click="$router.push('/')">
      <span>홈으로</span>
      <v-icon>mdi-home-outline</v-icon>
      
    </v-btn>
    <v-btn  @click="$router.push('mypage')">
      <span>내정보</span>
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data(){
    return{
      value:1,
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom_navigation{
  padding-bottom: env(safe-area-inset-bottom, 15px);
  padding-bottom: constant(safe-area-inset-bottom, 15px);
}
.v-btn{
  height:40px;
  span{
    font-size:10px;
    margin-top:2px;
  }
}
</style>