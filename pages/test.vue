<template>
  <v-row>
    <v-col class="text-center">
      test
      <nuxt-link :to="`/cartoon/1613749319`">totest</nuxt-link>
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
  head() {
    return {
      title: `test`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `test description`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `test twitter`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `test twitter`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `test twitter description`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `test og`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `test og description`
        }
      ]
    }
  }
}
</script>
