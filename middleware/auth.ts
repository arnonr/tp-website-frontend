export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) return; // กัน error บน server-side

    const token = localStorage.getItem("tp_token"); // ดึง Token จาก Storage

    if (!token) {
        return navigateTo("/"); // ถ้ายังไม่ล็อกอินให้ไปหน้า Login
    }
});
