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
        </v-col>
      </v-row>
    </div>

    <div class="goods__list mt-12"></div>
  </div>
</template>

<script>
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
      item: {},

      titleActive: "",
      //   typeActive: 0,
      typeActive: [],

      brandActive: null,

      releaseFormsActive: null,
    };
  },

  created() {
    this.$store.dispatch("fetchBrands");
  },

  computed: {
    releaseForms() {
      //   return this.$store.state.courses;
      return this.$store.state.goods.releaseForms;
    },
    typesColors() {
      return this.$store.state.goods.typesColors;
    },
  },

  methods: {
    generateID() {
      // let id = Math.floor(Math.random() * 10000000)
      return Math.floor(Math.random() * 10000000);
    },

    createItem() {
      let id = this.generateID();
      this.item.id = id;

      this.item.title = this.titleActive;
      this.item.brand = this.brandActive;
      this.item.type = this.formatTypeArrayToNumber(this.typeActive);
      this.item.release_form = this.releaseFormsActive;
      //   this.item.title = this.titleActive;
      //   this.item.title = this.titleActive;

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
  },
};
</script>

<style lang="scss" scoped></style>
