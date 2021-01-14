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
  // Test
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
  },
  {
    path: '/test1',
    name: 'Test1',
    component: () => import('../views/Test1.vue'),
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () => import('../views/Test2.vue'),
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('../views/Test3.vue'),
  },
  {
    path: '/test4',
    name: 'Test4',
    component: () => import('../views/Test4.vue'),
  },
  {
    path: '/test5',
    name: 'Test5',
    component: () => import('../views/Test5.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // Cost
  {
    path: '/cost',
    name: 'Cost',
    component: () => import('../views/Cost.vue'),
  },
  {
    path: '/standard',
    name: 'Standard',
    component: () => import('../views/Standard.vue'),
  },
  {
    path: '/standard1',
    name: 'Standard1',
    component: () => import('../views/Standard1.vue'),
  },
  {
    path: '/standard2',
    name: 'Standard2',
    component: () => import('../views/Standard2.vue'),
  },
  {
    path: '/standard3',
    name: 'Standard3',
    component: () => import('../views/Standard3.vue'),
  },
  {
    path: '/average',
    name: 'Average',
    component: () => import('../views/Average.vue'),
  },
  {
    path: '/ratio',
    name: 'Ratio',
    component: () => import('../views/Ratio.vue'),
  },
  {
    path: '/evaluation',
    name: 'Evaluation',
    component: () => import('../views/Evaluation.vue'),
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import('../views/Information.vue'),
  },
  {
    path: '/everything',
    name: 'Everything',
    component: () => import('../views/Everything.vue'),
  },

  // Plan
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('../views/Plan.vue'),
  },
  {
    path: '/situation',
    name: 'Situation',
    component: () => import('../views/Situation.vue'),
  },
  {
    path: '/alteration',
    name: 'Alteration',
    component: () => import('../views/Alteration.vue'),
  },
  {
    path: '/expenditure',
    name: 'Expenditure',
    component: () => import('../views/Expenditure.vue'),
  },

  // Description
  {
    path: '/description',
    name: 'Description',
    component: () => import('../views/Description.vue'),
  },
  {
    path: '/process',
    name: 'Process',
    component: () => import('../views/Process.vue'),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
