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
        <v-layout column>
          <router-view></router-view>
        </v-layout>
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
import Monitor from 'ping-monitor';

export default {
  name: 'App',

  created() {
    const myMonitor = new Monitor({
      website: 'http://localhost:8080/',
      interval: 1,
    });

    myMonitor.on('up', (response) => {
      console.log('Yes!!', JSON.stringify(response));
    });
  },

  methods: {
    add() {
      this.$router.push('/remote');
    },
  },
};
</script>
