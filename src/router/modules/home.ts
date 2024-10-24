import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/trang-chu",
    name: "trang-chu",
    component: Layout,
    redirect: "/trang-chu/home",
    children: [
      {
        path: "",
        name: "trang-chu-home",
        components: {
          default: () => import("@/views/home/index.vue"),
          listJob: () => import("@/components/list-job/index.vue"),
          listSchedule: () => import("@/components/list-schedual/index.vue"),
        },
      },
      {
        path: "cong-viec",
        name: "cong-viec",
        components: {
          default: () => import("@/views/home/index.vue"),
          listJob: () => import("@/components/list-job/index.vue"),
        },
      },
      {
        path: "lich-trinh",
        name: "lich-trinh",
        components: {
          default: () => import("@/views/home/index.vue"),
          listSchedule: () => import("@/components/list-schedual/index.vue"),
        },
      },
      {
        path: "cham-cong",
        name: "cham-cong",
        components: {
          default: () => import("@/views/home/index.vue"),
          listSchedule: () => import("@/components/list-point/index.vue"),
        },
      },
      {
        path: "tin-nhan",
        name: "tin-nhan",
        components: {
          default: () => import("@/views/home/index.vue"),
          listSchedule: () => import("@/components/list-chat/index.vue"),
        },
      },
      {
        path: "thong-bao",
        name: "thong-bao",
        components: {
          default: () => import("@/views/home/index.vue"),
          listSchedule: () => import("@/components/list-nofication/index.vue"),
        },
      },
      {
        path: "thong-tin",
        name: "thong-tin",
        components: {
          default: () => import("@/views/home/index.vue"),
          listSchedule: () => import("@/components/list-infomation/index.vue"),
        },
      },
      {
        path: "ung-dung",
        name: "ung-dung",
        components: {
          default: () => import("@/views/home/index.vue"),
          listSchedule: () => import("@/components/list-application/index.vue"),
        },
      },
    ],
  }];

export default homeRoutes;
