<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-icon class="orange--text">mdi-alert</v-icon>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ remote.alias }}</v-list-item-title>
      <v-list-item-subtitle>{{ remote.uri }}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-layout>
        <v-switch></v-switch>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="ml-2">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ path: `/remote/${remote.id}` } ">
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
export default {
  name: 'HBRemote',

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
  methods: {
    removeRemote(id) {
      this.$store.commit('deleteRemote', id);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
