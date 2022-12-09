import { createWebHistory, createRouter } from 'vue-router';
import homePage from '../views/homePage.vue';
import daoPage from '../views/daoPage.vue';
import docsPage from '../views/docsPage.vue';
import discoursePage from '../views/discoursePage.vue';

const routes = [
  {
    path: '/',
    name: homePage,
    component: homePage,
  },
  {
    path: '/dao',
    name: daoPage,
    component: daoPage,
  },
  {
    path: '/docs',
    name: docsPage,
    component: docsPage,
  },
  {
    path: '/discourse',
    name: discoursePage,
    component: discoursePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;