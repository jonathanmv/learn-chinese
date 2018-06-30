<template lang="html">
  <v-layout row wrap v-if="currentSlide">
    <v-flex xs10>
      <v-progress-linear :value="slidesProgress" class=""/>
    </v-flex>
    <v-flex xs2 class="text-xs-right">
      <v-btn small icon @click="closeLesson">
        <v-icon>close</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12 class="pt-3">
      <ShowSlide v-if="currentSlide.type === 'show'" :slide="currentSlide" />
      <TestSlide v-if="currentSlide.type === 'test'" :slide="currentSlide" />
    </v-flex>
    <v-footer height="auto" absolute>
      <v-layout row>
        <v-flex>
          <v-btn v-if="canPreviousSlide" flat @click="previousSlide">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex class="text-xs-right">
          <v-btn v-if="canNextSlide" depressed @click="nextSlide" color="success">
            <v-icon>arrow_forward</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-footer>
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
