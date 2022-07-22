<template>
  <v-dialog v-model="visible" fullscreen transition="dialog-bottom-transition" scrollable>
    <div class="detailInProduct">
      <header>
        <h3>선택한 상품</h3>
        <v-btn icon @click="visible=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </header>

      <section>
        <div class="total">
          <span>총 금액</span>
          <strong>27,500원</strong>
        </div>

        <div class="divider"></div>

        <ul class="list">
          <li class="item" v-for="item in 6" :key="item">
            <div class="name">
              셔츠 및 블라우스
            </div>
            <div class="bottom">
              <div class="amount">
                <span>1,950원</span>
                <label>x</label>
                <span class="number">01</span>
              </div>
              <strong class="all">3,900원</strong>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false
    }
  },
  methods:{
    show(value){
      this.visible = value
    }
  }
}
</script>

<style lang="scss" scoped>
.detailInProduct{
  min-height:100%;
  background:#fff;

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

  section{
    padding:25px;
    background:#fff;
    .total{
      display:flex;
      align-items: flex-end;
      justify-content: space-between;

      strong{
        font-size:24px;
        font-weight:bold;
      }
    }

    .divider{
      height:2px;
      background:#292929;
      margin:10px 0;
    }
    
    ul{
      display:flex;
      flex-direction: column;
      gap:10px;
      margin:20px 0;
      li{
        border:1px solid #e2e2e2;
        border-radius:8px;
        padding:15px;

        .name{
          flex:1;
          margin-right:10px;
          font-size:14px;
        }

        .bottom{
          display:flex;
          justify-content: space-between;
          align-items: center;

          .amount{
            display:flex;
            align-items: center;
            color:#898989;
            label{
              margin:0 5px;
            }
            .number{
              font-weight:bold;
              color:#292929;
            }
          }

          strong{
            font-size:16px;
            font-weight:bold;
          }
        }
      }
    }
  }


}
</style>