<template>
  <v-snackbar
    v-model="visible"
    :timeout="timeout"
    rounded="pill"
    width="auto"
  >
    <v-icon class="mr-2" size="18">
      mdi-basket-plus-outline
    </v-icon>
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props:[
    'text'
  ],

  data(){
    return{
      visible:false,
      timeout:1000,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
  
}
</script>

<style lang="scss" scoped>
.v-snackbar{
  text-align:center;

  .v-icon{margin-right:10px;}
}
</style>