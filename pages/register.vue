<template>
    <div>
        <register-area />
    </div>
</template>

<script>
import RegisterArea from "~~/components/login-register/RegisterArea.vue";

export default {
    components: {
        RegisterArea,
    },
    setup() {
        useHead({
            title: "สมัคใช้งานระบบจัดการเว็บไซต์งานบริการวิชาการ มจพ.",
        });

        definePageMeta({
            layout: false,
        });
    },
};
</script>
