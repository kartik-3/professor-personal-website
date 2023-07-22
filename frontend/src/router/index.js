import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeachingsView from '../views/TeachingsView.vue'
import ResearchView from '../views/ResearchView.vue'
import PublicationsView from '../views/PublicationsView.vue'
import AISocialGoodView from '../views/AISocialGoodView.vue'
import PresentationView from '../views/PresentationView.vue'
import MediaView from '../views/MediaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/teachings',
    name: 'Teaching',
    component: TeachingsView
  },
  {
    path: '/research',
    name: 'Research',
    component: ResearchView
  },
  {
    path: '/publications',
    name: 'Publication',
    component: PublicationsView
  },
  {
    path: '/aisocialgood',
    name: 'AISocialGood',
    component: AISocialGoodView
  },
  {
    path: '/presentations',
    name: 'Presentation',
    component: PresentationView
  },
  {
    path: '/media',
    name: 'Media',
    component: MediaView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
