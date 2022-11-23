<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-toolbar-title>HealthBook</v-toolbar-title>

      <v-toolbar-items class="">
        <v-btn
          v-for="item in topMenu"
          v-bind:key="item"
          to="#"
          :title="item"
          __flat
        >
          {{ item }}
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
    topMenu: ["About", "Docs"],
  }),
};
</script>
