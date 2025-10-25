<template>
  <ModalMemorialModal />
  <HomeProject />
  <HomeBanner />
  <HomeNews />
  <HomeServe />

  <section class="annouce_and_video pt-40 pb-40">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <HomeAnnouce />
        </div>
        <div class="col-md-6">
          <HomeVideo />
        </div>
      </div>
    </div>
  </section>
  <HomeIcon />
</template>

<script setup>
useHead({
  title: "อุทยานเทคโนโลยี มจพ.",
  meta: [
    {
      name: "อุทยานเทคโนโลยี มจพ.",
      content: "อุทยานเทคโนโลยี มจพ.",
    },
  ],
});
if (process.client) {
  if (localStorage.getItem("login")) {
    useToast("เข้าสู่ระบบเสร็จสิ้น", "success");
    localStorage.removeItem("login");
  }
}
</script>
