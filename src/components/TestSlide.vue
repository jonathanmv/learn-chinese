<template lang="html">
  <v-flex class="text-xs-center">
    <h1 class="display-1">{{slide.title}}</h1>
    <TestChalkboard class="my-5" ref="board" @check="checkDrawing" :showCheck="showCheck" :showClear="showClear" :canDraw="canDraw" />
    <p class="blockquote px-0">{{slide.description}}</p>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'
import TestChalkboard from '@/components/TestChalkboard'

export default {
  props: ['slide'],
  components: { TestChalkboard },
  data: () => ({
    showCheck: true,
    showClear: false,
    canDraw: true
  }),
  watch: {
    slide () {
      this.reset()
    }
  },
  methods: {
    ...mapActions([
      'setCurrentDrawingValid'
    ]),
    checkDrawing (vector) {
      const isValid = this.$store.getters.isValidDrawing(vector)
      this.setCurrentDrawingValid(isValid)
      this.canDraw = this.showCheck = this.showClear = !isValid
    },
    reset () {
      this.setCurrentDrawingValid(false)
      this.$refs.board.clear()
      this.showCheck = true
      this.showClear = false
      this.canDraw = true
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style lang="css">
</style>
