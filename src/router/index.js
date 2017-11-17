import Vue from 'vue'
import Router from 'vue-router'

import Pagination from '@/view/paginationView'
import selectSearch from '@/view/selectSearchView'
import Alert from '@/view/alertView'

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
    },
    {
        path: '/select_search',
        name: 'select_search',
        component: selectSearch
    },
    {
        path: '/alert',
        name: 'alert',
        component: Alert
    }
  ]
})
