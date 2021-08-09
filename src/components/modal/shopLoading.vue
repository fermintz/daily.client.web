<template>
  <v-dialog
    v-model="visible"    
  >
    <div class="shopLoading">
      <video autoplay loop>
        <source src="@/assets/video/car.mp4" >  
      </video>
      <p>
        <span>고객님의 장소와 가까운 세탁소와 연결중입니다</span>
        <span>잠시만 기다려주세요</span>
      </p>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true
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

.shopLoading{
  background:#fff;

  video{
    width:100%;
    height:100%;
  }

  p{
    margin:0px;
    padding:20px;
    border-top:1px solid #e2e2e2;
    text-align:center;

    span{
      display:block;
    }
    span:last-child{margin-top:5px;}
  }
}



</style>