<template>
  <div class="gate_input">
    <dl>
      <dt>공동현관문의 비밀번호가 있나요?</dt>
      <dd>
        <div class="img">
          <img src="@/assets/img/gate.png">
        </div>
        <textarea placeholder="출입방법을 여기에 자세히 입력해주세요"/>
      </dd>
    </dl>
    <div class="lineBar" />
    <dl>
      <dt>공동현관문이 없다면 아래 메뉴를 선택해주세요</dt>
      <dd> 
        <v-btn text
          :class="{active:active}"
          @click="active = !active"
        >
          <v-icon>
            mdi-check-circle
          </v-icon>
          <span>공동현관이 없습니다.</span>
        </v-btn>
      </dd>
    </dl>
    <div class="bottom-btns">
      <v-btn text @click="$router.push('gateInput')">
        <label>등록 완료하기</label>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.gate_input{
  .lineBar{
    height:10px;
    background:#e2e2e2;
    margin:20px 0;
  }
  dl{
    padding:20px 20px;
    dt{
      font-size:20px;
      margin-bottom:15px;
      font-weight:bold;
    }
    dd{
      .img{
        background:#f2f2f2;
        border-radius:5px;
        padding:20px;
        text-align:center;
        img{
          height:150px;
        }
      }

      textarea{
        width:100%;
        margin-top:15px;
        border:1px solid #c2c2c2;
        resize: none;
        height:100px;
        padding:10px;
        border-radius:5px;
      }

      .v-btn{
        width:100%;
        background:#f2f2f2;
        height:50px;
        justify-content: flex-start;
        border-radius:25px;

        span{
          font-size:14px;
        }

        .v-icon{
          margin-right:10px;
          color:#c2c2c2;
        }
      }

      .v-btn.active{
        border:1px solid #e2e2e2;
        background:#fff;
        .v-icon{
          color:#0CA0E2
        }
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
}
</style>