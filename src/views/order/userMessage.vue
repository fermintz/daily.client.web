<template>
  <div class="userMessage contents">
    <div class="page-title">
      <h2>세탁 요청사항이 있으신가요?</h2>
      <p>요청사항을 입력해주세요</p>
    </div>

    <div class="divider" />

    <dl class="partner">
      <dt>세탁에 관한 요청사항</dt>
      <dd>
        <ul class="check-list">
          <li v-for="(item, index) in message" :key="index" 
            @click="selectMessage(index)"
            v-ripple
          >
            <v-icon :class="{active:item.active}">mdi-check-circle-outline</v-icon>
            <label>{{item.text}}</label>
          </li>
        </ul>
        <textarea
          placeholder="상세한 요청사항을 입력해주세요"
        />
         
      </dd>
    </dl>
    

    <div class="divider" />

    <dl class="rider">
      <dt>수거/배송 기사님께</dt>
      <dd>
        <ul class="check-list">
          <li v-for="(item, index) in message2" :key="index" 
            @click="selectMessage(index)"
            v-ripple
          >
            <v-icon :class="{active:item.active}">mdi-check-circle-outline</v-icon>
            <label>{{item.text}}</label>
          </li>
        </ul>
        <textarea
          placeholder="수거/배달시 요청사항을 입력해주세요"
        />
      </dd>
    </dl>

    <div class="divider"></div>

    <div class="guide">
      <h4>유의사항</h4>
      <ul>
        <li><span><b>토사물이 묻은 세탁물은 세탁거절</b> 항목에 해당됩니다.</span></li>
        <li><span>파손이 염려되는 세탁물의 경우 세탁 전 미리 사진을 찍어주셔서 세탁담당자 요청에 따라 제공해주시면 더욱 세세한 관리가 이루어집니다.</span></li>
        <li><span>보풀제거요청은 추가비용이 발생 할 수 있습니다.</span></li>
        <li><span>모든 추가요청사항은 추가비용이 동반 될 수 있습니다.</span></li>
      </ul>
    </div>

    <div class="btns">
      <v-btn text @click="$router.push('orderDetail')">
        <label>다음으로</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>

    <UserRequestGuide ref="userRequestGuide"/>
  </div>
</template>

<script>
import UserRequestGuide from '@/components/modal/userRequestGuide'

export default {
  components:{UserRequestGuide},
  data(){
    return{
      message:[
        {
          active:false,
          text:'특수 오염 제거요청 (혈액/음식물/기타 등)'
        },
        {
          active:false,
          text:'수선 요청 (밑단줄임,튿어짐,지퍼,단추수선 등)'
        },
        {
          active:false,
          text:'명품류 주의 요청 (단추/와펜/등)'
        },
        {
          active:false,
          text:'흰색 의류 전처리 요청 (불림/표백작업, 추가금액발생)'
        },
      ],

      message2:[
        {
          active:false,
          text:'수거시 사용한 가방은 돌려주세요'
        },
      ],
    }
  },
  methods:{
    selectMessage(index){
      const messageBase = this.message
      messageBase[index].active = !this.message[index].active;
      if(messageBase[index].active){
        this.$refs.userRequestGuide.handle(true)
      }
      return messageBase 
    },
  },
}
</script>

<style lang="scss" scoped>
.userMessage {
  padding-bottom:120px;
  
  .page-title {
    p {
      margin-top: 5px;
      color: #888;
    }
  }
  textarea{
    resize: none;
    height:90px;
    border:1px solid #d2d2d2;
    padding:5px;
    width:100%;
    border-radius:4px;
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  dl{
    dt{
      margin-bottom:15px;
      font-size:16px;
      font-weight:bold;
    }
  }

  .check-list{
    margin-bottom:20px;
    padding:0px;

    li{
      display:Flex;
      align-items: flex-start;
      background:#f8f8f8;
      border-radius:4px;
      margin-bottom:10px;
      padding:10px;

      &:last-child{
        margin-bottom:0;
      }
      
      label{
        flex:1;
      }
     
      .v-icon{
        font-size:20px;
        margin-right:10px;
        color:#aaa;
        &.active{
          color:#0CA0E2;
        }
      }
    }
    
  }

  .btns{
    position: fixed;
    padding:10px;
    left:0px;
    bottom:0px;
    width:100%;
   
    
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

  .guide{
    margin-top:20px;
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