<template>
  <div>
    <div>
      <div id="session" class="text-h6 font-weight-bold">{{ session }}</div>
      <v-divider></v-divider>

      <div v-for="course in courses" :key="course.title">
        <v-list-item link :href="course.link" :class="checkCourseLinkExists(course.link) != '' ? 'indigo--text' : ''"
          :disabled="!(checkCourseLinkExists(course.link))">
          <v-list-item-content>
            <v-list-item-title><v-icon color="black">mdi-square-small</v-icon>{{ course.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </div>
    <div class="my-6"></div>
  </div>
</template>

<script>
export default {
  name: 'TeachingCard',

  data: () => ({
    publicPath: process.env.BASE_URL
  }),
  props: ['session', 'courses'],
  methods: {
    checkCourseLinkExists(link) {
      return link != '' && link != 'undefined' && link != null
    }
  }
}
</script>
