<template>
    <div class="" v-if="items.length != 0">
        <div class="row">
            <div class="col-md-12">
                <h4 class="text-color-primary">{{ t("Announcements") }}</h4>
                <hr />
                <table
                    class="table table-bordered table-striped table-news-document"
                >
                    <thead>
                        <tr>
                            <th style="width: 10px" class="text-center">#</th>
                            <th style="width: 70%">{{ t("Title") }}</th>
                            <th class="text-center">{{ t("Download") }}</th>
                        </tr>
                    </thead>
                    <tbody v-if="items.length != 0">
                        <tr v-for="(it, index) in items" :key="it.id">
                            <td class="text-center">
                                {{ index + 1 }}
                            </td>
                            <td>
                                <a :href="it.annouce_file" target="_blank">{{
                                    it.title
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a :href="it.annouce_file" target="_blank">
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-sm"
                                    >
                                        <i class="fa fa-file-pdf"></i>
                                    </button>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="div-btn-annouce">
            <div class="col">
                <div class="tp-button-demo text-end">
                    <NuxtLink
                        to="/annouce"
                        class="tp-btn-border-brown"
                        >{{ t("ALL") }}</NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const { t } = useI18n();

const items = ref([]);

const search = ref({
    is_publish: 1,
});

const { data: res } = await useAsyncData("annouce", async () => {
    let data = await $fetch(`${runtimeConfig.public.apiBase}/annouce`, {
        params: {
            ...search.value,
            perPage: 8,
            currentPage: 1,
        },
    });
    return data;
});

items.value = res.value.data;
</script>

<style scoped></style>
