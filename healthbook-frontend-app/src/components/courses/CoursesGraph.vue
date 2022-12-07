<template>
  <div>
    <div>CoursesGraph</div>

    <!-- v4 Advanced Timeline (Multiple range) -->
    <apexchart
      type="rangeBar"
      height="300"
      :options="chartOptionsCourses"
      :series="seriesCourses"
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
