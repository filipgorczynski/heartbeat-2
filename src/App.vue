<template>
  <v-app>
    <div>
      <v-toolbar fixed dense>
        <v-toolbar-title>Heartbeat</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <v-main>
      <v-container fluid class="pa-0">
        <v-slide-y-transition mode="out-in">
          <keep-alive include="HBRemotesList">
          <!-- <v-layout column> -->
            <router-view></router-view>
          <!-- </v-layout> -->
          </keep-alive>
        </v-slide-y-transition>
      </v-container>
    </v-main>

    <v-footer :fixed="true">
      <v-btn icon>
        <v-icon class="grey--text text-darken-3">mdi-cog</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn fab top right absolute class="accent" @click="add">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  methods: {
    add() {
      this.$router.push('/remote');
    },
  },
};
</script>
