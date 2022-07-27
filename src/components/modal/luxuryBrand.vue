<template>
  <v-bottom-sheet v-model="visible">
    <div class="luxuryBrand">
      <header>
        <title>
          <h2>명품브랜드 검색</h2>
          <p>내가 가진 제품이 명품인지 확인해보세요</p>
        </title>
        
      </header>
      <v-btn class="close" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {
  data(){
    return{
      visible:true,
    }
  }
}
</script>


<style lang="scss" scoped>
.luxuryBrand{
  position: relative;
  background:#fff;
  padding:25px;
  border-radius:30px 30px 0 0;
  min-height:100vh;

  .close{
    position: absolute;
    top:15px;
    right:15px;
    width:40px;
    height:40px;
    background:#f2f2f2;
  }
  
}
</style>