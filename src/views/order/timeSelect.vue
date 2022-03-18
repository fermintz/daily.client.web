<template>
  <div class="timeSelect contents">
    
    <div class="page-title">
      <h2>선택하신 시간때에 방문할게요</h2>
      <span>희망하시는 수거시간때를 선택해주세요</span>
    </div>

    <div class="times">
      <p>
        <v-icon>mdi-alert-circle</v-icon>
        <span>오늘의 모든 주문이 마감되었습니다.</span>
      </p>
      <div 
        class="time_item am close"
        v-ripple
        @click="$router.push('product')"
      >
        <span>
          마감
        </span>
        <dl>
          <dt>08:00 ~ 14:00</dt>
          <dd>오전 8시부터 예약된 주문순부터 순차적으로 
수거를 진행합니다</dd>
        </dl>
  
      </div>
      <div
        class="time_item pm"
        v-ripple
        @click="$router.push('product')"
      >
        <span>
          오후
        </span>
        <dl>
          <dt>20:00 ~ 02:00</dt>
          <dd>오후 8시부터 예약된 주문순부터 순차적으로 수거를 진행합니다</dd>
        </dl>
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

    <TimeSelectPopup ref="timeSelectPopup"/>
  </div>
</template>

<script>
import TimeSelectPopup from '@/components/modal/timeSelectPopup.vue'

export default {
  components:{
    TimeSelectPopup
  },
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
    p{
      display:flex;
      align-items: center;
      background:#FBF2F6;
      color:#de0059;
      padding:10px;
      border-radius:5px;

      .v-icon{
        font-size:18px;
        margin-right:5px;
        color:#de0059
      }
      span{
        font-size:14px;
      }
    }

    .time_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 10px;
      margin-bottom: 15px;
      border: 1px solid #c2c2c2;
      padding: 15px;

      &.am{
        span{
          background:#f40f4b;
        }
        dl{
          dt{
            color:#f40f4b
          }
        }
      }

      &.pm{
        span{
          background:#082b77;
        }
        dl{
          dt{
            color:#082b77;
          }
        }
      }

      &.close{
        background:#e2e2e2;
        border:0px;

        dl{
          dt{
            text-decoration:line-through;
          }
        }
      }

      span{
        display:flex;
        justify-content: center;
        align-items: center;
        background:#292929;
        width:70px;
        height:70px;
        border-radius:35px;
        color:#fff;
        font-size:18px;
        font-weight:bold;
        margin-right:20px;
      }
      dl{
        flex:1;
        dt{
          font-size:22px;
          font-weight:bold;
        }
        dd{
          font-size:12px;
        }
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
