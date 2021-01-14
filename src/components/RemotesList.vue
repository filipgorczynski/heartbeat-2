<template>
  <v-list two-line dark v-if="allRemotes">
    <v-subheader>Remotes list</v-subheader>
    <transition-group name="list" type="transition">
      <hb-remote v-for="remote in allRemotes" :remote="remote" :key="remote.id"></hb-remote>
    </transition-group>
  </v-list>
  <v-card v-else>
    <v-card-text>Please add remotes to minitor</v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

import HBRemote from './Remote.vue';

export default {
  name: 'HBRemotesList',

  components: {
    'hb-remote': HBRemote,
  },

  computed: {
    ...mapGetters(['allRemotes']),
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  transition: all 1s;
  display: block;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
