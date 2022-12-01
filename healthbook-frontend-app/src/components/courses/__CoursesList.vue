<template>
  <div>
    <div>CoursesList</div>
    <v-data-table
      :headers="headers"
      :items="courses"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "CoursesList",
  components: {
    // CoursesList,
  },
  props: {
    courses: {
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
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Product name", value: "calories" },
        { text: "Period", value: "fat" },
        { text: "Scheme", value: "carbs" },
      ],

      coursesTable: this.createCoursesTable(),
    };
  },

  methods: {
    // createCoursesTable() {
    //   let coursesTable = [];
    //   coursesTable = this.courses.map((currentValue) => {
    //     return currentValue
    //   });
    //   return coursesTable;
    // },

    createCoursesTable() {
      let coursesTable = [];

      for (let i = 0; i < this.courses.length; i++) {
        // const element = this.courses[i];

        // coursesTable[i]["property"] = this.courses[i]["property"];
        coursesTable[i]["title"] = this.courses[i]["title"];
        coursesTable[i]["product_name"] = this.courses[i]["product_name"];
        coursesTable[i]["date_start"] = this.courses[i]["date_start"];
        coursesTable[i]["property"] = this.courses[i]["property"];
        coursesTable[i]["property"] = this.courses[i]["property"];
      }

      return coursesTable;
    },
  },
};
</script>

<style lang="scss" scoped></style>
