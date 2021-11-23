<template>
  <div class="home">
    <PlaceSelect ref="placeSelect"/>

    <div class="safe_area_top" />

    <HomeHeader />

    <div class="alert_message" v-ripple @click="$router.push('AddDetail')">
      <div class="left">
        <strong><v-icon class="mr-1" size="18px">mdi-alert</v-icon>주문 변동사항이 있습니다</strong>
        <span>변동사항에 따라 추가금이 발생할 수 있습니다<br>내용을 확인해주세요</span>
      </div>
      <v-icon>mdi-arrow-right-circle</v-icon>
    </div>

    <div class="inner">
      <div class="mainTitle">
        <h1>쉽고 간편하게<br><span>세탁을 시작해보세요</span></h1>
        <p>집앞으로 픽업하고 배송까지!</p>
      </div>
    </div>

      <div class="res_btns">
        <div class="btn" v-ripple @click="$router.push('shopSearch')">
          <div class="image">
            <img src="@/assets/img/main_btn01.png">
          </div>
          <dl>
            <dt>
              <span>셀프빨래방 대행</span>
              <v-icon>mdi-arrow-right-circle</v-icon>
            </dt>
            <dd>간단한 물세탁 및 이불<br>세탁/건조</dd>
          </dl>
        </div>
        <div class="btn" v-ripple @click="$router.push('shopSearch')">
          <div class="image">
            <img src="@/assets/img/main_btn02.png">
          </div>
          <dl>
            <dt>
              <span>세탁소 대행</span>
              <v-icon>mdi-arrow-right-circle</v-icon>
            </dt>
            <dd>명품세탁 및 고급세탁<br>드라이클리닝</dd>
          </dl>
        </div>
      </div>

      <div class="inner">

        <div class="info_btn" v-ripple>
          <dl>
            <dt>이용방법 안내</dt>
            <dd>데일리세탁 서비스 이용방법을 확인해주세요</dd>
          </dl>
          <v-icon>
            mdi-arrow-right-circle
          </v-icon>
        </div>
 
        <div class="divider" />

        <div class="promotion">
          <h3>프로모션</h3>
          <ul>
            <li @click="$router.push('eventView')">
              <img src="/img/event01_banner.png" />
            </li>
            <li>
              <img src="/img/event02_banner.png" />
            </li>
          </ul>
        </div>

        <div class="divider" />

        <div class="notice">
          <h3>공지사항</h3>
          <ul>
            <li v-for="item in 3" :key="item" v-ripple>
              <span>09.14</span>
              <strong>오픈 준비중 안내</strong>
            </li>
          </ul>
        </div>

        <div class="divider" />
      </div> <!-- inner -->

      <div class="terms">
        <div class="btn" v-ripple @click="$router.push('terms')">
          <span>서비스<br>이용약관</span>
          <v-icon>mdi-arrow-right-circle</v-icon>
        </div>
        <div class="btn" v-ripple @click="$router.push('terms')">
          <span>운영 및<br>보상정책</span>
          <v-icon>mdi-arrow-right-circle</v-icon>
        </div>
        <div class="btn" v-ripple @click="$router.push('terms')">
          <span>개인정보<br>취급방침</span>
          <v-icon>mdi-arrow-right-circle</v-icon>
        </div>
      </div>

      <div class="company">
        <div class="inner">
          <ul>
            <li>(주)페이오티</li>
            <li>사업자등록번호: 599-81-00659</li>
            <li>부산광역시 강서구 대저1동 2304-3</li>
            <li>070-4709-1003</li>
          </ul>
        </div>
      </div>

      <MainPopup />

  </div>
</template>

<script>

import HomeHeader from '@/components/homeHeader'
import MainPopup from '@/components/modal/mainPopup'

export default {
  name: "Home",
  components: {
    HomeHeader, MainPopup
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
  position: relative;
  padding-bottom:40px;
  

  ul{
    padding:0;
    margin:0;
  }

  .inner{
    padding:0 20px;
  }

  .alert_message{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:30px;
    background: #FBEFF4;
    padding:20px;

    .left{
      strong{
        display:block;
        font-size:18px;
        font-weight:bold;
        .v-icon{
          font-size:18px;
          color:#d22828;
        }
      }
      span{
        display:block;
        font-size:12px;
        line-height:1.4;
        color:#898989;
        margin-top:5px;
      }
    }

    .v-icon{
      color:#292929;
      font-size:18px;
      color:#aaa;
    }
  }

  .mainTitle{
    margin-top:20px;
    h1{
      font-weight:500;
      line-height:1.2;
      span{
        color:#0CA0E2
      }
    }
    p{
      font-size:16px;
      margin:0px;
      margin-top:5px;
      color:#888;
    }
  }

  .res_btns{
    display:flex;
    align-items: center;
    padding:30px 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
    
    
    .btn{
      min-width:60%;
      border:1px solid #e2e2e2;
      border-radius:15px;
      padding:15px;
      margin-right:20px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
   
      .image{
        height:100px;
        background:#f2f2f2;
        margin-bottom:30px;
        img{
          display:block;
          width:100%;
        }
      }

      dl{
        
        dt{
          display:Flex;
          align-items: center;
          span{
            font-size:18px;
          }
          .v-icon{
            font-size:18px;
            margin-left:10px;
            color:#0CA0E2;
          }
        }
        dd{
          font-size:13px;
          line-height:1.3;
          color:#797979;
          margin-top:5px;
        }
      }
    }
  }

  .res_btns::-webkit-scrollbar{
    display:none;
  }
  .res_btns::after{
    content:' ';
    display:block;
    min-width:20px;
    width:20px;
    height:20px;
    background:#fff;

  }

  .info_btn{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background:#F1F3F5;
    border-radius:10px;
    padding:15px;
    margin-top:10px;
    height:80px;

    dl{
      dt{
        font-size:18px;
      }
      dd{
        font-size:12px;
        line-height:1.3;
        color:#797979;
      }
    }

    .v-icon{
      font-size:18px;
    }
  }


  .divider{
    height:1px;
    background: #e2e2e2;
    margin:40px 0;
  }

 
  .promotion{
    h3{
      font-size:18px;
      margin-bottom:15px;
    }
    ul{
      padding:0px;
    }
    li{
      position: relative;
      display:flex;
      align-items: center;
      justify-content: center;

      height:100%;
      border-radius:10px;
      background:#e2e2e2;
      margin-bottom:20px;
      overflow:hidden;

      img{
        position: absolute;
        top:0px;
        width:100%;
        display:block;

      }
    }

    li:after{
      content:'';
      display:block;
      padding-bottom:43.75% /* 320*140 */
    }
  }

  .notice{
    h3{
      font-size:18px;
      margin-bottom:15px;
    }

    ul{
      padding:0px;
      li{
        display:Flex;
        align-items: center;
        padding:0 15px;
        background:#F1F3F5;
        border-radius:5px;
        height:40px;
        margin-bottom:8px;

        span{
          width:50px;
          color:#888;
        }
        strong{
          flex:1;
        }
      }
    }
  }

  .terms{
    display:flex;
    align-items: center;
    overflow-x:scroll;
    scroll-behavior: smooth;
    padding-left:20px;

    .btn{
      display:Flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      min-width:130px;
      height:70px;
      border:1px solid #e2e2e2;
      border-radius:5px;
      margin-right:10px;
      padding:10px;

      span{
        width:100%;
        font-size:12px;
        line-height:1.2;
        text-align:left;
      }
      .v-icon{
        font-size:18px;
      }
    }
  }

  .terms::-webkit-scrollbar{
    display:none;
  }

  .terms::after{
    content:' ';
    display:block;
    min-width:20px;
    height:20px;
  }

  .company{
    margin-top:30px;
    
    ul{
      padding:15px;
      background:#f8f8f8;
      border-radius:5px;

      li:first-child{
        font-size:14px;
        margin-bottom:10px;
        color:#292929;
      }
      li{
        font-size:12px;
        margin-bottom:5px;
        color:#888;
      }
    }

  }
}
</style>