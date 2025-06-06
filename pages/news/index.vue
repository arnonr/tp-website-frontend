<template>
    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div
                    v-for="(select, index) in selectOptionsFields"
                    :key="index"
                    class="col-md-2 mb-20"
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

                <div class="col-md-6 mb-20">
                    <div class="">
                        <input
                            class="form-control"
                            v-model="search.text_all"
                            type="text"
                            placeholder="ค้นหาข่าว (พิมพ์ 3 ตัวอักษร)"
                        />
                    </div>
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
import NewsListItem from "~/components/list/ListItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
// Variable
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const { apiBase } = config.public;
const items = ref([]);
const perPage = ref(12);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({
    news_type: null,
    created_year: null,
    created_month: null,
    is_publish: 1,
    text_all: "",
});

const selectOptionsFields = [
    {
        options: "news_types",
        model: "news_type",
        label: "title",
        placeholder: "ประเภทข่าว",
    },
    {
        options: "years",
        model: "created_year",
        label: "title",
        placeholder: "ปี",
    },
    {
        options: "months",
        model: "created_month",
        label: "title",
        placeholder: "เดือน",
    },
];

const selectOptions = ref({
    news_types: [],
    perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 },
    ],
    years: [],
    months: [
        { title: "มกราคม", title_en: "January", value: "01" },
        { title: "กุมภาพันธ์", title_en: "February", value: "02" },
        { title: "มีนาคม", title_en: "March", value: "03" },
        { title: "เมษายน", title_en: "April", value: "04" },
        { title: "พฤษภาคม", title_en: "May", value: "05" },
        { title: "มิถุนายน", title_en: "June", value: "06" },
        { title: "กรกฎาคม", title_en: "July", value: "07" },
        { title: "สิงหาคม", title_en: "August", value: "08" },
        { title: "กันยายน", title_en: "September", value: "09" },
        { title: "ตุลาคม", title_en: "October", value: "10" },
        { title: "ฑฤศจิกายน", title_en: "November", value: "11" },
        { title: "ธันวาคม", title_en: "December", value: "12" },
    ],
});

let year = dayjs().year();

for (let i = 0; i <= 9; i++) {
    selectOptions.value.years.push({
        title: year - i + 543,
        title_en: year - i,
        value: year - i,
    });
}

const mapItemToProps = (it) => ({
    link: "news/",
    id: it.id,
    title: it.title,
    file: it.news_file,
    created: it.created_news,
    type_name: it.news_type.name,
});

// Function Fetch
const { data: resNewsType } = await useAsyncData("newsType", async () => {
    let data = await $fetch(`${apiBase}/news-type`, {
        params: {
            is_publish: 1,
        },
    });

    return data;
});

selectOptions.value.news_types = resNewsType.value.data.map((e) => {
    return { title: e.name, value: e.id };
});

if (route.query.page) {
    currentPage.value = route.query.page;
}

const { data: res } = await useAsyncData("news", async () => {
    let text_all =
        search.value.text_all.length > 3 ? search.value.text_all : "";

    let params = {
        ...search.value,
        text_all: text_all,
        news_type_id: search.value.news_type?.value,
        created_year: search.value.created_year?.value,
        created_month: search.value.created_month?.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
    };

    let data = await $fetch(`${apiBase}/news`, {
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
            path: "/news",
            query: { page: currentPage.value },
        });
        refreshNuxtData("news");
    },
    { deep: true }
);

onMounted(() => {});

watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
});

useHead({
    title: "ข่าวและประกาศ งานบริการวิชาการ มจพ.",
});

definePageMeta({
    name: "news",
    //   middleware: "auth",
});
</script>

<style scoped></style>
