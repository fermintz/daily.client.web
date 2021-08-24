<template>
  <div class="home">
    <PlaceSelect ref="placeSelect"/>
    <HomeHeader />

    <div class="inner">

      <AddPayment />
      <BookingNotice />

      <div class="main-visual">
        <div class="mainTitle">
          <h1>쉽고 간편하게<br><span>세탁을 시작해보세요</span></h1>
          <p>가까운 세탁소에 대신 세탁물을<br>맏겨드립니다</p>
        </div>

        <v-btn 
          @click="requst('route','dateSelect')" class="orderBtn" text plain
          
        >
          <label>세탁 예약하기</label>
          <v-icon color="#01A1DF">mdi-arrow-right</v-icon>
        </v-btn>

        <div class="quick-menu">
          <v-row>
            <v-col cols="3">
              <dl @click="requst('route','DailyPrice')">
                <dt>
                  <img src="@/assets/img/price_table.png">
                </dt>
                <dd>세탁가격표</dd>
              </dl>
            </v-col>
            <v-col cols="3">
              <dl @click="requst('route','HowTo')">
                <dt>
                  <img src="@/assets/img/qna.png">
                </dt>
                <dd>이용방법</dd>
              </dl>
            </v-col>
            <v-col cols="3">
              <dl>
                <dt>
                  <img src="@/assets/img/talk.png">
                </dt>
                <dd>문의하기</dd>
              </dl>
            </v-col>
            <v-col cols="3">
              <dl @click="requst('route','MyCoupon')">
                <dt>
                  <img src="@/assets/img/coupon.png">
                </dt>
                <dd>나의쿠폰</dd>
              </dl>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="divider" />

      <!-- <div class="quick-order">
        <div class="title">
          <span>빠른 세탁예약!</span>
          <h2>오늘 세탁을 맡기실 예정이신가요?</h2>
          <p>선택하신 시간때에 방문할게요</p>
        </div>

        <div class="quick-order-btns">
          <v-row>
            <v-col cols="4">
              <dl class="disable">
                <dt v-ripple>
                  <label>오늘<br>오전</label>
                  <span>
                    <v-icon>mdi-arrow-right</v-icon>
                  </span>
                </dt>
                <dd>
                  <label>08:00 ~ 12:00</label>
                  <span>예약마감</span>
                </dd>
              </dl>
            </v-col>
            <v-col cols="4">
              <dl class="enable">
                <dt v-ripple>
                  <label>오늘<br>오후</label>
                  <span>
                    <v-icon>mdi-arrow-right</v-icon>
                  </span>
                </dt>
                <dd>
                  <label>14:00 ~ 19:00</label>
                  <span>예약가능</span>
                </dd>
              </dl>
            </v-col>
            <v-col cols="4">
              <dl class="enable">
                <dt v-ripple>
                  <label>9일<br>오전</label>
                  <span>
                    <v-icon>mdi-arrow-right</v-icon>
                  </span>
                </dt>
                <dd>
                  <label>08:00 ~ 12:00</label>
                  <span>예약가능</span>
                </dd>
              </dl>
            </v-col>
          </v-row>
        </div>
      </div> -->

      <div class="promotion">
        <h3>프로모션</h3>
        <ul>
          <li>
            <img src="/img/event-01.png" />
          </li>
          <li>
            <img src="/img/event-02.png" />
          </li>
          <li>
            <img src="/img/event-03.png" />
          </li>
        </ul>
      </div>

    </div>

    

  </div>
</template>

<script>
import BookingNotice from '@/components/booking-notice'
import AddPayment from '@/components/add-payment'
import HomeHeader from '@/components/homeHeader'
import PlaceSelect from '@/components/modal/placeSelect'


export default {
  name: "Home",
  components: {
    BookingNotice, AddPayment, HomeHeader, PlaceSelect
  },
  data(){
    return{
      posts:null
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

.home{
  .inner{
    padding:0 26px;
  }
}

.mainTitle{
  h1{
    font-weight:500;
    span{
      color:#0CA0E2
    }
  }

  p{
    margin-top:10px;
    color:#888;
  }
}

.orderBtn{
  display:flex;
  margin:30px 0;
  justify-content: space-between;
  align-items: center;
  border-radius:100px;
  min-height:50px;
  padding:0 20px;
  width:100%;
  border:1px solid #e2e2e2;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05);

  label{
    font-size:14px;
    color:#292929;
    font-weight:bold;
  }
}

.divider{
  height:1px;
  background: #e2e2e2;
  margin:40px 0;
}

.quick-menu{
  .row{
    margin-top:0;
    margin-bottom:0;
  }
  .col{
    padding:0px;
    border-right:1px solid #e2e2e2;
  }
  .col:last-child{
    border-right:0px;
  }

  dl{
    dt{
      display:flex;
      justify-content: center;
      align-items: center;
      height:50px;

      img{
        transform: scale(0.3);
      }

    }
    dd{
      text-align:center;
      font-size:12px;
    }
  }
  dl:last-child{
    border-right:0px;
  }
}

.quick-order{
  .title{
    span{
      color:#F11064;
      display:block;
      margin-bottom:10px;
    }
    h2{
      font-size:20px;
      line-height:20px;
    }
    p{
      color:#888;
      margin-top:10px;
      font-size:14px;
    }
  }

  .quick-order-btns{
    margin-top:30px;

    dl{
      dt{
        position: relative;
        width:100%;
        height:60px;
        background: #fff;
        border:1px solid #e2e2e2;
        border-radius:10px;
        padding:10px;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.05);

        span{
          position: absolute;
          bottom:-5px;
          right:-5px;
          width:30px;
          height:30px;
          border-radius:15px;
          background:#e2e2e2;
          display:flex;
          justify-content: center;
          align-items: center;
          z-index:3;

          .v-icon{
            color:#fff;
          }
        }
      }
      dd{
        margin-top:20px;
        label{
          display:block;
          text-align: center;
          font-size:12px;
          color:#888;
        }
        span{
          margin-top:4px;
          text-align: center;
          display:block;
          font-size:14px;
        }
      }
    }

    dl.enable{
      dt{
        span{
          background:#0CA0E2
        }
      }
    }
    dl.disable{
      dt{
        color:#888;
      }
      dd{
        span{
          color:#d22828;
        }
      }
    }
  }
}

.promotion{
  h3{
    margin-bottom:15px;
  }
  ul{
    padding:0px;
  }
  li{
    display:flex;
    align-items: center;
    justify-content: center;
    height:140px;
    border-radius:5px;
    background:#e2e2e2;
    margin-bottom:20px;
    overflow:hidden;

    img{
      display:block;
      height:100%;
    }
  }
}

</style>