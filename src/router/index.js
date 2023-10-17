import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Trangchu from "@/views/Trangchu.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "trangchu",
        component: Trangchu,
    },
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/",
        name: "register",
        component:Register,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    }
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;