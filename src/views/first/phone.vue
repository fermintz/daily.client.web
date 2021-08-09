<template>
  <div class="phone contents">
    <h2>회원님의 전화번호를 <br>확인할게요</h2>

    <div class="form">
      <div class="rowLine">
        <v-text-field outlined hide-details="auto" height="45px"
          dense
          placeholder="전화번호 '-' 제외입력"
        />
        <v-btn text>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <div class="rowLine">
        <v-text-field  outlined hide-details="auto" height="45px" dense
          placeholder="인증번호를 입력해주세요"
          suffix="00:60"
        />
      </div>
      <div class="bottom-btns">
        <v-btn text @click="$router.push('address')">
          <label>다음으로</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.phone{

  .form{margin-top:30px;}

  .rowLine{
    display:flex;
    margin-bottom:15px;

    .v-btn{
      min-width:45px;
      height:45px;
      margin-left:10px;
      padding:0px;
      border-radius:4px;
      background:#292929;

      .v-icon{
        font-size:18px;
        color:#fff;
      }
    }

  }
  .bottom-btns{
    width:100%;
    position: absolute;
    bottom:0px;
    left:0px;

    .v-btn{
      border-top:1px solid #e2e2e2;
      width:100%;
      height:60px;
      border-radius:0px;

      label{
        margin-right:20px;
        font-size:14px;
      }
      .v-icon{
        font-size:18px;
        color:#0CA0E2
      }
    }
  }
}
</style>