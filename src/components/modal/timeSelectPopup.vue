<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal" @click="visible = false">
      <img src="/img/timeSelect.png"/>

      <v-btn icon @click.stop="visible = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  }
}
</script>

<style lang="scss" scoped>

.modal{
  position: relative;
  overflow:hidden;
  border-radius:25px;
  img{
    display:block;
    width:100%;
  }

  .v-btn{
    background:#292929;
    position: absolute;
    top:10px;
    right:10px;
    z-index:2;

    .v-icon{
      color:#fff;
    }
  }
}
</style>