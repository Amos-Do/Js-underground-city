import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/1F-9x9',
    name: 'F1',
    component: () => import('../views/1F-9x9.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
