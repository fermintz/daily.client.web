<template>
  <div class="terms_view contents">
    <div class="page-title">
      <h2>세탁안내사항을 동의해주세요</h2>
      <p>동의하신다면 맨 아래 버튼으로 눌러주세요</p>
    </div>

    <div class="terms_list">
      <dl>
        <dt>
          <img src="https://source.unsplash.com/random">
        </dt>
        <dd>
          <strong>수거일에 물품을 내놓지 않으면 패널티가 있습니다</strong>
          <span>수거물품을 희망하는 시간에 내놓지 않은 경우 수거불가 패널티(3,500원)이 발생할 수 있습니다</span>
        </dd>
      </dl>

      <dl>
        <dt>
          <img src="https://source.unsplash.com/random">
        </dt>
        <dd>
          <strong>추가비용이 발생될수 있습니다!</strong>
          <span>세탁물의 심한 오염 및 명품의류의 경우 추가결제요청이 있을 수 있습니다</span>
        </dd>
      </dl>
    </div> <!-- list -->
    <div class="btns">
      <v-btn text @click="$router.push('orderDetail')">
        <label>모든 내용에 동의합니다</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.terms_view{
  padding-bottom:70px;
  .page-title {
    p {
      margin-top: 5px;
      color: #888;
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  .terms_list{
    dl{
      margin-bottom:30px;
      dt{
        position: relative;
        display:flex;
        align-items: center;
        justify-content: center;
        height:100%;
        background:#918c8c;
        border-radius:5px;
        overflow:hidden;

        img{
          position: absolute;
          width:100%;
          display:block;
        }
      }
      dt:after{
        content:'';
        display:block;
        padding-bottom:56.25% /* 320*180 */
      }
      dd{
        margin-top:15px;
        strong{
          font-size:16px;
          font-weight:500;
          display:block;
        }
        span{
          display:block;
          margin-top:5px;
          font-size:12px;
          color:#898989;
        }
      }
    }
  }

  .btns{
    position: fixed;
    left:0px;
    bottom:0px;
    width:100%;
    background:#0CA0E2;
    
    .v-btn{
      width:100%;
      height:50px;
      font-size:14px;
      color:#fff;

      .v-icon{
        font-size:18px;
        margin-left:10px;
        color:#fff
      }
    }
    
  }
  
}
</style>