<template>
  <div class="GoodsCompare">GoodsCompare</div>
</template>

<script>
export default {
  name: "GoodsCompare",

  created() {},

  data() {
    return {
      //   itemsPerPage: 4,

      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 3, //4,
      sortBy: "name",
      // group-by
      //   groupBy: "fat", //  "calories", "fat",
      //
    };
  },

  computed: {
    defaultGoods() {
      return this.$store.getters.getProductsCompare;
    },

    goods() {
      if (this.defaultGoods[0] == undefined) {
        return this.defaultGoods;
      } else {
        return this.fixComposiotionTitles(this.defaultGoods);
        // return goods; // +
        // return this.defaultGoods; // проверяем без ф-и()
      }
    },
  },

  methods: {
    // fixComposiotionTitles(defaultGoods) {
    //   return defaultGoods;
    // },

    fixComposiotionTitles(goods) {
      if (!goods[0]) {
        return;
      }

      // перебрали массив , в кадом замениил composition
      goods.forEach((element) => {
        let compositionObj = element["composition"];
        let newCompositionObj = {};

        for (const key in compositionObj) {
          let newKey = this.formatCompositionItemTitle(key);
          //   debugger;
          //   let newKey = compositionObj.key["name"];
          newCompositionObj[newKey] = compositionObj[key];
          delete compositionObj[key];
        }

        // заменили само св-ва composition
        // element["composition"] = compositionObj;
        element["composition"] = newCompositionObj;
      });
      //   debugger;

      //

      return goods;
    },

    // formatCompositionItemTitle(key) {
    //   return key;
    // },

    formatCompositionItemTitle(title) {
      // const
      //         {
      //   "Витамин D3": "Холекальциферол"
      // }
      let newTitle;
      // 1. Удалить все что в скобках и после скобок
      let bracketPos = title.indexOf("(");
      if (bracketPos == -1) {
        bracketPos = title.length;
      }
      newTitle = title.slice(0, bracketPos);

      // 2. Удалить после запятой (кроме букв названий витаминов?? бывает и такое)
      let commaPos = newTitle.indexOf(",");
      if (commaPos == -1) {
        commaPos = newTitle.length;
      }
      newTitle = newTitle.slice(0, commaPos);

      // 3. Заменить кирилицу на латиницу в определенных сочетаниях (шифрах витаминов)
      newTitle = this.replaceAlphabetChars(newTitle);

      return newTitle;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card__title {
  word-wrap: none;
  white-space: nowrap; /* Запрещаем перенос слов */

  //
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-sheet.v-card {
  box-shadow: none;
}
</style>
