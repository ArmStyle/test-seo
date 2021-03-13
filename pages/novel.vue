<template>
  <v-layout wrap class="mt-9 mx-0">
    <v-flex xs12 sm12 md12 lg9 class="py-3">นิยาย=b</v-flex>
    <v-flex xs12 sm12 md12 lg3 class="py-3"></v-flex>
  </v-layout>
</template>

<script>
// import myFunc from '../../js/myFunction.js'
export default {
  data() {
    return {
      // myFunc,
    }
  },
  head() {
    return {
      title: `นิยาย`,
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'read cartoon '
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@7toons' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@7toons' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `นิยาย`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `อ่านนิยายแปลไทย และอื่นๆอีกมากมาย เว็บอ่านการ์ตูนออนไลน์ - 7toons`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `/icon.png`
        },
        {
          hid: 'description',
          name: 'description',
          content: `อ่านนิยายแปลไทย และอื่นๆอีกมากมาย เว็บอ่านการ์ตูนออนไลน์ - 7toons`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `/icon.png`
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `นิยาย`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `นิยาย`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `อ่านนิยายแปลไทย และอื่นๆอีกมากมาย เว็บอ่านการ์ตูนออนไลน์ - 7toons`
        }
      ]
    }
  }
}
</script>

<style></style>
