<template>
  <v-row>
    <v-col class="text-center">
      <v-text-field v-model="text"></v-text-field>
      <nuxt-link :to="`/user/${text}`">user {{ text }}</nuxt-link>
      <nuxt-link :to="`/test`">to test</nuxt-link>
      <nuxt-link :to="`/test2`">to test2</nuxt-link>
      <nuxt-link :to="`/manga`">manga</nuxt-link>
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
      text: '1'
    }
  },
  head() {
    return {
      title: `ผปแปผแปผแปผแปผแ`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `กกกกกกกกกกกกกกกกกกกกกกก`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `twittertwittertwittertwitter`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `twitter:title`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `twitter:description`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `/1.png`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `og:title`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `og:description`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `/2.png`
        }
      ]
    }
  }
}
</script>
