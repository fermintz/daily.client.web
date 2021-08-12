<template>
  <v-dialog
    v-model="visible"
    overlay-opacity="0"
    @click="handle(false)"
    class="dialog"
  >
    <div class="placeSelect modal">
      <div class="inner">
        <div class="modal-head">
          <h2>수거/배달 장소선택</h2>
          <p>수거/배달에 필요한 장소를 선택해주세요</p>
        </div>
        
        <div class="list">
          <div class="no-data">
            등록된 장소가 없습니다
          </div>
          <ul>
            <li>
              <strong>우리집</strong>
              <span>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티</span>
              <p>
                <v-icon>mdi-lock-outline</v-icon>
                <span>#1253 누르고 종누르시면 됩니다</span>
              </p>
            </li>

            <li>
              <strong>회사</strong>
              <span>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티</span>
            </li>

            <li>
              <strong>우리집</strong>
              <span>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티</span>
              <p>
                <v-icon>mdi-lock-outline</v-icon>
                <span>#1253 누르고 종누르시면 됩니다</span>
              </p>
            </li>

          </ul>

          <v-btn text class="addBtn">
            <v-icon>mdi-plus-circle-outline</v-icon>
            <label>장소 추가하기</label>
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  }
}
</script>

<style lang="scss" scoped>

.v-.dialog.dialog{
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
}

.placeSelect{
  background:#fff;

  .modal-head{
    border-bottom:1px solid #e2e2e2;
    padding:20px;
    background:#fff;
    border-radius:5px;

    h2{
      font-size:18px;
      font-weight:bold;
    }
    p{
      font-size:12px;
      color:#888;
      padding:0px;
      margin:0px;
      margin-top:4px;
    }
  }

  .list{
    padding:20px;
    max-height:420px;
    overflow-y:scroll;
  }

  .no-data{
    background:#F1F5F9;
    padding:10px;
    border-radius:4px;
    text-align:center;
    margin-bottom:20px;
    font-size:12px;
  }

  ul{
    padding:0px;
    li{
      border-bottom:1px solid #e2e2e2;
      margin-bottom:20px;
      padding-bottom:20px;

      strong{
        display:block;
        font-size:14px;
        font-weight:bold;
      }
      span{
        display:block;
        font-size:12px;
        color:#888;
        margin-top:4px;
      }
      p{
        display:flex;
        margin:0px;
        margin-top:10px;
        background:#f2f2f2;
        border-radius:4px;
        padding:10px;
        
        .v-icon{margin-right:10px;font-size:18px;}
        label{color:#292929;}
      }
    }
    li:last-child{
      border-bottom:0px;
      margin-bottom:0px;
    }
  }

  .addBtn{
    width:100%;
    height:45px;
    border:1px solid #e2e2e2;
    border-radius:4px;

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