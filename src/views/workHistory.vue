<template>
  <div class="work-history">    
    <div class="history-list">
      <ul>
        <li class="user">
          <div class="cont">
            세탁예약을 완료했어요!
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="user">
          <div class="cont">
            수선부탁드려요, 바지 밑단을 잘라주세요! 꺠끗하게 부탁드려요! 티나지 않게! 
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="cont">
            세탁물수거를 시작하였습니다.
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="cont">
            세탁물수거를 완료하였습니다.
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="image" @click="$refs.imageView.handle(true)">
            <img src="https://source.unsplash.com/random">
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="cont">
            <div class="add-payment">
              <h4>추가결제요청</h4>
              <p>맡기신 코트에 오염정도가 심해 추가 세탁이 필요합니다</p>
              <span>5,900 원</span>
            </div>
          </div>
          <div class="date">오늘 12:34</div>
        </li>
      </ul>
    </div>

    <ImageView ref="imageView" />
  </div>
</template>

<script>
import ImageView from '@/components/modal/imageView'

export default {
  components:{
    ImageView
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.work-history{
  max-height:900px;
  overflow-y:auto;

  .history-list{
    padding:20px;

    ul{
      padding:0;
      li{
        display:flex;
        align-items: flex-end;
        margin-bottom:15px;

        .image{
          max-width:70%;
          overflow:hidden;
          img{width:100%;display:block;}
        }
        .cont{
          padding:12px;
          font-size:13px;
        }

        .add-payment{
          h4{font-size:14px;}
          p{margin:0px;margin-top:5px;color:#888;}
          span{
            margin-top:10px;
            display:block;
            text-align:right;
            font-size:14px;
            font-weight:bold;
          }
          .v-btn{
            width:100%;
            background:#292929;
            color:#fff;
            margin-top:10px;
            font-size:14px;
            height:46px;
          }
        }

        .date{
          font-size:10px;
          color:#888;
          width:100px;
        }
      }

      li.user{
        flex-direction: row-reverse;
        .image{
          border-radius:10px 0px 10px 10px;
        }
        .cont{
          background:#FBEFF4;
          border-radius:10px 0 10px 10px;
        }
        .date{text-align:right;margin-right:5px;}
      }
      li.system{
        .image{
          border-radius:0px 10px 10px 10px;
        }
        .cont{
          background:#F2F3F8;
          border-radius:0 10px 10px 10px;
        }
        .date{margin-left:5px;}
      }
    }
  }
}

.work-history::-webkit-scrollbar{
  width:2px;
}
.work-history::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
.work-history::-webkit-scrollbar-thumb{
  background-color:#2C9CD4;
}
</style>