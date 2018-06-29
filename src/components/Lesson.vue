<template lang="html">
  <v-layout row wrap v-if="currentSlide">
    <v-flex>
      <v-layout row justify-space-between>
        <v-flex>
          <v-progress-circular :value="slidesProgress" color="deep-orange"></v-progress-circular>
        </v-flex>
        <v-flex class="text-xs-right">
          <v-btn outline icon color="deep-orange" @click="closeLesson">
            <v-icon>x</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <ShowSlide v-if="currentSlide.type === 'show'" :slide="currentSlide" />
      <TestSlide v-if="currentSlide.type === 'test'" :slide="currentSlide" />
    </v-flex>
    <v-flex>
      <v-layout row justify-space-between>
        <v-flex>
          <v-btn v-if="canPreviousSlide" @click="previousSlide">&lt;</v-btn>
        </v-flex>
        <v-flex class="text-xs-right">
          <v-btn v-if="canNextSlide" @click="nextSlide">&gt;</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
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
