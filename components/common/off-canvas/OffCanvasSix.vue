<template>
    <div
        :class="`offcanvas__area offcanvas__area-1 ${
            isOffCanvasOpen ? 'offcanvas-opened' : ''
        }`"
    >
        <div class="offcanvas__wrapper">
            <div class="offcanvas__shape">
                <!-- <img
            class="offcanvas__shape-1"
            src="~/assets/img/iconwebtechnopark/logo-sicc.png"
            alt="shape"
          /> -->
            </div>
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
                                <li class="text-secondary">งานจัดการจอง</li>
                                <li>
                                    <nuxt-link
                                        to="/admin/booking"
                                        @click="closeOffcanvas"
                                        >- รายการจอง</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li class="text-secondary">
                                    งานจัดการเครื่องมือ
                                </li>
                                <li>
                                    <nuxt-link
                                        to="/admin/equipment"
                                        @click="closeOffcanvas"
                                        >- เครื่องมือ</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link to="/admin/equipment-department"
                                        >- จัดการหน่วยงาน</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li class="text-secondary">งานประชาสัมพันธ์</li>
                                <li>
                                    <nuxt-link
                                        href="/admin/banner"
                                        @click="closeOffcanvas"
                                        >- จัดการ Banner</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link
                                        href="/admin/news"
                                        @click="closeOffcanvas"
                                        >- จัดการข่าว</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link
                                        href="/admin/news-type"
                                        @click="closeOffcanvas"
                                        >- จัดการประเภทข่าว</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li class="text-secondary">งานข้อมูลพื้นฐาน</li>
                                <li>
                                    <nuxt-link
                                        href="/admin/user"
                                        @click="closeOffcanvas"
                                        >- ผู้ใช้งาน</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link
                                        href="/admin/about-us"
                                        @click="closeOffcanvas"
                                        >- เกี่ยวกับเรา</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link
                                        href="/admin/administrator"
                                        @click="closeOffcanvas"
                                        >- บุคลากร</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link
                                        href="/admin/department"
                                        @click="closeOffcanvas"
                                        >- ฝ่ายงาน</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link
                                        href="/admin/contact-us/1"
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
                        <ul>
                            <li class="text-secondary">งานจัดการจอง</li>
                            <li>
                                <nuxt-link
                                    to="/admin/booking"
                                    @click="closeOffcanvas"
                                    >- รายการจอง</nuxt-link
                                >
                            </li>
                            <hr />
                            <li class="text-secondary">งานจัดการเครื่องมือ</li>
                            <li>
                                <nuxt-link
                                    to="/admin/equipment"
                                    @click="closeOffcanvas"
                                    >- เครื่องมือ</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/admin/equipment-department"
                                    >- จัดการหน่วยงาน</nuxt-link
                                >
                            </li>
                            <hr />
                            <li class="text-secondary">งานประชาสัมพันธ์</li>
                            <li>
                                <nuxt-link
                                    href="/admin/banner"
                                    @click="closeOffcanvas"
                                    >- จัดการ Banner</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/news"
                                    @click="closeOffcanvas"
                                    >- จัดการข่าว</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/news-type"
                                    @click="closeOffcanvas"
                                    >- จัดการประเภทข่าว</nuxt-link
                                >
                            </li>

                            <li>
                                <nuxt-link
                                    href="/admin/direction"
                                    @click="closeOffcanvas"
                                    >- จัดการเนื้อหาอื่น ๆ</nuxt-link
                                >
                            </li>

                            <hr />
                            <li class="text-secondary">งานข้อมูลพื้นฐาน</li>
                            <li>
                                <nuxt-link
                                    href="/admin/user"
                                    @click="closeOffcanvas"
                                    >- ผู้ใช้งาน</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/about-us"
                                    @click="closeOffcanvas"
                                    >- เกี่ยวกับเรา</nuxt-link
                                >
                            </li>

                            <li>
                                <nuxt-link
                                    href="/admin/administrator"
                                    @click="closeOffcanvas"
                                    >- บุคลากร</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/department"
                                    @click="closeOffcanvas"
                                    >- ฝ่ายงาน</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/contact-us/1"
                                    @click="closeOffcanvas"
                                    >- ติดต่อสอบถาม</nuxt-link
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
import Social from "~~/components/social/Social.vue";
import MobileMenus from "./MobileMenus.vue";

export default {
    components: { MobileMenus, Social },
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
