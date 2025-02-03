import { useRouter } from "vue-router";

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) return; // กัน error บน server-side

    const token = useCookie("tp_token");

    if (!token) {
        window.location.href = "/";
    }
});
