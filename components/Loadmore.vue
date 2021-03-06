<template>
  <v-container class="px-4">
    <div
      id="loadmore"
      :class="$store.state.listCartoons.length >= 20 && $store.state.countLoadmore != -1 ? 'display-show' : 'display-none'"
    >
      <v-btn large block @click="loadMore()" elevation="3">Load more</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      category: null,
    }
  },
  methods: {
    async loadMore() {
      /** This is only for this demo, you could
       * replace the following with code to hit
       * an endpoint to pull in more data. **/
      this.$store.commit(
        'SET_COUNT_LOADMORE',
        this.$store.state.countLoadmore + 1
      )

      let api
      let listCartoons
      try {
        api =
          `/cartoon/filter?limit=20&` +
          (this.$store.state.genre !== 'index'
            ? `&genre=` + this.$store.state.genre
            : ``) +
          (this.$store.state.category
            ? `&category=` + this.$store.state.category
            : ``) +
          `&skip=` +
          this.$store.state.countLoadmore * 20
        listCartoons = await this.$axios.get(api, {})

        for (let i = 0; i < listCartoons.data.length; i++) {
          this.$store.commit('ADD_LIST_CARTOONS', listCartoons.data[i])
        }
      } catch (error) {}

      if (listCartoons.data.length < 20 || listCartoons.data.length == 0) {
        this.$store.commit('SET_COUNT_LOADMORE', -1)
      }
    },
  },
}
</script>

<style></style>
