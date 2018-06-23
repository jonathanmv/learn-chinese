<template lang="html">
  <div class="">
    <h1 class="display-4 text-center">{{slide.title}}</h1>
    <b-img fluid-grow :src="slide.sampleUri" />
    <p class="lead text-center">{{slide.description}}</p>
  </div>
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
