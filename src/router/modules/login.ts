import { RouteRecordRaw } from "vue-router";
import { logout } from "@/utils/auth";

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
      logout();
      next('/dang-nhap');
    },
    component: () => import('@/views/login/index.vue'),
  }
];

export default authRoutes;
