<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list">
                            <span> จัดการข้อมูล </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> ข่าวประชาสัมพันธ์ </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pt-40">
        <div class="container">
            <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
                <h4 class="section-bg-primary mb-20">
                    <i class="fa-solid fa-search"></i>
                    <span class="ml-10">ค้นหา</span>
                </h4>

                <div class="row">
                    <div class="col-12 col-lg-4">
                        <input
                            class="form-control"
                            v-model="search.title_th"
                            name="title_th"
                            type="text"
                            placeholder="หัวข้อข่าว (TH)"
                        />
                    </div>

                    <div
                        class="col-12 col-lg-4"
                        v-if="selectOptions.news_types.length != 0"
                    >
                        <client-only>
                            <v-select
                                label="title"
                                placeholder="ประเภทข่าว"
                                :options="selectOptions.news_types"
                                v-model="search.news_type_id"
                                class="v-select-no-border"
                                :clearable="true"
                            ></v-select
                        ></client-only>
                    </div>

                    <div
                        class="col-12 col-lg-4"
                        v-if="selectOptions.departments.length != 0"
                    >
                        <client-only>
                            <v-select
                                label="title"
                                placeholder="หน่วยงาน"
                                :options="selectOptions.departments"
                                v-model="search.department_id"
                                class="v-select-no-border"
                                :clearable="true"
                            ></v-select
                        ></client-only>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
                <h4 class="section-bg-primary mb-20">
                    <i class="fa-regular fa-news"></i>
                    <span class="ml-10">รายการข่าวประชาสัมพันธ์</span>
                </h4>

                <div class="mb-20">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            () => {
                                $router.push({ path: '/admin/news/add' });
                            }
                        "
                    >
                        <i class="fa-regular fa-plus"></i> เพิ่มข้อมูล
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
                                        <th class="text-center"></th>
                                        <th class="text-center">ชื่อ (TH)</th>
                                        <th class="text-center">ประเภทข่าว</th>
                                        <th class="text-center">หน่วยงาน</th>
                                        <th class="text-center">
                                            วันที่ลงข่าว
                                        </th>
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
                                        <td>
                                            <img
                                                :src="it.news_file"
                                                alt=""
                                                class="img-thumbnail"
                                                style="width: 100px"
                                            />
                                        </td>
                                        <td>{{ it.title_th }}</td>
                                        <td>
                                            {{ it.news_type.name }}
                                        </td>
                                        <td>
                                            {{ it.department.name_th }}
                                        </td>
                                        <td>
                                            {{
                                                dayjs(it.created_news)
                                                    .locale("th")
                                                    .format("DD MMM BB")
                                            }}
                                        </td>
                                        <th class="text-center">
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
                                        </th>
                                        <td
                                            class="text-center"
                                            style="min-width: 8rem"
                                        >
                                            <NuxtLink
                                                :to="{
                                                    name: 'admin-news-id',
                                                    params: { id: it.id },
                                                }"
                                                class="btn btn-warning text-uppercase"
                                            >
                                                <i
                                                    class="fa-regular fa-edit"
                                                ></i>
                                            </NuxtLink>
                                            <a
                                                :href="`../news/${it.id}`"
                                                class="btn btn-primary text-uppercase ml-10"
                                                target="_blank"
                                            >
                                                <i
                                                    class="fa-regular fa-eye"
                                                ></i>
                                            </a>
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useRuntimeConfig } from "#app";

// import tableItem from "~/components/list/TableItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
import basic_data from "~~/mixins/basicData";

// Variable

dayjs.extend(buddhistEra);
// const route = useRoute();
// const router = useRouter();

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
    news_types: [],
    departments: [],
});

// Function Fetch
const fetchDepartments = async () => {
    let data = await $fetch(`${apiBase}/department`, {
        params: {
            is_publish: 1,
        },
    }).catch((error) => error.data);

    selectOptions.value.departments = data.data
        .map((e) => {
            return { title: e.name_th, value: e.id };
        })
        .filter((x) => {
            if (
                useCookie("user").value &&
                useCookie("user").value.group_id == 2
            ) {
                if (x.value == useCookie("user").value.department_id) {
                    return true;
                } else {
                    return false;
                }
            }

            return true;
        });
};

const fetchNewsTypes = async () => {
    let data = await $fetch(`${apiBase}/news-type`, {
        params: {
            is_publish: 1,
        },
    }).catch((error) => error.data);

    selectOptions.value.news_types = data.data.map((e) => {
        return { title: e.name_th, value: e.id };
    });
};

const fetchItems = async () => {
    let params = {
        ...search.value,
        news_type_id:
            search.value.news_type_id == null
                ? undefined
                : search.value.news_type_id.value,
        department_id:
            search.value.department_id == null
                ? undefined
                : search.value.department_id.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
    };

    if (useCookie("user").value && useCookie("user").value.group_id == 2) {
        params["department_id"] = useCookie("user").value.department_id;
    }

    let data = await $fetch(`${apiBase}/news`, {
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
        fetchDepartments();
    },
    { deep: true }
);

watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
});

// Event
onMounted(() => {
    fetchDepartments();
    fetchNewsTypes();
    fetchItems();
});

useHead({
    title: "รายการข่าว",
});


definePageMeta({
    middleware: "auth",
});
</script>

<style scoped></style>
