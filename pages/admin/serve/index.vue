<template>
    <section
        class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"
        v-if="token"
    >
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list">
                            <span> จัดการข้อมูล </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> งานบริการวิชาการ </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pt-40" v-if="token">
        <div class="container">
            <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
                <h4 class="section-bg-primary mb-20">
                    <i class="fa-solid fa-search"></i>
                    <span class="ml-10">ค้นหา</span>
                </h4>

                <div class="col-12 col-lg-12 mb-20">
                    <input
                        class="form-control"
                        v-model="search.title_th"
                        name="title"
                        type="text"
                        placeholder="ชื่อหัวข้องานบริการวิชาการ"
                    />
                </div>

                <div>
                    <button class="btn btn-success">ค้นหา</button>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pb-20" v-if="token">
        <div class="container">
            <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
                <h4 class="section-bg-primary mb-20">
                    <i class="fa-regular fa-list"></i>
                    <span class="ml-10">รายการงานบริการวิชาการ</span>
                </h4>

                <div class="mb-20">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            () => {
                                $router.push({ path: '/admin/serve/add' });
                            }
                        "
                    >
                        <i class="fa-regular fa-plus"></i>
                        เพิ่มข้อมูล
                    </button>
                </div>

                <div class="row gx-2 grid">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table
                                class="table table-bordered table-striped table-admin"
                            >
                                <thead>
                                    <tr>
                                        <th class="text-center">ชื่อ (TH)</th>
                                        <th class="text-center">หน่วยงาน</th>
                                        <th class="text-center">ประเภท</th>
                                        <th class="text-center">สถานะ</th>
                                        <th
                                            class="text-center"
                                            style="min-width: 150px"
                                        >
                                            จัดการ
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-if="items.length != 0">
                                    <tr v-for="(it, idx) in items" :key="idx">
                                        <td cla ss="text-center">
                                            {{ it.title_th }}
                                        </td>
                                        <td class="text-center">
                                            {{ it.department.name_th }}
                                        </td>
                                        <td class="text-center">
                                            {{ it.service_category.name_th }}
                                        </td>
                                        <td class="text-center">
                                            <span
                                                v-if="it.is_publish != null"
                                                :class="
                                                    'badge rounded-pill bg-' +
                                                    selectOptions.publishes[
                                                        it.is_publish
                                                    ].color
                                                "
                                                >{{
                                                    selectOptions.publishes[
                                                        it.is_publish
                                                    ].name_th
                                                }}</span
                                            >
                                        </td>
                                        <td class="text-center">
                                            <NuxtLink
                                                :to="{
                                                    name: 'admin-serve-edit-id',
                                                    params: { id: it.id },
                                                }"
                                                class="btn btn-warning text-uppercase ml-5"
                                            >
                                                <i
                                                    class="fa-regular fa-edit"
                                                ></i>
                                            </NuxtLink>

                                            <button
                                                class="btn btn-danger ml-5"
                                                @click="onConfirmDelete(it.id)"
                                            >
                                                <i
                                                    class="fa-regular fa-trash"
                                                ></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-12">
                    <div class="tp-pagination mt-30">
                        <blog-pagination
                            :totalPage="totalPage"
                            :currentPage="currentPage"
                            :totalItems="totalItems"
                            @update:currentPage="currentPage = $event"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useRuntimeConfig } from "#app";
// Import
// import tableItem from "~/components/list/TableItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
import basic_data from "~~/mixins/basicData";
// Variable

dayjs.extend(buddhistEra);
// const route = useRoute();
const router = useRouter();

const config = useRuntimeConfig();
const { apiBase } = config.public;
const items = ref([]);
const perPage = ref(20);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({});

const selectOptions = ref({
    perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 },
    ],
    publishes: basic_data.data().publishes,
});

// Function Fetch
const fetchItems = async () => {
    let params = {
        ...search.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
    };

    if (useCookie("user").value && useCookie("user").value.group_id == 2) {
        params["department_id"] = useCookie("user").value.department_id;
    }

    let data = await $fetch(`${apiBase}/serve`, {
        params: params,
    }).catch((error) => error.data);

    items.value = data.data;
    totalPage.value = data.totalPage;
    totalItems.value = data.totalData;
};

// Watch
watch(
    [currentPage, search],
    () => {
        fetchItems();
    },
    { deep: true }
);

watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
});

// Event

const token = ref(null);
onMounted(() => {
    token.value = useCookie("tp_token").value;
    if (!token.value) {
        router.replace("/"); // Redirect ทันที
    } else {
        fetchItems();
    }
});

const onConfirmDelete = async (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancle it!",
    }).then((result) => {
        if (result.isConfirmed) {
            onDelete(id);
        }
    });
};

const onDelete = async (id) => {
    await $fetch(`${apiBase}/serve/${id}`, {
        method: "delete",
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast("ลบรายการเสร็จสิ้น", "success");
                fetchItems();
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

useHead({
    title: "รายการการให้บริการ",
});
</script>

<style scoped></style>
