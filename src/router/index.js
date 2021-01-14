import Vue from 'vue';
import VueRouter from 'vue-router';
import HBRemotesList from '../components/RemotesList.vue';
import HBREmoteForm from '../components/RemoteForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/remote/:id?',
    name: 'RemoteForm',
    component: HBREmoteForm,
    props: true,
  },
  {
    path: '/',
    name: 'Home',
    component: HBRemotesList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
