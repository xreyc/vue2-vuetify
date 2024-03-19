import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Projects from './views/Projects';
import Team from './views/Team';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
  ]
})

export default router
