<template>
  <div class="receipt">
    <div class="inner">
      <div class="logo">
        <img src="@/assets/img/logo.svg">
        <span>데일리세탁</span>
      </div>
      <div class="cont">
        <dl>
          <dt>주문번호</dt>
          <dd>5D0IFK-FA2H</dd>
        </dl>

        <div class="divider bold" />

        <h4>세탁 안내사항</h4>
        <div class="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic inventore illo, sunt, aspernatur porro itaque, voluptate in rerum natus ipsum temporibus debitis esse error eos accusantium laboriosam. Eum, quis?
        </div>
        <div class="photos">
          <v-row>
            <v-col cols="3" v-for="item in 5" :key="item" >
              <div class="photo" v-ripple @click="$refs.imageView.handle(true)" >
                <img src="https://picsum.photos/200/300">
              </div>
            </v-col>
          </v-row>
        </div>   
    
        <div class="divider" />

        <dl>
          <dt>세탁업체</dt>
          <dd>월드크리닝(덕포지사)</dd>
        </dl>
        <dl>
          <dt>전화번호</dt>
          <dd>051-123-1234</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>부산광역시 사상구 덕상로 1 (덕포동) 월드크리닝 덕포지사</dd>
        </dl>
        <dl>
          <dt>사업자번호</dt>
          <dd>599-81-00659</dd>
        </dl>
        <dl>
          <dt>통신판매업</dt>
          <dd>2021-부산강서구-0877</dd>
        </dl>
      </div>
    </div>

    <ImageView ref="imageView"/>
  </div>
</template>

<script>

import ImageView from '@/components/modal/imageView'
export default {
  components:{
    ImageView
  },
}
</script>

<style lang="scss" scoped>
.receipt{
  padding:15px;
  background:#f2f2f2;
  min-height:100%;

  .inner{
    background:#fff;
    padding:20px;
    padding-bottom:60px;
    border-radius:5px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  }

  .logo{
    padding:30px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      height:60px;
    }

    span{
      margin-top:10px;
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:20px 0;

    &.bold{
      background:#292929;
    }
  }

  dl{
    display:flex;
    justify-content: space-between;
    margin-bottom:10px;
    dt{
      width:100px;
      color:#898989;
    }
    dd{
      text-align:right;
      flex:1;
    }

    &:last-child{
      margin-bottom:0px;
    }
  }

  h4{
    margin-bottom:15px;
    font-weight:bold;
  }

  .message{
    margin-bottom:20px;
    background:#f2f2f2;
    border-radius:4px;
    padding:15px;
  }

  .photos{
    .row{
      margin:-5px;
      .col{
        padding:5px;
      }
    }
    .photo{
      display:flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow:hidden;
      border-radius:4px;
      height:100%;
      border:1px solid #e2e2e2;

      img{
        position: absolute;
        width:100%;
      }

      &:after{
        display:block;
        content:'';
        padding-bottom:100%;
      }
    }
  }


  .btns{
    text-align:center;
    margin:40px 0 20px 0;
    .v-btn{
      border:1px solid #292929;
      height:45px;
      border-radius:25px;
      padding:0px;
      width:150px;
      font-size:14px;
    }
  }
 
}
</style>