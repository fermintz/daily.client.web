<template>
  <div class="dateSelect contents">
    <div class="page-title">
      <h2>어떤 날짜에 수거할까요?</h2>
      <p>선택하신 날짜에 세탁물을 수거합니다</p>
    </div>

    <div class="day_selector">
      <div class="day_list">
        <div
          :class="{
            day_item: true,
            active: dayActive === index,
            disable: item.state === false,
          }"
          v-for="(item, index) in days"
          :key="index"
          @click="getDay(item, index)"
        >
          <span>{{ item.week }}</span>
          <strong>{{ item.day }}</strong>
        </div>
      </div>
      <div class="delivery_text">
        <span>배송예상일</span>
        <!-- <strong>08/04(목) - 08/05(금)</strong> -->
        <strong>수거날짜를 선택해주세요</strong>
      </div>
    </div>

    <div class="time_selector" id="times">
      <div
        :class="{ time_item: true, active: item.state && timeActive === index, disable: item.state === false}"
        v-for="(item, index) in times"
        :key="index"
        @click="timeActive = index"
      >
        <div class="left">
          <v-icon
            :style="{ color: timeActive === index ? item.color : '#c2c2c2' }"
          >
            {{item.icon}}
          </v-icon>
        </div>
        <div class="right">
          <strong>{{ item.text }}</strong>
          <span>{{ item.state ? item.description : '마감되었습니다'}}</span>
        </div>
      </div>
      <p>
        <v-icon>mdi-alert-circle-outline</v-icon>
        <span>수거는 시작시간부터 순차적으로 진행됩니다</span>
      </p>
    </div>

    <div class="btns">
      <v-btn text @click="$router.push('howUse')">
        <label>다음으로</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>

  </div>
</template>

<script>


export default {
  components:{

  },
  data(){
    return{
      dayActive:null,
      timeActive:null,
      days:[
        { week: "월요일", day: 1, state: true },
        { week: "화요일", day: 2, state: true },
        { week: "수요일", day: 3, state: true },
        { week: "목요일", day: 4, state: true },
        { week: "금요일", day: 5, state: true },
        { week: "토요일", day: 6, state: false },
        { week: "일요일", day: 7, state: false },
        { week: "월요일", day: 8, state: true },
      ],
      times:[
        {
          state:false,
          color: "#FF8000",
          icon: "mdi-weather-sunset",
          text: "오전에 수거",
          description: "09시부터 - 14시까지",
        },
        {
          state:true,
          color: "#E5145B",
          icon: "mdi-white-balance-sunny",
          text: "오후에 수거",
          description: "14시부터 - 18시까지",
        },
        {
          state:true,
          color: "#FFBB00",
          icon: "mdi-weather-night",
          text: "밤에 수거",
          description: "21시부터 - 02시까지",
        },
      ],
    }
  },
  mounted(){

  },
  methods:{
    getDay(item, index){
      item.state === false ? "" : (this.dayActive = index);
      this.showTime()
    },

    showTime(){
      const times = document.getElementById("times");
      window.scrollTo({
        behavior: "smooth",
        top: 120,
      });
      times.style.transition = "all 0.4s ease-in-out";
      times.style.top = 0;
      times.style.opacity = 1;
    },
  },
}
</script>

<style lang="scss" scoped>
.dateSelect{
  padding-bottom:80px;
}
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
  border:1px solid #e2e2e2;
  border-radius:12px;
  padding:15px;

  .day_list{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:10px;

    .day_item{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius:12px;
      padding:10px 0;
      border:2px solid #fff;

      span{
        font-size:12px;
        margin-bottom:5px;
      }
      strong{
        font-size:30px;
        line-height:1;
        font-family:'Roboto';
        font-weight:600;
      }
    }

    .active{
      border:2px solid #0090FF;
      strong{color:#0090FF}
    }

    .disable{
      span,strong{color:#aaa;}
    }
  }

  .delivery_text{
    display:flex;
    align-items: center;
    margin-top:15px;
    border-radius:5px;
    padding:10px;
    background:#f6f6f6;

    span{
      margin-right:15px;
      font-size:12px;
    }
    strong{
      color:#E5145B;
      font-size:13px;
    }
  }
}



.time_selector{
  position: relative;
  margin-top:30px;
  display:flex;
  flex-direction: column;
  gap:10px;
  opacity:0;
  top:50px;
  // transition: all 1s ease-in-out;

  .time_item{
    border:1px solid #e2e2e2;
    padding:15px;
    border-radius:12px;
    display:flex;
    align-items: center;

    .left{
      .q-icon{
        font-size:24px;
      }
    }

    .right{
      display:flex;
      flex-direction: column;
      margin-left:20px;
      strong{
        font-size:18px;
        font-weight:bold;
      }
      span{
        font-size:13px;
      }
    }
  }

  .time_item.active{
    border:2px solid #0090FF;
  }

  .time_item.disable{
    border:0;
    background:#f2f2f2;
    strong{
      text-decoration: line-through;
    }

  }

  p{
    display:flex;
    margin-top:5px;
    background:#f8f8f8;
    padding:10px;
    border-radius:5px;
    span{
      flex:1;

    }
    .v-icon{
      font-size:14px;
      margin-right:5px;
      color:#E5145B;
    }
  }
}


.btns{
  position: fixed;
  padding:10px;
  left:0px;
  bottom:0px;
  width:100%;
  background:#fff;
  
  
  .v-btn{
    width:100%;
    height:50px;
    font-size:14px;
    color:#fff;
    border-radius:5px;
    background:#0CA0E2;

    .v-icon{
      font-size:18px;
      margin-left:10px;
      color:#fff
    }
  }
}

</style>