<template>
  <div class="address contents">
    <div class="page-title">
      <h2>서비스를 이용하실 주소를 등록해주세요</h2>
    </div>

    <div class="form">
      <div class="rowLine">
        <input type="text" placeholder="검색버튼을 통해 주소를 검색해주세요">
        <v-btn text>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div class="rowLine">
        <input type="text" placeholder="상세주소를 입력해주세요">
      </div>
      <div class="bottom-btns">
        <v-btn text @click="$router.push('gateInput')">
          <label>다음으로</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form{margin-top:30px;}

  .rowLine{
    display:flex;
    align-items: center;
    margin:15px 0;

    input{
      width:100%;
      border:1px solid #c2c2c2;
      height:50px;
      border-radius:5px;
    }

    .v-btn{
      min-width:50px;
      height:50px;
      margin-left:10px;
      padding:0px;
      border-radius:5px;
      background:#292929;
      .v-icon{
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
      background:#0CA0E2;
      width:100%;
      height:50px;
      border-radius:0px;

      label{
        margin-right:20px;
        font-size:14px;
        color:#fff;
      }
      .v-icon{
        font-size:18px;
        color:#fff
      }
    }
  }
</style>