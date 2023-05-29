<template>
    <MainHeader />
  
    <transition-page>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </transition-page>
  
    <MainFooter />
  </template>
  
  <script setup>
  import TransitionPage from "@/components/Transitions/TransitionPage.vue";
  import MainHeader from "@/components/MainHeader.vue";
  import MainFooter from "@/components/MainFooter.vue";
  </script>
  