<template>
  <div>
    <!-- GoodsTable -->

    <template>
      <v-data-table
        :headers="headers"
        :items="goods"
        :search="search"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        class="elevation-1"
        hide-default-footer
        @page-count="pageCount = $event"
      >
        <template v-slot:item.image_url="{ item }">
          <GoodsListItemImage class="asd" :imageName="item.image_url">
          </GoodsListItemImage>
        </template>

        <template v-slot:item.type="{ item }">
          <GoodsListItemType class="asd" :type="item.type"> </GoodsListItemType>
        </template>

        <template v-slot:item.release_form="{ item }">
          <!-- <v-chip :color="setReleaseForm(item.release_form)" dark>
            {{ setReleaseForm(item.release_form) }}
          </v-chip> -->

          <GoodsListItemReleaseform
            class="asd"
            :releaseForm="item.release_form"
          ></GoodsListItemReleaseform>
        </template>
      </v-data-table>
    </template>

    <div class="mt-12">
      <v-pagination
        v-model="page"
        color="green"
        :length="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import GoodsListItemReleaseform from "@/components/goods/GoodsListItemReleaseform.vue";
import GoodsListItemType from "@/components/goods/GoodsListItemType.vue";
import GoodsListItemImage from "@/components/goods/GoodsListItemImage.vue";

export default {
  name: "GoodsTable",

  components: {
    GoodsListItemReleaseform,
    GoodsListItemType,
    GoodsListItemImage,
  },

  props: {
    goods: {
      type: Array,
      default: () => {
        return [];
      },
    },

    search: {
      type: String,
      default: "",
    },
  },

  coursesTypes: {
    type: Array,
    default: () => {
      return [];
    },
  },

  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10, // 3,

      headers: [
        {
          //   text: "Image",
          text: "",
          //   align: "start",
          sortable: false,
          value: "image_url",
        },
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

  methods: {
    // +
    // setReleaseForm(calories) {
    //   if (calories > 2) return "red";
    //   else if (calories > 1) return "orange";
    //   else return "green";
    // },
  },
};
</script>

<style lang="scss" scoped></style>
