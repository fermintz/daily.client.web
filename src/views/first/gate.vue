<template>
  <div class="gate contents">
    <h2>출입구에 비밀번호가 있나요?</h2>

    <div class="form">
      <div class="check-item" @click="active = 0">
        <div class="top">
          <v-icon :color="active === 0 ? '#0CA0E2' : '#c2c2c2'">mdi-check-circle</v-icon>
          <label>네, 비밀번호가 있습니다</label>
        </div>
        <div class="inputBox">
          <v-text-field
            hide-details="auto"
            placeholder="예) #1235 누루고 종 누루고" 
            label="출입구 비밀번호 입력"
          />
        </div>
      </div>
      <div class="check-item" @click="active = 1">
        <div class="top">
          <v-icon  :color="active === 1 ? '#0CA0E2' : '#c2c2c2'">mdi-check-circle</v-icon>
          <label>출입구에 비밀번호가 없어요!</label>
        </div>
      </div>
    </div>

    <div class="bottom-btns">
      <v-btn text @click="$router.push('/')">
        <v-icon>mdi-check</v-icon>
        <label>완료하기</label>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0,
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  margin-top:30px;
  
  .check-item{
    border:1px solid #e2e2e2;
    padding:20px;
    margin-bottom:20px;
    border-radius: 4px;

    .top{
      
      .v-icon{margin-right:10px}
    }
    .inputBox{
      margin-top:20px;
    }
  }
}

.bottom-btns{
  width:100%;
  position: absolute;
  bottom:0px;
  left:0px;

  .v-btn{
    background: #0CA0E2;
    width:100%;
    height:60px;
    border-radius:0px;

    .v-icon{margin-right:10px;color:#fff;}

    label{
      margin-right:20px;
      font-size:14px;
      color:#fff;
    }
  }
}
</style>