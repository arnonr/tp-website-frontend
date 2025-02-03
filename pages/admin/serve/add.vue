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
                                <NuxtLink href="/admin/serve">
                                    รายการงานบริการวิชาการ
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
                    <h4>แบบฟอร์มเพิ่มข้อมูล</h4>
                </div>

                <div class="col-12">
                    <div class="">
                        <div class="">
                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >หน่วยงาน :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="title"
                                            placeholder="หน่วยงาน"
                                            :options="selectOptions.departments"
                                            v-model="item.department_id"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ประเภทการบริการวิชาการ :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="title"
                                            placeholder="ประเภทการบริการวิชาการ"
                                            :options="
                                                selectOptions.service_categories
                                            "
                                            v-model="item.service_category_id"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >รูปภาพปก 500x350 :
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
                                    >หัวข้อ :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.title_th"
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
                                            :config="config.detail_th"
                                            v-model="item.detail_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >อัตราค่าใช้บริการ :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.rates_th"
                                            v-model="item.rates_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >สถานที่ :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.location_th"
                                            v-model="item.location_th"
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

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >สถานะ :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="name_th"
                                            placeholder="การเผยแพร่"
                                            :options="selectOptions.publishes"
                                            id="slt-is_publish"
                                            v-model="item.is_publish"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select>
                                    </client-only>
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
    title_th: null,
    title_en: null,
    department_id: null,
    service_category_id: null,
    detail_th: "",
    detail_en: "",
    is_publish: {
        id: 1,
        value: 1,
        name_th: "publish",
        name_en: "publish",
        color: "success",
    },
    rates_th: "",
    rates_en: "",
    location_th: "",
    location_en: "",
    contact_th: "",
    contact_en: "",
});
const file = ref(null);

const selectOptions = ref({
    publishes: basic_data.data().publishes,
    departments: [],
    service_categories: [],
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
//
config["rates_th"] = froala_data.data().froala_config();
config["rates_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.rates_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.rates_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.rates_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.rates_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.rates_th);
    },
};

config["location_th"] = froala_data.data().froala_config();
config["location_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.location_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.location_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.location_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.location_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.location_th);
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
const fetchDepartments = async () => {
    let data = await $fetch(`${apiBase}/department`, {
        params: {
            is_publish: 1,
            perPage: 100,
        },
    }).catch((error) => error.data);

    selectOptions.value.departments = data.data
        .map((e) => {
            return { title: e.name_th, value: e.id };
        })
        .filter((x) => {
            if (
                useCookie("user").value &&
                useCookie("user").value.group_id == 2
            ) {
                if (x.value == useCookie("user").value.department_id) {
                    return true;
                } else {
                    return false;
                }
            }

            return true;
        });
};

const fetchServiceCategories = async () => {
    let data = await $fetch(`${apiBase}/service-category`, {
        params: {
            is_publish: 1,
            perPage: 100,
        },
    }).catch((error) => error.data);

    selectOptions.value.service_categories = data.data.map((e) => {
        return { title: e.name_th, value: e.id };
    });
};

// Event
const onSubmit = async () => {
    if (
        item.value.is_publish == null ||
        item.value.is_publish.value == null ||
        item.value.service_category_id == null ||
        item.value.title_th == "" ||
        item.value.title_th == null ||
        item.value.detail_th == "" ||
        item.value.detail_th == null
    ) {
        useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
        return;
    }

    let type_object = {
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: apiBase + "/serve/",
    };

    let data = {
        ...item.value,
        serve_file: file.value.files != null ? file.value.files[0] : null,
        is_publish: item.value.is_publish.value,
        department_id:
            item.value.department_id == null
                ? undefined
                : item.value.department_id.value,
        service_category_id:
            item.value.service_category_id == null
                ? undefined
                : item.value.service_category_id.value,
        created_serve: dayjs().format("YYYY-MM-DD"),
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
                router.push({ path: "/admin/serve/" });
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
    } else {
        fetchDepartments();
        fetchServiceCategories();
    }
});

useHead({
    title: "เพิ่มงานบริการวิชาการ",
});

definePageMeta({
    middleware: "auth",
});
</script>
