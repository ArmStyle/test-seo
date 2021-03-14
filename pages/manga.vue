<template>
  <v-layout wrap class="mt-9 mx-0">
    <v-flex xs12 sm12 md12 lg9 class="py-3">
      <MainCard
        :title="'มังงะ ' + myFunc.fotmatCategory($store.state.category) + ' อัพเดตล่าสุด !'"
      />
      <Loadmore />
    </v-flex>
    <v-flex xs12 sm12 md12 lg3 class="py-3">
      <SideCard />
    </v-flex>
  </v-layout>
</template>

<script>
import myFunc from '../js/myFunction.js'
export default {
  data() {
    return {
      myFunc
    }
  },
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
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'read cartoon '
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@7toons' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@7toons' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `มังงะ`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `อ่านมังงะแปลไทย และอื่นๆอีกมากมาย เว็บอ่านการ์ตูนออนไลน์ - 7toons`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `/icon.png`
        },
        {
          hid: 'description',
          name: 'description',
          content: `อ่านมังงะแปลไทย และอื่นๆอีกมากมาย เว็บอ่านการ์ตูนออนไลน์ - 7toons`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `/icon.png`
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `มังงะ`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `มังงะ`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `อ่านมังงะแปลไทย และอื่นๆอีกมากมาย เว็บอ่านการ์ตูนออนไลน์ - 7toons`
        }
      ]
    }
  }
}
</script>

<style></style>
