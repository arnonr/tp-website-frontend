<template>
    <section
        :class="`brand__area ${el_style ? 'pt-30' : ''}`"
        style="background-color: #ffd8be"
    >
        <div class="container">
            <div
                class="brand__item-wrapper-6 d-flex flex-wrap justify-content-between"
            >
                <div
                    class="brand__item-6"
                    v-for="(it, index) in project"
                    :key="index"
                    style="margin-bottom: 30px"
                >
                    <NuxtLink class="project-link-img" :to="it.url">
                        <img
                            :src="it.project_file"
                            :alt="it.name"
                            style="width: 60%"
                        />
                        <br />
                        <span class="fw-bold">{{ it.name }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    el_style: {
        type: Boolean,
        default: true,
    },
});

const { t } = useI18n();

const project = ref([
    {
        name: t("Operations Center"),
        project_file: "/images/iconwebtechnopark/center_black.png",
        url: "/article/5",
    },
    {
        name: t("Courses"),
        project_file: "/images/iconwebtechnopark/program_black.png",
        url: "/course/1",
    },
    {
        name: t("Skillhub"),
        project_file: "/images/iconwebtechnopark/65_black.png",
        url: "/article/6",
    },
    {
        name: t("Achievements"),
        project_file: "/images/iconwebtechnopark/project_black.png",
        url: "/article/7",
    },
    // {
    //   name: "ผลงานโดดเด่น",
    //   project_file: "/images/iconwebtechnopark/project_black.png",
    //   url: "/about/9",
    // },
]);
</script>

<style scoped>
.brand__item-6 img {
    opacity: 1;
}

.brand__item-6 > .project-link-img:hover {
    /* https://angel-rs.github.io/css-color-filter-generator/ */
    filter: brightness(0) saturate(100%) invert(55%) sepia(77%) saturate(4539%)
        hue-rotate(0deg) brightness(101%) contrast(106%);
}
</style>
