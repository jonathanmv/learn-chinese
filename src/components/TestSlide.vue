<template lang="html">
  <v-flex class="text-xs-center">
    <h1 class="display-1">{{slide.title}}</h1>
    <TestChalkboard ref="board" @check="checkDrawing" />
    <p class="blockquote">{{slide.description}}</p>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'
import TestChalkboard from '@/components/TestChalkboard'

export default {
  props: ['slide'],
  components: { TestChalkboard },
  methods: {
    ...mapActions([
      'setCurrentDrawingValid'
    ]),
    checkDrawing (vector) {
      const isValid = this.$store.getters.isValidDrawing(vector)
      this.setCurrentDrawingValid(isValid)
    },
    reset () {
      this.setCurrentDrawingValid(false)
      this.$refs.board.clear()
    }
  },
  mounted () {
    this.reset()
  },
  updated () {
    this.reset()
  }
}
</script>

<style lang="css">
</style>
