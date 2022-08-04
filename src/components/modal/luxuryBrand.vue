<template>
  <v-bottom-sheet v-model="visible" scrollable>
    <div class="luxuryBrand">
      <header>
        <div class="title">
          <h2>명품브랜드 검색</h2>
          <p>내가 가진 제품이 명품 또는 준명품인지<br>확인해보세요</p>
        </div>
        <v-btn class="close" icon @click="visible=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <div class="search_box">
          <input type="text" placeholder="명품브랜드명 입력(한글or영문)">
          <v-icon>mdi-magnify</v-icon>
        </div>
      </header>

      <section>
        <div class="list">
          <div class="category">
            <dt>
              명품
            </dt>
            <dd>
              <ul>
                <li class="item">
                  <strong>CHANEL</strong>
                  <span>샤넬</span>
                </li>
                <li class="item">
                  <strong>Cochi</strong>
                  <span>코치</span>
                </li>
              </ul>
            </dd>
          </div>

          <dl class="category">
            <dt>
              준명품
            </dt>
            <dd>
              <ul>
                <li class="item" v-for="item in 10" :key="item">
                  <strong>Calvin Klein</strong>
                  <span>캘빈클라인</span>
                </li>
              </ul>
            </dd>
          </dl>

          <dl class="category">
            <dt>
              골프웨어
            </dt>
            <dd>
              <ul>
                <li class="item">
                  <strong>Castelbajac</strong>
                  <span>까스텔바작</span>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </section>
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
    show(value){
      this.visible = value
    }
  },
}
</script>


<style lang="scss" scoped>
.luxuryBrand{
  position: relative;
  background:#fff;

  border-radius:30px 30px 0 0;
  overflow-y:auto;

  header{
    position: sticky;
    top:0;
    background:#fff;
    padding:25px;
    .title{
      h2{
        font-size:20px;
        font-weight:bold;
      }
      p{
        font-size:14px;
        margin-top:6px;
        line-height:1.3;
        color:#595959;
      }
    }

    .close{
      position: absolute;
      top:15px;
      right:15px;
      width:40px;
      height:40px;
      background:#f2f2f2;
    }

    .search_box{
      display:flex;
      align-items: center;
      position: relative;
      input{
        width:100%;
        border-bottom:3px solid #292929;
        height:50px;
        padding-left:0;
        padding-right:46px;
        font-size:18px;
        outline: none;
        font-weight:bold;
      }
      input::placeholder{
        font-weight:normal;
        font-size:16px;
      }

      .v-icon{
        position: absolute;
        right:0px;
        font-size:18px;
        background:#292929;
        color:#fff;
        width:32px;
        height:32px;
        border-radius:16px;
      }
    }
  }

  section{
    padding:0 25px 25px 25px;
  }

  

  .list{
    .category{
      margin-bottom:30px;
      dt{
        display:flex;
        align-items: center;
        padding:0 10px;
        height:32px;
        font-size:14px;
        font-weight:bold;
        background:#f2f2f2;
      }
      dd{
        ul{
          display:flex;
          flex-direction: column;
          gap:12px;
          padding:12px 0;
          li{
            padding:0 5px;
            span,strong{
              display:block;
            }
            strong{
              font-size:16px;
            }
            span{
              font-size:13px;
              color:#898989;
            }
          }
        }
      }
    }
    
  }
  
  
}
</style>