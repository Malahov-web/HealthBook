<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-toolbar-title>HealthBook</v-toolbar-title>

      <!-- <v-toolbar-items class="">
        <v-btn
          v-for="item in topMenu"
          v-bind:key="item"
          to="#"
          :title="item"
          __flat
        >
          {{ item }}
        </v-btn>
      </v-toolbar-items> -->

      <v-toolbar-items class="">
        <v-btn
          v-for="item in topMenu"
          v-bind:key="item"
          to="#"
          :title="item"
          __flat
        >
          <router-link :to="{ name: item }">
            {{ item }}
          </router-link>
        </v-btn>
      </v-toolbar-items>

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    topMenu: ["About", "Docs", "Register", "Courses"],
  }),
};
</script>

<style lang="scss">
main,
.v-main {
  //   background-color: #ccc;
  //   max-width: 1485px;
}
.container {
  //   max-width: 1020px; //-
  //   max-width: 1420px !important; // +
  //   background-color: #999;
}

.sidebar {
  background-color: #f0f0f0;
  height: calc(100vh);
  //   position: fixed;
}
</style>
