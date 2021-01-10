<template>
  <v-app-bar app color="#F5F5F">
    <div class="d-flex align-center">
      <v-btn text plain rounded large to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./../assets/logob.svg"
          transition="scale-transition"
          width="40"
        />
        {{ $t("general-website").title }}
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <v-btn
    text
    to="/results"
    >
      {{ $t("general-website").retrievereport }}
    </v-btn>
    <LanguageMenu />
    <NavigationMenu />
  </v-app-bar>
</template>

<script>
import LanguageMenu from "@/components/LanguageMenu";
import NavigationMenu from "@/components/NavigationMenu"
export default {
  data: () => ({
    themeType: true,
  }),
  components: {
    LanguageMenu,
    NavigationMenu
  },
};
</script>

