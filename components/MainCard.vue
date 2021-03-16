<template>
  <div class="px-2 newCard">
    <Title :title="title" />

    <v-row warp class="newCard-layout">
      <v-col v-if="listCartoons.length == 0" align="center" justify="center">
        <v-img src="/cry-anime.gif" width="150px" />
        <br />
        <h3>น่าเสียดาย ยังไม่มีการ์ตูนในหมวดหมู่นี้</h3>
      </v-col>
      <v-col v-else cols="6" sm="3" v-for="(item, i) in listCartoons" :key="i" class="pa-2">
        <v-card elevation="0" max-width="210">
          <div class="content-container">
            <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <nuxt-link
              :to="
                item.genre !== 'doujin'
                  ? '/' + item.id.replace('CT', '')
                  : '/' + item.id.replace('CT', '') + '/1'
              "
              class="nuxt-link"
            >
              <v-img @click="setCartoon(item)" class="cartoon-thumbnail" :src="item.thumbnail">
                <div class="tag-img">
                  <h6>{{ item.genre.toUpperCase() }}</h6>
                </div>
              </v-img>
            </nuxt-link>
            <v-card-title class="card-title" @click="setCartoon(item)">
              <nuxt-link
                :to="
                  item.genre !== 'doujin'
                    ? '/' + item.id.replace('CT', '')
                    : '/' + item.id.replace('CT', '') + '/1'
                "
                class="card-title"
              >
                <v-tooltip bottom color="rgba(0, 0, 0, 0.95)">
                  <template v-slot:activator="{ on, attrs }">
                    <h2 v-bind="attrs" v-on="on" class="ellipsis">{{ item | titleCartoon }}</h2>
                  </template>
                  <h5>{{ item | titleCartoon }}</h5>
                </v-tooltip>
              </nuxt-link>
            </v-card-title>

            <v-card-text class="score">
              <v-row align="center" class="mx-0">
                <v-rating :value="5" color="amber" dense half-increments readonly size="16"></v-rating>
                <span>{{ item.score > 0 ? item.score.toFixed(1) : null }}</span>
              </v-row>
            </v-card-text>

            <v-card-actions class="card-action">
              <div v-if="item.last_two_ep[0]">
                <div v-for="(ep, i) in item.last_two_ep" :key="i">
                  <div class="d-flex align-center mb-2" @click="setEp(ep)">
                    <v-row align="center">
                      <v-col class="pa-0" cols="6" sm="6">
                        <v-btn depressed small rounded>
                          <nuxt-link
                            :to="
                              '/' + item.id.replace('CT', '') + '/' + ep.episode
                            "
                          >
                            <span class="episode-label">ตอนที่ {{ ep.episode }}</span>
                          </nuxt-link>
                        </v-btn>
                      </v-col>
                      <v-col class="pa-0" cols="6" sm="6">
                        <span class="updated-time ellipsis">{{ ep.created | formatDate }}</span>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: { title: String },
  computed: {
    ...mapState({
      listCartoons: state => state.listCartoons
    })
  },
  methods: {
    setEp(ep) {
      let scroll = document.querySelector('#infinite-list')
      scroll.scrollTop = 0
      localStorage.setItem('cartoonEp', ep.id)
    },
    setCartoon(cartoon) {
      let scroll = document.querySelector('#infinite-list')
      scroll.scrollTop = 0
      localStorage.setItem('cartoonId', cartoon.id)
      this.$store.commit('SET_CARTOON', cartoon)

      if (cartoon.genre == 'doujin') {
        localStorage.setItem('cartoonEp', cartoon.last_two_ep[0].id)
      }
    }
  }
}
</script>

<style></style>
