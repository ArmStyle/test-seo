<template>
  <v-container class="pa-0 py-3">
    <v-layout class="justify-center">
      <v-card style="padding: 0; width:768px" class="text-center">
        <h2 @click="goToRoute('https://www.facebook.com/7toons')" style="cursor: pointer;">ติดต่อโฆษณา 7toons</h2>
        <h2>หรือ seven2channel@gmail.com</h2>
      </v-card>
    </v-layout>
    <v-layout class="justify-center">
      <v-col
        xs="12"
        justify="center"
        align="center"
        style="padding: 0; max-width: 768px"
        class="no-radius"
      >
        <v-img max-width="768" src="/easygame1668.gif" alt="easygame1668" @click="goToRoute('https://www.easygame1688.com')" style="cursor: pointer"></v-img>
      </v-col>
    </v-layout>
    <v-layout class="justify-center">
      <v-col
        xs="12"
        justify="center"
        align="center"
        style="padding: 0; max-width: 768px"
        class="no-radius"
      >
        <v-img max-width="768" src="/ppgame899.gif" alt="ppgame899" @click="goToRoute('https://www.pggame899.com')" style="cursor: pointer"></v-img>
      </v-col>
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
  methods: {
    goToRoute(route) {
      window.open(route)
    },
  },
}
</script>

<style scoped>
.v-sheet.v-card {
  border-radius: 12px;
}
</style>
