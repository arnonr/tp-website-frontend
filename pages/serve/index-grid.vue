<template>
    <section class="portfolio__area pt-40 pb-40">
        <div class="container" v-if="items.length != 0">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="blog__list-item-wrapper">
                                <NewsListItem
                                    v-for="(it, i) in items"
                                    :key="i"
                                    :item="{
                                        link: '/serve/',
                                        id: it.id,
                                        title: it.title,
                                        file: it.serve_file,
                                        created: it.created_serve,
                                        type_name: it.service_category.name_th,
                                        dep_name: it.department.name_th,
                                    }"
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
// Import
import NewsListItem from "~/components/list/ServeListItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
// Variable
const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const perPage = ref(12);
const currentPage = ref(1);
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

const props = defineProps({
    props_item: {
        type: Object,
        required: true,
    },
});

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

//

// Function Fetch
const { data: resDepartment } = await useAsyncData("Department", async () => {
    let data = await $fetch(`${runtimeConfig.public.apiBase}/department`, {
        params: {
            is_publish: 1,
        },
    });

    return data;
});

selectOptions.value.departments = resDepartment.value.data.map((e) => {
    return { title: e.name_th, value: e.id };
});

const { data: resServiceCategory } = await useAsyncData(
    "ServiceCategory",
    async () => {
        let data = await $fetch(
            `${runtimeConfig.public.apiBase}/service-category`,
            {
                params: {
                    is_publish: 1,
                },
            }
        );

        return data;
    }
);

selectOptions.value.service_categories = resServiceCategory.value.data.map(
    (e) => {
        return { title: e.name_th, value: e.id };
    }
);

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
    let params = {
        ...search.value,
        service_category_id:
            search.value.service_category_id == null
                ? undefined
                : search.value.service_category_id.value,
        department_id:
            search.value.department_id == null
                ? undefined
                : search.value.department_id.value,
        created_year:
            search.value.created_year == null
                ? undefined
                : search.value.created_year.value,
        created_month:
            search.value.created_month == null
                ? undefined
                : search.value.created_month.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
        department_id: props.props_item.department_id,
    };

    let data = await $fetch(`${runtimeConfig.public.apiBase}/serve`, {
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
    [currentPage, search.value],
    () => {
        console.log("FREDOM");
        router.replace({
            name: "serve",
            query: { page: currentPage.value },
        });
        refreshNuxtData("serve");
    },
    { deep: true }
);

onMounted(() => {});

watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
});

// watch([res], () => {
//   items.value = res.value.data;
// });

// watch([resNewsType], () => {
//   newsType.value = resNewsType.value.data;
// });

useHead({
    title: "งานบริการวิชาการ",
});

</script>

<style scoped></style>
