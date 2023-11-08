<template>
  <div>
    GoodsListItemType
    <span class="goods__table-item-type-icon orange"> V </span>
    <span class="goods__table-item-type-icon blue"> M </span>
    <span class="goods__table-item-type-icon green"> N </span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItemType",

  props: {
    type: {
      type: Number, // 1 || 2 || 12
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
