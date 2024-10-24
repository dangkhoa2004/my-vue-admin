import { RouteRecordRaw } from 'vue-router';

const settingsRoutes: RouteRecordRaw[] = [
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/settings/index.vue'),
    meta: {
      title: 'Settings',
      requiresAuth: true,
    },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = !!localStorage.getItem('authToken');
      if (isAuthenticated) {
        next();
      } else {
        next('/dang-nhap');
      }
    }
  }
];

export default settingsRoutes;
