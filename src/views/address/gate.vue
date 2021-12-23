<template>
  <div class="gate_input contents">
    <div class="page-title">
      <h2>공동현관문(보안문)의<br>출입방법을 알려주세요</h2>
      <p>공동현관문이 없거나 모두 출입이 가능하다면<br><b>[다음으로]</b> 버튼을 눌러주세요</p>
    </div>
    
    <dl>
      <dt>
        <img src="@/assets/img/gate.png">
      </dt>
      <dd>
        <textarea placeholder="출입방법을 자세히 입력해주세요"/>
        <div class="ex_text">
          <span>예) <b>309 누루고 *1234 누르고 키</b></span>
        </div>
      </dd>
    </dl>

    

    <div class="divider" />
    
    <div class="guide">
      공동현관문 비밀번호를 미기재 하셨으나, 공동현관문이 존재 
      혹은 잠금상태로 인해 데일리세탁 수거 배송 기사님이 고객님의 문 앞에 
      도착하지 못하여 유선상의 연결을 진행 할 수 있으며, 이에 <b>2회 이상 
      불응시 픽업/배송비 패널티가 부과</b> 될 수 있습니다.
    </div>

    <div class="bottom-btns" >
      <v-btn text @click="$router.push('notGate')">
        <label>다음으로</label>
        <v-icon>mdi-arrow-right</v-icon>
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
  .page-title{
    p{
      b{
        color:#D20059
      }
    }
  }

  dl{
    
    dt{
      background:#f2f2f2;
      padding:20px;
      text-align:center;
      border-radius:5px;
      overflow:hidden;

      img{
        height:120px;
      }
        
    }
    dd{ 
      margin-top:10px;
      border:2px solid #292929;
      border-radius:5px;
      overflow:hidden;
      box-shadow: 5px 5px 15px rgba(0,0,0,0.1);

      textarea{
        width:100%;
        resize: none;
        height:80px;
        padding:10px;
        border-radius:5px;
        resize:none;
        outline: none;
      }

      textarea:focus{
        border-color:#292929;
      }
    }
  }

  .divider{
    margin:20px 0;
  }

  .ex_text{
    display:flex;
    align-items: center;
    justify-content: flex-end;
    width:100%;
    margin-top:5px;
    font-size:12px;
    padding:10px;
    span{
      display:flex;
      align-items: center;
      background:#292929;
      color:#fff;
      padding:0 15px;
      border-radius:12px; 
      height:24px;
      b{
        color:#fff;
        margin-left:5px;
      }
    }

    
  }

  .guide{
    padding:0;
    margin-top:10px;
    b{
      color:#D20059
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