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
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <span>Options</span>
        </v-tooltip>
      </template>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" @click="redirect(item)">
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
      { text: "Take a new test", link : "/intro" },
      { text: "Results", link : "/results" },
      { text: "Privacy policy", link : "/policy" },
      { text: "About this test", link : "/about"}
    ],
    selectedItem: 0,
  }),
  methods:{
    redirect(item){
      if(item.link === '/intro'){
        this.$store.commit("RESET_STATE");
      }
      this.$router.push({ path: item.link })
    }
  }
};
</script>