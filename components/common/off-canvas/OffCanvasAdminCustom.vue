<template>
    <div
        :class="`offcanvas__area offcanvas__area-1 ${
            isOffCanvasOpen ? 'offcanvas-opened' : ''
        }`"
    >
        <div class="offcanvas__wrapper">
            <div class="offcanvas__shape"></div>
            <div class="offcanvas__close">
                <button
                    @click="closeOffcanvas"
                    class="offcanvas__close-btn offcanvas-close-btn"
                >
                    <i class="fa-regular fa-xmark"></i>
                </button>
            </div>
            <div class="offcanvas__content">
                <div
                    class="offcanvas__top mb-40 d-flex justify-content-between align-items-center"
                >
                    <div class="offcanvas__logo logo">
                        <nuxt-link href="/">
                            <img
                                src="~/assets/img/logo/logo-tp-final.png"
                                alt="logo"
                                style="width: 50%"
                            />
                        </nuxt-link>
                    </div>
                </div>
                <div
                    class="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none"
                >
                    <div class="mean-bar">
                        <!-- MobileMenus start -->
                        <!-- <mobile-menus /> -->
                        <nav>
                            <ul
                                class="list-unstyled"
                                v-if="
                                    (useCookie('user').value &&
                                        useCookie('user').value.group_id ==
                                            1) ||
                                    (useCookie('user').value &&
                                        useCookie('user').value.group_id == 2)
                                "
                            >
                                <li class="text-secondary">จัดการข้อมูล</li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/department"
                                        @click="closeOffcanvas"
                                        >- ข้อมูลหน่วยงาน</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/serve"
                                        @click="closeOffcanvas"
                                        >- ข้อมูลงานบริการวิชาการ</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/news"
                                        @click="closeOffcanvas"
                                        >- ข้อมูลข่าว</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/article"
                                        @click="closeOffcanvas"
                                        >- บทความ</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/course"
                                        @click="closeOffcanvas"
                                        >- หลักสูตร</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/cwie"
                                        @click="closeOffcanvas"
                                        >- CWIE</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/intellectual"
                                        @click="closeOffcanvas"
                                        >- ทรัพย์สินทางปัญญา</nuxt-link
                                    >
                                </li>
                                <hr />
                            </ul>

                            <ul
                                class="list-unstyled"
                                v-if="
                                    useCookie('user').value &&
                                    useCookie('user').value.group_id == 1
                                "
                            >
                                <li class="text-secondary">
                                    จัดการข้อมูล ADMIN
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/banner"
                                        @click="closeOffcanvas"
                                        >- Banner</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/team"
                                        @click="closeOffcanvas"
                                        >- บุคลากร</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        href="/admin/news-type"
                                        @click="closeOffcanvas"
                                        >- ประเภทข่าว</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        href="/admin/about"
                                        @click="closeOffcanvas"
                                        >- เกี่ยวกับเรา</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        href="/admin/contact"
                                        @click="closeOffcanvas"
                                        >- ติดต่อสอบถาม</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/admin/equipment"
                                        @click="closeOffcanvas"
                                        >- ผู้ใช้งาน</nuxt-link
                                    >
                                </li>
                            </ul>
                        </nav>

                        <div>
                            <hr />
                            <a @click="logout">- ออกจากระบบ</a>
                            <hr />
                        </div>
                        <!-- MobileMenus end -->
                    </div>
                </div>
                <div
                    class="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block"
                >
                    <!-- <h3 class="text-warning">ADMIN</h3> -->
                    <nav>
                        <ul
                            class="list-unstyled"
                            v-if="
                                (useCookie('user').value &&
                                    useCookie('user').value.group_id == 1) ||
                                (useCookie('user').value &&
                                    useCookie('user').value.group_id == 2)
                            "
                        >
                            <li class="text-secondary">จัดการข้อมูล</li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/department"
                                    @click="closeOffcanvas"
                                    >- ข้อมูลหน่วยงาน</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/serve"
                                    @click="closeOffcanvas"
                                    >- ข้อมูลงานบริการวิชาการ</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/news"
                                    @click="closeOffcanvas"
                                    >- ข้อมูลข่าว</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/article"
                                    @click="closeOffcanvas"
                                    >- บทความ</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/course"
                                    @click="closeOffcanvas"
                                    >- หลักสูตร</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/cwie"
                                    @click="closeOffcanvas"
                                    >- CWIE</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/intellectual"
                                    @click="closeOffcanvas"
                                    >- ทรัพย์สินทางปัญญา</nuxt-link
                                >
                            </li>
                            <hr />
                        </ul>

                        <ul
                            class="list-unstyled"
                            v-if="
                                useCookie('user').value &&
                                useCookie('user').value.group_id == 1
                            "
                        >
                            <li class="text-secondary">จัดการข้อมูล ADMIN</li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/banner"
                                    @click="closeOffcanvas"
                                    >- Banner</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/team"
                                    @click="closeOffcanvas"
                                    >- บุคลากร</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    href="/admin/news-type"
                                    @click="closeOffcanvas"
                                    >- ประเภทข่าว</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    href="/admin/about"
                                    @click="closeOffcanvas"
                                    >- เกี่ยวกับเรา</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    href="/admin/contact"
                                    @click="closeOffcanvas"
                                    >- ติดต่อสอบถาม</nuxt-link
                                >
                            </li>
                            <hr />
                            <li>
                                <nuxt-link
                                    to="/admin/equipment"
                                    @click="closeOffcanvas"
                                    >- ผู้ใช้งาน</nuxt-link
                                >
                            </li>
                        </ul>
                    </nav>

                    <div>
                        <hr />
                        <a
                            @click="logout"
                            style="
                                font-weight: 700;
                                font-size: 20px;
                                color: var(--tp-common-black);
                            "
                            >- ออกจากระบบ</a
                        >
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- body overlay start -->
    <div
        @click="closeOffcanvas"
        :class="`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`"
    ></div>
    <!-- body overlay end -->
</template>

<script>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia

export default {
    components: {},
    data() {
        return {
            isOffCanvasOpen: false,
        };
    },
    methods: {
        openOffcanvas() {
            this.isOffCanvasOpen = true;
        },
        closeOffcanvas() {
            this.isOffCanvasOpen = false;
        },
        logout() {
            const router = useRouter();
            const { authenticated } = storeToRefs(useAuthStore());
            const { logUserOut } = useAuthStore();
            logUserOut();
            this.isOffCanvasOpen = false;
            useToast("ออกจากระบบเสร็จสิ้น", "success");
            window.location.href = "/service";
            // this.authenticated = authenticated.value;
        },
    },
};
</script>
