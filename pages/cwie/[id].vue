<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12" v-if="item != null">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <!-- <h4 class="breadcrumb__title">
                  {{ item.title }}
                </h4> -->

                        <div class="breadcrumb__list">
                            <span>
                                <NuxtLink
                                    :to="{
                                        path: '/',
                                    }"
                                >
                                    หน้าหลัก
                                </NuxtLink>
                            </span>
                            <span class="dvdr"
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
                        <!-- Content -->
                        <div class="postbox__main">
                            <div class="row">
                                <div
                                    class="col-sm-12 col-md-12 col-12"
                                    style="border-left: 0.7em solid #f60"
                                >
                                    <h2>{{ item.title }}</h2>
                                    <h2 style="color: #f60">
                                        <span>อุทยานเทคโนโลยี มจพ.</span>
                                    </h2>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper mt-40"
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
    </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useRuntimeConfig } from "#app";
dayjs.extend(buddhistEra);
const route = useRoute();

const item = ref(null);

const config = useRuntimeConfig();
const { apiBase } = config.public;

const { data: res } = await useAsyncData("cwie", async () => {
    try {
        let data = await $fetch(`${apiBase}/cwie/${route.params.id}`, {
            params: {},
        });
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
        throw err;
    }
});

if (res.value) {
    item.value = res.value.data;
} else {
    console.error("Error:", error.value);
}

useHead({
    title: item.value.title,
});
</script>

<style scoped>
.breadcrumb__title {
    font-size: 50px;
}
</style>
