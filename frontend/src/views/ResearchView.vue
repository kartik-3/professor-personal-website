<template>
  <v-container class="mt-6">
    <div v-for="research in researches" :key="research.title">
      <research-card :title="research.title" :text="research.text"></research-card>
    </div>
  </v-container>
</template>

<script>
import ResearchCard from '../components/ResearchCard'
import researchData from "../data/research/researchData.json"

export default {
  name: 'Research',

  components: {
    ResearchCard
  },
  data: () => ({
    researches: researchData,
  })
}
</script>
