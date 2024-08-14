<template>
  <LayoutCustom>
    <HomeHero />
    <HomeAbout/>
    <HomeCounter/>
    <HomeServices/>
    <HomeEvents/>
    <HomeTeams/>
    <HomeFaq/>
    <HomePortfolio/>
    <HomeTestimonial/>
    <HomeBlogs/>
  </LayoutCustom>
</template>

<script setup>
import LayoutCustom from '~/layouts/LayoutCustom.vue';
import HomeHero from '~/components/hero-banner/HomeHero.vue';
import HomeAbout from "~/components/abouts/HomeAbout.vue";
import HomeCounter from "~/components/counters/HomeCounter.vue";
import HomeServices from "~/components/services/HomeServices.vue";
import HomeEvents from "~/components/events/HomeEvents.vue";
import HomeTeams from "~/components/teams/HomeTeams.vue";
import HomeFaq from "~/components/faqs/HomeFaq.vue";
import HomePortfolio from "~/components/portfolios/HomePortfolio.vue";
import HomeTestimonial from "~/components/testimonials/HomeTestimonial.vue";
import HomeBlogs from "~/components/blogs/HomeBlogs.vue";

useHead({
  title: "งานบริการวิชาการ มจพ.",
}); 

</script>
