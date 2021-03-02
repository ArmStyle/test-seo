<template>
  <v-row>
    <v-col class="text-center">id : {{exchange.id}}</v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    console.log('data', data)
    return {
      exchange: data
    }
  },
  head() {
    return {
      title: `${this.exchange.id} ${this.exchange.title} | test`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.exchange.title} description`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `${this.exchange.title} | twitter:card`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.exchange.title} | twitter:title`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `${this.exchange.title} test222`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.exchange.title} | og:title`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.exchange.title} test111`
        },
      ]
    }
  }
}
</script>

<style>
</style>