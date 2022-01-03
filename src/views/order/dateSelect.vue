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
            <div class="day_in_item" :class="{holiday: item.holiday}" @click="$router.push('timeSelect')">
              <strong>{{item.day}}</strong>
              <span>{{item.dayText}}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="divider"></div>

    <div class="guide">
      <h4>유의사항</h4>
      <ul>
        <li><b>선택하신 날짜는 이 후에 변동이 불가능</b>하므로 해당 부분 확인 후에 고객님께서 가능한 날짜만 반드시 선택해주세요.</li>
        <li>수거 예약을 선택하신 날짜에 맞춰 데일리세탁 기사님이 방문하시니 꼭 <b>잊지말고 세탁물을 내놓아주세요.</b></li>
        <li>주말 및 공휴일에는 데일리세탁이 운영하지 않으므로 수거나 배송 업무가 진행되지 않습니다.</li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  components:{

  },
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
  mounted(){

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

  .back{
    margin-bottom:20px;
    .v-btn{
      background:#f2f2f2;
      border-radius:100px;
      height:40px;
      
      .v-icon{
        margin-right:10px;
      }
    }
  }

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