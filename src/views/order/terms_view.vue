<template>
  <div class="terms_view contents">
    <div class="page-title">
      <h2>세탁 및 수거배송에 관한<br>서비스동의</h2>
      <p>데일리세탁 예약서비스의 이용을 위하여<br>서비스 약관 동의가 필요합니다 </p>
    </div>

    <div 
      class="totalCheck" 
      :class="{active:total}"
      @click="totalCheck(total)"
    >
      <v-icon>{{
        total ? "mdi-check-circle" : "mdi-check-circle-outline"
      }}</v-icon>
      <span>모두 동의합니다</span>
    </div>

    <dl class="terms laundry">
      <dt @click="state.check1 = !state.check1" :class="{active:state.check1}">
        <v-icon>{{state.check1 ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}</v-icon>
        <label>(필수) 세탁에 관한 서비스 이용동의</label>
      </dt>
      <dd>
        <strong>
          <label>의류장식물</label>
        </strong>
        <span>
          세탁 진행 시 의류장식물(단추,패치,벨트 등)은 기계세탁 시 파손 될
          위험이 있으니, 의류장식품은 반드시 제거하시고 맡겨주셔야
          합니다.
        </span>
      </dd>
      <dd>
        <strong>
          <label>면,니트류</label>
        </strong>
        <span>
          (면)니트, 면류 세탁 시 세탁라벨 고지내용에 의한 세탁공정을
          준수합니다. 다만 의류의 특성상 약간의 수축, 늘어남, 보풀의 현상이
          있을 수 있음을 미리 고지드립니다.
        </span>
      </dd>
      <dd>
        <strong>
          <label>고급의류 및 특성소재</label>
        </strong>
        <span>
          고급의류 및 특성소재(캐시미어,앙고라,레이온,폴리 등)는 의류특성상
          세탁 후 질감변화,광택감소,원단의 섬세함으로 인한 오염잔존이 발생할
          수 있으며, 무리한 세탁 시 원단손상으로 이어집니다. (주름치마
          세탁시에는 기계세탁으로 이용되기에 주름펴짐 현상이 있을 수
          있습니다.)
        </span>
      </dd>
      <dd>
        <strong>
          <label>신발류</label>
        </strong>
       
        <span
          >모든 신발은 물세탁이 진행되며 수축,까짐,쭈글거림,변형,이염 등이
          발생할 수 있습니다. (스니커즈류, 오니츠카류 신발의 경우 원단의
          특수성으로 파손위험이 큰 항목이며 아래 유의사항을
          참고해주세요.)</span
        >
        <span
          >신발 세탁 시 앞코 떨어짐,뒤축 꺽임,까짐, 이염 등이 발생할 수
          있습니다.</span
        >
        <span
          >세무, 어그부추, 스웨이드 재질은 물빠짐,경화,이염 등의 현상이 발생할
          수 있습니다.</span
        >
        <span
          >컨버스화, 스니커즈화, 오니츠카 브랜드 운동화는 경화현상,
          뒤틀림현상, 이염등이 발생함을 인지해주세요.</span
        >
      </dd>
    </dl>

    <dl class="terms delivery">
      <dt @click="state.check2 = !state.check2" :class="{active:state.check2}">
        <v-icon>{{state.check2 ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}</v-icon>
        <label>(필수) 수거/배송에 관한 서비스 이용동의</label>
      </dt>

      <dd>
        <span
          >수거 배송 담당 기사님께서 방문 후 2회 이상 미 응답시, 수거 배송비를
          제외한 세탁비용만 부분환불 됩니다.</span
        >
        <span
          >고객님의 주문 품목과 검수 후 품목이 상이하여, 모든 품목이 세탁
          불가한 품목이면 수거, 배송비를 제외한 세탁비용만 부분환불
          됩니다.</span
        >
        <span
          >데일리세탁 이용약관에 따라 배송 후 2주 내에 세탁물에 대한 건의 사항
          및 재세탁 관련 문의 사항을 접수해야 합니다.</span
        >
        <span
          >예약한 품목 이외에 내놓은 전 품목이 세탁처리 되며, 이에 따라 추가
          비용이 발생합니다. (세탁불가로 인한 품목은 제외합니다.)</span
        >
        <span
          >1개의 주문 당 1회의 수거, 배송만 진행되므로 이외의 분할 배송은
          세탁소의 처리를 제외한 고객님의 요청으로 진행되지 않습니다.</span
        >
      </dd>
    </dl>
    <!-- list -->
    <div class="btns">
      <v-btn text @click="$router.push('product')">
        <label>다음으로</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state:{
        check1: false,
        check2: false,
      },
      total: false,
    };
  },
  watch:{
    state:{
      handler(state){
        if(state.check1 && state.check2){
          this.total = true;
        }else if(state.check1 === false || state.check2 === false){
          this.total = false;
        }
      },
      deep:true,
    },
  },
  
  methods:{
    totalCheck(value){
      this.total = !value;
      if(this.total){
        this.state.check1 = true;
        this.state.check2 = true;
      }else{
        this.state.check1 = false;
        this.state.check2 = false;
      }
      
    }
  },
};
</script>

<style lang="scss" scoped>
.terms_view {
  padding-bottom: 90px;

  .totalCheck {
    display:flex;
    align-items: center;
    border-top:1px solid #d2d2d2;
    border-bottom:1px solid #d2d2d2;
    height:70px;
    margin-bottom:20px;

    .v-icon{
      font-size:24px;
      color:#c2c2c2;
    }
    span{
      flex:1;
      font-size:18px;
      font-weight:bold;
      margin-left:6px;
    }
  }
  .totalCheck.active{
    .v-icon{
      color:#0ca0e2;
    }
  }

  .terms {
    margin-bottom:20px;

    dt{
      display:flex;
      align-items: center;
      height:60px;
      
      .v-icon{
        color:#c2c2c2;
        margin-right:6px;
      }
      label{
        font-size: 16px;
        font-weight: bold;
      }
    }

    dt.active{
      .v-icon{
        color:#0ca0e2;
      }
    }

    dd{
      margin-bottom:15px;
      background:#f8f8f8;
      padding:15px;
      border-radius:5px;
      strong{
        display:block;
        font-size:14px;
        font-weight:bold;
      }
      span{
        font-size:13px;
        display:block;
        margin-top:5px;
        color:#595959;
      }
    }

    .divider {
      height: 1px;
      background: #e2e2e2;
      margin: 20px 0;
    }


  }

  

  .btns {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    background: #0ca0e2;

    .v-btn {
      width: 100%;
      height: 50px;
      font-size: 14px;
      color: #fff;

      .v-icon {
        font-size: 18px;
        margin-left: 10px;
        color: #fff;
      }
    }
  }

  .terms.delivery{
    margin-bottom:0px;
  }
}
</style>
