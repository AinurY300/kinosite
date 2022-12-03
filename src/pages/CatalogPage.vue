<script setup>
import { supabase } from '../stores/supabase'
</script>


<template>
  <v-container>
    <v-row v-if="data">
      <v-col
        v-for="item in data" 
        :key="item.id"
        cols="3"
      >
        <v-card border elevation="0" @click="$router.push(`${$route.params.videotype}/${item.kinopoisk_id}`)">
          <v-img
            :src="item.poster_url"
            height="380px"
            cover
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-4"
                ></v-progress-circular>
              </div>
            </template>
          </v-img>

          <!-- 
          <v-card-title style="font-size: .95em;">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.year }}
          </v-card-subtitle>

          <v-card-actions>   
            <v-chip v-if="item.rating_kinopoisk" prepend-icon="mdi-star-outline">
              {{ item.rating_kinopoisk }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn
              color="orange-lighten-2"
              variant="text"
            >Смотреть</v-btn>
          </v-card-actions> 
          -->

        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-progress-circular indeterminate></v-progress-circular>
    </v-row>
    <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      page: 1
    }
  },
  async created() {
    await this.getData(this.$route.params.videotype)
  },
  watch: {
    async $route(curr, prev) {
      await this.getData(curr.params.videotype)
    }
  },
  methods: {
    async getData(videotype) {
      this.data = null

      const { data } = await supabase
        .from(videotype)
        .select('id, title, kinopoisk_id, rating_kinopoisk, rating_age, poster_url, year')
        .not('rating_kinopoisk', 'is', null)
        .order('year', { ascending: false })
        .order('rating_kinopoisk', { ascending: false })

      this.data = data
    }
  }
}
</script>


