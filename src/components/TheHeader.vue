<template>
  <v-app-bar elevation="0" density="comfortable" style="border-bottom-width: 1px">
    <v-container>
      <v-row align="center">
        <!-- <v-col cols="auto">
          <v-app-bar-title @click="$router.push('/')">
            <h3>KINOSITE</h3>
          </v-app-bar-title>
        </v-col> -->
        <v-col>
          <v-tabs class="d-none d-md-block">
            <v-tab to="/" ripple>
              <v-app-bar-title>
                <h3>KINOSITE</h3>
              </v-app-bar-title>
            </v-tab>
            <!-- <v-tab hidden></v-tab> -->
            <v-tab to="/films">Фильмы</v-tab>
            <v-tab to="/serials">Сериалы</v-tab>
            <v-tab to="/multfilms">Мультфильмы</v-tab>
            <v-tab to="/multserials">Мультсериалы</v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="auto">
          <v-btn size="small" icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
          <v-btn class="d-none d-md-inline">Войти</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>




<script>
export default {
  methods: {
    toggleTheme() {
      this.$vuetify.theme.global.name = this.$vuetify.theme.global.name == 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', this.$vuetify.theme.global.name)
    }
  },
}
</script>
