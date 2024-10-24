import { RouteRecordRaw } from 'vue-router';

const reportsRoutes: RouteRecordRaw[] = [
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('@/views/reports/index.vue'),
    meta: {
      title: 'Reports',
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

export default reportsRoutes;
