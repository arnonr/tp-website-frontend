<template>
    <section class="" v-if="items.length != 0">
        <swiper
            :pagination="{
                clickable: true,
            }"
            :navigation="{
                nextEl: '.slider-button-12-next',
                prevEl: '.slider-button-12-prev',
            }"
            :preventClicks="false"
            :effect="'fade'"
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
            <swiper-slide v-for="(it, index) in items" :key="index">
                <div class="slide-content">
                    <a :href="it.banner_url">
                        <img
                            :src="it.banner_file"
                            :alt="it.title"
                            class="slide-image"
                            style="width: 100%"
                        />
                    </a>
                </div>
            </swiper-slide>
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
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
    components: { Swiper, SwiperSlide },
    async setup() {
        const runtimeConfig = useRuntimeConfig();
        const renderFraction = (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span>
                <span class="tp-swiper-fraction-divide"></span>
              <span class="${totalClass}"></span>`;
        };

        // const items = ref([
        //     {
        //         id: 1,
        //         title: "Banner 1",
        //         banner_file: "/images/banner/banner1.jpeg",
        //     },
        //     {
        //         id: 1,
        //         title: "Banner 2",
        //         banner_file: "/images/banner/banner2.jpeg",
        //     },
        // ]);

        const items = ref([]);
         const { data: res } = await useAsyncData("banner", async () => {
            let data = await $fetch(`${runtimeConfig.public.apiBase}/banner`, {
                params: {
                    is_publish: 1,
                    lang: useCookie("lang").value,
                },
            });
            return data;
        });

        items.value = res.value.data;


        return {
            items,
            renderFraction,
            modules: [
                Autoplay,
                FreeMode,
                Navigation,
                Pagination,
                Scrollbar,
                Thumbs,
                Keyboard,
                EffectFade,
                Mousewheel,
            ],
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
