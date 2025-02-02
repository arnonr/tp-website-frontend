<template>
    <form @submit.prevent="handleSubmit">
        <div class="login__input-wrapper">
            <div class="login__input-item">
                <div class="login__input">
                    <label for="form-control">ICIT Account</label>
                    <input
                        type="text"
                        v-model="item.username"
                        placeholder="ระบุ ICIT Account"
                    />
                </div>
            </div>

            <div class="login__input-item">
                <div class="login__input">
                    <label for="form-control">Email</label>
                    <input
                        type="text"
                        v-model="item.email"
                        placeholder="ระบุ EMAIL"
                    />
                </div>
            </div>
            <div class="login__input-item">
                <div
                    class=""
                    v-for="(select, index) in selectOptionsFields"
                    :key="index"
                >
                    <label for="form-control">หน่วยงาน</label>
                    <client-only>
                        <v-select
                            v-model="item[select.model]"
                            :label="select.label"
                            :placeholder="select.placeholder"
                            :options="selectOptions[select.options]"
                            class="v-select-no-border"
                            :clearable="true"
                        />
                    </client-only>
                </div>
            </div>
        </div>
        <div class="login__btn">
            <button type="submit" class="tp-btn w-100">ลงทะเบียน</button>
        </div>
    </form>
</template>

<script setup>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const { apiBase } = config.public;
const router = useRouter();

const item = ref({
    department_id: null,
    username: "",
    email: "",
    isChecked: false,
});

const selectOptionsFields = [
    {
        options: "departments",
        model: "department_id",
        label: "title",
        placeholder: "เลือกหน่วยงาน",
    },
];

const selectOptions = ref({
    departments: [],
});

// Function Fetch

// fetch
const fetchDepartments = async () => {
    let data = await $fetch(`${apiBase}/department`, {
        params: {
            is_publish: 1,
            perPage: 100,
        },
    }).catch((error) => error.data);

    selectOptions.value.departments = data.data.map((e) => {
        return { title: e.name_th, id: e.id };
    });
};

const handleSubmit = async () => {
    if (
        item.value.department_id == null ||
        item.value.username == null ||
        item.value.email == null
    ) {
        useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
        return;
    }

    let data = {
        username: item.value.username,
        email: item.value.email,
        department_id: item.value.department_id.id,
    };

    await $fetch(`${apiBase}/user/register`, {
        method: "post",
        body: { ...data },
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast(
                    "ลงทะเบียนเสร็จสิ้น โปรดรอการตรวจสอบข้อมูล",
                    "success"
                );
                router.push({ path: "/" });
            } else {
                throw new Error(res.msg);
            }
        })
        .catch((error) => {
            useToast(error.data.msg, "error");
        });
};

onMounted(async () => {
    await fetchDepartments();
});
</script>
