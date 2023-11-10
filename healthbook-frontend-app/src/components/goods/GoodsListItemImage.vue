<template>
  <div class="goods__table-item-image-outer">
    <!-- GoodsListItemImage -->
    <img :src="imageUrl" alt="" />
  </div>
</template>

<script>
export default {
  name: "GoodsListItemImage",

  props: {
    imageName: {
      type: String,
      default: "good_cap.jpg", // omega-3-35.jpg
    },
  },

  computed: {
    imageUrl() {
      // omega-3-35.jpg
      // omega-3-35.jpg
      return "images/goods/" + this.imageName;
    },
  },
};
</script>

<style lang="scss" scoped>
.goods__table-item-image-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 42px;
  max-height: 42px;

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
