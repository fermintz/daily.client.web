<template>
  <div class="addressCard" v-ripple @click.stop="()=>{}">
    <div class="top">
      <label>선택됨</label>
    </div>
    <div class="cont">
      <dl>
        <dt>부산광역시 금정구 부산대학로 63번길 2</dt>
        <dd>
           과학기술연구동 201호 페이오티
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
  border-bottom:1px solid #e2e2e2;
  padding:20px;

  .top{
    display:flex;
    margin-bottom:5px;
    label{
      display:block;
      font-size:10px;
      color:#fff;
      margin-bottom:3px;
      background:#0CA0E2;
      padding:2px 6px;
      border-radius:10px;
    }
  }

  .cont{
    display:flex;

    .del{
        background:#d2d2d2;
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
      margin-right:20px;

      dt{
        font-size:14px;
        font-weight: bold;
      }
      dd{
        font-size:14px;
        line-height:1.4;
        color:#888;
        margin-top:2px;
      }
    }
  }

  .gate{
    background:#F1F3F5;
    padding:10px;
    border-radius: 5px;
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