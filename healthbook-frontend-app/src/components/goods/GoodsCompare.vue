<template>
  <div>
    <!-- <div class="goods__compare compare grid">
      <div class="compare__cap">1</div>
      <div class="compare__goods">2</div>
      <div class="compare__spec-names">3</div>
      <div class="compare__spec-values">4</div>
    </div> -->

    <div class="compare-header">
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <!-- HEADER -->
        <template v-slot:header>
          <v-toolbar dark color="blue darken-3" class="mb-1">
            <!-- <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            >
            </v-text-field> -->
            <!-- select -->
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-magnify"
                label="Sort by"
              ></v-select>
              <v-spacer></v-spacer>
              <!-- buttons Up, Down -->
              <v-btn-toggle v-model="sortDesc" mandatory>
                <v-btn large depressed color="blue" :value="false">
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn large depressed color="blue" :value="true">
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>
      </v-data-iterator>
    </div>
    <!-- asd -->
    <div class="goods__compare compare grid">
      <div class="compare__cap">1</div>
      <!-- 2 -->
      <div class="compare__goods">
        <!-- 2 -->
        <v-data-iterator
          :items="compareItems"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                lg="4"
              >
                <div class="compare__goods-item">
                  <div class="compare__goods-item-image">
                    <img src="/images/goods/vitrum-plus.webp" alt="" />
                  </div>
                  <div class="compare__goods-item-title">{{ item.name }}</div>
                  <div class="compare__goods-item-remove">
                    <!-- remove -->
                    <v-icon __large small color="gray __darken-2">
                      mdi-close
                    </v-icon>
                  </div>
                </div>
                <!-- <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    {{ item.name }}
                  </v-card-title>

                  <v-divider></v-divider>
                </v-card> -->
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </div>
      <!-- 3 -->
      <div class="compare__spec-names">
        <!-- 3 -->

        <v-card>
          <v-card-title class="__subheading font-weight-regular">
            Components:
          </v-card-title>

          <v-divider></v-divider>
          <!-- v-list -->
          <!-- <v-list dense>
            <v-list-item v-for="(key, index) in filteredKeys" :key="index">
              <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                {{ key }}:
              </v-list-item-content>
            </v-list-item>
          </v-list> -->
          <!-- v-simple-table -->
          <v-simple-table>
            <tbody>
              <tr v-for="(key, index) in compareKeys" :key="index">
                <td>
                  <!-- {{ key  }} -->
                  {{ formatCompositionItemTitle(key) }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </div>
      <!-- 4 -->
      <div class="compare__spec-values">
        <v-data-iterator
          :items="compareItems"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
          hide-default-footer
          __:group-by="groupBy"
        >
          <template v-slot:default="props">
            <v-row no-gutters>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                lg="4"
              >
                <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    <!-- {{ item.name }} -->
                    {{ "&nbsp;" }}
                  </v-card-title>

                  <v-divider></v-divider>

                  <!-- <v-list dense>
                    <v-list-item
                      v-for="(key, index) in filteredKeys"
                      :key="index"
                    >
                      <v-list-item-content
                        :class="{ 'blue--text': sortBy === key }"
                      >
                        {{ key }}:
                      </v-list-item-content>
                      <v-list-item-content
                        class="align-end"
                        :class="{ 'blue--text': sortBy === key }"
                      >
                        {{ item[key.toLowerCase()] }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list> -->
                  <!-- <v-simple-table> -->
                  <v-simple-table>
                    <tbody>
                      <tr v-for="(key, index) in compareKeys" :key="index">
                        <td
                          :class="{
                            'green--text font-weight-regular': sortBy === key,
                          }"
                        >
                          <!-- {{ key }} -->
                          <!-- {{ item[key.toLowerCase()] }} // - -->
                          <!-- {{ item[key] }} // + -->
                          <!-- {{
                            item[key]["value"] // - can't get value, when item[key] is undefined
                          }} -->
                          {{ getCompositionItemValue(item, key) }}
                        </td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </div>
    </div>
  </div>
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
      keys: [
        "Name",
        "Calories",
        "Fat",
        "Carbs",
        "Protein",
        "Sodium",
        "Calcium",
        "Iron",
      ],

      // - Нет, так не работает
      //   keys: [
      //     ["Name", "Calories", "Fat", "Carbs"],
      //     ["Protein", "Sodium", "Calcium", "Iron"],
      //   ],

      items: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          //   sodium: 87,
          calcium: "14%",
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%",
        },
      ],
    };
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
    // v-data-iterator End

    // goods() {
    //   return this.$store.state.goods.goods;
    // },

    // __goods() {
    //   // v.1
    //   //   return this.$store.getters.getProductsCompare;
    //   // v.2 Сразу обрабатываем названия витаминов в composition
    //   let goods = this.$store.getters.getProductsCompare;
    //   return this.fixComposiotionTitles(goods);
    // },

    goods() {
      let goods = this.$store.getters.getProductsCompare;

      if (goods[0] == undefined) {
        return goods;
      } else {
        return this.fixComposiotionTitles(goods);
        // return goods; // +
      }
    },

    compareKeys() {
      // return makeCompareKeys()
      return this.collectCompareKeys(this.goods);
    },
    compareItems() {
      return this.collectCompareItems(this.goods);
    },
  },

  methods: {
    // v-data-iterator Start
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    //v-data-iterator End
    __dev__collectCompareKeys(goods) {
      if (!goods[0]) {
        return;
      }
      //   let itemSpec = item.composition[itemSpec];
      // 1. перебираем goods,
      // 2. в них перебираем все props (хотя кажется в js есть св=ва копирующие ключи)
      // v.1 перебрать все for'ом
      // v.2 object keys, map, set?
      // v.3 исп-ть set чтобы удалить повторы из keys)
      //
      let keys = [];
      //   debugger; // +

      for (let i = 0; i < goods.length; i++) {
        // const element = array[i];
        let itemCompsArr = Object.keys(goods[i]["composition"]);
        // keys.concat(itemCompsArr); // - 0
        // keys = itemCompsArr; // +- last element
        // keys  = items.splice(startIndex, deleteCount, item);
        // keys  = items.slice(beginIndex, endIndex);
        // keys = [...keys, ...itemCompsArr]; // +- 46
        keys = keys.concat(itemCompsArr); // + 38  - оказывается что надо обработаь еще и словарем :-/

        // debugger;
      }
      // .. Удаление дблей через Set)
      //   let chars = ["A", "B", "A", "C", "B"];
      //   let uniqueChars = [...new Set(chars)];

      let uniqueKeys = [...new Set(keys)];

      //   return keys;
      return uniqueKeys;
    },
    collectCompareKeys(goods) {
      if (!goods[0]) {
        return;
      }

      let keys = [];
      //   debugger; // +

      for (let i = 0; i < goods.length; i++) {
        let itemCompsArr = Object.keys(goods[i]["composition"]);

        keys = keys.concat(itemCompsArr); // + 38  - оказывается что надо обработаь еще и словарем :-/
        // debugger;
      }

      // .. Удаление дублей через Set)
      let uniqueKeys = [...new Set(keys)];

      //   return keys;
      return uniqueKeys;
    },
    collectCompareItems(goods) {
      if (!goods[0]) {
        return;
      }

      let compareItems = [];

      goods.forEach((element, index) => {
        compareItems.push(element["composition"]);
        // element.name = goods.
        compareItems[index]["name"] = element["name"];
      });

      return compareItems;
    },

    getCompositionItemValue(item, key) {
      // item[key]["value"]
      let compositionItem = item[key];

      if (!compositionItem) {
        return;
      }
      return compositionItem["value"];
    },

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
    //
    replaceAlphabetChars(str) {
      // str  // Витамин В2

      //   const codes = [
      //     // "А",
      //     { В1: "B1" },
      //     { В2: "B2" },
      //     { В3: "B3" },
      //     { В4: "B4" },
      //     { В5: "B5" },
      //     { В6: "B6" },
      //     { В7: "B7" },
      //     { В8: "B8" },
      //     { В9: "B9" },
      //     { В10: "B10" },
      //     { В11: "B11" },
      //     { В12: "B12" },
      //     // "С",
      //     // "Е",
      //     // "Витамин E", // +
      //     // "РР",// +
      //     // "К1" // +
      //   ];

      const codesObj = {
        В1: "B1",
        В2: "B2",
        В3: "B3",
        В4: "B4",
        В5: "B5",
        В6: "B6",
        В7: "B7",
        В8: "B8",
        В9: "B9",
        В10: "B10",
        В11: "B11",
        В12: "B12",
      };

      // перебрать codes
      // для каждого ключа проверить есть ли подстрока в str
      // если есть - заменить

      //   codes.forEach((element) => {});

      for (const key in codesObj) {
        // if (Object.hasOwnProperty.call(object, , value)) {
        //     const element = object[, value];
        // }
        const value = codesObj[key];

        if (str.includes(key)) {
          str = str.replace(key, value);
        }
      }

      //   console.log(codes);
      return str;
    },

    fixComposiotionTitles(goods) {
      if (!goods[0]) {
        return;
      }

      //   let compareItems = [];

      //   goods.forEach((element, index) => {
      //     compareItems.push(element["composition"]);
      //     // element.name = goods.
      //     compareItems[index]["name"] = element["name"];
      //   });

      //   return compareItems;

      // перебрали массив , в кадом замениил composition
      //   goods.forEach((element, index) => {
      goods.forEach((element) => {
        //   compareItems.push(element["composition"]);
        //   // element.name = goods.
        //   compareItems[index]["name"] = element["name"];

        let compositionObj = element["composition"];
        // let newCompositionObj = {};

        for (const key in compositionObj) {
          // if (Object.hasOwnProperty.call(object, key)) {
          //     const element = object[key];
          // }
          // key - is Title
          //   compositionObj[]
          let newKey = this.formatCompositionItemTitle(key);
          compositionObj[newKey] = compositionObj[key];
          //   key;
          delete compositionObj[key];
        }

        // заменили само св-ва composition
        element["composition"] = compositionObj;
      });
      //   debugger;

      //

      return goods;
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
