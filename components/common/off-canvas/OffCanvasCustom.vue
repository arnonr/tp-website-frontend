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
                            <ul>
                                <li>
                                    <nuxt-link to="/" @click="closeOffcanvas"
                                        >- หน้าหลัก</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/serve"
                                        @click="closeOffcanvas"
                                        >- งานบริการวิชาการ</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/news"
                                        @click="closeOffcanvas"
                                        >- ข่าวและประกาศ</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/department"
                                        @click="closeOffcanvas"
                                        >- หน่วยงาน</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li>
                                    <nuxt-link
                                        to="/contact-us"
                                        @click="closeOffcanvas"
                                        >- ติดต่อสอบถาม</nuxt-link
                                    >
                                </li>
                            </ul>
                        </nav>
                        <!-- MobileMenus end -->
                    </div>
                </div>
                <div
                    class="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block"
                >
                    <!-- <h3 class="text-warning">ADMIN</h3> -->
                    <nav>
                        <ul
                            v-if="
                                (useCookie('user').value &&
                                    useCookie('user').value.group_id == 1) ||
                                (useCookie('user').value &&
                                    useCookie('user').value.group_id == 2)
                            "
                        >
                            <li class="text-secondary">จัดการข้อมูล</li>
                            <li>
                                <nuxt-link
                                    to="/admin/department"
                                    @click="closeOffcanvas"
                                    >- ข้อมูลหน่วยงาน</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    to="/admin/serve"
                                    @click="closeOffcanvas"
                                    >- ข้อมูลงานบริการวิชาการ</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    to="/admin/news"
                                    @click="closeOffcanvas"
                                    >- ข้อมูลข่าว</nuxt-link
                                >
                            </li>
                            <hr />
                        </ul>

                        <ul
                            v-if="
                                useCookie('user').value &&
                                useCookie('user').value.group_id == 1
                            "
                        >
                            <li class="text-secondary">จัดการข้อมูล ADMIN</li>
                            <li>
                                <nuxt-link
                                    to="/admin/banner"
                                    @click="closeOffcanvas"
                                    >- Banner</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/news-type"
                                    @click="closeOffcanvas"
                                    >- ประเภทข่าว</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/contact-us"
                                    @click="closeOffcanvas"
                                    >- ติดต่อสอบถาม</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    to="/admin/equipment"
                                    @click="closeOffcanvas"
                                    >- ผู้ใช้งาน</nuxt-link
                                >
                            </li>
                        </ul>
                    </nav>
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
    },
};
</script>
