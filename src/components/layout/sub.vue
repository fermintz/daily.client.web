<template>
  <v-app>
    <div class="sub">
      <div class="subHead">
        <div class="left">
          <v-btn icon @click="$router.go(-1)">
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-btn>
          <span>
            제목입니다
          </span>
        </div>
        <div class="btns">
          <v-btn icon class="kakao">
            <v-icon>mdi-chat</v-icon>
          </v-btn>
          <v-btn icon class="home" @click="$router.push('/')">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          
        </div>
      </div>
      
      <router-view />
      
    </div>
  </v-app>
</template>

<script>
export default {
  methods:{
    requst(type, value){
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
  },
}
</script>

<style lang="scss" scoped>

.sub{
  .subHead{
    position:sticky;
    top:0px;
    width:100%;
    height:60px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background:#fff;
    z-index:10;
    padding:0 10px;

    .left{
      display:flex;
      justify-content: center;
      align-items: center;

      .v-btn{
        width:40px;
        height:40px;
      }
      span{
        margin:0 10px;
        flex:1;
      }
    }

    .btns{
      display:flex;
      align-items: center;

      .v-btn{
        width:32px;
        height:32px;
        margin-left:10px;
        background:#f2f2f2;
        .v-icon{
          font-size:18px;
        }
      }
      .v-btn.kakao{
        background:#FFC400;
      }
      .v-btn.home{
        background:#0CA0E2;
        .v-icon{color:#fff;}
      }
    }
  }
}

</style>