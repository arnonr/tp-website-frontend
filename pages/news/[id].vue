<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12" v-if="item != null">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="postbox__category">
                            <NuxtLink
                                :to="{
                                    path: '/news',
                                    query: { news_type_id: item.news_type_id },
                                }"
                                style="padding: 10px"
                            >
                                {{ item.news_type.name }}
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
                                <NuxtLink href="/news"> ข่าวทั้งหมด</NuxtLink>
                            </span>
                            <span class="dvdr breadcrumb-item-1"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> {{ item.title }} </span>
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
                        <div class="postbox__main">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper"
                                        >
                                            <h3>{{ item.title }}</h3>
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
                                                            class="fa-regular fa-calendar"
                                                        ></i>
                                                        {{
                                                            dayjs(
                                                                item.created_news
                                                            )
                                                                .locale("th")
                                                                .format(
                                                                    "DD MMM BB"
                                                                )
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
                                                            item.news_type
                                                                ? item.news_type
                                                                      .name
                                                                : ""
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="postbox__thumb m-img mt-20">
                                            <div
                                                class="news_gallery mt-2"
                                                v-if="newsGallery.length != 0"
                                            >
                                                <div class="container">
                                                    <div
                                                        class="row justify-content-center"
                                                    >
                                                        <div
                                                            class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 mx-auto"
                                                        >
                                                            <div
                                                                class="portfolio__slider-6"
                                                            >
                                                                <ClientOnly>
                                                                    <!--  -->

                                                                    <Swiper
                                                                        :slidesPerView="
                                                                            1
                                                                        "
                                                                        :spaceBetween="
                                                                            10
                                                                        "
                                                                        :loop="
                                                                            true
                                                                        "
                                                                        :thumbs="{
                                                                            swiper: thumbsSwiper,
                                                                        }"
                                                                        :navigation="
                                                                            true
                                                                        "
                                                                        :modules="
                                                                            modules
                                                                        "
                                                                        :speed="
                                                                            5000
                                                                        "
                                                                        :autoplay="{
                                                                            delay: 5000,
                                                                            disableOnInteraction: true,
                                                                        }"
                                                                        class="mySwiper2 mb-10"
                                                                    >
                                                                        <SwiperSlide
                                                                            v-for="ng in newsGallery"
                                                                            :key="
                                                                                ng.id
                                                                            "
                                                                        >
                                                                            <img
                                                                                :src="
                                                                                    ng.news_gallery_file
                                                                                "
                                                                                style="
                                                                                    width: 100%;
                                                                                "
                                                                            />
                                                                        </SwiperSlide>
                                                                    </Swiper>

                                                                    <Swiper
                                                                        @swiper="
                                                                            setThumbsSwiper
                                                                        "
                                                                        :spaceBetween="
                                                                            10
                                                                        "
                                                                        :slidesPerView="
                                                                            4
                                                                        "
                                                                        :freeMode="
                                                                            true
                                                                        "
                                                                        :watchSlidesProgress="
                                                                            true
                                                                        "
                                                                        :modules="
                                                                            modules
                                                                        "
                                                                        class="mySwiper"
                                                                    >
                                                                        <SwiperSlide
                                                                            v-for="ng in newsGallery"
                                                                            :key="
                                                                                ng.id
                                                                            "
                                                                        >
                                                                            <img
                                                                                :src="
                                                                                    ng.news_gallery_file
                                                                                "
                                                                                style="
                                                                                    width: 100%;
                                                                                    cursor: pointer;
                                                                                "
                                                                            />
                                                                        </SwiperSlide>
                                                                    </Swiper>
                                                                </ClientOnly>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper mt-60"
                                        >
                                            <div
                                                v-html="
                                                    item.detail == null
                                                        ? ''
                                                        : item.detail
                                                "
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <image-popup
            ref="image_popup"
            :images="newsGallery.map((item) => item.news_gallery_file)"
        />
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    Autoplay,
    FreeMode,
    Navigation,
    Pagination,
    Scrollbar,
    Thumbs,
} from "swiper";
import { useRuntimeConfig } from "#app";
import ImagePopup from "~~/components/common/modals/ImagePopup.vue";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const config = useRuntimeConfig();
const { apiBase } = config.public;
const route = useRoute();
const modules = [Autoplay, FreeMode, Navigation, Pagination, Scrollbar, Thumbs];
const image_popup = ref(null);

const newsGallery = ref([]);
const thumbsSwiper = ref(null);

const item = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

// Fetch
const { data: res1 } = await useAsyncData("news-gallery", async () => {
    let data = await $fetch(`${apiBase}/news-gallery`, {
        params: {
            is_publish: 1,
            news_id: route.params.id,
        },
    });
    return data;
});

newsGallery.value = [...res1.value.data];

const { data: res } = await useAsyncData("news", async () => {
    let data = await $fetch(`${apiBase}/news/${route.params.id}`);
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
