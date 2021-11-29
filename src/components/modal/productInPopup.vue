<template>
  <v-dialog
    v-model="visible"
    scrollable

  >
    <div class="productInPopup">
      <div class="top">
        <h4>명품 선택시 주의사항</h4>
        <p>명품 및 준명품, 스트릿(편집샵) 브랜드의 기준표를 보시고 아래의 품목에 해당될 시 명품으로 분류해주셔야 합니다.
<b>명품류로 선택하지 않을 시 그 이후에 대한 책임은 지지 않습니다.</b></p>
      </div>
      <div class="divider">

      </div>
      <div class="list">      
        <v-row>
          <v-col cols="4" v-for="(item,index) in primeumLabel" :key="index">
            <dl>
              <dt>
                <img :src="'/img/brand/' + (index+1) +'.png'">
              </dt>
              <dd>
                {{item}}
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>

      <div class="bottom">
        <v-btn text @click="visible = false">닫기</v-btn>
      </div>

    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      primeumLabel:[
        '구찌','디올','프라다','몽클레어','버버리','톰브라운','지방시','미우미우','셀린느','질샌더','발망','캐나다구스','겐조','노비스','울리치','미스터앤미세스퍼','에르마노설비노','아크리스','란스미어','톰포드','폴로 퍼플라벨','스톤아일랜드','꼼데가르송','베트멍','오프화이트','비비안웨스트우드','아미','메종키츠네','막스마라','무스너클','파라점퍼스','메종마르지엘라','이자벨마랑',
      ],
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.productInPopup{
  display:Flex;
  flex-direction: column;
  position: relative;
  background:#fff;
  overflow-y:auto;


  .top{
    position: sticky;
    top:0px;
    align-items: center;
    padding:20px;
    background:#fff;

    h4{
      font-size:18px;
      font-weight:bold;
    }

    p{
      color:#595959;
      margin:0px;
      margin-top:5px;

      b{
        color:#d22828;
      }
    }
  }
  .divider{
    height:10px;
    background:#f8f8f8;
    margin-bottom:20px;
  }
  .list{
    flex:1;
    padding:0 20px;
    padding-bottom:60px;

    dl{
      dt{
        display:flex;
        align-items: center;
        justify-content: center;
        height:100%;
        background:#f8f8f8;
        border-radius:10px;

        img{
          width:100%;
        }
      }
      dt:after{
        content:'';
        display:block;
        padding-bottom:100%;
      }
      dd{
        text-align:center;
        font-size:11px;
        margin-top:10px;
      }
    }
  }

  .bottom{
    display:flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    bottom:0px;
    width:100%;
    background:#fff;
    padding:15px;

    .v-btn{
      width:50%;
      height:44px;
      font-size:14px;
      background:#292929;
      color:#fff;
      border-radius:22px;
    }
  }
}
</style>