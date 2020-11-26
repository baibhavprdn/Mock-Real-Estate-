import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Main.vue';
// import About from '../views/About.vue';
// import Details from '../views/Details.vue';

Vue.use(VueRouter);

const routes = [  
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Main.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/contact',
    name:'Contact',
    component: () => import ('../views/About.vue')
  },
  {
    path:'/details/:id',
    name:'Property detail',
    component: ()=> import ('../views/Details.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
