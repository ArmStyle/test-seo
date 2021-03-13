<template>
  <v-row>
    <v-col class="text-center">test 2</v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/cartoon/CT1613749319`)
    return {
      exchange: data
    }
  },
  head() {
    return {
      title: `${this.exchange.title} | title`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `description`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `${this.exchange.title} | 7toons`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.exchange.title} | 7toons`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `twitter twitter twitter twitter twitter twitter twitter twitter description`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.exchange.thumbnail
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.exchange.title} | og:title`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `ogogogogogogogogogogogogogogogogogogogogogogogog description`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://yt3.ggpht.com/ytc/AAUvwngy0NltT27fyj2nsoYFORfbmNavo7x0iN1l_PGs3w=s900-c-k-c0x00ffffff-no-rj`
        }
      ]
    }
  }
}
</script>

<style>
</style>