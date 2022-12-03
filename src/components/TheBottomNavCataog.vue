<template>
  <v-navigation-drawer
    :model-value="open"
    location="bottom"
    temporary
    style="height: auto;"
  >
    <v-container>
      <v-responsive max-width="672" class="ma-auto">
        <div class="catalog-content">
          <v-btn class="catalog-link" variant="flat" to="/films">
            Фильмы
            <v-icon class="ml-auto" icon="mdi-chevron-right"></v-icon>
          </v-btn>
          <v-btn class="catalog-link" variant="flat" to="/serials">
            Сериалы
            <v-icon class="ml-auto" icon="mdi-chevron-right"></v-icon>
          </v-btn>
          <v-btn class="catalog-link" variant="flat" to="/multfilms">
            Мультфильмы
            <v-icon class="ml-auto" icon="mdi-chevron-right"></v-icon>
          </v-btn>
          <v-btn class="catalog-link" variant="flat" to="/multserials">
            Мультсериалы
            <v-icon class="ml-auto" icon="mdi-chevron-right"></v-icon>
          </v-btn>
        </div>  
      </v-responsive>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['open']
}
</script>

<style scoped lang="scss">
.catalog-content {
  gap: .5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.catalog-link {
  border-width: 1px;
  justify-content: stretch;
  border-style: dashed;

  &:hover {
    border-style: solid;
  }
}
</style>