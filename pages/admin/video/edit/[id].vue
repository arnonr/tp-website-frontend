<template>
    <section
        class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"
        v-if="token"
    >
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list">
                            <span> จัดการข้อมูล </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span>
                                <NuxtLink :href="`/admin/${$name_page_en}`">
                                    รายการ {{ $name_page }}
                                </NuxtLink></span
                            >
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> แก้ไขข้อมูล </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pt-40 pb-40" v-if="token">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-20">
                    <h4>แบบฟอร์มแก้ไขข้อมูล {{ $name_page }}</h4>
                </div>

                <div class="col-12">
                    <div class="">
                        <div class="">
                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ชื่อ :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.title"
                                    />
                                </div>
                            </div>
                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ไฟล์ภาพปก :
                                </label>
                                <div>
                                    <input
                                        ref="file"
                                        class="form-control"
                                        type="file"
                                        id="formFile"
                                    />
                                </div>
                            </div>
                            <div class="form-group mt-10">
                                <label for="" class="label">URL Video : </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.video_url"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >สถานะ :
                                </label>
                                <div>
                                    <v-select
                                        label="name_th"
                                        placeholder="การเผยแพร่"
                                        :options="selectOptions.publishes"
                                        id="slt-is_publish"
                                        v-model="item.is_publish"
                                        class="v-select-no-border"
                                        :clearable="true"
                                    ></v-select>
                                </div>
                            </div>
                            <!-- btn save -->
                            <div class="col-md-12 mt-20">
                                <div class="contact__btn-2 text-center">
                                    <button
                                        class="btn btn-primary"
                                        @click="onSubmit"
                                    >
                                        บันทึก
                                    </button>
                                </div>
                            </div>
                            <!--  -->
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
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import basic_data from "~~/mixins/basicData";
import { useRuntimeConfig } from "#app";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const $name_page = "Video";
const $name_page_en = "video";
const configR = useRuntimeConfig();
const { apiBase } = configR.public;
const router = useRouter();
const route = useRoute();

const item = ref({
    title: "",
    url: "",
    is_publish: {
        id: 1,
        value: 1,
        name_th: "publish",
        name_en: "publish",
        color: "success",
    },
});
const file = ref(null);

const selectOptions = ref({
    publishes: basic_data.data().publishes,
});

// Function Fetch
const { data: res } = await useFetch(
    `${apiBase}/${$name_page_en}/${route.params.id}`,
    {
        server: true,
    }
);

item.value = { ...res.value.data };
item.value.video_file_old = res.value.data.video_file;
item.value.video_file = null;

item.value.is_publish =
    selectOptions.value.publishes[Number(res.value.data.is_publish)];

// Event
const onSubmit = async () => {
    let type_object = {
        text_success: "แก้ไขรายการเสร็จสิ้น",
        method: "put",
        url: apiBase + `/${$name_page_en}/` + item.value.id,
    };

    let data = {
        ...item.value,
        video_file: file.value.files != null ? file.value.files[0] : null,
        is_publish: item.value.is_publish.value,
    };

    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }

    await $fetch(type_object.url, {
        method: type_object.method,
        body: form_data,
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast(type_object.text_success, "success");
                router.push({ path: `/admin/${$name_page_en}/` });
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

const token = ref(null);
onMounted(() => {
    token.value = useCookie("tp_token").value;

    if (!token.value) {
        router.replace("/"); // Redirect ทันที
    }
});

useHead({
    title: `แก้ไขข้อมูล${$name_page}`,
});

definePageMeta({
    middleware: "auth",
});
</script>
