<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal confirm">
      <div class="modal-cont">
        <h2>회원탈퇴</h2>
        <p>회원탈퇴를 진행할까요?</p>
      </div>
      <div class="modal-footer">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text @click="visible = false">확인</v-btn>
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

  .modal-cont{
    padding:20px;
    h2{
      font-size:16px;
      font-weight:bold;
    }
    p{
      font-size:14px;
      color:#888;
      margin:0px;
      margin-top:5px;
    }
  }
  .modal-footer{
    padding:0px;
    text-align:right;
    background:#f2f2f2;
    .v-btn{
      border-radius:0;
      height:50px;
      padding:0 30px;
    }
    .v-btn:last-child{
      color:#0CA0E2;
    }
  }
}
</style>