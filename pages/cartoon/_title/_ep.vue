<template>
  <v-container style="padding: 0" class="readcartoon">
    <div class="pa-3">
      <h3>
        กำลังอ่าน {{ this.cartoon.title }}
        {{ cartoon.genre !== 'doujin' ? ` ตอนที่ ${$route.params.ep}` : `` }}
      </h3>
    </div>
    <div v-for="(item, i) in readCartoon.pages" :key="i">
      <v-img :src="item.url" height="100%" class="no-radius"></v-img>
    </div>
    <br />
    <v-row class="pa-3 mx-auto" justify="center" style="max-width: 800px">
      <v-btn
        class="next_prev_btn"
        v-if="readCartoon.prev_episode"
        color="primary"
        @click="prevEpisode(readCartoon.prev_episode)"
      >ตอนก่อนหน้า</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        class="next_prev_btn"
        v-if="readCartoon.next_episode"
        color="primary"
        @click="nextEpisode(readCartoon.next_episode)"
      >ตอนต่อไป</v-btn>
    </v-row>

    <v-row>
      <v-col cols="12" lg="9" class="pa-3 text-center">
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v9.0"
          nonce="CuXWLO7p"
        ></script>
        <div
          class="fb-comments"
          :data-href="'https://7toons.com/cartoon' +
            $route.params.title +
            '/' +
            $route.params.ep"
          data-width="100%"
          data-numposts="10"
          data-lazy
          data-mobile
        ></div>
      </v-col>
      <v-col cols="12" lg="3" class="py-3">
        <SideCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ params, $axios }) {
    let cartoonId = 'CT' + params.title
    // หา detail cartoon
    let getCartoon = await $axios.get(`/cartoon/` + cartoonId, {})
    // หา id episode
    let getEpisodes = await $axios.get('/episode?cartoon_id=' + cartoonId, {})
    let cartoonEp = getEpisodes.data.find(element => element.episode == params.ep)
    return {
      cartoonId,
      cartoonEp,
      getCartoon: getCartoon.data,
      getEpisodes: getEpisodes.data
    }
  },
  head() {
    return {
      title: `${this.getCartoon.title} ตอนที่ ${this.cartoonEp.episode} `,
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'read cartoon '
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@7toons' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@7toons' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.getCartoon.title} ตอนที่ ${this.cartoonEp.episode} `
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `${this.getCartoon.title} เว็บอ่านการ์ตูนออนไลน์ การ์ตูนแปลไทย การ์ตูนล่าสุด อ่านการ์ตูนบน Ipad Iphone Android ได้ง่ายๆ ที่นี่เลย 7toons.com`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.getCartoon.thumbnail
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.getCartoon.title} เว็บอ่านการ์ตูนออนไลน์ การ์ตูนแปลไทย การ์ตูนล่าสุด อ่านการ์ตูนบน Ipad Iphone Android ได้ง่ายๆ ที่นี่เลย 7toons.com`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getCartoon.thumbnail
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `${this.getCartoon.title} ตอนที่ ${this.cartoonEp.episode} `
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.getCartoon.title} ตอนที่ ${this.cartoonEp.episode} `
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.getCartoon.title} เว็บอ่านการ์ตูนออนไลน์ การ์ตูนแปลไทย การ์ตูนล่าสุด อ่านการ์ตูนบน Ipad Iphone Android ได้ง่ายๆ ที่นี่เลย 7toons.com`
        }
      ]
    }
  },
  computed: {
    ...mapState({
      cartoon: state => state.cartoon,
      listCartoonsPopular: state => state.listCartoonsPopular,
      readCartoon: state => state.readCartoon
    })
  },
  async created() {
    // this.$nuxt.$loading.start()
    this.$vuetify.goTo(0)
    this.$store.commit('SET_CARTOON', this.getCartoon)
    this.getEpisodeById(this.cartoonEp.id)
    // this.$nuxt.$loading.finish()
  },
  methods: {
    async getEpisodeById(id) {
      // ไปหารูปการ์ตูนตอนนั้นๆ
      let { data: getReadCartoon } = await this.$axios.get(`/episode/` + id, {})
      this.$store.commit('SET_READCARTOON', getReadCartoon)
    },
    prevEpisode(data) {
      this.$router.replace({
        path: '/cartoon/' + this.cartoonId.replace('CT', '') + '/' + data.episode
      })
    },
    nextEpisode(data) {
      this.$store.commit('SET_EPISODE_ID', data.id)
      this.$router.replace({
        path: '/cartoon/' + this.cartoonId.replace('CT', '') + '/' + data.episode
      })
    }
  }
}
</script>

<style></style>
