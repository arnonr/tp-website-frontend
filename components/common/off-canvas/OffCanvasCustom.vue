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
                                    <nuxt-link
                                        to="/"
                                        @click="closeOffcanvas"
                                        class="fw-bold"
                                        >หน้าหลัก</nuxt-link
                                    >
                                </li>
                                <hr />
                                <li class="mt-3">
                                    <nuxt-link class="fw-bold"
                                        >หลักสูตร</nuxt-link
                                    >
                                    <ul style="list-style: none" class="mt-2">
                                        <li>
                                            <nuxt-link
                                                to="/course/1"
                                                @click="closeOffcanvas"
                                                >- เทคโนโลยีบัณฑิต
                                                เทคโนโลยียานยนต์สมัยใหม่และระบบอัตโนมัติ
                                                (MATA)</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                                <li class="mt-3">
                                    <nuxt-link class="fw-bold">CWIE</nuxt-link>
                                    <ul style="list-style: none" class="mt-2">
                                        <li>
                                            <nuxt-link
                                                to="/cwie/1"
                                                @click="closeOffcanvas"
                                                >- ประวัติความเป็นมา
                                                CWIE</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/2"
                                                @click="closeOffcanvas"
                                                >- ข้อบังคับ ประกาศ ระเบียบ
                                                CWIE</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/3"
                                                @click="closeOffcanvas"
                                                >- ระบบสารสนเทศ CWIE</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/4"
                                                @click="closeOffcanvas"
                                                >- คู่มือ CWIE</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/5"
                                                @click="closeOffcanvas"
                                                >- เอกสารดาวน์โหลด</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/6"
                                                @click="closeOffcanvas"
                                                >- ประโยชน์ของ CWIE</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/7"
                                                @click="closeOffcanvas"
                                                >- รางวัล CWIE ดีเด่น</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/8"
                                                @click="closeOffcanvas"
                                                >- ปฏิทิน CWIE มจพ.</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/cwie/9"
                                                @click="closeOffcanvas"
                                                >- เครือข่าย CWIE
                                                ภาคกลางตอนบน</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="https://technopark.kmutnb.ac.th/coopday/"
                                                @click="closeOffcanvas"
                                                >- ประกวดผลงาน CWIE</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                                <li class="mt-3">
                                    <nuxt-link class="fw-bold"
                                        >งานบริการวิชาการ</nuxt-link
                                    >
                                    <ul style="list-style: none" class="mt-2">
                                        <li>
                                            <nuxt-link
                                                to="/department"
                                                @click="closeOffcanvas"
                                                >- หน่วยงาน</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/serve"
                                                @click="closeOffcanvas"
                                                >-
                                                งานบริการวิชาการทั้งหมด</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                                <li class="mt-3">
                                    <nuxt-link class="fw-bold"
                                        >งานทรัพย์สินทางปัญญา</nuxt-link
                                    >
                                    <ul style="list-style: none" class="mt-2">
                                        <li>
                                            <nuxt-link
                                                to="/intellectual/1"
                                                @click="closeOffcanvas"
                                                >-
                                                งานทรัพย์สินทางปัญญา</nuxt-link
                                            >
                                        </li> <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/intellectual/3"
                                                @click="closeOffcanvas"
                                                >- KMUTNB MOOC</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/intellectual/2"
                                                @click="closeOffcanvas"
                                                >- เอกสารดาวน์โหลด</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                </li>

                                <!-- <hr />
                                <li>
                                    <nuxt-link
                                        to="/department"
                                        @click="closeOffcanvas"
                                        >- หน่วยงาน</nuxt-link
                                    >
                                </li> -->
                                <hr />
                                <li class="mt-3">
                                    <nuxt-link class="fw-bold"
                                        >เกี่ยวกับเรา</nuxt-link
                                    >
                                    <ul style="list-style: none" class="mt-2">
                                        <li>
                                            <nuxt-link
                                                to="/about/1"
                                                @click="closeOffcanvas"
                                                >- ความเป็นมา</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/about/2"
                                                @click="closeOffcanvas"
                                                >- วิสัยทัศน์/พันธกิจ</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/about/3"
                                                @click="closeOffcanvas"
                                                >- สัญลักษณ์</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/about/4"
                                                @click="closeOffcanvas"
                                                >- โครงสร้างองค์กร</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/about/5"
                                                @click="closeOffcanvas"
                                                >- โครงสร้างบริหาร</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/team"
                                                @click="closeOffcanvas"
                                                >- บุคลากร</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/about/6"
                                                @click="closeOffcanvas"
                                                >-
                                                แบบฟอร์มสำหรับบุคลากร</nuxt-link
                                            >
                                        </li>
                                        <hr style="margin: 0.4rem 0" />
                                        <li>
                                            <nuxt-link
                                                to="/about/7"
                                                @click="closeOffcanvas"
                                                >- ระบบสารสนเทศภายใน</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                                <li class="mt-3">
                                    <nuxt-link
                                        class="fw-bold"
                                        to="/contact-us"
                                        @click="closeOffcanvas"
                                        >ติดต่อสอบถาม</nuxt-link
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
                                    to="/admin/video"
                                    @click="closeOffcanvas"
                                    >- VIDEO</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    to="/admin/team"
                                    @click="closeOffcanvas"
                                    >- บุคลากร</nuxt-link
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
                                    href="/admin/about"
                                    @click="closeOffcanvas"
                                    >- เกี่ยวกับเรา</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link
                                    href="/admin/contact"
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
