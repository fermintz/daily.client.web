<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal confirm">
      <div class="cont">
        <v-icon>
          mdi-alert-circle
        </v-icon>
        <div class="text">
          <strong>상품선택</strong>
          <span>상품을 담지 않았습니다.</span>
        </div>
      </div>
      <div class="bottom">
        <v-btn text>닫기</v-btn>
        <v-btn text class="finish">확인</v-btn>
      </div>
      
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false
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
.modal{
  background:#fff;
  padding:10px;
  .cont{
    display:flex;
    align-items: center;
    padding:10px;

      .text{
        flex:1;
        border-left:1px solid #e2e2e2;
        margin-left:10px;
        padding-left:10px;
        strong{
          display:block;
          color:#898989;
          font-size:12px;
          margin-bottom:3px;
        }
        span{
          flex:1;
          font-size:16px;
          line-height:1.3;
          margin:0;
        }
      }

      .v-icon{
        font-size:32px;
        color:#292929;
      }
  }
  .bottom{
    text-align:right;
    margin-top:10px;
    .v-btn{
      height:36px;
      background:#e2e2e2;
      border-radius:100px;
      margin-left:10px;
    }

    .v-btn.finish{
      background:#0CA0E2;
      color:#fff;
    }
  }
}
</style>