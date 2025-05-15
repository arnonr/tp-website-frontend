<template>
  <span>
    <span
      @click="handleToggle"
      class="header__lang-selected-lang tp-lang-toggle"
      id="tp-header-lang-toggle"
    >
      {{ currentLocale === 'th' ? 'ไทย' : 'English' }}
    </span>
    <ul :class="`header__lang-list tp-lang-list ${open?'tp-lang-list-open':''}`">
      <li @click="switchLanguage('th')">ไทย</li>
      <li @click="switchLanguage('en')">English</li>
    </ul>
  </span>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const open = ref(false);
const currentLocale = ref(locale.value);

const handleToggle = () => {
  open.value = !open.value;
};

const switchLanguage = (lang) => {
  locale.value = lang;
  currentLocale.value = lang;
  open.value = false;
};
</script>
