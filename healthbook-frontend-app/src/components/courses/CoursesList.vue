<template>
  <div>
    <div>CoursesList</div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Product name</th>
            <th class="text-left">Period</th>
            <th class="text-left">Scheme</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in courses" :key="item.title">
            <td>{{ item.title }}</td>
            <td>{{ item.product_name }}</td>
            <td>{{ formatPeriod(item.date_start, item.date_finish) }}</td>
            <td>{{ item.dosage }} pill</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
// import moment from "moment"; .. +

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
    return {};
  },

  methods: {
    formatPeriod(startDate, finishDate) {
      console.log(startDate);
      //   startDateText = moment().format();

      //   let startDateMoment = moment("1995-12-25"); // +
      let startDateMoment = this.$moment(startDate); // +
      let finishDateMoment = this.$moment(finishDate); // +
      //   console.log(startDateMoment); // +
      //   console.log(finishDateMoment);

      //   let startDateText = startDateMoment.format("DD-MM"); // +
      //   let startDateText = startDateMoment.month(); //  10 - номер месяца
      //   let startDateText = startDateMoment.month("string"); //  Mon Nov 07 2022 23:51:15 GMT+0300
      //   let startDateText = startDateMoment.month(); //
      let startDateText =
        startDateMoment.format("D MMM") +
        " - " +
        finishDateMoment.format("D MMM"); // +/

      return startDateText;
    },
  },
};
</script>

<style lang="scss" scoped></style>
