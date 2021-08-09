<template>
  <div class="myInfo contents">
    <div class="page-title">
      <h2>나의 정보관리</h2>
      <p>나의 정보를 변경할 수 있습니다.</p>
    </div>

    <div class="form">
      <dl>
        <dt>
          전화
        </dt>
        <dd>
          <span>010-8525-4561</span>
          <v-btn text>변경</v-btn>
        </dd>
      </dl>
      <dl>
        <dt>
          이름
        </dt>
        <dd>
          <span>박수민</span>
        </dd>
      </dl>
      <dl>
        <dt>
          이메일
        </dt>
        <dd>
          <span>fermintz@gmail.com</span>
        </dd>
      </dl>
    </div>

    <div class="bottom">
      <v-btn 
      text
      class="memberOut"
      @click="$refs.confirm.handle(true)" 
      >회원탈퇴</v-btn>
    </div>

    <Confirm ref="confirm"/>
    
  </div>
</template>

<script>
import Confirm from '@/components/modal/confirm'

export default {
  components:{
    Confirm,
  },
}
</script>

<style lang="scss" scoped>
.myInfo{
  .form{
    dl{
      display:flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;
      margin-bottom:10px;
      height:50px;

      dt{
        width:80px;
        font-size:12px;

      }
      dd{
        display:flex;
        flex:1;
        align-items: center;;
        span{flex:1;}

        .v-btn{
          height:24px;
          border-radius:20px;
          background:#f2f2f2;
        }
      }
    }
  }

  .bottom{
    margin-top:40px;
    text-align:center;
    .memberOut{
      border-radius:20px;
      height:30px;
      border:1px solid #c2c2c2;
    }
  }
}
</style>