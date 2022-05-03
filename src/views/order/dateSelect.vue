<template>
  <div class="dateSelect contents">
    <div class="page-title">
      <h2>어떤 날짜에 수거 해 갈까요?</h2>
      <p>선택하신 날짜에 세탁물을 수거합니다</p>
    </div>
    <div class="day_selector">
      <v-row>
        <v-col cols="4" v-for="item in days" :key="item" >
          <div class="day_btn" v-ripple :class="{holiday:item.holiday}">
            <dl class="day">
              <dt>{{item.day}}</dt>
              <dd>{{item.dayText}}</dd>
            </dl>
            <dl class="delivery">
              <dt>배송예상일</dt>
              <dd>{{item.deliveryDate}}</dd>
            </dl>
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
          day:'오늘',
          dayText:'화요일',
          deliveryDate:'4일(금)~7일(월)'
        },
        {
          holiday:false,
          day:2,
          dayText:'수요일',
          deliveryDate:'7일(월)~8일(화)'
        },
        {
          holiday:false,
          day:3,
          dayText:'목요일',
          deliveryDate:'9일(수)~10일(목)'
        },
        {
          holiday:false,
          day:4,
          dayText:'금요일',
          deliveryDate:'10일(목)~11일(금)'
        },
        {
          holiday:true,
          day:5,
          dayText:'휴일',
          deliveryDate:'11일(금)~14일(월)'
        },
        {
          holiday:true,
          day:6,
          dayText:'휴일',
          deliveryDate:'11일(금)~14일(월)'
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

  .day_selector{
    display:flex;
    flex-wrap: wrap;
    gap:10px;

    .row{
      margin:-5px;
    }

    .col{
      padding:5px;
    }

    .day_btn{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      border:1px solid #e2e2e2;
      padding:10px;
      border-radius:10px;
      min-height:140px;

      .day{
        dt{
          font-size:28px;
          font-weight:bold;
        }
        dd{

        }
      }
      .delivery{
        dt{
          font-size:10px;
          color:#898989;
        }
        dd{
          font-size:10px;
          color:#0000FF;
        }
        
      }
    }

    .holiday{
      border:0;
      background:#f2f2f2;

      .day{
        dt{
          color:#898989;
        }
      }
      .delivery{
        display:none;
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