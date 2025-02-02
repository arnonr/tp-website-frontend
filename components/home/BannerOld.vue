<template>
    <section class="" v-if="items.length != 0">
        <!-- <swiper
            class="slider__active-12 slider__height-12 swiper-container swiper-fullwidth"
            :slidesPerView="1"
            :spaceBetween="0"
            :effect="'fade'"
            :loop="true"
            :modules="modules"
            :preventClicks="false"
            :preventClicksPropagation="false"
            :slideToClickedSlide="false"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: true,
            }"
            :pagination="{
                clickable: true,
            }"
            :navigation="{
                nextEl: '.slider-button-12-next',
                prevEl: '.slider-button-12-prev',
            }"
            v-if="items.length != 0"
        >
            <swiper-slide
                :class="`slider__item-11 slider__bg-11 ${it.bg} d-flex align-items-center`"
                v-for="it in items"
                :key="it.id"
            >
                <a :href="it.banner_url">
                    <img
                        class="banner-image"
                        :src="it.banner_file"
                        :alt="it.title"
                        style="width: 100%"
                    />
                </a>
            </swiper-slide>

            <div class="slider-pagination-12 tp-swiper-fraction"></div>
            <div
                class="slider__nav-arrow-12 d-flex flex-column d-none d-md-block"
            >
                <button class="slider-button-12-next">
                    <i class="fa-regular fa-chevron-right"></i>
                </button>
                <button class="slider-button-12-prev">
                    <i class="fa-regular fa-chevron-left"></i>
                </button>
            </div>
        </swiper> -->

        <!--  -->
        <swiper
            :navigation="true"
            :pagination="pagination"
            :modules="modules"
            :loop="true"
            class="swiper-fullwidth"
            :breakpoints="{
                '0': {
                    slidesPerView: 1,
                },
                '768': {
                    slidesPerView: 1,
                },
                '992': {
                    slidesPerView: 1,
                },
            }"
            :speed="5000"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: true,
            }"
        >
            <swiper-slide v-for="(slide, index) in items" :key="index">
                <div class="slide-content">
                    <img
                        :src="slide.banner_file"
                        alt="Slide Image"
                        class="slide-image"
                    />
                    <!-- <div class="slide-text">
                                <h2>{{ slide.title }}</h2>
                                <p>{{ slide.description }}</p>
                            </div> -->
                </div>
            </swiper-slide>

            <!-- เพิ่มปุ่ม navigation ถ้าจำเป็น -->
            <!-- <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> -->

            <!-- เพิ่ม pagination ถ้าจำเป็น -->
            <!-- <div class="swiper-pagination"></div> -->
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    EffectFade,
    Mousewheel,
    Keyboard,
    FreeMode,
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar,
    Thumbs,
} from "swiper";
export default {
    components: { Swiper, SwiperSlide },
    async setup() {
        const runtimeConfig = useRuntimeConfig();
        const renderFraction = (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span>
                <span class="tp-swiper-fraction-divide"></span>
              <span class="${totalClass}"></span>`;
        };

        const items = ref([
            {
                id: 1,
                title: "Banner 1",
                banner_file: "/images/banner/banner1.jpeg",
            },
            {
                id: 1,
                title: "Banner 2",
                banner_file: "/images/banner/banner2.jpeg",
            },
        ]);
        // const { data: res } = await useAsyncData("banner", async () => {
        //     let data = await $fetch(`${runtimeConfig.public.apiBase}/banner`, {
        //         params: {
        //             is_publish: 1,
        //             lang: useCookie("lang").value,
        //         },
        //     });
        //     return data;
        // });

        // items.value = res.value.data;

        return {
            items,
            renderFraction,
            modules: [EffectFade, Mousewheel, Navigation, Pagination, Autoplay],
        };
    },
};
</script>

<style>
.banner-image {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: center;
}
</style>
<style scoped>
.slider__height-12 {
    height: auto !important;
}

.slider__bg-12 {
    background: #fff;
}

.slider__nav-arrow-12 button {
    border-radius: 50%;
}
/*  */
.swiper-slide {
    overflow: visible; /* ตรวจสอบให้แน่ใจว่าไม่ถูกตั้งค่าเป็น hidden */
}
</style>
