<template>
  <v-app>
    <div class="sub">
      <div class="subHead">
        <div class="back">
          <v-btn icon @click="$router.go(-1)">
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </div>
      </div>
      
      <router-view />
      
    </div>
  </v-app>
</template>

<style lang="scss" scoped>

.sub{
  .subHead{
    position:sticky;
    top:0px;
    width:100%;
    height:70px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background:#fff;
    z-index:10;

    .back{
      display:flex;
      justify-content: center;
      align-items: center;
      width:70px;
      height:70px;

      .v-btn{
        width:50px;
        height:50px;
      }
    }
  }
}

</style>