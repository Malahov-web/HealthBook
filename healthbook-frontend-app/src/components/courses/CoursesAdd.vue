<template>
  <div>
    <p>CoursesAdd</p>
    <v-row class="">
      <v-col lg="2">
        <!-- button Add -->
        <v-btn color="green" x-large block __outlined dark @click="addItem">
          Add
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CoursesAdd",

  data() {
    return {
      item: {},
    };
  },

  methods: {
    addItem() {
      // [['title', 'product_name', 'medicine_name', 'date_finish', 'dosage'], 'required'],

      //   const demoCourseObj = {
      //     id: 24,
      //     title: "C vitamine",
      //     supplment: "C vitamine",
      //     medicine_name: "C",
      //     type: "Vitamines",
      //     subtype: "",
      //     dosage: "1",
      //     dosagePerTablet: "1000mg",
      //     datestart: "2023-04-21",
      //     datefinish: "2023-05-09",
      //     user_id: 1,
      //   };

      this.item.title = "TestItem";
      this.item.product_name = "TestItem";
      //   this.item.medicine_name = "TestItem";
      //   this.item.date_finish = "TestItem";
      //   this.item.dosage = "TestItem";
      //   this.item.name = this.titleActive; // + ! name задан как обязательный параметр на сервере
      //   this.item.brand = this.brandActive;

      this.$store.dispatch("addCoursesItem", this.item);
    },
  },
};
</script>

<style lang="scss" scoped></style>
