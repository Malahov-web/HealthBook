<template>
  <div>
    GoodsTable

    <template>
      <v-data-table
        :headers="headers"
        :items="goods"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </template>
  </div>
</template>

<script>
export default {
  name: "GoodsTable",

  props: {
    goods: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "Brand", value: "brand" },
        { text: "Type", value: "type" },
        { text: "Form ", value: "release_form" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
