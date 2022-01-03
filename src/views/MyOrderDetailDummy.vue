<template>
  <div class="MyOrderDetailDummy">
    <div class="top">
      <span>
        <v-skeleton-loader tile="true" type="text" min-width="30" max-height="15"/>
      </span>
      <strong>
        <v-skeleton-loader tile="true" type="button" max-height="24"/>
      </strong>
      
      <div class="btns">
        <v-skeleton-loader type="text" min-width="50"/>
      </div>
       
    </div>

    <div class="divider" />

    <div class="tab-head">
      <v-skeleton-loader type="text" min-width="40" max-width="40"/>
      <v-skeleton-loader type="text" min-width="40" max-width="40"/>
      <v-skeleton-loader type="text" min-width="40" max-width="40"/>
      <v-skeleton-loader type="text" min-width="40" max-width="40"/>
    </div>

    <div class="tab-content">      
 
      <ul>
        <li>
          <span><v-skeleton-loader type="text" min-width="40" max-width="100"/></span>
          <strong><v-skeleton-loader type="text" min-width="100" max-width="100"/></strong>
          <label><v-skeleton-loader type="text" min-width="40" max-width="40"/></label>
        </li>
        <li>
          <span><v-skeleton-loader type="text" min-width="40" max-width="40"/></span>
          <strong><v-skeleton-loader type="text" min-width="80"  max-width="80"/></strong>
        </li>
      </ul>

      <div class="divider-line" />

      <dl>
        <dt>
          <v-skeleton-loader type="text" max-width="50"/>
        </dt>
        <dd>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
        </dd>
      </dl>

      <div class="divider-line" />

      <dl>
        <dt>
          <v-skeleton-loader type="text" max-width="50"/>
        </dt>
        <dd>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
          <div class="item">
            <v-skeleton-loader type="text" min-width="100" max-width="100"/>
          </div>
        </dd>
      </dl>

      
      
    </div>

    
  </div>
</template>

<style lang="scss" scoped>
.head{
  width:100%;
  height:60px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .right{
    display:flex;
    align-items: center;

    span{
      margin-left:10px;
    }
  }
  .left{
    display:flex;
    align-items: center;

    span{
      margin-right:10px;
    }
  }
}


.top{
  padding:30px 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  span{
    margin-bottom:5px;
  }

  .btns{
    margin-top:30px;
  }

}

.divider{
  height:10px;
  background:#f2f2f2;
}

.tab-head{
  height:50px;
  display:flex;
  align-items: center;;
  justify-content: space-around;
  border-bottom:2px solid #e2e2e2;
}

.tab-content{
  padding:20px;

  .divider-line{
    height:1px;
    margin:30px 0;
    background:#e2e2e2;
  }

  ul{
    padding:0;
    li{
      display:flex;
      align-items: center;
      margin-bottom:10px;

      span{
        margin-right:15px;
      }
      label{
        position: absolute;
        right:20px;
      }
    }
  }

  dl{
    dt{
      margin-bottom:10px;
    }
    dd{
      .item{
        height:40px;
        background:#f8f8f8;
        margin-bottom:10px;
        border-radius:5px;
        padding:0 15px;
        display:flex;
        align-items: center;
      }
    }
  }

}
</style>