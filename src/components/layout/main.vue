<template>
  <v-app>
    <div class="main">
      <router-view />

      <BottomNavigation />
    </div>
  </v-app>
</template>

<script>
import BottomNavigation from '@/components/bottomNavigation.vue'

export default {
  components:{
    BottomNavigation
  },
}
</script>

<style lang="scss" scoped>

.main{
  padding-bottom:70px;
}

</style>