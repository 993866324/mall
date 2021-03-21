import Vue from "vue"
import VueRouter from "vue-router"


Vue.use(VueRouter)

// 解决push,replace双击跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: () => import("@/views/home/Home.vue")
  },
  {
    path: '/category',
    component: () => import("@/views/category/Category.vue")
  },
  {
    path: '/shopcart',
    component: () => import("@/views/shopcart/Cart.vue")
  },
  {
    path: '/profile',
    component: () => import("@/views/profile/Profile.vue")
  },
  {
    path: '/detail/:iid',
    component: () => import("@/views/detail/Detail.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router