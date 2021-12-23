<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="drag_bottom_sheet">
      <div class="sheet">
        <div class="top_handle">
          <span></span>
        </div>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      touchStartY: 0,
      topStopPos: 50,
      midStopPos: 430,
    }
  },
  mounted(){
    this.dragset()
  },
  methods:{
    dragset(){
      const topHandle = document.querySelector('.top_handle') 
      const sheet = document.querySelector('.sheet')

      console.log(topHandle)

      topHandle.addEventListener('touchstart',(e)=>{
        // console.log(e.changedTouches[0].clientY, '터치시작')
        this.touchStartY = e.changedTouches[0].clientY;
      })
      topHandle.addEventListener('touchmove',(e)=>{
        sheet.style.transition = 'all 0s';
        sheet.style.top = e.targetTouches[0].clientY + 'px'
      })
      topHandle.addEventListener('touchend',(e)=>{
        console.log(e.changedTouches[0].clientY, document.body.clientHeight)
        if(e.changedTouches[0].clientY >= document.body.clientHeight * 0.9) {
          this.visible = false;
          return;
        }

        const topGap = Math.abs(e.changedTouches[0].clientY - 150);
        const middleGap = Math.abs(e.changedTouches[0].clientY - 430);

        sheet.style.transition = 'all 0.35s';
        if(topGap < middleGap) {
          sheet.style.top = 50 + 'px'
        } else {
          sheet.style.top = 430 + 'px'
        }

      })
    }
  },

}

</script>

<style lang="scss" scoped>
.drag_bottom_sheet{
  height:100%;
  background:rgba(0,0,0,0.2);
  .sheet{
    position: absolute;
    top:40%;
    width:100%;
    min-height:100%;
    background:#fff;
    border-radius:24px 24px 0 0 ;
    /* transition: all 0.2s; */

    .top_handle{
      width:100%;
      display:flex;
      align-items: center;
      justify-content: center;
      height:25px;

      span{
        display:block;  
        background:#e2e2e2;
        width:80px;
        height:6px;
        border-radius:3px;
      }
    }
  }
}
</style>

