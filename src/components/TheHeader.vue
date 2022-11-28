<script setup>
import TheSidebar from './TheSidebar.vue'
import { useTheme } from 'vuetify'

// console.log(useTheme())
// const theme = useTheme()
// function toggleTheme() {
//   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
// }

// return {
//   theme,
//   toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
// }
</script>

<template>
  <TheSidebar v-model="isSidebarOpen"/>  
  <v-app-bar tag="header" elevation="0" style="border-bottom-width: 1px">
    <v-container>
      <v-row align="center">
        <v-col cols="auto">
          <v-app-bar-title @click="$router.push('/')" style="cursor: pointer">
            <h3>Kinosite</h3>
          </v-app-bar-title>
        </v-col>
        <v-col>
          <template class="d-none d-md-block">
            <v-btn @click="$router.push('films')">Фильмы</v-btn>
            <v-btn @click="$router.push('serials')">Сериалы</v-btn>
            <v-btn @click="$router.push('multfilms')">Мультфильмы</v-btn>
            <v-btn @click="$router.push('multserials')">Мультсериалы</v-btn>
          </template>
        </v-col>
        <v-col cols="auto">
          <v-btn size="small" icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
          <v-btn class="d-none d-md-inline">Войти</v-btn>
          <v-app-bar-nav-icon class="d-md-none" @click="isSidebarOpen = !isSidebarOpen"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>




<script>


export default {
  data() {
    return {
      value: true,
      theme: useTheme(),
      isSidebarOpen: null,
    }
  },
  methods: {
    toggleTheme() {
      this.theme.global.name = this.theme.global.name == 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', this.theme.global.name)
    }
  }
}
</script>
