import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import SponsorsPage from '../views/SponsorsPage.vue';
import ConnectPage from '../views/ConnectPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/sponsors',
    name: 'SponsorsPage',
    component: SponsorsPage,
  },
  {
    path: '/connect',
    name: 'ConnectPage',
    component: ConnectPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
