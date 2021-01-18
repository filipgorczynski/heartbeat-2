<template>
  <v-list-item>
    <v-list-item-avatar>
      <transition name="fade">
        <v-icon class="white--text" :class="icon.classes">{{ icon.name }}</v-icon>
      </transition>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ remote.alias }}</v-list-item-title>
      <v-list-item-subtitle>{{ remote.uri }}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-layout>
        <v-switch v-model="remote.monitoring" color="primary" @change="toggleMonitor"></v-switch>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="ml-2">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ path: `/remote/${remote.id}` }">
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="removeRemote(remote.id)">Remove</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>
    </v-list-item-action>
  </v-list-item>
</template>

<script>

import Monitor from '../mixins/pingLogic';

export default {
  name: 'HBRemote',

  mixins: [Monitor],

  props: {
    remote: {
      type: Object,
      default() {
        return {
          alias: '',
          uri: '',
          status: '-',
          id: '',
          interval: 0,
          monitoring: true,
        };
      },
    },
  },

  data() {
    return {
      currentStatus: this.remote.status,
    };
  },

  methods: {
    removeRemote(id) {
      this.$store.commit('deleteRemote', id);
    },
    toggleMonitor() {
      if (this.remote.monitoring) {
        this.createMonitor();
      } else {
        this.currentStatus = '-';
        this.destroyMonitor();
      }
    },
  },

  computed: {
    icon() {
      const iconsMap = {
        '-': {
          name: 'mdi-alert',
          classes: ['grey', 'lighten-2'],
        },
        online: {
          name: 'mdi-lan-connect',
          classes: ['light-green', 'darken-1'],
        },
        offline: {
          name: 'mdi-lan-disconnect',
          classes: ['red', 'darken-1'],
        },
      };

      return iconsMap[this.currentStatus || '-'];
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
