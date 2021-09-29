 <template>
   <div class="myOrderCard" @click.stop="$router.push('myOrderDetail')" v-ripple>
    <div class="top">
      <span class="state">수거시작</span>
      <span class="date">2021.09.14 (수) 주문</span>
    </div>
    <div class="cont">
      <div class="product_name">와이셔츠 외 2종</div>
      <div class="pickup">
        <dl>
          <dt>픽업날짜</dt>
          <dd>2021.07.06 오전</dd>
        </dl>
        <dl>
          <dt>픽업장소</dt>
          <dd>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티</dd>
        </dl>
      </div>
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
  padding:20px;

  .top{
    display:flex;
    align-items: center;
    justify-content: space-between;

    span.state{
      color:#F11064;
      font-weight:bold;
    }
    span.date{
      color:#898989;
      font-size:12px;
    }
  }

  .cont{
    .product_name{
      font-size:16px;
      margin:10px 0;
    }
    .pickup{
      background:#F1F3F5;
      padding:10px;
      border-radius:5px;
      dl{
        display:flex;
        margin-bottom:5px;
        dt{
          font-size:12px;
          width:70px;
          color:#898989;
        }
        dd{
          font-size:12px;
          flex:1;
        }
      }

      dl:last-child{
        margin-bottom:0px;
      }
    }
  }

}
</style>