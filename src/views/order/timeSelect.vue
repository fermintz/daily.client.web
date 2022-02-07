<template>
  <div class="timeSelect contents">
    <div class="page-title">
      <h2>선택하신 시간때에 방문할게요</h2>
      <p>희망하시는 수거시간때를 선택해주세요</p>
    </div>

    <div class="times">
      <div class="time_item" v-ripple v-for="(item, index) in timeData" :key="index"
      :class="{close:index === 0}"
        @click="$router.push('product')"
      >
        <div class="left">
          <strong>{{ item.text }}</strong>
          <span>{{item.state ? '수거마감' : '수거시작'}}</span>
        </div>
        <v-icon> mdi-arrow-right-circle-outline </v-icon>
      </div>
    </div>

    <div class="divider"></div>

    <div class="guide">
      <h4>
        유의사항
      </h4>
      <ul>
        <li><b>오전 수거</b> 시간은 8시부터 진행되므로 반드시 <b>8시 이전에 알림 메세지</b>에 따라 예약하신 품목을 내놓아 주시기 바랍니다.</li>
        <li><b>야간 수거</b> 시간은 20시부터 진행되므로 반드시 <b>20시 이전에 알림 메세지</b>에 따라 예약하신 품목을 내놓아 주시기 바랍니다.</li>
        <li>수거 예약한 시간 내에 내놓는 것이 아니라 <b>예약한 시간 이 전에 세탁을 진행할 품목을 내놓아 주셔야 합니다.</b></li>
        <li>예약하신 수거 시간이 진행 된 이 후부터는 세탁물을 내놓지 않아 데일리세탁 담당기사님의 유선 연락에 불응될 시 수거 패널티가 부과됩니다.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeData: [
        {
          text: "오전 9시부터",
          state: true,
        },
        {
          text: "오후 2시부터",
          state: false,
        },
      ],
    };
  },
  methods: {
    requst(type, value) {
      const data = JSON.stringify({ type: type, value: value });
      window.ReactNativeWebView.postMessage(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.timeSelect {
  .page-title {
    p {
      margin-top: 5px;
      color: #888;
    }
  }

  .times {
    margin-top: 40px;
    .time_item {
      display: flex;
      justify-content: space-between;
      border-radius: 5px;
      margin-bottom: 15px;
      border: 1px solid #c2c2c2;
      padding: 15px;


      .left {
        flex: 1;
        strong {
          font-size: 16px;
          font-weight:bold;
          line-height:1.4;
          display: block;

        }
        span {
          display: block;
          margin-top: 2px;
          color: #0ca0e2;
        }
      }

      .v-icon {
        font-size: 26px;
        color: #0ca0e2;
      }
    }

    .time_item.close{
      background:#e2e2e2;
      box-shadow: none;
      border:0;

      .left{
        strong{
          color:#898989;
        }
        span{
          color:#898989;
        }
      }
      .v-icon{
        color:#aaa;
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:40px 0;
  }

  .guide{
    h4{
      font-size:16px;
      font-weight:bold;
      margin-bottom:10px;
    }
    ul{
      padding:0px;
      li{
        margin-bottom:6px;
        line-height: 1.3;

        &:before{
          content:'-';
          margin-right:3px;
        }

        b{
          color:#de0059;
        }
      }
    }
  }
}
</style>
