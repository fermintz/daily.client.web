<template>
  <div class="snackbar" v-if="visible">
    <div class="inner">
      <div class="text">일반 마사지샵 수건류 50L 상품을 담았습니다</div>
      <div class="btns">
        <v-btn text @click="visible = false">닫기</v-btn>
      </div>
    </div>
  </div>
  <!-- <v-snackbar
    v-model="visible"
    :timeout="timeout"
    rounded="pill"
    width="auto"
  >
    <v-icon class="mr-2" size="18">
      mdi-basket-plus-outline
    </v-icon>
    {{ text }}
  </v-snackbar> -->
</template>

<script>
export default {
  props:[
    'text'
  ],

  data(){
    return{
      visible:false,
    }
  },
  watch:{
    visible(value){
      if(value === true){
        setTimeout(()=>{
          this.visible = false
        }, 500)
      }
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
  
}
</script>

<style lang="scss" scoped>
.snackbar{
  display:flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width:100%;
  top:50%;
  left:50%;
  padding:0 40px;
  z-index:99;
  transform: translate(-50% ,-50%);
  animation:upSlide 0.25s forwards;

  @keyframes upSlide {
    0%{
      top:53%;

    }
    50%{
      top:50%;
 
    }
  }

  .inner{
    width:auto;
    text-align:center;
    overflow:hidden;
    border-radius:5px;
    background:rgba(0,0,0,0.7);
    padding:8px;
   
    .text{
      color:#fff;
      display:inline-block;
      padding:5px;
      font-size:12px; 
    }
    .btns{
      display:none;
      text-align:center;
      .v-btn{
        min-width:auto;
        padding:0px 20px;
        color:#00FFE5;
        height:26px;
        font-size:12px;
        border-radius:13px;
      }
    }
    
  }
}
</style>