<template>
  <div>
    <!-- GoodsListItemReleaseform -->
    <!-- <v-icon small>mdi-home</v-icon> -->
    <!-- <v-icon large color="green darken-2"> mdi-domain </v-icon> -->

    <!-- <v-icon medium color="gray _darken-2"> mdi-domain </v-icon> -->
    <!-- {{ setReleaseForm(item.release_form) }} -->

    <span class="goods__table-item-release-icon">
      <i :class="setReleaseForm(releaseForm).toLocaleLowerCase()">
        <img :src="makeImagUrl(setReleaseForm(releaseForm))" alt="" />
      </i>
      {{ setReleaseForm(releaseForm) }}
      <!-- {{ setReleaseForm(releaseForm).toLocaleLowerCase() }} -->
    </span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItemReleaseform",

  props: {
    releaseForm: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    releaseForms() {
      return this.$store.state.goods.releaseForms;
    },
  },

  methods: {
    setReleaseForm(release_form) {
      //   release_form;
      return this.releaseForms[release_form];
      //   return this.releaseForms[release_form] str.toLocaleLowerCase();
    },

    makeImagUrl(iconNameStr) {
      return `../images/icons/${iconNameStr.toLowerCase()}.svg`;
    },

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
