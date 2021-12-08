<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="member_out">
      <h2>회원탈퇴</h2>
      <ul>
        <li>회원탈퇴로 인하여 회원 정보(예약내역, 문의내역, 요청사항, 개인정보)가 삭제되어 조회가 불가능합니다.</li>
        <li>회원탈퇴 후 환불 처리 또한 회원 정보 삭제 중 고객님의 이용 내역이 또한 삭제되므로  환불 및 문의가 불가능 합니다. 문의와 환불의 진행 상황이 모두 종료된 이 후 탈퇴를 진행해 주시기 바랍니다.</li>
      </ul>
      <form>
        <input type="text" placeholder="가입시 작성한 이름을 입력해주세요">
        <div class="btns">
          <v-btn text>
            취소
          </v-btn>
          <v-btn text class="out in"> 
            동의하고 탈퇴하기
          </v-btn>
        </div>
      </form>

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

<style lang="scss">
.member_out{
  background:#fff;
  padding:25px;
  border-radius:20px 20px 0 0;

  h2{
    font-weight:bold;
  }

  ul{
    margin-top:15px;
    padding:0px;
    li{
      margin-bottom:10px;
    }
  }

  form{
    margin-top:40px;
    input{
      width:100%;
      border-bottom:2px solid #e2e2e2;
      padding:0px;
      height:50px;
      border-radius:0px;
      outline: none;
      font-size:16px;
    }
    input:focus{
      border-bottom:2px solid #de0059;
    }

    .btns{
      display:flex;
      margin-top:30px;
      .v-btn{
        flex:1;
        border:1px solid #d2d2d2;
        height:50px;
        margin-right:10px;
        font-size:14px;
      }
      .v-btn.out{
        margin-right:0px;
        border:0px;
        background:#292929;
        color:#fff;
      }
    }
  }
}
</style>