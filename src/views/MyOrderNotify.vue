<template>
  <div class="myOrderNotify">
    <div class="no-item">
      <span>전달받은 메세지가 없습니다.</span>
    </div>
    <div class="notify-item">
      <div class="slides">
        <div class="img-box" v-for="item in 3" :key="item">
          <img src="https://picsum.photos/400/300">
        </div>
      </div>
      <div class="text">
        <p>검수 중에 와이셔츠에서 심각한 오염을 발견하였습니다 오염을 제거하기 위해 추가 세탁이 필요합니다. 검수 중에 와이셔츠에서 심각한 오염을 발견하였습니다 오염을 제거하기 위해 추가 
세탁이 필요합니다.</p>
        <span>2022.03.11 12:15</span>
      </div>
    </div>

    <div class="notify-item">
      <div class="text">
        <p>검수 중에 와이셔츠에서 심각한 오염을 발견하였습니다 오염을 제거하기 위해 추가 세탁이 필요합니다. 
세탁이 필요합니다.</p>
        <span>2022.03.10 15:23</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.myOrderNotify{
  .no-item{
    padding:20px;
    span{
      display:block;
      text-align:center;
      width:100%;
      padding:10px;
      background:#f2f2f2;
      border-radius:5px;
    }
  }
  .notify-item{
    border-bottom:1px solid #e2e2e2;
    .slides{
      display:flex;
      overflow-x:auto;
      align-items: center;
      padding-left:20px;

      &::-webkit-scrollbar{
        display:none;
      }
    
      .img-box{
        display:flex;
        align-items: center;
        justify-content: center;
        flex:none;
        width:300px;
        height:225px;
        margin-right:10px;
        border-radius:5px;
        overflow:hidden;
        img{
          display:block;
          width:100%
        }
      }
    }
    .text{
      padding:20px;
      p{
        margin-bottom:10px;
      }
      span{
        color:#898989;
      }
    }
    
  }
}
</style>