<template>
    <div :class="'fix ' + useSkin().value">
        <HeaderCustom />

        <main>
            <slot></slot>
        </main>

        <FooterCustom />
        <BackToTop />
    </div>
</template>

<script>
import HeaderCustom from "./headers/HeaderCustom.vue";
import FooterCustom from "./footers/FooterCustom.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
    components: {
        HeaderCustom,
        FooterCustom,
        BackToTop,
    },
};
</script>
