import { RouteRecordRaw } from 'vue-router';

const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      title: 'Admin Dashboard',
      requiresAuth: true,
      roles: ['admin'],  // Chỉ admin mới được truy cập
    },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = !!localStorage.getItem('authToken');
      const userRole = localStorage.getItem('userRole');  // Giả sử bạn lưu role người dùng trong localStorage

      if (isAuthenticated && userRole === 'admin') {
        next();
      } else {
        next('/dang-nhap');  // Chuyển hướng nếu chưa đăng nhập hoặc không phải admin
      }
    }
  }
];

export default adminRoutes;
