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
        
        <dl class="btn" v-ripple @click="$router.push('shopSearch')">
          <dt class="image">
            <img src="@/assets/img/dry.png">
          </dt>
          <dd>
            <div class="text">
              <strong>드라이&물세탁</strong>
              <span>명품 및 일반의류 세탁소 수거배송대행 서비스</span>
            </div>
            <v-icon>
              mdi-arrow-right-circle
            </v-icon>
          </dd>
        </dl>

        <dl class="btn" v-ripple @click="$router.push('shopSearch')">
          <dt class="image">
            <img src="@/assets/img/self.png">
          </dt>
          <dd>
            <div class="text">
              <strong>침구류 물세탁</strong>
              <span>침구류 코인세탁소 수거배송대행 서비스</span>
            </div>
            <v-icon>
              mdi-arrow-right-circle
            </v-icon>
          </dd>
        </dl>
      </div>

      <div class="inner">

        <div class="info_btn" v-ripple @click="$refs.alert.handle(true)">
          <dl>
            <dt>데일리세탁 이용안내</dt>
            <dd>데일리세탁 서비스의 작업흐름을 확인해보세요</dd>
          </dl>
        </div>

        <div class="info_btn" v-ripple @click="$refs.alert.handle(true)">
          <dl>
            <dt>세탁물을 내놓는 방법</dt>
            <dd>주문 후 세탁물을 내놓는 방법을 안내해드립니다.</dd>
          </dl>
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

  .mainTitle{
    margin-top:40px;
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
      display:flex;
      flex-direction: column;
      min-width:210px;
      min-height:250px;
      border:1px solid #292929;
      overflow:hidden;
      border-radius:15px;
      margin-right:20px;
      box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
   

      dt.image{
        position: relative;
        overflow:hidden;
        height:130px;
        background:#f2f2f2;
        border-bottom:1px solid #aaa;
        img{
          position: absolute;
          top:0px;
          display:block;
          height:100%;
        }
      }

      dt.image:after{
        content:'';
        display:block;
        padding-bottom:65%;  
      }

      dd{
        fleX:1;
        display:flex;
        padding:15px;
        .text{
          fleX:1;
          strong{
            display:block;
            font-size:16px;
            font-weight:bold;
          }
          span{
            display:block;
            font-size:13px;
            color:#898989;
            margin-top:3px;
          }
        }

        .v-icon{
          align-self: flex-end;
          color:#292929;
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
    align-items: center;
    background:#F1F3F5;
    border-radius:10px;
    padding:15px;
    margin-top:10px;
    height:80px;

    &:nth-child(even){
      background:#F6F1F1;
    }

    dl{
      dt{
        font-size:16px;
      }
      dd{
        font-size:12px;
        line-height:1.3;
        margin-top:2px;
        color:#797979;
      }
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