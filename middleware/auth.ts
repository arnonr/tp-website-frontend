import { useRouter } from "vue-router";

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) return; // กัน error บน server-side

    const token = localStorage.getItem("tp_token"); // ดึง Token จาก Storage

    if (!token) {
        const router = useRouter();
        router.replace("/"); // Redirect ไปหน้าใหม่โดยไม่เพิ่มลงใน history
    }
});
