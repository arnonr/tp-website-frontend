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
                                    {{ $name_page }}
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
const $name_page = "ติดต่อเรา";
const $name_page_en = "contact";
const configR = useRuntimeConfig();
const { apiBase } = configR.public;
const router = useRouter();
const route = useRoute();

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

const initFroala = () => {
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

            // const froalaAttribution =
            //     document.querySelectorAll('[data-f-id="pbf"]');
            // if (froalaAttribution) {
            //     froalaAttribution.forEach((el) => {
            //         if (
            //             el.style.textAlign === "center" &&
            //             el.style.fontSize === "14px" &&
            //             el.style.marginTop === "30px" &&
            //             el.style.opacity === "0.65" &&
            //             el.style.fontFamily === "sans-serif"
            //         ) {
            //             // ดำเนินการที่นี่ถ้าสไตล์ตรงกัน
            //             el.remove();
            //         }
            //     });
            // }
        },
        "paste.after": function (pasteEvent) {
            item.value.detail = this.html.get();
        },
        initialized: function () {
            this.html.insert(item.value.detail);
        },
    };
};

// Function Fetch
const { data: res } = await useFetch(
    `${apiBase}/${$name_page_en}/${route.params.id}`,
    {
        server: true,
    }
);

item.value = { ...res.value.data };
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
        is_publish: item.value.is_publish.value,
    };

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

const token = ref(null);
onMounted(() => {
    initFroala();

    token.value = useCookie("tp_token").value;

    if (!token.value) {
        router.replace("/"); // Redirect ทันที
    }
});

useHead({
    title: `แก้ไข${$name_page}`,
});

definePageMeta({
    middleware: "auth",
});
</script>
