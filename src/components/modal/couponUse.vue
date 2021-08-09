<template>
  <v-dialog
    v-model="visible"
  >
    <div class="couponUse">
      <div class="modal-head">
        <h2>쿠폰사용하기</h2>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="coupon-list">
        <CouponItem  v-for="item in 7" :key="item"/>
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
    position: sticky;
    top:0px;
    width:100%;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    padding:0 15px;
    height:50px;
    z-index:10;

    h2{
      font-size:16px;
    }
  }

  .coupon-list{
    padding:20px;
    background:#f2f2f2;
  }
}
</style>