<template>
  <div class="login_wrap">
  
    <div class="logo">
      <img src="@/assets/img/logo.svg">
    </div>
  

    <div class="bottom">
      <div class="bottom_title">
        <h2>지친일상에 휴식을 주는 <br>모바일 세탁소 <span>데일리세탁</span></h2>
        <p>집앞까지 수거·배달 편리한 세탁서비스를 만나보세요</p>
      </div>
      <div class="btns">
        <v-btn text>
          <span><img src="@/assets/img/kakao-login.png"></span>
          <label>카카오톡으로 시작하기</label>
        </v-btn>
        <v-btn text v-show="true">
          <span><img src="@/assets/img/apple-login.png"></span>
          <label>Apple로 로그인</label>
        </v-btn>
      </div>
    </div>  

  </div>
</template>

<style lang="scss" scoped>
.login_wrap{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:25px;
  height:100%;

  .logo{
    position: absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    flex:1;
    margin-top:-200px;

    img{
      display:block;
      height:100px;
    }
  }

  .bottom{
    width:100%;
    padding:0 30px;
    position: absolute;
    bottom:50px;
    padding-bottom:30px;

    h2{
      span{color:#0CA0E2}
    }
    p{
      margin:0px;
      padding:0px;
      margin-top:10px;
      color:#888;
    }

    .btns{
      margin-top:30px;

      .v-btn{
        width:100%;
        height:50px;
        border:1px solid #e2e2e2;
        border-radius:5px;
        justify-content: flex-start;
        margin-bottom:10px;

        span{
          img{
            display:block;
            height:30px;
          }
        }
        label{
          margin-left:10px;
          font-size:14px;
        }
      }

      .v-btn:last-child{
        margin-bottom:0px;
      }
    }
  }
}

.logo-enter-active{
  bottom:0px;
  transition:opacity 1s ease, transform 1s ease;
  
}

.bottom-enter-active{
  transition:opacity .5s ease;
  transition-delay: 1s;
}
.logo-enter{
  opacity: 0;
  transform:translateY(80px)
}
.bottom-enter{
  opacity:0;
}

</style>