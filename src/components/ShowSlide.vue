<template lang="html">
  <v-flex class="text-xs-center">
    <h1 class="display-1">{{slide.title}}</h1>
    <v-avatar tile size="80%" class="my-5">
      <img :src="slide.sampleUri"/>
    </v-avatar>
    <p class="blockquote px-0">{{slide.description}}</p>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['slide'],
  methods: {
    ...mapActions([
      'closeLesson'
    ])
  }
}
</script>

<style lang="css">
</style>
