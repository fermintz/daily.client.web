<template>
  <v-dialog
    v-model="visible"
    fullscreen
    scrollable
    transition="dialog-bottom-transition"
  >
    
    <div class="couponUse">
      <header>
        <h3>쿠폰적용</h3>
        <v-btn icon @click="visible=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </header>
    

      <ul class="coupon-list">
        <li>
          
        </li>
      </ul>
    </div>
  </v-dialog>
</template>

<script>


export default {

  data(){
    return{
      visible:false,
    }
  },
  methods:{
    show(value){
      this.visible = value;
    },
  }
}
</script>

<style lang="scss" scoped>

header{
  position: sticky;
  top:0px;
  background:#fff;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:0 20px;
  height:70px;
  z-index:2;

  .v-btn{
    background:#f2f2f2;
  }

  h3{
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:18px;
    font-weight:bold;
  }
}

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