<template>
  <div class="creditCardItem">
    <div class="inner">
      <div class="top">
        <div class="cardName">
          국민카드
        </div>
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="bottom">
        <div class="box"></div>
        <div class="right">
          <div class="number">
            <span>****</span>
            <span>****</span>
            <span>****</span>
            <span>4561</span>
          </div>
          <div class="date">
            <label>등록일</label>
            <span>2021.08.05</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.creditCardItem{
  position: relative;
  border:1px solid #e2e2e2;
  background:#fff;
  height:0;
  padding-bottom:56.26%;
  border-radius:10px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
  overflow: hidden;
  margin-bottom:26px;

  .inner{
    width:100%;
    height:100%;
    position: absolute;
    display:flex;
    flex-direction: column;
  }

  .top{
    height:50%;
    display:flex;
    justify-content: space-between;
    padding:20px;

    .cardName{
      font-size:18px;
      font-weight:bold;
    }

    .v-btn{
      background:#292929;
      width:30px;
      height:30px;
      .v-icon{color:#fff;font-size:18px;}
    }
  }

  .bottom{
    height:50%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background:#f8f8f8;
    padding:20px;

    .box{
      width:44px;
      height:44px;
      background:#FCE28C;
      border-radius:10px;
    }

    .right{
      .number{
        display:flex;
        align-items: center;
        span{
          margin-left:15px;
          color:#888;
          line-height:1;
        }
        span:last-child{
          color:#292929;
          font-size:20px;
          font-weight:bold;
        }
      }

      .date{
        text-align:right;
        margin-top:8px;
        label{
          font-size:12px;
        }
        span{
          font-size:12px;
          margin-left:10px;
          color:#999;
        }
      }
    }
  }
  
  
}
</style>