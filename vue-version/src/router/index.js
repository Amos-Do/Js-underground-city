import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/1F-9x9',
    name: 'F1',
    component: () => import('../views/1F-9x9.vue'),
  },
  {
    path: '/2F-Clock',
    name: 'F2',
    component: () => import('../views/2F-Clock.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
