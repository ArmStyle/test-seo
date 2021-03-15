<template>
  <div class="px-3 popular-container">
    <Title title="การ์ตูนยอดนิยม !" />
    <v-layout row warp text-xs-center>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="12"
        class="px-2"
        v-for="(item, i) in listCartoonsPopular"
        :key="i"
      >
        <v-card elevation="0" class="sidecard">
          <div class="d-flex">
            <nuxt-link
              :to="
                item.genre !== 'doujin'
                  ? '/cartoon/' + item.id.replace('CT', '')
                  : '/cartoon/' + item.id.replace('CT', '') + '/1'
              "
            >
              <v-img
                @click="setCartoon(item)"
                style="cursor: pointer"
                class="ma-2"
                height="105"
                max-width="70"
                :src="item.thumbnail"
              ></v-img>
            </nuxt-link>
            <div @click="setCartoon(item)" class="my-2 incard">
              <v-card-title>
                <nuxt-link
                  :to="
                    item.genre !== 'doujin'
                      ? '/cartoon/' + item.id.replace('CT', '')
                      : '/cartoon/' + item.id.replace('CT', '') + '/1'
                  "
                  class="card-title"
                >
                  <v-tooltip bottom color="rgba(0, 0, 0, 0.95)">
                    <template v-slot:activator="{ on, attrs }">
                      <h4
                        v-bind="attrs"
                        v-on="on"
                        class="ellipsis"
                      >{{ item.title }} ตอนที่ 1-{{ item.amount_of_episodes }}</h4>
                    </template>
                    <h5>{{ item.title }} ตอนที่ 1-{{ item.amount_of_episodes }}</h5>
                  </v-tooltip>
                </nuxt-link>
              </v-card-title>
              <v-card-actions>
                <div style="min-width: 200px" v-if="item.last_two_ep[0]">
                  <v-row v-for="(ep, i) in item.last_two_ep" :key="i" align="center">
                    <v-col cols="6" lg="5" @click="setEp(ep)">
                      <nuxt-link :to="'/cartoon/' + item.id.replace('CT', '') + '/' + ep.episode">
                        <v-btn depressed small rounded>
                          <h6>ตอนที่ {{ ep.episode }}</h6>
                        </v-btn>
                      </nuxt-link>
                    </v-col>
                    <v-col cols="6" lg="7">
                      <h6>{{ ep.created | formatDate }}</h6>
                    </v-col>
                  </v-row>
                </div>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      listCartoonsPopular: state => state.listCartoonsPopular
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
