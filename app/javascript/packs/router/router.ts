import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import UserRegistrationsContainer from '../components/user_registrations_container.vue'
import CompleteUserRegistrationsContainer from '../components/complete_user_registrations_container.vue'
import UserLoginsContainer from '../components/user_logins_container.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: UserRegistrationsContainer },
    { path: '/complete_user_registrations', component: CompleteUserRegistrationsContainer },
    { path: '/sign_in', component: UserLoginsContainer },
    { path: '*', redirect: '/' },
  ],
})