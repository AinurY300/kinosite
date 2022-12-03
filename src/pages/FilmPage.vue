<script setup>
import { supabase } from '../stores/supabase'
</script>

<template>
  <v-container>
    <v-row v-if="data">
      <v-col cols="3">
        <v-card border elevation="0">
          <v-img
            :src="data.poster_url"
            width="100%"
            cover
            style="aspect-ratio: 2/3"
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
          
          <v-card-actions>  
            <v-spacer></v-spacer>
              <v-rating
                size="x-small"
                :model-value="data.rating_kinopoisk / 100 * 80"
                readonly
                length="8"
                color="yellow"
              ></v-rating> 
              <v-spacer></v-spacer>
          </v-card-actions> 
        </v-card>
      </v-col>
      <v-col>
        <h1>
          Смотреть
          {{ 
            $route.params.videotype == 'films' ? 'фильм' :  
            $route.params.videotype == 'serials' ? 'сериал' :
            $route.params.videotype == 'multfilms' ? 'мультфильм' :
            $route.params.videotype == 'multserials' ? 'мультсериал' : 'undefined'
          }}
          "{{ data.title }}"
          онлайн
        </h1>
        <br>
        <p>
          {{ data.description }}
        </p>
        <br>
        <div>
          <v-chip
            class="ma-2"
            color="orange"
            variant="outlined"
          >
            <v-icon start icon="mdi-star"></v-icon>
            КП - {{ data.rating_kinopoisk }}
          </v-chip>
          <v-chip
            class="ma-2"
            color="orange"
            variant="outlined"
          >
            <v-icon start icon="mdi-star"></v-icon>
            IMDB - {{ data.rating_imdb }}
          </v-chip>
        </div>
        
      </v-col>
    </v-row>
    <v-row v-else>
      <v-progress-circular indeterminate></v-progress-circular>
    </v-row>
    <v-row v-if="data">
      <v-col cols="3">

      </v-col>
      <v-col>
        <v-card border elevation="0">
          <v-tabs v-model="tab">
            <v-tab 
              v-for="iframe, i in data.iframes"
              :value="i"
            >{{ i == 0 ? 'Смотреть онлайн' : `Плеер ${++i}` }}</v-tab>
          </v-tabs>

          <v-card-text class="pa-0">
            <v-window v-model="tab">
              <v-window-item style="aspect-ratio: 16/9" v-for="iframe, i in data.iframes" :value="i">
                <iframe height="100%" width="100%" :src="iframe" frameborder="0"></iframe>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>


      <!-- <v-col style="aspect-ratio: 16/9">
        <iframe height="100%" width="100%" :src="data.iframes[0]" frameborder="0"></iframe>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      data: null
    }
  },
  async created() {
    const { data } = await supabase
      .from(this.$route.params.videotype)
      .select()
      .eq('kinopoisk_id', this.$route.params.kinopoisk_id)
    this.data = data[0]
  }
}
</script>