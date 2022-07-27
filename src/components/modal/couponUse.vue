<template>
  <v-dialog
    v-model="visible"
    fullscreen
    scrollable
    transition="dialog-bottom-transition"
  >
    <div class="couponUse">
      <header>
        <h3>쿠폰적용</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </header>

      <section>
        <div class="coupon_push">
          <input type="text" placeholder="쿠폰코드를 입력해주세요" />
          <v-btn text>쿠폰등록</v-btn>
        </div>

        <div class="divider"></div>

        <ul class="coupon-list">
          <li v-ripple>
            <div class="left">
              <span>무료배송이벤트</span>
              <strong>3,500원</strong>
              <p>최소주문금액:15,000원</p>
              <p>이용기간:2022.07.31일까지</p>
            </div>
            <v-icon>mdi-plus-circle-outline</v-icon>
          </li>

          <li v-ripple>
            <div class="left">
              <span>무료배송이벤트</span>
              <strong>3,500원</strong>
              <p>최소주문금액:15,000원</p>
              <p>이용기간:2022.07.31일까지</p>
            </div>
            <v-icon>mdi-plus-circle-outline</v-icon>
          </li>

          <li :v-ripple="false" class="selected">
            <div class="left">
              <span>무료배송이벤트</span>
              <strong>3,500원</strong>
              <p>최소주문금액:15,000원</p>
              <p>이용기간:2022.07.31일까지</p>
            </div>
            <v-icon>mdi-check-circle-outline</v-icon>
          </li>
          <li v-ripple class="no_coupon">
            <v-icon>mdi-close-circle-outline</v-icon>
            <span>쿠폰적용안함</span>
          </li>
        </ul>
      </section>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show(value) {
      this.visible = value
    },
  },
}
</script>

<style lang="scss" scoped>
.couponUse {
  position: relative;
  background: #fff;
  overflow-y: auto;
  height: 100%;

  header {
    position: sticky;
    top: 0px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 70px;
    z-index: 2;

    .v-btn {
      background: #f2f2f2;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .divider {
    height: 8px;
    background: #f2f2f2;
  }

  .coupon_push {
    padding: 25px;
    input {
      height: 50px;
      border: 1px solid #e2e2e2;
      width: 100%;
      border-radius: 5px;
    }
    
    .v-btn {
      margin-top: 10px;
      height: 50px;
      width: 100%;
      background: #292929;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
    }
  }

  .coupon-list {
    padding: 20px;

    li {
      margin-bottom: 10px;
      border: 1px solid #e2e2e2;
      border-radius: 8px;
      padding: 15px;
      display: Flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: column;
        strong {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        p {
          margin: 0;
          font-size: 12px;
          color: #898989;
        }
      }
      .v-icon {
        font-size: 36px;
        color: #292929;
      }

      
    }

    li.selected{
      background:#f8f8f8;
      .v-icon{
        color:#0099ff;
      }
    }

    li.no_coupon{
      justify-content: flex-start;
      .v-icon{
        font-size:22px;
        color:#aaa;
      }
      span{
        font-size:16px;
        margin-left:10px;
        flex:1;
      }

    }
  }
}
</style>
