<template>
  <v-container class="pa-0 py-3">
    <!-- <v-layout class="justify-center">
      <v-col
        xs="12"
        justify="center"
        align="center"
        style="padding: 0; max-width: 768px"
        class="no-radius"
      >
        <v-img max-width="768" src="/ads.png" @click="goToRoute()" style="cursor: pointer"></v-img>
      </v-col>
    </v-layout>-->
    <v-layout class="justify-center">
      <v-card style="padding: 0; width:1368px" class="text-center">
        <h2 @click="goToRoute()" style="cursor: pointer;">ติดต่อโฆษณา 7toons</h2>
        <h2>หรือ seven2channel@gmail.com</h2>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToRoute() {
      window.open('https://www.facebook.com/7toons')
    },
  },
}
</script>

<style scoped>
.v-sheet.v-card {
  border-radius: 12px;
}
</style>
