<template>
  <v-footer padless>
    <v-card flat tile class="text-center" width="100%">
      <v-card-text>
        <v-btn v-for="(item, i) in icons" :key="i" class="mx-4" icon>
          <v-icon size="24px" @click="goToRoute(item)">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text> @ 2021 <strong>7TOONS Inc.</strong> </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: 'mdi-facebook', path: 'https://www.facebook.com/7toons' },
      { icon: 'mdi-police-badge', path: '/Privacy' },
      { icon: 'mdi-information', path: '/About-Us' },
    ],
  }),
  methods: {
    toTop() {
      this.$vuetify.goTo(0)
    },
    goToRoute(data) {
      this.toTop()
      if (this.$route.path == data.path) return
      if (data.path == 'https://www.facebook.com/7toons') {
        window.open(data.path)
        return
      }
      this.$router.replace({
        path: data.path,
      })
    },
  },
}
</script>

<style></style>
