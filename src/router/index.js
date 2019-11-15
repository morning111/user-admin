import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
// import Agreement from '@/pages/agreement'
// import ChargesRefund from '@/pages/chargesRefund'
// import CourseUserComplaint from '@/pages/courseUserComplaint'
// import Trainer from '@/pages/trainer'
// import UserComplaint from '@/pages/userComplaint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      // children:[{
      //   path: '/userComplaint',
      //   name:'userComplaint',
      //   component: UserComplaint
      // },{
      //   path: '/agreement',
      //   name:'agreement',
      //   component: Agreement
      // },{
      //   path: '/trainer',
      //   name:'trainer',
      //   component: Trainer
      // },{
      //   path: '/chargesRefund',
      //   name:'chargesRefund',
      //   component: ChargesRefund
      // },{
      //   path: '/courseUserComplaint',
      //   name:'courseUserComplaint',
      //   component: CourseUserComplaint
      // }]
    }
  ]
})
