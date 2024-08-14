<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12" v-if="item != null">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="postbox__category">
                            <NuxtLink
                                :to="{
                                    path: '/serve',
                                    query: {
                                        service_category_id:
                                            item.service_category_id,
                                    },
                                }"
                                style="padding: 10px"
                            >
                                {{ item.service_category.name_th }}
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
                                        path: '/serve',
                                    }"
                                >
                                    งานบริการวิชาการ</NuxtLink
                                >
                            </span>

                            <span class="dvdr breadcrumb-item-1"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> {{ item.title_th }} </span>
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
                        <!-- Image -->
                        <!-- Content -->
                        <div class="postbox__main">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper"
                                        >
                                            <h3>{{ item.title_th }}</h3>
                                            <hr />
                                        </div>

                                        <div
                                            class="postbox__meta-wrapper d-flex align-items-center flex-wrap"
                                        >
                                            <div class="postbox__meta-item">
                                                <div
                                                    class="postbox__meta-content"
                                                >
                                                    <span
                                                        class="postbox__meta-type"
                                                    >
                                                        <i
                                                            class="fa-regular fa-home"
                                                        ></i>
                                                        {{
                                                            item.department
                                                                .name_th
                                                        }}
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="postbox__meta-item">
                                                <div
                                                    class="postbox__meta-content"
                                                >
                                                    <span
                                                        class="postbox__meta-type"
                                                    >
                                                        <i
                                                            class="fa-regular fa-tag"
                                                        ></i>
                                                        {{
                                                            item.service_category
                                                                ? item
                                                                      .service_category
                                                                      .name_th
                                                                : ""
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Detail -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fas fa-info-circle"
                                                ></i>
                                                <span class="ml-10">
                                                    รายละเอียด
                                                </span>
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
                                        <!-- Start Rate -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fas fa-dollar-sign"
                                                ></i>
                                                <span class="ml-10"
                                                    >อัตราค่าใช้บริการ/อบรม
                                                </span>
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div
                                                v-html="
                                                    item.rates_th == null
                                                        ? ''
                                                        : item.rates_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Rate -->
                                        <!-- Start Location -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fas fa-map-marker-alt"
                                                ></i>
                                                <span class="ml-10">
                                                    สถานที่
                                                </span>
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div
                                                v-html="
                                                    item.location_th == null
                                                        ? ''
                                                        : item.location_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Location -->
                                        <!-- Start Contact -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i class="fas fa-phone"></i>
                                                <span class="ml-10"
                                                    >ข้อมูลติดต่อ</span
                                                >
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
                                        <!-- End Contact -->

                                        <!-- Start Gallery -->
                                        <!-- <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i class="fas fa-image"></i>
                                                <span class="ml-10"
                                                    >ภาพกิจกรรม</span
                                                >
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
                                        </div> -->
                                        <!-- End Contact -->
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

const route = useRoute();
const config = useRuntimeConfig();
const { apiBase } = config.public;

const item = ref(null);

// Fetch

const { data: res } = await useAsyncData("serve", async () => {
    let data = await $fetch(`${apiBase}/serve/${route.params.id}`, {
        params: {},
    });
    return data;
});

item.value = res.value.data;

useHead({
    title: item.value.title,
});
</script>

<style scoped>
.breadcrumb__title {
    font-size: 50px;
}
</style>
