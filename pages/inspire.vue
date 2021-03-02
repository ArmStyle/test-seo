<template>
  <v-row>
    <v-col class="text-center">
      <v-text-field v-model="text"></v-text-field>
      <nuxt-link :to="`/cartoon/${text}`">totest</nuxt-link>
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      text: '1613749319'
    }
  },
  head() {
    return {
      title: `inspire | test`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `description - inspire`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `Crypto Ticker - inspire`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Crypto Ticker - inspire`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `description - inspire`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Crypto Ticker - inspire`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `description - inspire`
        }
      ]
    }
  }
}
</script>
