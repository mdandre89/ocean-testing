<template>
  <v-app-bar app hide-on-scroll color="#F5F5F">
    <div class="d-flex align-center">
      <v-btn text plain rounded large to="/" class="website-logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./../assets/logob.svg"
          transition="scale-transition"
          width="40"
        />
        <div class="hidden-sm-and-down">{{ $t("general-website").title }}</div>
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <v-btn
    class="hidden-sm-and-down results"
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
  components: {
    LanguageMenu,
    NavigationMenu
  }
};
</script>

