import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Approved from '../views/Approved.vue'
import Rejected from '../views/Rejected.vue'
import CommonQueries from '../views/CommonQueries.vue'
import AddQnA from '../views/AddQnA.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import LandingPage from '../views/LandingPage.vue'
import StaffHome from '../views/StaffHome.vue'
import ResetPassword from '../views/ResetPassword.vue'
import StudentHome from '../views/StudentHome.vue'
import Groups from '../views/Groups.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ResetPassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/approved',
    name: 'approved',
    component: Approved
  },
  {
    path: '/Rejected',
    name: 'Rejected',
    component: Rejected
  },
  {
    path: '/CommonQueries',
    name: 'CommonQueries',
    component: CommonQueries
  },
  {
    path: '/AddQnA',
    name: 'AddQnA',
    component: AddQnA
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/StaffHome',
    name: 'StaffHome',
    component: StaffHome
  },
  {
    path: '/StudentHome',
    name: 'StudentHome',
    component: StudentHome
  },
  {
    path: '/Groups',
    name: 'Groups',
    component: Groups
  }
]

const router = new VueRouter({
  routes
})

export default router
