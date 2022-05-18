<template>
  <div class="qna contents">
    <div class="top">
      <h2>자주묻는 질문</h2>
    </div>

    <div class="list">
      <dl class="accodion_item" v-for="items in datas" :key="items">
        <dt v-ripple>
          <span>{{items.title}}</span>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <span v-for="item in items.datas" :key="item" v-html="item"></span>
        </dd>
      </dl>      
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      datas:require('@/assets/docs/qna.json'),
    }
  },
  async mounted(){
    this.hiddenMenu()
  },
  methods:{
    hiddenMenu(){
      const items = document.querySelectorAll('.accodion_item');
      items.forEach(item => {
        item.addEventListener('click',()=>{
          item.classList.toggle('active');
        }, false)
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.qna{
  .top {
    margin-bottom: 30px;
    h2 {
    }
  }

  .list{
    dl{
      border-bottom:1px solid #e2e2e2;
      dt{
        display:flex;
        align-items: center;
        justify-content: space-between;
        min-height:50px;
        padding:10px;

        span{
          flex:1;
          font-size:15px;
          margin-right:20px;
        }
        .v-icon{
          font-size:18px;
        }
      }

      dd{
        background:#f8f8f8;
        border-radius:5px;
        display:none;
        flex-direction: column;
        gap:8px;
        font-size:14px;
        line-height:1.4;
        margin-bottom:20px;
        transition: all 0.2s linear;
        padding:0;

        span{
          display:block;
          ::v-deep b{color:#d22828;}
        }
      }
    }

    dl:last-child{
      border-bottom:0;
    }

    .accodion_item.active {
      dt {
        .v-icon {
          transform: rotate(180deg);
        }
      }
      dd{
        display:flex;
        padding:15px;

        span{
          visibility: visible;
        }
      }

    }
    .accodion_item:last-child {
      margin-bottom: 0px;
    }
    .accodion_item:hover {
      cursor: pointer;
    }
  }
}
</style>