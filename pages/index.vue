<template>
  <v-layout wrap class="mt-9 mx-0">
    <v-flex xs12 sm12 md12 lg9 class="py-3">
      <HomeCard
        v-if="$store.state.listManga.length != 0"
        title="มังงะอัพเดตล่าสุด !"
        :listCartoons="$store.state.listManga"
        :showAll="true"
        route="/manga"
      />
      <HomeCard
        v-if="$store.state.listNovel.length != 0"
        title="นิยายอัพเดตล่าสุด !"
        :listCartoons="$store.state.listNovel"
        :showAll="true"
        route="/novel"
      />
      <HomeCard
        v-if="$store.state.listDoujinshi.length != 0"
        title="โดจินชิอัพเดตล่าสุด !"
        :listCartoons="$store.state.listDoujinshi"
        :showAll="true"
        route="/doujinshi"
      />
      <HomeCard
        v-if="$store.state.listDoujin.length != 0"
        title="โดจินอัพเดตล่าสุด !"
        :listCartoons="$store.state.listDoujin"
        :showAll="true"
        route="/doujin"
      />
      <!-- <Loadmore /> -->
    </v-flex>
    <v-flex xs12 sm12 md12 lg3 class="py-3">
      <SideCard />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: `อ่านการ์ตูนออนไลน์ - 7toons`,
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'read cartoon ',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@7toons' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@7toons' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `อ่านการ์ตูนออนไลน์ `,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `อ่านการ์ตูนแปลไทย 24 ชั่วโมง เว็บอ่านการ์ตูนมีทุกประเภท ผลงานแปล Manga (ญี่ปุ่น), Manhwa (เกาหลี), จีนและ Comic (ตะวันตก) , Doujin (R18+) • ผลงานวาด Doujin (ศัพท์ญี่ปุ่น) ทุกหมวดหมู่ อัพเดทการ์ตูนทุกวัน เว็บอ่านการ์ตูนออนไลน์.`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `/icon2.png`,
        },
        {
          hid: 'description',
          name: 'description',
          content: `อ่านการ์ตูนแปลไทย 24 ชั่วโมง เว็บอ่านการ์ตูนมีทุกประเภท ผลงานแปล Manga (ญี่ปุ่น), Manhwa (เกาหลี), จีนและ Comic (ตะวันตก) , Doujin (R18+) • ผลงานวาด Doujin (ศัพท์ญี่ปุ่น) ทุกหมวดหมู่ อัพเดทการ์ตูนทุกวัน เว็บอ่านการ์ตูนออนไลน์.`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `/icon2.png`,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `อ่านการ์ตูนออนไลน์ `,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `อ่านการ์ตูนออนไลน์ `,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `อ่านการ์ตูนแปลไทย 24 ชั่วโมง เว็บอ่านการ์ตูนมีทุกประเภท ผลงานแปล Manga (ญี่ปุ่น), Manhwa (เกาหลี), จีนและ Comic (ตะวันตก) , Doujin (R18+) • ผลงานวาด Doujin (ศัพท์ญี่ปุ่น) ทุกหมวดหมู่ อัพเดทการ์ตูนทุกวัน เว็บอ่านการ์ตูนออนไลน์.`,
        },
      ],
    }
  },
}
</script>
