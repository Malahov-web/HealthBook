<template>
  <div>
    <div>CoursesList</div>
    <!-- <v-data-table
      :headers="headers"
      :items="coursesTable"
      class="elevation-1"
    ></v-data-table> -->

    <v-data-table
      :headers="headers"
      :items="coursesTable"
      __:items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import CoursesServices from "@/services/CoursesServices.js";

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
          value: "title",
        },
        { text: "Product name", value: "medicine_name" },
        { text: "Period", value: "date_start" },
        { text: "Date finish", value: "date_finish" },
        { text: "Scheme", value: "dosage" },
      ],

      customProps: [
        "title",
        "medicine_name",
        "date_start",
        "date_finish",
        "dosage",
      ],

      //   coursesTable: this.createCoursesTable(),
      //   coursesTable: CoursesServices.copyObjectByCustomProps(
      //     this.courses,
      //     this.customProps
      //   ),
      //   coursesTable: [],

      //   coursesTable: CoursesServices.getAlert(),

      testArr: this.createTestArr(),
    };
  },

  computed: {
    coursesTable() {
      //   coursesTable: this.createCoursesTable(),
      return CoursesServices.copyObjectByCustomProps(
        this.courses,
        this.customProps
      );
    },
  },

  methods: {
    // createCoursesTable() {
    //   let coursesTable = [];
    //   coursesTable = this.courses.map((currentValue) => {
    //     return currentValue
    //   });
    //   return coursesTable;
    // },

    createTestArr() {
      return [1, 2, 3];
    },

    // createCoursesTable() {
    //   let coursesTable = [];

    //   for (let i = 0; i < this.courses.length; i++) {
    //     // const element = this.courses[i];

    //     console.log("this.courses[i]");
    //     console.log(this.courses[i]);
    //     coursesTable[i] = {};
    //     // debugger;

    //     // coursesTable[i]["property"] = this.courses[i]["property"];
    //     // coursesTable[i]["title"] = this.courses[i]["title"];
    //     coursesTable[i]["title"] = "asdf";
    //     // debugger;
    //     // coursesTable[i]["product_name"] = this.courses[i]["product_name"];
    //     // coursesTable[i]["date_start"] = this.courses[i]["date_start"];
    //     // coursesTable[i]["date_finish"] = this.courses[i]["date_finish"];
    //     // coursesTable[i]["dosage"] = this.courses[i]["dosage"];
    //   }

    //   return coursesTable;
    // },
  },
};
</script>

<style lang="scss" scoped></style>
