// Tools
import Vue from 'vue'
import Router from 'vue-router'

// Views
import FolderAccess from '@/Views/FolderAccess'

// Components
import HomePage from '@/Components/HomePage'
import RemedyChange from '@/Components/RemedyChange'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Remedy/RemedyChange',
      name: 'RemedyChange',
      component: RemedyChange
    },
    {
      path: 'Folder/FolderAccess',
      name: 'FolderAccess',
      component: FolderAccess
    }
  ]
})
