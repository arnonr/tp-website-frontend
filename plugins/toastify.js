// plugins/toastify.js
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('toast', (message, type = 'info') => {
    Toastify({
      text: message,
      duration: 3000, // ระยะเวลาในการแสดงผล
      close: true, // แสดงปุ่มปิด
      gravity: "top", // ตำแหน่งแนวตั้ง
      position: "right", // ตำแหน่งแนวนอน
      backgroundColor: type === 'error' ? "linear-gradient(to right, #ff5f6d, #ffc371)" : "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
  });
});