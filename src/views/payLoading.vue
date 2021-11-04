<template>
  <div class="payLoading">
    <div class="progress">
      <v-progress-circular
        indeterminate
        width="2"
        size="150"
        color="#0E8FF2"
        style="z-index:99"
      >
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-progress-circular>
      <span class="progress-bg"/>
    </div>
    <dl>
      <dt>결제가 진행중입니다</dt>
      <dd>
        안전한 결제를 위해 진행중입니다<br>
        잠시만 기다려주세요
      </dd>
    </dl>

  </div>
</template>

<style lang="scss" scoped>
.payLoading{
  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  background:#f2f2f2;
  padding:30px;


  .progress{
    position: relative;
    .progress-bg{
      position: absolute;
      left:0;
      top:0;
      border-radius:100%;
      z-index:1;
      display:block;
      width:100%;
      height:100%;
      border:2px solid #e2e2e2;
    }
  }

  .v-icon{
    font-size:70px;
    color:#0E8FF2;
  }

  dl{
    margin-top:50px;
    dt{
      font-family:'NotoSans KR';
      font-size:24px;
    }
    dd{
      font-size:14px;
      margin-top:15px;
      color:#898989;
      line-height:1.4;
    }
  }

}
</style>