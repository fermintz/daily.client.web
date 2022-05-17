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
        <div class="mainVisual">
          <div class="visual">
            <v-carousel
              height="auto"
              hide-delimiters
              :show-arrows="false"
              style="z-index:1;"
              @change="e => visualChange(e)"
            >
              <v-carousel-item v-for="item in mainVisual" :key="item">
                <div class="visual-title">
                  <h1>{{item.title}}</h1>
                  <p>{{item.subText}}</p>
                </div>
                <div class="visual-img">
                  <img :src="item.src">
                </div>
              </v-carousel-item>
            </v-carousel>

            
            <div class="visual-bg" />
            
          </div>

          <div class="delimiter">
              <span 
                v-for="(delimiter, index) in mainVisual" :key="index"
                :class="{active:index === visualIndex}"
              >
              </span>
            </div>

          <v-btn 
            text
            rounded
            @click="$router.push('shopSearch')" 
          >세탁 예약하기
          </v-btn>
        </div>

  
        <div class="infomation">
          <dl @click="$router.push('dailyPrice')">
            <dt>데일리세탁<br>가격안내</dt>
            <dd>
              <v-icon>mdi-arrow-right-circle</v-icon>
            </dd>
          </dl>
          <dl @click="$refs.alert.handle(true)">
            <dt>세탁물<br>내놓는 방법</dt>
            <dd><v-icon>mdi-arrow-right-circle</v-icon></dd>
          </dl>
          <dl @click="$router.push('qna')">
            <dt>자주묻는<br>질문들(QnA)</dt>
            <dd><v-icon>mdi-arrow-right-circle</v-icon></dd>
          </dl>
        </div>


        <div class="promotion">
          <h3>이벤트</h3>
          <ul>
            <li>
              <img src="/img/event03_banner.png" />
            </li>
            <li @click="$router.push('eventView')">
              <img src="/img/event01_banner.png" />
            </li>
            <li>
              <img src="/img/event02_banner.png" />
            </li>
          </ul>
        </div>

        <div class="divider" />

        <div class="customer" v-ripple>
          <div class="text">
            <strong>궁금한점이<br>있으신가요??</strong>
            <span>
              <v-icon>mdi-chat</v-icon>
              카카오톡 문의하기
            </span>
          </div>
          <div class="image">
            <img src="/img/customer.png">
          </div>
        </div>

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
      <AlertMessage ref="alert" />
      <DragBottomSheet/>
      <AddressSelector />

  </div>
</template>

<script>

import HomeHeader from '@/components/homeHeader'
import MainPopup from '@/components/modal/mainPopup'
import AlertMessage from '@/components/modal/alertMessage'
import DragBottomSheet from '@/components/modal/dragBottomSheet'
import AddressSelector from '@/components/modal/addressSelector'

export default {
  name: "Home",
  components: {
    HomeHeader, MainPopup,AlertMessage,DragBottomSheet, AddressSelector
  },
  data(){
    return{
      posts:null,
      visualIndex:0,
      mainVisual:[
        {
          title:'쉽고 간편하게 세탁을 시작해보세요',
          subText:'집에서 픽업하고 배송까지',
          src:'img/main_visual01.png'
        },
        {
          title:'쉽고 간편하게 세탁을 시작해보세요',
          subText:'집에서 픽업하고 배송까지',
          src:'img/main_visual01.png'
        }
      ],
    }
  },
  methods:{
    requst(type, value){
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
    visualChange(e){
      this.visualIndex = e
    }
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
    display:none;
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

  .mainVisual{
    position: relative;
    margin-top:5px;

    .visual{
      position: relative;
      margin-bottom:20px;

        .visual-title{
          position: relative;
          margin-bottom:10px;
          z-index:2;

          h1{
          font-weight:normal;
          font-size:20px;
          line-height:1.3;

          }
          p{
            font-size:14px;
            margin:0px;
            color:#888;
          }
        }
    

        .visual-img{
          display:flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;

          z-index:10;

          img{
            display:block;
            width:100%;
          }

          &:after{
            content:'';
            display:block;
            padding-bottom:46.875%; //640x300
          }
        }
    }

    .delimiter{
      position: absolute;
      top:5px;                                                                                                                                                                                                                                                                
      right:0px;
      z-index:2;
      span{
        display:block;
        margin-bottom:5px;
        width:6px;
        height:6px;
        border-radius:3px;
        background:#d2d2d2;

        transition: height 0.3s;

        &.active{
          height:12px;
          background:#0CA0E2
        }
      }
    }

    .v-btn{
      width:100%;
      height:50px;
      font-size:16px;
      font-weight:bold;
      border:2px solid #292929;
    }
  }

  .infomation{
    display:flex;
    margin-top:30px;
    dl{
      display:flex;
      align-items: center;
      justify-content: space-between;
      flex:1;
      border-right:1px solid #e2e2e2;
      margin-right:12px;
      padding-right:12px;

      &:last-child{
        border-right:0;
        margin-right:0;
        padding-right:0px;
      }

      dt{
        font-size:13px;
        color:#292929;
        line-height: 1.3;
      }
      dd{
        align-self: flex-end;
        .v-icon{
          font-size:16px;
          color:#292929;
        }
      }
    }
  }

  .divider{
    height:1px;
    background: #e2e2e2;
    margin:40px 0;
  }

 
  .promotion{
    margin-top:30px;
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
      padding-bottom:40.625% /* 320*130 */
    }
  }

  .customer{
    display:flex;
    align-items: center;
    background:#F6F3E7;
    border-radius:10px;
    margin-bottom:50px;
    
    .text{
      flex:1;
      padding:20px;
      strong{
        display:block;
        font-size:18px;
        margin-bottom:20px;
        font-weight:bold;
        line-height:1.4;
      }
      span{
        display:flex;
        align-items: center;
        .v-icon{
          width:24px;
          height:24px;
          background:#FFC400;
          border-radius:12px;
          font-size:16px;
          margin-right:5px;
        }
      }
    }

    .image{
      width:150px;
      text-align:right;

      img{
        display:block;
        width:100%;
      }
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