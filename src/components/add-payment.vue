<template>
  <div class="add-payment">
    <h2>
      <v-icon>mdi-alert-circle</v-icon>
      <span><b>추가결제</b> 요청이 있습니다</span>
    </h2>

    <dl>
      <dt>
        <span class="date">2021.06.21 14:34:12</span>
        <span class="text">맡기신 코트에 오염정도가 심해 추가 세탁이 필요합니다</span>
      </dt>
      <dd>
        <label>요청금액</label>
        <span>5,000원</span>
      </dd>  
    </dl>

    <div class="btns">
      <v-btn text plain @click="modal('modal', true)">
        <label>결제하기</label>
        <v-icon color="#F11064">mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    modal(type, value){
      const data  = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
  }
}
</script>

<style lang="scss" scoped>
.add-payment{
  border-bottom:1px solid #e2e2e2;
  margin-bottom:40px;
  padding-bottom:40px;

  h2{
    display:flex;
    align-items: center;
    .v-icon{margin-right:10px;color:#F11064}
    span{
      flex:1;
      b{color:#F11064;}
    }
  }
  p{margin-top:5px;}

  dl{
    margin-top:20px;
    background:#FBEFF4;
    padding:15px;
    border-radius:5px;

    dt{
      span{display:block;}
      span.date{font-size:12px;margin-bottom:10px;color:#888;}
    }
    dd{
      margin-top:10px;
      display:flex;
      justify-content: flex-end;
      align-items: flex-end;

      label{color:#888;font-size:12px;margin-right:15px;}
      span{
        font-size:18px;
        font-weight:500;
        color:#F11064
      }
    }
  }

  .btns{
    display:Flex;
    justify-content: flex-end;
    margin-top:10px;

    .v-btn{
      display:flex;
      justify-content:space-between;
      align-items: center;
      width:100%;
      padding:0 15px;
      font-size:14px;
      border-radius:5px;
      box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
      min-height:50px;
      border:1px solid #e2e2e2;

      label{}
      .v-icon{
        font-size:18px;
      }
    }
  }
}
</style>