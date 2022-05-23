<template>
  <div class="terms_view contents">
    <div class="page-title">
      <h2>세탁 및 수거배송에 관한<br>서비스동의</h2>
      <p>데일리세탁 예약서비스의 이용을 위하여<br>서비스 약관 동의가 필요합니다 </p>
    </div>

    <dl class="terms self">
      <dt @click="state.check2 = !state.check2" :class="{active:state.check2}">
        <v-icon>{{state.check2 ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}</v-icon>
        <label>(필수) 이불빨래 주문접수 시 주의사항</label>
      </dt>

      <dd class="image_area">
        <img src="@/assets/img/terms01.png" />
      </dd>
      <dd>
        <strong>이불류</strong>
        <span>코인세탁소 대행 서비스의 전 품목은 물빨래 및 건조 대행 서비스입니다.</span>
        <span>커튼 및 이불류는 건조 과정 중 재질에 따라 약간의 줄어듦이 있을 수 있습니다. (이완 및 수축률 3-5%)</span>
        <span>전 품목 세탁-건조의 과정으로 이루어지며 원형 복원 작업 및 수선 작업은 별도로 진행되지 않는 점 유의해주시기 바랍니다.(파손이 미리 발견 된 경우에는 세탁이 거절 될 수 있습니다.)</span>
        <span>시간이 경과 되거나 오염과 이염(혈흔/땀/기타오염)이 심한 경우에는 세탁이 아닌 복원의 작업이 필요하며, 해당 셀프빨래방 대행 서비스에서는 진행이 되지 않는 점 유의해주시기 바랍니다.</span>
        <span>오염제거 요청 시 해당부위에 세탁용액을 첨가하여 세탁이 진행되기 때문에 재질의 탈색 혹은 변색의 염려가 있는 경우 오염제거가 불가능 할 수 있습니다.</span>
        <span>
          종류에 따라 틀어짐, 줄어듬을 최소화 하기 위해 자연건조와 기계건조를 동시에 진행하고 있으며 세탁 시 무향의 섬유유연제가 기본 첨가되고 있습니다.
        </span>
        <span>커튼 및 물빨래 품목 중 고리나 장신구 등 추가된 부속품이 있는 경우에는 반드시 제거 후 내놓으셔야 합니다.</span>
        <span>모든 솜은 세탁 시 뭉침현상이 발생함을 사전안내드립니다.</span>
        <p>상기내용에 대한 동의 후 세탁을 진행함으로써 관련 문제 발생 시 보상이 어려움을 사전 고지사항으로 안내드립니다.</p>
      </dd>
    </dl>

    <dl class="terms laundry">
      <dt @click="state.check1 = !state.check1" :class="{active:state.check1}">
        <v-icon>{{state.check1 ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}</v-icon>
        <label>(필수) 세탁에 관한 서비스 이용동의</label>
      </dt>

      <dd class="image_area">
        <img src="@/assets/img/terms02.png" />
      </dd>

      <dd>
        <strong>
          <label>의류(공통)</label>
        </strong>
        <span>
          정상적인 세탁과정을 진행하여도 지워지지 않는 오염이 있음을 사전고지 드립니다.
        </span>
        <span>세탁 진행 시 의류장식물(단추,패치,벨트 등)은 기계세탁 시 파손 될 위험이 있으니, 의류장식품은 반드시 제거하시고 맡겨주셔야 합니다.</span>
        <span>배색이염, 레자장식,단추,장식,로고 훼손 시 보상되지 않으니 훼손이 우려되는 장식류는 탈거 후 세탁요청을 드립니다.</span>
        <span>솜이 포함 된 의류는 세탁 후 솜 뭉침이 발생할 수 있습니다.</span>
        <span>명품 카테고리로 접수하지 않으신 경우 보상이 어려우니 사고 시 보상을 위해 준명품류, 스트릿브랜드도 명품으로 주문접수를 부탁드립니다.(예시:무스너클, 스톤아일랜드, 오프화이트 등에 준하는 고급브랜드)</span>
        <span>의류는 세탁라벨 고지내용에 의한 세탁공정을 준수하며 세탁이후 지워지지 않는 오염이 발생할 수 있으며 이에 대해 고객은 재세탁 요청을 할 수 있습니다. 다만 추가적으로 세탁을 진행했음에도 오염이 지워지지 않는 경우에는 세탁업체 판단하에 세탁을 종료하며 세탁물배송을 진행합니다.</span>
        <p>상기내용에 대한 동의 후 세탁을 진행함으로써 관련 문제 발생 시 보상이 어려움을 사전 고지사항으로 안내드립니다.</p>
      </dd>
      <dd>
        <strong>
          <label>면,니트류</label>
        </strong>
        <span>
          (면)니트, 면류 세탁 시 세탁라벨 고지내용에 의한 세탁공정을 준수합니다. 다만 의류의 특성상 약간의 수축, 늘어남, 보풀의 현상이 있을 수 있음을 미리 고지드립니다.
        </span>
        <span>
          팔꿈치의 천연가죽, 인조가죽 패치가 있는 경우 세탁 시 파손이 될 수 있습니다.
        </span>
        <span>
          소재의 특성상 발생하는 수축/늘어남/보풀의 현상이 있을 수 있습니다.
        </span>
        <p>상기내용에 대한 동의 후 세탁을 진행함으로써 관련 문제 발생 시 보상이 어려움을 사전 고지사항으로 안내드립니다.</p>
      </dd>
      <dd>
        <strong>
          <label>고급의류 및 특성소재</label>
        </strong>
        <span>
          고급의류 및 특성소재(캐시미어,앙고라,레이온,폴리 등)는 의류특성상 세탁 후 질감변화,광택감소,원단의 섬세함으로 인한 오염잔존이 발생할 수 있으며, 무리한 세탁 시 원단손상으로 이어집니다. (주름치마 세탁 시에는 기계세탁으로 이용되기에 주름펴짐 현상이 있을 수 있습니다.)
        </span>
        <span>
          흰색 혹은 밝은색 패딩류는 얼룩이 발생하고 24시간 이후 경과 시 오염이 고착되어 완벽하게 지워지지 않아 오염잔존가능성이 매우 빈번합니다.
        </span>
        <span>폴리소재를 포함하고 있는 골프웨어 혹은 트레이닝복의 경우 특수소재로써 이염/수축/늘어남 현상이 빈번하게 생기며 이에따라 오염을 지우기에 어려움이 있으며 재질손상의 우려가 큽니다.</span>
        <p>상기내용에 대한 동의 후 세탁을 진행함으로써 관련 문제 발생 시 보상이 어려움을 사전 고지사항으로 안내드립니다.</p>
      </dd>

      <dd class="image_area">
        <img src="@/assets/img/terms03.png" />
      </dd>
      <dd>
        <strong>
          <label>신발류(구두포함)</label>
        </strong>
       
        <span>맡겨주신 신발류는 물세탁이 진행되며, 물세탁 진행 시 파손이 발생할 수 있는 운동화류는 아래 항목들에 대해 동의 후 주문접수를 요청드리며, 물세탁 시 파손 가능성이 있는 신발류는 주문접수를 취소해주시기 바랍니다.</span>
        <span>모든 신발류는 세탁 시 수축,까짐,쭈글거림,변형,이염 등이 발생할 수 있습니다. (스니커즈류, 오니츠카류 신발의 경우 원단의 특수성으로 파손위험이 큰 항목이며 아래 유의사항을 참고해주세요.)</span>
        <span>신발 세탁 시 앞코 떨어짐,뒤축 꺽임,까짐, 이염 등이 발생할 수 있습니다.</span>
        <span>세무,가죽,스웨이드 재질이 같이 포함되어있거나 두가지 색상으로 혼합 된 신발류는 물빠짐 혹은 이염이 있을 수 있으며 추가적인 부착물(반짝이,레자 등)은 떨어짐 현상이 동반될 수 있습니다.</span>
        <span>세무, 어그부추, 스웨이드 재질은 물빠짐,경화,이염 등의 현상이 발생할 수 있습니다.</span>
        <span>컨버스화, 스니커즈화, 오니츠카 브랜드 운동화는 경화현상, 뒤틀림현상, 이염등이 발생하며, 특히 흰색의 경우 본드 접착부에 의해 황변현상이 있을 수 있습니다.</span>
        <span>운동화 끈과 깔창은 소모품으로 파손 될 수 있습니다.(특이품은 따로 보관 후 세탁의뢰를 부탁드립니다.)</span>
        <span>신발의 밑창부위는 세탁부위가 아니며 오염정도에 따른 추가세탁을 진행하지 않습니다.</span>
        <span>신발의 옆면(고무, 스펀지 등 특수재질) 재질의 특성상 고무 스크레치, 오염 등은 제거가 되지 않을 수 있습니다.</span>
        <p>운동화류는 상기내용에 대한 동의 후 세탁을 진행함으로써 관련 문제 발생 시 보상이 어려움을 사전 고지사항으로 안내드립니다.</p>
      </dd>
    </dl>

    <dl class="terms delivery">
      <dt @click="state.check2 = !state.check2" :class="{active:state.check2}">
        <v-icon>{{state.check2 ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}</v-icon>
        <label>(필수) 수거/배송 관련 주의사항</label>
      </dt>
      <dd class="image_area">
        <img src="@/assets/img/terms04.png" />
      </dd>
      <dd>
        <span>수거 배송 담당 기사님께서 방문 후 2회 이상 미 응답 시, 수거배송비(3,500원)를 제외한 세탁비용만 부분환불 됩니다.</span>
        <span>고객님의 주문 품목과 검수 후 품목이 상이하여, 모든 품목이 세탁 불가한 품목이면  수거배송비를 제외한 세탁비용만 부분환불 됩니다.</span>
        <span>데일리세탁 이용약관에 따라 배송 후 2주 내에 세탁물에 대한 건의 사항 및 재세탁 관련 문의 사항을 접수해야 합니다.</span>
        <span>예약한 품목 이외에 내놓은 전 품목이 세탁처리 되며, 이에 따라 추가 비용이 발생합니다. (세탁불가로 인한 품목은 제외합니다.)</span>
        <span>1개의 주문 당 1회의 수거, 배송만 진행되므로 이외의 분할 배송은 세탁소의 처리를 제외한 고객님의 요청으로 진행되지 않습니다.</span>
        <p>데일리세탁에서 진행하는 모든 세탁물은 위 사전공지 안내를 진행하며, 이후 동의하여 세탁을 요청한 경우에 대해서는 손해배상에 대해 면책됩니다.</p>
      </dd>
    </dl>

    <dl class="terms delivery">
      <dt @click="state.check2 = !state.check2" :class="{active:state.check2}">
        <v-icon>{{state.check2 ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}</v-icon>
        <label>(필수) 세탁물 직접 선택하기 주의사항</label>
      </dt>
      <!-- <dd class="image_area">
        <img src="@/assets/img/terms04.png" />
      </dd> -->
      <dd>
        <span>품목이 상이하거나, 수선, 오점제거 등의 사유로 추가결제가 발생할 수 있습니다.</span>
        <p>데일리세탁에서 진행하는 모든 세탁물은 위 사전공지 안내를 진행하며, 이후 동의하여 세탁을 요청한 경우에 대해서는 손해배상에 대해 면책됩니다.</p>
      </dd>
    </dl>
    
    <dl class="terms delivery">
      <dt @click="state.check2 = !state.check2" :class="{active:state.check2}">
        <v-icon>{{state.check2 ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}</v-icon>
        <label>(필수) 수거신청 후 결제하기 주의사항</label>
      </dt>
      <!-- <dd class="image_area">
        <img src="@/assets/img/terms04.png" />
      </dd> -->
      <dd>
        <span>수거배송 보증금 8000원이 결제 됩니다.</span>
        <span>보증금은 세탁물 검수 이후 세탁 청구비용에서 차감이됩니다.</span>
        <span>최소주문금액은 8,000원 세탁품목이 8000원 이하인 경우에는 보증금 차감이 되지 않습니다.</span>
        <span>변심으로 인한 세탁철회 요청 시 보증금은 환불되지 않습니다.</span>
        <span>세탁불가품목 신청으로 인해 발생하게되는 수거배송비용은 환불되지 않습니다.</span>
        <p>데일리세탁에서 진행하는 모든 세탁물은 위 사전공지 안내를 진행하며, 이후 동의하여 세탁을 요청한 경우에 대해서는 손해배상에 대해 면책됩니다.</p>
      </dd>
    </dl>

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
    margin-top:30px;

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
        margin-bottom:5px;
      }
      span{
        font-size:13px;
        display:block;
        margin-bottom:5px;
        color:#595959;
      }
      span:last-child{
        margin-bottom:0px;
      }
      span:before{
        content:'·';
        font-weight:bold;
        color:#d22828;
        margin-right:5px;
      }

      p{
        margin:0;
        font-weight:bold;
        border-top:1px solid #c2c2c2;
        padding-top:15px;
        margin-top:15px;
      } 
    }

    dd.image_area{
      display:flex;
      align-items: center;
      justify-content: center;
      overflow:hidden;
      padding:0px;
      height:100%;
      border-radius:5px;
      img{
        display:block;
        width:100%
      }
    }

    dd.image_area:after{
      content:'';
      display:block;
      padding-bottom:0.4167%
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
