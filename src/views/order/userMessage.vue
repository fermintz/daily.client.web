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
          >
            <v-icon :class="{active:item.active}">mdi-check-circle-outline</v-icon>
            <label>{{item.text}}</label>
          </li>
        </ul>
        <v-textarea
          outlined
          dense
          counter
          clearable
          placeholder="상세한 요청사항을 입력해주세요"
          class="text-field"
          height="70"
        />
      </dd>
    </dl>

    <div class="divider" />

    <dl class="rider">
      <dt>수거/배송 기사님께</dt>
      <dd>
        <v-textarea
          outlined
          dense
          counter
          clearable
          placeholder="수거/배달시 요청사항을 입력해주세요"
          class="text-field"
          height="70"
        />
      </dd>
    </dl>

    <div class="btns">
      <v-btn text>
        <label>완료하기</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:[
        {
          active:false,
          text:'오염 제거요청(혈액/음식물/토사물/기타 등)'
        },
        {
          active:false,
          text:'수선요청'
        },
        {
          active:false,
          text:'이염방지를 위한 별도세탁 요청'
        },
        {
          active:false,
          text:'가죽/스웨이드 등 특수세탁 요청'
        },
        {
          active:false,
          text:'명품 주의요청'
        }
      ],
    }
  },
  methods:{
    selectMessage(index){
      const messageBase = this.message
      messageBase[index].active = !this.message[index].active;
      return messageBase 
    }
  },
}
</script>

<style lang="scss" scoped>
.userMessage {
  padding-bottom:70px;
  .page-title {
    p {
      margin-top: 5px;
      color: #888;
    }
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
    li{
      display:Flex;
      align-items: center;
      margin-bottom:10px;
      label{
        flex:1;
      }
      .v-icon{
        font-size:24px;
        margin-right:10px;
        color:#aaa;
      }
      .v-icon.active{
        color:#0CA0E2;
      }
    }
    li:last-child{
      margin-bottom:0px;
    }
  }

  .btns{
    position: fixed;
    left:0px;
    bottom:0px;
    width:100%;
    border-top:1px solid #c2c2c2;
    
    .v-btn{
      width:100%;
      height:50px;
      background:#fff;
      font-size:14px;

      .v-icon{
        font-size:18px;
        margin-left:10px;
        color:#0CA0E2
      }
    }
    
  }
  


}
</style>