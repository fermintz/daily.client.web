<template>
  <div class="product contents">
    <div class="inner">
      <div class="page-title">
        <h2>세탁하고 싶은 세탁물을<br>선택해주세요</h2>
      </div>

      <div class="search_box" @click="$refs.luxuryBrand.show(true)">
        <span>명품브랜드 검색</span>
        <v-icon>mdi-magnify</v-icon>
      </div>
    </div>

    <div class="customTabs">
      <div class="tabs">
        <v-btn 
          text
          v-for="(item, index) in priceTable" 
          :key="index"
          @click="tabActive = index"
          :class="{active:tabActive === index}"
        >
          <label>{{item.category}}</label>
        </v-btn>
      </div>
    </div>    

    <!-- <v-tabs
      v-model="tabActive"
      :show-arrows="false"
      hide-slide
      append
    >
      <v-tab
        v-for="(tab, index) in priceTable" 
        :key="index"
        :ripple="false"
      >
        <div class="tab-item">
          <label>{{ tab.category }}</label>
        </div>
      </v-tab>
    </v-tabs> -->


    <v-tabs-items 
      v-model="tabActive"
      continuous
    >
      <v-tab-item
        v-for="tab in priceTable" :key="tab"
        class="goods-list"
        reverse-transition
      >
        <dl class="goods_cate">
          <dt>
            <label>남성</label>
            
          </dt>
          <dd>
            <div class="goods" v-for="item in tab.product" :key="item">
              <div class="goods-info">
                <div class="icons">
                  <label>이벤트</label>
                </div>
                <span class="goods-name">
                  <label>{{ item.name }}</label>
                  
                  <!-- <v-btn icon>
                    <v-icon >mdi-help-circle-outline</v-icon>
                  </v-btn> -->
                </span>
                <span class="sub">Lorem ipsum dolor sit</span>
              </div>
              <div class="goods-price">
                <div class="sale">
                  <label>50%</label>
                  <span>{{item.userAmount}}원</span>
                </div>
                <strong>{{ item.userAmount}}원</strong>
              </div>
              <div class="goods-btns">
                <v-btn icon class="add" @click="$refs.snackbar.handle(true)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </dd>
        </dl>
        <dl class="goods_cate">
          <dt>
            <label>여성</label>
          </dt>
          <dd>
            <div class="goods" v-for="item in tab.product" :key="item">
              <div class="goods-info">
                <span class="goods-name">
                  <label>{{ item.name }}</label>
                  <!-- <v-btn icon>
                    <v-icon >mdi-help-circle-outline</v-icon>
                  </v-btn> -->
                </span>
                <!-- <span class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, </span> -->
              </div>
              <div class="goods-price">
                <!-- <span>{{item.userAmount}}원</span> -->
                <strong>{{ item.userAmount }}원</strong>
              </div>
              <div class="goods-btns">
                <v-btn icon class="add" @click="$refs.snackbar.handle(true)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </dd>
        </dl>
      </v-tab-item>
    </v-tabs-items>

    <div class="floating" v-show="false">
      <div class="cont" v-show="floating">
        <h4>세탁물 선택이 어려우신가요?</h4>
        <div class="image">
          <img src="@/assets/img/howUse01.png">
        </div>
        <dl>
          <!-- <dt>세탁물 고르기 어려우신가요?</dt> -->
          <dd>세탁물 선택이 어렵다면 PASS 하실 수 있습니다. <br>데일리세탁에서 직접 <b>검수 후 고객님께 결제요청</b>을 드립니다.</dd>
          <dd></dd>
        </dl>
        
        <div class="btns">
          <v-btn text>
            상품직접선택
          </v-btn>
          <v-btn text class="next">
            PASS하기
          </v-btn>
        </div>
        
        <p><b>*</b> 상품선택 넘기기를 선택하시는 경우, <b>후불결제 보증금 8,000원</b>이 결제됩니다.</p>
      </div>
      <v-btn icon class="floatingBtn" @click="floating = !floating">
        <v-icon v-if="floating"> 
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-alert-circle-outline
        </v-icon>
      </v-btn>
    </div>

    <div class="bottom">
      <div class="btns">
        <v-btn text class="basket" @click="$refs.basket.handle(true)">
          <label>장바구니</label>
          <div class="badge">6</div>
        </v-btn>
        <v-btn text class="next" @click="$router.push('orderDetail')">
          <label>14,900원 예약하기</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>  
    

    <Basket ref="basket"/>
    <Snackbar ref="snackbar" text="장바구니에 담았습니다"/>
    <LuxuryBrand ref="luxuryBrand"/>

  </div>
</template>

<script>
import { groupBy } from "lodash";
import Basket from '@/components/modal/basket'
import Snackbar from '@/components/modal/snackbar'
import LuxuryBrand from '@/components/modal/luxuryBrand.vue'

export default {
  components:{
    Basket, Snackbar,LuxuryBrand,
  },
  mounted() {
    this.getProductList();
  },
  data() {
    return {
      tabActive: 0,
      oncePopup: false,
      priceTable: [],
      floating:true,
    };
  },
  watch:{
    tabActive(value){
      if(value === 1 && !this.oncePopup){
        this.$refs.productInPopup.handle(true)
        this.oncePopup = true
      }
    }
  },
  methods: {
    async getProductList() {
      const products = await fetch(
        "https://api.dailywash.co.kr/info/products"
      ).then((data) => data.json());

      const categories = groupBy(products, (value) => value.category);
      const result = Object.keys(categories).map((key) => {
        return {
          category: key,
          product: categories[key].map(({ name, amount }) => ({
            name,
            userAmount: amount,
          })),
        };
      });

      this.priceTable = result;
      console.log(this.priceTable);
    },

    request(type, value){
      const data = JSON.stringify({type:type, value:value})
      window.ReactNativeWebView.postMessage(data)
    },
  },
};
</script>

<style lang="scss" scoped>
.product.contents {
  padding:0px;

  .inner{
    padding:0 20px;
  }

  .page-title{
    margin-bottom:0px;
  }

  .guide_btns{
    display:flex;
    align-items: center;
    overflow-x:scroll;
    margin-top:5px;
    padding:0 20px;
    gap:6px;
    margin-bottom:20px;

    span{
      flex:none;
      min-width:auto;
      display:flex;
      align-items: center;
      border-radius:4px;
      font-size:12px;
      color:#898989;
      .v-icon{
        font-size:13px;
        margin-left:2px;
        color:#898989;
      }
    }

    b.bar{
      color:#d2d2d2;
    }
  }

  .guide_btns::-webkit-scrollbar{
    display:none;
  }

  .search_box{
      display:flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      border-bottom:3px solid #292929;
      height:50px;
      margin-top:5px;

      span{
        font-size:16px;
        color:#898989;
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

  .customTabs{
    padding:0 20px;
    overflow-x:scroll;
    margin:40px 0 20px 0;

    .tabs{
      width:130%;
      display:flex;
      flex-wrap: wrap;
      gap:8px;
    }

    .v-btn{
      border:1px solid #c2c2c2;
      height:30px;
      padding:0 10px;
      min-width:unset;
      border-radius:12px;
    }

    .v-btn.active{
      background:#292929;
      color:#fff;
      border:0;
    }

    &::-webkit-scrollbar{
      display:none;
    }
  }


  .floating{
    display:flex;
    align-items: flex-end;
    position: fixed;
    padding:0 15px;
    right:0px;
    bottom:81px;
    width:85%;
    z-index:99;

    .cont{
      position: relative;
      border:1px solid #d2d2d2;
      background: #fff;
      border-radius:10px;
      margin-bottom:25px;
      right:25px;
      padding:15px;
      border:2px solid #292929;
      box-shadow: 3px 3px 20px rgba(0,0,0,0.1) ,1px 1px 3px rgba(0,0,0,0.05);

      h4{
        font-size:18px;
        margin-bottom:10px;
        font-weight:bold;
        letter-spacing: -.4px;
      }

      .image{
        display:flex;
        justify-content: center;
        background:#f8f8f8;
        border-radius:7px;
        margin-bottom:15px;
        img{
          height:150px;
        }
      }

      dl{
        dt{
          font-size:16px;
          font-weight:bold;
          letter-spacing: -.4px;
        }
        dd{
          font-size:13px;
          margin-top:2px;
          letter-spacing: -.4px;
          b{
            color:#D20A61
          }
        }
      }

      .btns{
        display:flex;
        gap:5px;
        margin:10px 0;
        .v-btn{
          flex:1;
          min-height:40px;
          font-size:14px;
          color:#fff;
          background:#292929;
        }
        .v-btn.next{
          background:#D20A61;
        }

      }

      p{
        font-size:11px;
        color:#292929;
        letter-spacing: -.4px;
        margin:0;
        
        b{
          color:#D20A61;
        }
      }
    }
    
    .floatingBtn{

      position: fixed;
      right:10px;
      width:50px;
      height:50px;
      background:#292929;
      .v-icon{
        color:#fff;
        font-size:30px;
      }
    }
    
  }

  .goods-list{
    padding:0 20px;
    padding-bottom:120px;
    
    
    .tip{
      text-align:center;
      background:#f2f2f2;
      font-size:12px;
      padding:10px;
      color:#898989;
    }

    dl.goods_cate{
      margin-bottom:40px;
      
      dt{
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:14px;
        background:#f2f2f2;
        height:32px;
        padding:0 12px;
        border-radius:8px;
        margin-bottom:10px;

        .right{
          display:Flex;
          align-items: center;

          span{
            display:flex;
            align-items: center;
            font-size:12px;
            padding:2px 5px;
            border-radius:3px;

            .v-icon{
              font-size:15px;
              margin-left:3px;
            }
          }
          span.bar{
            padding:0;
            color:#c2c2c2;
          }
        }
      }
      dd{
        display:flex;
        flex-direction: column;
        gap:10px;
      }
      .goods{
        display:flex;
        align-items: center;
        padding:12px;
        border:1px solid #e2e2e2;
        border-radius:12px;

        .goods-info{
          display:flex;
          flex-direction: column;
          flex:1;
          margin-right:10px;
          
          .icons{
            display:flex;
            label{
              display:flex;
              align-items: center;
              justify-content: center;
              font-size:11px;
              color:#D20A61
            }
          }
          span.icon{
            width:100px;
            padding:0 8px;
            background:#D20A61;
            color:#fff;
          }
          span.goods-name{
            font-size:14px;
            display:flex;
            align-items: center;
            
            .v-btn{
              width:20px;
              height:20px;
              padding:0px;
              .v-icon{
                font-size:16px;
                color:#D20A61;
              }
            }
          }

          span.goods-sub{
            font-size:11px;
            margin-top:5px;
            color:#898989;
          }

          span.sub{
            font-size:11px;
            color:#888;
            margin-top:3px;
          }
        }
        .goods-price{
          margin-right:15px;
          text-align:right;

          .sale{
            display:flex;
            align-items: center;
            text-align:left;
            margin-bottom:3px;

            label{
              font-size:11px;
              margin-right:5px;
              color:#D20A61;
              line-height:1;
            }

            span{
              font-size:11px;
              color:#797979;
              line-height:1.2;
              text-decoration:line-through;
              display:block;
            }
          }

          strong{
            display:block;
            line-height:1.2;
            font-size:16px;
          }
        
        }
        .goods-btns{
          .v-btn{
            width:26px;
            height:26px;
            border:1px solid #e2e2e2;
            .v-icon{
              font-size:18px;
            }
          }

          .add{
            border:2px solid #292929;
            .v-icon{
              color:#292929;
            }
          }
        }
      }
    }

    
  }

  .bottom{
    position: fixed;
    width:100%;
    padding:10px 20px;
    bottom:0px;
    border-top:1px solid #e2e2e2;
    z-index:2;
    background:#fff;


    .btns{
      display:Flex;
      align-items: center;
      .v-btn{
        height:50px;
        background:#fff;
        border-radius:8px;
        font-size:16px;
      }

      .v-btn.basket{
        border:1px solid #c2c2c2;
       
        margin-right:6px;
        .badge{
          display:flex;
          justify-content: center;
          align-items: center;
          width:18px;
          height:18px;
          border-radius:100px;
          background:#D20A61;
          color:#fff;
          font-size:10px;
          margin-left:5px;
        }
      }

      .v-btn.next{
        background:#0090ff;

        label{
          color:#fff
        }

        .v-icon{
          color:#fff;
          font-size:18px;
          margin-left:5px;
        }
      }
      
      .v-btn:last-child{
        border-right:0;
      }

      .basket{
        flex:1;
      }

      .next{
        flex:2;
      }
    }

    
  }
}

.v-window{
  overflow:initial
}
</style>
