import { RouteRecordRaw } from 'vue-router';

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: () => import('@/views/user-profile/index.vue'),
    meta: {
      title: 'User Profile',
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

export default userRoutes;
