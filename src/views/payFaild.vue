<template>
  <div class="payFaild">

    <v-icon>mdi-alert-circle-outline</v-icon>
    <dl>
      <dt>결제가 실패했습니다</dt>
      <dd>
        주문하신 내역의 결제가 실패하였습니다<br>
        확인 후 다시 시도하시거나 고객센터로 연락주십시오
      </dd>
    </dl>

  </div>
</template>

<style lang="scss" scoped>
.payFaild{
  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  background:#f2f2f2;
  padding:30px;

  .v-icon{
    font-size:92px;
    color:#d2d2d2;
  }

  dl{
    margin-top:30px;
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