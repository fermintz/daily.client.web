<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal confirm">
      <div class="modal-cont">
        <div class="left">
          <p>모든 항목에 동의하기를 체크해주세요</p>
        </div>
        <div class="right">
          <v-btn text @click="visible = false">확인</v-btn>
        </div>
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
    display:flex;
    align-items: center;

    .left{
      flex:1;
      padding:20px;
      p{
        font-size:16px;
        line-height:1.4;
      }
    }
    .right{
      padding:20px;
      background:#f2f2f2;
      .v-btn{
        padding:0;
        min-width:50px;
        height:50px;
        border-radius:25px;
        background:#0CA0E2;
        color:#fff;
      }
    }
    p{
      font-size:14px;
      color:#292929;
      margin:0px;
      margin-top:5px;
    }
  }
}
</style>