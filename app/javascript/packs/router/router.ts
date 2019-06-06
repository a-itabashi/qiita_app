import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import UserRegistrationsContainer from '../components/user_registrations_container.vue'
import CompleteUserRegistrationsContainer from '../components/complete_user_registrations_container.vue'
import UserLoginsContainer from '../components/user_logins_container.vue'
import ArticlesContainer from '../components/articles_container.vue'
import PostArticlesContainer from '../components/post_articles_container.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: UserRegistrationsContainer },
    { path: '/complete_user_registrations', component: CompleteUserRegistrationsContainer },
    { path: '/sign_in', component: UserLoginsContainer },
    { path: '/articles', component: ArticlesContainer },
    { path: '/post_articles', component: PostArticlesContainer },   
    { path: '*', redirect: '/' },
  ],
})