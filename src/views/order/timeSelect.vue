<template>
  <div class="timeSelect contents">
    <div class="page-title">
      <h2>선택하신 시간때에 방문할게요</h2>
      <p>희망하시는 수거시간때를 선택해주세요</p>
    </div>

    <div class="times">
      <div class="time_item" v-ripple v-for="item in timeData" :key="item"
        @click="requst('route','ProductSelect')"
      >
        <div class="left">
          <strong>{{ item.text }}</strong>
          <span>{{ item.time }}</span>
        </div>
        <v-icon> mdi-arrow-right-circle-outline </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeData: [
        {
          text: "오전",
          time: "08:00 ~ 12:00",
          state: true,
        },
        {
          text: "오후",
          time: "14:00 ~ 18:00",
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
      border: 1px solid #e2e2e2;
      padding: 15px;
      box-shadow: 5px 5px 15px rgba(0,0,0,0.05);

      .left {
        flex: 1;
        strong {
          font-size: 18px;
          display: block;
        }
        span {
          display: block;
          margin-top: 5px;
          color: #888;
        }
      }

      .v-icon {
        font-size: 26px;
        color: #0ca0e2;
      }
    }
  }
}
</style>
