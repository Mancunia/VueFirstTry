import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/pages/Home.vue'
import ThreadShow from '@/pages/ThreadShow.vue'
import NotFound from '@/pages/NotFound.vue'
import sourceData from '@/data.json'
import Forums from '@/pages/Forums.vue'
import ForumShow from '@/pages/ForumShow.vue'
import CategoryShow from '@/pages/CategoryShow.vue'

const routes = [
  {
    path: '/',
    name: 'Forums',
    component: Forums
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      // check if data is available
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if yes continue to next
      if (!threadExists) {
        next({
          name: 'PageNotFound',
          params: {
            pathMatch: to.path.substring(1).split('/')
          },
          query: to.query,
          hash: to.hash

        }
        )
      }
      next()
      // else go to not found page
    }
  },

  {
    path: '/forums/:id',
    name: 'ForumShow',
    component: ForumShow,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: NotFound
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: CategoryShow,
    props: true
  }

]

export default createRouter({

  history: createWebHistory(),
  routes // short for `routes: routes`
})
