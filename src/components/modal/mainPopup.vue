<template>
  <v-bottom-sheet v-model="visible">
    <div class="main_popup">
      <div class="event_img">
        <img src="/img/main_notice.jpg" />
      </div>
      <div class="bottom_btns">
        <v-btn text class="todayClose" @click="visible = false">오늘 하루 열지 않기</v-btn>
        <v-btn text class="close" @click="visible = false">닫기</v-btn>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.main_popup {
  background:#fff;
  border-radius:20px 20px 0 0;
  overflow:hidden;
  padding:5px;
  padding-bottom:10px;
  .event_img{
    position: relative;
    background:#f8f8f8;
    border-radius:17px;
    overflow:hidden;

    img{
      display:block;
      width:100%;
    }
  }
  .bottom_btns{
    display:flex;
    align-items: center;
    justify-content: center;
    margin:15px 0;
    padding:0 10px;

    .v-btn{
      background:#f2f2f2;
      margin-right:10px;
      border-radius:20px;
      height:40px;
      font-size:13px;
    }
    .v-btn.todayClose{
      
      background:#FBEFF4;
    }
    .v-btn:last-child{
      margin-right:0px;
    }
  }
}
</style>
