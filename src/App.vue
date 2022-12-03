<template>
  <v-app>
    <TheHeader/>
    <v-main>
      <RouterView/>  
    </v-main>
    <TheBottomNav/>
  </v-app>
</template>


<script setup>
import TheHeader from './components/TheHeader.vue'
import TheBottomNav from './components/TheBottomNav.vue'
</script>