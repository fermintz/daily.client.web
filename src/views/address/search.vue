<template>
  <div class="address_search contents">
    <div class="page-title">
      <h2>서비스를 이용하실 주소를 등록해주세요</h2>
    </div>

    <div class="form">
      <v-btn text>
        <label>주소검색</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <input type="text" placeholder="검색버튼을 통해 주소를 검색해주세요" disabled class="detail">
      <input type="text" placeholder="상세주소를 입력해주세요">
    </div>

    <div class="bottom-btns">
      <v-btn text @click="$router.push('gateInput')">
        <label>다음으로</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address_search{
  .form{
    margin-top:30px;

    .v-btn{
      justify-content: space-between;
      padding:0 10px;
      width:100%;
      height:50px;
      border-radius:5px;
      font-size:14px;
      background:#292929;
      color:#fff;
      margin-bottom:10px;
      .v-icon{
        color:#fff;
      }
    }

    input{
      width:100%;
      margin-bottom:10px;
      border:1px solid #d2d2d2;
      height:50px;
      border-radius:5px;
      outline: none;
    }
    input.detail{
      background:#f2f2f2;
      border:0px;
    }

    input:focus{
      border-color:#292929;
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
        margin-right:10px;
        font-size:14px;
        color:#fff;
      }
      .v-icon{
        font-size:18px;
        color:#fff
      }
    }
  }
}
</style>