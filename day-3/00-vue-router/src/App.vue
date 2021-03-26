<template>
  <!-- <router-link to="/">Anasayfa</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link> -->
  <app-header />
  <router-view />
</template>
<script>
import appHeader from "@/components/appHeader";
export default {
  components: {
    appHeader,
  },
};
</script>
