<template>
  <div class="home">
    <v-container>
      <Main class="asd"></Main>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Main,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1200px; // +
}
</style>
