<template>
  <v-bottom-sheet
    v-model="visible"
    fullscreen
    scrollable
  >
    <div class="couponUse">
      <div class="modal-head">
        <h2>쿠폰사용하기</h2>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <ul class="coupon-list">
        <li class="no-data">
          등록된 쿠폰이 없습니다.
        </li>
        <li v-for="item in 10" :key="item">
          <CouponItem />
        </li>
      </ul>

    </div>
  </v-bottom-sheet>
</template>

<script>
import CouponItem from '@/components/couponItem'

export default {
  components:{
    CouponItem,
  },
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    handle(value){
      this.visible = value;
    },
  }
}
</script>

<style lang="scss" scoped>
.couponUse{
  position: relative;
  background:#fff;
  overflow-y:auto;
  height:100%;

  .modal-head{
    position: sticky;
    top:0px;
    width:100%;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0 20px;
    height:60px;
    z-index:10;
    border-bottom:1px solid #e2e2e2;

    h2{
      font-size:18px;
      font-weight:bold;
    }

    .v-btn{
      width:30px;
      height:30px;
      padding:0;
      background:#292929;
      .v-icon{
        color:#fff;
        font-size:18px;
      }
    }
  }

  .coupon-list{
    padding:20px;

    .no-data{
      display:flex;
      align-items: center;
      justify-content: center;
      height:40px;
      border-radius:40px;
      background:#f2f2f2;
      text-align:center;
      margin-bottom:15px;
    }

    li{
      margin-bottom:10px;
    }

  }
}
</style>