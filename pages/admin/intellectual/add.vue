<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
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
                            <span> เพิ่มข้อมูล </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-20">
                    <h4>แบบฟอร์มเพิ่มข้อมูล {{ $name_page }}</h4>
                </div>

                <div class="col-12">
                    <div class="">
                        <div class="">
                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >หัวข้อ :
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
                                    >รายละเอียด :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.detail"
                                            v-model="item.detail"
                                        ></froala>

                                        <div id="detail"></div>
                                    </client-only>
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
import froala_data from "~~/mixins/froalaData";
import basic_data from "~~/mixins/basicData";
import { useRuntimeConfig } from "#app";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const $name_page = "ทรัพย์สินทางปัญญา";
const $name_page_en = "intellectual";
const configR = useRuntimeConfig();
const { apiBase } = configR.public;
const router = useRouter();

const item = ref({
    name: null,
    detail: "",
    is_publish: {
        id: 1,
        value: 1,
        name_th: "publish",
        name_en: "publish",
        color: "success",
    },
});

const selectOptions = ref({
    publishes: basic_data.data().publishes,
});

let config = {};

config["detail"] = froala_data.data().froala_config();
config["detail"]["events"] = {
    keyup: function (inputEvent) {
        item.value.detail = this.html.get();
    },
    click: function (clickEvent) {
        item.value.detail = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.detail = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.detail = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.detail);
    },
};

// Function Fetch

// Event
const onSubmit = async () => {
    let type_object = {
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: apiBase + `/${$name_page_en}/`,
    };

    let data = {
        ...item.value,
        is_publish: item.value.is_publish.value,
    };
    data[`created_${$name_page_en}`] = dayjs().format("YYYY-MM-DD");

    await $fetch(type_object.url, {
        method: type_object.method,
        body: data,
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

onMounted(() => {});

useHead({
    title: `เพิ่มข้อมูล${$name_page}`,
});


definePageMeta({
    middleware: "auth",
});
</script>
