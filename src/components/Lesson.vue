<template lang="html">
  <div v-if="currentSlide">
    <b-button-close class="" @click="closeLesson"></b-button-close>
    <b-progress :value="slidesProgress" class="m-3"></b-progress>
    <ShowSlide v-if="currentSlide.type === 'show'" :slide="currentSlide" />
    <TestSlide v-if="currentSlide.type === 'test'" :slide="currentSlide" />
    <!-- <SlidesNavigation :slides="" /> -->
    <b-button v-if="canPreviousSlide" @click="previousSlide">&lt;</b-button>
    <b-button v-if="canNextSlide" @click="nextSlide">&gt;</b-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShowSlide from '@/components/ShowSlide'
import TestSlide from '@/components/TestSlide'

export default {
  components: { ShowSlide, TestSlide },
  computed: {
    ...mapGetters([
      'currentSlide',
      'slidesProgress',
      'canPreviousSlide',
      'canNextSlide'
    ])
  },
  methods: {
    ...mapActions([
      'closeLesson',
      'nextSlide',
      'previousSlide'
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
