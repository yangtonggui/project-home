import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home'
import ExampleList from '../views/example-list'
import Editor from '../views/editor'
import Docs from '../views/docs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/example-list/:type',
          name: 'example-list',
          component: ExampleList
        },
        {
          path: '/editor',
          name: 'editor',
          component: Editor
        },
        {
          path: '/guide',
          name: 'guide',
          component: Docs
        },
        {
          path: '/api',
          name: 'api',
          component: Docs
        }
      ]
    }
  ]
})
