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
                                <NuxtLink href="/admin/department">
                                    รายการหน่วยงาน
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

    <section class="portfolio__area pt-40 pb-40" v-if="token">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-20">
                    <h4>แบบฟอร์มเพิ่มข้อมูลหน่วยงาน</h4>
                </div>

                <div class="col-12">
                    <div class="">
                        <div class="">
                            <!-- <div class="form-group mt-10">
                                <label
                                    for="staticEmail"
                                    class="label"
                                    >
                                    <span class="text-danger">*</span
                                    >ประเภทการบริการวิชาการ :
                                </label>
                                <div>
                                    <v-select
                                        label="title"
                                        placeholder="ประเภทการบริการวิชาการ"
                                        :options="
                                            selectOptions.service_categories
                                        "
                                        id="slt-member-status"
                                        v-model="item.service_category_id"
                                        class="form-control v-select-no-border"
                                        multiple
                                        :clearable="true"
                                    ></v-select>
                                </div>
                            </div> -->

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ลำดับ :
                                </label>
                                <div>
                                    <input
                                        type="number"
                                        class="form-control form-control-plaintext"
                                        v-model="item.level"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ชื่อหน่วยงาน TH :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.name_th"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ชื่อหน่วยงาน EN :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.name_en"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >รูปภาพปก 300x200 :
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
                                <label for="" class="label label-required"
                                    >รายละเอียดหน่วยงาน :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.detail_th"
                                            v-model="item.detail_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ข้อมูลติดต่อ :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.contact_th"
                                            v-model="item.contact_th"
                                        ></froala>

                                        <div id="contact-th"></div>
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
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import froala_data from "~~/mixins/froalaData";
import basic_data from "~~/mixins/basicData";
import { useRuntimeConfig } from "#app";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const configR = useRuntimeConfig();
const { apiBase } = configR.public;
const router = useRouter();

const item = ref({
    name_th: null,
    name_en: null,
    detail_th: "",
    contact_th: "",
    level: "",
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

const r = (Math.random() + 1).toString(36).substring(7);
let config = {};

config["detail_th"] = froala_data.data().froala_config();
config["detail_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.detail_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.detail_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.detail_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.detail_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.detail_th);
    },
};

config["contact_th"] = froala_data.data().froala_config();
config["contact_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.contact_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.contact_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.contact_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.contact_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.contact_th);
    },
};

// Function Fetch

// Event
const onSubmit = async () => {
    let type_object = {
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: apiBase + "/department/",
    };

    let data = {
        ...item.value,
        department_file: file.value.files != null ? file.value.files[0] : null,
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
                router.push({ path: "/admin/department/" });
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
    title: "เพิ่มหน่วยงาน",
});

definePageMeta({
    middleware: "auth",
});
</script>
