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
// import HBRemotesList from './components/RemotesList.vue';
// const Monitor = require('ping-monitor');

export default {
  name: 'App',

  // components: {
  //   'hb-remotes-list': HBRemotesList,
  // },

  data: () => ({
    //
  }),

  created() {
    // const myMonitor = new Monitor({
    //   website: 'http://localhost',
    //   port: 8080,
    //   title: 'Raging Flame',
    //   interval: 5,
    // });

    // myMonitor.on('up', (res) => {
    //   console.log('Yes!!', JSON.stringify(res));
    // });
  },

  methods: {
    add() {
      this.$router.push('/remote');
    },
  },
};
</script>
