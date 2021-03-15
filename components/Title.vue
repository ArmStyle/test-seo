<template>
  <v-container>
    <v-row class="pb-1">
      <h2>{{ title }}</h2>
      <h3 @click="getCartoonByGenre()" class="ma-0 ml-5 py-1">
        <nuxt-link v-if="showAll" :to="route">ดูข้อมูลทั้งหมด ></nuxt-link>
      </h3>
    </v-row>
    <hr />
    <br class="display-mobile" />
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    route: String,
    showAll: Boolean
  },
  methods: {
    async getCartoonByGenre() {
      let scroll = document.querySelector('#infinite-list')
      scroll.scrollTop = 0
      try {
        let api = `/cartoon/filter?limit=20&genre=` + this.route.replace('/', '')
        let listCartoons = await this.$axios.get(api, {})
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
</script>

<style></style>
