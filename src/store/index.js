import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    remotesList: [
      {
        alias: 'my alias 1',
        uri: 'http://localhost:9001/health',
        status: '-',
        id: 1,
        interval: 5,
        monitoring: true,
      },
      {
        alias: 'my alias 2',
        uri: 'http://localhost:9002/health',
        status: '-',
        id: 2,
        interval: 5,
        monitoring: true,
      },
      // {
      //   alias: 'my alias 3',
      //   uri: 'http://localhost:9003/health',
      //   status: '-',
      //   id: 3,
      //   interval: 0,
      //   monitoring: true,
      // },
      // {
      //   alias: 'my alias 3',
      //   uri: 'http://localhost:9003/health',
      //   status: '-',
      //   id: 4,
      //   interval: 0,
      //   monitoring: true,
      // },
    ],
  },
  getters: {
    allRemotes: (state) => state.remotesList,
    getRemote: (state) => (id) => state.remotesList.find((remote) => remote.id + 0 === id),
  },
  mutations: {
    saveRemote: (state, data) => {
      const remote = { ...data };
      // prevent missing ID
      const { id } = { ...this.$route.params };
      if (id) {
        // update existing
      } else {
        remote.id = Date.now();
        state.remotesList.unshift(remote);
      }
    },
    deleteRemote: (state, id) => {
      // check with splice
      state.remotesList = state.remotesList.filter((remote) => remote.id !== id);
    },
  },
  actions: {
  },
  modules: {
  },
});
