<template>
  <div class="dateSelect contents">
    <div class="page-title">
      <h2>어떤 날짜에 수거 해 갈까요?</h2>
      <p>선택하신 날짜에 세탁물을 수거합니다</p>
    </div>
    <div class="day_btns">
      <v-row>
        <v-col cols="4"  v-for="item in days" :key="item">
          <div 
            v-ripple="!item.holiday" 
            class="day_item"
            @click="requst('route','TimeSelect')"
          >
            <div class="day_in_item" :class="{holiday: item.holiday}">
              <strong>{{item.day}}</strong>
              <span>{{item.dayText}}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      days:[
        {
          holiday:false,
          day:1,
          dayText:'화요일'
        },
        {
          holiday:false,
          day:2,
          dayText:'수요일'
        },
        {
          holiday:false,
          day:3,
          dayText:'목요일'
        },
        {
          holiday:false,
          day:4,
          dayText:'금요일'
        },
        {
          holiday:true,
          day:5,
          dayText:'휴일'
        }
      ],
    }
  },
  methods:{
    requst(type, value){
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
  },
}
</script>

<style lang="scss" scoped>
.dateSelect{
  .page-title {
    p {
      margin-top: 5px;
      color: #888;
    }
  }

  .day_btns{
    display:flex;
    flex-wrap: wrap;
    margin-top:30px;

    .v-col{
      text-align:center;
    }

    .day_item{
      position: relative;
      width:100%;
      border-radius:999px;
      overflow:hidden;

      .day_in_item{
        position: absolute;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
        height:100%;

        strong{
          font-size:36px;
          font-family:'Roboto';
          font-weight:600;
        }
        span{
          font-size:12px;
          margin-top:4px;
        }
      }

      .holiday{
        strong{
          color:#aaa;
        }
        span{
          color:#d22828
        }
      }
    }

    .day_item:after{
      content:'';
      display:block;
      padding-bottom:100%;
    }
  }
}
</style>