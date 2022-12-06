<template>
  <div>
    <div>CoursesGraph</div>

    <!-- <apexchart
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart> -->

    <!-- v2  Different color for each bar -->
    <!-- <apexchart
      type="rangeBar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart> -->

    <!-- v4 Advanced Timeline (Multiple range) -->
    <apexchart
      type="rangeBar"
      height="450"
      :options="chartOptions"
      :series="series"
    ></apexchart>

    <!-- v4 Advanced Timeline (Multiple range) -->
    <apexchart
      type="rangeBar"
      height="450"
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

  //   data() {
  //     return {
  //       options: {
  //         chart: {
  //           id: "vuechart-example",
  //         },
  //         xaxis: {
  //           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  //         },
  //       },
  //       series: [
  //         {
  //           name: "series-1",
  //           data: [30, 40, 45, 50, 49, 60, 70, 91],
  //         },
  //       ],
  //     };
  //   },

  // v2  Different color for each bar

  // data: function () {
  //   return {
  //     series: [
  //       {
  //         data: [
  //           {
  //             x: "Analysis",
  //             y: [
  //               new Date("2022-10-20").getTime(),
  //               new Date("2022-10-24").getTime(),
  //             ],
  //             fillColor: "#008FFB",
  //           },
  //           {
  //             x: "Design",
  //             y: [
  //               new Date("2022-10-21").getTime(),
  //               new Date("2022-10-28").getTime(),
  //             ],
  //             fillColor: "#00E396",
  //           },
  //           {
  //             x: "Backend",
  //             y: [
  //               new Date("2022-10-31").getTime(),
  //               new Date("2022-11-21").getTime(),
  //             ],
  //             fillColor: "#775DD0",
  //           },
  //           {
  //             x: "Frontend",
  //             y: [
  //               new Date("2022-11-22").getTime(),
  //               new Date("2022-12-02").getTime(),
  //             ],
  //             fillColor: "#FEB019",
  //           },
  //           {
  //             x: "Deployment",
  //             y: [
  //               new Date("2022-12-12").getTime(),
  //               new Date("2022-12-16").getTime(),
  //             ],
  //             fillColor: "#FF4560",
  //           },
  //         ],
  //       },
  //     ],
  //     chartOptions: {
  //       chart: {
  //         height: 350,
  //         type: "rangeBar",
  //       },
  //       plotOptions: {
  //         bar: {
  //           horizontal: true,
  //           distributed: true,
  //           dataLabels: {
  //             hideOverflowingLabels: false,
  //           },
  //         },
  //       },
  //       dataLabels: {
  //         enabled: true,
  //         formatter: function (val, opts) {
  //           var label = opts.w.globals.labels[opts.dataPointIndex];
  //           var a = moment(val[0]);
  //           var b = moment(val[1]);
  //           // var a = this.$moment(val[0]);
  //           // var b = this.$moment(val[1]);
  //           var diff = b.diff(a, "days");
  //           return label + ": " + diff + (diff > 1 ? " days" : " day");
  //         },
  //         style: {
  //           colors: ["#f3f4f5", "#fff"],
  //         },
  //       },
  //       xaxis: {
  //         type: "datetime",
  //       },
  //       yaxis: {
  //         show: false,
  //       },
  //       grid: {
  //         row: {
  //           colors: ["#f3f4f5", "#fff"],
  //           opacity: 1,
  //         },
  //       },
  //     },
  //   };
  // },

  // v4  Advanced Timeline (Multiple range)

  data: function () {
    return {
      series: [
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-06").getTime(),
                new Date("2019-03-16").getTime(),
              ],
              goals: [
                {
                  name: "Break",
                  value: new Date("2019-03-10").getTime(),
                  strokeColor: "#CD2F2A",
                },
              ],
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-03").getTime(),
                new Date("2019-03-07").getTime(),
              ],
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-20").getTime(),
                new Date("2019-03-22").getTime(),
              ],
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-16").getTime(),
              ],
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          height: 450,
          type: "rangeBar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
          },
        },
        xaxis: {
          type: "datetime",
        },
        stroke: {
          width: 1,
        },
        fill: {
          type: "solid",
          opacity: 0.6,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
      },

      todayDate: new Date("2022-11-01").getTime(),
      // v5
      seriesCourses: [
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                new Date("2022-09-12").getTime(),
                new Date("2022-11-12").getTime(),
              ],
              fillColor: "#008FFB",
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
              fillColor: "#00E396",
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
              fillColor: "#775DD0",
            },
            {
              x: "Fish fat",
              y: [
                new Date("2022-09-18").getTime(),
                new Date("2022-10-08").getTime(),
              ],
              fillColor: "#FEB019",
            },
            {
              x: "C vitamine",
              y: [
                new Date("2022-11-01").getTime(),
                new Date("2022-11-21").getTime(),
              ],
              fillColor: "#775DD0",
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
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
          },
        },
        xaxis: {
          type: "datetime",
        },
        stroke: {
          width: 1,
        },
        fill: {
          type: "solid",
          opacity: 0.6,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
