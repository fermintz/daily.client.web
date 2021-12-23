<template>
  <div class="notGate contents">
    <div class="page-title">
      <h2>공동현관문(보안문)이 없다면 <br/>아래 메뉴를 다시 선택해주세요</h2>
    </div>

    <div class="btns">
      <v-btn text class="next" @click="$router.push('myAddress')"> 
        <label>
          공동현관문은 누구나 출입이 가능합니다
        </label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn text class="back" @click="$router.push('gateInput')">
        <label><v-icon>mdi-alert-circle</v-icon>공동현관 출입방법을 다시 입력할게요!</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <div class="divider" />

    <div class="guide">
      공동현관문 비밀번호를 미기재 하셨으나, 공동현관문이 존재 
      혹은 잠금상태로 인해 데일리세탁 수거 배송 기사님이 고객님의 문 앞에 
      도착하지 못하여 유선상의 연결을 진행 할 수 있으며, 이에 <b>2회 이상 
      불응시 픽업/배송비 패널티가 부과</b> 될 수 있습니다.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notGate{
  .page-title{
    h2{
      b{
        font-weight:bold;
        color:#0CA0E2
      }
    }
  }

  .btns{
    .v-btn{
      width:100%;
      justify-content: space-between;
      height:50px;
      border:1px solid #d2d2d2;
      margin-bottom:10px;
      padding:0 10px;
      label{
        font-size:14px;

        .v-icon{
          color:#d22828;
          margin-right:4px;
        }
      }
      .v-icon{
        font-size:18px;
      }
    }

    .next{
      border:0px;
      background:#292929;
      label{
        color:#fff;
      }
      .v-icon{
        color:#fff;
      }
    }

    .v-btn:last-child{
      margin-bottom:0px;
    }
  }

  .divider{
    margin:20px 0;
  }

  .guide{
    padding:0;
    margin-top:10px;
    b{
      color:#D20059
    }
  }

}
</style>