<template>
  <section :class="`${el_style ? 'pt-30' : ''} bg-grey`">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 mb-20">
          <h3>{{ 'ประเภทงานบริการวิชาการ' }}</h3>
        </div>
      </div>
      <div class="row" v-if="items.length != 0">
        <div v-for="(it, idx) in items" :key="idx" class="col-md-6">
          <nuxt-link :to="`/serve?service_category_id=${it.id}`">
            <img :src="`images/icon/icon_${it.id}.jpg`" style="width:70px;" alt="" />
            <span class="ms-3">{{ it.name }}</span>
          </nuxt-link>
          <hr style="border-top: dotted 1px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const items = ref([]);

const props = defineProps({
  el_style: {
    type: Boolean,
    default: true,
  },
});

const { data: res } = await useAsyncData("serviceCategory", async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/service-category`, {
    params: {
      is_publish: 1,
      lang: useCookie("lang").value,
      orderBy: "created_at",
    },
  });

  return data;
});

items.value = res.value.data;
</script>

<style scoped>
.brand__item-6 img {
  opacity: 1;
}

.brand__item-6 > .project-link-img:hover {
  /* https://angel-rs.github.io/css-color-filter-generator/ */
  filter: brightness(0) saturate(100%) invert(55%) sepia(77%) saturate(4539%)
    hue-rotate(0deg) brightness(101%) contrast(106%);
}

.bg-grey {
  background-color: var(--tp-common-footer-bg-grey-4);
}

.project-card {
  background-color: #ccc;
  border-color: var(--tp-common-footer-bg-grey-4);
  padding: 10px;
  padding-top: 50px;
  padding-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
}

.card-img-top {
  width: 70%;
  margin-bottom: 10px;
  filter: invert(5%) sepia(40%) saturate(8%) hue-rotate(48deg) brightness(90%)
    contrast(99%);
}

.project-card:hover {
  background-color: var(--tp-theme-1);
}

.project-card:hover .card-img-top {
  filter: none;
}

.project-name {
  font-size: 1.2em;
}
</style>
