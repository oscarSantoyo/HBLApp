import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ByeWorld from '@/components/ByeWorld'
import ErrorComponent from '@/components/ErrorComponent'
import templateExample from '@/components/TemplateExample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bye',
      name: 'ByeWorld',
      component: ByeWorld
    },
    {
      path: '/template',
      name: 'templateExample',
      component: templateExample
    },
    {
      path: '*',
      name: '404',
      component: ErrorComponent
    }
  ]
})
