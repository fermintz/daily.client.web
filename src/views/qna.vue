<template>
  <div class="qna contents">
    <div class="top">
      <h2>자주묻는 질문</h2>
    </div>

    <div class="list">
      <dl class="accodion_item">
        <dt v-ripple>
          <span>세탁은 얼마나 걸리나요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 물빨래의 경우 2일 ~ 3일 정도 소요.</span>
          <span>- 특수세탁 혹은 드라이크리닝의 경우 4일 ~ 5일 정도 소요.</span>
          <span>- 구스소재(구스다운패딩, 구스토퍼) 포함 시 최대 4일 ~ 5일 정도 소요.</span>
          <span>- 운동화 세탁은 3일 ~ 7일 정도 걸리시기에 여유있게 맡겨주세요. 토,일 및 공휴일이 겹친 경우 모든품목 최대 2일 이상 소요되십니다.</span>
          <span>- 모든 품목이 세탁이 완료시에 배송이 진행되므로 특수세탁 제품이 포함된 예약 주문은 4~5일 소요 됩니다.</span>
          <span>- <b>세탁 불가처리된 항목이 포함되어 있더라도 전 품목에 관련 세탁이 완료 되었을때 일괄적으로 배송됩니다.</b></span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>배송 가능 날짜와 시간을 알려주세요.</span> 
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- <b>어플을 통해 예약하실때, 배송 예정 날짜와 요일이 표기됩니다.</b> 그 이후에는 예약 완료 카카오톡 알림과 메세지로 확인할 수 있습니다.</span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>예약한 품목보다 더 내놓고 싶어요.</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 어플을 통해 예약한 수량보다 더 내놓을 빨래를 맡기고 싶은 고객님들께서는 <b>어플로 예약하신 품목과 함께 맡기고 싶은 빨래를 같이 내놓으시기만 하면 됩니다.</b> 이 후 결제는 검수 과정에서 고객님께 추가 결제 요청 알림이 발송되어 어플 내에서 진행해주시면 됩니다.</span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>추가결제는 어떻게 하나요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 추가 결제 요청 시에는 카카오톡, 데일리세탁 어플로 알람이 가며, <b>어플 하단의 '이용내역'에서 추가 결제를 진행할 수 있습니다.</b></span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>주문 취소는 어떻게 하나요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 데일리세탁 어플 하단의 '이용내역'에서 고객님이 예약하신 수거 시간 2시간 전까지 취소가 가능합니다.</span>
          <span>- 수거 시간 이후에 세탁물이 내놓아지지 않은 경우 수거 배송 기사님께서 유선 2회 연락 불응 시 <b>자동으로 취소 처리되며, 수거배송비(3,500원)이 패널티로 부가됩니다.</b></span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>수선도 가능한가요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 현재 데일리세탁에서는 '간단한 수선'만 진행합니다.</span>
          <span>- 밑단수선/길이수선, 단추 및 지퍼수선(수선이 필요한 단추/지퍼는 동봉 요망), 뜯어짐 및 헤 짐 수선만 가능합니다.(그 외 통 줄임, 허리 수선 등의 수선서비스는 제공하지 않습니다.)</span>
          <span>- 세탁담당자 검수 후 수선이 불가능 할 수 있습니다.</span>
          <span>- <b>세탁과정 없이 수선 서비스만은 제공하지 않습니다.</b></span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>세탁은 어디에서 하나요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 맡겨주신 세탁물은 데일리세탁에서 꼼꼼하게 선별한 연계 세탁소에서 진행합니다.</span>
          <span>- 업체 정보를 보호하는 원칙에 따라 특수한 경우를 제외하고 고객님께 공개되지 않습니다.</span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>배송비를 따로 내야 하나요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 세탁 수거 및 배송료로 3,500원이 부가됩니다.</span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>수거 주소와 배송 주소가 달라도 되나요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 수거 주소와, 배송 주소가 다를 경우 고객님의 세탁물 분실의 위험으로 현재 서비스에서는 이용하실 수 없습니다.</span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>수거 예정 시간에 수거가 안됐어요.</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 교통상황가 날씨, 물량에 따라 늦어질 수 있으나, <b>예약하신 품목은 늦더라도 반드시 수거합니다.</b></span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>입력한 주소를 수정하고 싶어요.</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 어플 내의 하단에 '내 정보'에서 수거/배달 장소관리에서 주소 및 현관 비밀번호를 변경하실 수 있습니다.</span>
        </dd>
      </dl>

      <dl class="accodion_item">
        <dt v-ripple>
          <span>세탁 후에 문제가 발생하면 A/S 및 보상은 어떻게 되나요?</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span>- 세탁업 표준약관 제 6조  피해보상 및 손해배상의 원칙에 따라 진행됩니다.</span>
        </dd>
      </dl>
      
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.hiddenMenu()
  },
  methods:{
    hiddenMenu(){
      const items = document.querySelectorAll('.accodion_item');

      items.forEach(item => {
        item.addEventListener('click',()=>{
          item.classList.toggle('active');
        }, false)
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.qna{
  .top {
    margin-bottom: 30px;
    h2 {
    }
  }

  .list{
    dl{
      border-bottom:1px solid #e2e2e2;
      dt{
        display:flex;
        align-items: center;
        justify-content: space-between;
        min-height:50px;
        padding:10px;

        span{
          flex:1;
          font-size:15px;
          margin-right:20px;
        }
        .v-icon{
          font-size:18px;
        }
      }

      dd{
        background:#f8f8f8;
        border-radius:5px;
        display:none;
        flex-direction: column;
        gap:8px;
        font-size:14px;
        line-height:1.4;
        margin-bottom:20px;
        transition: all 0.2s linear;
        padding:0;

        span{
          display:block;
          b{color:#d22828;}
        }
      }
    }

    dl:last-child{
      border-bottom:0;
    }

    .accodion_item.active {
      dt {
        .v-icon {
          transform: rotate(180deg);
        }
      }
      dd{
        display:flex;
        padding:15px;

        span{
          visibility: visible;
        }
      }

    }
    .accodion_item:last-child {
      margin-bottom: 0px;
    }
    .accodion_item:hover {
      cursor: pointer;
    }
  }
}
</style>