<template>
  <div>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
    <form method="post" v-if="!loading" @keyup.enter="save">
      <v-card class="pa-2 elevation-0">
        <v-card-title>Remote</v-card-title>
        <v-card-text>
          <v-text-field
            prepend-icon="mdi-eye"
            label="Alias"
            autofocus
            v-model="remote.alias"
          >
          </v-text-field>
          <v-text-field
            prepend-icon="mdi-cloud"
            label="URI"
            prefix="http://"
            :value="remote.uri|hideProtocol"
            @input="val => remote.uri = val"
          >
          </v-text-field>
          <v-text-field
            prepend-icon="mdi-timer"
            label="Interval"
            suffix="s"
            v-model="remote.interval"
          >
          </v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn text @click="cancel">Cancel</v-btn>
            <v-btn class="secondary" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HBREmoteForm',

  data() {
    return {
      ...mapGetters(['getRemote']),
      loading: false,
      remote: {
        alias: '',
        uri: '',
        interval: 10,
      },
    };
  },

  created() {
    this.loading = false;
    const { id } = { ...this.$route.params };
    if (id) {
      this.remote = this.$store.getters.getRemote(parseInt(id, 10));
    }
  },

  methods: {
    cancel() {
      this.$router.push({ path: '/' });
    },
    save() {
      this.$store.commit('saveRemote', this.remote);
      this.$router.push({ name: 'Home' });
    },
  },

  filters: {
    hideProtocol: (value) => value.replace('http://', ''),
  },

};
</script>

<style lang="scss" scoped>

</style>
