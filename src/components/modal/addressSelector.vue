<template>
  <div class="addressSelector" v-if="visible">
    <div class="inner">
      <div class="head">
        <h4>
          픽업/배달을 위한 장소를<br>
          선택해주세요
        </h4>
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <ul class="cont">
        <li class="on" v-ripple>
          <span></span>
          <label>경남 김해시 가락대로 929-1</label>
        </li>
        <li v-ripple>
          <span></span>
          <label>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티</label>
        </li>
      </ul>

      <div class="bottom">
        <v-btn text>
          <v-icon>mdi-plus</v-icon>
          <label>장소추가</label>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-cog</v-icon>
          <label>장소관리</label>
        </v-btn>
      </div>
    </div>

    <div class="blackbg" @click="visible = false"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      visible:true
    }
  }
}
</script>

<style lang="scss" scoped>
.addressSelector{
  position: fixed;
  top:0px;
  left:0px;
  z-index:10;
  width:100%;
  height:100%;
  touch-action: none;

  .inner{
    position: absolute;
    top:0px;
    width:100%;
    background:#fff;
    padding:20px;
    border-radius: 0 0 15px 15px ;
    z-index:11;
    animation: slideDown .3s forwards linear;
    .head{
      display:Flex;
      justify-content: space-between;
      margin-bottom:20px;

      h4{
        font-size:18px;
        font-weight:bold;
        margin-right:30px;
      }
    }

    @keyframes slideDown {
      0%{
        top:-100%;
      }
      100%{
        top:0px;
      }
    }
  }

  .cont{
    padding:0;
    max-height:300px;
    overflow-y:auto;
    li{
      display:flex;
      background:#F1F3F5;
      padding:10px;
      border-radius:5px;
      margin-bottom:10px;
      min-height:30px;

      span{
        display:block;
        width:10px;
        height:10px;
        margin-top:4px;
        border-radius:5px;
        margin-right:10px;
        border:1px solid #292929;
      }

      label{
        flex:1;
      }
      &:last-child{
        margin-bottom:0;
      }

      &.on{
        span{
          background:#0CA0E2;
          border:0;
        }
      }
    }
  }

  .bottom{
    display:flex;
    margin-top:20px;
    justify-content: flex-end;
    .v-btn{
      height:34px;
      border:1px solid #e2e2e2;
      border-radius:17px;
      margin-left:10px;
      .v-icon{
        font-size:18px;
        margin-right:5px;
      }

      &:first-child{
        margin-left:0;
      }
    }
  }

  .blackbg{
    position: fixed;
    top:0px;
    left:0px;
    z-index:10;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.7)
  }

}
</style>