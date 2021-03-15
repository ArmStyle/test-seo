<template>
  <div>
    <v-app class="list-group" id="infinite-list">
      <Navbar />
      <v-btn
        transition="scroll-y-transition"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop()"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      <v-main>
        <v-container class="pa-0" style="max-width: 1180px">
          <Ad />

          <!-- <adsbygoogle ad-slot="1364637074" ad-client="ca-pub-2735809627790100" /> -->
          <!-- <v-lazy
            v-model="isActive"
            :options="{
              threshold: .5
            }"
            min-height="200"
            transition="fade-transition"
          >-->
          <v-card elevation="0" class="card-container">
            <nuxt class="pa-0 shadow" />
          </v-card>
          <!-- </v-lazy> -->
          <!-- <adsbygoogle /> -->
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    let getSearchList = await ctx.$axios.get('/cartoon/search', {})
    return { getSearchList: getSearchList.data }
  },
  data() {
    return {
      isActive: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js',
      fixed: false,
      loading: false,
      prevScrollpos: 0,

      fab: false
    }
  },
  async created() {
    this.$store.commit('SET_SEARCH_LIST', this.getSearchList)
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 200)
    })
    if (localStorage.getItem('theme') === 'true') {
      this.$vuetify.theme.dark = true
    } else {
      this.$vuetify.theme.dark = false
    }
    try {
      let listCategory = await this.$axios.get(`/category`, {})
      listCategory.data.unshift({
        id: 'CA000000000',
        name: 'all'
      })
      this.$store.commit('SET_LIST_CATEGORY', listCategory.data)
    } catch (error) {}
    if (!this.listCartoonsPopular || this.listCartoonsPopular.length == 0) {
      let listCartoons = await this.$axios.get(`/cartoon/latest?limit=8`, {})
      this.$store.commit('SET_LIST_CARTOONS_POPULAR', listCartoons.data)
    }

    const listElm = document.querySelector('#infinite-list')
    listElm.addEventListener('scroll', e => {
      this.fab = listElm.scrollTop > 20
      console.log('tes', this.prevScrollpos, listElm.scrollTop)
      if (this.prevScrollpos > listElm.scrollTop) {
        document.getElementById('navbar').style.top = '0'
        document.getElementById('navbar').style.transition = 'top 0.3s'
      } else {
        document.getElementById('navbar').style.top = '-112px'
        document.getElementById('navbar').style.transition = 'top 0.3s'
      }
      this.prevScrollpos = listElm.scrollTop
    })
  },
  methods: {
    toTop() {
      let scroll = document.querySelector('#infinite-list')
      scroll.scrollTop = 0
    }
  }
}
</script>
