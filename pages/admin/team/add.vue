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
                                <NuxtLink href="/admin/team">
                                    รายการบุคลากร
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
                    <h4>แบบฟอร์มเพิ่มข้อมูลบุคลากร</h4>
                </div>

                <div class="col-12">
                    <div class="">
                        <div class="">
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
                                    >คำนำหน้า :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.prefix"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ชื่อ :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.firstname"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >นามสกุล :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.surname"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label">ตำแหน่ง : </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.position"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label">งาน : </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.position_level"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >หน่วยงาน :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="name"
                                            placeholder="กลุ่มงาน"
                                            :options="
                                                selectOptions.department_teams
                                            "
                                            id="slt-department-team"
                                            v-model="item.department_team_id"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select
                                    ></client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ฝ่ายงาน :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.sub_department"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >เบอร์โทรภายใน :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.phone"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >Email :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.email"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >รูปภาพ :
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
                                        ></v-select
                                    ></client-only>
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
const configR = useRuntimeConfig();
const { apiBase } = configR.public;
const router = useRouter();

const item = ref({
    level: "",
    prefix: "",
    firstname: "",
    surname: "",
    position: "",
    position_level: "",
    phone: "",
    email: "",
    sub_department: "",
    department_team_id: null,
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
    department_teams: [],
});

// Function Fetch
const fetchDepartments = async () => {
    let data = await $fetch(`${apiBase}/department-team`, {
        params: {
            is_publish: 1,
            perPage: 100,
        },
    }).catch((error) => error.data);

    selectOptions.value.department_teams = data.data.map((e) => {
        return { name: e.name, id: e.id };
    });
};

// Event
const onSubmit = async () => {
    let type_object = {
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: apiBase + "/team/",
    };

    let data = {
        ...item.value,
        team_file: file.value.files != null ? file.value.files[0] : null,
        department_team_id: item.value.department_team_id?.id ?? undefined,
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
                router.push({ path: "/admin/team/" });
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

onMounted(() => {
    fetchDepartments();
});

useHead({
    title: "เพิ่มบุคลากร",
});
</script>
