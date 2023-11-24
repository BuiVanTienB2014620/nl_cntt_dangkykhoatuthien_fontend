import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",

    component: () => import("@/layouts/Base.vue"),

    children: [
      {
        path: "",
        name: "trangchu",
        component: () => import("@/views/TrangChu.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
      },

      {
        path: "/auth",
        name: "auth",
        component: () => import("@/views/Auth.vue"),
      },
      {
        path: "/product/:id",
        name: "product",
        component: () => import("@/views/Product.vue"),
        props: true,
      },

      {
        path: "/loginuser",
        name: "login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/users",
        name: "user.register",
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "/events",
        name: "events",
        component: () => import("@/views/Event.vue"),
      },
      {
        path: "/psuccess",
        name: "psuccess",
        component: () => import("@/views/Psuccess.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layouts/Admin.vue"),
    children: [
      {
        path: "",
        name: "awelcome",
        component: () => import("@/admin/AWelcome.vue"),
      },
      {
        path: "user",
        name: "admin-user",
        component: () => import("@/admin/User.vue"),
      },

      {
        path: "position",
        name: "admin-position",
        component: () => import("@/admin/Position.vue"),
      },
      {
        path: "dire",
        name: "dire",
        component: () => import("@/admin/Directcard.vue"),
      },
      {
        path: "addposition",
        name: "addposition",
        component: () => import("@/admin/position/addposition.vue"),
      },
      {
        path: "editposition/:id",
        name: "editposition",
        component: () => import("@/admin/position/editposition.vue"),
      },
    ],
  },
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
