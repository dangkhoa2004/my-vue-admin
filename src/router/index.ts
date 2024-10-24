import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "./modules/home";
import authRoutes from "./modules/login";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { storageLocal } from "@/utils/auth";
import { isLoggedIn } from "@/utils/auth"; // Nhớ import hàm này

const routes = [
  {
    path: "/",
    redirect: "/trang-chu",
  },
  ...authRoutes,
  ...homeRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  const savedColor = localStorage.getItem('firstColor');
  if (savedColor) {
    document.documentElement.style.setProperty('--first-color', savedColor);
  }

  const requiresAuth = to.meta.requiresAuth;
  const userInfo = storageLocal().getItem("userInfo");

  // Kiểm tra nếu route yêu cầu đăng nhập
  if (requiresAuth && !isLoggedIn()) {
    next({ path: "/dang-nhap" }); // Chuyển hướng đến trang đăng nhập
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
