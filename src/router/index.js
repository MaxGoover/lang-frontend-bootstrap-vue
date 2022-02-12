import store from '../store/index.js'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  // {
  //   path: '/reading',
  //   name: 'Reading',
  //   component: () => import('../views/Books.vue'),
  //   beforeEnter: authGuard
  // },
  // {
  //   path: '/reading/book/:bookId',
  //   name: 'Book',
  //   props: true,
  //   component: () => import('../components/books/Book'),
  //   beforeEnter: authGuard
  // },
  {
    path: '/training/grammar',
    name: 'Grammar',
    component: () => import('../views/training/Grammar.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/training/grammar/:alias',
    name: 'GrammarTraining',
    props: true,
    component: () => import('../components/trainings/grammar/GrammarTraining.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/Login.vue')
  // },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   component: () => import('../views/Signup.vue')
  // },
  // {
  //   path: '*',
  //   name: 'Page404',
  //   component: () => import('../components/errors/Page404.vue')
  // }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // Если пользователь авторизован
  const isAuthorized = store.getters['authorization/isAuthorized']

  // и путь на страницу авторизации или регистрации, то ошибка 404
  if (isAuthorized && (to.name === 'Login' || to.name === 'Signup')) {
    next({ name: 'Page404' })
  } else if (!isAuthorized && to.matched.some(record => record.meta.requiresAuth)) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

function authGuard (to, from, next) {
  store.getters['authorization/isAuthorized'] ? next() : next({ name: 'Login' })
}

export default router
