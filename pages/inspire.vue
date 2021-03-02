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
      title: `aaaaaaaaaaaaaaa`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `ssssssssssssss`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `ddddddddddddddddddd`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `fffffffffffffffffffff`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `gggggggggggggggggggggggg`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `hhhhhhhhhhhhhhhhhhh`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `jjjjjjjjjjjjjjjjjjjj`
        }
      ]
    }
  }
}
</script>
