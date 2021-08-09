 <template>
   <div class="myOrderCard" @click="$router.push('myOrderDetail')">
    <div class="top">
      <div class="date">
        2021.07.05
      </div>
      <v-btn text :ripple="false">
        <label>주문/배송 상세</label>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <div class="cont">
      <div class="state working">
        <v-icon>mdi-truck-fast-outline</v-icon>
        <span>
          작업중
        </span>
      </div>
      <div class="order-info">
        <div class="product-name">와이셔츠 외</div>
        <dl class="pickup">
          <dt>수거일</dt>
          <dd>2021.07.06 오전</dd>
        </dl>
        <dl class="price">
          <dt>최종결제금액</dt>
          <dd>98,500 원</dd>
        </dl>
      </div>
    </div>
    <div class="bottom">
      <v-btn text :ripple="false">주문취소</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.myOrderCard{
  overflow: hidden;
  border-radius:10px;
  border:1px solid #e2e2e2;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
  margin-bottom:20px;

  .top{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #e2e2e2;

    .date{
      margin-left:15px;
      font-size:13px;
    }

    .v-btn{
      display:flex;
      border-radius:0;
      align-items: center;
      label{font-size:12px;}
      .v-icon{font-size:16px;margin-left:5px;}
    }
  }


  .cont{
    display:flex;
    align-items: center;
    padding:15px;

    .state{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right:20px;
      min-width:60px;
      max-width:60px;
      height:60px;
      border-radius:5px;
      
      background:#fff;
      padding:0 10px;

      .v-icon{
        margin-bottom:2px;
        color:#0CA0E2
      }

      span{
        color:#292929;
        display:block;
        font-size:11px;
        letter-spacing: -0.4px;
      }
    }

    .state.working{
      border:1px solid #0CA0E2;
      .v-icon{
        color:#0CA0E2
      }
    }

    .state.complete{
      border:1px solid #F11064;
      .v-icon{
        color: #F11064;
      }
    }

    .order-info{
      flex:1;
      border-left:1px solid #e2e2e2;
      padding-left:20px;

      .product-name{
        font-size:14px;
        color:#292929;
        font-weight:bold;
        margin-bottom:8px;
      }

      dl{
        display:flex;
        align-items: center;
        margin-bottom:4px;
        dt{
          font-size:11px;
          color:#888;
          margin-right:5px;
        }
        dd{
          flex:1;
          font-size:11px;
        }
      }

      dl:last-child{
        margin-bottom:0px;
      }


      

    }
  }
    
  .bottom{
    display:flex;
    justify-content: flex-end;
    overflow:hidden;
    background:#f8f8f8;
    .v-btn{
      font-size:12px;
      border-radius:0; 
    }
  }
}
</style>