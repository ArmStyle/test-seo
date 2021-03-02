<template>
  <v-row>
    <v-col class="text-center">test 3</v-col>
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
      title: `test 3 ${this.exchange.title} | title`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `test 3 description`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `test 3 ${this.exchange.title} | 7toons`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `test 3 ${this.exchange.title} | 7toons`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `test 3 description`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.exchange.thumbnail
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `test 3 ${this.exchange.title} | og:title`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `test 3 description`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.exchange.thumbnail
        }
      ]
    }
  }
}
</script>

<style>
</style>