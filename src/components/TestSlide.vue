<template lang="html">
  <div class="">
    <h1 class="display-4 text-center">{{slide.title}}</h1>
    <TestChalkboard ref="board" @check="checkDrawing" />
    <p class="lead text-center">{{slide.description}}</p>
  </div>
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
