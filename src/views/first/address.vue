<template>
  <div class="address contents">
    <h2>세탁물 수거/배달을 위한 <br>주소를 입력해주세요</h2>

    <div class="form">
      <div class="rowLine">
        <v-text-field outlined hide-details="auto" height="45px"
          dense
          placeholder="장소별칭을 입력해주세요 예)우리집, 회사"
        />
      </div>
      <div class="rowLine">
        <v-text-field outlined hide-details="auto" height="45px"
          dense
          placeholder="주소를 검색해주세요"
        />
        <v-btn text>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div class="rowLine">
        <v-text-field  outlined hide-details="auto" height="45px" dense
          placeholder="상세주소를 입력해주세요"

        />
      </div>
      <div class="bottom-btns">
        <v-btn text @click="$router.push('gate')">
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
</style>