import Vue from 'vue'
import Router from 'vue-router'

import Pagination from '@/view/paginationView'
import selectSearch from '@/view/selectSearchView'
import Alert from '@/view/alertView'
import Swiper from '@/view/swiperView'
import Drag from '@/view/dragView'
import ContentMenu from '@/view/contentmenuView'
import ScrollTop from '@/view/scrollTopView'

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
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: Swiper
    },
    {
      path: '/drag',
      name: 'drag',
      component: Drag
  },
  {
    path: '/contentmenu',
    name: 'contentmenu',
    component: ContentMenu
},
{
  path: '/scroll_top',
  name: 'scroll_top',
  component: ScrollTop
}
  ]
})
