<template>
<v-container class="mt-12" style="max-width: 1180px">
  <head>
    <meta property="og:title" content="Surapong Beer" />
    <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
    <meta
      property="og:image"
      content="https://7toons.s3-ap-southeast-1.amazonaws.com/protected/images/episode/beer.png"
    />
  </head>
  <div>
    <v-row class="detail">
      <v-col cols="12" lg="9">
        <v-container class="px-3">
          <v-layout class="detail-box mb-3" wrap>
            <v-layout class="pa-1" wrap>
              <v-flex xs12 md4>
                <v-img class="mx-auto detail-img" :src="$store.state.cartoon.thumbnail"></v-img>
              </v-flex>
              <v-flex xs12 md8 class="detail-text my-auto">
                <v-layout row>
                  <v-flex xs12 md12>
                    <v-layout row warp>
                      <div
                        v-for="(item, i) in $store.state.cartoon.category"
                        :key="i"
                        class="hover-primary"
                      >
                        <v-layout
                          nowrap
                          class="pt-1"
                          @click="
                              setCategory($store.state.cartoon.genre, item)
                            "
                        >
                          <nuxt-link :to="`/` + $store.state.cartoon.genre">
                            <h3>{{ item }}</h3>
                          </nuxt-link>
                          <h3
                            v-if="
                                i != $store.state.cartoon.category.length - 1
                              "
                            class="space"
                          >|</h3>
                        </v-layout>
                      </div>
                    </v-layout>
                    <h1>{{ $store.state.cartoon.title }}</h1>
                    <h3>{{ $store.state.cartoon.artist }}</h3>
                    <v-layout nowarp>
                      <v-rating></v-rating>
                      <h4 style="padding-top: 0.25rem">({{ $store.state.cartoon.score }})</h4>
                    </v-layout>
                    <h5 class="max-lines">{{ $store.state.cartoon.summary }}</h5>
                    <nuxt-link
                      :to="
                          ($store.state.cartoon.id
                            ? $store.state.cartoon.id.replace('CT', '')
                            : $store.state.cartoon.id) +
                          `/` +
                          ($store.state.cartoon.episodes
                            ? $store.state.cartoon.episodes[0].episode
                            : '')
                        "
                    >
                      <v-btn
                        class="detail-btn"
                        v-if="$store.state.cartoon.episodes"
                        outlined
                        rounded
                        @click="setEp($store.state.cartoon.episodes[0])"
                      >ไปตอนแรกสุด</v-btn>
                    </nuxt-link>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-layout>
          <Title title="อัพเดตล่าสุด !" class="mt-10 pa-0" />
          <v-flex xs12 v-if="showLess">
            <v-flex xs12 v-for="(item, i) in cartoonEp.slice(0, 10)" :key="i">
              <ul @click="setEp(item)">
                <li>
                  <nuxt-link
                    :to="
                        ($store.state.cartoon.id
                          ? $store.state.cartoon.id.replace('CT', '')
                          : $store.state.cartoon.id) +
                        `/` +
                        item.episode
                      "
                    style="line-height: 50px"
                  >
                    <span>
                      ตอนที่ {{ item.episode }}
                      {{
                      $store.state.cartoon.status == 'end' && i == 0
                      ? 'จบ'
                      : ''
                      }}
                    </span>
                    <v-spacer></v-spacer>
                    <h4 style="color: gray">{{ item.created | formatDate }}</h4>
                  </nuxt-link>
                </li>
              </ul>
            </v-flex>
            <v-flex xs12 v-if="showLess && cartoonEp.length > 10" class="pt-3">
              <v-btn @click="showLess = false" block text>show more</v-btn>
            </v-flex>
          </v-flex>
          <v-flex xs12 v-else>
            <v-flex xs12 v-for="(item, i) in cartoonEp" :key="i">
              <ul @click="setEp(item)">
                <li>
                  <nuxt-link
                    :to="
                        ($store.state.cartoon.id
                          ? $store.state.cartoon.id.replace('CT', '')
                          : $store.state.cartoon.id) +
                        `/` +
                        item.episode
                      "
                    style="line-height: 50px"
                  >
                    <span>ตอนที่ {{ item.episode }}</span>
                    <v-spacer></v-spacer>
                    <span style="color: gray">{{ item.created | formatDate }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </v-flex>
          </v-flex>
          <!-- <MainCard /> -->
        </v-container>
      </v-col>
      <v-col cols="12" lg="3">
        <SideCard />
      </v-col>
    </v-row>
  </div>
</v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData(ctx) {
    let cartoonId = 'CT' + ctx.route.params.title
    let getCartoon = await ctx.$axios.get(`/cartoon/` + cartoonId, {})
    let getEpisodes = await ctx.$axios.get('/episode?cartoon_id=' + cartoonId, {})
    return { getCartoon: getCartoon.data, getEpisodes: getEpisodes.data }
  },
  head: function () {
    return this.$seo({
      name: 'Name app',
      title: this.getCartoon.title,
      templateTitle: '%name% - %title%',
      description: 'Hello World Page'
    })
  },

  data() {
    return {
      showLess: true
    }
  },
  computed: {
    ...mapState({
      listCartoonsPopular: state => state.listCartoonsPopular,
      cartoon: state => state.cartoon,
      cartoonEp: state => state.cartoonEp
    })
  },
  async created() {
    this.$nuxt.$loading.start()
    this.getCartoon.category = await this.checkForDuplicates(this.getCartoon.category)
    document.querySelector('#infinite-list').scrollTop = 0
    this.$store.commit('SET_CARTOON', this.getCartoon)
    this.$store.commit('SET_CARTOON_EP', this.getEpisodes)
    this.$nuxt.$loading.finish()
  },
  methods: {
    setCategory(genre, category) {
      this.$store.commit('SET_GENRE', genre)
      this.$store.commit('SET_CATEGORY', category)
      for (let i = 0; i < this.$store.state.listCategory.length; i++) {
        if (this.$store.state.listCategory[i].name == category) {
          this.$store.commit('SET_TAB', i)
          return
        }
      }
      if (genre == 'doujin') {
        this.$store.commit('SET_TAB', this.$store.state.listCategoryDoujin.indexOf(category))
      }
      this.getListCartoon()
    },
    setEp(ep) {
      let scroll = document.querySelector('#infinite-list')
      scroll.scrollTop = 0
      this.$store.commit('SET_EPISODE_ID', ep.id)
    },
    checkForDuplicates(array) {
      let valuesAlreadySeen = []
      for (let i = 0; i < array.length; i++) {
        let value = array[i]
        if (valuesAlreadySeen.indexOf(value) == -1) {
          valuesAlreadySeen.push(value)
        }
      }
      return valuesAlreadySeen
    },
    toTop() {
      let scroll = document.querySelector('#infinite-list')
      scroll.scrollTop = 0
    },
    async getListCartoon() {
      this.toTop()
      let genre = this.$store.state.genre
      let category = this.$store.state.category != 'all' ? this.$store.state.category : null
      let listCartoons

      if (!genre || genre == 'index') {
        try {
          listCartoons = await this.$axios.$get('/cartoon/latest?limit=20', {})
          this.$store.commit('SET_LIST_CARTOONS', listCartoons.data)
          if (listCartoons.LastEvaluatedKey) {
            this.$store.commit('SET_LASTEVALUATEDKEY', listCartoons.LastEvaluatedKey)
          } else {
            this.$store.commit('SET_LASTEVALUATEDKEY', null)
          }
        } catch (error) {}
      } else {
        try {
          let api =
            `/cartoon/filter?limit=20&` + (genre ? 'genre=' + genre : '') + (genre && category ? '&' : '') + (category ? 'category=' + category : '')

          listCartoons = await this.$axios.get(api, {})
          this.$store.commit('SET_LIST_CARTOONS', listCartoons.data)
          if (listCartoons.data.LastEvaluatedKey) {
            this.$store.commit('SET_LASTEVALUATEDKEY', listCartoons.data.LastEvaluatedKey)
          } else {
            this.$store.commit('SET_LASTEVALUATEDKEY', null)
          }
        } catch (error) {}
      }
    }
  }
}
</script>

<style></style>
