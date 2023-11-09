<template>
  <div>
    <!-- GoodsListItemType -->

    <!-- <span class="goods__table-item-type-icon orange"> V </span>
    <span class="goods__table-item-type-icon blue"> M </span>
    <span class="goods__table-item-type-icon green"> N </span> -->

    <!-- <span class="goods__table-item-type-icon" :class="getItemColor(type)">{{
      getItemFirstLetter(type)
    }}</span>

    {{ getItemFirstLetter(type) }}
    {{ getDigits(type) }} -->

    <span v-for="item in digitsList" :key="item.id">
      <span class="goods__table-item-type-icon" :class="getItemColor(item)">{{
        getItemFirstLetter(item)
      }}</span>
    </span>
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

  data() {
    return {
      typesColors: {
        1: "orange",
        2: "blue",
        3: "green",
      },
      //   types: [ "" ],
    };
  },

  computed: {
    coursesTypes() {
      return this.$store.state.courses.coursesTypes;
    },

    digitsList() {
      return this.getDigits(this.type);
    },
  },

  methods: {
    // Что надо:
    // вывести разметку с буквой
    // // т.е. вычислить букву
    // получить из числа тип, свзять его с цветом
    name() {},
    getItemFirstLetter(type) {
      //   let firstLetter = this.coursesTypes[type]["name"][0];
      let firstLetter = this.coursesTypes[type - 1]["name"][0]; // type - 1, т.к. массив с нуля , а не с 1 как в бд
      return firstLetter;
    },

    getItemColor(type) {
      let typeDigits = this.getDigits(type);
      console.log(typeDigits);

      let color = this.typesColors[type];
      return color;
    },

    getDigits(typeNumber) {
      // 1 .строку из числа
      let typeStr = typeNumber + "";
      console.log("typeStr:");
      console.log(typeof typeStr); // + "12"
      // 2 .сделать массив из строки?
      let typeArr = [];
      if (typeStr.length > 1) {
        typeArr = typeStr.split(""); // [1, 2];
      } else {
        typeArr = typeStr;
      }

      // .
      return typeArr;
    },
  },
};
</script>

<style lang="scss" scoped></style>
