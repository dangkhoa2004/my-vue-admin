import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "./modules/home";  // Không cần spread ở đây
import userRoutes from "./modules/user";
import adminRoutes from "./modules/admin";
import reportsRoutes from "./modules/reports";
import settingsRoutes from "./modules/settings";
import authRoutes from "./modules/login";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { storageLocal } from "@/utils/auth";

const routes = [
  {
    path: "/",
    redirect: "/trang-chu",
  },
  ...authRoutes,
  ...homeRoutes,
  ...userRoutes,
  ...adminRoutes,
  ...reportsRoutes,
  ...settingsRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware để xử lý trước khi chuyển hướng
router.beforeEach((to, from, next) => {
  NProgress.start();
  const userInfo = storageLocal().getItem("userInfo");
  if (!userInfo && to.path !== "/dang-nhap") {
    next({ path: "/dang-nhap" });
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;