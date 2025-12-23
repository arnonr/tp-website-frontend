<template>
  <section :class="`brand__area ${el_style ? 'pt-30' : ''}`">
    <div class="container">
      <div class="brand__item-wrapper-6 d-flex flex-wrap justify-content-between" v-if="icons.length != 0">
        <div class="brand__item-6" v-for="(it, index) in icons" :key="index"
          style="margin-bottom: 30px;max-width: 150px;">
          <NuxtLink class="project-link-img" :to="it.url">
            <img :src="it.icon_file" :alt="it.name" style="width: 80%;" />
            <br /><br />
            <span class="fw-bold">{{ it.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  el_style: {
    type: Boolean,
    default: true,
  },
});

const icons = ref([
  {
    id: 1,
    name: "Booking",
    icon_file: "/images/iconwebtechnopark/icon_booking.png",
    url: "https://technopark.kmutnb.ac.th/booking/",
  },
  {
    id: 2,
    name: "Complaint",
    icon_file: "/images/iconwebtechnopark/icon_complaint.png",
    url: "https://technopark.kmutnb.ac.th/complainthub/",
  },
  {
    id: 3,
    name: "Sustainable",
    icon_file: "/images/iconwebtechnopark/icon_green.png",
    url: "/sdg",
  },
  {
    id: 4,
    name: "Knowledge Sharing",
    icon_file: "/images/iconwebtechnopark/icon_km.png",
    url: "/article/2",
  },
  {
    id: 5,
    name: "Co-operation",
    icon_file: "/images/iconwebtechnopark/icon_mou.png",
    url: "/article/3",
  },
  {
    id: 6,
    name: "Award & Standard Certificates",
    icon_file: "/images/iconwebtechnopark/icon_standard.png",
    url: "/article/4",
  },
  {
    id: 7,
    name: "Intellectual Property",
    icon_file: "/images/iconwebtechnopark/icon_intellectual.png",
    url: "https://ip.kmutnb.ac.th/",
  },
]);
</script>

<style scoped>
.brand__item-6 img {
  opacity: 1;
}

.brand__item-6 img:hover {
  opacity: 0.6;
}
</style>
