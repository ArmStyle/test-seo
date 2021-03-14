<template>
  <div class="nav-center">
    <v-app-bar :clipped-left="clipped" fixed app class="navbar">
      <!-- destop -->
      <div id="nav-logo" name="index" @click="setGenre('index')">
        <nuxt-link to="/" class="pa-0 logo-destop">
          <v-img
            :src="
              $vuetify.theme.dark
                ? '/logo_7toons_white.png'
                : '/logo_7toons_black.png'
            "
            height="35px"
            width="100px"
            @click="toTop()"
          ></v-img>
        </nuxt-link>
        <!-- moblibe -->
        <nuxt-link to="/" class="pa-0 logo-mobile" v-if="!showSearch">
          <v-img
            :src="
              $vuetify.theme.dark
                ? '/logo_7toons_white.png'
                : '/logo_7toons_black.png'
            "
            height="35px"
            width="100px"
            @click="toTop()"
          ></v-img>
        </nuxt-link>
      </div>
      <div id="nav-link" class="nav-links" @click="showSearch = false">
        <v-toolbar-title @click="setGenre('index')">
          <nuxt-link to="/" :class="$route.name === 'index' ? 'active' : ''" name="index">หน้าแรก</nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title @click="setGenre('manga')">
          <nuxt-link to="/manga" :class="$route.name === 'manga' ? 'active' : ''" name="manga">มังงะ</nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title @click="setGenre('novel')">
          <nuxt-link to="/novel" :class="$route.name === 'novel' ? 'active' : ''" name="novel">นิยาย</nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title @click="setGenre('doujinshi')">
          <nuxt-link
            to="/doujinshi"
            :class="$route.name === 'doujinshi' ? 'active' : ''"
            name="doujinshi"
          >โดจินชิ</nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title @click="setGenre('doujin')">
          <nuxt-link
            to="/doujin"
            :class="$route.name === 'doujin' ? 'active' : ''"
            name="doujin"
          >โดจิน</nuxt-link>
        </v-toolbar-title>
        <!-- <v-toolbar-title @click="goToRoute()">
          <nuxt-link> ลงการ์ตูนกับเรา </nuxt-link>
        </v-toolbar-title>-->
      </div>
      <v-spacer></v-spacer>
      <v-row v-if="showSearch" class="nav-search" jusitfy="right" align="center" no-gutters>
        <v-col cols="8" sm="10" class="mt-7" align="right">
          <v-autocomplete
            v-model="search"
            :items="$store.state.searchList"
            item-text="title"
            item-value="id"
            return-object
            auto-select-first
            autofocus
            small
            filled
            rounded
            solo-inverted
            append-outer="mdi-magnify"
            @input="onSearch()"
          ></v-autocomplete>
          <!-- <model-list-select
            :list="$store.state.searchList"
            v-model="searchObj"
            option-value="id"
            option-text="title"
            placeholder="select item"
            @searchchange="printSearchText"
          >
          </model-list-select>-->
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="2" sm="1" align="right">
          <v-icon style="margin: 0.5rem" @click="onSearch()">mdi-magnify</v-icon>
        </v-col>
        <v-col cols="2" sm="1" align="right">
          <v-icon
            style="margin: 0.5rem"
            @click="
              reset()
              showSearch = false
            "
          >mdi-close</v-icon>
        </v-col>
      </v-row>
      <div v-else style="min-width: 140px">
        <v-btn text @click="goToRoute()" class="display-destop">ลงการ์ตูนกับเรา</v-btn>
        <v-icon style="margin: 0.5rem" @click="setTheme()">mdi-weather-night</v-icon>
        <v-icon style="margin: 0.5rem" @click="focusSearch()">mdi-magnify</v-icon>
        <v-btn icon @click.stop="rightDrawer = !rightDrawer" class="display-mobile">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>

      <template
        v-slot:extension
        v-if="
          ['manga', 'novel', 'doujinshi', 'doujin'].includes($route.name) &&
          ['sm','md', 'lg', 'xl'].includes(this.$vuetify.breakpoint.name)
        "
      >
        <div id="nav-category" class="nav-category" v-if="$route.name == 'doujin'">
          <v-tabs centered show-arrows v-model="tab">
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              v-for="item in $store.state.listCategoryDoujin"
              :key="item"
              :value="item"
              @click="setCategory(item)"
            >{{ item }}</v-tab>
          </v-tabs>
        </div>

        <div id="nav-category" class="nav-category" v-else style="width: 100vw">
          <v-tabs fixed-tabs show-arrows v-model="tab">
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              v-for="item in $store.state.listCategory"
              :key="item.id"
              :value="item.name"
              @click="setCategory(item.name)"
            >{{ item.name }}</v-tab>
          </v-tabs>
        </div>
      </template>
    </v-app-bar>
    <div id="nav-drawer">
      <v-navigation-drawer v-model="rightDrawer" right temporary fixed>
        <!-- <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>-->

        <!-- <v-divider></v-divider> -->

        <v-list dense>
          <v-list-item v-for="item in navigationLists" :key="item.id">
            <v-list-item-icon class="pt-3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="navigation"
                @click="
              toTop()
              setGenre(item.name)
            "
              >
                <nuxt-link
                  :name="item.active"
                  :to="item.route"
                  :class="$route.name === item.active ? 'active' : ''"
                >{{ item.title }}</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <!-- มังงะ -->
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>มังงะ</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-divider></v-divider>

          <v-list-item
            v-for="(item, i) in $store.state.listCategory"
            :key="i"
            link
            @click="setGenre('manga'), setCategory(item.name), closeRightDrawer('/manga')"
          >
            <v-list-item-icon>-</v-list-item-icon>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- นิยาย -->
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>นิยาย</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-divider></v-divider>

          <v-list-item
            v-for="(item, i) in $store.state.listCategory"
            :key="i"
            link
            @click="setGenre('novel'), setCategory(item.name), closeRightDrawer('/novel')"
          >
            <v-list-item-icon>-</v-list-item-icon>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- โดจินชิ -->
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>โดจินชิ</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-divider></v-divider>

          <v-list-item
            v-for="(item, i) in $store.state.listCategory"
            :key="i"
            link
            @click="setGenre('doujinshi'), setCategory(item.name), closeRightDrawer('/doujinshi')"
          >
            <v-list-item-icon>-</v-list-item-icon>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- โดจิน -->
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>โดจิน</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-divider></v-divider>

          <v-list-item
            v-for="(item, i) in $store.state.listCategoryDoujin"
            :key="i"
            link
            @click="setGenre('doujin'), setCategory(item), closeRightDrawer('/doujin')"
          >
            <v-list-item-icon>-</v-list-item-icon>
            <v-list-item-title>{{item}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchObj: {
        value: '',
        text: '',
      },
      search: '',

      fab: false,
      navigationLists: [
        {
          icon: 'mdi-home',
          id: 1,
          title: 'หน้าแรก',
          route: '/',
          active: 'index',
          name: 'index',
        },
      ],
      cruds: [
        ['Create dsad;lksa;ldksa;ldksa;ld', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      clipped: false,
      rightDrawer: false,

      showSearch: false,
      message: '',
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
    }
  },

  computed: {
    ...mapState({
      genre: (state) => state.genre,
      category: (state) => state.category,
    }),
    tab: {
      get() {
        return this.$store.state.tab
      },
      set(newVal) {
        if (typeof newVal == 'number') {
          this.$store.commit('SET_TAB', newVal)
        } else {
          this.$store.commit(
            'SET_TAB',
            this.$store.state.listCategoryDoujin.indexOf(newVal)
          )
        }
      },
    },
  },
  mounted() {
    if (
      ['index', 'manga', 'novel', 'doujinshi', 'doujin'].includes(
        this.$route.name
      )
    ) {
      this.$store.commit('SET_GENRE', this.$route.name)
    } else {
      this.$store.commit('SET_GENRE', localStorage.getItem('genre'))
    }
    this.getListCartoon()
  },
  methods: {
    closeRightDrawer(route) {
      this.$router.replace({
        path: route,
      })
      this.rightDrawer = false
    },
    focusSearch() {
      this.showSearch = true
    },
    setGenre(genre) {
      this.$store.commit('SET_COUNT_LOADMORE', 0)
      this.$store.commit('SET_GENRE', genre)
      this.$store.commit('SET_CATEGORY', null)
      this.$store.commit('SET_TAB', 0)
      this.getListCartoon()
    },
    setCategory(category) {
      this.$store.commit('SET_COUNT_LOADMORE', 0)
      this.$store.commit('SET_CATEGORY', category)
      this.getListCartoon()
    },
    goToRoute() {
      window.open('https://www.facebook.com/7toons')
    },
    async getListCartoon() {
      this.toTop()
      let genre = this.$store.state.genre
      let category =
        this.$store.state.category != 'all' ? this.$store.state.category : null
      let listCartoons
      let api
      if (['title', 'title-ep'].includes(this.$route.name)) return
      if (genre == 'index') {
        try {
          //  มังงะ หน้าแรก
          api = `/cartoon/filter?limit=8&genre=manga`
          listCartoons = await this.$axios.get(api, {})
          this.$store.commit('SET_LIST_MANGA', listCartoons.data)

          //  นิยาย หน้าแรก
          api = `/cartoon/filter?limit=8&genre=novel`
          listCartoons = await this.$axios.get(api, {})
          this.$store.commit('SET_LIST_NOVEL', listCartoons.data)

          // โดจินชิ หน้าแรก
          api = `/cartoon/filter?limit=8&genre=doujinshi`
          listCartoons = await this.$axios.get(api, {})
          this.$store.commit('SET_LIST_DOUJINSHI', listCartoons.data)

          // โดจิน หน้าแรก
          api = `/cartoon/filter?limit=8&genre=doujin`
          listCartoons = await this.$axios.get(api, {})
          this.$store.commit('SET_LIST_DOUJIN', listCartoons.data)
        } catch (error) {}
      } else {
        try {
          let api =
            `/cartoon/filter?limit=20&` +
            (genre ? 'genre=' + genre : '') +
            (genre && category ? '&' : '') +
            (category ? 'category=' + category : '')

          listCartoons = await this.$axios.get(api, {})
          this.$store.commit('SET_LIST_CARTOONS', listCartoons.data)
          if (listCartoons.data.LastEvaluatedKey) {
            this.$store.commit(
              'SET_LASTEVALUATEDKEY',
              listCartoons.data.LastEvaluatedKey
            )
          } else {
            this.$store.commit('SET_LASTEVALUATEDKEY', null)
          }
        } catch (error) {}
      }
    },
    toTop() {
      let scroll = document.querySelector('#infinite-list')
      scroll.scrollTop = 0
    },
    onSearch() {
      let path = ''
      if (
        this.search.genre == 'doujin' &&
        this.search.amount_of_episodes == 1
      ) {
        path = '/' + this.search.id.replace('CT', '') + '/1'
      } else {
        path = '/' + this.search.id.replace('CT', '')
      }
      this.$router.replace({
        path: path,
      })

      this.showSearch = false
      this.search = null
    },
    reset() {
      this.searchObj = {}
    },
    printSearchText(search) {
      this.search = search
    },
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('theme', this.$vuetify.theme.dark)
    },
    sendMessage() {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
  },
}
</script>

<style>
.v-application--is-ltr .v-list-group--sub-group .v-list-group__header {
  padding-left: 16px;
}
.v-application--is-ltr
  .v-list-group--no-action.v-list-group--sub-group
  > .v-list-group__items
  > .v-list-item {
  padding-left: 32px;
}
</style>
