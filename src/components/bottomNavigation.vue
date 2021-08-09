<template>
  <v-bottom-navigation
    fixed
    value="value"
    color="#0CA0E2"
    app
  >
    <v-btn @click="$router.push('myOrder')">
      <v-icon>mdi-text-box-outline</v-icon>
    </v-btn>
    <v-btn  @click="$router.push('/')">
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn  @click="$router.push('mypage')">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data(){
    return{
      value:1,
    }
  }
}
</script>