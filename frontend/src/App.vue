<template>
  <v-app>
    <v-app-bar app clipped-left class="blue darken-1">
      <p class="ml-12 text-h4 font-weight-bold mt-4 blue--text text--lighten-5">Rohini K. Srihari</p>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover permanent app class="blue lighten-5">
      <v-list nav dense class="pb-0">
        <v-list-item class="" style="padding: 0px">
          <v-list-item-avatar class="mx-0">
            <v-img :src="`${publicPath}images/rohini_srihari.jpeg`"></v-img>
          </v-list-item-avatar>
          <span>
            <v-list-item class="ml-4">
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Rohini K. Srihari
                </v-list-item-title>
                <v-list-item-subtitle>rohini@buffalo.edu</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </span>
        </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
        <v-list-item link @click="goToHome" >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToTeaching" >
          <v-list-item-icon>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Teaching</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToResearch" >
          <v-list-item-icon>
            <v-icon>mdi-book-education</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Research Areas</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToPublication" >
          <v-list-item-icon>
            <v-icon>mdi-bookshelf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Publications</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToAISocialGood" >
          <v-list-item-icon>
            <v-icon>mdi-charity</v-icon>
          </v-list-item-icon>
          <v-list-item-title>AI for Social Good</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToPresentation" >
          <v-list-item-icon>
            <v-icon>mdi-newspaper-variant-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Presentations</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToMedia" >
          <v-list-item-icon>
            <v-icon>mdi-camera</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Media</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="padding-left: 0px !important;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { routerPush } from './utils/constants';

export default {
  name: 'App',

  data: () => ({
    publicPath: process.env.BASE_URL
  }),
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    goToHome() {
      routerPush(this, "Home")
    },
    goToTeaching() {
      routerPush(this, "Teaching")
    },
    goToResearch() {
      routerPush(this, "Research")
    },
    goToPublication() {
      routerPush(this, "Publication")
    },
    goToAISocialGood() {
      routerPush(this, "AISocialGood")
    },
    goToPresentation() {
      routerPush(this, "Presentation")
    },
    goToMedia() {
      routerPush(this, "Media")
    },
  },
  mounted() {
  }
};
</script>
