<template>
  <v-row>
    <v-col class="text-center">{{ exchange.title}} test</v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    console.log('params', params)
    const { data } = await $axios.get(`/cartoon/CT` + params.key)
    console.log(data.thumbnail)
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
          content: `description`
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
          content: `description`
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