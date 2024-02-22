import { createRouter, createWebHistory } from 'vue-router'
import BlogComponent from '@/pages/BlogComponent'
import BlogDetailsComponent from '@/pages/BlogDetailsComponent'
import HomePage from '@/pages/HomePage'
import ProjectComponent from '@/pages/ProjectComponent'
import ProjectDetailsComponent from '@/pages/ProjectDetailsComponent'
import NotFound from '@/pages/NotFound'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogComponent
  },
  {
    path: '/blogDetail',
    name: 'blogDetail',
    component: BlogDetailsComponent
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectComponent
  },
  {
    path: '/projectDetails',
    name: 'projectDetails',
    component: ProjectDetailsComponent
  },
  {
    path: '/:CatchAll(.*)', //если страница неизвесна, то ведет на 404
    name: '404',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
