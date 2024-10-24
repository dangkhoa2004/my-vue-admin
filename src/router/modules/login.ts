import { RouteRecordRaw } from "vue-router";

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/dang-nhap',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/dang-xuat',
    name: 'Logout',
    beforeEnter: (to, _from, next) => {
      localStorage.clear();
      next('/dang-nhap');
    },
    component: () => import('@/views/login/index.vue'),
  }
];

export default authRoutes;