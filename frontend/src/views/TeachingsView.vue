<template>
  <v-container class="mt-6">
    <div v-for="teaching in teachings" :key="teaching.session">
      <teaching-card :session="teaching.session" :courses="teaching.courses"></teaching-card>
    </div>
  </v-container>
</template>

<script>
import TeachingCard from '../components/TeachingCard'
import teachingData from "../data/teaching/teachingData.json"

export default {
  name: 'Teaching',

  components: {
    TeachingCard
  },
  data: () => ({
    teachings: teachingData,
  })
}
</script>
