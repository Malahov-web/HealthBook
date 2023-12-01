<template>
  <div>
    GoodsAdd

    <h1 class="page-title">Add Good</h1>
    <div class="page-subtitle">Add data to fields in form below</div>

    <!-- <div class="goods-toolbar toolbar goods__toolbar">

    </div> -->

    <div class="goods-form goods__form form">
      <!-- row 1 -->
      <v-row>
        <v-col __class="" lg="6">
          <div class="form-field mb-10">
            <!-- Title -->
            <v-text-field
              label="Title"
              __outlined
              __dense
              filled
              hide-details
              color="green"
              v-model="titleActive"
            ></v-text-field>
            <!-- @input="onInput" -->
          </div>

          <div class="form-field mb-10">
            <!-- Brand -->
            <!-- <v-text-field
              label="Brand"
              __outlined
              __dense
              filled
              hide-details
              color="green"
              v-model="inputText"
              @input="onInput"
            ></v-text-field> -->

            <v-autocomplete
              label="Brand"
              v-model="brandActive"
              :items="brands"
              item-text="title"
              item-value="id"
              __dense
              filled
            ></v-autocomplete>
          </div>
        </v-col>
      </v-row>

      <!-- row 2 -->
      <v-row>
        <v-col lg="6">
          <div class="form-field-title">Type:</div>
          <div class="form-field">
            <v-checkbox
              v-for="item in coursesTypes"
              :key="item.id"
              v-model="typeActive"
              :label="item.name"
              :value="item.id"
              :color="typesColors[item.id]"
              hide-details
            ></v-checkbox>

            <!-- Static -->
            <!-- <v-checkbox
              v-model="ex4"
              label="Vitamins"
              value="Vitamins"
              color="orange"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Minerals"
              value="Minerals"
              color="blue"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Nutrients"
              value="Nutrients"
              color="green"
              hide-details
            ></v-checkbox> -->
          </div>
        </v-col>

        <v-col lg="6">
          <div class="form-field-title">Form release:</div>
          <div class="form-field">
            <v-radio-group v-model="releaseFormsActive">
              <!-- <v-radio
                v-for="n in 3"
                :key="n"
                :label="`Radio ${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group> -->

              <v-radio
                v-for="(item, key) in releaseForms"
                :key="item"
                :label="item"
                :value="key"
                color="green"
              ></v-radio>
            </v-radio-group>
          </div>
        </v-col>
      </v-row>

      <!-- row 3 -->
      <v-row>
        <v-col __class="" lg="9">
          <div class="form-field-title">Composition:</div>
          <div class="form-field mb-10 mt-4">
            <!-- Composition -->
            <v-textarea
              filled
              name="textarea-composition"
              label="Composition"
              value=""
              v-model="compositionActive"
              hide-details=""
            ></v-textarea>
          </div>
        </v-col>
      </v-row>

      <!-- row 4 -->
      <v-row class="">
        <v-col lg="2">
          <!-- button Add -->
          <v-btn
            color="green"
            x-large
            block
            __outlined
            dark
            @click="createItem"
          >
            Add
          </v-btn>
          <!-- Контейнер для обрабатывемой таблицы -->
          <div
            class="composition__table"
            id="compositionTableOuter"
            _v-html="compositionTableHtml"
            __v-html="compositionTableHtmlStr"
            v-html="compositionTableHtmlCleaned"
            v-if="1"
            ref="compositionTableOuter"
          ></div>
        </v-col>
      </v-row>
    </div>

    <div class="goods__list mt-12">
      <!-- <v-data-table :headers="headers" :items="goods" class="elevation-1">
        <template v-slot:item.composition="{ item }">

          <div dark>
            {{ makeComposition(item.composition) }}
          </div>
        </template>
      </v-data-table> -->
    </div>
  </div>
</template>

<script>
import GoodsServices from "@/services/GoodsServices.js";

export default {
  name: "GoodsAdd",

  props: {
    brands: {
      type: Array,
      default: () => {
        return [];
      },
    },
    coursesTypes: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {
      // for goods list
      headers: [
        { text: "ID", value: "id" },
        { text: "title", value: "title", align: "start" },
        { text: "name", value: "name" },
        { text: "description", value: "description" },
        { text: "composition", value: "composition" },
        // {
        //   text: "Dessert (100g serving)",

        //   sortable: false,
        //   value: "name",
        // },
        // { text: "Calories", value: "calories" },
        // { text: "Fat (g)", value: "fat" },
      ],
      //
      item: {},

      titleActive: "",
      //   typeActive: 0,
      typeActive: [],

      brandActive: null,

      releaseFormsActive: null,

      compositionActive: "",

      compositionTableHtml: `
<table>
		<tbody>
		<tr>
			<th align="center">
				 Активный компонент
			</th>
			<th align="center">
				 Содержание в&nbsp;суточной норме потребления (1&nbsp;таблетка, покрытая оболочкой, массой 1400&nbsp;мг)
			</th>
			<th align="center">
				 %&nbsp;от&nbsp;рекомендуемого уровня суточного потребления или адекватного* уровня потребления
			</th>
		</tr>
		<tr>
			<td>
				 Витамин, А
			</td>
			<td>
				 0,8&nbsp;мг
			</td>
			<td>
				 100
			</td>
		</tr>
		<tr>
			<td>
				 Витамин С
			</td>
			<td>
				 80&nbsp;мг
			</td>
			<td>
				 133**
			</td>
		</tr>
		<tr>
			<td>
				 Витамин B<sub>1</sub>
			</td>
			<td>
				 1,1&nbsp;мг
			</td>
			<td>
				 79
			</td>
		</tr>
		<tr>
			<td>
				 Витамин B<sub>2</sub>
			</td>
			<td>
				 1,4&nbsp;мг
			</td>
			<td>
				 88
			</td>
		</tr>
		<tr>
			<td>
				 Витамин B<sub>3</sub>&nbsp;(PP)
			</td>
			<td>
				 16&nbsp;мг
			</td>
			<td>
				 89
			</td>
		</tr>
		<tr>
			<td>
				 Витамин В<sub>5</sub>
			</td>
			<td>
				 6&nbsp;мг
			</td>
			<td>
				 100
			</td>
		</tr>
		<tr>
			<td>
				 Витамин B<sub>6</sub>
			</td>
			<td>
				 1,4&nbsp;мг
			</td>
			<td>
				 70
			</td>
		</tr>
		<tr>
			<td>
				 Витамин В<sub>12</sub>
			</td>
			<td>
				 2,5 мкг
			</td>
			<td>
				 250**
			</td>
		</tr>
		<tr>
			<td>
				 Витамин D<sub>3</sub>&nbsp;(200&nbsp;МЕ)
			</td>
			<td>
				 5&nbsp;мкг
			</td>
			<td>
				 100
			</td>
		</tr>
		<tr>
			<td>
				 Витамин E
			</td>
			<td>
				 12&nbsp;мг
			</td>
			<td>
				 120**
			</td>
		</tr>
		<tr>
			<td>
				 Витамин К<sub>1</sub>
			</td>
			<td>
				 75&nbsp;мкг
			</td>
			<td>
				 63*
			</td>
		</tr>
		<tr>
			<td>
				 Биотин
			</td>
			<td>
				 50&nbsp;мкг
			</td>
			<td>
				 100
			</td>
		</tr>
		<tr>
			<td>
				 Фолиевая кислота
			</td>
			<td>
				 200 мкг
			</td>
			<td>
				 100
			</td>
		</tr>
		<tr>
			<td>
				 Цинк
			</td>
			<td>
				 10&nbsp;мг
			</td>
			<td>
				 67
			</td>
		</tr>
		<tr>
			<td>
				 Магний
			</td>
			<td>
				 100&nbsp;мг
			</td>
			<td>
				 25
			</td>
		</tr>
		<tr>
			<td>
				 Марганец
			</td>
			<td>
				 2&nbsp;мг
			</td>
			<td>
				 100*
			</td>
		</tr>
		<tr>
			<td>
				 Медь
			</td>
			<td>
				 1&nbsp;мг
			</td>
			<td>
				 100*
			</td>
		</tr>
		<tr>
			<td>
				 Селен
			</td>
			<td>
				 55&nbsp;мкг
			</td>
			<td>
				 79
			</td>
		</tr>
		<tr>
			<td>
				 Йод (экстракт Fucus vesiculosus (150&nbsp;мг), содержащий 0,1% йода)
			</td>
			<td>
				 150 мкг
			</td>
			<td>
				 100
			</td>
		</tr>
		<tr>
			<td>
				 Железо
			</td>
			<td>
				 14&nbsp;мг
			</td>
			<td>
				 100
			</td>
		</tr>
		<tr>
			<td>
				 Кальций
			</td>
			<td>
				 120&nbsp;мг
			</td>
			<td>
				 12
			</td>
		</tr>
		<tr>
			<td>
				 Коэнзим Q10
			</td>
			<td>
				 10&nbsp;мг
			</td>
			<td>
				 33*
			</td>
		</tr>
		</tbody>
		</table>      
      `,

      //   compositionTableHtmlStr: `
      // "<table>\n\t\t<tbody>\n\t\t<tr>\n\t\t\t<th align=\"center\">\n\t\t\t\t Активный компонент\n\t\t\t</th>\n\t\t\t<th align=\"center\">\n\t\t\t\t Содержание в&nbsp;суточной норме потребления (1&nbsp;таблетка, покрытая оболочкой, массой 1400&nbsp;мг)\n\t\t\t</th>\n\t\t\t<th align=\"center\">\n\t\t\t\t %&nbsp;от&nbsp;рекомендуемого уровня суточного потребления или адекватного* уровня потребления\n\t\t\t</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин, А\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 0,8&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин С\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 80&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 133**\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин B<sub>1</sub>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 1,1&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 79\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин B<sub>2</sub>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 1,4&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 88\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин B<sub>3</sub>&nbsp;(PP)\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 16&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 89\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин В<sub>5</sub>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 6&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин B<sub>6</sub>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 1,4&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 70\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин В<sub>12</sub>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 2,5 мкг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 250**\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин D<sub>3</sub>&nbsp;(200&nbsp;МЕ)\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 5&nbsp;мкг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин E\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 12&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 120**\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Витамин К<sub>1</sub>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 75&nbsp;мкг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 63*\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Биотин\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 50&nbsp;мкг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Фолиевая кислота\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 200 мкг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Цинк\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 10&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 67\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Магний\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 25\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Марганец\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 2&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100*\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Медь\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 1&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100*\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Селен\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 55&nbsp;мкг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 79\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Йод (экстракт Fucus vesiculosus (150&nbsp;мг), содержащий 0,1% йода)\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 150 мкг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Железо\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 14&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 100\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Кальций\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 120&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 12\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t Коэнзим Q10\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 10&nbsp;мг\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t 33*\n\t\t\t</td>\n\t\t</tr>\n\t\t</tbody>\n\t\t</table>"    `,
    };
  },

  created() {
    this.$store.dispatch("fetchGoods");
    console.log("Create HOOK in GoodsPage.vue");
    // for goods list test end
    this.$store.dispatch("fetchBrands");
  },

  computed: {
    // goods
    goods() {
      return this.$store.state.goods.goods;
    },
    goodsFormatted() {
      return this.formatGoods(this.goods);
    },

    // for goods list tst nd
    releaseForms() {
      //   return this.$store.state.courses;
      return this.$store.state.goods.releaseForms;
    },
    typesColors() {
      return this.$store.state.goods.typesColors;
    },

    compositionTableHtmlCleaned() {
      //   return this.cleanCompositionTableHtml(this.compositionTableHtmlStr);
      return this.cleanCompositionTableHtml(this.compositionActive);
    },
  },

  methods: {
    makeComposition(str) {
      //   let obj = JSON.parse(str);
      //   return obj;
      return str;
    },
    formatCompositionProp(obj) {
      if (typeof obj.composition == "string") {
        let compStr = obj.composition;
        let compObj = JSON.parse(compStr);

        obj.composition = compObj;
      }

      return obj;
    },
    formatGoods(goodsArr) {
      // composition
      let goodsNew = goodsArr.map((currentItem) => {
        // currentItem

        return this.formatCompositionProp(currentItem);
      });

      return goodsNew;
    },
    //
    generateID() {
      // let id = Math.floor(Math.random() * 10000000)
      return Math.floor(Math.random() * 10000000);
    },

    createItem() {
      let id = this.generateID();
      this.item.id = id;

      this.item.title = this.titleActive;
      this.item.name = this.titleActive; // + ! name задан как обязательный параметр на сервере
      this.item.brand = this.brandActive;
      this.item.type = this.formatTypeArrayToNumber(this.typeActive);
      this.item.release_form = this.releaseFormsActive;
      //   this.item.composition = this.compositionActive;
      this.item.composition = this.formatComposition(this.compositionActive);
      this.item.composition = JSON.stringify(this.item.composition);

      this.$store.dispatch("addGoodsItem", this.item);
    },

    // Витрум Энерджи таблетки шипучие массой 3,8 г
    // v. for Testing JSON API
    __createItem() {
      let id = this.generateID();
      this.item.id = id;

      this.item.title = "Витрум Энерджи таблетки шипучие массой 3,8 г";
      this.item.name = "Витрум Энерджи таблетки шипучие массой 3,8 г";
      this.item.brand = 1;
      this.item.type = 21;
      this.item.release_form = 1;
      //   this.item.composition = this.compositionActive;
      this.item.composition = this.formatComposition(this.compositionActive);

      this.$store.dispatch("addGoodsItem", this.item);
    },

    // formatType(typesArr) {
    //   // [1,2] make to 12 - Array to Number
    //   let typesStr = typesArr.join("");
    //   return typesStr;
    // },

    formatTypeArrayToNumber(typesArr) {
      // [1,2] make to 12 - Array to Number
      let typesStr = typesArr.join("");

      // toNum
      return Number.parseInt(typesStr);
    },

    cleanCompositionTableHtml(text) {
      let textCleaned = text;

      //   const textWithBreaks = "Пример текста\nс переносами\nстрок";
      textCleaned = text.replace(/\n/g, "");
      textCleaned = textCleaned.replace(/\t/g, "");
      //   textCleaned = textCleaned.replace(/\"/g, "''");

      console.log("textCleaned"); // выведет "Пример текстас переносамистрок"
      console.log(textCleaned); // выведет "Пример текстас переносамистрок"

      return textCleaned;
    },

    formatComposition() {
      // 1. получим html table
      // Для доступа к dom используем назначенную ранне ссылку:
      // <div ref="compositionTableOuter">
      const tableOuterEl = this.$refs.compositionTableOuter;
      let tableEl = tableOuterEl.querySelector("table");
      // 2. вызовем ф-ю форматтер\
      console.log("tableEl");
      console.log(tableEl);
      return GoodsServices.createObjectFromTable(tableEl);

      //   const tableOuterElID = tableOuterEl.id;
      //   console.log("tableOuterElID");
      //   console.log(tableOuterElID);
      //   return GoodsServices.createObjectFromTable(tableOuterElID);
    },
  },
};
</script>

<style lang="scss" scoped></style>
