<script setup>
import { useDisplay } from 'vuetify'
</script>

<template>
  <v-navigation-drawer
    v-if="smAndDown"
    class="the-sidebar"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    location="end"
    elevation="0"
    temporary
  >
    <v-toolbar class="the-sidebar-header">
      <v-btn icon="mdi-close" @click="$emit('update:modelValue', false)"></v-btn>
    </v-toolbar>

    <div class="the-sidebar-content">
      <v-list class="pa-0">
        <v-list-item>
          <v-btn variant="tonal" block>Войти</v-btn>
        </v-list-item>
        <v-list-item link @click="$router.push(films)">
          <v-list-item-title>Фильмы</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push(serials)">
          <v-list-item-title>Сериалы</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push(multfilms)">
          <v-list-item-title>Мультфильмы</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push(multserials)">
          <v-list-item-title>Мультсериалы</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['modelValue'],
  data() {
    return {
      smAndDown: useDisplay().smAndDown
    }
  },
  watch: {
    smAndDown(currValue) {
      if (!currValue) this.$emit('update:modelValue', false)
    }
  },
}
</script>

<style lang="scss">
.the-sidebar {
  direction: rtl !important;
}

.the-sidebar-header {
  direction: ltr;
  top: 0 !important;
  z-index: 1 !important;
  position: sticky !important;
  border-bottom-width: 1px !important;
  // background: var(--v-theme-background) !important;
}

.the-sidebar-content {
  direction: ltr;
}
</style>

