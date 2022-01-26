<template>
  <v-dialog v-model="visible">
    <div class="imageView" @click="visible = false">
      <img src="https://source.unsplash.com/random" />
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handle(value) {
      this.visible = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-dialog{
  border-radius:10px;
}
.imageView {
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
}
</style>
