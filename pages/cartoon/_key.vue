<template>
  <v-row>
    <v-col class="text-center">{{ exchange.title}}</v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    console.log('params', params)
    const { data } = await $axios.get(`/cartoon/CT` + params.key)
    return {
      exchange: data
    }
  },
  head() {
    return {
      title: `${this.exchange.title} | test`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.exchange.status
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `Crypto Ticker - ${this.exchange.title}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Crypto Ticker - ${this.exchange.title}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.exchange.status
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Crypto Ticker - ${this.exchange.title}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.exchange.status
        }
      ]
    }
  }
}
</script>

<style>
</style>