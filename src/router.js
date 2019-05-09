import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Photography from './views/Photography.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Project_1 from './views/Project_1.vue'
import Project_2 from './views/Project_2.vue'
import Project_3 from './views/Project_3.vue'
import Project_4 from './views/Project_4.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/photography',
      name: 'photography',
      component: Photography
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/projects',
      name:'projects',
      component: Projects,
    },
    {
      path:'/project_1',
      name:'project_1',
      component: Project_1,
    },
    {
      path:'/project_2',
      name:'project_2',
      component: Project_2,
    },
    {
      path:'/project_3',
      name:'project_3',
      component: Project_3,
    },
    {
      path:'/project_4',
      name:'project_4',
      component: Project_4,
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact,
    },
  ]
})
