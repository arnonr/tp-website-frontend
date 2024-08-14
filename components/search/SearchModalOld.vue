<!-- components/SearchModal.vue -->
<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <button class="close-button" @click="closeModal">&times;</button>
            <h4 class="pt-40">ค้นหาข้อมูล</h4>
            <input
                class="form-control"
                type="text"
                v-model="searchQuery"
                placeholder="กรอกคำค้นหา"
            />
            <div class="text-center">
                <button
                    @click="submitSearch"
                    class="btn btn-primary mt-4 custom-btn"
                >
                    <i class="fa fa-search"></i> ค้นหา
                </button>
                <button
                    @click="closeModal"
                    class="btn btn-danger mt-4 ms-2 custom-btn"
                >
                    <i class="fa fa-close"></i> ปิด
                </button>
            </div>
            <hr />
            <div>
                <!-- งานบริการวิชาการ -->
                <div class="mt-30 pl-10 pt-10 pb-10 bg-grey">
                    <h4 class="section-bg-primary">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <span class="ml-10">{{ "งานบริการวิชาการ" }}</span>
                    </h4>
                </div>
                <div class="postbox__details-content-wrapper mt-0 p-2">
                    <ServeGridItem v-if="text_all" :text_all="text_all" />
                </div>
                <!-- End  -->
            </div>
            <div>
                <!-- งานบริการวิชาการ -->
                <div class="mt-30 pl-10 pt-10 pb-10 bg-grey">
                    <h4 class="section-bg-primary">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <span class="ml-10">{{ "ข่าวประชาสัมพันธ์" }}</span>
                    </h4>
                </div>
                <div class="postbox__details-content-wrapper mt-0 p-2">
                    <NewsGridItem v-if="text_all" :text_all="text_all" />
                </div>
                <!-- End  -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
import NewsGridItem from "~/pages/news/index-search-grid.vue";
import ServeGridItem from "~/pages/serve/index-search-grid.vue";

// Define props
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
});

// Define emits
const emit = defineEmits(["close", "search"]);

// Define reactive data
const searchQuery = ref("");
const text_all = ref("");

// Define methods
const closeModal = () => {
    emit("close");
};

const submitSearch = () => {
    text_all.value = searchQuery.value;
    // emit("search", searchQuery.value);
    // closeModal();
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    width: 80%;
    padding: 20px;
    border-radius: 8px;
}

.custom-btn {
    max-width: 300px; /* ให้ความกว้างของปุ่มเป็นอัตโนมัติ */
    padding: 8px 12px; /* ขนาด padding ของปุ่ม */
    font-size: 16px; /* ขนาดของข้อความในปุ่ม */
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px; /* Positioning the button in the top-right corner */
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
}
</style>
