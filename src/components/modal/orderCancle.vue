<template>
  <v-dialog
    v-model="visible"
  >
    <div class="orderCancle">
      <div class="cont">
        <h3>주문취소</h3>
        <p>현재 배송기사님이 수거를 진행중에 있습니다. 수거를 진행중에 취소하게되면 <b>취소수수료</b>가 발생합니다
          그래도 취소하시겠습니까?
        </p>

        <div class="price">
          <span>수수료</span>
          <strong>3,500 원</strong>
        </div>
      </div>
      <div class="btns">
        <v-btn text>아니오</v-btn>
        <v-btn text>네, 주문취소합니다</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
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
.orderCancle{
  background:#fff;
  border-radius:5px;
  .cont{
    padding:20px;
    h3{margin-bottom:5px;font-weight:bold;}
    p{
      margin:0;

      b{
        color:#D20059
      }
    }

    .price{
      display:flex;
      align-items: center;
      justify-content: space-between;
      background:#FBEFF4;
      height:40px;
      border-radius:5px;
      padding:0 10px;
      margin-top:15px;

      strong{color:#D20059 }
    }
  }

  .btns{
    display:flex;
    align-items: center;
    justify-content: flex-end;
    border-top:1px solid #e2e2e2;

    .v-btn{
      padding:0px 20px;
      min-height:56px;
      border-radius:0px;
    }
  }
}
</style>