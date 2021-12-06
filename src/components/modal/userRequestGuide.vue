<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="user_request_guide">
      <div class="image">
        <img src="https://picsum.photos/id/237/1080/640">
      </div>
      <dl>
        <dt>
          오염 제거요청(혈액/음식물/토사물/기타 등)
        </dt>
        <dd>
          세탁물의 재질, 오염의 종류에 따라 세탁이 불가능하거나 오염제거가 되지 않을 수 있습니다. 
          (세탁/건조과정이 진행되었으나 잔존 된 오염은 이미 고착화되어 제거가 불가능합니다.)
        </dd>
      </dl>

      <div class="bottom">
        <v-btn text @click="visible = false">
          닫기
        </v-btn>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
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
.user_request_guide{
  background:#fff;
  padding:20px;
  border-radius:10px 10px 0 0;

  .image{
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    height:100%;
    overflow:hidden;
    background:#f8f8f8;
    border-radius:4px;

    img{
      position: absolute;
      width:100%;
    }
  }
  .image:after{
    content:'';
    display:block;
    padding-bottom:59.26%
  }

  dl{
    margin-top:15px;
    dt{
      font-size:16px;
      font-weight:bold;
    }
    dd{
      margin-top:10px;
      font-size:14px;
      color:#696969;
    }
  }

  .bottom{
    margin-top:30px;
    .v-btn{
      height:45px;
      width:100%;
      background:#292929;
      color:#fff;
      font-size:14px;
    }
  }

}
</style>