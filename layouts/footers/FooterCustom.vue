<template>
    <footer>
        <div
            :class="`footer__area ${style_2 ? 'footer__style-3' : ''}`"
            :data-bg-color="`footer-bg-${style_2 ? 'grey-4' : 'black'}`"
        >
            <div class="footer__top footer__top-5">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div
                                class="footer__widget footer__widget-5 mb-50 footer-col-5-1"
                            >
                                <div class="footer__widget-content">
                                    <div class="footer__info">
                                        <h4>อุทยานเทคโนโลยี</h4>
                                        <h4>
                                            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                                        </h4>

                                        <p style="font-size: 1em">
                                            <span>
                                                1518 ถนนประชาราษฎร์ 1
                                                แขวงวงศ์สว่าง
                                            </span>
                                            <br />
                                            <span
                                                >เขตบางซื่อ กรุงเทพมหานคร
                                                10800</span
                                            >
                                        </p>

                                        <p style="font-size: 1em">
                                            <span>
                                                โทรศัพท์ : {{ contact_phone }}
                                            </span>
                                            <br />
                                            <span
                                                >อีเมล : {{ contact_email }}</span
                                            >
                                            <br />
                                            <br />
                                            <span> Social : </span>
                                            <a
                                                class="btn btn-sm btn-outline-primary me-2"
                                                target="_blank"
                                                href="https://www.facebook.com/KMUTNB.TECHNOPARK"
                                            >
                                                <i
                                                    class="fab fa-facebook-f"
                                                    style="
                                                        font-size: 24px;
                                                        color: #4267b2;
                                                    "
                                                ></i>
                                            </a>

                                            <!-- ไอคอน YouTube -->
                                            <a
                                                class="btn btn-sm btn-outline-danger me-2"
                                                target="_blank"
                                                href="https://www.youtube.com/@KMUTNBTechnoPark99"
                                            >
                                                <i
                                                    class="fab fa-youtube"
                                                    style="
                                                        font-size: 24px;
                                                        color: #ff0000;
                                                    "
                                                ></i>
                                            </a>
                                        </p>

                                        <div
                                            class="pl-10 pr-10 mt-1 d-inline-block bg-theme-primary footer-label"
                                        >
                                            อุทยานเทคโนโลยี
                                            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                                        </div>
                                        <!-- <div class="mt-20">
                                            <nuxt-link href="/login"
                                                ><span
                                                    class="btn btn-primary"
                                                    style="font-size: 0.8em"
                                                >
                                                    <i
                                                        class="fa fa-sign-in-alt"
                                                    ></i>

                                                    เข้าสู่ระบบสำหรับเจ้าหน้าที่</span
                                                ></nuxt-link
                                            >
                                        </div> -->
                                        <!-- </a> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div
                                class="footer__widget footer__widget-5 mb-50 footer-col-5-3"
                            >
                                <div class="footer__widget-content">
                                    <div class="footer__info">

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.25103509604!2d100.50773527995139!3d13.823958961026323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b9fec733295%3A0xabfe9c6fbd6d88d7!2zS01VVE5CIFRFQ0hOTyBQQVJLIOC4reC4uOC4l-C4ouC4suC4meC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4tSDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguYDguJfguITguYLguJnguYLguKXguKLguLXguJ7guKPguLDguIjguK3guKHguYDguIHguKXguYnguLLguJ7guKPguLDguJnguITguKPguYDguKvguJnguLfguK0!5e0!3m2!1sen!2sth!4v1723620243600!5m2!1sen!2sth"
                                            width="100%"
                                            height="300"
                                            style="border: 0"
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-12 text-center">
                            <div class="footer__copyright-5">
                                <p>
                                    © {{ new Date().getFullYear() + 543 }}
                                    อุทยานเทคโนโลยี
                                    มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { useRuntimeConfig } from "#app";
export default {
    components: {},
    props: {
        style_2: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        const config = useRuntimeConfig();
        const { contact_phone, contact_email } = config.public;

        return {
            contact_phone,
            contact_email,
        };
    },
};
</script>

<style scoped>
.footer__style-3 .footer__bottom-5 {
    padding-top: 27px;
    padding-bottom: 20px;
    border-top: 1px solid #e1e1ec;
    background-color: var(--tp-theme-1);
}

.footer__style-3 .footer__copyright-5 p {
    color: #fff;
}

.footer__style-3 .footer__widget ul li a:hover {
    color: var(--tp-theme-1);
}

.footer__style-3 .footer__widget-title {
    color: var(--tp-theme-1);
}

.footer__top-5 {
    padding-top: 50px;
    padding-bottom: 0px;
}

.footer-col-5-3 {
    padding-left: 0px;
    padding-right: 100px;
}

.footer-label {
    vertical-align: top;
    color: rgb(0, 0, 0) !important;
    border-radius: 1em;
}
</style>
