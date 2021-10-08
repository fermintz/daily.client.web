<template>
  <div class="homeHeader">
    <div class="address_select" v-ripple @click="$router.push('myAddress')">
      <v-icon class="map_marker">mdi-map-marker</v-icon>
      <span>북구 구남언덕로 15</span>
      <v-icon class="arrow">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
  mounted(){
    this.stickyHeader()
  },
  methods:{
    stickyHeader(){
      addEventListener('scroll',()=>{
        const headerEl = document.getElementsByClassName('homeHeader')
        const selectorEl = document.getElementsByClassName('address_select')
        const headOffset = headerEl[0].offsetTop
        console.log(headerEl[0].classList)
        console.log(selectorEl[0].classList)
        if(headOffset > 10){
          headerEl[0].classList.add('active')
        }else{
          headerEl[0].classList.remove('active')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.homeHeader{
  position: sticky;
  top:0px;
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:80px;
  background:#fff;
  z-index:10;
  padding:0 15px;
  transition:height 0.8s;

  .address_select{
    width:100%;
    display:flex;
    align-items: center;
    height:36px;
    padding:0 15px;
    background:#f2f2f2;
    border-radius:18px;

    .map_marker{
      margin-right:5px;
      font-size:18px;
    }
    span{
      flex:1;
      font-size:14px;
    }
    .arrow{
      font-size:18px;
      margin-left:30px;
    }
  }
}

.homeHeader.active{
    height:50px;
    transition:height 0.8s;
    border-bottom:1px solid #e2e2e2;
    
  .address_select{
    background:#fff;
  }
}
</style>