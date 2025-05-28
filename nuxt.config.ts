// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        apiSecret: process.env.NUXT_API_SECRET,
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
            contact_phone: process.env.NUXT_CONTACT_PHONE,
            contact_email: process.env.NUXT_CONTACT_EMAIL,
        },
    },
    css: [
        "bootstrap/scss/bootstrap.scss",
        "swiper/css/bundle",
        "vue3-carousel/dist/carousel.css",
        "~/assets/scss/main.scss",
        "~/assets/css/custom.css",
    ],
    modules: [
        [
            "@pinia/nuxt",
            {
                autoImports: [
                    "defineStore",
                    ["defineStore", "definePiniaStore"],
                ],
            },
        ],
        "@nuxtjs/i18n",
    ],
    i18n: {
        locales: [
            { code: "th", file: "th.json", name: "ไทย" },
            { code: "en", file: "en.json", name: "English" },
            // { code: "cn", file: "cn.json", name: "Chinese" },
        ],
        defaultLocale: "th",
        lazy: true,
        strategy: "prefix_except_default", //
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            alwaysRedirect: false,
            fallbackLocale: "th",
            redirectOn: "root",
        },
    },
    plugins: [
        { src: "~/plugins/toastify.js" },
        { src: "~/plugins/froala-editor.client.js", mode: "client" },
        // { src: "~/plugins/froala-editor.client.js", mode: "client" },
    ],
    // imports: {
    //     dirs: ["store"],
    // },
    //   plugins: [{ src: "~/plugins/froala-editor.client.js", mode: "client" }],
    app: {
        head: {
            title: "อุทยานเทคโนโลยี มจพ.",
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/service/favicon.ico",
                },
            ],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
                    integrity:
                        "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
                    crossorigin: "anonymous",
                },
            ],
        },
        // css: [
        //     '~/node_modules/vue-wysiwyg/dist/vueWysiwyg.css',
        //     '~/node_modules/froala-editor/css/froala_editor.pkgd.min.css',
        //     '~/node_modules/froala-editor/css/froala_style.min.css'
        // ],
    },
});
