<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              icon
              x-large
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
              <v-icon :class="items[selectedItem].text"></v-icon>
            </v-btn>
          </template>
          <span>Language</span>
        </v-tooltip>
      </template>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list dense>
          <v-subheader>Pick a language</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon :class="item.text"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{
                  item.text.toUpperCase()
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "LanguageMenu",
  data: () => ({
    items: [
      { text: "english", code:"en" },
      { text: "italian", code:"it" },
      { text: "spanish", code:"es" },
      { text: "french", code:"fr" },
      { text: "deutsch", code:"de" },
    ],
    selectedItem: 0,
  }),
  watch: {
    selectedItem: function (value, oldvalue) {
      if (value !== undefined) {
        this.$root.$i18n.locale = this.items[value].code
      } else {
        this.$root.$i18n.locale = this.items[oldvalue].code
      }
    },
  },
};
</script>
