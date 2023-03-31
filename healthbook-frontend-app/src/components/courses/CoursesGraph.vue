<template>
  <div>
    <div>CoursesGraph</div>

    <p>
      Color for Multivitamine is:
      <span v-bind:style="{ backgroundColor: getColorHex('Iod') }">
        {{ getColorHex("Multivitamin") }}
      </span>
    </p>

    <!-- v4 Advanced Timeline (Multiple range) -->
    <apexchart
      type="rangeBar"
      height="300"
      :options="chartOptionsCourses"
      :series="seriesCourses"
    ></apexchart>

    <!-- v Real -->
    <!-- <apexchart
      type="rangeBar"
      height="300"
      :options="chartOptionsCourses"
      :series="series"
    ></apexchart> -->

    <apexchart
      type="rangeBar"
      height="300"
      :options="chartOptionsCourses"
      :series="seriesComputed"
    ></apexchart>
  </div>
</template>

<script>
// import moment from "moment";

export default {
  name: "CoursesGraph",
  components: {
    // New,
    // apexchart,
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

  // v4  Advanced Timeline (Multiple range)

  data: function () {
    return {
      todayDate: new Date("2022-11-01").getTime(),
      // v5
      seriesCourses: [
        {
          name: "Joe",
          data: [
            {
              x: "Multivitamin",
              y: [
                new Date("2022-09-12").getTime(),
                new Date("2022-11-12").getTime(),
              ],
              fillColor: "#E67E22",
              goals: [
                {
                  name: "Break",
                  //   value: new Date("2022-03-10").getTime(),
                  value: new Date("2022-11-10").getTime(),
                  //   value: this.todayDate, // -+
                  strokeColor: "#CD2F2A",
                },
              ],
            },
            {
              x: "Iod",
              y: [
                new Date("2022-09-12").getTime(),
                new Date("2022-10-13").getTime(),
              ],
              fillColor: "#2980B9",
              goals: [
                {
                  name: "Break",
                  //   value: new Date("2022-03-10").getTime(),
                  value: new Date("2022-11-10").getTime(),
                  //   value: this.todayDate, // -+
                  strokeColor: "#CD2F2A",
                },
              ],
            },
            {
              x: "C vitamine",
              y: [
                new Date("2022-09-18").getTime(),
                new Date("2022-10-07").getTime(),
              ],
              fillColor: "#F1C40F",
            },
            {
              x: "Fish fat",
              y: [
                new Date("2022-09-18").getTime(),
                new Date("2022-10-08").getTime(),
              ],
              fillColor: "#16A085",
            },
            {
              x: "C vitamine",
              y: [
                new Date("2022-11-01").getTime(),
                new Date("2022-11-21").getTime(),
              ],
              fillColor: "#F1C40F",
              goals: [
                {
                  name: "Break",
                  //   value: new Date("2022-03-10").getTime(),
                  value: new Date("2022-11-10").getTime(),
                  //   value: this.todayDate, // -+
                  strokeColor: "#CD2F2A",
                },
              ],
            },
          ],
        },
      ],
      chartOptionsCourses: {
        chart: {
          height: 450,
          type: "rangeBar",
          //   D9D9D9
        },
        plotOptions: {
          bar: {
            horizontal: true,
            // barHeight: "80%",

            barHeight: "40%",
          },
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: true,
            color: "#A9A9A9",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
        },

        //
        stroke: {
          width: 1, //2, //1,
          colors: ["#777777"], // ["#D9D9D9"],
        },
        fill: {
          type: "solid",
          opacity: 0.85, //0.6,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },

        //
        grid: {
          //   borderColor: "#90A4AE",
          borderColor: "rgba(169, 169, 169, 0.25)", // "#90A4AE",
          strokeDashArray: 2,
          xaxis: {
            lines: {
              show: true, //false,
            },
          },
          yaxis: {
            lines: {
              show: false, // false, //true,
            },
          },

          //   column: {
          //     // colors: "rgba(169, 169, 169, 0.99)",
          //     colors: ["#cccccc, #aaaaaa"],
          //     opacity: 0.25,
          //   },

          annotations: {
            yaxis: [
              {
                y: 0,
                y2: null,
                strokeDashArray: 1,
                borderColor: "#334477",
                fillColor: "#774433",
              },
            ],
          },
        },
      },

      // my

      /*
         x = title
       */
      // Example:
      coursesForGraph: [
        {
          x: "Multivitamin",
          y: [
            new Date("2022-09-12").getTime(),
            new Date("2022-11-12").getTime(),
          ],
        },
        {
          x: "title",
          y: ["date_start", "date_finish"],
          custom: {
            supplment: "supplment",
            type: "type",
            dosage: "dosage",
          },
        },
      ],

      //
      series: [
        {
          name: "Kirill",
          data: [],
          //   data: this.setGraphData(this.courses), // +
          //   data: this.tempGraphData(this.courses), // Error: is not a function
          //   data: this.tempGraphData,
        },
      ],
    };
  },

  //   computed: {
  //     tempGraphData() {
  //       //   return this.data;
  //       return this.setGraphData(this.courses);
  //     },
  //   },

  computed: {
    colorScheme() {
      return this.$store.state.courses.colorScheme;
    },
    colors() {
      return this.$store.state.courses.colors;
    },

    seriesComputed() {
      let series = [];

      series = [
        {
          name: "Kirill",
          //   data: [],
          data: this.setGraphData(this.courses), // +
          //   data: this.tempGraphData(this.courses), // Error: is not a function
          //   data: this.tempGraphData,
        },
      ];
      return series;
    },
  },

  // Срабатывает, перед тем как получит данные от родителя
  mounted() {
    // v3
    // alert("!");
    // this.series.data = this.setGraphData(this.courses);
  },

  methods: {
    // setGraphData(arr) {
    //   let newArr = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     const coursesItem = arr[i];
    //     // coursesItem;
    //     // debugger;
    //     let newItem = {};
    //     newItem.x = coursesItem.title;
    //     newItem.y[0] = new Date("2022-09-12").getTime();
    //     newItem.y[1] = new Date("2022-11-12").getTime();
    //     // newArr.push(coursesItem);
    //     newArr.push(newItem);
    //     debugger;
    //   }
    //   //   debugger;
    //   return [1, 2, 3]; // +
    //   //   return newArr;
    // },

    setGraphData(arr) {
      // v1
      //   return [1, 2, 3]; // +
      // v2
      //   console.log("this.courses in setGraphData:");
      // console.log(this.courses); // Array(0)
      //   return this.courses; // -
      // не передалось, потому что их там еще нету)
      // v3
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        const coursesItem = arr[i];

        // debugger;
        let newItem = {};
        // main
        newItem.x = coursesItem.title;
        newItem.y = [];
        newItem.y[0] = new Date(coursesItem.date_start).getTime();
        // newItem.y[0] = new Date("2022-09-12").getTime();
        newItem.y[1] = new Date(coursesItem.date_finish).getTime();
        // newItem.y[1] = new Date("2022-11-12").getTime();
        newItem.fillColor = this.getColorHex(coursesItem.medicine_name);
        // newItem.fillColor = this.getColorHex("Multivitamin");
        // debugger;

        // custom
        let custom = {};
        custom.medicine_name = coursesItem.medicine_name;
        custom.type_id = coursesItem.type_id;
        custom.dosage = coursesItem.dosage;
        newItem.custom = custom;

        // goals
        // goals: [
        //     {
        //         name: "Break",
        //         //   value: new Date("2022-03-10").getTime(),
        //         value: new Date("2022-11-10").getTime(),
        //         //   value: this.todayDate, // -+
        //         strokeColor: "#CD2F2A",
        //     },
        // ],

        let goals = {};
        goals.name = "Break";
        // goals.value = new Date().getTime();
        goals.value = new Date("2022-12-09").getTime();
        goals.strokeColor = "#CD2F2A";
        newItem.goals = goals;

        newArr.push(newItem);
        debugger;
      }
      return newArr;

      //   console.log("this.courses in setGraphData computed seriesComputed:");
      //   console.log(this.courses); // +
      //   return this.courses; // +
    },

    getColorHex(courseName) {
      // Multivitamin
      //   let courseName = "Multivitamin"; // +
      let colorName = this.colorScheme[courseName];

      let colorObj = this.colors.find(function (item) {
        // если true - возвращается текущий элемент и перебор прерывается
        // если все итерации оказались ложными, возвращается undefined
        return item.name == colorName;
      });

      if (colorObj == undefined) {
        return "#787878";
      }
      //   debugger;
      return colorObj.hex;
    },
  },
};
</script>

<style lang="scss" scoped></style>
