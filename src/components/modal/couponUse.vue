<template>
  <v-dialog
    v-model="visible"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <div class="couponUse">
      <div class="modal-head">
        <h2>쿠폰사용하기</h2>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="coupon-list">
        <div class="no-data">
          등록된 쿠폰이 없습니다.
        </div>
        <CouponItem  v-for="item in 5" :key="item"/>
      </div>
    </div>
  </v-dialog>
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
  background:#fff;

  .modal-head{
    width:100%;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0 20px;
    height:60px;
    z-index:10;
    border-bottom:1px solid #e2e2e2;
    position: sticky;
    top:0px;

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
    overflow-y:scroll;
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

  }
}
</style>