<template>
  <div>
    GoodsList

    <h1 class="page-title">Goods</h1>
    <p class="page-subtitle">All goods that we use to care about our health.</p>

    <div class="goods-toolbar toolbar goods__toolbar">
      <v-row>
        <v-col lg="6">
          <div class="goods__search search">Search</div>
        </v-col>
        <v-col lg="3" offset-lg="3">
          <div class="goods__add">button Add</div>
        </v-col>
      </v-row>
    </div>

    <div class="goods__list">
      <GoodsTable :goods="goods" class="goods__table"> </GoodsTable>
      <!-- <table class="">
        <tr>
          <td>123</td>
        </tr>
      </table> -->
    </div>
  </div>
</template>

<script>
import GoodsTable from "@/components/goods/GoodsTable.vue";

export default {
  name: "GoodsList",
  components: {
    GoodsTable,
  },

  props: {
    goods: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
