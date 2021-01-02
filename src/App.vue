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
<style>

#app{
  @import url('https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;0,400;0,600;1,400;1,600&display=swap');
  background: #fafafa;
  font-family: 'Krub', sans-serif!important;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
.middlealign {
  width: 65%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>