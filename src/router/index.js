import Vue from 'vue'
import Router from 'vue-router'
import Pagination from '@/view/paginationView'

Vue.use(Router)

const Test = {template: '<div>test</div>'}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pagination
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
        path: '/pagination',
        name: 'pagination',
        component: Pagination
    }
  ]
})
