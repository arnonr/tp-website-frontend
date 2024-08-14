<template>
  <div>
    <HeaderCustom />

    <main>
      <slot></slot>
    </main>

    <Footer />
    <BackToTop/>
  </div>
</template>

<script>
import HeaderCustom from "./headers/HeaderCustom.vue";
import Footer from "./footers/Footer.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    Footer,
    BackToTop,
  },
};
</script>
