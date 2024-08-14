<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12" v-if="item != null">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="postbox__category">
                            <NuxtLink
                                :to="{
                                    path: '/department',
                                }"
                                style="padding: 10px"
                            >
                                {{ item.name_th }}
                            </NuxtLink>
                        </div>

                        <div class="breadcrumb__list">
                            <span class="breadcrumb-item-1">
                                <NuxtLink
                                    :to="{
                                        path: '/',
                                    }"
                                >
                                    หน้าหลัก
                                </NuxtLink>
                            </span>
                            <span class="dvdr breadcrumb-item-1"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>

                            <span class="breadcrumb-item-1">
                                <NuxtLink
                                    :to="{
                                        path: '/department',
                                    }"
                                >
                                    หน่วยงาน</NuxtLink
                                >
                            </span>

                            <span class="dvdr breadcrumb-item-1"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> {{ item.name_th }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  -->
    <section class="postbox__area pt-40 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="postbox__wrapper" v-if="item">
                        <!-- Content -->
                        <div class="postbox__main">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper"
                                        >
                                            <h3 class="text-color-primary">
                                                {{ item.name_th }}
                                            </h3>
                                            <h3>{{ item.name_en }}</h3>
                                            <hr />
                                        </div>
                                        <!--  -->
                                        <!-- Detail -->
                                        <div
                                            class="mt-30 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i class="fa-solid fa-home"></i>
                                                <span class="ml-10"
                                                    >ข้อมูลหน่วยงาน</span
                                                >
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div
                                                v-html="
                                                    item.detail_th == null
                                                        ? ''
                                                        : item.detail_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Detail -->

                                        <!-- Detail -->
                                        <div
                                            class="mt-30 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fas fa-chalkboard-teacher"
                                                ></i>
                                                <span class="ml-10">{{
                                                    "งานบริการวิชาการ"
                                                }}</span>
                                            </h4>
                                        </div>
                                        <div
                                            class="postbox__details-content-wrapper mt-0 p-2"
                                        >
                                            <ServeGridItem
                                                :props_item="{
                                                    department_id:
                                                        route.params.id,
                                                }"
                                            />
                                        </div>
                                        <!-- End Detail -->
                                        <!-- Detail -->
                                        <div
                                            class="mt-30 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fa-solid fa-newspaper"
                                                ></i>
                                                <span class="ml-10">{{
                                                    "ข่าวประชาสัมพันธ์"
                                                }}</span>
                                            </h4>
                                        </div>
                                        <div
                                            class="postbox__details-content-wrapper mt-0 p-2"
                                        >
                                            <NewsGridItem
                                                :props_item="{
                                                    department_id:
                                                        route.params.id,
                                                }"
                                            />
                                        </div>
                                        <!-- End Detail -->
                                        <!-- Detail -->
                                        <div
                                            class="mt-30 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fa-solid fa-phone"
                                                ></i>
                                                <span class="ml-10">{{
                                                    "ติดต่อหน่วยงาน"
                                                }}</span>
                                            </h4>
                                        </div>
                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div
                                                v-html="
                                                    item.contact_th == null
                                                        ? ''
                                                        : item.contact_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Detail -->
                                    </div>
                                </div>
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
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
import { useRuntimeConfig } from "#app";

import NewsGridItem from "~/pages/news/index-grid.vue";
import ServeGridItem from "~/pages/serve/index-grid.vue";

const route = useRoute();
const config = useRuntimeConfig();
const { apiBase } = config.public;

const item = ref(null);

// Fetch

const { data: res } = await useAsyncData("department", async () => {
    let data = await $fetch(`${apiBase}/department/${route.params.id}`, {});
    return data;
});

item.value = res.value.data;

useHead({
    title: item.value.name_th,
});
</script>

<style scoped>
.breadcrumb__title {
    font-size: 50px;
}
</style>
