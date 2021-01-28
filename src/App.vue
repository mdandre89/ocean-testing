<template>
  <v-app>
    <Topmenu />

    <v-main>
      <router-view></router-view>
    </v-main>

    <Bottommenu />
  </v-app>
</template>

<script>
import Bottommenu from "./components/Bottommenu.vue";
import Topmenu from "./components/Topmenu";

export default {
  name: "App",

  components: {
    Bottommenu,
    Topmenu
  },

  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    padless: false,
    variant: "fixed",
  })
};
</script>