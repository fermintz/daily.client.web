<template>
  <v-dialog
    v-model="visible"
  >
    <div class="termsView">
      <div class="modal-head">
        <h2>서비스정책</h2>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium delectus distinctio fugit, cum odio illo, consectetur aut qui rem officia similique accusamus id possimus dolore vero, dolorum quo aliquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium delectus distinctio fugit, cum odio illo, consectetur aut qui rem officia similique accusamus id possimus dolore vero, dolorum quo aliquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium delectus distinctio fugit, cum odio illo, consectetur aut qui rem officia similique accusamus id possimus dolore vero, dolorum quo aliquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium delectus distinctio fugit, cum odio illo, consectetur aut qui rem officia similique accusamus id possimus dolore vero, dolorum quo aliquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium delectus distinctio fugit, cum odio illo, consectetur aut qui rem officia similique accusamus id possimus dolore vero, dolorum quo aliquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium delectus distinctio fugit, cum odio illo, consectetur aut qui rem officia similique accusamus id possimus dolore vero, dolorum quo aliquam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium delectus distinctio fugit, cum odio illo, consectetur aut qui rem officia similique accusamus id possimus dolore vero, dolorum quo aliquam!
      </div>
    </div>
  </v-dialog>
</template>

<script>

export default {
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    handle(value){
      this.visible = value;
    },
  }
}
</script>

<style lang="scss" scoped>

.termsView{
  background:#fff;

   .modal-head{
    position: sticky;
    top:0px;
    width:100%;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    padding:0 15px;
    height:50px;
    z-index:10;

    h2{
      font-size:16px;
    }
  }

  .modal-cont{
    padding:20px;
  }

}

</style>
