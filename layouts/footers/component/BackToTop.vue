<template>
    <div class="back-to-top-wrapper scroll-top">
        <button id="back_to_top" type="button" class="back-to-top-btn">
            <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11 6L6 1L1 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    </div>

    <div class="admin-wrapper">
        <button
            v-if="
                (useCookie('user').value &&
                    useCookie('user').value.group_id == 1) ||
                (useCookie('user').value &&
                    useCookie('user').value.group_id == 2)
            "
            id="back_to_top"
            type="button"
            class="admin-btn"
            @click="handleAdminOpenSidebar"
        >
            <i class="fa fa-list"></i>
        </button>

        <!-- off canvas start -->
        <off-canvas-admin-custom
            ref="off_canvas"
        />
        <!-- off canvas end -->
    </div>
</template>

<script>
import OffCanvasAdminCustom from "~~/components/common/off-canvas/OffCanvasAdminCustom.vue";
export default {
    components: { OffCanvasAdminCustom },
    methods: {
        handleAdminOpenSidebar() {
            this.$refs.off_canvas.openOffcanvas();
        },
    },
    mounted() {
        const result = document.querySelector(".scroll-top");
        if (result) {
            document.addEventListener("scroll", () => {
                if (window.scrollY > 200) {
                    result.style.display = "block";
                } else {
                    result.style.display = "none";
                }
            });
            result.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    },
};
</script>
