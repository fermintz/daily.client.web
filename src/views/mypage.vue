<template>
  <div class="mypage">
    <div class="mypage-top">
      <div class="left">
        <h2>
          <strong>박수민</strong> 님<br> 만나서 반가워요
        </h2>
        <p>010-8525-4561</p>
      </div>
      <div class="right">
        <v-btn text @click="$router.push('myCouponList')">
          <span>10</span>
        </v-btn>
        <label>
          나의 쿠폰
        </label>
      </div>      
    </div>

    <div class="divier" />
    
    <ul>
      <!-- <li @click="$router.push('wallet')">
        <v-icon>mdi-wallet-outline</v-icon>
        <label>결제수단 관리</label>
      </li> -->
      <li @click="$router.push('myAddress')">
        <v-icon>mdi-map-marker-outline</v-icon>
        <label>수거/배달 장소관리</label>
      </li>
      <li @click="$router.push('myInfo')">
        <v-icon>mdi-card-account-details-outline</v-icon>
        <label>나의 정보 관리</label>
      </li>
    </ul>

    <div class="divier" />

    <ul>
      <li>
        <v-icon>
          mdi-message-text-outline
        </v-icon>
        <label>문의하기</label>
      </li>
      <li>
        <v-icon>mdi-bell-outline</v-icon>
        <label>공지사항</label>
      </li>
      <li>
        <v-icon>mdi-cog-outline</v-icon>
        <label>앱 설정</label>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>

.mypage{
  padding:0 20px;
  padding-top:40px;

  .divier{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  .mypage-top{
    display:flex;
    .left{
      flex:1;
      h2{
        font-size:24px;
        line-height:1.2;
        font-weight:normal;
        strong{
          font-weight:bold;
          color:#0CA0E2
        }
      }

      p{
        font-size:16px;
        color:#888;
        margin:0px;
        margin-top:15px;
      }
    }
    .right{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding:0 26px;
      border-left:1px solid #e2e2e2;

      .v-btn{       
        font-size:32px;
        font-weight:bold;
        background:#F1F5F9;
        width:70px;
        height:70px;
        border-radius:26px;
      }
      label{
        margin-top:10px;
        font-size:12px;
      }
    }
  }

  ul{
    padding:0px;
    
    li{
      font-size:16px;
      margin-bottom:26px;
      .v-icon{
        font-size:18px;
        margin-right:10px;
      }
    }
    li:last-child{
      margin-bottom:0px;
    }
  }
}

</style>