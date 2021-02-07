<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon x-large v-bind="attrs" v-on="{ ...tooltip, ...menu }">
              <v-icon :class="mapLocale($i18n.locale)"></v-icon>
            </v-btn>
          </template>
          <span>Language</span>
        </v-tooltip>
      </template>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list dense>
          <v-subheader>Pick a language</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="item in $i18n.availableLocales"
              :key="item"
              @click="setLocale(item)"
            >
              <v-list-item-icon>
                <v-icon :class="mapLocale(item)"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ mapLocale(item) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import supportedLocales from "@/config/supported-locales";

export default {
  name: "LanguageMenu",
  methods: {
    mapLocale(locale) {
      return supportedLocales[locale];
    },
    setLocale(locale) {
      this.$root.$i18n.locale = locale;
    },
  },
};
</script>
