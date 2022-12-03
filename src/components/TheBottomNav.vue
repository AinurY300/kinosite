<script setup>
import TheBottomNavCatalog from './TheBottomNavCataog.vue'
</script>

<template>
  <v-bottom-navigation grow style="border-top-width: 1px" elevation="0">
    <v-btn to="/">
      <v-icon icon="mdi-home"/>
      Главная
    </v-btn>

    <v-btn @click="catalogOpen = !catalogOpen">
      <v-icon icon="mdi-menu"/>
      Каталог
      catalogOpen: {{ catalogOpen }}
    </v-btn>

    <v-btn>
      <v-icon icon="mdi-magnify"/>
      Поиск
    </v-btn>

    <v-btn>
      <v-icon icon="mdi-bookmark-outline"/>
      Избранное
    </v-btn>
  </v-bottom-navigation>

  <!-- CATALOG DRAWER -->
  <TheBottomNavCatalog v-model:open="catalogOpen"/>
</template>

<script>
export default {
  data() {
    return {
      catalogOpen: false
    }
  }
}
</script>
