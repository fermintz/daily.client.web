<template>
  <div class="delivery-info">
    <div class="state-message">
      배송이 완료되었습니다
    </div>

    <div class="history-wrap">
      <div class="history">
        <div class="vertical-line" />
        <dl v-for="item in ['수거시작','수거완료','작업중','배송시작','배송완료','주문취소']" :key="item">
          <dt>
            <span/>
          </dt>
          <dd>
            <label>{{item}}</label>
            <span>2/21(일) 오후 09:34</span>
          </dd>
        </dl>
      </div>
    </div>

    <div class="pictures">
      <dl>
        <dt>수거완료</dt>
        <dd>
          <img src="https://source.unsplash.com/random" >
        </dd>
      </dl>
      <dl>
        <dt>배송완료</dt>
        <dd>
          <img src="https://source.unsplash.com/random" >
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delivery-info{
  .state-message{
    font-size:18px;
    padding:26px;
    background:#f8f8f8;
    text-align:center;
  }


  .history-wrap{
    padding:26px;
    border-bottom:1px solid #e2e2e2;
  }

  .history{
    position: relative;

    .vertical-line{
      position:absolute;
      height:calc(100% - 40px);
      top:10px;
      left:2.5px;
      width:5px;
      border-radius:10px;
      background: #EDF4F8;
    }

    dl{
      position: relative;
      display:flex;
      z-index:2;
      margin-bottom:30px;

      dt{
        span{
          display:inline-block;
          width:10px;
          height:10px;
          border-radius:10px;
          background:#0CA0E2;
          margin-top:4px;
        }
      }
      dd{
        flex:1;
        margin-left:30px;
        
        label{
          display:block;
          font-size:16px;
        }
        span{
          display:block;
          font-size:12px;
          color:#888;
          margin-top:5px;
        }
      }
    }
    dl:last-child{
      margin-bottom:0px;
    }
  }

  .pictures{
    padding:26px;

    dl{
      margin-bottom:30px;
      dt{}
      dd{
        display:flex;
        margin-top:10px;
        max-height:200px;
        border-radius:5px;
        overflow:hidden;
        justify-content: center;
        align-items: center;

        img{width:100%;}
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }
  }
}
</style>