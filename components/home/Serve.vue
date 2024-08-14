<template>
    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 mb-20">
                    <h4 class="text-color-primary">งานบริการวิชาการ</h4>
                </div>
            </div>
            <div class="row gx-2 grid">
                <div
                    v-for="(it, i) in items"
                    :key="i"
                    class="col-xxl-3 col-xl-3 col-lg-6 col-md-6"
                >
                    <news-grid-item
                        :item="{
                            link: 'serve/',
                            id: it.id,
                            title: it.title,
                            file: it.serve_file,
                        }"
                    />
                </div>
            </div>

            <div class="div-btn-news">
                <div class="col">
                    <div class="tp-button-demo text-end">
                        <NuxtLink
                            to="/serve"
                            class="tp-btn-border-brown text-uppercase"
                            >{{ "งานบริการวิชาการทั้งหมด" }}</NuxtLink
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import NewsGridItem from "~/components/list/GridItem.vue";
// const { locale } = useI18n();
const runtimeConfig = useRuntimeConfig();

const items = ref([]);

const search = ref({
    is_publish: 1,
});

const { data: res } = await useAsyncData("serve", async () => {
    let data = await $fetch(`${runtimeConfig.public.apiBase}/serve`, {
        params: {
            ...search.value,
            perPage: 8,
            currentPage: 1,
            orderBy: "id",
            order: "desc",
            lang: useCookie("lang").value,
        },
    });

    if (data) {
        return { data: data.data };
    } else {
        return { data: [] };
    }
});

if (res.value != null) {
    items.value = res.value.data;
} else {
    items.value = [];
}
</script>

<style scoped></style>
