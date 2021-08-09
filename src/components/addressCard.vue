<template>
  <div class="addressCard" v-ripple @click.stop="()=>{}">
    <div class="top">
      <div class="icon">
        <v-icon>mdi-check-circle-outline</v-icon>
        <span>대표주소</span>
      </div>
      
      <dl>
        <dt>우리집</dt>
        <dd>
          부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티
        </dd>
      </dl>

      <v-btn class="del" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="gate">
      <v-icon>mdi-lock-outline</v-icon>
      <span>누구나 출입가능</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.addressCard{
  border:1px solid #e2e2e2;
  margin-bottom:15px;
  padding:15px;
  border-radius:4px;

  .top{
    display:flex;

    .icon{
      display:flex;
      flex-direction: column;

      .v-icon{
        font-size:32px;
        color:#0CA0E2;
      }
      
      span{
        text-align: center;
        font-size:10px;
        color:#0CA0E2;
        margin-top:5px;
      }
    }

    .del{
      background:#292929;
      border-radius:4px;
      width:24px;
      height:24px;
      .v-icon{
        font-size:18px;
        color:#fff;
      }
    }
    dl{
      flex:1;
      margin-left:20px;

      dt{
        font-size:16px;
        font-weight: bold;
      }
      dd{
        font-size:12px;
        line-height:1.4;
        color:#888;
        margin-top:5px;
      }
    }
  }

  .gate{
    background:#f8f8f8;
    padding:10px;
    border-radius: 4px;
    margin-top:15px;

    .v-icon{
      font-size:18px;
      margin-right:10px;
    }
    span{
      font-size:12px;
      color:#292929;
      line-height:1.4;
    }
  }
}
</style>