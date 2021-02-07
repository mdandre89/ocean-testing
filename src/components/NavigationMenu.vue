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
            <i aria-hidden="true" class="notranslate menu-icon"></i>
            </v-btn>
          </template>
          <span>Options</span>
        </v-tooltip>
      </template>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
                {{item.text.toUpperCase()}}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  data: () => ({
    items: [
      { text: "Take a new test", path : "/intro" },
      { text: "Results", path : "/results" },
      { text: "Privacy policy", path : "/policy" },
      { text: "About this test", path : "/about"}
    ],
    selectedItem: undefined,
  }),
};
</script>