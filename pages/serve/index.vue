<template>
    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div
                    v-for="(select, index) in selectOptionsFields"
                    :key="index"
                    class="col-md-4 mb-20"
                >
                    <client-only>
                        <v-select
                            v-if="selectOptions[select.options].length"
                            v-model="search[select.model]"
                            :label="select.label"
                            :placeholder="select.placeholder"
                            :options="selectOptions[select.options]"
                            class="v-select-no-border"
                            :clearable="true"
                        />
                    </client-only>
                </div>

                <div class="col-md-4 mb-20">
                    <input
                        v-model="search.text_all"
                        class="form-control"
                        type="text"
                        placeholder="ค้นหางานบริการวิชาการ (พิมพ์ 3 ตัวอักษร)"
                    />
                </div>
            </div>
        </div>
        <div class="container" v-if="items.length != 0">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="blog__list-item-wrapper">
                                <NewsListItem
                                    v-for="(it, i) in items"
                                    :key="i"
                                    :item="mapItemToProps(it)"
                                />
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
            </div>
        </div>
    </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { useRuntimeConfig } from "#app";
// Import
import NewsListItem from "~/components/list/ServeListItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
// Variable
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const { apiBase } = config.public;

const items = ref([]);
const perPage = ref(12);
const currentPage = ref(parseInt(route.query.page) || 1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({
    department_id: null,
    service_category_id: null,
    title: "",
    created_year: null,
    created_month: null,
    is_publish: 1,
    text_all: "",
});

const selectOptionsFields = [
    {
        options: "service_categories",
        model: "service_category_id",
        label: "title",
        placeholder: "ประเภทงานบริการวิชาการ",
    },
    {
        options: "departments",
        model: "department_id",
        label: "title",
        placeholder: "หน่วยงาน",
    },
];

const selectOptions = ref({
    news_types: [],
    perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 },
    ],
    service_categories: [],
    departments: [],
});

// Function Fetch
const fetchOptions = async (endpoint, params = {}) => {
    try {
        const { data } = await $fetch(`${apiBase}/${endpoint}`, {
            params: params,
        });

        return data.map((e) => {
            return { title: e.name_th, value: e.id };
        });
    } catch (error) {
        console.error("Error fetching ", error);
        return [];
    }
};

const mapItemToProps = (item) => ({
    link: "serve/",
    id: item.id,
    title: item.title,
    file: item.serve_file,
    created: item.created_serve,
    type_name: item.service_category.name_th,
    dep_name: item.department.name_th,
});

// fetch
const { data: departmentsData } = await useAsyncData("departments", () =>
    fetchOptions("department", { is_publish: 1 })
);

selectOptions.value.departments = departmentsData.value;

const { data: serviceCategoriesData } = await useAsyncData(
    "service-categories",
    () => fetchOptions("service-category", { is_publish: 1 })
);
selectOptions.value.service_categories = serviceCategoriesData.value;

if (route.query.service_category_id != null) {
    search.value.service_category_id =
        selectOptions.value.service_categories.find((x) => {
            return x.value == route.query.service_category_id;
        });
}

if (route.query.page) {
    currentPage.value = route.query.page;
}

const { data: res } = await useAsyncData("serve", async () => {
    let text_all =
        search.value.text_all.length > 3 ? search.value.text_all : "";

    let params = {
        ...search.value,
        text_all: text_all,
        service_category_id: search.value.service_category_id?.value,
        department_id: search.value.department_id?.value,
        created_year: search.value.created_year?.value,
        created_month: search.value.created_month?.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
    };

    let data = await $fetch(`${apiBase}/serve`, {
        params: params,
    });
    items.value = data.data;
    totalPage.value = data.totalPage;
    totalItems.value = data.totalData;
    return data;
});

items.value = res.value.data;
totalPage.value = res.value.totalPage;
totalItems.value = res.value.totalData;

watch(
    [currentPage, search],
    () => {
        router.replace({
            name: "serve",
            query: { page: currentPage.value },
        });
        refreshNuxtData("serve");
    },
    { deep: true }
);

onMounted(async () => {});

watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
});

useHead({
    title: "งานบริการวิชาการ มจพ.",
});
</script>

<style scoped></style>
