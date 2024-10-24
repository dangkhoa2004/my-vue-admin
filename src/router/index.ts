import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "./modules/home";  // Không cần spread ở đây
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
