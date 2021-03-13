<template>
  <v-layout wrap class="mt-9 mx-0">
    <v-flex xs12 sm12 md12 lg9 class="py-3">มังงะ</v-flex>
    <v-flex xs12 sm12 md12 lg3 class="py-3"></v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: `มังงะ`,
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: `อ่านมังงะแปลไทย และ อื่นๆอีกมากมาย`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `มังงะ`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `อ่านมังงะแปลไทย และ อื่นๆอีกมากมาย`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `/2.png`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `test og:title`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `og description`
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

<style></style>
