
<template>
  <v-app>
    <TheHeader/>
    <v-main>
      <RouterView/>  
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<style lang="scss">
// $body-font-family: 'Rubik';
// $title-font: 'Rubik';
</style>