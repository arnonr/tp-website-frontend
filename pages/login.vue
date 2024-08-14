<template>
    <div>
        <login-area />
    </div>
</template>

<script>
import LoginArea from "~~/components/login-register/LoginArea.vue";

export default {
    components: {
        LoginArea,
    },
    setup() {
        useHead({
            title: "เข้าสู่ระบบจัดการเว็บไซต์อุทยานเทคโนโลยี มจพ.",
        });
        definePageMeta({
            layout: false,
        });
    },
};
</script>
